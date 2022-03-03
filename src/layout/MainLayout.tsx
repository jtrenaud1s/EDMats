import React from "react";
import NavBar from "../layout/NavBar";

import { Container } from "react-bootstrap";

const MainLayout: React.FC = ({ children }) => {
  return (
    <>
      <NavBar />
      <Container className="mt-3">{children}</Container>
    </>
  );
};

export default MainLayout;
