import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [isRevealed, reveal] = useState<boolean>(false);
    return (
        <div>
            <Button
                onClick={() => {
                    reveal(!isRevealed);
                }}
            >
                Reveal Answer
            </Button>
            {isRevealed && <p>42</p>}
        </div>
    );
}
