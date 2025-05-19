import React from "react";
import "./style.css";
import Slider from "../components/Slideshow";
import MyNavbar from "/components/Navbar.jsx";
import { Image, Calendar, Card, CardBody } from "@heroui/react";
import { parseDate, CalendarDate } from '@internationalized/date';

function App() {
  const today = new Date();
  const calendarDateToday = new CalendarDate(
  today.getFullYear(),
  today.getMonth() + 1, 
  today.getDate()
);
  return (
    <div className="App w-screen">
      <MyNavbar />
      <div className="body m-8">
        <h1 className="text-xl">Welcome to my Landing Page</h1>
        <div id="hero" className="mt-8 flex w-full">
          <div className="hero-top flex flex-col md:flex-row justify-between w-full gap-4 mx-h-96">
            <Image
              alt="HeroUI hero Image"
              src="./src/assets/img/soap.jpg"
              radius="sm"
              className="hero-image h-full flex-grow object-cover"
            />
             <Card shadow="md" className="w-full md:w-1/2">
              <CardBody>
                <p className="text-xs lg:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  eu neque rhoncus, gravida turpis ac, tempor lorem. Integer et
                  convallis ex. Nulla ut est vel tortor hendrerit luctus.
                  Praesent dignissim nunc lacus, eu lacinia est sagittis sed.
                  Etiam rutrum efficitur enim, ac egestas elit auctor at. Morbi
                  tempor elementum sem ut lobortis.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  eu neque rhoncus, gravida turpis ac, tempor lorem. Integer et
                  convallis ex. Nulla ut est vel tortor hendrerit luctus.
                  Praesent dignissim nunc lacus, eu lacinia est sagittis sed.
                  Etiam rutrum efficitur enim, ac egestas elit auctor at. Morbi
                  tempor elementum sem ut lobortis.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  eu neque rhoncus, gravida turpis ac, tempor lorem. Integer et
                  convallis ex. Nulla ut est vel tortor hendrerit luctus.
                  Praesent dignissim nunc lacus, eu lacinia est sagittis sed.
                  Etiam rutrum efficitur enim, ac egestas elit auctor at. Morbi
                  tempor elementum sem ut lobortis.
                </p>
              </CardBody>
            </Card>
            <Calendar aria-label="Date (Uncontrolled)" defaultValue={calendarDateToday} className="hidden xl:block min-w-[256px]"/>
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
