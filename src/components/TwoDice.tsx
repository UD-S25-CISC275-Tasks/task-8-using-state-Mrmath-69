import React, { useState } from "react";
import { Button } from "react-bootstrap";

// Function to roll a 6-sided die
function d6(): number {
    return Math.floor(Math.random() * 6) + 1;
}

export function TwoDice(): React.JSX.Element {
    let initialLeft = d6();
    let initialRight = d6();
    while (initialLeft === initialRight) {
        initialRight = d6();
    }

    const [leftDie, setLeftDie] = useState<number>(initialLeft);
    const [rightDie, setRightDie] = useState<number>(initialRight);

    let resultMessage = "";
    if (leftDie === rightDie) {
        resultMessage = leftDie === 1 ? "Lose" : "Win";
    }

    return (
        <div>
            <p>
                <span data-testid="left-die">{leftDie}</span> -{" "}
                <span data-testid="right-die">{rightDie}</span>
            </p>

            <Button
                onClick={() => {
                    setLeftDie(d6());
                }}
            >
                Roll Left
            </Button>
            <Button
                onClick={() => {
                    setRightDie(d6());
                }}
            >
                Roll Right
            </Button>

            {resultMessage && <p>{resultMessage}</p>}
        </div>
    );
}
