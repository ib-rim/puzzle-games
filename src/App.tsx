import React, { useState, useSyncExternalStore } from 'react';
import './App.scss';
import Piano from './puzzles/piano/Piano';
import Eating from './puzzles/eating/Eating';

function App() {

    const [currentPuzzle, setCurrentPuzzle] = useState<number>(0);
    const puzzles: Array<JSX.Element> = [
        <Piano handleSolved={() => setCurrentPuzzle(currentPuzzle + 1)} />,
        <Eating handleSolved={() => setCurrentPuzzle(currentPuzzle + 1)}/>];

    return (
        <div className="App">
            {puzzles[currentPuzzle]}
        </div>
    );
}

export default App;
