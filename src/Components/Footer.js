import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaGithubSquare,
} from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-gray-400 ">
      <hr />
      <div className="flex justify-center mt-4 gap-5">
        <a
          href="https://web.facebook.com/profile.php?id=100012335082538"
          className="text-blue-500 text-2xl"
        >
          <FaFacebookSquare />
        </a>
        <a href="https://github.com/shahadat52" className="text-white text-2xl">
          <FaGithubSquare />
        </a>
        <a href="" className="text-blue-700 text-2xl">
          <FaLinkedin />
        </a>
        <a href="" className="text-blue-500 text-2xl">
          <BsTwitter />
        </a>
      </div>
      <small className="text-blue-700">
        © 2022 Smart Home Inc. All rights reserved.
      </small>
    </div>
  );
};

export default Footer;
