import styled from "styled-components";
import Social from "./Social";
import axios from "axios";
import { LuLinkedin, LuGithub, LuYoutube } from "react-icons/lu";
import { RiDiscordFill, RiMessageLine, RiWhatsappFill } from "react-icons/ri";
import { useContext, useEffect, useState } from "react";
import { themeContext } from "../context/theme";

const socialLinks = [
  {
    name: "Discord",
    href: "#", // Discord ka direct profile link nahi hota
    icon: RiDiscordFill,
    className: "Discord",
    label: "cre8_hystory",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/mahtab-shah916",
    icon: LuLinkedin,
    className: "Linkedin",
  },
  {
    name: "Youtube",
    href: "https://www.youtube.com/@YourChannelName",
    icon: LuYoutube,
    className: "Youtube",
  },
  {
    name: "Whatsapp",
    href: "https://wa.me/919918108977",
    icon: RiWhatsappFill,
    className: "Whatsapp",
  },
  {
    name: "Mail",
    href: "mailto:mahtab.shah916@gmail.com",
    icon: RiMessageLine,
    className: "Mail",
  },
  {
    name: "Github",
    href: "https://github.com/MahtabShah",
    icon: LuGithub,
    className: "Github",
  },
];

const FormFooter = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(false);
  const [feedbacks, setFeedbacks] = useState(null);

  const { theme, themeObj } = useContext(themeContext);

  const HandelSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(`${import.meta.env.VITE_URL}/feedback`, {
        email: email.trim(),
        username: username.trim(),
        feedback: feedback.trim(),
      });

      console.log("Submitted feedback ! Thanks for feedback", res);

      if (res.status) {
        Flash("Submitted feedback ! Thanks for feedback", "bg-success");
        setUsername("");
        setEmail("");
        setFeedback("");
        setLoading(false);
      } else {
        Flash("Error found ! Try again...", "bg-danger");
      }
    } catch (error) {
      Flash(error.message, "bg-danger");
    } finally {
      setLoading(false);
    }
  };

  const fetch_fbs = async () => {
    const res = await axios.get(`http://localhost:3000/feedback`);
    console.log(res.data);
    setFeedbacks(res.data);
  };

  useEffect(() => {
    fetch_fbs();
  }, []);

  return (
    <StyledWrapper>
      {/* {Flash("Submitted feedback ! Thanks for feedback")} */}

      <div
        className="flash d-flex flex-column gap-3 p-2 top-0 position-fixed"
        style={{ zIndex: 200 }}
      ></div>

      <div className="p-1 media gap-5 social" id="footer">
        <div
          className=" m-card rounded-3 mb-5 flex-grow-1 px-3"
          style={{
            color: themeObj[theme].tx2,
            border: `1px solid ${themeObj[theme].br1}`,
            background: `linear-gradient(180deg, ${themeObj[theme].grd1}, ${themeObj[theme].grd2} 60%)`,
          }}
        >
          <h5 className="my-4">
            <b>Share Your Feedback</b>
          </h5>

          <form className="rounded-3" onSubmit={HandelSubmit}>
            <div className="mb-3">
              <input
                type="text"
                className="input w-100 py-2 px-1 rounded-0"
                placeholder="Enter your name"
                name="username"
                required
                value={username}
                onInput={(e) => setUsername(e.target.value)}
                style={{
                  color: themeObj[theme].tx1,
                  borderBottom: `1px solid ${themeObj[theme].br1}`,
                }}
              />
            </div>

            <div className="mb-3">
              <input
                type="email"
                name="email"
                className="input w-100 py-2 px-1 rounded-0"
                placeholder="Enter your email"
                value={email}
                required
                onInput={(e) => setEmail(e.target.value)}
                style={{
                  color: themeObj[theme].tx1,
                  borderBottom: `1px solid ${themeObj[theme].br1}`,
                }}
              />
            </div>

            <div className="mb-3">
              <input
                type="text"
                className="input w-100 py-2 px-1 rounded-0"
                placeholder="Write your feedback..."
                name="feedback"
                required
                value={feedback}
                style={{
                  color: themeObj[theme].tx1,
                  borderBottom: `1px solid ${themeObj[theme].br1}`,
                }}
                onInput={(e) => setFeedback(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="btn btn-outline-info px-4 mt-3 mb-4"
              disabled={loading && true}
            >
              {loading ? (
                <div className="src-spin d-flex gap-2 align-items-center justify-content-center">
                  <span className="s1"></span>
                  <span className="s2"></span>
                  <span className="s3"></span>
                </div>
              ) : (
                "Submit Feedback"
              )}
            </button>
          </form>
        </div>
        <h5 className="px-2 mb-4 Reach">
          <b>Reach out to me !</b>
        </h5>
        <div
          className="rounded-3 ssl-icon"
          style={{ color: themeObj[theme].tx2 }}
        >
          {socialLinks.map((item, index) => {
            const Icon = item.icon;

            return (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center d-flex flex-column"
                onClick={(e) => item.href === "#" && e.preventDefault()}
              >
                <div className={`m-icon ${item.className} p-3 text-center`}>
                  <Icon size={21} />
                </div>

                <span style={{ color: themeObj[theme].tx2 }}>
                  {item.label || item.name}
                </span>
              </a>
            );
          })}
        </div>
      </div>

      {feedbacks && (
        <div
          className="media d-flex fb-m overflow-auto"
          style={{ color: themeObj[theme].tx2 }}
        >
          {feedbacks.map((f, i) => {
            return (
              <div
                className="p-3 rounded-3"
                key={"feed" + i}
                style={{
                  color: themeObj[theme].tx2,
                  border: `1px solid ${themeObj[theme].br1}`,
                  background: `linear-gradient(180deg, ${themeObj[theme].grd1}, ${themeObj[theme].grd2} 60%)`,
                }}
              >
                <div>{f.username}</div>
                <div className="small mb-2">{f.email}</div>
                <div
                  className="pt-2"
                  style={{ borderTop: `1px solid ${themeObj[theme].br1}` }}
                >
                  {f.feedback}
                </div>
              </div>
            );
          })}
        </div>
      )}

      <div
        className="mt-5"
        style={{
          borderTop: `1px solid ${themeObj[theme].br2}`,
          color: themeObj[theme].tx1,
        }}
      >
        <footer className="p-4 media text-center mb-0">
          <div>Mahtab Shah | 12'2025</div>
          <div>(+91) 9918108977 | mahtab.shah916@gmail.com</div>
        </footer>
      </div>
    </StyledWrapper>
  );
};

export const Flash = (msg, cls) => {
  const div = document.querySelector(".flash");
  const msgdiv = document.createElement("div");
  msgdiv.className = `p-2 rounded text-light ${cls}`;
  msgdiv.style.transitionDuration = "1s";

  msgdiv.innerHTML = `
     <div
      style={{
        color: "1px solid red",
        width: "300px",
        margin: "auto",
        top: "10px",
      }}
    >
      ${msg}
    </div>
  
  `;

  div.append(msgdiv);

  setTimeout(() => {
    msgdiv.style.transform = `translateX(-110%)`;
  }, 1000);

  setTimeout(() => {
    msgdiv.remove();
  }, 2000);
};

const StyledWrapper = styled.div`
  .m-card {
    position: relative;
    // background: linear-gradient(180deg, #07070705, #0e2b541a 60%);

    line-height: 1.5;
  }

  .m-icon {
    place-self: center;
    width: 54px;
    aspect-ratio: 1/1;
    border-radius: 50%;
    transition-duration: 200ms;
  }

  span,
  a {
    text-decoration: none !important;
    color: rgba(255, 255, 255, 1);
  }

  .Discord {
    background: #4578f7ff;
  }

  .Linkedin {
    background: #048cf4ff;
  }

  .Github {
    background: #614c4cff;
  }

  .Youtube {
    background: #c21e1eff;
  }

  .Whatsapp {
    background: #28a839ff;
  }

  .Mail {
    background: #319bcdff;
  }

  .m-icon:hover {
    transform: translateX(4px);
  }
  .Reach {
    display: none;
  }
  footer {
    height: 124px;
    place-content: center;
  }

  .ssl-icon {
    height: min-content;
    max-width: 500px;
  }

  .src-spin {
    width: 40px;
    height: 23px;
  }

  .src-spin span {
    // border: 1px solid red;
    width: 10px;
    aspect-ratio: 1/1 !important;
    border-radius: 50%;
    background: #28dbffff;
  }

  .s1 {
    animation: updown 1s ease-in-out infinite;
  }

  .s2 {
    animation: updown 1s ease-in-out 0.1s infinite;
  }

  .s3 {
    animation: updown 1s ease-in-out 0.2s infinite;
  }

  @keyframes updown {
    0% {
      transform: translateY(5px);
    }
    50% {
      transform: translateY(-5px);
    }
    100% {
      transform: translateY(5px);
    }
  }

  .fb-m {
    max-width: 100%;
  }

  .fb-m::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

export default FormFooter;
