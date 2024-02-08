// Задание 1:
// В файле src/app.js cоздать функцию getScore.
// Функция getScore принимает на вход объект. В котором ключ это ник, а значение это успеваемость.
// Функция getScore возвращает в ответ сумму всех баллов.
// Пример:
// const scores = {
//  Anna: 10,
//  Olga: 1,
//  Ivan: 5,
// }
// getScore(scores); // 16
// Полезные ссылки:

// Задание 2 (не обязательное):
// Напишите документацию к функции используя язык разметки JSDOC.
// Для проверки (ревью) домашнего задания присылайте в чат ссылку на pull request

/**
 * 
 * @param {string} scores показывает какое значение будет
 * @returns {number} выводит значение
 */
 function getScore(scores) {
  let totalScore = 0;
  for (let key in scores) {
    totalScore += scores[key];
  }
  return totalScore;
}
const scores = {
  Anna: 10,
  Olga: 1,
  Ivan: 5,
};
console.log(getScore(scores)); // Output: 16

/**
 * 
 * @param {string} scores показывает значение
 * @returns {number} недопустимый вывод
 */
function getScore1(scores) {
  if (!scores || Object.keys(scores).length === 0) {
    return 'Invalid input';
  }

  let totalScore = 0;
  for (let key in scores) {
    totalScore += scores[key];
  }
  return totalScore;
}
console.log(getScore1()); // Output: 'Invalid input'
