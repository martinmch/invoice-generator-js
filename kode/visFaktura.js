
function hentVare(varenr){
    return Varer.find(p => p.varenr == varenr);
}

function hentOrdre(ordrenr){
    return Ordrer.find(p => p.ordrenr == ordrenr);
}

function hentKunde(kundenr){
    return Kunder.find(p => p.kundenr == kundenr);
}

function LavHTMLlinie(ordrelinie){
    var varenr    = ordrelinie.varenr;
    var vare      = hentVare(varenr);
    var pris      = ordrelinie.pris;console
    var antal     = ordrelinie.antal;
    var totalpris = pris*antal;
    
    return "<tr class='item'> \
            <td>"+vare.navn+"</td>\
            <td>"+antal+"</td>\
            <td>"+pris.toFixed(2)+"</td>\
            <td>"+totalpris.toFixed(2)+"</td>\
            </tr>";
}

function TotalHTML(totalpris){
    return "<tr class='total'>\
                <td></td>\
                <td></td>\
                <td></td>\
                <td>Total: "+totalpris.toFixed(2)+"</td>\
            </tr>";
}

function VisFaktura(ordreNummer){
    var ordre = hentOrdre(ordreNummer);
    var kunde = hentKunde(ordre.kundenr);
    var kundensNavn = kunde.efternavn + ", " + kunde.fornavn;

    document.getElementById('ordrenr').innerHTML = ordreNummer;
    document.getElementById('kundenavn').innerHTML = kundensNavn;

    // Kode mangler: Bestem hvilken dato ordren blev
    // fortaget paa.
    var ordrensDato = "DATO MANGLER";
    document.getElementById('dato').innerHTML = ordrensDato;

    // Kode mangler: Bestem hvor mange gange en bestemt kunde har
    // købt ind, og skriv værdien her.
    var indkobsGange = 0;

    document.getElementById('indkob').innerHTML = indkobsGange;

    var fakturaTotalPris = 0;

                   // SELECT  * FROM Ordrelinie    WHERE ordrenr == ordrenummer
    var OrdreLinier = select("*",   "Ordrelinie", l => l.ordrenr == ordreNummer);

    
    var div = document.getElementById("tabel");
    
    for (var linie in OrdreLinier){

        var linie = OrdreLinier[linie];

        div.innerHTML += LavHTMLlinie(linie);
        fakturaTotalPris += linie.pris * linie.antal;
    }
    div.innerHTML += TotalHTML(fakturaTotalPris);
}

var ordreNummer = prompt("Indtast ordrenummer (101-107).");
while(!hentOrdre(ordreNummer)){
    ordreNummer = prompt("Ugyldigt ordrenummer!\n Indtast ordrenummer  (101-107).");
}

console.log(ordreNummer);
VisFaktura(ordreNummer);
