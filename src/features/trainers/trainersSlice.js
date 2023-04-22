import { TRAINERS } from "../../app/shared/TRAINERS";

export const selectAllTrainers = () => {
    return TRAINERS;
}

export const selectTrainerById = (id) => {
    return TRAINERS.find(
        (trainer) => trainer.id === parseInt(id)
    );
}