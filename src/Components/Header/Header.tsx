import { useEffect, useState } from "react"
import svg from "../../svg/xsvg.svg"
import { mockMisMatch } from "../../Utils/mockMisMatch";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";

import './Header.css';

export const Header:React.FC = () => {
    
    const [thisValue, setThisValue] = useState<number>(0);
    const [isError, setIsError] = useState<string>("");
    const [value, setValue] = useState<number | string>(0);
    const [isActive, setIsActive] = useState<string>("");
    const active = (): void => {

        document.addEventListener("click", (e) => {
            e.preventDefault();
            const target = e.target as Element;
            if (target.classList.contains("header") === false && target.classList.contains("header-box") === false && target.id === "input" === false && target.classList.contains("push-button") === false) {
                setIsActive("");
            } else {
                setIsActive("active");
            }
        })

    }

    useEffect(() => {
        mockMisMatch({ number: thisValue, setIsError, setValue })
    }, [thisValue])
    return (
        <div
            className={"box " + isActive}
            onClick={() => active()}
        >
            <div className={"header-box " + isActive}>
                <div className={"header " + isActive}>
                    <div className={"header-trigger-line " + isActive}></div>
                    <h1 className="header-title">Header</h1>
                    <button className='close-header'><img src={svg} alt={'exit'}></img></button>
                </div>
                <>
                    <Button isError={isError} value={value} />
                    <Input id={'input'} setThisValue={setThisValue} />
                </>
            </div>
        </div>
    )
}