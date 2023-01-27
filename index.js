/* function getRandomIntInclusive(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  let secretNumber = Math.floor(Math.random() * (max - min + 1)) + min
  console.log(`Загадано число ${secretNumber}`)
  return secretNumber //Максимум и минимум включаются
}

function getUserNumber() {
    let userNumber = document.getElementById('userNumber').value;        
    document.getElementById('userNumber').innerHTML = userNumber;
    console.log(`Введено число ${userNumber}`);         
    return userNumber        
} 

let secretNumber = getRandomIntInclusive(0, 999)
let userNumber = getUserNumber()

function checkResult (secretNumber, userNumber) {
    if (secretNumber === userNumber) {
        alert("Вы угадали!");
    }    
}

getRandomIntInclusive(0, 999)
getUserNumber()
checkResult() */


while(true) {
    let secretNumber = Math.floor(Math.random() * (999 - 0 + 1)) + 0
    console.log(`Загадано ${secretNumber}`)

    let userNumber = prompt("Введите число от 0 до 999:")
    console.log(`Введено ${userNumber}`)

    if (userNumber === 'q') {
        break
    }

    if (isNaN(userNumber) || +userNumber < 0 || +userNumber > 999) {
        alert("Введите, пожалуйста, ЧИСЛО от 0 до 999:")        
    }

    else if (+userNumber === secretNumber) {
        alert("Вы угадали!")
    }
    else if (+userNumber >= secretNumber) {
        alert("Введенное число больше загаданного, попробуйте ещё раз")
    }
    else if (+userNumber <= secretNumber) {
        alert("Введенное число меньше загаданного, попробуйте ещё раз")
    }

}
