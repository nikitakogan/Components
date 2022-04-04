interface Props {
    number: number;
    setIsError: React.Dispatch<React.SetStateAction<string>>;
    setValue: React.Dispatch<React.SetStateAction<number | string>>;
}

export const mockMisMatch = ({number, setIsError, setValue}:Props) => {
    if (number > 99.99) {
        // this will trigger the red mismatch
        setIsError("red");
        setValue(number);
        return
    }
    if (number === 55) {
        // this will trigger the green mismatch not an auto update
        setIsError("green");
        setValue('cannot be 55');
        return
    }
    // this will trigger the blue mismatch
    if (number === 0) {
        setIsError("blue");
        setValue('');
        return
    }
    if (number < 0) {
        setIsError("blue");
        setValue('cannot be negative');
        return
    }
    // no trigger mismatch 
    // will update the state
    setIsError("");
    setValue(number);
    return
}