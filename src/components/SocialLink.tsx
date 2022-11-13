import { useEffect, useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export const SocialLink = () => {
  const [bottom, setBottom] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        setScrollPos(window.pageYOffset);
      });
    }
    window.onscroll = function (ev) {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setBottom(true);
      }
    };
  }, [scrollPos, bottom]);

  return (
    <div>
      {(scrollPos === 0 || width < 800) && (
        <div className="absolute bottom-10 left-0 flex flex-col items-end gap-2 z-0">
          <div className="flex gap-2">
            <div className="inline-block bottom-0 right-0 hover:scale-110">
              <a
                href="https://www.linkedin.com/in/maria-opland-9124031a1/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn size={22} />
              </a>
            </div>
            <div className="inline-block bottom-0 right-0 hover:scale-110">
              <a
                href="https://github.com/mariaopl"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub size={22} />
              </a>
            </div>
          </div>
          <div className="border-b-4 border-gray-700 w-40" />
        </div>
      )}
      {scrollPos > 0 && width > 800 && (
        <div className="fixed bottom-0 left-0 flex flex-row z-0 px-20">
          <div className="pr-2 inline-block top-0">
            <div className="block bottom-0 right-0 pb-2 hover:scale-110">
              <a
                href="https://www.linkedin.com/in/maria-opland-9124031a1/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn size={22} />
              </a>
            </div>
            <div className="block bottom-0 right-0 hover:scale-110">
              <a
                href="https://github.com/mariaopl"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub size={22} />
              </a>
            </div>
          </div>
          <div className="inline-block border-r-4 border-gray-700 h-40 bottom-0" />
        </div>
      )}
    </div>
  );
};
