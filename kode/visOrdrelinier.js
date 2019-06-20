var tabel = "<tr class='heading'> \
                <td> ordrenr </td> \
                <td> ordrelinienr </td> \
                <td> antal </td> \
                <td> varenr </td> \
                <td> pris </td> \
              </tr>";
for (ordrelinie in Ordrelinier){
    var ordrelinie = Ordrelinier[ordrelinie];
    tabel += "<tr class='item'> \
                <td>"+ordrelinie.ordrenr+"</td> \
                <td>"+ordrelinie.ordrelinienr+"</td> \
                <td>"+ordrelinie.antal+"</td> \
                <td>"+ordrelinie.varenr+"</td> \
                <td>"+ordrelinie.pris+"</td> \
              </tr>";
}
document.getElementById('tabel').innerHTML += tabel;