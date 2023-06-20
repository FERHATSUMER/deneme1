import React from "react";
import "./header.css";
import { BsInstagram, BsTwitter, BsEnvelope } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { AiFillLinkedin, AiOutlineYoutube } from "react-icons/ai";

const Header = () => {
  return (
    <div className="header-container">
      <img
        className="logo"
        src="https://d1hzl1rkxaqvcd.cloudfront.net/contest_entries/2099580/_600px/7325f77640c92dc603394adcdb428b5c.jpg"
        alt=""
      />
      <h3 className="header-title">Demir Hukuk Bürosu</h3>
      <nav className="header-nav">
        <ul>
          <li>
            <a
              href="https://www.instagram.com/serkandemir.2/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsInstagram />
              <h4>Instagram</h4>
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/serkandemir04"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsTwitter />
              <h4>Twitter</h4>
            </a>
          </li>
          <li>
            <a
              href="mailto:serkandemir@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsEnvelope />
              <h4>Email</h4>
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/serkandemir.2/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
              <h4>Facebook</h4>
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/user/serkandemir1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineYoutube />
              <h4>Youtube</h4>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;