const marvel_heros = ["thor", "ironman","spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros);

console.log(marvel_heros);
console.log(marvel_heros[3][1]);

marvel_heros.concat(dc_heros);
console.log(marvel_heros);

const all_new_heros = [ ...marvel_heros, ...dc_heros]
console.log(all_new_heros);

const another_arry = [1,2,3,4,[2,3],4,2,2[3,3,[2,6]]]


const real_another_array = another_arry.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("vishal"));
console.log(Array.from("vishal"));
console.log(Array.from({name:"vishal"}));


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
