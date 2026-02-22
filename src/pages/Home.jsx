import React from 'react'
import { Link } from 'react-router-dom';
import { Coffee, Leaf, Truck, Award } from 'lucide-react';
import Container from '../components/layout/Container';
import Button from '../components/ui/Button';
import SectionTitle from '../components/ui/SectionTitle';
import ProductGrid from '../components/product/ProductGrid';
import { products } from '../data/products';
import hero from '../assets/images/hero/hero.webp';

const Home = () => {
  const featuredProducts = products.slice(0, 3);

  const benefits = [
    {
      icon: <Coffee className="h-8 w-8 text-white/80" />,
      title: "Fresh Roasted",
      description: "Diroasting setiap hari untuk kesegaran maksimal"
    },
    {
      icon: <Leaf className="h-8 w-8 text-white/80" />,
      title: "Direct Trade",
      description: "Bekerja langsung dengan petani lokal"
    },
    {
      icon: <Truck className="h-8 w-8 text-white/80" />,
      title: "Fast Shipping",
      description: "Dikirim langsung setelah roasting"
    },
    {
      icon: <Award className="h-8 w-8 text-white/80" />,
      title: "Premium Quality",
      description: "Hanya biji kopi pilihan grade-1"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Kopi Terbaik
                <span className="text-white/50"> dari Kintmani</span>
              </h1>
              <p className="text-lg text-white/55 mb-8">
                Nikmati pengalaman ngopi autentik dari biji kopi asli pertanian Kintamani, 
                dipetik dari dataran tinggi Bali dan di-roasting dengan penuh ketelitian
              </p>
              <div className="flex gap-4">
                <Link to="/products">
                  <Button>Lihat Koleksi</Button>
                </Link>
                <Link to="/about">
                  <Button variant="secondary">Tentang Kami</Button>
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="glass-card p-2 overflow-hidden">
                <img
                  src={hero}
                  alt="Coffee"
                  className="rounded-xl w-full object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <Container>
          <SectionTitle
            title="Produk Pilihan"
            subtitle="Koleksi kopi terbaik pilihan kami untuk Anda"
          />
          <ProductGrid products={featuredProducts} />
          <div className="text-center mt-10">
            <Link to="/products">
              <Button>Lihat Semua Produk</Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <Container>
          <SectionTitle
            title="Kenapa Memilih Kami?"
            subtitle="Kami berkomitmen memberikan yang terbaik untuk setiap cangkir kopi Anda"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="glass-card p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 glass rounded-full mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-white/55 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <Container>
          <div className="glass-card p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Siap untuk Ngopi?
            </h2>
            <p className="text-lg mb-8 text-white/55">
              Pesan sekarang dan nikmati kopi segar langsung dari roastery kami
            </p>
            <Link to="/products">
              <Button>Belanja Sekarang</Button>
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Home;