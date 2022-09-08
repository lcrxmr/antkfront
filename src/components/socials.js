import React from "react";
import { CDBIcon, CDBContainer } from "cdbreact";

export default function Icon () {
  return (
    <CDBContainer>
          <CDBIcon fab spin icon="stack-overflow" />
          <CDBIcon fab spin icon="fa-brands fa-facebook"/>
          <CDBIcon fab spin icon="reddit" />
          <CDBIcon fab spin icon="twitter" />
          <CDBIcon fab spin icon="instagram" />
          <CDBIcon fab spin icon="google" />
    </CDBContainer>
  );
};