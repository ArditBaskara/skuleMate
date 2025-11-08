'use client';
import { useState, useEffect } from 'react';
import { Button } from '../../button';
import { Input } from '../../input';
import { Badge } from '../../badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../select';
import { ArrowLeft, Search, Calendar, DollarSign, MapPin, ExternalLink, Filter, TrendingUp } from 'lucide-react';
import Link from 'next/link';

interface Scholarship {
  id: number;
  name: string;
  provider: string;
  amount: string;
  deadline: string;
  field: string;
  location: string;
  matchScore: number;
  description: string;
  requirements: string[];
  link: string;
}

interface ScholarshipsProps {
  formData: { name: string; description: string; cv: File | null };
  isCvUpload: boolean;
}

const Scholarships = ({ formData, isCvUpload }: ScholarshipsProps) => {
  const [scholarships, setScholarships] = useState<Scholarship[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [fieldFilter, setFieldFilter] = useState('all');
  const [sortBy, setSortBy] = useState('match');
  const [filteredScholarships, setFilteredScholarships] = useState<Scholarship[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchScholarships = async () => {
      setLoading(true);
      setError(null); // Reset error state before new fetch
      try {
        let data: any = null;

        if (isCvUpload && formData.cv) {
          const form = new FormData();
          form.append('file', formData.cv);

          const res = await fetch('/api/detectCV', {
            method: 'POST',
            body: form,
          });

          if (res.ok) {
            data = await res.json();
            console.log('Hasil dari /api/detectCV:', data);
          } else {
            throw new Error('CV detection failed');
          }
        } else if (!isCvUpload && formData.description) {
          const res = await fetch('/api/detectText', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text_desc: formData.description }),
          });

          if (res.ok) {
            data = await res.json();
            console.log('Hasil dari /api/detectText:', data);
          } else {
            throw new Error('Text detection failed');
          }
        }

        if (data?.recommendations?.length) {
          // Assuming the backend returns data in the new Scholarship interface format
          setScholarships(data.recommendations);
        } else {
          console.warn('Tidak ada data rekomendasi ditemukan.');
          setError('Tidak ada beasiswa yang ditemukan.');
        }
      } catch (err) {
        console.error('Gagal mengambil data rekomendasi:', err);
        setError('Gagal mengambil data beasiswa. Silakan coba lagi.');
      } finally {
        setLoading(false);
      }
    };

    if (formData.name && (formData.description || formData.cv)) {
      fetchScholarships();
    }
  }, [formData, isCvUpload]);

  useEffect(() => {
    const filtered = scholarships
      .filter((scholarship) => {
        const matchesSearch =
          scholarship.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          scholarship.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesField = fieldFilter === 'all' || scholarship.field === fieldFilter;
        return matchesSearch && matchesField;
      })
      .sort((a, b) => {
        if (sortBy === 'match') return b.matchScore - a.matchScore;
        if (sortBy === 'amount')
          return (
            parseInt(b.amount.replace(/\D/g, '')) -
            parseInt(a.amount.replace(/\D/g, ''))
          );
        if (sortBy === 'deadline')
          return new Date(a.deadline).getTime() - new Date(b.deadline).getTime();
        return 0;
      });
    setFilteredScholarships(filtered);
  }, [searchQuery, fieldFilter, sortBy, scholarships]);

  const getMatchColor = (score: number) => {
    if (score >= 90) return 'text-accent';
    if (score >= 80) return 'text-primary';
    return 'text-muted-foreground';
  };

  const getMatchBadgeVariant = (score: number): 'default' | 'secondary' | 'outline' => {
    if (score >= 90) return 'default';
    if (score >= 80) return 'secondary';
    return 'outline';
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <Link href="/" className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors">
            <ArrowLeft className="h-5 w-5" />
            <span className="font-medium">Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        {/* Title Section */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
              <TrendingUp className="h-6 w-6 text-accent" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                Your Matched Scholarships
              </h1>
              <p className="text-muted-foreground mt-1">
                Found {filteredScholarships.length} scholarships tailored to your profile
              </p>
            </div>
          </div>

          {/* Profile Summary Card */}
          <Card className="bg-gradient-accent border-accent/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 rounded-full bg-background/50 backdrop-blur-sm flex items-center justify-center">
                    <span className="text-2xl">🎓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg">Profile Analyzed</h3>
                    <p className="text-sm text-muted-foreground">AI matched based on your qualifications</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/describe-yourself">Update Profile</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search scholarships..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-3">
            <Select value={fieldFilter} onValueChange={setFieldFilter}>
              <SelectTrigger className="w-[180px]">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Field of Study" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Fields</SelectItem>
                <SelectItem value="Computer Science">Computer Science</SelectItem>
                <SelectItem value="Engineering">Engineering</SelectItem>
                <SelectItem value="Science">Science</SelectItem>
                <SelectItem value="Business">Business</SelectItem>
                <SelectItem value="Research">Research</SelectItem>
              </SelectContent>
            </Select>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[160px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="match">Best Match</SelectItem>
                <SelectItem value="amount">Highest Amount</SelectItem>
                <SelectItem value="deadline">Deadline</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Scholarship Cards */}
        <div className="grid gap-6">
          {loading ? (
            <p className="text-center col-span-full">Memuat beasiswa...</p>
          ) : error ? (
            <p className="text-center text-red-500 col-span-full">{error}</p>
          ) : filteredScholarships.length === 0 ? (
            <div className="text-center py-16 col-span-full">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">No scholarships found</h3>
              <p className="text-muted-foreground mb-6">Try adjusting your filters or search query</p>
              <Button variant="outline" onClick={() => { setSearchQuery(''); setFieldFilter('all'); }}>
                Clear Filters
              </Button>
            </div>
          ) : (
            filteredScholarships.map((scholarship) => (
              <Card key={scholarship.id} className="hover:shadow-lg transition-shadow border-border/50">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle className="text-xl">{scholarship.name}</CardTitle>
                        <Badge variant={getMatchBadgeVariant(scholarship.matchScore)} className="gap-1">
                          <TrendingUp className="h-3 w-3" />
                          <span className={getMatchColor(scholarship.matchScore)}>
                            {scholarship.matchScore}% Match
                          </span>
                        </Badge>
                      </div>
                      <CardDescription className="text-base">
                        {scholarship.provider}
                      </CardDescription>
                    </div>
                    <Button variant="hero" className="gap-2" asChild>
                      <a href={scholarship.link} target="_blank" rel="noopener noreferrer">
                        Apply Now
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{scholarship.description}</p>

                  {/* Key Info */}
                  <div className="flex flex-wrap gap-4 py-3 border-y border-border/50">
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-5 w-5 text-accent" />
                      <span className="font-semibold text-foreground">{scholarship.amount}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-primary" />
                      <span className="text-sm text-muted-foreground">
                        Due: {new Date(scholarship.deadline).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{scholarship.location}</span>
                    </div>
                  </div>

                  {/* Requirements */}
                  <div>
                    <h4 className="font-semibold text-sm text-foreground mb-2">Requirements:</h4>
                    <div className="flex flex-wrap gap-2">
                      {scholarship.requirements.map((req, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {req}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </main>
    </div>
  );
};

export default Scholarships;
