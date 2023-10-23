import useInput from "../hooks/use-input";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");

const BasicForm = (props) => {
  const {
    value: firstNameValue,
    isValid: firstNameValueIsValid,
    hasError: firstNameHasError,
    valuseChangeHandler: firstNameValueChangeHandler,
    valueBlurHandler: firstNameValueBlurHandler,
    reset: firstNameValueReset,
  } = useInput(isNotEmpty);
  const {
    value: lastNameValue,
    isValid: lastNameValueIsValid,
    hasError: lastNameHasError,
    valuseChangeHandler: lastNameValueChangeHandler,
    valueBlurHandler: lastNameValueBlurHandler,
    reset: lastNameValueReset,
  } = useInput(isNotEmpty);
  const {
    value: emailValue,
    isValid: emailValueIsValid,
    hasError: emailHasError,
    valuseChangeHandler: emailValueChangeHandler,
    valueBlurHandler: emailValueBlurHandler,
    reset: emailReset,
  } = useInput(isEmail);

  let isFormValid = false;
  if (firstNameValueIsValid && lastNameValueIsValid && emailValueIsValid) {
    isFormValid = true;
  }
  const submiHandler = (event) => {
    event.preventDefault();
    if (!isFormValid) {
      return;
    }
    console.log("Submitted!");
    console.log(firstNameValue, lastNameValue, emailValue);
    firstNameValueReset();
    lastNameValueReset();
    emailReset();
  };
  const firstNameClass = firstNameHasError
    ? "form-control invalid "
    : " form-control";

  const lastNameClass = lastNameHasError
    ? "form-control invalid "
    : " form-control";

  const emailClass = emailHasError ? "form-control invalid " : " form-control";
  return (
    <form onSubmit={submiHandler}>
      <div className="control-group">
        <div className={firstNameClass}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={firstNameValue}
            onChange={firstNameValueChangeHandler}
            onBlur={firstNameValueBlurHandler}
          />
          {firstNameHasError && <p className="error-text">Please enter first name.</p>}
        </div>
        <div className={lastNameClass}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={lastNameValue}
            onChange={lastNameValueChangeHandler}
            onBlur={lastNameValueBlurHandler}
          />
          {lastNameHasError && <p className="error-text" >Please enter first name.</p>}
        </div>
      </div>
      <div className={emailClass}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={emailValue}
          onChange={emailValueChangeHandler}
          onBlur={emailValueBlurHandler}
        />
        {emailHasError && <p className="error-text" >Please enter valid e-Mail address</p>}
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
