import styled from "styled-components";
import img1 from "../asset/Screenshot 2025-01-27 194133.png";
import img2 from "../asset/Screenshot 2025-01-27 130757.png";
import img3 from "../asset/Screenshot 2025-03-29 134648.png";
import img4 from "../asset/Screenshot 2025-01-27 195704.png";
import img5 from "../asset/Screenshot 2025-03-30 211852.png";
import img6 from "../asset/Screenshot 2025-04-07 210700.png";

import { useContext, useEffect, useState } from "react";
import { themeContext } from "../context/theme";

const PROJECT_DATA = {
  titles: [
    "WEB COLOR PALLET APPLICATION",
    "LIVE VISUAL STUDIO CODE (LVSC)",
    "DIGITAL ONLINE OFFLINE MARKET",
    "SORTING VISUALIZER WEB APP",
    "PORTFOLIO WEBSITE",
    "REGEX TASTER AND GENERATOR",
  ],

  intro: [
    <>
      Designed an interactive tool that offers a variety of color schemes for
      websites, including monochromatic, complementary, triadic, tetradic, and
      analogous palettes.
    </>,
    <>
      {" "}
      Developed a live Visual Studio Code editor, enabling users to write HTML,
      CSS, and JavaScript with instant results rendering for real-time
      visualization.
    </>,
    <>
      A full-stack website designed to connect local businesses with nearby
      customers built using HTML, Bootstrap CSS, JavaScript, Node.js,
      Express.js, and MongoDB.{" "}
    </>,
    <>
      Allow users to select the sorting algorithm e.g., Bubble Sort, Merge Sort,
      Quick Sort, etc. Provide controls for custom array size and speed
      adjustment to make the visualization more engaging.
    </>,

    <>
      A portfolio website built using HTML, Bootstrap CSS, JavaScript.{<br />}
      Fully Responsive and simple UI has been used in this portfolio website.
    </>,

    <>
      Designed an interactive tool using simple HTML,JavaScript that offers you
      quickly generate random strings and test your regular expressions.
    </>,
  ],

  discriptions: [
    <>
      Designed an interactive tool that offers a variety of color schemes for
      websites, including monochromatic, complementary, triadic, tetradic, and
      analogous palettes.{<br />}Implemented a user-friendly interface for
      exploring color wheels and combinations tailored for web design.
    </>,
    <>
      Developed a live Visual Studio Code editor, enabling users to write HTML,
      CSS, and JavaScript with instant results rendering for real-time
      visualization.{<br />} Integrated features such as proper formatting,
      syntax highlighting, and auto-completion of predefined code snippets.
      {<br />} Enhanced real-time coding and debugging experiences through an
      interactive interface.
    </>,
    <>
      A full-stack website designed to connect local businesses with nearby
      customers built using HTML, Bootstrap CSS, JavaScript, Node.js,
      Express.js, and MongoDB. {<br />}
      Developed a platform where merchants can create profiles, list products,
      and manage orders efficiently.{<br />}
      Implemented a hyperlocal search system, allowing users to discover and
      purchase products from nearby stores with pickup or local delivery
      options.{<br />}
      Integrated UPI-based payment methods for secure and seamless transactions,
      enhancing the user experience and checkout efficiency.
    </>,

    <>
      Allow users to select the sorting algorithm e.g., Bubble Sort, Merge Sort,
      Quick Sort, etc. Provide controls for custom array size and speed
      adjustment to make the visualization more engaging.
      {<br />}
      Add a progress bar or step counter to show the sorting progress
      dynamically.
      {<br />}
      Make it educational for users who want to learn how sorting algorithms
      work.
    </>,
    <>
      A portfolio website built using HTML, Bootstrap CSS, JavaScript.{<br />}
      Fully Responsive and simple UI has been used in this portfolio website.{" "}
      {<br />}
    </>,
    <>
      This tool helps you quickly generate random strings and test your regular
      expressions. {<br />} Enter starting and ending characters to generate a
      random string, then use regex to extract matching patterns in real-time.
    </>,
  ],

  srcs: [img1, img2, img3, img4, img5, img6],

  teck: [
    ["HTML", "CSS", "JavaScript", "Bootstrap CSS"],
    ["HTML", "CSS", "JavaScript", "React.js", "Bootstrap CSS"],
    [
      "React.js",
      "CSS",
      "JavaScript",
      "Bootstrap CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    ["HTML", "CSS", "JavaScript", "Bootstrap CSS"],
    ["HTML", "CSS", "JavaScript", "React.js", "Bootstrap CSS"],
    ["HTML", "CSS", "JavaScript"],
  ],
};

const ProjectReplica = ({ t, i }) => {
  const { theme, themeObj } = useContext(themeContext);
  const [sm, setSm] = useState(window.innerWidth < 601);

  useEffect(() => {
    window.addEventListener("resize", () => setSm(window.innerWidth < 601));
  });

  const border = { borderBottom: `1px solid ` };

  return (
    <main
      className={`m-card d-flex flex-column py-4 h-100  rounded-3 ${
        sm ? "px-3" : "px-4"
      }`}
      style={{
        borderWidth: "1px",
        borderColor: themeObj[theme].br1,
        borderStyle: "solid",
        color: themeObj[theme].tx2,
        background: `linear-gradient(180deg, ${themeObj[theme].grd1}, ${themeObj[theme].grd2} 60%)`,
      }}
    >
      <div className="mp-img">
        <img
          src={PROJECT_DATA.srcs[i]}
          className="m-img rounded-2 w-100 h-100"
          alt={t}
        />
      </div>
      <b className="m-h mt-3">{t}</b>
      {i == 5 ? (
        <small className="m-abt mt-1" id="Skills">
          {PROJECT_DATA.intro[i]}
        </small>
      ) : (
        <small className="m-abt mt-1">{PROJECT_DATA.intro[i]}</small>
      )}
    </main>
  );
};

const ProjectPage = () => {
  const { theme, themeObj } = useContext(themeContext);
  return (
    <StyledWrapper>
      <header className="media borde r px-2">
        <div className="m-card-title text-cente w-100 position-relative">
          <h5>
            <b
              className="position-relative rounded-5"
              style={{
                zIndex: 100,
              }}
            >
              ALL PROJECTS ARE HERE
            </b>
          </h5>
        </div>
        <div className="my-2 rounded-3" style={{ color: themeObj[theme].tx2 }}>
          <p className="m-abt">
            I have Developed several Projects related to MERNS stack.
          </p>
          <p className="m-abt">
            In my project the tech skills i used in it are - HTML, Bootstrap
            CSS, SCSS, JavaScript, React.js, Node.js , Express.js, MongoDB,
            Socket.io, EJS template, NPM packages and a lot of technologies.
          </p>
        </div>
      </header>

      <main className="p-main  media px-1">
        {PROJECT_DATA.titles.map((t, i) => {
          return (
            <div key={"m-project" + i}>
              <ProjectReplica t={t} i={i} />
            </div>
          );
        })}
      </main>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .p-main {
    // border-bottom: 1px solid #4164722b;
    display: grid;
    grid-template-columns: repeat(
      auto-fit,
      minmax(clamp(300px, 10vw, 400px), 1fr)
    );
  }
  .m-card {
    position: relative;
    color: #aaa;

    line-height: 1.5;
  }

  .mp-img {
    height: 35px;
    width: 55px;
  }

  .m-img {
    aspect-ratio: 1/1;
    object-fit: cover;
    box-shadow: 0 0 2px #399dcbff;
    opacity: 0.7;
  }

  .m-abt {
    font-size: 0.875rem;
  }
`;

export default ProjectPage;
