function lowerCaseDrivers(arr) {
    let newArr = [];
    arr.map(function(el) {
        newArr.push(el.toLowerCase());
    });
    return newArr;
}

function nameToAttributes(arr) {
    return arr.map(function(el) {
        let fullName = el.split(" ")
        return { firstName: fullName[0], lastName: fullName[1] };
    });
}

function attributesToPhrase(arr) {
    let newArr = [];
    arr.map(function(el){
        newArr.push(`${el.name} is from ${el.hometown}`);
    })
    return newArr;
}

