document.write('<table border="1">');
document.write('<tr>');

document.write('<td>Zahl<\/td>');
document.write('<td>sKobik<\/td>');

document.write('<\/tr>');

for (i = 10; i <= 20; i++) {
    document.write('<tr>');
    var Ausgabe = '<td align="center">' + i + '<\/td>';

    Ausgabe = Ausgabe + '<td>' + i*i*i + '<\/td>';

    document.write(Ausgabe);
    document.write('<\/tr>');
}
document.write('<\/table>');