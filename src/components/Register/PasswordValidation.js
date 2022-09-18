function isPasswordValid({
  e,
  setContainsNumbers,
  setPasswordLength,
  setContainsSymbols,
  setContainsUpperCase,
}) {
  const value = e.target.value;
  setPasswordLength(value.length > 4);
  setContainsNumbers(value.match(/\d+/) !== null);
  setContainsUpperCase(value.match(/[A-Z]/) !== null);
  setContainsSymbols(value.match(/[^A-Z a-z0-9]/) !== null);
}

function isPasswordMatching({ e, setWarningMessage, inputData }) {
  const password = e.target.value;
  if (password !== 0 && password !== inputData.password) {
    setWarningMessage("As senhas não coincidem");
  } else {
    setWarningMessage("");
  }
}

export { isPasswordValid, isPasswordMatching };
