import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday =
    | "New Years"
    | "Easter"
    | "4th of July"
    | "Halloween"
    | "Christmas";

const holidayEmojis: Record<Holiday, string> = {
    "New Years": "🎉",
    Easter: "🐣",
    "4th of July": "🎆",
    Halloween: "🎃",
    Christmas: "🎄",
};

const alphabeticalOrder: Holiday[] = [
    "4th of July",
    "Christmas",
    "Easter",
    "Halloween",
    "New Years",
];

const timeOrder: Holiday[] = [
    "New Years",
    "Easter",
    "4th of July",
    "Halloween",
    "Christmas",
];

export function CycleHoliday(): React.JSX.Element {
    const [currentHoliday, setCurrentHoliday] = useState<Holiday>("Easter");

    const advanceAlphabetically = () => {
        const currentIndex = alphabeticalOrder.indexOf(currentHoliday);
        const nextIndex = (currentIndex + 1) % alphabeticalOrder.length;
        setCurrentHoliday(alphabeticalOrder[nextIndex]);
    };

    const advanceByYear = () => {
        const currentIndex = timeOrder.indexOf(currentHoliday);
        const nextIndex = (currentIndex + 1) % timeOrder.length;
        setCurrentHoliday(timeOrder[nextIndex]);
    };

    return (
        <div>
            <div>
                Holiday: {holidayEmojis[currentHoliday]} {currentHoliday}
            </div>

            <Button onClick={advanceAlphabetically}>Advance by Alphabet</Button>

            <Button onClick={advanceByYear}>Advance by Year</Button>
        </div>
    );
}
