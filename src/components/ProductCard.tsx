"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import React, { useState } from 'react';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  category: string;
  originalPrice?: number;
}

export default function ProductCard({ id, name, price, imageUrl, category, originalPrice }: ProductCardProps) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart({ id, name, price, imageUrl, category });
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <div className="product-card">
      {/* Image */}
      <Link href={`/product/${id}`} className="product-image-container">
        <Image src={imageUrl} alt={name} fill className="product-image" sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" />
      </Link>

      {/* Info */}
      <div className="product-info">
        <div className="product-meta">
          <span className="product-category">{category}</span>
          <span className="product-price">
            {originalPrice && (
              <span style={{ textDecoration: 'line-through', color: '#a0a0a0', marginRight: '0.5rem', fontSize: '0.85em' }}>
                ₹{originalPrice.toLocaleString('en-IN')}
              </span>
            )}
            ₹{price.toLocaleString('en-IN')}
          </span>
        </div>
        <h3 className="product-name">
          <Link href={`/product/${id}`}>{name}</Link>
        </h3>
        <button
          onClick={handleAdd}
          className="btn-primary product-add-btn"
          style={{
            width: "100%",
            backgroundColor: added ? "#000" : "var(--bg-secondary)",
            color: added ? "#fff" : "var(--text-primary)",
            borderColor: added ? "#000" : "var(--border-color)",
            transition: "all 0.2s ease",
            cursor: "pointer",
          }}
        >
          {added ? "Added ✓" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}
