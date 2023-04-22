export const validateMetricForm = (values) => {
    const { age, sex, centimeters, kilograms, activity, goal, ratio } = values;
    const errors = {};

    if (!age) {
        errors.age = 'Required'
    } else if (isNaN(age)) {
        errors.age = 'Enter digits only'
    } else if (!Number(age)) {
        errors.age = 'Round to the nearest whole number';
    }

    if (!sex) {
        errors.sex = 'Required'
    }

    if (!centimeters) {
        errors.centimeters = 'Required'
    } else if (isNaN(centimeters)) {
        errors.centimeters = 'Enter digits only'
    } else if (!Number(centimeters)) {
        errors.centimeters = 'Round to the nearest whole number';
    }

    if (!kilograms) {
        errors.kilograms = 'Required'
    } else if (isNaN(kilograms)) {
        errors.kilograms = 'Enter digits only'
    } else if (!Number(kilograms)) {
        errors.kilograms = 'Round to the nearest whole number';
    }

    if (!activity) {
        errors.activity = 'Required'
    }

    if (!goal) {
        errors.goal = 'Required'
    }

    if (!ratio) {
        errors.ratio = 'Required'
    }

    return errors;
}