import { Formik, Form, Field, ErrorMessage } from "formik";
import { Label, FormGroup, Col, Button } from "reactstrap";
import { calculateMacros } from '../../utils/calculateMacros';
import  { validateImperialForm } from '../../utils/validateImperialForm';
import { validateMetricForm } from '../../utils/validateMetricForm';

export const ImperialTab = ({ setMacroTotals }) => {
    const handleSubmit = (values, { resetForm }) => {
        console.log('form values:', values);
        console.log('in JSON format:', JSON.stringify(values));
        const calculatedMacros = calculateMacros(values);
        setMacroTotals(calculatedMacros);
        resetForm(); 
    };

    const FormikErrorMessage = ({ name }) => {
        return (
            <ErrorMessage name={name}>
                {msg => <p className="text-danger">{msg}</p>}
            </ErrorMessage>
        )
    };

    return (
        <div>
        <Formik
            initialValues={{
                age: '',
                sex: '',
                feet: '',
                inches: '',
                pounds: '',
                activity: '',
                goal: '',
                ratio: ''
            }}
            onSubmit={handleSubmit}
            validate={validateImperialForm}
        >
            <Form>
                <FormGroup row>
                    <Label htmlFor='age'>
                        Age
                    </Label>
                    <Col>
                        <Field
                            name='age'
                            placeholder='Age'
                        />
                        <FormikErrorMessage name='age' />
                    </Col>
                </FormGroup>
                <FormGroup >
                    <Label>Sex</Label>
                    <Col>
                        <Field type='radio' name='sex' value='female' /> Female  
                    </Col> 
                    <Col>
                        <Field type='radio' name='sex' value='male' /> Male
                    </Col>
                    <FormikErrorMessage name='sex' />
                </FormGroup>
                <FormGroup row>
                    <Label>Height</Label>
                    <Col>
                        <Field 
                            name='feet'
                            placeholder='Ft'
                        />
                        <FormikErrorMessage name='feet' />
                    </Col>
                    <Col>
                        <Field 
                            name='inches'
                            placeholder='In'
                        />
                        <FormikErrorMessage name='inches' />
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Label>Weight</Label>
                    <Col>
                        <Field 
                            name='pounds'
                            placeholder='Lbs'
                            className='form-contorl'
                        />
                        <FormikErrorMessage name='pounds' />
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Label>Activity Level</Label>
                    <Col>
                        <Field
                            name='activity' as='select'
                        >
                            <option value=''>Select...</option>
                            <option value='1.2'>Sedentary (Little or no exercise)</option>
                            <option value='1.375'>Light (Exercise 1-3 times/week)</option>
                            <option value='1.55'>Moderate (Exercise 4-5 times/week)</option>
                            <option value='1.725'>Active (Daily Exercise or Intense Exercise 3-4 times/week)</option>
                            <option value='1.9'>Very Active (Hard Labor Job or Training 2 times/day)</option>
                        </Field>
                        <FormikErrorMessage name='activity' />
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Label>Goal</Label>
                    <Col>
                        <Field
                            name='goal' as='select'
                        >
                            <option value=''>Select...</option>
                            <option value='maintain'>Maintain Weight</option>
                            <option value='lose'>Lose Weight</option>
                            <option value='leanBulk'>Gain Weight: Lean Bulk</option>
                            <option value='massBulk'>Gain Weight: Mass Bulk</option>
                        </Field>
                        <FormikErrorMessage name='goal' />
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Label>Macronutrient Ratios</Label>
                    <Col>
                        <Field
                            name='ratio' as='select'
                        >
                            <option value=''>Select...</option>
                            <option value='balanced'>Balanced (30% Protein, 35% Carb, 35% Fat)</option>
                            <option value='lowFat'>Low Fat (30% Protein, 50% Carb, 20% Fat)</option>
                            <option value='lowCarb'>Low Carb (30% Protein, 20% Carb, 50% Fat)</option>
                        </Field>
                        <FormikErrorMessage name='ratio' />
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col>
                        <Button type="submit" color="primary">
                            Get Your Macros
                        </Button>                    
                    </Col>
                </FormGroup>
            </Form>
        </Formik>
        </div>
    );
};


export const MetricTab = ({setMacroTotals}) => {
    const handleSubmit = (values, { resetForm }) => {
        console.log('form values:', values);
        console.log('in JSON format:', JSON.stringify(values));
        const calculatedMacros = calculateMacros(values);
        setMacroTotals(calculatedMacros);
        resetForm();
    };

    const FormikErrorMessage = ({ name }) => {
        return (
            <ErrorMessage name={name}>
                {msg => <p className="text-danger">{msg}</p>}
            </ErrorMessage>
        )
    };

    return (
        <div>
        <Formik
            initialValues={{
                age: '',
                sex: '',
                centimeters: '',
                kilograms: '',
                activity: '',
                goal: '',
                ratio: ''
            }}
            onSubmit={handleSubmit}
            validate={validateMetricForm}
        >
            <Form>
                <FormGroup row>
                    <Label htmlFor='age'>
                        Age
                    </Label>
                    <Col>
                        <Field
                            name='age'
                            placeholder='Age'
                            className='form-control'
                        />
                        <FormikErrorMessage name='age' />
                    </Col>
                </FormGroup>
                <FormGroup >
                    <Label>Sex</Label>
                    <Col>
                        <Field type='radio' name='sex' value='female' /> Female  
                    </Col> 
                    <Col>
                        <Field type='radio' name='sex' value='male' /> Male
                    </Col>
                    <FormikErrorMessage name='age' />
                </FormGroup>
                <FormGroup row>
                    <Label>Height</Label>
                    <Col>
                        <Field 
                            name='centimeters'
                            placeholder='Cm'
                        />
                        <FormikErrorMessage name='centimeters' />
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Label>Weight</Label>
                    <Col>
                        <Field 
                            name='kilograms'
                            placeholder='Kgs'
                            className='form-contorl'
                        />
                        <FormikErrorMessage name='kilograms' />
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Label>Activity</Label>
                    <Col>
                        <Field
                            name='activity' as='select'
                        >
                            <option value='1.2'>Sedentary (Little or no exercise)</option>
                            <option value='1.375'>Light (Exercise 1-3 times/week)</option>
                            <option value='1.55'>Moderate (Exercise 4-5 times/week)</option>
                            <option value='1.725'>Active (Daily Exercise or Intense Exercise 3-4 times/week)</option>
                            <option value='1.9'>Very Active (Hard Labor Job or Training 2 times/day)</option>
                        </Field>
                        <FormikErrorMessage name='activity' />
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Label>Goal</Label>
                    <Col>
                        <Field
                            name='goal' as='select'
                        >
                            <option value='0'>Maintain Weight</option>
                            <option value='500'>Gain Weight</option>
                            <option value='-500'>Lose Weight</option>
                        </Field>
                        <FormikErrorMessage name='goal' />
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Label>Macronutrient Ratios</Label>
                    <Col>
                        <Field
                            name='ratio' as='select'
                        >
                            <option value=''>Select...</option>
                            <option value='balanced'>Balanced (30% Protein, 35% Carb, 35% Fat)</option>
                            <option value='lowFat'>Low Fat (30% Protein, 50% Carb, 20% Fat)</option>
                            <option value='lowCarb'>Low Carb (30% Protein, 20% Carb, 50% Fat)</option>
                        </Field>
                        <FormikErrorMessage name='ratio' />
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Col>
                        <Button type="submit" color="primary">
                            Get Your Macros
                        </Button>                    
                    </Col>
                </FormGroup>
            </Form>
        </Formik>
        </div>
    );
};