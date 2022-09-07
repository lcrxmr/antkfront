import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import { bounce, fadeIn } from "react-animations";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Team.css";

export default function Team() {
  return (
    <AnimationOnScroll animateIn="animate__bounceIn">
      <h1 className="titre">React Animate On Scroll</h1>
      <h2>Using:</h2>
    </AnimationOnScroll>
  );
}
