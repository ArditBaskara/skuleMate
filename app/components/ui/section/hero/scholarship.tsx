import Image from 'next/image';

const ScholarshipListSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Daftar Beasiswa
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image
              src="/images.jpeg"
              alt="Beasiswa Pendidikan Unggul"
              width={500}
              height={300}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Beasiswa Pendidikan Unggul
              </h3>
              <p className="text-gray-600 mb-4">
                Beasiswa ini ditujukan bagi mahasiswa yang memiliki prestasi
                akademik tinggi di tingkat universitas. Menyediakan bantuan
                biaya kuliah penuh serta tunjangan biaya hidup untuk mendukung
                studi mereka.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image
              src="/images (1).jpeg"
              alt="Beasiswa Kepemimpinan Muda"
              width={500}
              height={300}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Beasiswa Kepemimpinan Muda
              </h3>
              <p className="text-gray-600 mb-4">
                Beasiswa yang ditujukan bagi mahasiswa yang aktif dalam kegiatan
                organisasi dan menunjukkan potensi kepemimpinan. Penerima
                beasiswa akan mendapatkan fasilitas untuk mengikuti pelatihan
                kepemimpinan serta magang di perusahaan besar.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image
              src="/images (2).jpeg"
              alt="Beasiswa Prestasi Global"
              width={500}
              height={300}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Beasiswa Prestasi Global
              </h3>
              <p className="text-gray-600 mb-4">
                Beasiswa untuk mahasiswa yang ingin melanjutkan studi di luar
                negeri. Beasiswa ini meliputi biaya perjalanan, biaya kuliah,
                serta akomodasi selama masa studi di universitas mitra. Cakupan:
                Biaya kuliah, biaya perjalanan, akomodasi, asuransi kesehatan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScholarshipListSection;
