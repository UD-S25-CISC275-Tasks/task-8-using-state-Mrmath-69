import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [question, change] = useState<QuestionType>("short_answer_question");
    return (
        <div>
            <Button
                onClick={() => {
                    change((prev) =>
                        prev == "short_answer_question"
                            ? "multiple_choice_question"
                            : "short_answer_question"
                    );
                }}
            >
                Change Type
            </Button>
            {question == "short_answer_question"
                ? "Short Answer"
                : "Multiple Choice"}
        </div>
    );
}
