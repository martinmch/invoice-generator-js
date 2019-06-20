var tabel = "<tr class='heading'> \
                <td> ordrenr </td> \
                <td> ordredato </td> \
                <td> kundenr </td> \
              </tr>";
for (ordre in Ordrer){
    var ordre = Ordrer[ordre];
    tabel += "<tr class='item'> \
                <td>"+ordre.ordrenr+"</td> \
                <td>"+ordre.ordredato+"</td> \
                <td>"+ordre.kundenr+"</td> \
              </tr>";
}
document.getElementById('tabel').innerHTML += tabel;