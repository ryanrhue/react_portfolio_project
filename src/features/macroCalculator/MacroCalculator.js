import { Card, CardBody, CardHeader, CardTitle, CardSubtitle, TabContent, TabPane, Col, Nav, NavItem, NavLink, CardFooter } from "reactstrap";
import { useState } from "react";
import { ImperialTab, MetricTab } from "./TabInputs";
import './MacroCalculator.css'

const MacroCalculator = () => {
    const [activeTab, setActiveTab] = useState('usImperial')
    const [macroTotals, setMacroTotals] = useState(null);

    return (
        <Card>
            <div className="text-center p-3 title-div">
                <h2>Macro Calculator</h2>
                <CardSubtitle>Enter your personal info to find your daily macros.</CardSubtitle>
            </div>
            <Nav tabs fill className="p-0 border-bottom-0">
                <NavItem tag='h6'>
                    <NavLink active={activeTab === 'usImperial'} onClick={() => setActiveTab('usImperial')}>
                        US/Imperial
                    </NavLink>
                </NavItem>
                <NavItem tag='h6'>
                    <NavLink  active={activeTab === 'metric'} onClick={() => setActiveTab('metric')}>
                        Metric
                    </NavLink>
                </NavItem>
            </Nav>
            <CardBody>
                <TabContent activeTab={activeTab}>
                    <TabPane tabId='usImperial'>
                        <ImperialTab setMacroTotals={setMacroTotals} />
                    </TabPane>
                    <TabPane tabId='metric'>
                        <MetricTab setMacroTotals={setMacroTotals} />
                    </TabPane>
                </TabContent>
                {macroTotals && (
                    <CardFooter className="card-footer" id="macroCalculatorCard">
                        <CardTitle tag='h4'>Your Daily Macros</CardTitle>
                        <p>Calories: {Math.round(macroTotals.dailyCalories)}</p>
                        <p>Protein: {Math.round(macroTotals.protein)}g</p>
                        <p>Carbohydrate: {Math.round(macroTotals.carb)}g</p>
                        <p>Fat: {Math.round(macroTotals.fat)}g</p>
                    </CardFooter>
                )}
            </CardBody>
        </Card>
    )
}

export default MacroCalculator;