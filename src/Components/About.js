import React from "react";
import img from "../Assets/imgs/profile2.jpg";

const About = () => {
  return (
    <div>
      <div className="about_main">
        <div className="about_main_1">
          <div className="about_main_1_top">
            <div>
              <img
                src={img}
                alt="img"
                style={{ height: "9rem", width: "10rem", margin: "1rem" }}
              />
            </div>
            <div>
              <p>
                Name:<span> Qasim Qayyum</span>
              </p>
              <p>
                Profile:<span> full stack developer</span>
              </p>
              <p>
                Email:<span> contact@example.com</span>
              </p>
              <p>
                Phone:<span> 617 557-0089</span>
              </p>
            </div>
          </div>

          <div className="about_main_1_down w3-container ">
            <p>HTML</p>
            <div class="w3-light-grey">
              <div class="progress">
                <div
                  class="progress-bar progress-bar-striped active"
                  role="progressbar"
                  aria-valuenow="40"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "85%" }}
                >
                  85%
                </div>
              </div>
            </div>
            <p>CSS3</p>

            <div class="w3-light-grey">
            <div class="progress">
                <div
                  class="progress-bar progress-bar-striped active"
                  role="progressbar"
                  aria-valuenow="40"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "75%" }}
                >
                  75%
                </div>
              </div>
            </div>
            <p>BootStrap</p>

            <div class="w3-light-grey">
            <div class="progress">
                <div
                  class="progress-bar progress-bar-striped active"
                  role="progressbar"
                  aria-valuenow="40"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "50%" }}
                >
                  50%
                </div>
              </div>
            </div>

            <p>ReactJS</p>

            <div class="w3-light-grey">
            <div class="progress">
                <div
                  class="progress-bar progress-bar-striped active"
                  role="progressbar"
                  aria-valuenow="40"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "90%" }}
                >
                  90%
                </div>
              </div>
            </div>

            <p>NodeJS</p>

            <div class="w3-light-grey">
            <div class="progress">
                <div
                  class="progress-bar progress-bar-striped active"
                  role="progressbar"
                  aria-valuenow="40"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "40%" }}
                >
                  40%
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="about_main_2">
          <h4>About Me</h4>
          <h5 style={{ color: "#0078ff" }}>_________</h5>
          <p>
            Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
            Praesent sapien massa, convallis a pellentesque nec, egestas non
            nisi. Nulla porttitor accumsan tincidunt. Mauris blandit aliquet
            elit, eget tincidunt nibh pulvinar a. Vivamus suscipit tortor eget
            felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula
            elementum sed sit amet dui. porttitor at sem. Nulla porttitor
            accumsan tincidunt. Quisque velit nisi, pretium ut lacinia in,
            elementum id enim. Nulla porttitor accumsan tincidunt. Mauris
            blandit aliquet elit, eget tincidunt nibh pulvinar a.
          </p>
          <p>
            Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
            Praesent sapien massa, convallis a pellentesque nec, egestas non
            nisi. Nulla porttitor accumsan tincidunt. Mauris blandit aliquet
            elit, eget tincidunt nibh pulvinar a. Vivamus suscipit tortor eget
            felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula
            elementum sed sit amet dui. porttitor at sem. Nulla porttitor
            accumsan tincidunt. Quisque velit nisi, pretium ut lacinia in,
            elementum id enim. Nulla porttitor accumsan tincidunt. Mauris
            blandit aliquet elit, eget tincidunt nibh pulvinar a.
          </p>
          <p>
            Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
            Praesent sapien massa, convallis a pellentesque nec, egestas non
            nisi. Nulla porttitor accumsan tincidunt. Mauris blandit aliquet
            elit, eget tincidunt nibh pulvinar a. Vivamus suscipit tortor eget
            felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula
            elementum sed sit amet dui. porttitor at sem. Nulla porttitor
            accumsan tincidunt. Quisque velit nisi, pretium ut lacinia in,
            elementum id enim. Nulla porttitor accumsan tincidunt. Mauris
            blandit aliquet elit, eget tincidunt nibh pulvinar a.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;