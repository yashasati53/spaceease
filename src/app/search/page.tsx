import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const resolvedSearchParams = await searchParams;
  const query = resolvedSearchParams.q || "";
  const lowerQuery = query.toLowerCase();

  const searchResults = products.filter((product) => {
    return (
      product.name.toLowerCase().includes(lowerQuery) ||
      product.category.toLowerCase().includes(lowerQuery) ||
      product.description.toLowerCase().includes(lowerQuery)
    );
  });

  return (
    <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "2rem 2rem 5rem" }}>
      {/* Page Header */}
      <div style={{ borderBottom: "1px solid #e8e8e8", paddingBottom: "1.5rem", marginBottom: "3rem" }}>
        <h1 style={{ fontSize: "0.85rem", fontWeight: 400, textTransform: "uppercase", letterSpacing: "0.08em" }}>
          Search Results
        </h1>
        <p style={{ fontSize: "1.5rem", fontWeight: 300, marginTop: "1rem" }}>
          {query ? `Showing results for "${query}"` : "Please enter a search term"}
        </p>
        <p style={{ fontSize: "0.78rem", color: "#737373", marginTop: "0.4rem" }}>
          {searchResults.length} {searchResults.length === 1 ? "item" : "items"} found
        </p>
      </div>

      {searchResults.length > 0 ? (
        <div className="products-grid">
          {searchResults.map((product) => (
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
      ) : (
        <div style={{ textAlign: "center", padding: "4rem 0" }}>
          <p style={{ fontSize: "1.2rem", fontWeight: 300, marginBottom: "1rem" }}>
            No products found matching your search.
          </p>
          <p style={{ color: "#737373", fontSize: "0.9rem" }}>
            Try checking for typos or using more general terms.
          </p>
        </div>
      )}
    </div>
  );
}
