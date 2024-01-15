// TODO: Refactor validation function to follow the defined validations rules


const isValid = (gamerTag) => {
    //if the gamer tag is empty, return false
    if (gamerTag === '') {
        return false;
    };
    //if the gamer tag is less than 8 characters, return false
    if (gamerTag.length < 8) {
        return false;
    };

    //if the gamer tag does not contain at least one special character, return false
    const specialCharacters = '&$!è§à_';
    let containsSpecialCharacter = false;
    for (let i = 0; i < gamerTag.length; i++) {
        if (specialCharacters.includes(gamerTag[i])) {
            containsSpecialCharacter = true;
            break;
        }
    }
    if (!containsSpecialCharacter) {
        return false;
    }

    //if the gamer tag does not contain at least one number, return false
    let containsNumber = false;
    for (let i = 0; i < gamerTag.length; i++) {
        if (!isNaN(gamerTag[i])) {
            containsNumber = true;
            break;
        }
    }
    if (!containsNumber) {
        return false;
    }
    
    return true;
};

exports.isValid = isValid;
