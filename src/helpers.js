
const caluclate = (value) =>{
    //this won't work anyway
    const parsedAndCheckeValue = parse(value);
    return eval(value)
}

const parse = (value) =>{
    const regExp = new RegExp( /\([+-]?([0-9]*[.])?[0-9]+\)|[+-]?([0-9]*[.])?[0-9]+[-+/*]?([0-9]*[.])?[0-9]+/g);
    const result = value.match(regExp);
    console.log(result);
    return result;
}

const inc = (value) =>{
    return value;
}

const dec = (value) =>{
    return value;
}

export default caluclate;


