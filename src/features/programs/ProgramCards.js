import { Card, CardHeader, CardBody, CardTitle, Row, Col } from "reactstrap";
import ProgramAccordion from "./ProgramAccordion";
import { getAllFoxPrograms, getAllRabbitPrograms } from "./programsSlice";


export const ProgramCards = ({ programs }) => {
    const foxPrograms = getAllFoxPrograms();
    const rabbitPrograms = getAllRabbitPrograms();

    return (
        <Row ms-auto>
            <Col>
                <Card>
                    <CardHeader className="text-center">
                        <CardTitle><h2>Fox Programs</h2></CardTitle>
                    </CardHeader>
                    <CardBody>
                    {
                        foxPrograms.map(foxProgram => 
                            <ProgramAccordion key={foxProgram.id} program={foxProgram}/>
                        )
                    }
                    </CardBody>
                </Card>
            </Col>
            <Col>
                <Card className="text-center">
                    <CardHeader>
                        <h2>Rabbit Programs</h2>
                    </CardHeader>
                    <CardBody>
                    {
                        rabbitPrograms.map(rabbitProgram => 
                            <ProgramAccordion key={rabbitProgram.id} program={rabbitProgram}/>
                        )
                    }
                    </CardBody>
                </Card>
            </Col>
        </Row>
    )
}