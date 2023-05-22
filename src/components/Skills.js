import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
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
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p><br></br></p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={"https://i.redd.it/tu3gt6ysfxq71.png"} alt="Image" />
                                <h5>Unity</h5>
                            </div>
                            <div className="item">
                                <img src={"https://seeklogo.com/images/C/c-sharp-c-logo-02F17714BA-seeklogo.com.png"} alt="Image" />
                                <h5>C#</h5>
                            </div>
                            <div className="item">
                                <img src={"https://img1.wsimg.com/isteam/ip/c607115e-77bc-4285-8dff-5524b3448e1e/blob-ed4528d.png/:/cr=t:21.17%25,l:16.22%25,w:67.57%25,h:57.67%25/rs=w:600,h:451.12781954887214,cg:true,m"} alt="Image" />
                                <h5>Audiokinetic Wwise</h5>
                            </div>
                            <div className="item">
                                <img src={"https://www.computerhope.com/jargon/c/cubase.png"} alt="Image" />
                                <h5>Cubase</h5>
                            </div>
                            <div className="item">
                                <img src={"https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"} alt="Image" />
                                <h5>Javascript</h5>
                            </div>
                            <div className="item">
                                <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png"} alt="Image" />
                                <h5>Typescript</h5>
                            </div>
                            <div className="item">
                                <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"} alt="Image" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={"https://cdn.worldvectorlogo.com/logos/redux.svg"} alt="Image" />
                                <h5>Redux</h5>
                            </div>
                            <div className="item">
                                <img src={"https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png"} alt="Image" />
                                <h5>Node.Js</h5>
                            </div>
                            <div className="item">
                                <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1985px-Postgresql_elephant.svg.png"} alt="Image" />
                                <h5>PostgreSQL</h5>
                            </div>
                            <div className="item">
                                <img src={"https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/359/full/expressjslogo.png"} alt="Image" />
                                <h5>Express</h5>
                            </div>
                            <div className="item">
                                <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png"} alt="Image" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png"} alt="Image"  />
                                <h5>CSS</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
