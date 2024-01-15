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
    
    return true;
};

exports.isValid = isValid;
