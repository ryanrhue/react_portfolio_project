import { PROGRAMS } from "../../app/shared/PROGRAMS";

export const getAllPrograms = () => {
    return PROGRAMS;
};

export const getAllFoxPrograms = () => {
    const foxPrograms = PROGRAMS.filter(program => program.category === "Fox");
    return foxPrograms;
};

export const getAllRabbitPrograms = () => {
    const rabbitPrograms = PROGRAMS.filter(program => program.category === "Rabbit");
    return rabbitPrograms;
};