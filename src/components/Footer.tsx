import { Heart } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-wood-dark text-cream py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-amber to-amber-dark rounded-lg flex items-center justify-center">
                <span className="text-wood-dark font-bold text-lg">WH</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">WoodCraft Heritage</h3>
                <p className="text-sm text-cream/70">Traditional Handicrafts</p>
              </div>
            </div>
            <p className="text-cream/80 leading-relaxed">
              Preserving the art of traditional woodworking through three generations of passionate craftsmanship.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-cream/80 hover:text-amber transition-colors duration-300"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-cream/80 hover:text-amber transition-colors duration-300"
                >
                  Our Products
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-cream/80 hover:text-amber transition-colors duration-300"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-cream/80 hover:text-amber transition-colors duration-300"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-2 text-cream/80">
              <p>123 Craftsman Lane</p>
              <p>Woodville, WV 12345</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Email: info@woodcraftheritage.com</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cream/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-cream/60 flex items-center">
              © 2024 WoodCraft Heritage. Made with{' '}
              <Heart className="mx-2 text-amber" size={16} fill="currentColor" />
              and traditional craftsmanship.
            </p>
            
            <div className="flex space-x-6">
              <button className="text-cream/60 hover:text-amber transition-colors duration-300">
                Privacy Policy
              </button>
              <button className="text-cream/60 hover:text-amber transition-colors duration-300">
                Terms of Service
              </button>
              <button 
                onClick={scrollToTop}
                className="text-cream/60 hover:text-amber transition-colors duration-300"
              >
                Back to Top
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;