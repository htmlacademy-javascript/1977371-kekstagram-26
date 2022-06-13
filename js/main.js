function getRandomIntInc(min, max) {
  if (min < 0 || max < 0) {
    console.log('Условие не верно');
    return;
  }

  const firstNumber = Math.ceil(min);
  const secondNumber = Math.floor(max);

  if (secondNumber < firstNumber) {
    return (
      Math.floor(Math.random() * (firstNumber - secondNumber + 1)) +
      secondNumber
    );
  }

  if (secondNumber === firstNumber) {
    return firstNumber;
  }

  return (
    Math.floor(Math.random() * (secondNumber - firstNumber + 1)) + firstNumber
  );
}

function truncate(str, maxleght) {
  if (str.length <= maxlegth) {
    return true;
  }
  else {
    return false;
  }
}
