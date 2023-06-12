import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


import meter1 from "../assets/img/meter1.svg";

import meter3 from "../assets/img/meter3.svg";
import TextSphere from './TextSphere';

import { Container } from 'react-bootstrap';





import image1 from '../assets/img/p(3).png';
import image2 from '../assets/img/p(2).png';
import image3 from '../assets/img/pngwing.com (4).png';
import image4 from '../assets/img/pngwing.com (13).png';
import js from '../assets/img/pngwing.com (12)new.png';
import py from '../assets/img/pngwing.com (11).png';
import c from '../assets/img/pngwing.com (5).png';
import cpp from '../assets/img/pngwing.com (6).png';
import cs from '../assets/img/pngwing.com (7).png';
import html from '../assets/img/pngwing.com (8).png';
import php from '../assets/img/pngwing.com (14).png';
import java from '../assets/img/pngwing.com (9).png';
import css from '../assets/img/pngwing.com (8).png';

import bs from '../assets/img/pngwing.com (10).png';
import rea from '../assets/img/pngwing.com (17).png';
import dj from '../assets/img/dj.png';
import sql from '../assets/img/pngwing.com (16).png';
import md from '../assets/img/pngwing.com (15).png';

import git from '../assets/img/git.png';
import github from '../assets/img/github.png';
import sio from '../assets/img/sio.png';
import unity from '../assets/img/unity.png';
import as from '../assets/img/as.png';

import asp from '../assets/img/asp.png';
import ps from '../assets/img/ps.png';
import blender from '../assets/img/blender.png';
import prolog from '../assets/img/prolog.png';
import tailwind from '../assets/img/tail.png';
import ex from '../assets/img/ex.png';



export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p className='Mytext'>
                These are some languages, databases and frameworks I am familier with.
                <br />
                Also I am still working with them so that I can master them all.
              </p>
              <div className="skill-bx wow zoomIn">
                <TextSphere />
                <div />
                <div class="box">
                  <h2 className='headingH2'>
                    Languages
                    <img src={image4} alt="Logo" />
                  </h2>
                  <br></br>
                  <h6 className='headingH3'>
                    JavaScript
                    <img src={js} />
                  </h6>
                  <h6 className='headingH3'>
                    Python
                    <img src={py} />
                  </h6>
                  <h6 className='headingH3'>
                    C
                    <img src={c} />
                  </h6>
                  <h6 className='headingH3'>
                    C++
                    <img src={cpp} />
                  </h6>
                  <h6 className='headingH3'>
                    HTML
                    <img src={html} />
                  </h6>
                  <h6 className='headingH3'>
                    CSS
                    <img src={css} />
                  </h6>
                  <h6 className='headingH3'>
                    C#
                    <img src={cs} />
                  </h6>
                  <h6 className='headingH3'>
                    PHP
                    <img src={php} />
                  </h6>
                  <h6 className='headingH3'>
                    JAVA
                    <img src={java} />
                  </h6>
                </div>


                <div class="box">

                  <h2 className='headingH2'>
                    Frameworks
                    <img src={image3} alt="Logo" />
                  </h2>
                  <br></br>
                  <h6 className='headingH3'>
                    React
                    <img src={rea} />
                  </h6>
                  <h6 className='headingH3'>
                    Express.JS
                    <img src={ex} />
                  </h6>
                  <h6 className='headingH3'>
                    Django
                    <img src={dj} />
                  </h6>
                  <h6 className='headingH3'>
                    BootStrap
                    <img src={bs} />
                  </h6>
                  <h6 className='headingH3'>
                    Tailwind
                    <img src={tailwind} />
                  </h6>

                </div>
                <div class="box">

                  <h2 className='headingH2'>
                    Databases
                    <img src={image2} alt="Logo" />
                  </h2>
                  <br></br>
                  <h6 className='headingH3'>
                    MySQL
                    <img src={sql} />
                  </h6>
                  <h6 className='headingH3'>
                    MongoDB
                    <img src={md} />
                  </h6>
                </div>
                <div class="box">
                  <h2 className='headingH2'>
                    Others
                    <img src={image1} alt="Logo" />
                  </h2>
                  <br></br>
                  <h6 className='headingH3'>
                    Git
                    <img src={git} />
                  </h6>
                  <h6 className='headingH3'>
                    Github
                    <img src={github} />
                  </h6>
                  <h6 className='headingH3'>
                    Bash
                    <img src={git} />
                  </h6>
                  <h6 className='headingH3'>
                    Socket.IO
                    <img src={sio} />
                  </h6>
                  <h6 className='headingH3'>
                    ASP .net
                    <img src={asp} />
                  </h6>
                  <h6 className='headingH3'>
                    Prolog
                    <img src={prolog} />
                  </h6>
                  <h6 className='headingH3'>
                    Unity
                    <img src={unity} />
                  </h6>
                  <h6 className='headingH3'>
                    Android Studio
                    <img src={as} />
                  </h6>
                  <h6 className='headingH3'>
                    Photoshop
                    <img src={ps} />
                  </h6>
                  <h6 className='headingH3'>
                    Blender
                    <img src={blender} />
                  </h6>
                </div>
                

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
