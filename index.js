const petPromise = await fetch('https://learnwebcode.github.io/pet-adoption-data/pets.json');
const pets = await petPromise.json();

function decideAgeText(age){
    if (!age) {
        return "Less than a year old";
    }
    else if (age > 1) {
        return `${age} Years Old`
    }
    else{
        return `${age} Year Old`
    }
}