import Header from "@/components/Header";
import Footer from "@/components/Footer";

/** Secondary pages keep the V4 header/footer. The home page (app/page.tsx)
 *  carries its own nav and footer. */
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}
