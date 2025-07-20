import workshopGallery from '@/assets/workshop-gallery.jpg';
import woodenBowl from '@/assets/wooden-bowl.jpg';
import cuttingBoard from '@/assets/cutting-board.jpg';
import jewelryBox from '@/assets/jewelry-box.jpg';
import woodenChair from '@/assets/wooden-chair.jpg';

const Gallery = () => {
  const galleryImages = [
    {
      id: 1,
      src: workshopGallery,
      alt: "Traditional woodworking workshop",
      title: "Our Workshop"
    },
    {
      id: 2,
      src: woodenBowl,
      alt: "Handcrafted wooden bowl",
      title: "Artisan Bowls"
    },
    {
      id: 3,
      src: cuttingBoard,
      alt: "Live edge cutting board",
      title: "Kitchen Essentials"
    },
    {
      id: 4,
      src: jewelryBox,
      alt: "Carved jewelry box",
      title: "Decorative Pieces"
    },
    {
      id: 5,
      src: woodenChair,
      alt: "Handcrafted wooden chair",
      title: "Custom Furniture"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-secondary to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-primary">
            Craftsmanship Gallery
          </h2>
          <div className="w-24 h-1 bg-amber mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A glimpse into our workshop and the beautiful pieces we create with dedication and skill.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Featured large image */}
          <div className="lg:col-span-2 lg:row-span-2">
            <div className="card-wood hover-lift h-full group overflow-hidden">
              <div className="relative h-full min-h-[400px]">
                <img
                  src={galleryImages[0].src}
                  alt={galleryImages[0].alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-wood-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-cream opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-2xl font-semibold">{galleryImages[0].title}</h3>
                  <p className="text-cream/80">Where tradition meets craftsmanship</p>
                </div>
              </div>
            </div>
          </div>

          {/* Smaller gallery images */}
          {galleryImages.slice(1).map((image) => (
            <div key={image.id} className="card-wood hover-lift group overflow-hidden">
              <div className="relative aspect-square">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-wood-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-cream opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-lg font-semibold">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-6">
            Follow our journey and see more of our work on social media.
          </p>
          <div className="flex justify-center space-x-6">
            <button className="bg-secondary hover:bg-primary hover:text-primary-foreground text-secondary-foreground px-6 py-2 rounded-lg transition-all duration-300">
              Instagram
            </button>
            <button className="bg-secondary hover:bg-primary hover:text-primary-foreground text-secondary-foreground px-6 py-2 rounded-lg transition-all duration-300">
              Facebook
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;