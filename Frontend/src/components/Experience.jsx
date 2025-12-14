import { useContext } from "react";
import { themeContext } from "../context/theme";

const Experience = () => {
  const { theme, themeObj } = useContext(themeContext);
  return (
    <div
      className="media borde r rounded-top-3 gap-3 p-2 EXPERIENCE"
      style={{ color: themeObj[theme].tx2 }}
    >
      <div className="w-100 ">
        <h5>
          <b> INTERNSHIP EXPERIENCE</b>
        </h5>
        <div
          className="small exp pb-3 mb-2 text-cente"
          style={{ borderBottom: `1px solid ${themeObj[theme].tx2}` }}
        >
          C++ DSA & MERN Stack Teaching Assistant at @Ed. Tech.{" "}
          <b> Apna College</b>.
        </div>
        <div className="d-sm-block d-md-block d-lg-flex flex-row-reverse pt-3 rounded-3">
          <div className="rounded d-flex flex-column gap-2  flex-grow-1">
            <div className="rounded d-flex flex-column gap-2 justify-content-around  flex-grow-1">
              <li>
                Assisted students in Data Structures & Algorithms (DSA) as well
                as in MERN stack, solving 1000+ problems.
              </li>

              <li>
                Gained hands-on experience with C++ advanced concepts, STL
                libraries, and Implementation techniques. Enhanced
                problem-solving skills through mentoring and collaboration,
                helping students clarify their doubts.
              </li>

              <li>
                Built strong expertise in C++ advanced concepts, STL libraries,
                and implementation techniques, while actively debugging and
                optimizing code in a VS Code environment.
              </li>

              <li>
                Mentored students through systematic learning pathways, creating
                structured roadmaps, practice sets, and supporting them with
                regular doubt-solving sessions and collaborative discussions.
              </li>
            </div>
            <div
              className="w-100 small mt-3 text-end "
              style={{ color: themeObj[theme].tx3 }}
              id="Projects"
            >
              Aug’25 - Dec’25
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
