// id, число — идентификатор описания. Это число от 1 до 25. Идентификаторы не должны повторяться.
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line camelcase
const randomStartId = 1; // От какого числа генерировать
// eslint-disable-next-line camelcase
const randomEndId = 25; // До какого числа генерировать
// eslint-disable-next-line no-undef
let allСyclesId = 25;
const array = [];
// eslint-disable-next-line camelcase
for (i = randomStartId; i <= randomEndId; i++) {
  array.push(i);
}
// eslint-disable-next-line no-undef
for (countCycles = 1; countCycles <= allСyclesId; countCycles++) {
  // eslint-disable-next-line no-console
  console.log(array.splice(Math.random() * array.length, 1)[0]);
}


// url, строка — адрес картинки вида photos/{{i}}.jpg, где {{i}} — это число от 1 до 25. Адреса картинок не должны повторяться.
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line camelcase
const randomStartUrl = 1; // От какого генерировать
// eslint-disable-next-line camelcase
const randomEndUrl = 25; // До какого генерировать
// eslint-disable-next-line no-undef
let allСyclesUrl = 25;
const array = [];
// eslint-disable-next-line camelcase
for (i = randomStartUrl; i <= randomEndUrl; i++) {
  array.push(i);
}
// eslint-disable-next-line no-undef
for (countCycles = 1; countCycles <= allСyclesUrl; countCycles++) {
  // eslint-disable-next-line no-console
  console.log(array.splice(Math.random() * array.length, 1)[0]);
}

// description, строка — описание фотографии. Описание придумайте самостоятельно.
// eslint-disable-next-line no-unused-vars
const description = [
  'Солнечный день',
  'Хорошее настроение',
  'Счастливая улыбка',
  'Счастливые будни веселого человека',
  'Радость и только',
];

// likes, число — количество лайков, поставленных фотографии. Случайное число от 15 до 200.
// eslint-disable-next-line no-unused-vars

function getRandomIntInclusive(min, max) {
  min = Math.ceil(15);
  max = Math.floor(200);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let likes = getRandomIntInclusive;
likes();
// comments, массив объектов — список комментариев, оставленных другими пользователями к этой фотографии. Количество комментариев к каждой фотографии вы определяете на своё усмотрение. Все комментарии генерируются случайным образом. Пример описания объекта с комментарием:
// eslint-disable-next-line no-unused-vars
function getRandomComments(min, max) {
  min = Math.ceil(1);
  max = Math.floor(2);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let likes = getRandomIntInclusive;
likes()

// Для формирования текста комментария — message — вам необходимо взять одно или два случайных предложения из представленных ниже:
// eslint-disable-next-line no-unused-vars
const Message = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

// eslint-disable-next-line no-unused-vars
// имена авторов комментариев
// eslint-disable-next-line no-unused-vars
const Names = [
  'Иван',
  'Константин',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Лолита',
  'Бергамонт',
];

const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};


// eslint-disable-next-line no-unused-vars
const randomFotoDescription = () => {
  const randomIdIndex = ;
  const randomNamesIndex = getRandomPositiveInteger(0, Names.length - 1);
  const randomMessageIndex = getRandomPositiveInteger(0, Message.length - 1);

  return {
    id: Id[randomIdIndex],
    avatar: ' ',
    message: Message[randomMessageIndex],
    name: Names[randomNamesIndex],
  };
};

console.log(
  randomFotoDescription()
);


const randomFoto = () => {
  const randomUrlIndex = ;
  const description = ;
  const likes = likes();

  return {
    url: ' ',
    likes: ' ',
    description: ' ',
  };
};
