import React from "react";
import MainLayout from "../layout/MainLayout";

import { Alert, Row, Col, Card } from "react-bootstrap";
import { rawMaterialSystems } from "../data";

const RawMaterialView = () => {
  return (
    <MainLayout>
      <h1>Raw Materials</h1>
      <h2>Method 1</h2>
      <p>Farm the Crashed Anaconda</p>
      <strong>System: </strong>
      <span>Koli Discii</span><br />
      <strong>Planet: </strong>
      <span>C 6 A</span>
      <p>
        There will be three crates located around the crashed Anaconda, possibly
        containing the following materials:
      </p>
      <ul>
        <li>Antimony</li>
        <li>Ruthenium</li>
        <li>Tellurium</li>
        <li>Tungsten</li>
        <li>Zirconium</li>
      </ul>
      <p>
        Shooting these crates will cause 2 materials to pop out. Target and roll
        over them in your SRV to collect them. Each one is worth 3 of its
        respective material type.
      </p>
      <p>
        Respawn the crates by logging out to the main menu and logging back in.
      </p>

      <h2>Method 2</h2>
      <Alert variant="warning">
        These planets are very far away from the bubble, so make sure your ship
        has great jump range. Before you leave, Dock up at a station with a raw
        material trader. When you're done gathering the materials, blow your
        ship up (if you can afford it) and you'll respawn with your rebuy at the
        station you docked up in.
      </Alert>
      <h3>Standard Procedure</h3>
      <p>
        Scan the planets with a Detailed Surface Scanner and find the respective
        site for each material.
      </p>
      <p>
        Once in the site,shoot the crystals to get the materials. There are
        plenty of crystals to farm and you can fill up in 10-20 minutes.
      </p>
      <p>
        When your inventory is full of the Grade 4 Materials, trade them down
        for grades 1-3. Don't trade all of the grade 4 materials unless you're
        willing to do another farming run, as they're still required for some
        engineering.
      </p>
      <h3>Systems to Farm Raw Materials</h3>
      {rawMaterialSystems.map((system, id) => (
        <div key={id}>
          <h4>{system.name}</h4>
          <Row>
            {system.materials.map((material, cid) => (
              <Col sm={12} md={4} lg={3} className="mb-3" key={cid}>
                <Card>
                  <Card.Header>{material.name}</Card.Header>
                  <Card.Body className="d-flex flex-column">
                    <span>
                      <strong>Location: </strong>Planet {material.location}
                    </span>
                    <span>
                      <strong>Best Site: </strong>
                      {material.site}
                    </span>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </MainLayout>
  );
};

export default RawMaterialView;
