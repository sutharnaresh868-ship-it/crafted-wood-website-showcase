import heroCraftsman from '@/assets/hero-craftsman.jpg';

const Hero = () => {
  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroCraftsman}
          alt="Skilled craftsman working on wooden sculpture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-wood-dark/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-cream px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Crafted with
          <span className="block text-amber"> Passion & Tradition</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-cream/90 max-w-2xl mx-auto leading-relaxed">
          Every piece tells a story of time-honored craftsmanship, where skilled hands transform raw wood into timeless treasures.
        </p>
        <button
          onClick={scrollToProducts}
          className="btn-hero text-lg"
        >
          Explore Our Crafts
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-cream/70 animate-bounce">
        <div className="w-6 h-10 border-2 border-cream/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cream/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;