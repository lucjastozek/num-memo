function addDigit(number: string) {
  if (number === "") {
    return ["1", "2", "3", "4", "5", "6", "7", "8", "9"].sort(
      () => 0.5 - Math.random()
    )[0];
  }
  return number + `${Math.floor(Math.random() * 10)}`;
}

export default addDigit;
