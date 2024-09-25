import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ShoveBox } from "./bad-components/ShoveBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>

            <Container>
                <Row>
                    <Col>
                        <p>Ronaldo Castillo</p>
                        <Button
                            onClick={() => {
                                console.log("Hello World!");
                            }}
                        >
                            Log Hello World
                        </Button>
                        <h1>Header</h1>
                        <img
                            className="MyImage"
                            src="https://images.contentstack.io/v3/assets/blt6f84e20c72a89efa/bltd23d698154616afc/63c73a89a362596b80751065/img-cat-whiskers-101-header.jpg"
                            alt="Two Cats"
                        />
                    </Col>
                    <Col>
                        Cool Desserts:
                        <ol className="coolDesserts">
                            <li>Cookies</li>
                            <li>Baklava</li>
                            <li>Banana Pudding</li>
                        </ol>
                        <div
                            style={{
                                backgroundColor: "red",
                                height: 200,
                                width: 200,
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
            <hr></hr>
            {/* <DoubleHalf></DoubleHalf> */}
            <hr></hr>
            <ChooseTeam></ChooseTeam>
            <hr></hr>
            <ColoredBox></ColoredBox>
            <hr></hr>
            <ShoveBox></ShoveBox>
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
        </div>
    );
}

export default App;
