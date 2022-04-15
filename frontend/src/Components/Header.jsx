import React from "react";
import {
  FaAlignJustify,
  FaFacebookF,
  FaGithub,
  FaHome,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaCartPlus,
} from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import "./Header.css";
export const Header = () => {
  const [state, setState] = React.useState(false);
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="home">
          <a href="#">
            <FaHome id="HomeIcon" />
          </a>
        </div>
        <ul className="navbar__left">
          <div className="navbar__title">
            <span className="Span">
              <FaCartPlus />
              MyShop{" "}
            </span>
          </div>
        </ul>
        <ul className="ln">
          <a
            className="nav-btn-outline"
            style={{ fontWeight: "450", color: "white" }}
            href="#"
          >
            Home
          </a>
          <a className="nav-btn-outline" style={{ color: "#F9F7FC" }} href="#">
            Achievements
          </a>
          <a className="nav-btn-outline" href="#">
            Projects
          </a>
          <a className="nav-btn-outline" href="#">
            Skills
          </a>
        </ul>
        <div className="search_section">
          <input type="text" id="search_box" />
          <button className="nav__btn">Search</button>
        </div>
        <div className="log">
          <a className="nav-btn-outline">
            <i className="fa fa-shopping-cart" style={{ margin: "5px" }} />
            Cart
          </a>
          <a className="nav-btn-outline">
            <i className="fas fa-user" style={{ margin: "5px" }} />
            Log In
          </a>
        </div>

        {state ? (
          <div className="navbar__right">
            <div className="upper_content">
              <ul className="ul__box">
                <li>
                  <a href="#" onClick={() => setState(!state)}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" onClick={() => setState(!state)}>
                    Achievements
                  </a>
                </li>
                <li>
                  <a href="#" onClick={() => setState(!state)}>
                    Projects
                  </a>
                </li>
              </ul>
              <ul className="ul__box">
                <li>
                  <a href="#" onClick={() => setState(!state)}>
                    Technical Skills
                  </a>
                </li>
                <li>
                  <a href="#" onClick={() => setState(!state)}>
                    Fitness & Lifestyle
                  </a>
                </li>
              </ul>
            </div>
            <hr />
            <ul
              type="none"
              className="upper_content"
              style={{ justifyContent: "center" }}
            >
              <li>
                <a href="https://www.linkedin.com/in/ashpak-mulani/">
                  <FaLinkedin className="nav_ico" />
                </a>
              </li>
              <li>
                <a href="https://github.com/ashpakmulanii">
                  <FaGithub className="nav_ico" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/ashpakmulanii/">
                  <FaInstagram className="nav_ico" />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/ashpak.mulani.3994/">
                  <FaFacebookF className="nav_ico" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/AshpakMulanii">
                  <FaTwitter className="nav_ico" />
                </a>
              </li>
            </ul>
          </div>
        ) : (
          ""
        )}

        <div className="toggle__box" onClick={() => setState(!state)}>
          {!state ? (
            <FaAlignJustify className="toggle__btn" />
          ) : (
            <AiOutlineClose className="toggle__btn" />
          )}
        </div>
      </div>
    </nav>
  );
};
