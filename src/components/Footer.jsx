import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-white body-font my-5">
      <div className="flex justify-center items-center gap-7">
        <Link to="https://twitter.com/PratikG108" target="_blank">
          <FaTwitter size="1.4rem" />
        </Link>
        <Link
          to="https://www.linkedin.com/in/pratik-gurav-508744236/"
          target="_blank"
        >
          <FaLinkedin size="1.4rem" />
        </Link>
        <Link to="https://github.com/GuravPratik" target="_blank">
          <FaGithub size="1.4rem" />
        </Link>
        <Link to="https://www.instagram.com/pratik.gurav.108/" target="_blank">
          <FaInstagram size="1.4rem" />
        </Link>
      </div>
      <div className="text-center my-5">
        <p>&copy; {currentYear} Pratik Gurav. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
