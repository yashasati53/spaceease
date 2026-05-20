"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart, cartTotal } = useCart();

  // Shipping logic
  const shippingFee = cartTotal >= 999 || cartTotal === 0 ? 0 : 99;
  const ecoDiscount = Math.round(cartTotal * 0.05); // 5% eco-living discount
  const finalTotal = cartTotal - ecoDiscount + shippingFee;

  if (cartItems.length === 0) {
    return (
      <div style={{
        maxWidth: "1440px",
        margin: "0 auto",
        padding: "8rem 2rem",
        textAlign: "center",
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}>
        <h1 style={{ fontSize: "2rem", fontWeight: 100, marginBottom: "1.5rem" }}>Your Shopping Bag is Empty</h1>
        <p style={{ color: "#737373", fontSize: "0.88rem", fontWeight: 300, marginBottom: "3rem", maxWidth: "400px", lineHeight: 1.6 }}>
          Discover modular, sustainable, and aesthetic furnishings to elevate your space ease.
        </p>
        <Link href="/products" className="btn-primary" style={{ padding: "1rem 3rem" }}>
          Shop Our Collections
        </Link>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "3rem 1.5rem 6rem" }}>
      <h1 style={{ fontSize: "2.2rem", fontWeight: 100, marginBottom: "3rem", borderBottom: "1px solid #e8e8e8", paddingBottom: "1.5rem" }}>
        Shopping Bag
      </h1>

      <div className="cart-layout-grid" style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: "5rem", alignItems: "start" }}>
        {/* Left column — Items */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          {cartItems.map((item) => (
            <div key={item.id} style={{
              display: "grid",
              gridTemplateColumns: "120px 1fr",
              gap: "2rem",
              borderBottom: "1px solid #e8e8e8",
              paddingBottom: "2rem",
            }}>
              {/* Product Image */}
              <Link href={`/product/${item.id}`} style={{ display: "block", position: "relative", aspectRatio: "3/4", backgroundColor: "#f5f5f5" }}>
                <Image src={item.imageUrl} alt={item.name} fill style={{ objectFit: "cover" }} sizes="120px" />
              </Link>

              {/* Product details */}
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: "0.5rem" }}>
                    <div>
                      <p style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "#737373", marginBottom: "0.25rem" }}>
                        {item.category}
                      </p>
                      <h2 style={{ fontSize: "1rem", fontWeight: 400 }}>
                        <Link href={`/product/${item.id}`} style={{ color: "#000", textDecoration: "none" }}>{item.name}</Link>
                      </h2>
                    </div>
                    <span style={{ fontSize: "0.95rem", fontWeight: 500 }}>₹{item.price.toLocaleString("en-IN")}</span>
                  </div>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  {/* Quantity selector */}
                  <div style={{ display: "flex", alignItems: "center", border: "1px solid #e8e8e8" }}>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      style={{
                        padding: "0.4rem 0.8rem",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        fontSize: "0.88rem",
                      }}
                    >
                      −
                    </button>
                    <span style={{ fontSize: "0.85rem", width: "30px", textAlign: "center", fontWeight: 400 }}>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      style={{
                        padding: "0.4rem 0.8rem",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        fontSize: "0.88rem",
                      }}
                    >
                      +
                    </button>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    style={{
                      background: "none",
                      border: "none",
                      color: "#737373",
                      fontSize: "0.78rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      cursor: "pointer",
                      padding: "0.5rem",
                      borderBottom: "1px solid transparent",
                      transition: "all 0.15s",
                    }}
                    onMouseOver={(e) => e.currentTarget.style.color = "#000"}
                    onMouseOut={(e) => e.currentTarget.style.color = "#737373"}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right column — Order Summary */}
        <div style={{ backgroundColor: "#f9f9f9", padding: "2.5rem", border: "1px solid #e8e8e8" }}>
          <h2 style={{ fontSize: "1.1rem", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "2rem" }}>
            Order Summary
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", borderBottom: "1px solid #e8e8e8", paddingBottom: "1.5rem", marginBottom: "1.5rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.88rem", color: "#737373" }}>
              <span>Bag Value</span>
              <span style={{ color: "#000" }}>₹{cartTotal.toLocaleString("en-IN")}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.88rem", color: "#2e7d32" }}>
              <span>Eco-living Discount (5% Off)</span>
              <span>− ₹{ecoDiscount.toLocaleString("en-IN")}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.88rem", color: "#737373" }}>
              <span>Delivery</span>
              <span style={{ color: "#000" }}>{shippingFee === 0 ? "FREE" : `₹${shippingFee}`}</span>
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "1.1rem", fontWeight: 500, marginBottom: "2rem" }}>
            <span>Total</span>
            <span>₹{finalTotal.toLocaleString("en-IN")}</span>
          </div>

          <Link
            href="/checkout"
            className="btn-primary"
            style={{
              display: "block",
              width: "100%",
              textAlign: "center",
              padding: "1rem",
              fontSize: "0.88rem",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              textDecoration: "none",
              marginBottom: "1.5rem",
            }}
          >
            Proceed to Checkout
          </Link>

          {/* Eco friendly message */}
          <div style={{ borderTop: "1px solid #e8e8e8", paddingTop: "1.5rem", marginTop: "2rem" }}>
            <p style={{ fontSize: "0.78rem", color: "#555", lineHeight: 1.5, display: "flex", gap: "0.5rem" }}>
              <span>🌱</span>
              <span>Every purchase at SpaceEase helps fund domestic reforestation projects. Packaged entirely in 100% recyclable honeycomb cardboard.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
