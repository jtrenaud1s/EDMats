import React from "react";
import MainLayout from "../layout/MainLayout";

import { Row, Col, Card } from "react-bootstrap";
import { guardianMaterialSystems } from "../data";

const RawMaterialView = () => {
  return (
    <MainLayout>
      <h1>Guardian Materials</h1>
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
                  <span><strong>Materials: </strong></span>
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

export default RawMaterialView;
