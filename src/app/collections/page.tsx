"use client";
import Link from "next/link";
import { products, Category } from "@/data/products";

const collections: { name: Category; tag: string; description: string; heroImage: string; }[] = [
  {
    name: "Space Organization",
    tag: "Best Sellers",
    description: "Declutter every corner of your home with our best-loved storage solutions.",
    heroImage: "/foldable-storage-box.jpg",
  },
  {
    name: "Home Décor",
    tag: "New Season",
    description: "Add warmth and personality to your living space with artful, minimal pieces.",
    heroImage: "/minimal-wall-art.jpg",
  },
  {
    name: "Furniture",
    tag: "Compact Living",
    description: "Smart furniture designed for smaller footprints, without compromising on style.",
    heroImage: "/Compact study table.jpeg",
  },
  {
    name: "Workspace Essentials",
    tag: "Work From Home",
    description: "Everything you need for a productive, comfortable, and stylish home office.",
    heroImage: "/Ergonomic chair.jpeg",
  },
  {
    name: "Bathroom Organizer",
    tag: "Daily Essentials",
    description: "Transform your bathroom into a calm, organised sanctuary.",
    heroImage: "/bathroom organizer.jpeg",
  },
];

export default function CollectionsPage() {
  return (
    <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 2rem 5rem" }}>

      {/* Page Header */}
      <div style={{ padding: "4rem 0 2rem", borderBottom: "1px solid #e8e8e8", marginBottom: "4rem" }}>
        <p style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#737373", marginBottom: "0.75rem" }}>
          SpaceEase
        </p>
        <h1 style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 100, lineHeight: 1.05, marginBottom: "1rem" }}>
          Collections
        </h1>
        <p style={{ fontSize: "0.88rem", color: "#737373", fontWeight: 300, maxWidth: "540px" }}>
          Curated ranges for every room and lifestyle — discover the collection that is right for you.
        </p>
      </div>

      {/* Collections Grid */}
      <div style={{ display: "flex", flexDirection: "column", gap: "6rem" }}>
        {collections.map((col, i) => {
          const count = products.filter(p => p.category === col.name).length;
          const isEven = i % 2 === 0;
          return (
            <div key={col.name} style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "3rem",
              alignItems: "center",
              direction: isEven ? "ltr" : "rtl",
            }}>
              {/* Image */}
              <Link href="/products" style={{ display: "block", overflow: "hidden", aspectRatio: "4/3", backgroundColor: "#f5f5f5", direction: "ltr" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={col.heroImage}
                  alt={col.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s ease", display: "block" }}
                  onMouseOver={e => (e.currentTarget.style.transform = "scale(1.04)")}
                  onMouseOut={e => (e.currentTarget.style.transform = "scale(1)")}
                />
              </Link>

              {/* Text */}
              <div style={{ direction: "ltr", padding: isEven ? "0 2rem 0 0" : "0 0 0 2rem" }}>
                <span style={{
                  display: "inline-block",
                  fontSize: "0.7rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  fontWeight: 500,
                  marginBottom: "1.25rem",
                  padding: "0.25rem 0.75rem",
                  border: "1px solid #000",
                }}>
                  {col.tag}
                </span>
                <h2 style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.5rem)", fontWeight: 100, lineHeight: 1.1, marginBottom: "1rem" }}>
                  {col.name}
                </h2>
                <p style={{ fontSize: "0.88rem", color: "#737373", fontWeight: 300, lineHeight: 1.7, marginBottom: "0.5rem" }}>
                  {col.description}
                </p>
                <p style={{ fontSize: "0.78rem", color: "#9e9e9e", marginBottom: "2rem" }}>
                  {count} {count === 1 ? "item" : "items"}
                </p>
                <Link href="/products" className="btn-primary">
                  Shop {col.name}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
