function cal(){
    area=document.getElementById("area");
    peri=document.getElementById("peri");
    a=Number(document.getElementById("side_1").value);
    b=Number(document.getElementById("side_2").value);
    area.innerHTML="Area: "+a*b;
    peri.innerHTML="Perimeter: "+2*(a+b);
}