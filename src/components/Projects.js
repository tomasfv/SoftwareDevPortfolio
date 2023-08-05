import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import mazeBall from "../assets/img/MazeBallChallenge.jpg";
import johnLemon from "../assets/img/JohnLemon.jpg";
import ZombieShooter from "../assets/img/ZombieShooter.jpg";
import humanDefender from "../assets/img/humanDefender.jpg";
import doozy from "../assets/img/DoozysWorld.jpg";
import tanks from "../assets/img/Tanks1.jpg";
import aIJam from "../assets/img/PrisonGame.png";
import labscape from "../assets/img/LabscapeMenu.jpg";
import Azimuth from "../assets/img/Azimuth.jpg";
import sobrevivenciaBack from "../assets/img/sobrevivenciaBack.png";
import watch from "../assets/img/TSStopWatch.jpg";
import travel from "../assets/img/travelWeb.jpg";
import kustom from "../assets/img/KustomsSports.jpg";
import tvgs from "../assets/img/TVGS-3.jpg";
import survival from "../assets/img/Survival1.jpg";
import pokemon from "../assets/img/Pokemon.jpg";
import toDo from "../assets/img/ToDoApp.jpg";
import bookOfSoulz from "../assets/img/BookOfSoulz.webp";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projectsOne = [
    {
      title: "Zombie Shooter",
      description: "2D-Top Down-Shooter",
      imgUrl: ZombieShooter,
      link: "https://tomasfv.itch.io/zombie-shooter",
    },
    {
      title: "John Lemon",
      description: "Stealth",
      imgUrl: johnLemon,
      link: "https://tomasfv.itch.io/john-lemon",
    },
    {
      title: "Survival Nightmare",
      description: "Survival Shooter",
      imgUrl: survival,
      link: "https://tomasfv.itch.io/survival-shooter",
    },
    {
      title: "Doozy's World",
      description: "Platformer 3D",
      imgUrl: doozy,
      link:"https://tomasfv.itch.io/doozys-world" ,
    },
    {
      title: "Tanks Prototype",
      description: "Puzzle",
      imgUrl: tanks,
      link: "https://tomasfv.itch.io/tanks-prototype",
    },
    {
      title: "Maze&Ball Challenge",
      description: "Puzzle",
      imgUrl: mazeBall,
      link: "https://tomasfv.itch.io/maze-ball-challenge",
    }
  ];
  const projectsTwo = [
    {
      title: "Azimuth",
      description: "Music Composition & Sound Design",
      imgUrl: Azimuth,
      link: "https://drillu.itch.io/azimuth",
    },
    {
      title: "Labscape!",
      description: "Music Composition & Sound Design",
      imgUrl: labscape,
      link: "https://play.google.com/store/apps/details?id=com.InfinityGames.com.infinityGames.GooglePlay.LabScape&hl=en&gl=US",
    },
    {
      title: "Human Defender",
      description: "Music Composition & Sound Design",
      imgUrl: humanDefender,
      link: "https://globalgamejam.org/2018/games/human-defender",
    },
    {
      title: "Sebastian Knight's Escape",
      description: "Music Composition & Sound Design",
      imgUrl: aIJam,
      link: "https://petifox.itch.io/prision-game" ,
    },
    {
      title: "Book of Soulz",
      description: "Sound Design",
      imgUrl: bookOfSoulz,
      link: "https://www.youtube.com/watch?v=dO_92rlFu24",
    },
    {
      title: "Sobrevivencia",
      description: "Music Composition & Sound Design",
      imgUrl: sobrevivenciaBack,
      link: "https://rodrigo-gamedev.itch.io/sobrevivencia",
    },
  ];
  const projectsThree = [
    {
      title: "Travel Website",
      description: "Design & Development",
      imgUrl: travel,
      link: "https://travel-website-tomasfv.vercel.app/",
    },
    {
      title: "Pokémon Web",
      description: "Design & Development",
      imgUrl: pokemon,
      link: "https://pi-pokemon-main-wine.vercel.app/",
    },
    {
      title: "The Video Games Shelter",
      description: "Design & Development",
      imgUrl: tvgs,
      link: "https://tvgs.netlify.app/",
    },
    {
      title: "Typescript StopWatch",
      description: "Design & Development",
      imgUrl: watch,
      link: "https://stopwatchts.netlify.app/",
    },
    {
      title: "Kustoms Sports",
      description: "Design & Development",
      imgUrl: kustom,
      link:"https://www.youtube.com/watch?v=bM7t9NczBkY",
    },
    {
      title: "ToDo App Mobile",
      description: "Design & Development",
      imgUrl: toDo,
      link: "https://github.com/tomasfv/ToDo-App-Mobile",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
              
                <h2>Projects</h2>
                <p>Some projects I have worked on as a Unity developer, web developer, music composer and sound designer for video games.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Unity Developer</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Composer & Sound Designer</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Web Developer</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    
                    <Tab.Pane eventKey="first">
                    <p>Unity and C# projects and prototypes developed.</p>
                      <Row>
                        {
                          projectsOne.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    
                    <Tab.Pane eventKey="second">
                      <p>Music composer and sound designer projects done in the video games industry. Full information <a href="https://coffee-maker-productions.webnode.page/">HERE</a></p>
                      <Row>
                        {
                          projectsTwo.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    
                    <Tab.Pane eventKey="third">
                      <p>Full Stack Web Developer projects. Frontend and Backend development.</p>
                      <Row>
                        {
                          projectsThree.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
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
    </section>
  )
}
