
// function for genrating Random unique ID

const id = (l) => {
    var text = " ";
    var char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for(i = 0 ; i < l ; i++){
      text += char_list.charAt(Math.floor(Math.random()*char_list.length))
    }
    return text
    
  }
  console.log(id(5))
  
  
  
  // function for genrating Random number
  const  myRange = (min , max) => 
  {
    var random = Math.floor(Math.random()*(max - min +1)+min)
    return random
  }
  console.log(myRange(3, 7))
  //function to genrate Reverse Number
  const reverse = (n) => {
    n = n + "";
    return n.split("").reverse().join()
  }
  console.log(Number(23333))
  
  //function to Genrate  reverse of string also
  const mysort = (array) =>{
    return array.split("").reverse().join("")
  }
  console.log(String((mysort("soniyadav"))))
  
  
  const reverseArray = (array) =>{
    return array.reverse()
  }
  console.log(reverseArray([34444433]))



// reverse a number
const reverse = (num) =>{
  num = num + ""
  return num.split("").reverse().join("")
}
console.log(Number(reverse(343222)))

// reverse srting
const reverse1 = (str) =>{
  str = str + ""
  return str.split("").reverse().join("")
}

console.log(reverse1("ertttt"))

// sorting string in alphbetical order

const sort = (str) => {
  return str.split("").sort().join("")
}

console.log(sort("rohitt"))

// sorting array of number in acending order

number = [ 23, 34 , 34 ,32, 2939, 2883, 2228 ,2822]
const acend  = (number) => {
  return number.sort(function(a , b){ return a -b })
}

// sorting array of number in decending order
console.log(acend(number))

number = [ 23, 34 , 34 ,32, 2939, 2883, 2228 ,2822]
const decend  = (number) => {
  return number.sort(function(a , b){ return b - a})
}

console.log(decend(number))




  
  
  
  
  
