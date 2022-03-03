import React from "react";
import { Alert } from "react-bootstrap";
import MainLayout from "../layout/MainLayout";

const EncodedMaterialView = () => {
  return (
    <MainLayout>
      <h1>Encoded Materials</h1>
      <Alert variant="info">
        <strong>Before You Start</strong> <br />
        <p>
          There are 4 Encoded Materials that you will be able to get a lot of
          very quickly, so it's best to trade what you have down to lower grade
          materials before farming them.
        </p>
        <p>These materials are:</p>
        <ul>
          <li>Modified Consumer Firmware</li>
          <li>Cracked Industrial Firmware</li>
          <li>Atypical Encryption Archives</li>
          <li>Adaptive Encryptors Capture</li>
        </ul>
      </Alert>
      <Alert variant="info">Remember to bookmark this planet for later!</Alert>
      <h2>HIP 12099</h2>
      <p>
        <strong>Planet: 1 B</strong>
      </p>
      <p>
        Use a surface scanner to map the planet to find the location of the
        "Jameson Crash Site." Land near the crash site and drop into your SRV.
      </p>
      <p>
        Travel to a location at the bottom of the cliff, in between each of the
        blinking Comms Panels and face toward the rear of the crashed ship.
      </p>
      <p>
        Press "U" to switch to the gun on your SRV and you can swivel it around
        to scan each of the Comms Panels.
      </p>
      <p>
        Once you've scanned them all, log out to main menu and log back in, and
        you can scan them again. Repeat this a few times until you cannot hold
        any more data. (This happens very quickly)
      </p>
      <Alert variant="info">
        In order to obtain <strong>Modified Embedded Firmware</strong>, you'll
        need to run missions. Hawke likes to do passenger missions for this.
      </Alert>
    </MainLayout>
  );
};

export default EncodedMaterialView;
