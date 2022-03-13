import React from 'react'
import { Card, Col } from 'react-bootstrap';
import { Allegiance, ManufacturedMaterial, SystemState } from '../interfaces';
import { allegiances, states } from '../data';

interface IManufacturedComponentLocationProps {
    material: ManufacturedMaterial
}


const generateEDDBLink = (allegiance: Allegiance, state: SystemState) => {
  const a = allegiances[allegiance as Allegiance]
  const t = states[state as SystemState]
  return `https://eddb.io/system?a=${a}&t=${t}&sort=-population`;
};

const ManufacturedComponentLocation = ({material}: IManufacturedComponentLocationProps) => {
  return (
    <Col sm={12} md={4} lg={3} className="mb-3">
      <Card>
        <Card.Header className="d-flex align-items-center justify-content-between">
          <span>{material.name}</span>
          <a
            className="btn btn-sm btn-primary ms-2"
            href={generateEDDBLink(material.requirements?.allegiance[0] || "Any", material.requirements?.states[0] || "Any")}
            target="_blank"
            rel="noreferrer">
            EDDB
          </a>
        </Card.Header>
        {material.requirements ? (
          <Card.Body className="d-flex flex-column">
            <strong>System Requirements</strong>
            <small>
              <strong>Allegiance: </strong>
              <span className="text-muted">
                {material.requirements.allegiance.join(", ")}
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
}

export default ManufacturedComponentLocation