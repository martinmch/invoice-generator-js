var tabel = "<tr class='heading'> \
                <td> varenr </td> \
                <td> navn </td> \
                <td> pris </td> \
              </tr>";
for (var vare in Varer){
    var vare = Varer[vare];
    tabel += "<tr class='item'> \
                <td>"+vare.varenr+"</td> \
                <td>"+vare.navn+"</td> \
                <td>"+vare.pris+"</td> \
              </tr>";
}

document.getElementById('tabel').innerHTML += tabel;
document.getElementById('tabel').innerHTML += "test";