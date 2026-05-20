"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function CheckoutPage() {
  const router = useRouter();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate network request for payment gateway
    setTimeout(() => {
      router.push("/checkout/success");
    }, 2000);
  };

  return (
    <div className="container" style={{ padding: "4rem 2rem", minHeight: "80vh" }}>
      <h1 className="heading-xl" style={{ marginBottom: "3rem", textAlign: "center" }}>Secure Checkout</h1>
      
      <div className="checkout-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem" }}>
        {/* Shipping & Payment Form */}
        <div>
          <h2 className="heading-md" style={{ marginBottom: "2rem" }}>1. Shipping Details</h2>
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

            <h2 className="heading-md" style={{ marginBottom: "2rem" }}>2. Mock Payment</h2>
            <div style={{ padding: "1.5rem", border: "1px solid var(--border-color)", borderRadius: "8px", marginBottom: "2rem", backgroundColor: "var(--bg-secondary)" }}>
              <p style={{ color: "var(--text-secondary)", marginBottom: "1rem" }}>
                This is a static mock. No real transaction will occur.
              </p>
              <input type="text" placeholder="Card Number (Mock)" disabled value="**** **** **** 4242" style={{ ...inputStyle, marginBottom: "1rem" }} />
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <input type="text" placeholder="MM/YY" disabled value="12/25" style={inputStyle} />
                <input type="text" placeholder="CVV" disabled value="123" style={inputStyle} />
              </div>
            </div>

            <button type="submit" className="btn-primary" disabled={isProcessing} style={{ width: "100%", padding: "1rem", fontSize: "1.1rem" }}>
              {isProcessing ? "Processing Payment..." : "Pay ₹2,200"}
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div style={{ padding: "2rem", backgroundColor: "var(--bg-secondary)", borderRadius: "12px", height: "fit-content" }}>
          <h2 className="heading-md" style={{ marginBottom: "2rem" }}>Order Summary</h2>
          
          <div style={{ display: "flex", gap: "1rem", marginBottom: "2rem", paddingBottom: "2rem", borderBottom: "1px solid var(--border-color)" }}>
            <div style={{ width: "80px", height: "80px", position: "relative", borderRadius: "8px", overflow: "hidden" }}>
              <Image src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=200&q=80" alt="Product" fill style={{ objectFit: "cover" }} />
            </div>
            <div style={{ flex: 1 }}>
              <h3 style={{ fontWeight: "600", marginBottom: "0.25rem" }}>Under-bed Eco Box</h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>Qty: 1</p>
            </div>
            <div style={{ fontWeight: "600" }}>₹2,200</div>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem", color: "var(--text-secondary)" }}>
            <span>Subtotal</span>
            <span>₹2,200</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem", color: "var(--text-secondary)" }}>
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: "2rem", paddingTop: "1rem", borderTop: "1px solid var(--border-color)", fontWeight: "bold", fontSize: "1.2rem" }}>
            <span>Total</span>
            <span style={{ color: "var(--accent-terra)" }}>₹2,200</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "0.75rem 1rem",
  border: "1px solid var(--border-color)",
  borderRadius: "4px",
  backgroundColor: "var(--bg-primary)",
  color: "var(--text-primary)",
  fontSize: "1rem"
};
