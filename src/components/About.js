import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const About = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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
            <div className="">
                <div className="">
                    <div className="skill-bx wow zoomIn">
                        <h2>About</h2> 
                        <div className="about">
                            <p>From Music Composer to Software Developer... since I was a child I have always been fascinated by technology and interactive experiences, but it was when I got into the video game industry that I discovered programming and set out to learn how to code.</p>
                            <p>My beginnings in video game development were as a Sound Designer and Music Composer, using technologies such as Wwise, Cubase, izotope, Unity, and C#, among other useful tools for the creation and implementation of audio assets and dynamic music within video games. At this stage, I composed music and designed sounds for more than 5 video games, some in Game Jam events and others developed with teams independently. Undoubtedly, these experiences were my biggest motivation to understand that this world is the one I am most passionate about and that the path I want to follow will always be linked to technology in one way or another.</p>
                            <p>Feeling that I had reached my threshold with self-learning C#, I decided to give programming an academic boost and enrolled in a Full Stack Web Development Bootcamp at Henry Academy, where I learned everything from the basics of programming with Javascript to the development of frontend web applications with React, backend with Nodejs and databases with PostgreSQL, among other technologies such as HTML, CSS, TypeScript, React Native, Sequelize, Redux, Git, Github, etc. On the other hand, I met excellent people from whom I took the best lessons about teamwork, cooperation, and passion for programming as a tool to create interactive projects that leave a pleasant user experience.</p>
                            <p>I am currently working as a software developer at the company Getback, while I create my own video games and continue training in Unity and C# in my spare time; two technologies that I find fascinating for the development of interactive experiences and games.</p>
                            <p>I describe myself as passionate about technology, proactive, with a great capacity for learning, infinite curiosity, and strong teamwork skills.</p>
                            <p>Thank you for taking the time to review my profile.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
