let numero=0;
document.write("<table style='border: 1px solid black;'>");

for(var i=1;i<=10;i++)
{
    document.write("<tr>");
    for(var j=1;j<=10;j++)
    {
        numero++;
        document.write("<td style='border: 1px solid black'>");
        document.write(numero);
        document.write("</td>")
    }
    document.write("</tr>");
}
document.write("</table>");