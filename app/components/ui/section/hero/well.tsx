import Image from 'next/image';

const WellbeingSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        {/* Top Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Wellbeing starts with welldoing
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Setiap langkah menuju kesuksesan dimulai dengan peluang yang tepat.
            Kami percaya bahwa setiap individu memiliki potensi yang luar biasa,
            dan kami berkomitmen untuk menyediakan beasiswa yang sesuai dengan
            kebutuhan dan kemampuan pribadi Anda.
          </p>
          <a
            href="#search-scholarship"
            className="bg-blue-500 text-white py-2 px-4 rounded-full text-lg"
          >
            Cari Beasiswa
          </a>
        </div>

        {/* Image Section */}
        <div className="mb-12">
          <Image
            src="/bawah.jpg"
            alt="Students Group"
            width={1200}
            height={600}
            className="w-full h-96 object-cover rounded-lg"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div className="bg-pink-100 p-8 rounded-lg shadow-lg">
            <div className="mb-4 ">
              <Image
                src="/personalisasi.png"
                alt="Personalization Icon"
                width={50}
                height={50}
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              Personalisasi
            </h3>
            <p className="text-gray-600 mt-2">
              Sistem kami menyediakan rekomendasi yang sangat disesuaikan dengan
              profil dan preferensi Anda.
            </p>
          </div>

          <div className="bg-pink-100 p-8 rounded-lg shadow-lg">
            <div className="mb-4">
              <Image
                src="/teknologi.png"
                alt="Technology Icon"
                width={50}
                height={50}
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Teknologi</h3>
            <p className="text-gray-600 mt-2">
              Dengan teknologi canggih, kami bisa memberikan rekomendasi yang
              relevan dan akurat berdasarkan kebutuhan Anda.
            </p>
          </div>

          <div className="bg-pink-100 p-8 rounded-lg shadow-lg">
            <div className="mb-4">
              <Image
                src="/relevan.png" // Ganti dengan alamat ikon Anda
                alt="Relevance Icon"
                width={50}
                height={50}
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Relevansi</h3>
            <p className="text-gray-600 mt-2">
              Kami memastikan setiap beasiswa yang kami tawarkan relevan dengan
              tujuan pendidikan dan perkembangan karir Anda.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WellbeingSection;
