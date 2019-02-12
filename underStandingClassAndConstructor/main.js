function ABC(){
    this.name = "sawan"
    console.log("Sawan")
}

ABC.prototype.printName =  function(){
    console.log(this.name);
    return true;
}


class BCA {
    constructor(){
        console.log("Sawan Kumar")
    }
}


BCA.prototype.printName =  function(){
    console.log(this.name);
    return true;
}


var _obj = {a:"sss"}