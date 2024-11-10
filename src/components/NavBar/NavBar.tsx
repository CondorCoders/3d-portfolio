import { useContext, useEffect, useState } from "react";
import styles from "./NavBar.module.css";
import { ModelContext } from "../../contexts/ModelContext";

const navItems = [
  {
    id: "profile",
    href: "#profile",
    label: "Profile",
  },
  {
    id: "history",
    href: "#history",
    label: "History",
  },
  {
    id: "highlights",
    href: "#highlights",
    label: "Highlights",
  },
  {
    id: "condorcoders",
    href: "#condorcoders",
    label: "Condorcoders",
  },
];

export const NavBar = () => {
  const { currentSection } = useContext(ModelContext);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const positionY = window.scrollY;

      if (positionY === 0) {
        setScrolled(false);
      } else {
        setScrolled(true);
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", () => setScrolled(false));
    };
  }, []);

  return (
    <nav className={styles.navbar}>
      <ul
        className={`${styles.navContainer} ${
          scrolled ? styles.navbarBackground : ""
        }`}
      >
        {navItems.map((item) => (
          <li key={item.id}>
            <a
              href={item.href}
              className={`${styles.link} ${
                currentSection === item.id ? styles.active : ""
              }`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
