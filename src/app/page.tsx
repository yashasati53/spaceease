import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import { products, Category } from "@/data/products";

const categories: { name: Category; imageUrl: string; }[] = [
  {
    name: "Space Organization",
    imageUrl: "/shoe-rack.jpg",
  },
  {
    name: "Home Décor",
    imageUrl: "/minimal-wall-art.jpg",
  },
  {
    name: "Furniture",
    imageUrl: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Workspace Essentials",
    imageUrl: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Bathroom Organizer",
    imageUrl: "/bathroom organizer.jpeg",
  },
];

export default function Home() {
  const featuredProducts = products.slice(0, 8);

  return (
    <div>
      {/* ── HERO ── */}
      <section className="hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=2000&q=80"
          alt="SpaceEase hero"
          className="hero-media"
        />
        <div className="hero-overlay">
          <div className="hero-content">
            <span className="hero-tag">New Collection 2026</span>
            <h1 className="heading-xl hero-title">
              Space is luxury.<br />Design makes it accessible.
            </h1>
            <p className="hero-description">
              Modular, foldable & sustainable furniture for compact Indian homes.
            </p>
            <div className="hero-actions">
              <Link href="/products" className="btn-primary">Shop Now</Link>
              <Link href="/about" className="btn-secondary">Our Story</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES STRIP ── */}
      <div className="features-strip">
        <div className="feature-item">
          <div className="feature-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle>
            </svg>
          </div>
          <div>
            <p className="feature-title">Free Delivery</p>
            <p className="feature-text">On orders above ₹999</p>
          </div>
        </div>
        <div className="feature-item">
          <div className="feature-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
            </svg>
          </div>
          <div>
            <p className="feature-title">Easy Returns</p>
            <p className="feature-text">30-day hassle-free returns</p>
          </div>
        </div>
        <div className="feature-item">
          <div className="feature-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
          </div>
          <div>
            <p className="feature-title">Eco Certified</p>
            <p className="feature-text">Sustainably sourced materials</p>
          </div>
        </div>
      </div>

      {/* ── SHOP BY CATEGORY ── */}
      <section className="section" style={{ padding: "3rem 1.5rem" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
          <div className="section-header">
            <h2 className="section-title">Shop by Category</h2>
            <Link href="/products" className="section-link">View all</Link>
          </div>
          <div className="category-grid">
            {categories.map((cat) => (
              <Link key={cat.name} href="/products" className="category-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={cat.imageUrl}
                  alt={cat.name}
                  className="category-card-img"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div className="category-card-label">{cat.name}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ── */}
      <section className="section" style={{ padding: "3rem 1.5rem", backgroundColor: "#faf9f8" }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
          <div className="section-header">
            <h2 className="section-title">New Arrivals</h2>
            <Link href="/products" className="section-link">See all</Link>
          </div>
          <div className="products-grid">
            {featuredProducts.map(product => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                imageUrl={product.imageUrl}
                category={product.category}
                originalPrice={product.originalPrice}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── PROMO BANNER ── */}
      <div className="promo-banner">
        <h2>Members Get More</h2>
        <p>Sign up today for exclusive deals, early access and free delivery on your first order.</p>
        <Link href="/login" className="btn-primary">Become a Member</Link>
      </div>
    </div>
  );
}
