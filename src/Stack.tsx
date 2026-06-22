import React, { useState } from "react";

function Stack() {
    const [textInput, setTextInput] = useState("");
    const [undoStack, setUndoStack] = useState<string[]>([]);
    const [redoStack, setRedoStack] = useState<string[]>([]);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUndoStack((prev) => [...prev, textInput]);
        console.log(undoStack);

        setTextInput(event.target.value);

        setRedoStack([]);
    };

    const onUndo = () => {
        if (undoStack.length === 0) return;

        const previousValue = undoStack[undoStack.length - 1]


        setRedoStack((prev) => [...prev, textInput])

        setUndoStack((prev) => prev.slice(0, -1))

        setTextInput(previousValue)
    };

    const onRedo = () => {
        if (redoStack.length === 0) return;

        const nextValue = redoStack[redoStack.length - 1];

        setUndoStack((prev) => [...prev, textInput]);

        setRedoStack((prev) => prev.slice(0, -1));

        setTextInput(nextValue);
    };

    return (
        <div>
            <input type="text" value={textInput} onChange={onChange} />

            <button onClick={onUndo} disabled={undoStack.length === 0}>
                Undo
            </button>

            <button onClick={onRedo} disabled={redoStack.length === 0}>
                Redo
            </button>

            <p>{textInput}</p>
        </div>
    );
}

export default Stack;