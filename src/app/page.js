import { fetchProducts } from "../lib/api";
import layoutStyles from "../styles/Page.module.css";
import CatalogDisplay from "@/components/ProductCatalog";

export const metadata = {
  title: "Appscrip Lists",
  description:
    "Curated premium selections just for you. Discover top-tier goods with free shipping over $50.",
  metadataBase: new URL('https://appscrip-task-anjali.vercel.app'),
  openGraph: {
    title: "Appscrip Lists",
    description:
      "Curated premium selections just for you. Discover top-tier goods with free shipping over $50.",
    images: ["/images/og-image.jpg"],
  }
};

export default async function CatalogPage() {
  try {
    const items = await fetchProducts();
    return (
      <main className={layoutStyles.pageWrapper}>
        <CatalogDisplay products={items} />
      </main>
    );
  } catch (err) {
    console.error("Failed to load catalog:", err);
    return (
      <main className={layoutStyles.pageWrapper}>
        <section className={layoutStyles.catalogContainer}>
          <div className={layoutStyles.errorNotice}>
            <h2>We're Having a Moment</h2>
            <p>Our catalog is currently unavailable. Please check back shortly.</p>
          </div>
        </section>
      </main>
    );
  }
}
