import { useState } from 'react';
import './Piano.scss';
import A3 from './assets/mp3/A3.mp3';
import A4 from './assets/mp3/A4.mp3';
import Ab3 from './assets/mp3/Ab3.mp3';
import Ab4 from './assets/mp3/Ab4.mp3';
import B3 from './assets/mp3/B3.mp3';
import B4 from './assets/mp3/B4.mp3';
import Bb3 from './assets/mp3/Bb3.mp3';
import Bb4 from './assets/mp3/Bb4.mp3';
import C3 from './assets/mp3/C3.mp3';
import C4 from './assets/mp3/C4.mp3';
import D3 from './assets/mp3/D3.mp3';
import D4 from './assets/mp3/D4.mp3';
import Db3 from './assets/mp3/Db3.mp3';
import Db4 from './assets/mp3/Db4.mp3';
import E3 from './assets/mp3/E3.mp3';
import E4 from './assets/mp3/E4.mp3';
import Eb3 from './assets/mp3/Eb3.mp3';
import Eb4 from './assets/mp3/Eb4.mp3';
import F3 from './assets/mp3/F3.mp3';
import F4 from './assets/mp3/F4.mp3';
import G3 from './assets/mp3/G3.mp3';
import G4 from './assets/mp3/G4.mp3';
import Gb3 from './assets/mp3/Gb3.mp3';
import Gb4 from './assets/mp3/Gb4.mp3';

export default function Piano() {

    const [password] = useState<string>("DEAFBED");
    const [guess, setGuess] = useState<string | undefined>("");

    const notes: { [note: string]: HTMLAudioElement } = {
        "A3": new Audio(A3),
        "A4": new Audio(A4),
        "Ab3": new Audio(Ab3),
        "Ab4": new Audio(Ab4),
        "B3": new Audio(B3),
        "B4": new Audio(B4),
        "Bb3": new Audio(Bb3),
        "Bb4": new Audio(Bb4),
        "C3": new Audio(C3),
        "C4": new Audio(C4),
        "D3": new Audio(D3),
        "D4": new Audio(D4),
        "Db3": new Audio(Db3),
        "Db4": new Audio(Db4),
        "E3": new Audio(E3),
        "E4": new Audio(E4),
        "Eb3": new Audio(Eb3),
        "Eb4": new Audio(Eb4),
        "F3": new Audio(F3),
        "F4": new Audio(F4),
        "G3": new Audio(G3),
        "G4": new Audio(G4),
        "Gb3": new Audio(Gb3),
        "Gb4": new Audio(Gb4)
    }

    const playNote = (note: string) => {
        notes[note].currentTime = 0;
        notes[note].play();
    }

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
                    <button onMouseDown={() => playNote("C3")} onClick={() => handleKeyPress("C")} className="piano-key" />
                    <button onMouseDown={() => playNote("Db3")} onClick={() => handleKeyPress(" ")} className="piano-key piano-key--black" />
                    <button onMouseDown={() => playNote("D3")} onClick={() => handleKeyPress("D")} className="piano-key" />
                    <button onMouseDown={() => playNote("Eb3")} onClick={() => handleKeyPress(" ")} className="piano-key piano-key--black" />
                    <button onMouseDown={() => playNote("E3")} onClick={() => handleKeyPress("E")} className="piano-key" />
                    <button onMouseDown={() => playNote("F3")} onClick={() => handleKeyPress("F")} className="piano-key" />
                    <button onMouseDown={() => playNote("Gb3")} onClick={() => handleKeyPress(" ")} className="piano-key piano-key--black" />
                    <button onMouseDown={() => playNote("G3")} onClick={() => handleKeyPress("G")} className="piano-key" />
                    <button onMouseDown={() => playNote("Ab3")} onClick={() => handleKeyPress(" ")} className="piano-key piano-key--black" />
                    <button onMouseDown={() => playNote("A3")} onClick={() => handleKeyPress("A")} className="piano-key" />
                    <button onMouseDown={() => playNote("Bb3")} onClick={() => handleKeyPress(" ")} className="piano-key piano-key--black" />
                    <button onMouseDown={() => playNote("B3")} onClick={() => handleKeyPress("B")} className="piano-key" />
                </div>
                <div className="scale">
                    <button onMouseDown={() => playNote("C4")} onClick={() => handleKeyPress("C")} className="piano-key" />
                    <button onMouseDown={() => playNote("Db4")} onClick={() => handleKeyPress(" ")} className="piano-key piano-key--black" />
                    <button onMouseDown={() => playNote("D4")} onClick={() => handleKeyPress("D")} className="piano-key" />
                    <button onMouseDown={() => playNote("Eb4")} onClick={() => handleKeyPress(" ")} className="piano-key piano-key--black" />
                    <button onMouseDown={() => playNote("E4")} onClick={() => handleKeyPress("E")} className="piano-key" />
                    <button onMouseDown={() => playNote("F4")} onClick={() => handleKeyPress("F")} className="piano-key" />
                    <button onMouseDown={() => playNote("Gb4")} onClick={() => handleKeyPress(" ")} className="piano-key piano-key--black" />
                    <button onMouseDown={() => playNote("G4")} onClick={() => handleKeyPress("G")} className="piano-key" />
                    <button onMouseDown={() => playNote("Ab4")} onClick={() => handleKeyPress(" ")} className="piano-key piano-key--black" />
                    <button onMouseDown={() => playNote("A4")} onClick={() => handleKeyPress("A")} className="piano-key" />
                    <button onMouseDown={() => playNote("Bb4")} onClick={() => handleKeyPress(" ")} className="piano-key piano-key--black" />
                    <button onMouseDown={() => playNote("B4")} onClick={() => handleKeyPress("B")} className="piano-key" />
                </div>
            </div>
        </>
    )
}