// id, число — идентификатор описания. Это число от 1 до 25. Идентификаторы не должны повторяться.
// eslint-disable-next-line no-unused-vars
const Id = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

// eslint-disable-next-line camelcase
const random_start_id = 1; // От какого числа генерировать
// eslint-disable-next-line camelcase
const random_end_id = 25; // До какого числа генерировать
// eslint-disable-next-line no-undef
allСycles = 25;
const array = [];
// eslint-disable-next-line camelcase
for (i = random_start_id; i <= random_end_id; i++) {
  array.push(i);
}
// eslint-disable-next-line no-undef
for (countCycles = 1; countCycles <= allСycles; countCycles++) {
  // eslint-disable-next-line no-console
  console.log(array.splice(Math.random() * array.length, 1)[0]);
}


// url, строка — адрес картинки вида photos/{{i}}.jpg, где {{i}} — это число от 1 до 25. Адреса картинок не должны повторяться.
// eslint-disable-next-line no-unused-vars
const Url = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
// eslint-disable-next-line camelcase
const random_start_url = 1; // От какого генерировать
// eslint-disable-next-line camelcase
const random_end_url = 25; // До какого генерировать
// eslint-disable-next-line no-undef
allСycles = 25;
const array = [];
// eslint-disable-next-line camelcase
for (i = random_start_url; i <= random_end_url; i++) {
  array.push(i);
}
// eslint-disable-next-line no-undef
for (countCycles = 1; countCycles <= allСycles; countCycles++) {
  // eslint-disable-next-line no-console
  console.log(array.splice(Math.random() * array.length, 1)[0]);
}

// description, строка — описание фотографии. Описание придумайте самостоятельно.
// eslint-disable-next-line no-unused-vars
const Description = [
  'Солнечный день',
  'Хорошее настроение',
  'Счастливая улыбка',
  'Счастливые будни веселого человека',
  'Радость и только',
];

// likes, число — количество лайков, поставленных фотографии. Случайное число от 15 до 200.
// eslint-disable-next-line no-unused-vars
const Likes = [15, 200];
// eslint-disable-next-line no-unused-vars
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// comments, массив объектов — список комментариев, оставленных другими пользователями к этой фотографии. Количество комментариев к каждой фотографии вы определяете на своё усмотрение. Все комментарии генерируются случайным образом. Пример описания объекта с комментарием:
// eslint-disable-next-line no-unused-vars
const Comments = [0, 5];


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
const randomFoto = () => {
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
  randomFoto()
);
