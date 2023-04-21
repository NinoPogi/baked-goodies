import { useEffect } from "react";
import "./Hero.css";
import pic2 from "../assets/2.jpg";
import pic6 from "../assets/5cake.jpg";
import roblox from "../assets/6throblox.jpg";
import eighteen from "../assets/18.jpg";
import babaji from "../assets/babaji.jpg";
import baboi from "../assets/baboi.jpg";
import bear from "../assets/bear.jpg";
import greenwedding from "../assets/green wedding.jpg";
import picbeside from "../assets/pic-beside-para.png";
import roses from "../assets/roses.jpg";

const Hero = () => {
  useEffect(() => {
    document.title = "Baked Goodies by H";
  }, []);

  const navbar = document.getElementById("nav-bar")!;
  const menu = document.getElementById("menu")!;

  window.onscroll = function () {
    if (window.pageYOffset >= menu.offsetTop) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  };

  window.onscroll = function () {
    if (window.pageYOffset >= menu.offsetTop) {
      navbar.classList.add("outside");
    } else {
      navbar.classList.remove("outside");
    }
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });

  const jumpscare = document.querySelectorAll(".hidden");
  jumpscare.forEach((el) => observer.observe(el));

  return (
    <>
      {/* <div className="wholePageWrapper">
        <nav className="nav-bar">
          <img src="media/logo-no-bg.png" className="main-logo" />
          <h1>Baked Goodies by H</h1>
          <ul id="menu">
            <li className="menu-list">
              <a href="">Home</a>{" "}
            </li>
            <li className="menu-list">
              <a href="">Price List</a>{" "}
            </li>
            <li className="menu-list">
              <a href="">Order Now</a>{" "}
            </li>
          </ul>
        </nav>
        <div className="about">
          <div className="slogan-div">
            <p className="hidden description slogan-ata">
              Baked goodies has a variety of cakes for a variety of occassions.
              Birthday, wedding, or any other family gathering you name it we
              bake a cake for it!
            </p>
            <h5 className="hidden">-H</h5>
          </div>
          <div className="cake-slideshow"></div>
        </div>
        <div className="first-div body-content">
          <div className="hidden pic-wrapper-1">
            <img className="pic-beside-para" src={picbeside} alt="" />
            <p className="hidden description">
              Baked Goodies by H is a cake business founded by Ms. Marjorie
              Hazel Marcelo in July of 2021. Already driven with a passion for
              baking and cooking, Ms. Marcelo, together with her reliable oven
              gifted by her parents way back in 2013, took the risk of starting
              a business in baked goods. Originally starting with baked products
              like buko tarts, milky donuts, cheesebread, and ube cheesedesal at
              the start of the pandemic, Ms. Marcelo then decided to focus on
              just cakes by July 2021, which gave birth to her current business.
            </p>
          </div>
        </div>
        <div className="body-content">
          <div className="cake-previews">
            <div className="pic-wrapper hidden">
              <img className="pics" src={pic2} alt="Pic Unavailable" />
            </div>
            <div className="pic-wrapper hidden">
              <img className="pics" src={bear} alt="Pic Unavailable" />
            </div>
            <div className="pic-wrapper hidden">
              <img className="pics" src={eighteen} alt="Pic Unavailable" />
            </div>
          </div>
          <div className="space"></div>
          <div className="cake-previews">
            <div className="pic-wrapper hidden">
              <img className="pics" src={roses} alt="Pic Unavailable" />
            </div>
            <div className="pic-wrapper hidden">
              <img className="pics" src={greenwedding} alt="Pic Unavailable" />
            </div>
            <div className="pic-wrapper hidden">
              <img className="pics" src={babaji} alt="Pic Unavailable" />
            </div>
          </div>
          <div className="space"></div>
          <div className="cake-previews">
            <div className="pic-wrapper hidden">
              <img className="pics" src={roblox} alt="Pic Unavailable" />
            </div>
            <div className="pic-wrapper hidden">
              <img className="pics" src={pic6} alt="Pic Unavailable" />
            </div>
            <div className="pic-wrapper hidden">
              <img className="pics" src={baboi} alt="Pic Unavailable" />
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Hero;
