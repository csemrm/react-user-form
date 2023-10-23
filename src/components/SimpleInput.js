import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enterNameIsValid,
    hasError: nameInputHasError,
    valuseChangeHandler: nameInputChangeHandler,
    valueBlurHandler: nameInputBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valuseChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  let formisValid = false;

  if (enterNameIsValid && enteredEmailIsValid) {
    formisValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!enterNameIsValid) {
      return;
    }
    resetNameInput();
    resetEmailInput();
  };
  const nameINputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameINputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputHasError && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">Your Email</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && (
          <p className="error-text">Email must not be empty.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formisValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
