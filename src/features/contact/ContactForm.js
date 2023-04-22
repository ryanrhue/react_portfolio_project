import { Formik, Field, Form, ErrorMessage } from "formik";
import { Button, Col, Row, Label, FormGroup, Input } from "reactstrap";
import React from 'react';
import TRAINERS from '../../app/shared/TRAINERS';
import { validateContactForm } from "../../utils/validateContactForm";

const ContactForm = () => {
    const handleSubmit = (values, { resetForm }) => {
        console.log('form values:', values);
        console.log('in JSON format:', JSON.stringify(values));
        resetForm();
    }

    const FormikErrorMessage = ({ name }) => {
        return (
            <ErrorMessage name={name}>
                {msg => <p className="text-danger">{msg}</p>}
            </ErrorMessage>
        )
    };

    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                phone: '',
                email: '',
                agree: false,
                program: '',
                info: ''
            }}
            onSubmit={handleSubmit}
            validate={validateContactForm}
        >
            <Form>
                <Row>
                    <Col md='6'>
                        <FormGroup md='6'>
                            <Label htmlFor='firstName'>
                                First Name
                            </Label>
                            <Field
                                name='firstName'
                                placeholder='First Name'
                                className='form-control'
                            >
                            </Field>
                            <FormikErrorMessage name='firstName' />
                        </FormGroup>
                    </Col>
                    <Col md='6'>
                        <FormGroup md='6'>
                            <Label htmlFor='lastName'>
                                Last Name
                            </Label>
                            <Field
                                name='lastName'
                                placeholder='Last Name'
                                className='form-control'
                            >
                            </Field>
                            <FormikErrorMessage name='lastName' />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md='6'>
                        <FormGroup md='6'>
                            <Label htmlFor='phone'>
                                Phone
                            </Label>
                            <Field
                                name='phone'
                                placeholder='Phone'
                                className='form-control'
                            >
                            </Field>
                            <FormikErrorMessage name='phone' />
                        </FormGroup>
                    </Col>
                    <Col md='6'>
                        <FormGroup md='6'>
                            <Label htmlFor='email'>
                                Email
                            </Label>
                            <Field
                                name='email'
                                placeholder='Email'
                                type='email'
                                className='form-control'
                            >
                            </Field>
                            <FormikErrorMessage name='email' />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md='6'>
                        <FormGroup>
                            <Label>
                                Preferred Programming
                            </Label>
                            <Field 
                                name='program'
                                as='select'
                                className='form-control'
                            >
                                <option value=''>Select...</option>
                                <option value='fox'>Fox Programming</option>
                                <option value='rabbit'>Rabbit Programming</option>
                                <option value='foxAndRabbit'>Fox & Rabbit Programming</option>
                            </Field>
                            <FormikErrorMessage name='program' />
                        </FormGroup>
                    </Col>
                    <Col md='6'>
                        <FormGroup>
                            <Label>
                                Preferred Trainer
                            </Label>
                            <Field 
                                name='program'
                                as='select'
                                className='form-control'
                            >
                                <option value=''>Optional...</option>
                                {
                                    TRAINERS.map(trainer => {
                                        return (
                                            <option value={trainer.id}>{trainer.fullName}</option>
                                        )
                                    })
                                }
                            </Field>
                        </FormGroup>
                    </Col>
                </Row>
                <FormGroup row>
                    <Col md={{size: 10, offset : 2}}>
                        <Button type="submit" color="primary">
                            Send Feedback
                        </Button>                    
                    </Col>
                </FormGroup>
            </Form>
        </Formik>
    );
};

export default ContactForm;