import Navbar from "./Navbar";
import Skills from "./Skills";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";

function Applayout() {
  return (
    <>
      <Navbar />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 2000,
          },
          error: {
            duration: 3000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
          },
        }}
      />
    </>
  );
}

export default Applayout;
