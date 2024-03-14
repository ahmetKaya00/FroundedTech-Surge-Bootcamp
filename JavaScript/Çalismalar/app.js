// console.log("Merhaba dünya")
// console.error("Hatalar")
// console.warn("Uyarı")
// console.info("Bilgi Mesajı")
// console.clear() Consol temizle

// let num = 45
// console.log(num)

// let string = "Merhaba, Dünya!"
// console.log(string)

// let isTrue = true
// let isFalse = false
// console.log(isTrue, isFalse)

// let nullValue = null
// console.log(nullValue)

// let undefinedValue
// console.log(undefinedValue)

// let numberString = "42"
// let number = parseInt(numberString)
// console.log(number)

// var x = 10
// var y = "Selam"

// function exampleScope(){
//     if(true){
//     var localVar = "Bu bir var değişkenidir."
//     let blockScope = "Bu bir let değişkenidir." 
//     }
//     console.log(localVar)
//     console.log(blockScope) // ÇALIŞMAZ!!
// }

// var num = 10
// var num = 20
// console.log(num)

// let age = 25
// //let age = 30
// console.log(age)

// const pi = 3.14
// //const pi = 3.1415
// console.log(pi)


// let number = 42
// let stringNumber = String(number)
// console.log(stringNumber)

// let boolValue = false
// let numericValue = Number(boolValue)
// console.log(numericValue)

// let trueString = "true"
// let trueValue = Boolean(trueString)
// console.log(trueValue)

// let jsonString = '{"name": "Ahmet", "age":32}'
// let parseObject = JSON.parse(jsonString)

// console.log(parseObject.name)
// console.log(parseObject.age)


// == Eşitse
// != eşit değilse
// <> <= >=

// === tam eşitse
// !== tam eşit değilse

// let age = 17

// if(age >=18){
//     console.log("Ehliyet alabilir.")
// }else{
//     console.log("Ehliyet alamaz")
// }

// let number1 = 5
// let number2 = 5
// let stringNumber = "5"

// if(number1 === number2){
//     console.log("Tam eşit")
// }else{
//     console.log("Tam eşit değil")
// }

// if(number1 === stringNumber){
//     console.log("tam eşit")
// }else{
//     console.log("değerler veya tür farklı")
// }

// let age = 18
// let isAdult = (age >= 18) ? "Ehliyet alabilir" : "Ehliyet alamaz"
// console.log(isAdult)

// let day = "Cuma"

// switch(day){
//     case "Pazartesi":
//         console.log("Haftanın ilk Günü")
//         break
//     case "Çarşamba":
//         console.log("Haftanın Ortası")
//         break
//     case "Cuma":
//         console.log("Haftanın son iş günü")
//         break
//     default:
//         console.log("Diğer günler")
// }

// function add(x,y){
//     return x + y
// }

// let result = add(5,3)
// console.log(result)

// (function(){
//     console.log("Hemen çağırılan fonksiyon");
// })()

// let multiply = function(x,y){
//     return x*y
// }

// let result = multiply(4,3)
// console.log(result)

// let i = 0

// while(i < 5){
//     console.log(i)
//     i++
// }

// let i = 5

// do{
//     console.log(i)
//     i++
// } while(i<5)

// console.log(window.location.pathname)

//let text = "Ahmet Kaya"
//let length = text.length
//let length = text.charAt(4)
//let length = text.substring(2,5)
//let length = text.toLowerCase()
//let length = text.toUpperCase()
//let length = text.trim()
//let length = text.replace("Kaya","Taş")
//let length = text.split(",")
//console.log(length)

// let name = "Ahmet"
// let age = 32

// let greeting = `Merhaba, benim adım ${name} ve ben ${age} yaşındayım`
// console.log(greeting)

// let isLoggedIn = false

// let userStatus = `Kullanıcı durumu: ${isLoggedIn ? 'Giriş yapıldı!' : 'Giriş yapılmadı'}`

// console.log(userStatus)

// let fruits = ['elma' , 'armut' , 'çilek']
// fruits[2] = 'muz'
// fruits.push('portakal')
// fruits.pop()
// let FirstFruits = fruits[2]
// let length = fruits.length
// fruits.sort()

// for(let i = 0; i<fruits.length;i++){
//     console.log(fruits[i])
// }


// let person = {
//     name: 'Ahmet',
//     age: 32,
//     job: 'Developer'
// };

// let pesonName = person.name
// let personAge = person['age']
// person.age = 26
// person.city = 'Mersin'
// console.log(person)

// let currentDate = new Date()

// let year = currentDate.getFullYear()
// let mount = currentDate.getMonth()
// let day = currentDate.getDate()
// let hours = currentDate.getHours()
// let minutes = currentDate.getMinutes()

// let startDate = new Date('2022-01-01')
// let endDate = new Date()

// let timeDiff = endDate - startDate
// let daysDiff = Math.floor(timeDiff/(1000*60*60*24))
// console.log(daysDiff)

// function exampleFuntion(){
//     if(true){
//         var localVar = "Bu bir function scope değişkeni"
//         let blockLet = "Bu bir block scope değişkeni"
//     }
// }


// var globalVar = "Bu bir global değişken"

// function exampleFuntion(){
//     console.log(globalVar);
// }






