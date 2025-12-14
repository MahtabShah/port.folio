import { useContext, useEffect, useState } from "react";
import { themeContext } from "../context/theme";

const Skills = [
  "C/C++",
  "DSA",
  "OOPS",
  "HTML",
  "SCSS",
  "CSS",
  "Bootstrap CSS",
  "Tailwind CSS",
  "EJS",
  "JavaScript",
  "React.js",
  "Node.js",
  "Express",
  "MongoDB",
  "MySQL",
  "Git & GitHub",
  "Socket.io",
  "VS-Code",
];

const TechnicalSkill = () => {
  const { theme, themeObj } = useContext(themeContext);
  const [sm, setSm] = useState(window.innerWidth < 601);

  useEffect(() => {
    window.addEventListener("resize", () => setSm(window.innerWidth < 601));
  });
  return (
    <div className="p-1 mt-4  borde r media">
      <div className="mb-4 d-flex flex-wrap rounded3 ">
        <div className="mx-1 ">
          <h5 className="fw-bold ex p-">
            <b>MY TECHNICAL SKILLS</b>
          </h5>

          <div
            style={{
              color: themeObj[theme].tx2,
            }}
          >
            <p>
              I have hands-on experience across the full stack, working with
              modern technologies used in real-world applications.
            </p>{" "}
            <p>
              My skill set covers both frontend and backend development,
              allowing me to build responsive user interfaces as well as
              efficient server-side logic. I enjoy turning ideas into functional
              products, writing clean code, and continuously improving my craft
              by learning new tools and techniques.
            </p>
          </div>
        </div>
        <div>
          <div className="d-flex flex-wrap gap-2 ">
            {Skills.map((s, i) => (
              <span
                key={i}
                className="badge mb-skl rounded-pill  px-3 py-2"
                style={{
                  color: themeObj[theme].tx2,
                  border: `1px solid ${themeObj[theme].br1}`,
                  background: `linear-gradient(180deg, ${themeObj[theme].grd1}, ${themeObj[theme].grd2} 60%)`,
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalSkill;
