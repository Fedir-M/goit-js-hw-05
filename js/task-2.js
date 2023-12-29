console.log("=========================")
console.log("Задача 2. Розрахунок калорій")
console.log("===========================")

//TODO Напиши функцію calcAverageCalories(days), яка повертає середньодобове значення кількості калорій, 
//TODO які спортсмен споживав протягом тижня. Функція очікує один параметр: days — масив об’єктів. 
//TODO Кожен об’єкт описує день тижня та кількість калорій calories, спожитих спортсменом, у цей день.


function calcAverageCalories(days){
    let totalCalories = 0;

    for(const day of days){
        
        //? почему эта надпись сработала? у нас же в коде нигде нету ключа - calories
        totalCalories += day.calories;
    }

    if(days.length === 0){
        return 0;
    }
    return totalCalories / (days.length);
}


//* Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи.
//* У консоль будуть виведені результати її роботи.

console.log(
    calcAverageCalories([
      { day: "monday", calories: 3010 },
      { day: "tuesday", calories: 3200 },
      { day: "wednesday", calories: 3120 },
      { day: "thursday", calories: 2900 },
      { day: "friday", calories: 3450 },
      { day: "saturday", calories: 3280 },
      { day: "sunday", calories: 3300 }
    ])
  ); // 3180
  
  console.log(
    calcAverageCalories([
      { day: "monday", calories: 2040 },
      { day: "tuesday", calories: 2270 },
      { day: "wednesday", calories: 2420 },
      { day: "thursday", calories: 1900 },
      { day: "friday", calories: 2370 },
      { day: "saturday", calories: 2280 },
      { day: "sunday", calories: 2610 }
    ])
  ); // 2270
  
  console.log(
    calcAverageCalories([])
  ); // 0
