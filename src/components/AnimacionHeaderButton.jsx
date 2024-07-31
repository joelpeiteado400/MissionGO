import { useState } from "react";
import { MagicTabSelect } from "react-magic-motion";

const pillTabs = [
  { href: "#inicio", label: "Inicio" },
  { href: "#comofunciona", label: "Cómo Funciona" },
  { href: "#mc_embed_shell", label: "Registrarse" }
];

export function PillTabs({ setShowMenu }) { // Asegúrate de recibir setShowMenu como prop
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleLinkClick = () => {
    setShowMenu(false); // Cierra el menú cuando se hace clic en un enlace
  };

  const tabsComponents = pillTabs.map((tab, i) => (
    <a
      href={tab.href}
      key={i}
      onMouseEnter={() => setHoveredIndex(i)}
      onMouseLeave={() => setHoveredIndex(null)}
      onClick={handleLinkClick}
      className="text-lg justify-center xl:w-[10rem] my-2 md:my-0 mx-1 flex items-center relative p-4 text-white no-underline"
      style={{
        border: 0,
        borderRadius: "999px"
      }}
    >
      {hoveredIndex === i && (
        <MagicTabSelect
          id="pillTabs"
          transition={{ type: "spring", bounce: 0.35 }}
        >
          <span
            style={{
              borderRadius: "999px",
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 10,
              border: "solid 3px",
              borderColor: "#450170",
              boxShadow: "0 0 5px rgba(0,0,0,0.5)"
            }}
          />
        </MagicTabSelect>
      )}
      {tab.label}
    </a>
  ));

  return (
    <div className="flex justify-center items-center flex-col gap-4 md:gap-6 xl:gap-[4rem] md:flex-row" style={{ margin: "0.75rem 0" }}>
      {tabsComponents}
    </div>
  );
}