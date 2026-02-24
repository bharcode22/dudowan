import { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Instagram, 
  Facebook, 
  Twitter,
  Send,
  MessageCircle,
  ChevronRight
} from 'lucide-react';
import Container from '../components/layout/Container';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Alamat",
      details: ["Desa Ulian, Kintamani Bangli", "Bali", "Indonesia"]
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Telepon / WA",
      details: ["+6281338440900"]
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["gedeputraswastika@gmail.com"]
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Jam Operasional",
      details: ["Senin - Jumat: 08:00 - 20:00", "Sabtu - Minggu: 09:00 - 18:00"]
    }
  ];

  const socialMedia = [
    { 
      icon: <Instagram className="w-5 h-5" />, 
      name: "Instagram", 
      username: "@dorucoffeebean",
      link: "https://instagram.com/dorucoffeebean",
      color: "hover:text-pink-500"
    },
    // { 
    //   icon: <Facebook className="w-5 h-5" />, 
    //   name: "Facebook", 
    //   username: "I Made Surawan",
    //   link: "https://www.facebook.com/search/top?q=I%20Made%20Surawan",
    //   color: "hover:text-blue-500"
    // },
    { 
      icon: <MessageCircle className="w-5 h-5" />, 
      name: "WhatsApp", 
      username: "+6281338440900",
      link: "https://wa.me/+6281338440900",
      color: "hover:text-green-500"
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "+6281338440900"; // Ganti dengan nomor WA Anda
    const message = "Halo dudowan, saya ingin bertanya tentang produk kopi...";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  const handleDirectWA = (phone) => {
    const cleanPhone = phone.replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${cleanPhone}`, '_blank');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Format message untuk WhatsApp
    const message = `
*Pesan Baru dari Website dudowan*

*Nama:* ${formData.name}
*Email:* ${formData.email}
*No. HP:* ${formData.phone}

*Pesan:*
${formData.message}
    `.trim();

    const phoneNumber = "6281338440900"; // Ganti dengan nomor WA Anda
    const encodedMessage = encodeURIComponent(message);
    
    // Simulasi loading sebentar
    setTimeout(() => {
      window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
      setIsSubmitting(false);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    }, 500);
  };

  // Quick message templates
  const quickMessages = [
    "Saya ingin order kopi",
    "Tanya tentang produk",
    "Info metode pembayaran",
    "Cek status pesanan",
    "Kerjasama bisnis"
  ];

  const handleQuickMessage = (message) => {
    const phoneNumber = "+62813-3844-0900";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-coffee-900/20 to-transparent" />
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Hubungi <span className="text-coffee-400">Kami</span>
            </h1>
            <p className="text-lg text-white/60 leading-relaxed">
              Punya pertanyaan atau ingin order? Kami siap membantu Anda.
              Respon cepat via WhatsApp dalam 1x24 jam.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="glass-card rounded-xl p-6 hover:scale-105 transition-transform duration-300">
                <div className="text-coffee-400 mb-4">{info.icon}</div>
                <h3 className="text-white font-semibold mb-2">{info.title}</h3>
                {info.details.map((detail, i) => (
                  <p key={i} className="text-white/60 text-sm">
                    {detail.includes('+62') ? (
                      <button
                        onClick={() => handleDirectWA(detail)}
                        className="hover:text-coffee-400 transition-colors"
                      >
                        {detail}
                      </button>
                    ) : detail}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Main Contact Section */}
      <section className="py-16">
        <Container>
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Contact Form - 3 columns */}
            <div className="lg:col-span-3">
              <div className="glass-dark rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-2">Kirim Pesan</h2>
                <p className="text-white/60 mb-8">
                  Isi form di bawah dan kami akan merespon via WhatsApp
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Name Input */}
                    <div>
                      <label className="block text-white/80 text-sm mb-2">
                        Nama Lengkap *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-coffee-500 transition-colors"
                        placeholder="John Doe"
                      />
                    </div>

                    {/* Email Input */}
                    <div>
                      <label className="block text-white/80 text-sm mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-coffee-500 transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  {/* Phone Input */}
                  <div>
                    <label className="block text-white/80 text-sm mb-2">
                      Nomor WhatsApp *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-coffee-500 transition-colors"
                      placeholder="0812 3456 7890"
                    />
                  </div>

                  {/* Message Input */}
                  <div>
                    <label className="block text-white/80 text-sm mb-2">
                      Pesan *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-coffee-500 transition-colors resize-none"
                      placeholder="Tulis pesan Anda di sini..."
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full glass-btn-primary py-4 flex items-center justify-center gap-2 text-lg disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>Mengirim...</>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Kirim Pesan via WhatsApp
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>

            {/* Quick Contact - 2 columns */}
            <div className="lg:col-span-2 space-y-6">
              {/* WhatsApp Quick Chat */}
              <div className="glass-dark rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-green-500/20 rounded-xl">
                    <MessageCircle className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Chat via WhatsApp</h3>
                    <p className="text-white/40 text-sm">Respon cepat 1x24 jam</p>
                  </div>
                </div>

                {/* Quick Messages */}
                <div className="space-y-3 mb-6">
                  <p className="text-white/60 text-sm mb-2">Pesan Cepat:</p>
                  {quickMessages.map((msg, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickMessage(msg)}
                      className="w-full text-left px-4 py-3 bg-white/5 rounded-lg text-white/80 hover:bg-white/10 hover:text-white transition-all flex items-center justify-between group"
                    >
                      <span>{msg}</span>
                      <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  ))}
                </div>

                <button
                  onClick={handleWhatsAppClick}
                  className="w-full py-3 bg-green-500/20 hover:bg-green-500/30 border border-green-500/30 rounded-lg text-green-400 font-medium transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Mulai Chat
                </button>
              </div>

              {/* Social Media */}
              <div className="glass-dark rounded-2xl p-8">
                <h3 className="text-white font-semibold mb-4">Media Sosial</h3>
                <p className="text-white/40 text-sm mb-6">
                  Ikuti kami untuk update produk dan promo terbaru
                </p>
                <div className="space-y-4">
                  {socialMedia.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        <span className={`text-white/60 group-hover:text-white transition-colors ${social.color}`}>
                          {social.icon}
                        </span>
                        <div>
                          <p className="text-white font-medium">{social.name}</p>
                          <p className="text-white/40 text-sm">{social.username}</p>
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-white/40 group-hover:text-white/60 transition-all group-hover:translate-x-1" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Business Hours Highlight */}
              <div className="glass-dark rounded-2xl p-8 bg-linear-to-br from-coffee-900/20 to-transparent">
                <h3 className="text-white font-semibold mb-2">Jam Siap Membantu</h3>
                <p className="text-white/40 text-sm mb-4">
                  Tim kami siap merespon pesan Anda di jam kerja
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60">Senin - Jumat</span>
                    <span className="text-white">08:00 - 20:00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60">Sabtu - Minggu</span>
                    <span className="text-white">09:00 - 18:00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Map Section (Optional) */}
      <section className="py-16">
        <Container>
          <div className="glass-dark rounded-2xl overflow-hidden h-96">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31585.92871881385!2d115.23134168778594!3d-8.278787091287473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd18b2673318937%3A0x5030bfbca82ff50!2sUlian%2C%20Kec.%20Kintamani%2C%20Kabupaten%20Bangli%2C%20Bali!5e0!3m2!1sid!2sid!4v1771757045597!5m2!1sid!2sid" 
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="opacity-80 hover:opacity-100 transition-opacity">
            </iframe>
          </div>
        </Container>
      </section>

      {/* FAQ Section (Optional) */}
      <section className="py-16 bg-white/5">
        <Container>
          <SectionTitle 
            title="Pertanyaan Umum"
            subtitle="Sebelum menghubungi kami, cek FAQ di bawah ini"
          />
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">Berapa lama proses pengiriman?</h3>
              <p className="text-white/60">Pengiriman Jakarta 1-2 hari, luar Jakarta 3-5 hari kerja.</p>
            </div>
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">Metode pembayaran apa saja?</h3>
              <p className="text-white/60">Transfer bank (BCA, Mandiri, BRI) dan e-wallet (OVO, Gopay).</p>
            </div>
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">Apakah bisa custom roast level?</h3>
              <p className="text-white/60">Ya, silakan request via WhatsApp saat order.</p>
            </div>
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">Minimal order berapa?</h3>
              <p className="text-white/60">Minimal order 250g per varian kopi.</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <button
              onClick={handleWhatsAppClick}
              className="inline-flex items-center gap-2 text-coffee-400 hover:text-coffee-300 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Tanya langsung via WhatsApp
            </button>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Contact;