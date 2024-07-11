const petPromise = await fetch('https://learnwebcode.github.io/pet-adoption-data/pets.json');
const pets = await petPromise.json();

const url = 'https://learnwebcode.github.io/pet-adoption-data/pets/'

const template = document.querySelector('#animal-card');
const wrapper = document.createElement('dev');

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

pets.forEach(pet => {
    const clone = template.content.cloneNode(true);
    clone.querySelector('h3').textContent = pet.name;
    const img = clone.querySelector('img');
    img.src = pet.photo;
    img.alt = `A ${pet.species} named ${pet.name}`;
    const age = new Date().getFullYear() - pet.birthYear;
    const ageText = decideAgeText(age); 
});