var str = prompt("Введите строку ", "");
var maxlegth = +prompt("Введите максимальную длину ", "")
function truncate() {
  if (str = maxlegth || str < maxlegth) {
    console.log('true');
  }
  else {
    console.log('false');
  }
}

// функция для нахождения наибольшего количество символов в строке

function truncate(str, maxleght) {
  if (str.length <= maxlegth) {
    return true;
  }
  else {
    return false;
  }
}
