import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [diceOne, setDiceOne] = useState<number>(1);
    const [diceTwo, setDiceTwo] = useState<number>(2);
    const leftDiceRoll = () => {
        setDiceOne(d6());
    };
    const rightDiceRoll = () => {
        setDiceTwo(d6());
    };
    return (
        <div>
            <span data-testid="left-die">{diceOne}</span>
            <span data-testid="right-die">{diceTwo}</span>
            <div>
                <Button onClick={leftDiceRoll}>Roll Left</Button>
                <Button onClick={rightDiceRoll}>Roll Right</Button>
            </div>
            <div>
                <span>
                    {diceOne === diceTwo && diceOne === 1 ?
                        "Lose"
                    : diceOne === diceTwo ?
                        "Win"
                    :   null}
                </span>
            </div>
        </div>
    );
}
