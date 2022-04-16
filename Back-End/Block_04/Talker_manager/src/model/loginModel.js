const GENERATED_TOKENS = [];

const logInUser = (token) => {
  GENERATED_TOKENS.push(token);
};

const logOutUser = (token) => {
  const tokenIndex = GENERATED_TOKENS.findIndex((t) => t === token);

  GENERATED_TOKENS.splice(tokenIndex, 1);
};

module.exports = {
  logInUser,
  logOutUser,
  GENERATED_TOKENS,
};
