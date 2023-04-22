export const validateContactForm = (values) => {
    const errors = {};

    if (!values.firstName) {
        errors.firstName = 'Required'
    } else if (values.firstName.length < 2) {
        errors.firstName = 'Too few characters'
    } else if (values.firstName.length > 20) {
        errors.firstName = 'Too many characters';
    }

    if (!values.lastName) {
        errors.lastName = 'Required'
    } else if (values.lastName.length < 2) {
        errors.lastName = 'Too few characters'
    } else if (values.lastName.length > 20) {
        errors.lastName = 'Too many characters';
    }

    const phoneRegex = /^\d+$/;
    if (!phoneRegex.test(values.phone)) {
        errors.phone = 'Enter numbers only';
    }

    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(values.email)) {
        errors.email = 'Enter a valid email address';
    }

    if (!values.program) {
        errors.program = 'Required'
    }

    return errors;
}