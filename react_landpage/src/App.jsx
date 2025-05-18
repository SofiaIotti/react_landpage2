import React from "react";
import "./style.css";
import Slider from "../components/Slideshow";
import MyNavbar from "/components/Navbar.jsx";
import { Image, RangeCalendar, Card, CardBody } from "@heroui/react";

function App() {
  return (
    <div className="App h-screen">
      <MyNavbar />
      <div className="body m-8">
        <h1 className="text-xl">Welcome to my Landing Page</h1>
        <div id="hero" className="mt-8">
          <div className="hero-top flex">
            <Image
              alt="HeroUI hero Image"
              src="./src/assets/img/img-7.jpg"
              radius="sm"
            />
            <div className="flex gap-x-4">
              <Card>
                <RangeCalendar />
              </Card>
            </div>
          </div>
          <div className="hero-bottom mt-4">
            <Card shadow="md">
              <CardBody>
                <p className="text-xs">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  eu neque rhoncus, gravida turpis ac, tempor lorem. Integer et
                  convallis ex. Nulla ut est vel tortor hendrerit luctus.
                  Praesent dignissim nunc lacus, eu lacinia est sagittis sed.
                  Etiam rutrum efficitur enim, ac egestas elit auctor at. Morbi
                  tempor elementum sem ut lobortis.
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
        <div id="gallery" className="mt-8 w-full">
          <h2 className="text-xl mb-5">Slideshow</h2>
          <Slider />
        </div>
      </div>
      <div className="footer relative py-5 px-8 bottom-0 ">
        <h5 className="text-lg">Sofia Iotti</h5>
        <p>sofiaiotti1998@gmail.com</p>
        <p>
          <a href="https://www.linkedin.com/in/sofia-iotti-8052ab213/">
            Linkedin
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
