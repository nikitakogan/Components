import './Button.css';

interface Props {
    isError: string;
    value: number | string;
}

export const Button:React.FC<Props> = ({value,isError}) => {

    return (
        <div className={"button-box " + isError} >
        {isError ? <h3>{value}</h3> : <h3></h3>}
        <div className="button-component ">
            <button className={'push-button ' + isError}>Button</button>
        </div>
        </div>
        
    )
}