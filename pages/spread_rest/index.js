const scores1 = [0, 1.5, 2.5, 3.7];
const scores2 = [1.7, 4.5, 0, 4.9, 5.0, 4.2];
const scores3 = [1.3, 2.5, 1.9];
const scores4 = ['abc', 1.3, true, 2.5, 1.9];
export default function SpreadRest() {
  function meanScore(...numbers) {
    if (numbers.some((num) => typeof num !== 'numbers')) {
      console.error('Аргументы в вызове функции должны быть числами!');
      return;
      // throw new Error('Все аргументы в вызове функции должны быть числами!');
    }

    return numbers
      .reduce((mean, num) => mean + num / numbers.length, 0)
      .toFixed(2);
  }

  console.log(meanScore(...scores1));
  // 1.93

  console.log(meanScore(...scores1, ...scores2));
  // 2.8

  console.log(meanScore(...scores1, ...scores2, ...scores3));
  // 2.59

  console.log(meanScore(...scores4));
  // Все аргументы в вызове функции должны быть числами!
}
