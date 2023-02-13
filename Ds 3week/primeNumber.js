let primeNumber = (number)=>{

for(i=2;i<number;i++){

      if(number%i===0){
        return " Its not prime prime"
    }
}
return "its prime number"


}

console.log(primeNumber(4));