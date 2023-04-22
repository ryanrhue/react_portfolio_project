import { Card, CardImg, CardBody, CardTitle } from "reactstrap";
import styles from "./TrainerCard.module.css";

const TrainerCard = ({ trainer, onCardClick }) => {
    const { image, fullName } = trainer;

    return (
        <Card className={styles.cardContainer} onClick={() => onCardClick(trainer)}>
                <CardImg src={image} alt={fullName} />
                <CardBody>
                    <CardTitle className={styles.cardTitle}>
                        <h5>{fullName}</h5>
                    </CardTitle>
                </CardBody>
        </Card>
    );
};

export default TrainerCard;