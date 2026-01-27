import { useEffect, useState } from "react";

const Header = () => {
  const [isTransparent, setIsTransparent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsTransparent(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${isTransparent ? "transparent" : ""}`}>
      <h2 className="heading01">CloudXVendor</h2>
    </header>
  );
};

export default Header;
