import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valuseChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const valueBlurHandler = () => {
    setIsTouched(true);
  };

    const reset = () => {
        setEnteredValue('');
        setIsTouched(false);
    }

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    valuseChangeHandler,
      valueBlurHandler,
    reset
  };
};

export default useInput;
