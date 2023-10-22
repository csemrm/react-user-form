import { useState, useRef, useEffect } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");
  const [enterNameIsValid, setEnteredNameIdValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  useEffect(() => {
    if (enterNameIsValid) {
      console.log("Name Input is valid");
    }
  }, [enterNameIsValid]);

  const nameInputChnageHandler = (event) => {
    setEnteredName(event.target.value);

    if (event.target.value.trim() !== "") {
      setEnteredNameIdValid(true);
    }
  };

  const nameInputBlurHandler = () => {
    setEnteredNameTouched(true);
    if (enteredName.trim() == "") {
      setEnteredNameIdValid(false);
    }
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setEnteredNameTouched(true);

    if (enteredName.trim() == "") {
      setEnteredNameIdValid(false);
      return;
    }
    setEnteredNameIdValid(true);
    console.log(enteredName);

    setEnteredName("");
    const enterNameValue = nameInputRef.current.value;
    console.log(enterNameValue);
  };
  const nameInputIsInvalid = !enterNameIsValid && enteredNameTouched;
  const nameINputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameINputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          ref={nameInputRef}
          id="name"
          onChange={nameInputChnageHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
