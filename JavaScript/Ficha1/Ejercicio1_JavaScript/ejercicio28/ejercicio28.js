
var a = 0;
for(var j = 0; j < 10; j++){
    document.write("<tr>");
    for(var k = 1; k < 10 ; k++){
        document.write("");
     document.write(a+k +" ");
    }
    a = a+10;
    document.write("<tr/>");
}