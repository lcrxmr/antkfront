import React from 'react';
import { Slide, Fade } from "react-awesome-reveal";
import MediaQuery from "react-responsive";

import "../Produits/produits.css"

export default function ProduitsEN () {
  return (
    <div id="produit">
    <h1 id="roadmaptitle">PRODUCTS</h1>
      <MediaQuery minWidth={1000}>
        <Fade duration={3000}>
          <Slide direction="left">
            <div
              className="container"
              id="produitDiv"
            > 
              <div id="product">
                <img className="animalPic" src={"./chien.png"} />
              </div>
              <div>
              <h1 id="roadmaptitle">LOVE TO EARN</h1>
                <p className="description">
                  Receive ANTK token rewards when you spend time with your
                  pet.
                </p>
                <br />
                <a href="/love-en">
                  <button  className="prodInfo">
                    Info
                  </button>
                </a>
              </div>
            </div>
          </Slide>
          

          <Slide direction="left">
            <div
              className="container"
              id="produitDiv"
            >
              <div  id="product">
                <img className="animalPic" src={"./chat.png"} />

              </div>
              <div>
              <h1 id="roadmaptitle">FIND TO EARN</h1>
                <p className="description">
                  Receive ANTK token rewards when you help find a lost animal.
                </p>
                <br />
                <a href="/find-en">
                  <button  className="prodInfo">
                    Info
                  </button>
                </a>
              </div>
            </div>
          </Slide>
          <Slide direction="left">
            <div
              className="container"
              id="produitDiv"
            >
              <div  id="product">
                
                <img className="animalPic" src={"./oiseau.png"} />
              </div>
              <div>
              <h1 id="roadmaptitle">KEEP TO EARN</h1>
                <p className="description">
                  Get photos of your pet when you go on vacation without it
                  and earn tokens for the person who looks after your pet.
                </p>
                <br />
                <a href="/keep-en">
                  <button  className="prodInfo">
                    Info
                  </button>
                </a>
              </div>
            </div>
          </Slide>
         
          <Slide direction="left">
            <div
              className="container"
              id="produitDiv"
            >
              <div  id="product">
                <img className="animalPic" src={"./tigre.png"} />

                
              </div>
              <div>
              <h1 id="roadmaptitle">PLAY TO EARN</h1>
                <p className="description">
                  A universe of games that will use animal facial recognition
                  to discover the world of animals and make you win tokens.
                </p>
                <br />
                <a href="/play-en">
                  <button  className="prodInfo">
                    Info
                  </button>
                </a>
              </div>
            </div>
          </Slide>
        </Fade>
      </MediaQuery>

      <MediaQuery minWidth={0} maxWidth={1000}>
        <Fade duration={3000}>
          <Slide direction="left">
            <div className="container" id="produitDivMobile">
              <div id="productMobile">

                <img className="animalPicMobile" src={"./chien.png"} />
              </div>
              <div>
              <br/>
              <h1 id="roadmaptitle">LOVE TO EARN</h1>
                <p className="descriptionMobile">
                Receive ANTK token rewards when you spend time with your
                  pet.
                </p>
                <br />
                <a href="/love-en">
                  <button  className="prodInfoMobile">
                    Info
                  </button>
                </a>
              </div>
            </div>
          </Slide>
          
          <Slide direction="left">
            <div className="container" id="produitDivMobile">
              <div id="productMobile">
                <img className="animalPicMobile" src={"./chat.png"} />
              </div>
              <div>
              <br/>
              <h1 id="roadmaptitle">FIND TO EARN</h1>
                <p className="descriptionMobile">
                Receive ANTK token rewards when you help find a lost animal.
                </p>
                <br />
                <a href="/find-en">
                  <button  className="prodInfoMobile">
                    Info
                  </button>
                </a>
              </div>
            </div>
          </Slide>
          
          <Slide direction="left">
            <div
              className="container"
              id="produitDivMobile"
            >
              <div id="productMobile">
                <img className="animalPicMobile" src={"./oiseau.png"} />
              </div>
              <div>
              <br/>
              <h1 id="roadmaptitle">KEEP TO EARN</h1>
                <p className="descriptionMobile">
                Get photos of your pet when you go on vacation without it
                  and earn tokens for the person who looks after your pet.
                </p>
                <br />
                <a href="/keep-en">
                  <button  className="prodInfoMobile">
                    Info
                  </button>
                </a>
              </div>
            </div>
          </Slide>
          
          <Slide direction="left">
            <div
              className="container"
              id="produitDivMobile"
            >
              <div id="productMobile">
                <img className="animalPicMobile" src={"./tigre.png"} />
              </div>
              <div>
                <br/>
              <h1 id="roadmaptitle">PLAY TO EARN</h1>
                <p className="descriptionMobile">
                A universe of games that will use animal facial recognition
                  to discover the world of animals and make you win tokens.
                </p>
                <br />
                <a href="/play-en">
                  <button  className="prodInfoMobile">
                    Info
                  </button>
                </a>
              </div>
            </div>
          </Slide>
          
        </Fade>
      </MediaQuery>
    </div>
  );
};