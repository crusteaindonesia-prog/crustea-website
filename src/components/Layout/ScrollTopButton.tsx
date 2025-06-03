import { createPortal } from "react-dom";

interface ScrollTopButtonProps {
  visible: boolean;
}

const ScrollTopButton: React.FC<ScrollTopButtonProps> = ({ visible }) => {
  if (typeof window === "undefined") return null;

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const element = (
    <button
      onClick={handleClick}
      id="scroll-top"
      className={`fixed z-[9999] p-3 bg-[#ACCB37] text-white text-lg rounded-full shadow-md transition-opacity duration-300 ${
        visible ? "opacity-80" : "opacity-0 pointer-events-none"
      } hover:opacity-100 hover:scale-110`}
      style={{
        bottom: "90px",
        right: "30px",
      }}
      aria-label="Scroll to top"
    >
      ↑
    </button>
  );

  return createPortal(element, document.body);
};

export default ScrollTopButton;
