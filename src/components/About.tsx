const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-primary">
            Our Heritage of Craftsmanship
          </h2>
          <div className="w-24 h-1 bg-amber mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left space-y-6">
              <p className="text-lg text-foreground/80 leading-relaxed">
                For over three generations, our family has dedicated itself to the ancient art of woodworking. 
                What began as a small workshop in 1952 has grown into a respected name in traditional handicrafts, 
                yet we remain true to our roots.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Each piece is meticulously handcrafted using time-tested techniques passed down through generations. 
                We believe in the beauty of imperfection, the warmth of natural materials, and the soul that only 
                human hands can breathe into wood.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Our commitment extends beyond creating beautiful objects – we preserve traditional woodworking 
                methods, support sustainable forestry, and ensure each creation becomes a cherished heirloom.
              </p>
            </div>
            
            <div className="bg-card-wood p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Why Choose Our Crafts?</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-foreground/80">Hand-selected premium hardwoods</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-foreground/80">Traditional joinery techniques</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-foreground/80">Eco-friendly finishing methods</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-amber rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-foreground/80">Lifetime craftsmanship guarantee</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;