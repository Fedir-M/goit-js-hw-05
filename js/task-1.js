console.log("Задача 1. Пакування товарів")
console.log("===========================")

//TODO Напиши функцію isEnoughCapacity(products, containerSize), 
//TODO яка обчислює, чи помістяться всі товари в контейнер при пакуванні.

//TODO Функція оголошує два параметри:

//TODO products — об’єкт, у якому ключі містять назви товарів, а їхні значення — кількість цих товарів. 
//TODO Наприклад, { apples: 2, grapes: 4 }.
//TODO containerSize — число, максимальна кількість одиниць товарів, яку в себе може вмістити контейнер.

//TODO Функція має повернути результат перевірки, чи помістяться всі товари в контейнер. 
//TODO Тобто порахувати загальну кількість товарів в об’єкті products і повернути true, 
//TODO якщо вона менше або дорівнює containerSize, і false, якщо ні.

function isEnoughCapacity(products, containerSize) {
    //! ========================================== variant 1 (doesn't work)
//     let totalQnty = 0;

//     for (const product in products) {
//         totalQnty += products[product];

//         if(totalQnty <= containerSize){
//             return true;
//       }
//       return false;
//     }
// }
// ========================================== variant 2 (work)
let totalQnty = 0;

    for (const product in products) {
        totalQnty += products[product];
    }

    if(totalQnty <= containerSize){
        return true;
  }
  return false;
}

// ========================================== variant 3 (work)
// let totalQnty = 0;
// for (const product in products) {
//     totalQnty += products[product];
//   }

//   return totalQnty <= containerSize ? true : false;
// }

// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи.
// У консоль будуть виведені результати її роботи.

console.log(
    isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
  ); // true
  
  console.log(
    isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
  ); // false
  
  console.log(
    isEnoughCapacity({ apples: 1, lime: 5, tomatos: 3 }, 14)
  ); // true
  
  console.log(
    isEnoughCapacity({ apples: 18, potatos: 5, oranges: 2 }, 7)
  ); // false