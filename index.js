// 1.	Решите задачи на JS:

// 1)	Создать функцию createSecretHolder(secret) которая принимает любое значение и возвращает объект ТОЛЬКО с двумя методами:

// getSecret() - возвращает секрет
// setSecret() - задает секрет

// obj = createSecretHolder(5)
// obj.getSecret() # returns 5
// obj.setSecret(2)
// obj.getSecret() # returns 2

function createSecretHolder(secret) {
  return {
    getSecret: function () {
      return secret;
    },
    setSecret: function (x) {
      return (secret = x);
    },
  };
}

const obj = createSecretHolder(5);
console.log(obj.getSecret());

// 2)	Отсортировать массив 32-битных целых чисел в порядке возрастания количество бит в этих числах.

// Исходный массив: [7, 6, 15, 8]
// 	7 - 3 бита (000...0111)
//  	6 - 2 бита (000...0011)
// 15 - 4 бита (000...1111)
// 8 - 1 бит (000...1000)
// Отсортированный массив: [8, 6, 7, 15].

// 	В случае, если 2 числа имеют одинаковое количество бит, вместо бит сравниваются сами числа. Например 10 (...1010) и 12 (...1100) оба имеют одинаковое количество бит (2), но 10 < 12, поэтому в отсортированном массиве оно будет перед 12 ([..., 10, 12, …]).

// 	Необходимо написать функцию которая принимает массив целых чисел и сортирует его, функция должна изменять входящий массив, а не создавать новый.

function sortByBitCount(arr) {
  arr.sort((a, b) => {
    c = Number(a.toString(2).split('').sort().join('')).toString().length; // convert to bits => make array => sort => sorted arr to string =>
    // back to Number => find string length
    d = Number(b.toString(2).split('').sort().join('')).toString().length;
    return c === d ? a - b : c - d; //  if bits are aqual - sort by numbers values, else - by bits
  });
  return arr;
}

let p = [12, 10, 15, 8, 6, 7, 8, 32, 1];
console.log(p.toString(2));
console.log(p.toString(2).split(''));
console.log(p.toString(2).split('').sort());
console.log(p.toString(2).split('').sort().join(''));
console.log(Number(p.toString(2).split('').sort().join('')));
console.log(Number(p.toString(2).split('').sort().join('')).toString().length);

let arr = [12, 10, 15, 8, 6, 7, 8, 32, 1];
arr.map((a) => console.log(`${a} - ${a.toString(2)}`)); // watch bits of each number
console.log(sortByBitCount(arr)); // result

// 3)	Вам дан объект содержащий языки и оценки по этим языкам. Необходимо вернуть массив языков где оценки =>60, отсортированный в убывающем порядке по оценкам.

// 	Пример:

// {"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
//  	{"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
// {"C++": 50, "ASM": 10, "Haskell": 20}     -->  []

function filterLangsByGrade(obj) {
  // 1) obj to arr of [key,val] => 2) sort in descending order => 3) filter by grade>=60
  const filtered = Object.entries(obj)
    .sort(([, a], [, b]) => b - a)
    .reduce((acc, [key, val]) => {
      if (val >= 60) return [...acc, key];
      return acc;
    }, []);
  return filtered;
}

console.log(filterLangsByGrade({ Hindi: 60, Dutch: 93, Greek: 71 }));

// 4)	(дополнительная задача) Дана функция:

// for (var i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }

// Необходимо изменить функцию так чтобы она возвращала все значения i (0,1,2,3,4). Нельзя использовать const и let для объявления переменных.

// just remove setTimeout if it`s not forbidden..
for (var i = 0; i < 5; i++) {
  console.log(i);
}

// or with timout in 1 sec
  setTimeout(() => {
    for (var i = 0; i < 5; i++) {
      console.log(i);
    }
  }, 1000);
