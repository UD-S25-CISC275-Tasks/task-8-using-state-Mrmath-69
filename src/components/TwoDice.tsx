import React, { useState } from "react";
import { Button } from "react-bootstrap";

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
    const [resultMessage, setResultMessage] = useState<string>("");

    function updateMessage(newLeft: number, newRight: number) {
        if (newLeft === newRight) {
            setResultMessage(newLeft === 1 ? "Lose" : "Win");
        } else {
            setResultMessage("");
        }
    }

    return (
        <div>
            <p>
                <span data-testid="left-die">{leftDie}</span> -{" "}
                <span data-testid="right-die">{rightDie}</span>
            </p>

            <Button
                onClick={() => {
                    const newLeft = d6();
                    setLeftDie(newLeft);
                    updateMessage(newLeft, rightDie);
                }}
            >
                Roll Left
            </Button>

            <Button
                onClick={() => {
                    const newRight = d6();
                    setRightDie(newRight);
                    updateMessage(leftDie, newRight);
                }}
            >
                Roll Right
            </Button>

            {resultMessage && <p>{resultMessage}</p>}
        </div>
    );
}
