var num1;
var num2;
var num3;
var numM;

    num1 = prompt("Inserta el primer numero:"); 
    num2 = prompt("Inserta el segundo numero:"); 
    num3 = prompt("Inserta el tercer numero:"); 

    function numMayor(num1,num2,num3, numM){
        if( num1 >= num2){
            numM=num1;
        } else{
            numM=num2;
        }
        if(numM >= num3){
            numM=numM;
        } else{
            numM=num3;
        }
    return numM;
    }

alert("El número mayor es: " + numMayor(num1,num2,num3, numM));