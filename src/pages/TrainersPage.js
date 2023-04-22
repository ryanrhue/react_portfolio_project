import { Container } from "reactstrap";
import TrainersList from "../features/trainers/TrainersList";
import TrainerModal from "../features/trainers/TrainerModal";
import { useState } from 'react';

const TrainersPage = () => {
    const [selectedTrainer, setSelectedTrainer] = useState();
    const [modalOpen, setModalOpen] = useState(false);

    const handleCardClick = (trainer) => {
        setSelectedTrainer(trainer);
        setModalOpen(true);
    }

    const toggleModal = () => {
        setModalOpen(!modalOpen);
    }

    return (
        <Container>
            <TrainersList onCardClick={handleCardClick}/>
            {selectedTrainer && (
                <TrainerModal 
                    isOpen={modalOpen}
                    trainer={selectedTrainer}
                    toggle={toggleModal}
                />
            )}
        </Container>
    )
};

export default TrainersPage;