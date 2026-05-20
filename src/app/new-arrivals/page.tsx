"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import { products } from "@/data/products";

export default function NewArrivalsPage() {
  const [activeTab, setActiveTab] = useState("All");
  
  // Treat the last 8 added products as "new arrivals"
  const allNewArrivals = [...products].reverse().slice(0, 8);
  const newArrivals = activeTab === "All" 
    ? allNewArrivals 
    : allNewArrivals.filter(p => p.category === activeTab);

  return (
    <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 2rem 5rem" }}>
      {/* Page Header */}
      <div style={{
        padding: "4rem 0 2rem",
        borderBottom: "1px solid #e8e8e8",
        marginBottom: "3rem",
      }}>
        <p style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#737373", marginBottom: "0.75rem" }}>
          Spring / Summer 2026
        </p>
        <h1 style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 100, lineHeight: 1.05, marginBottom: "1rem" }}>
          New Arrivals
        </h1>
        <p style={{ fontSize: "0.88rem", color: "#737373", fontWeight: 300, maxWidth: "540px" }}>
          Fresh additions to the SpaceEase family. Discover the latest in modular, space-saving design for your home.
        </p>
      </div>

      {/* Filter bar */}
      <div 
        className="hide-scrollbar"
        style={{
          display: "flex",
          gap: "0",
          marginBottom: "2.5rem",
          borderBottom: "1px solid #e8e8e8",
          overflowX: "auto",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {["All", "Space Organization", "Home Décor", "Furniture", "Workspace Essentials", "Bathroom Organizer"].map((filter) => {
          const isActive = activeTab === filter;
          return (
            <span 
              key={filter} 
              onClick={() => setActiveTab(filter)}
              style={{
                padding: "0.75rem 1.5rem",
                fontSize: "0.78rem",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                fontWeight: isActive ? 500 : 300,
                color: isActive ? "#000" : "#737373",
                borderBottom: isActive ? "2px solid #000" : "2px solid transparent",
                cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "all 0.15s",
              }}
            >
              {filter}
            </span>
          );
        })}
      </div>

      {/* Count + Sort */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
        <p style={{ fontSize: "0.78rem", color: "#737373" }}>{newArrivals.length} items</p>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.78rem", color: "#737373" }}>
          <span style={{ textTransform: "uppercase", letterSpacing: "0.05em" }}>Sort by:</span>
          <span style={{ color: "#000", fontWeight: 400, textTransform: "uppercase", letterSpacing: "0.05em", borderBottom: "1px solid #000", cursor: "pointer" }}>Newest</span>
        </div>
      </div>

      {/* Product Grid */}
      <div className="products-grid">
        {newArrivals.map(product => (
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

      {/* Load more */}
      <div style={{ textAlign: "center", marginTop: "4rem" }}>
        <Link href="/products" className="btn-secondary" style={{ padding: "1rem 3rem" }}>
          View All Products
        </Link>
      </div>
    </div>
  );
}
