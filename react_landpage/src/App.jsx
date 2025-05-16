
import React from "react";
import './style.css'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@heroui/navbar";
import{Link} from "@heroui/link"


function App() {
  const CollectionSize = MyCollection.length;
  const [index, setActiveStep] = React.useState(0);

const goToNextPicture = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

  return (
        <div className="App">
         <Navbar>
      <NavbarBrand>
        
        <p className="font-bold text-inherit">Ps Gallery</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#gallery">
            Gallery
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
          <h1>Welcome to my Landing Page</h1>
          <div id="hero"></div>
          <div id="gallery"></div>

          <div
            style={{
                marginLeft: "40%",
            }}
        >
            <h2>How to Create Image Slider in ReactJS?</h2>
            <div
                style={{
                    maxWidth: 400,
                    flexGrow: 1,
                }}
            >
                <Paper
                    square
                    elevation={0}
                    style={{
                        height: 50,
                        display: "flex",
                        paddingLeft: theme.spacing(4),
                        backgroundColor: theme.palette.background.default,
                        alignItems: "center",
                    }}
                >
                    <Typography>{MyCollection[index].label}</Typography>
                </Paper>
                <img
                    src={MyCollection[index].imgPath}
                    style={{
                        height: 255,
                        width: "100%",
                        maxWidth: 400,
                        display: "block",
                        overflow: "hidden",
                    }}
                    alt={MyCollection[index].label}
                />
                <MobileStepper
                    variant="text"
                    position="static"
                    index={index}
                    steps={CollectionSize}
                    nextButton={
                        <Button
                            size="small"
                            onClick={goToNextPicture}
                            disabled={index === CollectionSize - 1}
                        >
                            Next
                            {theme.direction !== "rtl" ? (
                                <KeyboardArrowRight />
                            ) : (
                                <KeyboardArrowLeft />
                            )}
                        </Button>
                    }
                />
            </div>
        </div>
        </div>
        
    
  );
}

export default App;