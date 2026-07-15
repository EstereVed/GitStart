/*var a = 50;
var b = 5;

function dalyba(){
    return a/b;
}

console.log (dalyba())*/


//if, kad daugybos rezultatas 25 ir atitinka 25 ir atspausdinti, jei ok
/*var pirmasSkaicius = 5;
var antrasSkaicius = 6;

if (pirmasSkaicius*antrasSkaicius == 25){
    console.log ("atitinka")
}else {
    console.log ("neatitinka")
}*/

// ||arba
//&& ir

//pasirasyti if else, kuris:
//spausdina TIKRAI DAUGIAU jei skaicius yra daugiau uz 10
//arba spausdina KAZKURIS IS SKAICIU GERAS jei skaicius yra 4 arba 6
//kitu atveju BLOGAI
var skaicius = 6;

if (skaicius > 10){
    console.log ("TIKRAI DAUGIAU");
}else if (skaicius == 4 || skaicius == 6){
    console.log ("KAZKURIS IS SKAICIU GERAS");
} else {
    console.log ("BLOGAI");
}
