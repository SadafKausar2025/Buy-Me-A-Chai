import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-blue-950 text-white flex justify-center items-center px-4 h-10">
      <p className="text-center">
        Copyright &copy; {currentYear} Get me a Chai - All rights reserved!
      </p>
    </footer>
  );
};

export default Footer;
