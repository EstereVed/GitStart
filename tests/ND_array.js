let birds = ["stork","owl","swan"];
//pridėti gale:
birds.push("chicken");
//pridėti prieky:
birds.unshift("parrot");

for (bird of birds){
console.log("Pirmas for loop variantas: "+ bird);
}

for (let i = 0; i < birds.length; i++){
console.log("Antras for loop variantas: "+ birds[i]);
}