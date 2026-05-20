"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CheckoutPage() {
  const router = useRouter();
  const { cartItems, cartTotal, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);

  // Shipping & Discount logic
  const shippingFee = cartTotal >= 999 || cartTotal === 0 ? 0 : 99;
  const ecoDiscount = Math.round(cartTotal * 0.05); // 5% eco-living discount
  const finalTotal = cartTotal - ecoDiscount + shippingFee;

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate network request for payment gateway
    setTimeout(() => {
      clearCart();
      router.push("/checkout/success");
    }, 2000);
  };

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
        <h1 style={{ fontSize: "2rem", fontWeight: 100, marginBottom: "1.5rem" }}>Your Cart is Empty</h1>
        <p style={{ color: "#737373", fontSize: "0.88rem", fontWeight: 300, marginBottom: "3rem", maxWidth: "400px", lineHeight: 1.6 }}>
          Please add items to your cart before proceeding to checkout.
        </p>
        <Link href="/products" className="btn-primary" style={{ padding: "1rem 3rem" }}>
          Shop Our Collections
        </Link>
      </div>
    );
  }

  return (
    <div className="container" style={{ padding: "4rem 2rem", minHeight: "80vh", maxWidth: "1440px", margin: "0 auto" }}>
      <h1 className="heading-xl" style={{ marginBottom: "3rem", textAlign: "center", fontWeight: 100 }}>Secure Checkout</h1>
      
      <div className="checkout-grid" style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "5rem" }}>
        {/* Shipping & Payment Form */}
        <div>
          <h2 className="heading-md" style={{ marginBottom: "2rem", fontSize: "1.1rem", textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: 500 }}>1. Shipping Details</h2>
          <form onSubmit={handleCheckout}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
              <input type="text" placeholder="First Name" required style={inputStyle} />
              <input type="text" placeholder="Last Name" required style={inputStyle} />
            </div>
            <input type="text" placeholder="Address" required style={{ ...inputStyle, marginBottom: "1rem" }} />
            <input type="text" placeholder="City" required style={{ ...inputStyle, marginBottom: "1rem" }} />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "3rem" }}>
              <input type="text" placeholder="State" required style={inputStyle} />
              <input type="text" placeholder="PIN Code" required style={inputStyle} />
            </div>

            <h2 className="heading-md" style={{ marginBottom: "2rem", fontSize: "1.1rem", textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: 500 }}>2. Mock Payment</h2>
            <div style={{ padding: "1.5rem", border: "1px solid #e8e8e8", marginBottom: "2.5rem", backgroundColor: "#f9f9f9" }}>
              <p style={{ color: "#737373", marginBottom: "1.25rem", fontSize: "0.82rem", fontWeight: 300 }}>
                This is a static mock. No real transaction will occur.
              </p>
              <input type="text" placeholder="Card Number (Mock)" disabled value="**** **** **** 4242" style={{ ...inputStyle, marginBottom: "1rem" }} />
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <input type="text" placeholder="MM/YY" disabled value="12/25" style={inputStyle} />
                <input type="text" placeholder="CVV" disabled value="123" style={inputStyle} />
              </div>
            </div>

            <button type="submit" className="btn-primary" disabled={isProcessing} style={{ width: "100%", padding: "1rem", fontSize: "0.88rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>
              {isProcessing ? "Processing Payment..." : `Pay ₹${finalTotal.toLocaleString("en-IN")}`}
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div style={{ padding: "2.5rem", backgroundColor: "#f9f9f9", border: "1px solid #e8e8e8", height: "fit-content" }}>
          <h2 className="heading-md" style={{ marginBottom: "2rem", fontSize: "1.1rem", textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: 500 }}>Order Summary</h2>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginBottom: "2rem", paddingBottom: "2rem", borderBottom: "1px solid #e8e8e8" }}>
            {cartItems.map((item) => (
              <div key={item.id} style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
                <div style={{ width: "64px", height: "85px", position: "relative", backgroundColor: "#f5f5f5" }}>
                  <Image src={item.imageUrl} alt={item.name} fill style={{ objectFit: "cover" }} sizes="64px" />
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: "0.88rem", fontWeight: 400, marginBottom: "0.25rem" }}>{item.name}</h3>
                  <p style={{ color: "#737373", fontSize: "0.78rem", fontWeight: 300 }}>Qty: {item.quantity}</p>
                </div>
                <div style={{ fontSize: "0.9rem", fontWeight: 500 }}>₹{(item.price * item.quantity).toLocaleString("en-IN")}</div>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem", color: "#737373", fontSize: "0.88rem" }}>
            <span>Subtotal</span>
            <span style={{ color: "#000" }}>₹{cartTotal.toLocaleString("en-IN")}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem", color: "#2e7d32", fontSize: "0.88rem" }}>
            <span>Eco-living Discount (5%)</span>
            <span>− ₹{ecoDiscount.toLocaleString("en-IN")}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1.5rem", color: "#737373", fontSize: "0.88rem" }}>
            <span>Shipping</span>
            <span style={{ color: "#000" }}>{shippingFee === 0 ? "FREE" : `₹${shippingFee}`}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: "2rem", paddingTop: "1.5rem", borderTop: "1px solid #e8e8e8", fontWeight: 500, fontSize: "1.1rem" }}>
            <span>Total</span>
            <span>₹{finalTotal.toLocaleString("en-IN")}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "0.75rem 1rem",
  border: "1px solid #e8e8e8",
  borderRadius: "0",
  backgroundColor: "#fff",
  color: "#000",
  fontSize: "0.88rem",
  fontFamily: "inherit",
  outline: "none"
};
