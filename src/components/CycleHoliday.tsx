import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday =
    | "Christmas"
    | "Easter"
    | "Halloween"
    | "New Year"
    | "Thanksgiving";

const holidayEmojis: Record<Holiday, string> = {
    Christmas: "🎄",
    Easter: "🐰",
    Halloween: "🎃",
    "New Year": "🎆",
    Thanksgiving: "🦃"
};

const alphabeticalOrder: Holiday[] = [
    "Christmas",
    "Easter",
    "Halloween",
    "New Year",
    "Thanksgiving"
];
const yearlyOrder: Holiday[] = [
    "New Year",
    "Easter",
    "Halloween",
    "Thanksgiving",
    "Christmas"
];

export function CycleHoliday(): React.JSX.Element {
    const [currentHoliday, setCurrentHoliday] = useState<Holiday>("Christmas");

    function nextAlphabetically(): void {
        const currentIndex = alphabeticalOrder.indexOf(currentHoliday);
        setCurrentHoliday(
            alphabeticalOrder[(currentIndex + 1) % alphabeticalOrder.length]
        );
    }

    function nextByYear(): void {
        const currentIndex = yearlyOrder.indexOf(currentHoliday);
        setCurrentHoliday(yearlyOrder[(currentIndex + 1) % yearlyOrder.length]);
    }

    return (
        <div>
            <p>
                Holiday: {holidayEmojis[currentHoliday]} {currentHoliday}
            </p>
            <Button onClick={nextAlphabetically}>Advance by Alphabet</Button>
            <Button onClick={nextByYear}>Advance by Year</Button>
        </div>
    );
}
