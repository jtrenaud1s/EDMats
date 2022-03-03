import React from "react";
import MainLayout from "../layout/MainLayout";

const HomeView = () => {
  return (
    <MainLayout>
      <h1>Home</h1>
      <p>
        Awesome guide by{" "}
        <a
          href="https://www.youtube.com/watch?v=iHl-SsKQfe4"
          target="_blank"
          rel="noreferrer">
          Hawkes Gaming
        </a>
        {" "}written as text. Click the links above to get started.
      </p>
    </MainLayout>
  );
};

export default HomeView;
