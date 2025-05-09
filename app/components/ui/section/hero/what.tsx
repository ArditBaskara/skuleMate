import Image from 'next/image';

const ScholarshipSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Mencapai Impian Pendidikanmu
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Kami membantu kamu menemukan beasiswa yang sesuai dengan jurusan,
              lokasi, dan kualifikasi yang kamu miliki. Mulai perjalanan
              pendidikanmu dengan beasiswa yang tepat.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Jangan biarkan biaya pendidikan menghalangi impianmu. Temukan
              beasiswa yang bisa membantumu meraih tujuan pendidikanmu.
            </p>
          </div>

          <div>
            <Image
              src="/222.png"
              alt="Pendidikan"
              width={500}
              height={500}
              className="w-full rounded-lg"
            />
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Raih Beasiswa Terbaik Sesuai dengan Kualifikasi Kamu
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Skulamate menggunakan teknologi canggih untuk menyaring beasiswa
              berdasarkan jurusan, lokasi, dan tingkat pendidikan. Dapatkan
              rekomendasi yang disesuaikan dengan kebutuhan dan keinginan kamu.
            </p>
            <div className="space-y-6">
              <div className="flex items-start">
                <span className="text-xl text-gray-800 font-semibold mr-4">
                  Personalisi Tinggi:
                </span>
                <p className="text-lg text-gray-600">
                  Pengguna mendapatkan rekomendasi yang sangat disesuaikan
                  dengan profil mereka, seperti jurusan yang diminati, lokasi
                  yang diinginkan, dan kualifikasi akademik atau prestasi
                  lainnya.
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-xl text-gray-800 font-semibold mr-4">
                  Sistem Cerdas:
                </span>
                <p className="text-lg text-gray-600">
                  Dengan menggunakan teknologi NLP, aplikasi bisa memahami
                  konteks dan nuansa dari pencarian, memberikan hasil yang lebih
                  relevan dan akurat.
                </p>
              </div>
            </div>
          </div>

          <div>
            <Image
              src="/what.png"
              alt="Beasiswa"
              width={500}
              height={500}
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScholarshipSection;
