//JSnack 1 Blocco 6 //////////////////////
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
let biciLow = biciList[0];
function pesoMinore() {
    for (let i = 0; i < biciList.length; i++) {
        if (biciLow.peso > biciList[i].peso) {
            biciLow = biciList[i];
        }
    }
    return biciLow;
}

const { nome, peso } = biciLow;
document.getElementById("bici_leggera").insertAdjacentHTML('beforeend', `
<ul>
    <li>Modello: ${nome}</li>
    <li>Peso: ${peso}</li>
</ul>
`);
console.log(pesoMinore());





//JSnack 2 Blocco 6 ////////////////////////////////////////////
//Creare un array di oggetti di squadre di calcio.Ogni squadra avrà diverse proprietà:
//nome, punti fatti, falli subiti.
//Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
var teams = [
    {
        team: "Palermo",
        punti: 0,
        falli_subiti: 0
    },
    {
        team: "Catania",
        punti: 0,
        falli_subiti: 0
    },
    {
        team: "Roma",
        punti: 0,
        falli_subiti: 0
    },
    {
        team: "Napoli",
        punti: 0,
        falli_subiti: 0
    },
]

//Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
function rndmN() {
    return parseInt(Math.random() * 100) + 1;
}

for (let i = 0; i < teams.length; i++) {
    teams[i].punti = rndmN();
    teams[i].falli_subiti = rndmN();

}

//Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
const [palermo, catania, roma, napoli] = teams;
const newTeams = [];
for (let i = 0; i < teams.length; i++) {
    let team = teams[i];
    delete team.punti;
    newTeams.push(team);
}

console.log(newTeams);




// JSNack 3 Blocco 6 /////////////
//Scrivere una funzione che accetti tre argomenti, un array e due numeri(a più piccolo di b).
//La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
const spesa = ["Olio", "Pasta", "Gelato", "Latte", "Carne", "Mele", "Banane"];
function takeNumbers(lista, min, max) {
    const risultato = lista.filter((el, i) => {
        let result = i >= min && i <= max;
        return result;
    })
    return risultato;
}

console.log(takeNumbers(spesa, 2, 4));