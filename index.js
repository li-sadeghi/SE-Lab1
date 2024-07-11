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