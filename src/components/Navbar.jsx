import { useEffect, useState } from "react";

export default function Navbar() {
  const [year, setYear] = useState("");

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <header>
      <div className="nav">{/* Copy your exact nav HTML here */}</div>
    </header>
  );
}
