

function equipe() {
    document.getElementById("output").textContent = "João Vitor Krueger Moutinho\nLucas Reinert\nThiago Souza Ortiz";
};

function limpar() {
    document.getElementById("output").textContent = '';
    document.getElementById('input').value = '';
}

function analisar() {
    const lexico = new Lexico(document.getElementById("input").value);
    try {
        const list = [];
        let teste = lexico.nextToken();
        while (teste) {
            list.push(teste);
            teste = lexico.nextToken();
        }
        const list2 = [];
        const constant = new Constants();

        for (var i = 0; i < list.length; i++) {
            const index = list2.findIndex((data) => data.id == list[i].id);
            if (index < 0) {
                const constants = Object.keys(constant)[list[i].id];
                const token = {
                    id: list[i].id,
                    name: constants,
                    qtd: 1
                }

                list2.push(token);
            } else {
                list2[index].qtd += 1;
            }


        }

        let str = '';
        list2.forEach((value)=>{
            str+= `${value.name}: ${value.qtd}\n`;
        });

        document.getElementById("output").textContent = str;

    } catch (error) {
        console.error(error);
    }

}

class Token {
    constructor(id, lexeme, position) {
        this.id = id;
        this.lexeme = lexeme;
        this.position = position;
    }

    getId() {
        return this.id;
    }

    getLexeme() {
        return this.lexeme;
    }

    getPosition() {
        return this.position;
    }

    toString() {
        return `${this.id} ( ${this.lexeme} ) @ ${this.position}`;
    }
}

const SCANNER_TABLE_INDEXES =
    [
        0,
        40,
        40,
        49,
        59,
        70,
        96,
        105,
        115,
        125,
        136,
        163,
        164,
        174,
        184,
        195,
        223,
        233,
        244,
        254,
        265,
        291,
        294,
        295,
        305,
        315,
        326,
        337,
        338,
        349,
        376,
        378,
        380,
        406,
        416,
        426,
        426,
        436,
        447,
        457,
        467,
        477,
        487,
        487,
        498,
        508,
        518,
        519,
        530,
        531,
        541,
        551,
        561,
        562,
        562,
        572,
        582,
        592,
        592,
        602,
        602
    ];
const SCANNER_TABLE =
    [
        [9, 1],
        [10, 1],
        [32, 1],
        [40, 2],
        [48, 3],
        [49, 4],
        [50, 4],
        [51, 4],
        [52, 4],
        [53, 4],
        [54, 4],
        [55, 4],
        [56, 4],
        [57, 4],
        [65, 5],
        [66, 5],
        [67, 5],
        [68, 5],
        [69, 5],
        [70, 5],
        [71, 5],
        [72, 5],
        [73, 5],
        [74, 5],
        [75, 5],
        [76, 5],
        [77, 5],
        [78, 5],
        [79, 5],
        [80, 5],
        [81, 5],
        [82, 5],
        [83, 5],
        [84, 5],
        [85, 5],
        [86, 5],
        [87, 5],
        [88, 5],
        [89, 5],
        [90, 5],
        [49, 6],
        [50, 6],
        [51, 6],
        [52, 6],
        [53, 6],
        [54, 6],
        [55, 6],
        [56, 6],
        [57, 6],
        [48, 7],
        [49, 7],
        [50, 7],
        [51, 7],
        [52, 7],
        [53, 7],
        [54, 7],
        [55, 7],
        [56, 7],
        [57, 7],
        [46, 8],
        [48, 9],
        [49, 9],
        [50, 9],
        [51, 9],
        [52, 9],
        [53, 9],
        [54, 9],
        [55, 9],
        [56, 9],
        [57, 9],
        [97, 10],
        [98, 10],
        [99, 10],
        [100, 10],
        [101, 10],
        [102, 10],
        [103, 10],
        [104, 10],
        [105, 10],
        [106, 10],
        [107, 10],
        [108, 10],
        [109, 10],
        [110, 10],
        [111, 10],
        [112, 10],
        [113, 10],
        [114, 10],
        [115, 10],
        [116, 10],
        [117, 10],
        [118, 10],
        [119, 10],
        [120, 10],
        [121, 10],
        [122, 10],
        [49, 11],
        [50, 11],
        [51, 11],
        [52, 11],
        [53, 11],
        [54, 11],
        [55, 11],
        [56, 11],
        [57, 11],
        [48, 12],
        [49, 12],
        [50, 12],
        [51, 12],
        [52, 12],
        [53, 12],
        [54, 12],
        [55, 12],
        [56, 12],
        [57, 12],
        [48, 13],
        [49, 13],
        [50, 13],
        [51, 13],
        [52, 13],
        [53, 13],
        [54, 13],
        [55, 13],
        [56, 13],
        [57, 13],
        [46, 8],
        [48, 14],
        [49, 14],
        [50, 14],
        [51, 14],
        [52, 14],
        [53, 14],
        [54, 14],
        [55, 14],
        [56, 14],
        [57, 14],
        [32, 15],
        [97, 10],
        [98, 10],
        [99, 10],
        [100, 10],
        [101, 10],
        [102, 10],
        [103, 10],
        [104, 10],
        [105, 10],
        [106, 10],
        [107, 10],
        [108, 10],
        [109, 10],
        [110, 10],
        [111, 10],
        [112, 10],
        [113, 10],
        [114, 10],
        [115, 10],
        [116, 10],
        [117, 10],
        [118, 10],
        [119, 10],
        [120, 10],
        [121, 10],
        [122, 10],
        [41, 16],
        [48, 17],
        [49, 17],
        [50, 17],
        [51, 17],
        [52, 17],
        [53, 17],
        [54, 17],
        [55, 17],
        [56, 17],
        [57, 17],
        [48, 18],
        [49, 18],
        [50, 18],
        [51, 18],
        [52, 18],
        [53, 18],
        [54, 18],
        [55, 18],
        [56, 18],
        [57, 18],
        [46, 8],
        [48, 19],
        [49, 19],
        [50, 19],
        [51, 19],
        [52, 19],
        [53, 19],
        [54, 19],
        [55, 19],
        [56, 19],
        [57, 19],
        [65, 20],
        [66, 20],
        [67, 20],
        [68, 20],
        [69, 20],
        [70, 20],
        [71, 20],
        [72, 20],
        [73, 20],
        [74, 20],
        [75, 20],
        [76, 20],
        [77, 20],
        [78, 20],
        [79, 20],
        [80, 20],
        [81, 20],
        [82, 20],
        [83, 20],
        [84, 20],
        [85, 20],
        [86, 20],
        [87, 20],
        [88, 20],
        [89, 20],
        [90, 20],
        [100, 21],
        [101, 22],
        [48, 23],
        [49, 24],
        [50, 24],
        [51, 24],
        [52, 24],
        [53, 24],
        [54, 24],
        [55, 24],
        [56, 24],
        [57, 24],
        [45, 25],
        [48, 26],
        [49, 26],
        [50, 26],
        [51, 26],
        [52, 26],
        [53, 26],
        [54, 26],
        [55, 26],
        [56, 26],
        [57, 26],
        [48, 27],
        [49, 27],
        [50, 27],
        [51, 27],
        [52, 27],
        [53, 27],
        [54, 27],
        [55, 27],
        [56, 27],
        [57, 27],
        [45, 25],
        [48, 28],
        [49, 28],
        [50, 28],
        [51, 28],
        [52, 28],
        [53, 28],
        [54, 28],
        [55, 28],
        [56, 28],
        [57, 28],
        [97, 29],
        [98, 29],
        [99, 29],
        [100, 29],
        [101, 29],
        [102, 29],
        [103, 29],
        [104, 29],
        [105, 29],
        [106, 29],
        [107, 29],
        [108, 29],
        [109, 29],
        [110, 29],
        [111, 29],
        [112, 29],
        [113, 29],
        [114, 29],
        [115, 29],
        [116, 29],
        [117, 29],
        [118, 29],
        [119, 29],
        [120, 29],
        [121, 29],
        [122, 29],
        [97, 30],
        [101, 22],
        [111, 31],
        [32, 32],
        [48, 33],
        [49, 33],
        [50, 33],
        [51, 33],
        [52, 33],
        [53, 33],
        [54, 33],
        [55, 33],
        [56, 33],
        [57, 33],
        [48, 34],
        [49, 34],
        [50, 34],
        [51, 34],
        [52, 34],
        [53, 34],
        [54, 34],
        [55, 34],
        [56, 34],
        [57, 34],
        [48, 35],
        [49, 35],
        [50, 35],
        [51, 35],
        [52, 35],
        [53, 35],
        [54, 35],
        [55, 35],
        [56, 35],
        [57, 35],
        [88, 35],
        [45, 36],
        [48, 37],
        [49, 37],
        [50, 37],
        [51, 37],
        [52, 37],
        [53, 37],
        [54, 37],
        [55, 37],
        [56, 37],
        [57, 37],
        [46, 38],
        [45, 39],
        [48, 37],
        [49, 37],
        [50, 37],
        [51, 37],
        [52, 37],
        [53, 37],
        [54, 37],
        [55, 37],
        [56, 37],
        [57, 37],
        [32, 15],
        [97, 29],
        [98, 29],
        [99, 29],
        [100, 29],
        [101, 29],
        [102, 29],
        [103, 29],
        [104, 29],
        [105, 29],
        [106, 29],
        [107, 29],
        [108, 29],
        [109, 29],
        [110, 29],
        [111, 29],
        [112, 29],
        [113, 29],
        [114, 29],
        [115, 29],
        [116, 29],
        [117, 29],
        [118, 29],
        [119, 29],
        [120, 29],
        [121, 29],
        [122, 29],
        [32, 32],
        [115, 22],
        [32, 32],
        [115, 22],
        [65, 20],
        [66, 20],
        [67, 20],
        [68, 20],
        [69, 20],
        [70, 20],
        [71, 20],
        [72, 20],
        [73, 20],
        [74, 20],
        [75, 20],
        [76, 20],
        [77, 20],
        [78, 20],
        [79, 20],
        [80, 20],
        [81, 20],
        [82, 20],
        [83, 20],
        [84, 20],
        [85, 20],
        [86, 20],
        [87, 20],
        [88, 20],
        [89, 20],
        [90, 20],
        [48, 40],
        [49, 40],
        [50, 40],
        [51, 40],
        [52, 40],
        [53, 40],
        [54, 40],
        [55, 40],
        [56, 40],
        [57, 40],
        [48, 41],
        [49, 41],
        [50, 41],
        [51, 41],
        [52, 41],
        [53, 41],
        [54, 41],
        [55, 41],
        [56, 41],
        [57, 41],
        [48, 42],
        [49, 42],
        [50, 42],
        [51, 42],
        [52, 42],
        [53, 42],
        [54, 42],
        [55, 42],
        [56, 42],
        [57, 42],
        [45, 36],
        [48, 43],
        [49, 43],
        [50, 43],
        [51, 43],
        [52, 43],
        [53, 43],
        [54, 43],
        [55, 43],
        [56, 43],
        [57, 43],
        [48, 44],
        [49, 44],
        [50, 44],
        [51, 44],
        [52, 44],
        [53, 44],
        [54, 44],
        [55, 44],
        [56, 44],
        [57, 44],
        [48, 45],
        [49, 45],
        [50, 45],
        [51, 45],
        [52, 45],
        [53, 45],
        [54, 45],
        [55, 45],
        [56, 45],
        [57, 45],
        [48, 46],
        [49, 46],
        [50, 46],
        [51, 46],
        [52, 46],
        [53, 46],
        [54, 46],
        [55, 46],
        [56, 46],
        [57, 46],
        [48, 47],
        [49, 47],
        [50, 47],
        [51, 47],
        [52, 47],
        [53, 47],
        [54, 47],
        [55, 47],
        [56, 47],
        [57, 47],
        [45, 36],
        [48, 48],
        [49, 48],
        [50, 48],
        [51, 48],
        [52, 48],
        [53, 48],
        [54, 48],
        [55, 48],
        [56, 48],
        [57, 48],
        [48, 49],
        [49, 49],
        [50, 49],
        [51, 49],
        [52, 49],
        [53, 49],
        [54, 49],
        [55, 49],
        [56, 49],
        [57, 49],
        [48, 50],
        [49, 50],
        [50, 50],
        [51, 50],
        [52, 50],
        [53, 50],
        [54, 50],
        [55, 50],
        [56, 50],
        [57, 50],
        [45, 51],
        [45, 51],
        [48, 46],
        [49, 46],
        [50, 46],
        [51, 46],
        [52, 46],
        [53, 46],
        [54, 46],
        [55, 46],
        [56, 46],
        [57, 46],
        [45, 36],
        [48, 52],
        [49, 52],
        [50, 52],
        [51, 52],
        [52, 52],
        [53, 52],
        [54, 52],
        [55, 52],
        [56, 52],
        [57, 52],
        [48, 53],
        [49, 53],
        [50, 53],
        [51, 53],
        [52, 53],
        [53, 53],
        [54, 53],
        [55, 53],
        [56, 53],
        [57, 53],
        [48, 54],
        [49, 54],
        [50, 54],
        [51, 54],
        [52, 54],
        [53, 54],
        [54, 54],
        [55, 54],
        [56, 54],
        [57, 54],
        [45, 55],
        [48, 56],
        [49, 56],
        [50, 56],
        [51, 56],
        [52, 56],
        [53, 56],
        [54, 56],
        [55, 56],
        [56, 56],
        [57, 56],
        [48, 57],
        [49, 57],
        [50, 57],
        [51, 57],
        [52, 57],
        [53, 57],
        [54, 57],
        [55, 57],
        [56, 57],
        [57, 57],
        [48, 58],
        [49, 58],
        [50, 58],
        [51, 58],
        [52, 58],
        [53, 58],
        [54, 58],
        [55, 58],
        [56, 58],
        [57, 58],
        [48, 59],
        [49, 59],
        [50, 59],
        [51, 59],
        [52, 59],
        [53, 59],
        [54, 59],
        [55, 59],
        [56, 59],
        [57, 59]
    ];

const TOKEN_STATE = [-1, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2, -1, -1, -1, -1, -1, 6, -1, -1, -1, -1, -1, -1, 7, -1, -1, 7, -1, -1, -1, -1, -1, -1, -1, 5, -1, -1, -1, 3, -1, 4];
const SCANNER_ERROR =
    [
        "Caractere n�o esperado",
        "",
        "Erro identificando telefone",
        "Erro identificando agencia ou conta_corrente",
        "Erro identificando rg ou cep ou agencia ou conta_corrente",
        "Erro identificando nome",
        "Erro identificando telefone",
        "Erro identificando agencia ou conta_corrente",
        "Erro identificando rg",
        "Erro identificando rg ou cep ou agencia ou conta_corrente",
        "Erro identificando nome",
        "Erro identificando telefone",
        "Erro identificando agencia ou conta_corrente",
        "Erro identificando rg",
        "Erro identificando rg ou cep ou agencia ou conta_corrente",
        "Erro identificando nome",
        "Erro identificando telefone",
        "Erro identificando agencia ou conta_corrente",
        "Erro identificando rg",
        "Erro identificando cep ou agencia ou conta_corrente",
        "Erro identificando nome",
        "Erro identificando nome",
        "Erro identificando nome",
        "Erro identificando telefone",
        "Erro identificando telefone",
        "Erro identificando agencia",
        "Erro identificando conta_corrente",
        "Erro identificando rg",
        "Erro identificando cep ou conta_corrente",
        "",
        "Erro identificando nome",
        "Erro identificando nome",
        "Erro identificando nome",
        "Erro identificando telefone",
        "Erro identificando telefone",
        "",
        "Erro identificando conta_corrente",
        "Erro identificando conta_corrente",
        "Erro identificando rg",
        "Erro identificando cep ou conta_corrente",
        "Erro identificando telefone",
        "Erro identificando telefone",
        "",
        "Erro identificando conta_corrente",
        "Erro identificando rg",
        "",
        "Erro identificando telefone",
        "Erro identificando telefone",
        "Erro identificando conta_corrente",
        "Erro identificando rg",
        "Erro identificando cep",
        "Erro identificando telefone",
        "Erro identificando rg",
        "",
        "Erro identificando telefone",
        "Erro identificando rg",
        "Erro identificando telefone",
        "",
        "Erro identificando telefone",
        ""
    ];

class Lexico {
    constructor(input) {
        this.input = input;
        this.position = 0;
    }

    nextToken() {
        if (!this.hasInput()) {
            return null;
        }

        let start = this.position;
        let state = 0;
        let lastState = 0;
        let endState = -1;
        let end = -1;

        while (this.hasInput()) {
            lastState = state;
            state = this.nextState(this.nextChar(), state);

            if (state < 0) {
                break;
            }
            else {
                if (this.tokenForState(state) >= 0) {
                    endState = state;
                    end = this.position;
                }
            }
        }
        if (endState < 0 || (endState != state && this.tokenForState(lastState) === -2)) {
            console.error(`${SCANNER_ERROR[lastState]} - ${start}`);
            throw new Error(SCANNER_ERROR[lastState]);
            // throw new LexicalError(SCANNER_ERROR[lastState], start);

        }

        this.position = end;

        const token = this.tokenForState(endState);

        if (token == 0) {
            return this.nextToken();
        } else {
            const lexeme = this.input.substring(start, end);
            return new Token(token, lexeme, start);
        }
    }

    nextState(c, state) {
        let start = SCANNER_TABLE_INDEXES[state];
        let end = SCANNER_TABLE_INDEXES[state + 1] - 1;


        while (start <= end) {
            const half = Math.floor((start + end) / 2);

            if (String.fromCharCode(SCANNER_TABLE[half][0]) == c) {
                return SCANNER_TABLE[half][1];
            } else if (String.fromCharCode(SCANNER_TABLE[half][0]) < c) {
                start = half + 1;
            } else {
                end = half - 1;
            }
        }
        return -1;
    }

    tokenForState(state) {
        if (state < 0 || state >= TOKEN_STATE.length) return -1;

        return TOKEN_STATE[state];
    }

    hasInput() {
        return this.position < this.input.length;
    }

    nextChar() {
        if (this.hasInput()) {
            const char = this.input.charAt(this.position);
            this.position += 1;
            return char;
        }
        else {
            return ' ';
        }
    }
}


// class AnalysisError {
//     constructor(msg, position) {
//         this.msg = msg;
//         this.position = position || -1;
//     }

//     getPosition() {
//         return position;
//     }

//     toString() {
//         return this.msg.toString() + ", @ " + position;
//     }
// }

// class LexicalError extends AnalysisError {
//     constructor(msg, position){
//         super(msg,position);
//     }

//     constructor(msg){
//         super(msg);
//     }
// }

class Constants {
    EPSILON = { id: 0, description: "EPSILON" };
    DOLLAR = { id: 1, description: "DOLAR" };

    nome = { id: 2, description: "NOME" };
    rg = { id: 3, description: "RG" };
    telefone = { id: 4, description: "TELEFONE" };
    cep = { id: 5, description: "CEP" };
    agencia = { id: 6, description: "AGENCIA" };
    conta_corrente = { id: 7, description: "CONTA CORRENTE" };

}
