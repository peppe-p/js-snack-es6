//JSnack 1 Blocco 6
//Creare un array di oggetti, ogni oggetto descriverà una bici da corsa con le seguenti proprietà:
//nome e peso.
let biciList = [
    {
        nome: "303X",
        peso: 36
    },
    {
        nome: "Genny 4",
        peso: 32
    },
    {
        nome: "222m",
        peso: 22
    },
    {
        nome: "Psxd",
        peso: 64
    },
    {
        nome: "100c",
        peso: 13
    },
    {
        nome: "LP747",
        peso: 25
    },
    {
        nome: "303X 2",
        peso: 73
    },
    {
        nome: "305X",
        peso: 14
    },
    {
        nome: "GoGo 2",
        peso: 65
    },
    {
        nome: "050 T",
        peso: 31
    }
]

//Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
function pesoMinore() {
    let biciLow = biciList[0];
    for (let i = 0; i < biciList.length; i++) {
        if (biciLow.peso > biciList[i].peso) {
            biciLow = biciList[i];
        }
    }
    return biciLow;
}

console.log(pesoMinore());




//JSnack 2 Blocco 6
//Creare un array di oggetti di squadre di calcio.Ogni squadra avrà diverse proprietà:
//nome, punti fatti, falli subiti.
//Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
var squadre = [
    {
        nome: "Palermo",
        punti: 0,
        falli_subiti: 0
    },
    {
        nome: "Catania",
        punti: 0,
        falli_subiti: 0
    },
    {
        nome: "Roma",
        punti: 0,
        falli_subiti: 0
    },
    {
        nome: "Napoli",
        punti: 0,
        falli_subiti: 0
    },
]

//Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
function rndmN() {
    return parseInt(Math.random() * 100) + 1;
}

for (let i = 0; i < squadre.length; i++) {
    let punti = squadre[i].punti;
    let falli = squadre[i].falli_subiti;


}
//Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.