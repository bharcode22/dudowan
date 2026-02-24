import { Coffee, Heart, Users, Award } from 'lucide-react';
import Container from '../components/layout/Container';
import SectionTitle from '../components/ui/SectionTitle';
import about_image from '../assets/images/logo/about_image.webp';

const About = () => {
  const values = [
    {
      icon: <Coffee className="w-8 h-8" />,
      title: "Kualitas Terbaik",
      description: "Kami hanya memilih biji kopi grade-1 dari petani terbaik di Indonesia"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Cinta Lokal",
      description: "Mendukung petani lokal dan memperkenalkan kopi Indonesia ke dunia"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Komunitas",
      description: "Membangun komunitas pecinta kopi yang saling berbagi pengetahuan"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Konsistensi",
      description: "Menjaga konsistensi rasa di setiap batch roasting"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 g-linear-to-b from-coffee-900/20 to-transparent" />
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Cerita <span className="text-coffee-400">Doru Coffee</span>
            </h1>
            <p className="text-lg text-white/60 leading-relaxed">
              Menghadirkan kopi terbaik dari petani lokal untuk penikmat kopi sejati.
            </p>
          </div>
        </Container>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Perjalanan Kami</h2>
              <div className="space-y-4 text-white/60">
                <p className='text-justify'>
                  Perkenalkan saya doru berasal dari Desa Ulian, Kintamai, Bangli, Bali saya sebagai petani kopi sekaligus sebagai prosesor kopi, 
                  atau yang memproses kopi.
                </p>
                <p className='text-justify'>
                  Saya sendiri berdiri sebagai prosesor kopi sejak dari tahun 2019. wilayah Desa Ulian terdiri dari luas wilayah 353 hektar, dengan ketinggiang 1200 - 1400 di atas permukaan laut, 
                  dengan ketinggian ini memang sangat cocok untuk di tanami kopi arabica selain itu wilayah desa kami juga di kelilingi sumber mata air, 
                  sehingga menciptakan kesuburan tanah yg sangat tinggi
                </p>
                <p className='text-justify'>
                  Awal masuknya kopi ke daerah desa kami pada tahun 1980 an dengan varietas yg 
                  di tanam varietas Usda selang berjalanya waktu dan perkembangan jaman petani melakukan penelitian 
                  dan menemukan varietas yg baru padah tahun 2020 yg di namai oleh petani varietas B1.20
                  2 varietas ini lah yg kami kembangkan dan kami pertahankan di wilayah desa kami
                </p>
              </div>
            </div>
            <div className="glass-dark rounded-2xl overflow-hidden">
              <img 
                src={about_image}
                alt="Coffee plantation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white/5">
        <Container>
          <SectionTitle 
            title="Nilai-Nilai Kami"
            subtitle="Prinsip yang kami pegang dalam setiap langkah"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="glass-card rounded-xl p-6 text-center">
                <div className="inline-flex p-3 bg-coffee-500/20 rounded-xl text-coffee-400 mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-white/60">{value.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Product Highlight */}
      <section className="py-20">
        <Container>
          <SectionTitle 
            title="Produk yang kami sediakan"
            subtitle="Kopi Ulian dari berbagai pengolahan dengan karakter uniknya"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'Natural',
              'Anaerobic Honey',
              'Anaerobic Natural',
              'Fully Washed',
              'Natural Ulian',
            ].map((coffee) => (
              <div key={coffee} className="glass-dark rounded-xl p-4 text-center">
                <span className="text-white font-medium">{coffee}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default About;