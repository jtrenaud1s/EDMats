import React from "react";
import { Alert, Row, Col, Card } from "react-bootstrap";
import { manufacturedMaterials } from "../data";
import MainLayout from "../layout/MainLayout";

const ManufacturedMaterialView = () => {
  return (
    <MainLayout>
      <h1>Manufactured Materials</h1>
      <p>
        <a href="https://eddb.io/system" target="_blank" rel="noreferrer">
          Systems can be found quickly by using this tool
        </a>
      </p>
      <p>
        You can filter nearby systems by allegiance and states. If you don't
        have much luck with the high population systems (I.E. 14 billion), try
        lower population (I.E. 4 billion), which are still considered High
        Population.
      </p>
      <h2>Standard Procedure</h2>
      <p>
        Once in a target system, scan the Nav Beacon to reveal High Grade
        Emission Pockets. These pockets can only be viewed in your navigation
        panel while you are in supercruise.
      </p>
      <p>
        Once you've emptied a pocket of materials, stay in the site, exit to
        desktop, and log back in to the exact same mode/private group you were
        previously in.
      </p>
      <p>
        Engage supercruise. You should now see an Unidentified Signal Source
        very close to your current position. This is the respawned High Grade
        Emissions pocket.
      </p>
      <p>Drop into the new pocket, rinse, and repeat!</p>
      <p>
        Once you've obtained maximum levels of each Grade 5 manufactured
        material, you can visit a manufactured material trader to trade down for
        grades 1-4. (Just don't trade all of them, you'll still need some grade
        5 materials for engineering, unless you want to just make another
        farming run to top up after trading for lower grade materials.)
      </p>
      <Alert variant="info">
        <Alert.Heading>
          This loop <i>may</i> be a good one to try:
        </Alert.Heading>
        Matikuoluk, Nepi, and Ye'Kuape, supposedly have high numbers of High
        Grade Emissions.
      </Alert>
      <Row>
        {manufacturedMaterials.map((material, id) => {
          return (
            <Col key={id} sm={12} md={4} lg={3} className="mb-3">
              <Card>
                <Card.Header>{material.name}</Card.Header>
                {material.requirements ? (
                  <Card.Body className="d-flex flex-column">
                    <strong>System Requirements</strong>
                    <small>
                      <strong>Allegiance: </strong>
                      <span className="text-muted">
                        {material.requirements.allegiance.join(', ')}
                      </span>
                    </small>
                    <small>
                      <strong>Population: </strong>
                      <span className="text-muted">
                        {material.requirements.population}
                      </span>
                    </small>
                    <small>
                      <strong>State(s): </strong>
                      <span className="text-muted">
                        {material.requirements.states.join(", ")}
                      </span>
                    </small>
                  </Card.Body>
                ) : (
                  <Card.Body>{material.notes}</Card.Body>
                )}
              </Card>
            </Col>
          );
        })}
      </Row>
    </MainLayout>
  );
};

export default ManufacturedMaterialView;
