import React , {Component} from "react";
import styled, {keyframes} from "styled-components"
import { bounce, fadeIn} from 'react-animations'
import "bootstrap/dist/css/bootstrap.min.css";
import "./Fade.css";

const Fade = styled.div`animation: 3s ${keyframes`${fadeIn}`} 1`

export default class ReactAnimations extends Component {
    render() {
        return (
            <Fade><h1 id="titre">
            Secure <br /> your animal <br />
            in the <br />blockchain
          </h1></Fade>
        )
    }
}