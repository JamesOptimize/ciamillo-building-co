import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "@/pages/Home";
import Project492 from "@/pages/Project492";
import Brand from "@/pages/Brand";

function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) { el.scrollIntoView(); return; }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/residences/492-wainscott-harbor-road" element={<Project492 />} />
        <Route path="/brand" element={<Brand />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}
