import React, { useState } from "react";
import { Button } from "react-bootstrap";

function d6(): number {
    return Math.floor(Math.random() * 6) + 1;
}

export function TwoDice(): React.JSX.Element {
    const [leftDie, setLeftDie] = useState<number>(1);
    const [rightDie, setRightDie] = useState<number>(2);

    let resultMessage = "";
    if (leftDie === rightDie) {
        resultMessage = leftDie === 1 ? "Lose" : "Win";
    }

    return (
        <div>
            <span data-testid="left-die">{leftDie}</span> -{" "}
            <span data-testid="right-die">{rightDie}</span>
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
