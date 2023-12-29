console.log("=========================")
console.log("Задача 3. Профіль гравця")
console.log("===========================")

//TODO Обєкт profile описує профіль користувача на ігровій платформі.У його властивостях зберігається імя профілю username та кількість активних годин playTime, проведених у грі.

//TODO Доповни обєкт profile методами для роботи з його властивостями.

//TODO Метод changeUsername(newName) повинен приймати рядок (нове імя) в параметр newName та змінювати значення властивості username на нове. Нічого не повертає.

//TODO Метод updatePlayTime(hours) повинен приймати число (кількість годин) у параметр hours та збільшити на нього значення властивості playTime. Нічого не повертає.

//TODO Метод getInfo() має повертати рядок формату <Username> has <amount> active hours!, де <Username> — це імя профілю, а <amount> — кількість ігрових годин.


const profile = {
    username: "Jacob",
    playTime: 300,

  changeUsername(newName){
   this.username = newName;
  },

  updatePlayTime(hours){
    this.playTime += hours;
  },

  getInfo(){
    return `${this.username} has ${this.playTime} active hours!`;
  },
  
};


// MARRY CHRISTMSA!

//* Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи.
//* У консоль будуть виведені результати її роботи.

console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"