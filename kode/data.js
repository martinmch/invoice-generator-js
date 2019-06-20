function Kunde(kundenr, fornavn, efternavn){
    this.kundenr = kundenr;
    this.fornavn = fornavn;
    this.efternavn = efternavn;
}

function Ordre(ordrenr, ordredato, kundenr){
    this.ordrenr = ordrenr;
    this.ordredato = ordredato;
    this.kundenr = kundenr;
}

function Ordrelinie(ordrenr, ordrelinienr, antal, varenr, pris){
    this.ordrenr = ordrenr;
    this.ordrelinienr = ordrelinienr;
    this.antal = antal;
    this.varenr = varenr;
    this.pris = pris;
}

function Vare(varenr, varenavn, pris){
    this.varenr = varenr;
    this.navn = varenavn;
    this.pris = pris;
}

Kunder = [
    new Kunde(97123456, "Jens",    "Langberg"),
    new Kunde(96123355, "Mohamed", "Dyrberg"),
    new Kunde(75112387, "Louise",  "Gunnarson"),
    new Kunde(96123456, "Poul",    "Richelsen")
];

Ordrer = [
    new Ordre(101, "2003.02.18", 97123456),
    new Ordre(102, "2003.02.19", 96123355),
    new Ordre(103, "2003.02.20", 75112387),
    new Ordre(104, "2003.02.20", 97123456),
    new Ordre(105, "2003.02.21", 97123456),
    new Ordre(106, "2003.02.21", 96123456),
    new Ordre(107, "2003.02.21", 97123456)
];
Varer = [
    new Vare(205, "Smør",        7.85),
    new Vare(208, "Letmælk",     7.25),
    new Vare(211, "Ost",        24.55),
    new Vare(420, "Æble",        2.10),
    new Vare(424, "Appelsin",    2.35),
    new Vare(506, "Hvedemel",   15.75),
    new Vare(540, "Sukker",     18.60),
    new Vare(568, "Stødt kanel", 5.70)
];
Ordrelinier = [
    new Ordrelinie(101, 1, 2,  506, 15.75),
    new Ordrelinie(101, 2, 10, 420,  2.75),
    new Ordrelinie(101, 3, 8,  205,  7.85),

    new Ordrelinie(102, 1, 10, 208,  7.25),
    new Ordrelinie(102, 2, 5,  424,  2.35),

    new Ordrelinie(103, 1, 1,  211, 24.55),
    new Ordrelinie(103, 2, 2,  540, 18.60),
    new Ordrelinie(103, 3, 1,  205,  7.85),

    new Ordrelinie(104, 1, 1,  540, 18.85),
    new Ordrelinie(104, 2, 1,  568,  5.70),
    new Ordrelinie(104, 3, 2,  205,  8.15),

    new Ordrelinie(105, 1, 1,  211, 24.55),
    new Ordrelinie(105, 2, 3,  540, 18.60),
    new Ordrelinie(105, 3, 3,  205,  7.85),
    new Ordrelinie(105, 2, 1,  568,  5.70),

    new Ordrelinie(106, 2, 17, 420,  2.75),
    new Ordrelinie(106, 6, 9,  205,  7.85),
    new Ordrelinie(106, 1, 10, 208,  7.25),
    new Ordrelinie(106, 2, 5,  424,  2.35),
    new Ordrelinie(106, 1, 1,  211, 24.55),
    new Ordrelinie(106, 2, 2,  540, 18.60),
];

function select(felt, tabel, betingelse){
    var liste;
    var props;
    var limit = s => s;
    switch (tabel){
        case "Kunde":
            props = [ ["kundenr", s => s.kundenr]
                    , ["fornavn", s => s.fornavn]
                    , ["efternavn", s=> s.efternavn] ];
            liste = Kunder;
            break;
        case "Ordre":
            props = [ ["ordrenr", s => s.ordrenr]
                    , ["ordredato", s => s.ordredato]
                    , ["kundenr", s => s.kundenr] ];
            liste = Ordrer;
            break;
        case "Vare":
            props = [ ["varenr", s => s.varenr]
                    , ["varenavn", s => s.varenavn]
                    , ["kundenr", s => s.kundenr] ];
            liste = Varer;
            break;
        case "Ordrelinie":
            props = [ ["ordrenr", s => s.ordrenr]
                    , ["ordrelinienr", s => s.ordrelinienr]
                    , ["antal", s => s.antal]
                    , ["varenr", s => s.varenr]
                    , ["pris", s => s.pris]];
            liste = Ordrelinier;
            break;
        default:
            throw new Error("Ugyldig tabel: " + tabel);
    }
    if(felt != "*"){
        limit = props.find(t => t[0] == felt)[1];
    }
    return liste.map(limit).filter(betingelse);
}
