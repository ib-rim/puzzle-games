import { useState } from 'react';
import './Piano.scss';

export default function Piano() {

    const [password] = useState<string>("DEAFBED");
    const [guess, setGuess] = useState<string | undefined>("");

    const handleKeyPress = (note: string) => {
        let currentGuess: string = guess + note;
        if (password.slice(0, currentGuess.length) === currentGuess) {
            if (password === currentGuess) {
                alert("WINNER");
            }
            setGuess(currentGuess);
        }
        else {
            if (currentGuess === "DD") {
                setGuess("D");
            }
            else {
                setGuess("");
            }
        }
    }

    return (
        <>
            <div className="piano">
                <div className="scale">
                    <button onClick={() => handleKeyPress("C")} className="piano-key" />
                    <button onClick={() => handleKeyPress(" ")} className="piano-key piano-key--black" />
                    <button onClick={() => handleKeyPress("D")} className="piano-key" />
                    <button onClick={() => handleKeyPress(" ")} className="piano-key piano-key--black" />
                    <button onClick={() => handleKeyPress("E")} className="piano-key" />
                    <button onClick={() => handleKeyPress("F")} className="piano-key" />
                    <button onClick={() => handleKeyPress(" ")} className="piano-key piano-key--black" />
                    <button onClick={() => handleKeyPress("G")} className="piano-key" />
                    <button onClick={() => handleKeyPress(" ")} className="piano-key piano-key--black" />
                    <button onClick={() => handleKeyPress("A")} className="piano-key" />
                    <button onClick={() => handleKeyPress(" ")} className="piano-key piano-key--black" />
                    <button onClick={() => handleKeyPress("B")} className="piano-key" />
                </div>
                <div className="scale">
                    <button onClick={() => handleKeyPress("C")} className="piano-key" />
                    <button onClick={() => handleKeyPress(" ")} className="piano-key piano-key--black" />
                    <button onClick={() => handleKeyPress("D")} className="piano-key" />
                    <button onClick={() => handleKeyPress(" ")} className="piano-key piano-key--black" />
                    <button onClick={() => handleKeyPress("E")} className="piano-key" />
                    <button onClick={() => handleKeyPress("F")} className="piano-key" />
                    <button onClick={() => handleKeyPress(" ")} className="piano-key piano-key--black" />
                    <button onClick={() => handleKeyPress("G")} className="piano-key" />
                    <button onClick={() => handleKeyPress(" ")} className="piano-key piano-key--black" />
                    <button onClick={() => handleKeyPress("A")} className="piano-key" />
                    <button onClick={() => handleKeyPress(" ")} className="piano-key piano-key--black" />
                    <button onClick={() => handleKeyPress("B")} className="piano-key" />
                </div>
            </div>
        </>
    )
}