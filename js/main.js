// eslint-disable-next-line no-unused-vars
function getRandomIntInc(min, max) {
  if (min >= 0 && min < max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  else if (min < 0 && min > max) { console.log('Условие не верно')}
}
// console.log(getRandomInc(1, 10));
