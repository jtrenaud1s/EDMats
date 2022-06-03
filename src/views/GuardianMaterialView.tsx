import React from "react";
import MainLayout from "../layout/MainLayout";

import { Row, Col, Card } from "react-bootstrap";
import { guardianMaterialSystems } from "../data";

const GuardianMaterialView = () => {
  return (
    <MainLayout>
      <h1>Guardian Materials</h1>
      <p>
        Farming guardian materials can be slightly different from standard
        materials. Sites have a danger area you must leave before you can logout
        to refresh the site. Simply drive your SRV a short distance from the
        site (near your ship) and you should be able to log out.
      </p>
      <p>
        Another difference is that you will have Guardian Sentinels attacking
        you a majority of the time. In order to mitigate the majority of the
        damage, fit a Point Defense System to one of the utility slots on the
        top of your ship. This will shoot down the missiles before they can hit
        your SRV.
      </p>
      <p>
        The sentinels will also fire standard weapons at you. Your SRV's guns
        are enough to take them out, just split pips between systems and weapons
        evenly.
      </p>
      <p>
        In order to obtain the blueprints at whichever site you're at, you must
        first obtain a Guardian Relic from one of several specific pylons. Then,
        you must spawn in the other pylons and fire your weapons into the orbs
        at the base. Once all pylons have been charged, you can head to the main
        console where the blueprints spawn, and eject a relic. This will trigger
        the blueprint to spawn. Scan the big ball and you'll have your
        blueprint.
      </p>
      <p>
        Obtaining the data is simple. Head to the location outlined in the image
        for the pattern obelisk data, and you'll find 4 obelisks close together
        that you can almost scan without having to move. Scan, relog, and
        repeat.
      </p>
      <h3>Systems to Farm Guardian Materials</h3>
      <div>
        <Row>
          {guardianMaterialSystems.map((system, id) => (
            <Col sm={12} md={4} lg={3} className="mb-3" key={id}>
              <Card>
                <Card.Header>{system.name}</Card.Header>
                <Card.Body className="d-flex flex-column">
                  <span>
                    <strong>Location: </strong>Planet {system.location}
                  </span>
                  <span>
                    <strong>Site: </strong>
                    {system.site}
                  </span>
                  <span>
                    <strong>Materials: </strong>
                  </span>
                  <ul>
                    {system.materials.map((material, mid) => {
                      return <li key={mid}>{material}</li>;
                    })}
                  </ul>
                  <span>Images:</span>
                  <ul>
                    {system.images.map((image, iid) => {
                      return (
                        <li key={iid}>
                          <a href={image.url}>{image.title}</a>
                        </li>
                      );
                    })}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </MainLayout>
  );
};

export default GuardianMaterialView;
