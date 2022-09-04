let person = prompt ("What is your name?");
console.log("So, your name is " + person);


let totalPutts = 0;
let totalPar = 0; 
let holeAmount = 0;

holeAmount = parseInt ( prompt ("Hi, "+ person +"! Would you like to play 3 or 6 holes?"));
totalPar = ( 3 * holeAmount);
console.log (holeAmount);


for ( let i = 0; i < holeAmount; i++ ) {
    let putts = parseInt ( prompt( "How many putts for hole " + ( i + 1 ) + "? (par 3)"));
    totalPutts = totalPutts + putts;
    finalScore = totalPutts - totalPar;
    console.log('putts', putts );
    console.log('totalPutts', totalPutts );
    console.log('totalPar', totalPar);
}

if ( totalPutts > totalPar ) {
    alert( " Nice try " + person + " your total par was: +" + finalScore );
    console.log ( " Nice try " + person + " your total par was: +" + finalScore );
} else if ( totalPutts < totalPar ) {
    alert( " Great job " + person + " your total par was: " + finalScore );
    console.log( " Great job " + person + " your total par was: -" + finalScore );
} else if ( totalPutts === totalPar ) {
    alert( " Good game " + person + " your total par was: " + finalScore );
    console.log( " Good game " + person + " your total par was: 0" + finalScore);
}
