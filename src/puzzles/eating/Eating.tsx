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
                <button className="glass glass--water" />
                <button className="glass glass--water" />
                <div className="plate">
                    <button className="burger" />
                </div>
                <div className="plate">
                    <button className="burger burger--rotten" />
                </div>
                <div className="plate">
                    <button className="burger burger--cheeseless" />
                </div>
                <button className="glass glass--water" />
                <button className="glass glass--water" />
                <div className="plate">
                    <button className="burger burger--plain" />
                </div>
            </div>
            <div className="table">
                <div className="plate">
                    <button className="burger" />
                </div>
                <button className="glass glass--juice" />
                <button className="glass glass--water" />
                <div className="plate">
                    <button className="burger burger--plain" />
                </div>
                <button className="jug jug--juice" />
                <button className="glass glass--juice" />
                <button className="pizza" />
                <div className="plate">
                    <button className="brownie" />
                    <button className="brownie" />
                </div>
            </div>
            <div className="blanket">
                <button className="pie pie--strawberry" />
                <div className="plate-stack">
                    <div className="plate" />
                    <div className="plate" />
                    <div className="plate" />
                    <div className="plate" />
                    <div className="plate" />
                    <div className="plate" />
                </div>
                <button className="pie" />
                <div className="basket" />
                <button className="jug jug--water" />
            </div>
            {/* <div ref={mouthElem} className="mouth">
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
            </div> */}
        </div>
    )
}