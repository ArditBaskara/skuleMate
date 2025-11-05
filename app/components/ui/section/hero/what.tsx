import Image from 'next/image';

const ScholarshipSection = () => {
  return (
    <section className="py-20 bg-gray-100 dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6 leading-tight">
              Mencapai Impian Pendidikanmu
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              Kami membantu kamu menemukan beasiswa yang sesuai dengan jurusan,
              lokasi, dan kualifikasi yang kamu miliki. Mulai perjalanan
              pendidikanmu dengan beasiswa yang tepat.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Jangan biarkan biaya pendidikan menghalangi impianmu. Temukan
              beasiswa yang bisa membantumu meraih tujuan pendidikanmu.
            </p>
          </div>

          <div className="w-full">
            <Image
              src="/222.png"
              alt="Ilustrasi mahasiswa mengejar beasiswa"
              width={600}
              height={400}
              className="rounded-xl shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Section 2 */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6 leading-tight">
              Raih Beasiswa Terbaik Sesuai dengan Kualifikasi Kamu
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Skulamate menggunakan teknologi canggih untuk menyaring beasiswa
              berdasarkan jurusan, lokasi, dan tingkat pendidikan. Dapatkan
              rekomendasi yang disesuaikan dengan kebutuhan dan keinginan kamu.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="text-xl font-semibold text-gray-800 dark:text-white w-40 shrink-0">
                  Personalisasi Tinggi:
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Rekomendasi disesuaikan dengan profil kamu, mulai dari jurusan, lokasi yang diinginkan, hingga prestasi akademik.
                </p>
              </div>
              <div className="flex gap-4 items-start">
                <div className="text-xl font-semibold text-gray-800 dark:text-white w-40 shrink-0">
                  Sistem Cerdas:
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Teknologi NLP kami memungkinkan pemahaman konteks yang lebih baik sehingga hasil pencarian lebih akurat dan relevan.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full">
            <Image
              src="/what.png"
              alt="Ilustrasi rekomendasi beasiswa"
              width={600}
              height={400}
              className="rounded-xl shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScholarshipSection;
