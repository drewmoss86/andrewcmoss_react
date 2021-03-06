import React, { Component } from "react";
import Resume from "../../files/ANDREW_MOSS_RESUME_04222021.pdf";

export default class About extends Component {
  render() {
    return (
      <section id="about" className="about">
        <div className="container about-container">
          <div className="row">
            <div className="col">
              <img
                className="profile-pic"
                src={require("../../img/andrew-flower.JPG")}
                alt="profile-pic"
              />
              <h1 className="about-header section-header">
                > andrewMoss.<span>init</span>();
              </h1>
              <div className="console-title-bar"></div>
              <div className="about-console">
                <p className="comment">
                  // My name is{" "}
                  <span className="code-highlight">@Andrew Moss</span> and I
                  enjoy building things for the world wide web!
                </p>
                <br />
                <p>
                  > andrewMoss.location;
                  <br />
                  &nbsp;&nbsp; >{" "}
                  <span className="string">"Pasadena, CA"</span>
                </p>

                <p>
                  > andrewMoss.languages;
                  <br />
                  &nbsp;&nbsp; > [&nbsp;
                  <span className="string">"English"</span>,{" "}
                  <span className="string">"Chinese - Mandarin"</span>&nbsp;]
                </p>

                <p>
                  > andrewMoss.education;
                  <br />
                  &nbsp;&nbsp; > [<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#123; university:{" "}
                  <span className="string">"Pasadena City College"</span>,
                  graduated: <span className="number">2019</span>, major:{" "}
                  <span className="string">"CIS"</span>, certificates: [
                  <span className="string">"CIS - Programming"</span>,
                  <span className="string"> "CIS - Web Development"</span>]
                  &#125;,
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#123; university:{" "}
                  <span className="string">
                    "California State University, Fullerton"
                  </span>
                  , graduated: <span className="number">2009</span>, major:{" "}
                  <span className="string">"Finance"</span>, degree:{" "}
                  <span className="string">"BA"</span> &#125;
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp; ]
                </p>

                <p>
                  > andrewMoss.technologies;
                  <br />
                  &nbsp;&nbsp; > [<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span className="string">"JavaScript"</span>,{" "}
                  <span className="string">"Node"</span>,
                  <span className="string"> "PHP"</span>,{" "}
                  <span className="string">"HTML5"</span>,
                  <span className="string"> "CSS3"</span>,{" "}
                  <span className="string">"C++"</span>,
                  <span className="string"> "Java"</span>,{" "}
                  <span className="string">"Oracle"</span>,
                  <span className="string"> "MS SQL"</span>,{" "}
                  <span className="string">"MySQL"</span>,
                  <span className="string"> "RoR"</span>, 
                  <span className="string"> "Python"</span>, 
                  <span className="string"> "ColdFusion"</span>, 
                  <span className="string"> "PowerON"</span>, 
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span className="string"> "React"</span>, 
                  <span className="string"> "JQuery"</span>,
                  <span className="string"> "Bootstrap"</span>,
                  <span className="string"> "Laravel"</span>
                  <br/>&nbsp;&nbsp;&nbsp;&nbsp; ]
                </p>

                <p>
                  > andrewMoss.resume;
                  <br />
                  &nbsp;&nbsp;&nbsp;>{" "}
                  <a href={Resume}>
                    Resume.pdf
                  </a>
                </p>

                <p>
                  > andrewMoss.passions;
                  <br />
                  &nbsp;&nbsp; > [&nbsp;
                  <span className="string">"technology"</span>,{" "}
                  <span className="string">"science fiction"</span>,
                  <span className="string"> "sushi"</span>,{" "}
                  <span className="string">"caffeine"</span>,
                  <span className="string"> "IPAs"</span>&nbsp;]
                </p>

                <p>
                  > andrewMoss.hobbies;
                  <br />
                  &nbsp;&nbsp;&nbsp;> [&nbsp;
                  <span className="string">"hanging out with my dogs"</span>,
                  <span className="string"> "traveling"</span>,{" "}
                  <span className="string">"reading"</span>,
                  <span className="string"> "learning"</span>&nbsp;]
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
