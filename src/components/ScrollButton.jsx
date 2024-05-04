import { React, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <button
      onClick={scrollToTop}
      style={{ display: visible ? "flex" : "none" }}
      className="fixed bottom-[40px] left-[90%] rounded-md bg-blue py-3 px-4 text-white bg-blue-gradient z-10"
    >
      <FontAwesomeIcon
        icon={faArrowUp}
      />
    </button>
  );
};

export default ScrollButton;
