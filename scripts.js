function computerPlay() {
return options[Math.floor(Math.random() * options.length)];
}
const options = ["Rock","Paper","Scissors"];
console.log(computerPlay());
