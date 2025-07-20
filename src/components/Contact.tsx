import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-primary">
            Get in Touch
          </h2>
          <div className="w-24 h-1 bg-amber mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to commission a custom piece or have questions about our crafts? We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="card-wood p-8">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-amber/20 p-3 rounded-lg">
                    <Phone className="text-amber-dark" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Phone</h4>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    <p className="text-muted-foreground">+1 (555) 123-4568</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-amber/20 p-3 rounded-lg">
                    <Mail className="text-amber-dark" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Email</h4>
                    <p className="text-muted-foreground">info@woodcraftheritage.com</p>
                    <p className="text-muted-foreground">custom@woodcraftheritage.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-amber/20 p-3 rounded-lg">
                    <MapPin className="text-amber-dark" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Workshop Address</h4>
                    <p className="text-muted-foreground">
                      123 Craftsman Lane<br />
                      Woodville, WV 12345<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-amber/20 p-3 rounded-lg">
                    <Clock className="text-amber-dark" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Workshop Hours</h4>
                    <p className="text-muted-foreground">
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 4:00 PM<br />
                      Sunday: By appointment only
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="space-y-8">
            <div className="card-wood p-8">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Visit Our Workshop</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We welcome visitors to our workshop! Schedule a visit to see our craftsmen at work, 
                discuss custom projects, or simply appreciate the artistry of traditional woodworking.
              </p>
              <button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-warm mb-4">
                Schedule a Visit
              </button>
              <button className="w-full bg-secondary hover:bg-amber hover:text-wood-dark text-secondary-foreground py-3 rounded-lg font-semibold transition-all duration-300">
                Request Quote
              </button>
            </div>

            <div className="card-wood p-8">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Follow Our Craft</h3>
              <p className="text-muted-foreground mb-6">
                Stay updated with our latest creations and woodworking tips.
              </p>
              <div className="space-y-3">
                <button className="w-full bg-wood-medium hover:bg-wood-dark text-cream py-2 rounded-lg transition-all duration-300">
                  Instagram @woodcraftheritage
                </button>
                <button className="w-full bg-wood-medium hover:bg-wood-dark text-cream py-2 rounded-lg transition-all duration-300">
                  Facebook WoodCraft Heritage
                </button>
                <button className="w-full bg-wood-medium hover:bg-wood-dark text-cream py-2 rounded-lg transition-all duration-300">
                  YouTube Channel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;