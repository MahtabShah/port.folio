import { useEffect, useState } from "react";
import pic from "../asset/Screenshot 2025-11-17 164237.png";
import { CgMenuGridR } from "react-icons/cg";
import { IoMdCloseCircleOutline } from "react-icons/io";

import { LuSunMoon } from "react-icons/lu";
import { RiSunFill } from "react-icons/ri";

import node from "../asset/nodejs-3.svg";
import react from "../asset/react-2.svg";
import tailwind from "../asset/tailwind-css-2.svg";
import c from "../asset/c.svg";
import css from "../asset/bootstrap-5-1.svg";
import pdf from "../../public/MAHTAB SHAH SUPERSET EXP RSM.pdf";

import FormFooter from "../UI/Footer";
import TechnicalSkill from "./TechnicalSkill";
import Experience from "./Experience";
import ProjectPage from "../UI/ProjectCard";
import { useContext } from "react";
import { themeContext } from "../context/theme";

const option = [
  { herf: "#Home", name: "Home" },
  { herf: "#Projects", name: "Projects" },
  { herf: "#Skills", name: "All Skills" },
  // { herf: "#", name: "Certification" },
  { herf: "#footer", name: "Connect with me" },
  { herf: pdf, name: "Resume" },
];

const nav = [
  { name: "node", src: node },
  { name: "react", src: react },
  { name: "css", src: css },
  { name: "tailwind", src: tailwind },
  { name: "c", src: c },
];

function HomePage() {
  const [open, setOpen] = useState(false);
  const { theme, themeObj } = useContext(themeContext);

  useEffect(() => {
    document.body.style.background = `repeating-linear-gradient(100deg, ${themeObj[theme].bg1}, ${themeObj[theme].bg2})
      `;

    // window.addEventListener("scroll", () => {
    //   const h = window.scrollY;

    //   document.querySelector("#root").style.background = `
    //   repeating-linear-gradient(
    //   ${h * 0.015}deg,
    //   transparent 0px,
    //   transparent calc(12vw + 4vh + 40px),
    //    ${theme ? "#e1d7e3ff" : "#21212e3e"} calc(12vw + 4vh + 42px)
    // ),
    // repeating-linear-gradient(
    //    ${h * 0.015 + 90}deg,
    //   transparent 0px,
    //   transparent calc(12vw + 4vh + 32px),
    //  ${theme ? "#e1d7e3ff" : "#21212e3e"} calc(12vw + 4vh + 34px)
    // )`;
    // });
  }, [theme]);

  return (
    <div className="d-flex">
      <div className="home-parent pt-2 w-100" id="Home" data-deg="40deg">
        <div
          className={`top-0 w-100 navbar position-fixed d-flex`}
          style={{
            zIndex: 101,
            boxShadow: `0px 1px 10px ${themeObj[theme].bg3}`,
            background: `linear-gradient(180deg, ${themeObj[theme].bg1},  ${themeObj[theme].bg2} 60%)`,
          }}
        >
          <span className="m-h fs-3 ps-4 ps-2 fw-bold flex-grow-1">M</span>
          <div
            className="navlink  gap-3 p-2 small"
            style={{ color: themeObj[theme].tx1 }}
          >
            <Option />
          </div>
          <ThemeButton />
          <div
            className="bar-btn px-2"
            style={{ color: themeObj[theme].tx1 }}
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <IoMdCloseCircleOutline size={24} />
            ) : (
              <CgMenuGridR size={24} />
            )}
          </div>
        </div>

        <div
          className="left-navbar px-3 py-3 position-fixed bottom-0 flex-column gap-3 shadow-lg"
          style={{
            transform: !open && `translateX(-100%)`,
            zIndex: 101,
            boxShadow: `0px 1px 10px ${themeObj[theme].tx3}`,
            background: `linear-gradient(110deg, ${themeObj[theme].bg3},  ${themeObj[theme].bg1} 60%)`,
          }}
        >
          <Option setOpen={setOpen} />
        </div>

        <div className="wrap-up justify-content-center d-flex flex-column p-3">
          <div
            className="rotate position-relative mt-5 d-flex justify-content-center align-items-center"
            style={{
              width: "300px",
              placeSelf: "center",
              borderRadius: "50%",
              aspectRatio: "1/1",
            }}
          >
            {nav.map((n, i) => {
              return (
                <div key={n + i} className={`position-absolute icon ${n.name}`}>
                  <img src={n.src} alt="" className="h-100  w-100" />
                </div>
              );
            })}

            <div
              className="img position-relative"
              style={{
                width: "200px",
                aspectRatio: "1/1",
                placeSelf: "center",
                rotate: "0",
              }}
            >
              <div className="h-100 ph">
                <img
                  src={pic}
                  alt="photo"
                  className="h-100 w-100 p-1"
                  style={{ objectFit: "cover", borderRadius: "50%" }}
                />
              </div>
            </div>
          </div>

          <div
            className="rounded home mx-2 mt-3"
            style={{
              color: `${themeObj[theme].tx1}`,
            }}
          >
            <div className="box p-2 w-100 text-center">
              <div className="name fs-2 text-info">Mahtab Shah</div>
              <div className="small mb-2">
                Software Developer, Freelancer and MERN Stack Developer.
              </div>
              <div className="info ">
                I am persuing B. Tech. in Electrical Engineering from IIT ISM
                Dhanbad. "Pre-Final year student" EE'27
              </div>
              <div className=" small my- text-center">
                Pratapgarh, Uttar Pradesh, INDIA.
              </div>
            </div>
          </div>
          <div className="p-3 d-flex gap-3 rsm-mail">
            <div className="py-2 px-3 btn btn-info text-light rounded-5">
              <a download={pdf}>Download Resume</a>
            </div>
          </div>
        </div>

        <Experience />
        <ProjectPage />
        <TechnicalSkill />
        <FormFooter />
      </div>
    </div>
  );
}

const Option = ({ setOpen }) => {
  return (
    <>
      {option.map((el, idx) => {
        return (
          <a href={el.herf} key={`a` + idx} onClick={() => setOpen(false)}>
            {el.name}
          </a>
        );
      })}
    </>
  );
};

const ThemeButton = () => {
  const { theme, themeObj, setTheme } = useContext(themeContext);

  return (
    <>
      <div
        className="px-3"
        style={{
          transitionDuration: "300ms",
          justifySelf: "flex-end",
          color: themeObj[theme].tx1,
        }}
        onClick={() => setTheme((prev) => (prev == "light" ? "dark" : "light"))}
      >
        {theme == "light" ? <RiSunFill size={21} /> : <LuSunMoon size={21} />}
      </div>
    </>
  );
};

const RIGTH_BAR = () => {
  return (
    <div className="borde r" style={{ width: "1000px" }}>
      <div
        className="d-flex flex-column gap-3 position-fixed border-start px-4 pb-2"
        style={{ top: "20vh", right: "5vw", width: "200px" }}
      >
        {option.map((el, idx) => {
          return (
            <a href={el.herf} key={`a` + idx} onClick={() => setOpen(false)}>
              {el.name}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
