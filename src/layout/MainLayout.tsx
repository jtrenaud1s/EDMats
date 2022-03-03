import React from "react";
import NavBar from "../layout/NavBar";

import { Container } from "react-bootstrap";
import Footer from "./Footer";

const MainLayout: React.FC = ({ children }) => {
  return (
    <>
      <NavBar />
      <Container className="mt-3">{children}</Container>
      <Footer />
    </>
  );
};

export default MainLayout;
