import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../Redux/hooks';
import { update } from '../../Redux/Slice/misMatchSlice/misMatchSlice';
import { mockMisMatch } from '../../Utils/mockMisMatch';
import './Input.css';

interface Props {
    id: string;
    setThisValue: React.Dispatch<React.SetStateAction<number>>;
}

export const Input: React.FC<Props> = ({ id, setThisValue }) => {
    const dispatch = useAppDispatch();
    const [isError, setIsError] = useState<string>("");
    const [value, setValue] = useState<number | string>(0);

    console.log(isError);

    useEffect(() => { mockMisMatch({ number: 0, setIsError, setValue }); }, [])
    return (
        <div className="input-box">
            <div className={'mismatch ' + isError}>
                {isError ? <p>{value}</p> : <p></p>}
            </div>
            <div 
            onMouseOver={() => {
                dispatch(
                    update({isError,value,isActive:true})
                )

            }}
            onMouseOut={() => {
                dispatch(
                    update({isError,value,isActive:false})
                )
            }}
            className={'input-field'}
            >
                <div className={'input-border ' + isError}>
                    <input
                        id={id}
                        defaultValue={value}
                        type="number"
                        placeholder=""
                        onChange={(e) => {
                            const number = e.target.value === '' ? 0 : parseFloat(e.target.value);
                            mockMisMatch({ number, setIsError, setValue });
                            setThisValue(number);
                        }}
                        onMouseOver={() => {
                            dispatch(
                                update({isError,value,isActive:true})
                            )

                        }}
                        onMouseOut={() => {
                            dispatch(
                                update({isError,value,isActive:false})
                            )
                        }}
                    />
                </div>
                <h3>pps</h3>
            </div>
        </div>
    )
}