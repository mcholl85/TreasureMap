const VALID_ORIENTATION = ["S", "N", "O", "E"];
const VALID_MOVE = ["A", "D", "G"];

const isPositiveInteger = (str) => {
  if (typeof str !== "string") {
    return false;
  }

  const num = Number(str);

  if (Number.isInteger(num) && num > 0) {
    return true;
  }
  return false;
};

const isPositiveIntegerOrNull = (str) => {
  if (typeof str !== "string") {
    return false;
  }

  const num = Number(str);

  if (Number.isInteger(num) && num >= 0) {
    return true;
  }
  return false;
};

const orientationIsValid = (orientation) => {
  return VALID_ORIENTATION.includes(orientation);
};

const movesAreValid = (str) => {
  if (typeof str !== "string") {
    return false;
  }

  return [...str].every((move) => VALID_MOVE.includes(move));
};

export const cardParamsAreValid = (params) => {
  if (
    params.length === 2 &&
    isPositiveInteger(params[0]) &&
    isPositiveInteger(params[1])
  ) {
    return true;
  }
  return false;
};

export const mountainParamsAreValid = (params) => {
  if (
    params.length === 2 &&
    isPositiveIntegerOrNull(params[0]) &&
    isPositiveIntegerOrNull(params[1])
  ) {
    return true;
  }
  return false;
};

export const treasureParamsAreValid = (params) => {
  if (
    params.length === 3 &&
    isPositiveIntegerOrNull(params[0]) &&
    isPositiveIntegerOrNull(params[1]) &&
    isPositiveInteger(params[2])
  ) {
    return true;
  }
  return false;
};

export const playerParamsAreValid = (params) => {
  if (
    params.length === 5 &&
    typeof params[0] === "string" &&
    isPositiveIntegerOrNull(params[1]) &&
    isPositiveIntegerOrNull(params[2]) &&
    orientationIsValid(params[3]) &&
    movesAreValid(params[4])
  ) {
    return true;
  }
  return false;
};
