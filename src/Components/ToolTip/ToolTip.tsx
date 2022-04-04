import { useState } from "react";
import { IStateMisMatch } from "../../Redux/Slice/misMatchSlice/misMatchType";
import './ToolTip.css';

type VirtualElement = {
    width: number;
    height: number;
    top: number;
    right: number;
    bottom: number;
    left: number;
    position: "-webkit-sticky" | "absolute" | "fixed" | "relative" | "static" | "sticky";
};

export const ToolTip:React.FC<IStateMisMatch> = ({ isError, value }) => {
    const [style, setStyle] = useState<VirtualElement>({
        width: 0,
        height: 0,
        top: 400,
        right: 400,
        bottom: 400,
        left: 400,
        position: "absolute"
    });
    const VirtualElement = (x = 0, y = 0): VirtualElement => {
        return {
            width: 120,
            height: 30,
            top: y,
            right: x,
            bottom: y,
            left: x,
            position: "relative"
        }


    }

    document.addEventListener('mousemove', ({ clientX: x, clientY: y }) => {
        setStyle(VirtualElement(x, y));
    });

    return (
        <span style={style} className={'tooltipText ' + isError}>{value}</span>
    )
}