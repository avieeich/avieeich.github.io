var t = parseFloat(document.getElementById('temperature').textContent);
var s= parseFloat(document.getElementById('windSpeed').textContent);
if (t<=50 && s>3){
var f= Math.round(35.74 + 0.6215*t-35.75*Math.pow(s,0.16)+0.4275*t*Math.pow(s,0.16));
document.getElementById('windchill').innerHTML=f;
}
else{
    document.getElementById('windchill').innerHTML="N/A";
}
