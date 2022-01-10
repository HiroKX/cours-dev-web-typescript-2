import express from 'express';
import path from 'path';
const __dirname = path.resolve();
let app = express();

app.get('', function(req,res) {
    res.send({
        resultatAddition: addition(1,6),
        resultatConcatenation: concatenation("I\'ll be", " back"),
        resultatAdditionAvecType: additionAvecType(new Operation(6,15)),
    })
});


//TODO Ajoutez les types manquants ici
function addition(n1: , n2: ){
    return n1 + n2;
}

//TODO Ajoutez les types manquants ici
function concatenation(n1: , n2: ){
    return n1 + n2;
}

//TODO Ajoutez le types manquants ici
function additionAvecType(operation: ){
    operation.n1 + operation.n2;
}



app.listen("9000");
