import { useEffect, useRef, useState } from 'react'
import './Eating.scss'
import { toContainHTML } from '@testing-library/jest-dom/matchers'

export default function Eating() {

    const [mousePosition, setMousePosition] = useState<{ [pos: string]: Number }>({
        "x": 0,
        "y": 0
    })
    const [toothAnimation, setToothAnimation] = useState<string | undefined>('');

    const mouthElem = useRef<HTMLInputElement | null>(null)

    const mouthChomp = () => {
        setToothAnimation("chompAnimation");
        setTimeout(() => {
            setToothAnimation("");
        }, 1000)
    }

    const handleMouseMove = (e: MouseEvent) => {
        setMousePosition({
            "x": e.pageX,
            "y": e.pageY
        });
        if (mouthElem.current) {
            mouthElem.current.style.left = mousePosition.x.toString() + "px";
            mouthElem.current.style.top = mousePosition.y.toString() + "px";
        }
    }

    useEffect(() => {
        document.addEventListener("mousemove", handleMouseMove);
        return () => document.removeEventListener("mousemove", handleMouseMove);
    })

    return (
        <div className="room" onClick={() => mouthChomp()}>
            <div ref={mouthElem} className="mouth">
                <div className="teeth teeth--top">
                    <div className={`tooth ${toothAnimation}`} />
                    <div className={`tooth ${toothAnimation}`} />
                    <div className={`tooth ${toothAnimation}`} />
                    <div className={`tooth ${toothAnimation}`} />
                    <div className={`tooth ${toothAnimation}`} />
                    <div className={`tooth ${toothAnimation}`} />
                    <div className={`tooth ${toothAnimation}`} />
                    <div className={`tooth ${toothAnimation}`} />
                </div>
                <div className="teeth teeth--bottom">
                    <div className={`tooth ${toothAnimation}`} />
                    <div className={`tooth ${toothAnimation}`} />
                    <div className={`tooth ${toothAnimation}`} />
                    <div className={`tooth ${toothAnimation}`} />
                    <div className={`tooth ${toothAnimation}`} />
                    <div className={`tooth ${toothAnimation}`} />
                    <div className={`tooth ${toothAnimation}`} />
                    <div className={`tooth ${toothAnimation}`} />
                </div>
            </div>
        </div>
    )
}