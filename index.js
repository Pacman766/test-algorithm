// 1.	Решите задачи на JS:

// 1)	Создать функцию createSecretHolder(secret) которая принимает любое значение и возвращает объект ТОЛЬКО с двумя методами:

// getSecret() - возвращает секрет
// setSecret() - задает секрет
 
// obj = createSecretHolder(5)
// obj.getSecret() # returns 5
// obj.setSecret(2)
// obj.getSecret() # returns 2

function createSecretHolder(secret) {
  const obj = {
    getSecret() {
      return this.secret
    },
    setSecret(val) {
      this.secret = val;
    }
  }
  
}

obj = createSecretHolder(5)
obj.getSecret();


// 2)	Отсортировать массив 32-битных целых чисел в порядке возрастания количество бит в этих числах.

// Исходный массив: [7, 6, 15, 8]
// 	7 - 3 бита (000...0111)
//  	6 - 2 бита (000...0011)
// 15 - 4 бита (000...1111)
// 8 - 1 бит (000...1000)
// Отсортированный массив: [8, 6, 7, 15].

// 	В случае, если 2 числа имеют одинаковое количество бит, вместо бит сравниваются сами числа. Например 10 (...1010) и 12 (...1100) оба имеют одинаковое количество бит (2), но 10 < 12, поэтому в отсортированном массиве оно будет перед 12 ([..., 10, 12, …]).
	
// 	Необходимо написать функцию которая принимает массив целых чисел и сортирует его, функция должна изменять входящий массив, а не создавать новый.

// 3)	Вам дан объект содержащий языки и оценки по этим языкам. Необходимо вернуть массив языков где оценки =>60, отсортированный в убывающем порядке по оценкам.
	
// 	Пример:

// {"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
//  	{"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
// {"C++": 50, "ASM": 10, "Haskell": 20}     -->  []







// 4)	(дополнительная задача) Дана функция:

// for (var i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }

// Необходимо изменить функцию так чтобы она возвращала все значения i (0,1,2,3,4). Нельзя использовать const и let для объявления переменных.
