import Image from 'next/image';

const ScholarshipListSection = () => {
  return (
    <section className="py-20 bg-gray-100 dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
          Daftar Beasiswa
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Card 1 */}
          <div className="bg-white dark:bg-neutral-800 shadow-xl rounded-xl overflow-hidden hover:shadow-2xl transition duration-300">
            <Image
              src="/images.jpeg"
              alt="Beasiswa Pendidikan Unggul"
              width={500}
              height={300}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                Beasiswa Pendidikan Unggul
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                Untuk mahasiswa berprestasi akademik tinggi, dengan bantuan biaya kuliah penuh dan tunjangan hidup selama masa studi.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white dark:bg-neutral-800 shadow-xl rounded-xl overflow-hidden hover:shadow-2xl transition duration-300">
            <Image
              src="/images (1).jpeg"
              alt="Beasiswa Kepemimpinan Muda"
              width={500}
              height={300}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                Beasiswa Kepemimpinan Muda
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                Untuk mahasiswa aktif organisasi dengan potensi kepemimpinan. Tersedia pelatihan dan kesempatan magang eksklusif.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white dark:bg-neutral-800 shadow-xl rounded-xl overflow-hidden hover:shadow-2xl transition duration-300">
            <Image
              src="/images (2).jpeg"
              alt="Beasiswa Prestasi Global"
              width={500}
              height={300}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                Beasiswa Prestasi Global
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                Untuk studi ke luar negeri, mencakup biaya kuliah, perjalanan, akomodasi, dan asuransi di universitas mitra internasional.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScholarshipListSection;
