function calcularArea(){
    
    var lado1 = parseFloat(document.getElementById("lado-1").value);
    var lado2 = parseFloat(document.getElementById("lado-2").value);
    var lado3 = parseFloat(document.getElementById("lado-3").value);
    
    if(lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1){
        
        var p = lado1+lado2+lado3;
        var s = (lado1 + lado2 + lado3)/ 2;

        var area= Math.sqrt(s*(s-lado1)*(s-lado2)*(s-lado3));
        
        document.getElementById("perimetro").innerHTML="El perimetro es: " + p.toFixed(2);
        document.getElementById("semip").innerHTML="El semiperimeto es: " +s.toFixed(2);
        document.getElementById("area").innerHTML= "El area del triangulo es: " + area.toFixed(2);
    }
    else{
        document.getElementById("area").innerHTML="Los lados no forman un triangulo valido";
    }
    

}