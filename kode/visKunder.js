var tabel = "<tr class='heading'> \
                <td> kundenr </td> \
                <td> fornavn </td> \
                <td> efternavn </td> \
              </tr>";

for (kunde in Kunder){
    var kunde = Kunder[kunde];
    tabel += "<tr class='item'> \
                <td>"+kunde.kundenr+"</td> \
                <td>"+kunde.fornavn+"</td> \
                <td>"+kunde.efternavn+"</td> \
              </tr>";
}

document.getElementById('tabel').innerHTML += tabel;