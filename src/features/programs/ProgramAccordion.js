import { useState } from "react";
import { Accordion, AccordionHeader, AccordionBody, AccordionItem } from "reactstrap";

const ProgramAccordion = ({ program }) => {
    const [accordionOpen, setAccordionOpen] = useState(null);

    const toggle = (id) => {
        setAccordionOpen(accordionOpen === id ? null : id);
    }

    return (
        <Accordion flush open={accordionOpen} toggle={toggle}>
                    <div >
                        <AccordionItem key={program.id}>
                            <AccordionHeader targetId={program.id}>
                                <strong>{program.name}</strong>: {program.type}
                            </AccordionHeader>
                            <AccordionBody accordionId={program.id}>
                                {program.description}
                            </AccordionBody>
                        </AccordionItem>
                    </div>
        </Accordion>
    )
};

export default ProgramAccordion;
