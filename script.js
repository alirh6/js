// const products = [
//   { id: 1, title: "mobile", price: 80, qty: 90 },
//   { id: 2, title: "laptop", price: 200, qty: 15 },
//   { id: 3, title: "head-phone", price: 150, qty: 12 },
//   { id: 4, title: "ram", price: 6000000, qty: 0 },
//   { id: 5, title: "milk", price: 30, qty: 13 },
// ];

// const basket = [
//   { id: 1, title: "milk", price: 30 },
//   { id: 2, title: "laptop", price: 200 },
//   { id: 3, title: "head-phone", price: 150 },
// ];

// const userBuy = prompt("mahsole morede nazar ro bzn");

// if (userBuy.length > 0) {
//   let isInShop = products.some(function (product) {
//     return product.title === userBuy && product.qty > 0;
//   });

//   if (isInShop === true) {
//     let newBascket = {
//       id: basket.length + 1,
//       title: userBuy,
//     };

//     products.forEach(function (product) {
//       if (product.title === userBuy) {
//         newBascket.price =
//        product.price;
//       }
//     });

//     let price = products.find(function (product) {
//       if (product.title === userBuy) {
//         return (newBascket.price = product.price);
//       }
//     });
//     console.log(price);

//     basket.push(newBascket);

//     let totalPrice = 0;
//     basket.forEach(function (product) {
//       totalPrice += product.price;
//     });

//     alert("kole mablaq sabad kharid shoma ->" + totalPrice);
//     console.log(basket);
//   } else {
//     alert("mojod nist");
//   }
// } else {
//   alert("khaliye mahsol bzn");
// }

// const users = [
//   { id: 1, name: "ali", password: 1455 },
//   { id: 2, name: "ahmad", password: 145 },
//   { id: 3, name: "asqar", password: 14 },
//   { id: 4, name: "amin", password: 14558 },
//   { id: 5, name: "amir", password: 145588 },
// ];

// let userForgot = prompt("user bzn");

// if (userForgot.trim().length === 0) {
//   alert("khaliye");
// } else {
//   let mianUser = users.find(function (user) {
//     return user.name === userForgot;
//   });

//   if (mianUser === undefined) {
//     alert("user nabod");
//   } else {
//     alert("your pass : " + mianUser.password);
//   }
// }

// const products = [
//   { id: 1, name: "laptop", price: 100, qty: 50 },
//   { id: 2, name: "egg", price: 5, qty: 50 },
//   { id: 3, name: "charger", price: 20, qty: 50 },
//   { id: 4, name: "milk", price: 7, qty: 50 },
//   { id: 5, name: "headphone", price: 30, qty: 50 },
//   { id: 6, name: "mobile", price: 50, qty: 50 },
// ];

// const course = ["js", "react", "node", "type", "docker"];

// let userReq = prompt("dore k mikhay ro bzn");

// if (userReq.trim().length> 0){
//   let cor = course.filter(function (co) {
//   return userReq === co;
// });
// alert("")
// }
// let a = course.map(function (a) {
//   console.log(a);
//   // console.log(typeof a);
//   return

// });
// console.log(a);

// console.log(typeof a);

// const basket = [
//   { id: 3, name: "charger", price: 20, qty: 50 },
//   { id: 4, name: "milk", price: 7, qty: 50 },
//   { id: 5, name: "headphone", price: 30, qty: 50 },
// ];

// const userChoice = +prompt(
//   "yki ro entekhab kon :" + "\n 1 : hazf kala" + "\n 2 : afzayesh kala"
// );

// if (isNaN(userChoice)) {
//   alert("faqat adad");
// } else if (userChoice > 2) {
//   alert("faqat 1 o 2");
// } else {
//   if (userChoice === 1) {
//     const userRemove = prompt("mahsole mored nazar baraye hazf ra vared konid");
//     const index = basket.findIndex(function (product) {
//       return product.name === userRemove;
//     });
//     if (index === -1) {
//       alert("mahsoli nabod");
//     } else {
//       basket.splice(index, 1);
//     }
//     let totalPrice = 0;
//     basket.forEach(function (price) {
//       totalPrice += price.price;
//     });
//     alert("majmoe kole sabad shoma" + totalPrice);
//   }

//   if (userChoice === 2) {
//     const userAdd = prompt("mahsole jadid ro bzn");
//     if (userAdd.trim().length > 0) {
//       const isInShop = products.some(function (product) {
//         return product.name === userAdd && product.qty > 0;
//       });

//       if (isInShop === true) {
//         const newBascket = products.find(function (product) {
//           return product.name === userAdd;
//         });
//         basket.push(newBascket);
//       }
//       let totalPrice = 0;
//       basket.forEach(function (price) {
//         totalPrice += price.price;
//       });
//       alert("price kole mahsolate shoma =>" + totalPrice);
//     }
//   }
// }
// console.log(basket);

// const basket = [
//   { id: 1, title: "laptop", price: 200 },
//   { id: 2, title: "mouse", price: 105 },
//   { id: 3, title: "charger", price: 90 },
//   { id: 4, title: "milk", price: 30 },
//   { id: 5, title: "phone", price: 150 },
//   { id: 6, title: "headph", price: 80 },
// ];
// let postCost = 0
// let sum = 0

// let b = basket.map(function(a){
//   if (a.price<100){
//     postCost += 1
//   }
//  return sum += a.price
// })
// console.log(b);

// let totalPrice = sum + postCost
// console.log(totalPrice);

// const users = ["ali", "amir", "erfan", "amin", "asqar"];
// const numbers = [
//   {id:1 , name: 'ali' , num: "twenty"},
//   {id:1 , name: 'amin' , num: "twenty"},
//   {id:1 , name: 'amir' , num: "twenty"},
//   {id:1 , name: 'ahmad' , num: "twenty"}
// ]
// const score = ['aaaa']
// users.fill("ahmad", 1, 4);

// console.log(Array.isArray(score));
// let a = numbers.findIndex(function(number){
//   return number.name === 'ahma'
// })
// console.log(a);
// console.log(users.slice(1,4));
// console.log(users);
// console.log(users.splice(1,4));
// console.log(users);

// let c = "aliaqa"
// console.log(c.padStart(5 , "a"));

// let userWord = prompt("kalame ro vared kon");

// let userArray = userWord.split("");
// console.log(userArray);

// let userCheck = userArray.reverse("");
// console.log(userCheck);

// let userJoined = userCheck.join("");
// console.log(userJoined);

// if (userWord === userJoined) {
//   alert("ax kalame ham yeksane");
// } else {
//   alert("ax yeksan nist");
// }

// const todo = [
//   { id: 1, name: "ketab", status: false },
//   { id: 2, name: "gym", status: false },
//   { id: 3, name: "trade", status: false },
// ];

// let menu = +prompt(
//   "1: ezafe kardan todo" + "\n 2: hazfe todo" + "\n 3: anjame todo"
// );

// if (isNaN(menu) || menu > 3) {
//   alert("adad monaseb bzn");
// } else {
//   if (menu === 1) {
//     let title = prompt("todo mored nazar ra vared namayid");
//     let newTodo = { id: todo.length + 1, name: title, status: false };
//     todo.push(newTodo);
//     console.log(todo);
//   } else if (menu === 2) {
//     let title = prompt("kodom ro hazf konim");
//     let index = todo.findIndex(function (a) {
//       return a.name === title;
//     });
//     if (index === -1) {
//       alert("todo yaft nashod");
//     } else {
//       todo.splice(index, 1);
//     }
//     console.log(todo);

//   } else {
//     let title = prompt("kodom todo");
//     todo.forEach(function (a) {
//       if (title === a.name) {
//         a.status = true;
//       }
//     });
//     console.log(todo);
//   }
// }

// const hire = [
//   { id: 1, name: "mohammad", tasks: "nezafat" },
//   { id: 2, name: "ahmad", tasks: "wash" },
//   { id: 3, name: "amin", tasks: "employ" },
//   { id: 4, name: "amir", tasks: "coding" },
// ];

// const task = prompt("task chiye" + "baraye kiye");
// // const who = prompt("vase kiye");

// if (task.length < 1) {
//   alert("karmand nist");
// } else {
//   let a = hire.some(function (b) {
//     return b.name === task;
//   });
//   console.log(a);
// }
//

// const questions = [
//   { id: 1, title: "chiye", answer: "ert" },
//   { id: 2, title: "kiye", answer: "fdg" },
//   { id: 3, title: "chetori", answer: "dfg" },
//   { id: 4, title: "kojayi", answer: "ny" },
//   { id: 5, title: "chikar", answer: "hichi" },
//   { id: 6, title: "koshesh", answer: "onja" },
//   { id: 7, title: "are", answer: "na" },
// ];

// let score = 0;
// let answer = "";

// questions.forEach(function (question) {
//   answer = prompt(`${question.title} ? `);
//   if (answer.toLowerCase() === question.answer) {
//     score++;
//   }
// });

// alert(`emtiyaze shoma = ${score}`);

// let num1 = +prompt("adad aval");
// let num2 = +prompt("adad dovom");
// let chi = +prompt("chi bsh");

// if (isNaN(num1) || isNaN(num2)) {
//   alert("adad bzn");
// } else {
//   if (chi === "+") {
//     let result = num1 + num2;
//     alert(`majmoe adad shoma =  ${result}`);
//   } else if (chi === "*") {
//     let result = num1 * num2;
//     alert(`zarb adad shoma = ${result}`);
//   }
// }

// const text = "0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
// let captcha = "";
// let random;
// for (let i = 0; i < 50; i++) {
//   random = Math.floor(Math.random() * text.length);
//   captcha += text[random];
//   console.log(random);
// }
// console.log(captcha);

// let q = prompt(`${captcha}`);

// if (q === captcha) {
//   alert("khosh omadi");
// } else {
//   alert("qalate");
// }
// console.log(eval("ab"));

// const h1Elems = document.getElementsByTagName("h1");
// console.log(h1Elems);

// const a = document.getElementById("title");
// console.dir(a);

// const b = document.getElementsByClassName("tit")
// console.log(b);

const img = document.querySelector("img");
const btn = document.querySelector("button");
let isOne = true;

btn.addEventListener("click", function () {
  if (isOne) {
    img.setAttribute("src", "./bulbon.gif");
    btn.innerHTML = "لامپ را خاموش کنید";
    isOne = false;
  } else {
    img.setAttribute("src", "./bulboff.gif");
    btn.innerHTML = "لامپ را روشن کنید ";
    isOne = true;
  }
});

const username = document.querySelector(".username");
const password = document.querySelector(".password");
const button = document.querySelector(".button");
const umess = document.querySelector(".umess");
const pmess = document.querySelector(".pmess");
const modal = document.querySelector(".modal-screen");
const btn2 = document.querySelector(".modal-button");
const keyup = document.querySelector(".keyup");

button.addEventListener("click", function () {
  const user = username.value;
  const pass = password.value;
  if (user.length > 3) {
    umess.classList.remove("hidden");
    umess.classList.add("usuc");
    umess.innerHTML = "vorod movafaq";
  } else {
    umess.classList.remove("hidden");
    umess.classList.remove("usuc");
    umess.classList.add("umess");
    umess.innerHTML = "vorod na movafaq";
  }
  if (pass.length > 8) {
    pmess.classList.remove("hidden");
    pmess.classList.add("psuc");
    pmess.innerHTML = "vorod movafaq";
  } else {
    pmess.classList.remove("hidden");
    pmess.classList.remove("psuc");
    pmess.classList.add("pmess");
    pmess.innerHTML = "vorod na movafaq";
  }
  if (user.length > 3 && pass.length > 8) {
    modal.classList.remove("hidden");
  }
});
btn2.addEventListener("click", function () {
  modal.classList.add("hidden");
});

username.addEventListener("keyup", function (a) {
  const usss = username.value;
  if (usss.length < 4) {
    keyup.innerHTML = "کمتر از 8 حرف";
  } else {
    keyup.innerHTML = " vorod ok shod";
  }
});

const btnn = document.querySelector(".btnn");
const showcol = document.querySelector(".showcol");
const showcol2 = document.querySelector(".showcol2");
const col = document.querySelector(".col");
const wrap = document.querySelector(".wrap");
const btnn2 = document.querySelector(".btnn2");

btnn.addEventListener("click", function () {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  const red2 = Math.floor(Math.random() * 255);
  const green2 = Math.floor(Math.random() * 255);
  const blue2 = Math.floor(Math.random() * 255);
  const rot = Math.floor(Math.random() * 10000);
  showcol.innerHTML = `rgb(${red},${green},${blue})`;
  showcol2.innerHTML = `rgb(${red2},${green2},${blue2})`;
  showcol2.style.backgroundColor = `rgb(${blue},${red2},${blue2})`
  col.style.backgroundColor = `rgb(${red},${green},${blue})`;
  btnn.style.backgroundColor = `rgb(${red2},${green2},${blue2})`;
  wrap.style.backgroundColor = `rgb(${blue2},${green2},${red})`;
  btnn2.style.rotate = `${rot}deg`;
  btnn2.style.backgroundColor = `rgb(${green},${blue},${red2})`
});



username.setAttribute("data-user-id" , "ali")

const inp = document.querySelector(".inp")

inp.addEventListener("change" , function(){
  console.log(inp);
  
})



const inpuut = document.querySelector(".inpuut")
inpuut.addEventListener("change" , function(){
  let a = inpuut.checked
  console.log(a);
  
})

const select = document.querySelector(".select")
select.addEventListener("change" , function(){
  
})