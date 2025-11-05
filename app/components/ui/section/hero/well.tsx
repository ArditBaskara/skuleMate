import Image from 'next/image';

const WellbeingSection = () => {
  return (
    <section className="py-20 bg-gray-100 dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Wellbeing starts with welldoing
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
            Setiap langkah menuju kesuksesan dimulai dengan peluang yang tepat.
            Kami percaya bahwa setiap individu memiliki potensi luar biasa,
            dan kami berkomitmen menyediakan beasiswa yang sesuai dengan
            kebutuhan serta kemampuan pribadi Anda.
          </p>
          <a
            href="#search-scholarship"
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white py-3 px-6 rounded-full text-lg transition duration-300"
          >
            Cari Beasiswa
          </a>
        </div>

        {/* Image Section */}
        <div className="mb-16">
          <Image
            src="/bawah.jpg"
            alt="Kelompok Mahasiswa"
            width={1200}
            height={600}
            className="w-full h-96 object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
          {/* Card 1 */}
          <div className="bg-white dark:bg-neutral-800 p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300">
            <div className="mb-4 flex justify-center">
              <Image
                src="/personalisasi.png"
                alt="Personalisasi Icon"
                width={50}
                height={50}
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              Personalisasi
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Sistem kami menyediakan rekomendasi yang disesuaikan dengan
              profil dan preferensi Anda.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white dark:bg-neutral-800 p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300">
            <div className="mb-4 flex justify-center">
              <Image
                src="/teknologi.png"
                alt="Teknologi Icon"
                width={50}
                height={50}
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              Teknologi
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Dengan teknologi canggih, kami memberikan rekomendasi yang akurat
              dan relevan berdasarkan kebutuhan Anda.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white dark:bg-neutral-800 p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300">
            <div className="mb-4 flex justify-center">
              <Image
                src="/relevan.png"
                alt="Relevansi Icon"
                width={50}
                height={50}
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              Relevansi
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Kami pastikan beasiswa yang kami tawarkan sesuai dengan tujuan
              pendidikan dan perkembangan karir Anda.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WellbeingSection;
