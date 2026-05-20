import { products, getProductById } from "@/data/products";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProductActions from "@/components/ProductActions";

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const product = getProductById(resolvedParams.id);

  if (!product) {
    notFound();
  }

  return (
    <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "2rem 2rem 5rem" }}>
      {/* Breadcrumb */}
      <nav style={{ fontSize: "0.75rem", color: "#737373", marginBottom: "2rem", display: "flex", gap: "0.5rem" }}>
        <Link href="/" style={{ textDecoration: "underline" }}>Home</Link>
        <span>/</span>
        <Link href="/products" style={{ textDecoration: "underline" }}>{product.category}</Link>
        <span>/</span>
        <span>{product.name}</span>
      </nav>

      <div className="product-detail-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>
        {/* Left — Image */}
        <div style={{ position: "relative", aspectRatio: "3/4", overflow: "hidden", backgroundColor: "#f5f5f5" }}>
          <Image src={product.imageUrl} alt={product.name} fill style={{ objectFit: "cover" }} sizes="50vw" />
        </div>

        {/* Right — Details */}
        <div style={{ paddingTop: "1rem" }}>
          <p style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "#737373", marginBottom: "0.75rem" }}>
            {product.category}
          </p>
          <h1 style={{ fontSize: "1.5rem", fontWeight: 200, lineHeight: 1.2, marginBottom: "1rem" }}>
            {product.name}
          </h1>
          <p style={{ fontSize: "1.1rem", fontWeight: 400, marginBottom: "2rem", color: "#000" }}>
            {product.originalPrice && (
              <span style={{ textDecoration: 'line-through', color: '#a0a0a0', marginRight: '0.75rem', fontSize: '0.9em' }}>
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </span>
            )}
            ₹{product.price.toLocaleString("en-IN")}
          </p>

          <p style={{ fontSize: "0.88rem", color: "#737373", lineHeight: 1.7, marginBottom: "2rem", fontWeight: 300 }}>
            {product.description}
          </p>

          {/* Stock */}
          <p style={{ fontSize: "0.78rem", color: product.stock > 10 ? "#000" : "#c00", marginBottom: "1.5rem", fontWeight: 400 }}>
            {product.stock > 10 ? "In Stock" : `Only ${product.stock} left`}
          </p>

          {/* CTA */}
          <ProductActions
            product={{
              id: product.id,
              name: product.name,
              price: product.price,
              imageUrl: product.imageUrl,
              category: product.category,
            }}
          />

          {/* Trust */}
          <div style={{ borderTop: "1px solid #e8e8e8", marginTop: "2rem", paddingTop: "1.5rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {[
              { icon: "🚚", text: "Free delivery on orders above ₹999" },
              { icon: "↩", text: "Easy 30-day returns" },
              { icon: "♻", text: "Eco-friendly materials" },
            ].map(item => (
              <div key={item.text} style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "0.8rem", color: "#737373" }}>
                <span>{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
