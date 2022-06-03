import { Button, Modal, ModalProps } from "react-bootstrap";
import { Image } from "../interfaces";

interface IImageModalProps extends ModalProps {
  image: Image;
}

export const ImageModal = (props: IImageModalProps) => {
  const { image, ...rest } = props;
  return (
    <Modal
      {...rest}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {image.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={image.url} alt={image.title}></img>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};
