/*BErnd Altmanninger*/
var U;
var A;
function fub(f) {
    return(U = (2*f*Math.PI))
}
function fab(u) {
    return (A =(u*u))
}


document.write('<table>');
document.write('<th>');
document.write('<tr>');
document.write("r");
document.write('</tr>');
document.write('<tr>');
document.write("U");
document.write('</tr>')
;document.write('<tr>');
document.write("A");
document.write('</tr>');
document.write('</th>');
//1. 3,5
document.write('<td>');
document.write('<tr>');
document.write("3.5");
document.write('</tr>');
document.write('<tr>');
document.write(fub(3));
document.write('</tr>');
document.write('<tr>');
document.write(fab(fub(3)));
document.write('</tr>');
//2. 5.5
document.write('<td>');
document.write('<tr>');
document.write("3.5");
document.write('</tr>');
document.write('<tr>');
document.write(fub(5.5));
document.write('</tr>');
document.write('<tr>');
document.write(fab(fub(5.5)));
document.write('</tr>');
//3. 7
document.write('<td>');
document.write('<tr>');
document.write("7");
document.write('</tr>');
document.write('<tr>');
document.write(fub(7));
document.write('</tr>');
document.write('<tr>');
document.write(fab(fub(U)));
document.write('</tr>');
//4. 11
document.write('<td>');
document.write('<tr>');
document.write("11");
document.write('</tr>');
document.write('<tr>');
document.write(fub(11));
document.write('</tr>');
document.write('<tr>');
document.write(fab(fub(U)));
document.write('</tr>');
//5. 18,1
document.write('<td>');
document.write('<tr>');
document.write("18.1");
document.write('</tr>');
document.write('<tr>');
document.write(fub(18.1));
document.write('</tr>');
document.write('<tr>');
document.write(fab(fub(U)));
document.write('</tr>');
//6. 66
document.write('<td>');
document.write('<tr>');
document.write("3.5");
document.write('</tr>');
document.write('<tr>');
document.write(fub(66));
document.write('</tr>');
document.write('<tr>');
document.write(fab(fub(66)));
document.write('</tr>');
//7. 75
document.write('<td>');
document.write('<tr>');
document.write("3.5");
document.write('</tr>');
document.write('<tr>');
document.write(fub(75));
document.write('</tr>');
document.write('<tr>');
document.write(fab(fub(U)));
document.write('</tr>');

document.write('</table>');

