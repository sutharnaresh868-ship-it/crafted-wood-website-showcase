import woodenBowl from '@/assets/wooden-bowl.jpg';
import cuttingBoard from '@/assets/cutting-board.jpg';
import jewelryBox from '@/assets/jewelry-box.jpg';
import woodenChair from '@/assets/wooden-chair.jpg';

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Handcrafted Wooden Bowls",
      image: woodenBowl,
      description: "Elegant serving bowls carved from premium hardwood"
    },
    {
      id: 2,
      name: "Live Edge Cutting Boards",
      image: cuttingBoard,
      description: "Functional art pieces for your kitchen"
    },
    {
      id: 3,
      name: "Carved Jewelry Boxes",
      image: jewelryBox,
      description: "Intricate storage solutions with traditional patterns"
    },
    {
      id: 4,
      name: "Custom Furniture",
      image: woodenChair,
      description: "Bespoke chairs and tables built to last generations"
    }
  ];

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-primary">
            Our Handcrafted Products
          </h2>
          <div className="w-24 h-1 bg-amber mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our collection of meticulously crafted wooden pieces, each one unique and made with passion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="card-wood hover-lift group">
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-primary group-hover:text-amber transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {product.description}
                </p>
                <button className="w-full bg-secondary hover:bg-primary hover:text-primary-foreground text-secondary-foreground py-2 px-4 rounded-lg transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-6">
            Looking for something specific? We also accept custom orders.
          </p>
          <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-warm">
            Request Custom Piece
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;