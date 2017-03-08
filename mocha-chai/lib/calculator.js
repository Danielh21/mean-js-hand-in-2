
let add = (n1,n2) => n1+n2;
let sub = (n1,n2) => n1-n2;
let mult = (n1,n2) => n1*n2;
let div = function(n1,n2){
    if(n2==0){
        throw new Error("DONT DIV WITH ZERO!");
    }
    return n1/n2;
} 

module.exports = {
    add: add,
    sub: sub,
    mult: mult,
    div: div
}