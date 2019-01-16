document.write('<table border="1">');
//Reihe
document.write('<tr>');
//Zelle
document.write('<td>Zeichenfolge:<\/td>');
document.write('<\/tr>');

//Zeichenfolge
//Schleife für alle Zellen
for (i = 9; i >= 0; i--) {
    document.write('<tr>');
    var zeichenfolge="";

    //Schleife für Zahlenfolge in jeder einzelen Zelle
    for(x=0;x<=i;x++){
        zeichenfolge=zeichenfolge+""+x
    }

    var Ausgabe ='<td>' +zeichenfolge+ '<\/td>';

    document.write(Ausgabe);
    document.write('<\/tr>');
}
document.write  ('<\/table>');