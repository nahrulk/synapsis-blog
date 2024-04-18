import BgGlassmorphism from "@/components/BgGlassmorphism/BgGlassmorphism";
import SectionBlogList from "@/components/Blogs/SectionBlogList";
import Image from "next/image";

export default function Home() {
  return (
    <div className="nc-BlogPage overflow-hidden relative">
      {/* ======== BG GLASS ======== */}
      <BgGlassmorphism />
      {/* ======== ALL SECTIONS ======== */}
      <div className="container relative">
        {/* === SECTION 1 === */}
        <div className="pt-12 pb-16 lg:pb-28">
          <SectionBlogList />
        </div>
      </div>
    </div>
  );
}
