import React from 'react';
import { Fade, AttentionSeeker } from "react-awesome-reveal";

export default function Teamfr () {

  return (
    <div id="team">
    <h1 id="roadmaptitle">ÉQUIPE</h1>
    <Fade duration={5000}>
      <div className="container" id="profileDiv">
        <div className="profileCard">
          <a
            href="https://www.linkedin.com/in/basileclinet/"
            target="_blank"
          >
            <img className="profilePic" src={"./basile1.jpg"} />
          </a>
          <p className="name">Basile</p>
          <p className="legend">Community Manager</p>
        </div>
        <div className="profileCard">
          <a
            href="https://www.linkedin.com/in/glarochette/"
            target="_blank"
          >
            <img className="profilePic" src={"./guillaume1.jpg"} />
          </a>
          <p className="name">Guillaume</p>
          <p className="legend">Community Manager</p>
        </div>
        <div className="profileCard">
          <a
            href="https://www.linkedin.com/in/jeason-bacoul-742510225/"
            target="_blank"
          >
            <img className="profilePic" src={"./jeasonV1.jpg"} />
          </a>
          <p className="name">Jeason</p>
          <p className="legend">Lead Community Manager</p>
        </div>
        <div className="profileCard">
          <a
            href="https://www.linkedin.com/in/cbtna/?_l=fr_FR"
            target="_blank"
          >
            <img className="profilePic" src={"./charlotte1.jpg"} />
          </a>
          <p className="name">Charlotte</p>
          <p className="legend">Graphiste</p>
        </div>
        <div className="profileCard">
          <a
            href="https://www.linkedin.com/in/amaury-lacroix-95518022b/"
            target="_blank"
          >
            <img className="profilePic" src={"./amaury1.jpg"} />
          </a>
          <p className="name">Amaury</p>
          <p className="legend">Développeur</p>
        </div>
        <div className="profileCard">
          <img className="profilePic" src={"./LOGO.png"} />

          <p className="name">Jean-Baptiste</p>
          <p className="legend">Développeur Blockchain</p>
        </div>
        <div className="profileCard">
          <a
            href="https://www.linkedin.com/in/gilles-a-7b220a23a"
            target="_blank"
          >
            <img className="profilePic" src={"./gilles.jpg"} />
          </a>
          <p className="name">Gilles</p>
          <p className="legend">Co-Fondateur</p>
        </div>
        <div className="profileCard">
          <img className="profilePic" src={"./LOGO.png"} />

          <p className="name">Marina</p>
          <p className="legend">Développeuse / Co-Fondatrice</p>
        </div>
      </div>
    </Fade>
  </div>
  );
};