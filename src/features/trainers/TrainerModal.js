import { Modal, ModalHeader, ModalBody, ModalFooter, CardImg, CardText, CardImgOverlay, CardTitle } from "reactstrap";

const TrainerModal = ({ trainer, isOpen, toggle }) => {    
    const { fullName, training, certifications, bio, image } = trainer;

    return (
        <Modal isOpen={isOpen} toggle={toggle}>
            <ModalHeader toggle={toggle} >
                <h3>{fullName} ~ {certifications}</h3>
            </ModalHeader>
            <ModalBody>
                <CardImg src={image} alt={fullName} />
                <CardImgOverlay >
                    <CardTitle>{fullName}</CardTitle>
                </CardImgOverlay>
                <CardText className="text-center">
                    <h5>
                        • {training.map(i =>
                            i + ' • '
                        )}
                    </h5>
                    <p>{bio}</p>
                </CardText>
            </ModalBody>
            <ModalFooter className="justify-content-center">
                <button className="btn btn-primary">Get In Touch</button>
            </ModalFooter>
        </Modal>
    )
};

export default TrainerModal;