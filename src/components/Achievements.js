import { Container, Row, Col, Tab, Nav, Card, Button } from "react-bootstrap";
import { AchievementsCards } from "./AchievementsCards";
import projImg from "../assets/img/Login - Google Chrome 11-03-2023 15_27_31.png";
import projImg1 from "../assets/img/cer3.png";
import projImg2 from "../assets/img/cer2.png";
import projImg3 from "../assets/img/cer.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import wp from "../assets/img/wp6040544-aesthetic-laptop-light-purple-wallpapers2.jpg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Achievements = () => {
  const acc = [
    {
      title: "JavaScript Course Completion",
      description: "Infosys",
      imgUrl: projImg3,
      buttonLabel:"Check out",
      buttonLink:"https://drive.google.com/file/d/1-IHBBp1iZIM3oJKkfWGguzwmh71K2xGV/view?usp=sharing",
    },
    {
      title: "Python Course Completion",
      description: "Infosys",
      imgUrl: projImg1,
      buttonLabel:"Check out",
      buttonLink:"https://drive.google.com/file/d/1qAMSCufizB4bfaoagslqo4-CCAwZCN-f/view?usp=sharing",
    },
    {
      title: "Python Course Completion",
      description: "Great Learning",
      imgUrl: projImg2,
      buttonLabel:"Check out",
      buttonLink:"https://drive.google.com/file/d/1pbwztre_JJwjJdzBtVB1JV_59JrpO35v/view?usp=sharing",
    },
 ];
  return (
    <section className="achievement" id="achievements">
        <Container>
          <Row>
            <Col size={12}>
              <TrackVisibility>
                {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <h2>My Achievements</h2>
                    <p>These are some of my achievements</p>
                    <Tab.Container id="projects-tabs">
                      
                      <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>

                          <Row>
                            {
                              acc.map((achievement) => {
                                return (
                                  <AchievementsCards
                                  title={achievement.title}
                                  description={achievement.description}
                                  imgUrl={achievement.imgUrl}
                                  buttonLabel={achievement.buttonLabel}
                                  buttonLink={achievement.buttonLink}/>
                                )
                              })
                            }
                          </Row>

                        
                      </Tab.Content>
                    </Tab.Container>
                  </div>}
              </TrackVisibility>
            </Col>
          </Row>

        </Container>
        <img className="background-image-right" src={colorSharp2}></img>
        
    </section>
  )
}