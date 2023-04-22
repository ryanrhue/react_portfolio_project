export const validateImperialForm = (values) => {
    const { age, sex, feet, inches, pounds, activity, goal, ratio } = values;
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

    if (!feet) {
        errors.feet = 'Required'
    } if (isNaN(feet)) {
        errors.feet = 'Enter digits only'
    } else if (!Number(feet)) {
        errors.feet = 'Round to the nearest whole number';
    }

    if (isNaN(inches)) {
        errors.inches = 'Enter digits only'
    } else if (!Number(inches)) {
        errors.inches = 'Round to the nearest whole number';
    }

    if (!pounds) {
        errors.pounds = 'Required'
    } else if (isNaN(pounds)) {
        errors.pounds = 'Enter digits only'
    } else if (!Number(pounds)) {
        errors.pounds = 'Round to the nearest whole number';
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