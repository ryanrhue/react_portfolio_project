import { Row, Col } from "reactstrap";
import TrainerCard from "./TrainerCard";
import { selectAllTrainers } from "./trainersSlice";


const TrainersList = ({ onCardClick }) => {
    const trainers = selectAllTrainers();

    return (
            <Row className="ms-auto">
                {trainers.map((trainer) => {
                    return (
                        <Col md='5' className="m-4" key={trainer.id}>
                            <TrainerCard trainer={trainer} onCardClick={onCardClick} />
                        </Col>
                    );
                })}
            </Row>
    );
};

export default TrainersList;