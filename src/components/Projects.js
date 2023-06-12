import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg from "../assets/img/Login - Google Chrome 11-03-2023 15_27_31.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import whatsapp_image from "../assets/img/WhatsApp_Image.jpeg";
import video from "../assets/img/video.mp4";
import wf from "../assets/img/wf.mp4";
import luna from "../assets/img/luna.mkv";
import sm from "../assets/img/sm.mp4";
import woh from "../assets/img/woh.mp4";
import cr from "../assets/img/carRacing.mp4";
import video_chat from "../assets/img/video_chat.mp4";
import calc from "../assets/img/calc.mp4";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects1 = [
    {
      title: "Restaurant Seat Booking ",
      description: "",
      videoUrl: video,
      buttonLabel: "Check out",
      buttonLink: "https://github.com/RanganDas/Restaurant_seat_booking",
    },
  ];
  const projects2 = [
    {
      title: "Realtime chatting website",
      description: "",
      videoUrl: video_chat,
      buttonLabel: "Check out",
      buttonLink: "https://github.com/RanganDas/MyChatApp",
    },
  ];
  const projects3 = [
    {
      title: "Weather forecast website",
      description: "",
      videoUrl: wf,
      buttonLabel: "Check out",
      buttonLink: "https://github.com/RanganDas/WeatherForecast",
    },
  ];
  const projects4 = [
    {
      title: "Calculator Android App",
      description: "",
      videoUrl: calc,
      buttonLabel: "Check out",
      buttonLink: "https://rangan-das.itch.io/calculator",
    },
  ];
   
  const projects6 = [
    {
      title: "Wheels of hope",
      description: "",
      videoUrl: woh,
      buttonLabel: "Check out",
      buttonLink: "https://rangan-das.itch.io/woh",
    },
];
const projects7 = [
  {
    title: "Syringe Man",
    description: "",
    videoUrl: sm,
    buttonLabel: "Check out",
    buttonLink: "https://rangan-das.itch.io/syringe-man-mobile",
  },
];
const projects8 = [
  {
    title: "Highway Drift",
    description: "",
    videoUrl: cr,
    buttonLabel: "Check out",
    buttonLink: "https://rangan-das.itch.io/highway-drift-main",
  },
];


  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <h2>My Projects</h2>
                  <p>Building products that make a difference. Coding by day, dreaming by night.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Web</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Applications</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Games</Nav.Link>
                      </Nav.Item>
                    </Nav>

                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects1.map((projects1) => {
                              return (
                                <div className="project-container">
                                  <div className="project-number">
                                    
                                  </div>
                                  <ProjectCard
                                    title={projects1.title}
                                    description={projects1.description}
                                    videoUrl={projects1.videoUrl}
                                    buttonLabel={projects1.buttonLabel}
                                    buttonLink={projects1.buttonLink}
                                  />
                                  <div className="project-details">
                                    <h2>1. Restaurant Seat Booking Website</h2>
                                    <p><b>Description:</b> This is a seat booking website designed specifically for restaurants. Users can easily create an account and securely sign in. To ensure security, user verification is conducted through OTP (one-time password). In case users forget their passwords, a convenient password recovery option is available. Moreover, restaurant owners can also create their own accounts on the website. Restaurants are categorized into two types: Prime and Non-Prime. To make a reservation, users are required to provide accurate information such as date, time, and other relevant details. The website's backend is powered by PHP, while SQL serves as the database, empowering the website owner to efficiently manage and modify all types of stored data.</p>
                                    <p><b>Tech Stack:</b> HTML, CSS, JS, PHP, MySQL   </p>
                                  </div>
                                </div>
 
                              )
                            })
                          }
                          {
                            projects2.map((projects2) => {
                              return (
                                <div className="project-container">
                                  <div className="project-number">
                                    
                                  </div>
                                  <ProjectCard
                                    title={projects2.title}
                                    description={projects2.description}
                                    videoUrl={projects2.videoUrl}
                                    buttonLabel={projects2.buttonLabel}
                                    buttonLink={projects2.buttonLink}
                                  />
                                  <div className="project-details">
                                  <h2>2. Realtime chatting application</h2>
                                    <p><b>Description:</b>  This is a simple application for chatting. The chat system is realtime. When user enters the website it will ask the user's name. If the the user entered his/her name then he/she willbe joined in the chat. The frontend part of the website is designed by HTML and CSS and the backend part is programmed with javascript and socket.IO</p>
                                    <p><b>Tech Stack:</b> HTML, CSS, JS, Socket.IO, Node</p>
                                  </div>
                                </div>
 
                              )
                            })
                          }
                          {
                            projects3.map((projects3) => {
                              return (
                                <div className="project-container">
                                  <div className="project-number">
                                    
                                  </div>
                                  <ProjectCard
                                    title={projects3.title}
                                    description={projects3.description}
                                    videoUrl={projects3.videoUrl}
                                    buttonLabel={projects3.buttonLabel}
                                    buttonLink={projects3.buttonLink}
                                  />
                                  <div className="project-details">
                                  <h2>3. Weather forecast application</h2>
                                    <p><b>Description:</b>  This is a simple application for checking the temrature of any city accross the world. The API that is used to feetch the data here is OpenWeatherMap. The frontend part of the website is designed by HTML, CSS, JS and the backend part is programmed with nodeJS</p>
                                    <p><b>Tech Stack:</b> HTML, CSS, JS, node, Open-weather API</p>
                                  </div>
                                </div>
 
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {
                            projects4.map((projects4) => {
                              return (
                                <div className="project-container">
                                  <div className="project-number">
                                    
                                  </div>
                                  <ProjectCard
                                    title={projects4.title}
                                    description={projects4.description}
                                    videoUrl={projects4.videoUrl}
                                    buttonLabel={projects4.buttonLabel}
                                    buttonLink={projects4.buttonLink}
                                  />
                                  <div className="project-details">
                                    <h2>1. Calculator Android App</h2>
                                    <p><b>Description:</b>This is a calculator app for android devices. It is made with unity and coded with C#. This app has a very simple installation method. We can perform basic arithmeetic operations like addition, subtraction, divition etc with it. It has two input fields to input numbers. After giving input select an operation to perform annd the result will be shown in the output box below. </p>
                                    <p><b>Tech Stack:</b> C#, unity</p>
                                  </div>
                                </div>
                              )
                            })
                          }
                          
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          
                          {
                            projects6.map((projects6) => {
                              return (
                                <div className="project-container">
                                  <div className="project-number">
                                    
                                  </div>
                                  <ProjectCard
                                    title={projects6.title}
                                    description={projects6.description}
                                    videoUrl={projects6.videoUrl}
                                    buttonLabel={projects6.buttonLabel}
                                    buttonLink={projects6.buttonLink}
                                  />
                                  <div className="project-details">
                                    <h2>1. Wheels of Hope</h2>
                                    <p><b>Description:</b> This captivating story revolves around a courageous soldier left behind by his crewmates in a city teeming with hordes of zombies. "Wheels of Hope" is a meticulously crafted 3D single-player action and horror survival game, specifically developed for Android devices using Unity. Immerse yourself in the stunning graphics that showcase beautiful scenery and a meticulously designed night view, delivering an unparalleled horror experience for mobile gamers. Prepare yourself for a thrilling journey as the game encompasses a wide array of features, including guns, ammunition, blood-chilling encounters with zombies, a sophisticated health system, jump scares, intense boss fights, and much more. The missions within this game offer a formidable challenge, testing your skills and determination. Be prepared to master a complex control system encompassing various actions such as shooting, walking, jumping, reloading, and restoring health. Note that there are no save points available, making victory a one-time opportunity. With outstanding animations, immersive sound effects, post-processing enhancements, and impressive particle systems, "Wheels of Hope" stands out among its mobile gaming counterparts. Brace yourself and unleash the full horror of "Wheels of Hope." </p>
                                    <p><b>Tech Stack:</b> C#, unity</p>
                                  </div>
                                </div>
                              )
                            })
                          }
                          {
                            projects7.map((projects7) => {
                              return (
                                <div className="project-container">
                                  <div className="project-number">
                                    
                                  </div>
                                  <ProjectCard
                                    title={projects7.title}
                                    description={projects7.description}
                                    videoUrl={projects7.videoUrl}
                                    buttonLabel={projects7.buttonLabel}
                                    buttonLink={projects7.buttonLink}
                                  />
                                  <div className="project-details">
                                    <h2>2. Syringe Man</h2>
                                    <p><b>Description:</b>This is a simple single-player 2D platformer game crafted with Unity. This game is available for both PC and Android devices, ensuring a wide reach for players to enjoy. For Android, intuitive controls are provided via two buttons, allowing seamless navigation of your ship upwards and downwards. PC players can rely on the familiar arrow keys to control their character. As you progress, be sure to collect coins along your path while evading the treacherous viruses lurking in your way. The player with the highest number of collected coins will claim the coveted high score. </p>
                                    <p><b>Tech Stack:</b> C#, unity</p>
                                  </div>
                                </div>
                              )
                            })
                          }
                          {
                            projects8.map((projects8) => {
                              return (
                                <div className="project-container">
                                  <div className="project-number">
                                    
                                  </div>
                                  <ProjectCard
                                    title={projects8.title}
                                    description={projects8.description}
                                    videoUrl={projects8.videoUrl}
                                    buttonLabel={projects8.buttonLabel}
                                    buttonLink={projects8.buttonLink}
                                  />
                                  <div className="project-details">
                                    <h2>3. Highway Drift</h2>
                                    <p><b>Description:</b>This is a single-player car racing game created with Unity. It offers a captivating 3D gaming experience exclusively designed for Android devices. Users can select their desired cars and dive into the game. The controls are delightfully simple—swipe left or right to maneuver your car between lanes. However, beware of collisions with other vehicles. To assess your progress, the game incorporates a comprehensive point system that measures the distance you have successfully traveled.</p>
                                    <p><b>Tech Stack:</b> C#, unity</p>
                                  </div>
                                </div>
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>

                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>

    </section >
  )
}