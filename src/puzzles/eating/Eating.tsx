import { useEffect, useRef, useState } from 'react'
import './Eating.scss'

export default function Eating(props: { handleSolved: () => void }) {

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
            <div className="table">
                <div className="glass glass--water"></div>
                <div className="glass glass--water"></div>
                <div className="plate">
                    <div className="burger" />
                </div>
                <div className="plate">
                    <div className="burger burger--rotten" />
                </div>
                <div className="plate">
                    <div className="burger burger--cheeseless" />
                </div>
                <div className="glass glass--water"></div>
                <div className="glass glass--water"></div>
                <div className="plate">
                    <div className="burger burger--plain" />
                </div>
            </div>
            <div className="table">
                <div className="plate">
                    <div className="burger" />
                </div>
                <div className="glass glass--juice"></div>
                <div className="glass glass--water"></div>
                <div className="plate">
                    <div className="burger burger--plain" />
                </div>
                <div className="jug jug--juice" />
                <div className="glass glass--juice"></div>
                <div className="pizza" />
                <div className="plate">
                    <div className="brownie" />
                    <div className="brownie" />
                </div>
            </div>
            <div className="blanket">
                <div className="pie pie--strawberry" />
                <div className="plate-stack">
                    <div className="plate" />
                    <div className="plate" />
                    <div className="plate" />
                    <div className="plate" />
                    <div className="plate" />
                    <div className="plate" />
                </div>
                <div className="pie" />
                <div className="basket" />
                <div className="jug jug--water" />
            </div>
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