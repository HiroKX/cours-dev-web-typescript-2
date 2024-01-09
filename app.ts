import express, {Request, Response} from 'express';
import {Operation} from "./Operation.js";

let app = express();

app.get('', function(req: Request,res: Response) {
    res.send({
        resultatAddition: addition(1,6),
        resultatConcatenation: concatenation("I\'ll be", " back"),
        resultatAdditionAvecType: additionAvecType(new Operation(6,15)),
    })
});

function addition(n1: number, n2: number){
    return n1 + n2;
}

function concatenation(n1: string, n2: string){
    return n1 + n2;
}

function additionAvecType(operation: Operation){
    return operation.nombre1 + operation.nombre2;
}



app.listen("9000");
