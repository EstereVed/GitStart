/*Receptas blynams:
2 kiaušiniai po 50g
450 ml pieno
450 mg miltų
viską sudėjus "suma" blynų*/

var kiausinis = 50;
var pienas = 450;
var miltai = 450;

function receptas (){
return 2 * kiausinis + pienas + miltai;
}

console.log ('Receptas blynams: \n2 kiausiniai po ' +(kiausinis) +' g, \n' +(pienas) + ' ml pieno,\n' + (miltai) + ' mg miltu')
console.log ('Bendra produktų suma = ' + receptas())