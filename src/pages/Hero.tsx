import { useEffect } from "react";
import "./Hero.css";

const Hero = () => {
  useEffect(() => {
    document.title = "Baked Goodies by H";
  }, []);
  return <div>Hero</div>;
};

export default Hero;
