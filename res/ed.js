// <!-- 2036116557
// This script is (C) Copyright 2004 Jim Tucek
// Leave these comments alone!  For more info, visit
// www.jracademy.com/~jtucek/email/ 

function bear(alchemist,sponge,shrub) {
alchemist += ' ';
var artist = alchemist.length;
var bus = 0;
var horse = '';
for(var hair = 0; hair < artist; hair++) {
bus = 0;
while(alchemist.charCodeAt(hair) != 32) {
bus = bus * 10;
bus = bus + alchemist.charCodeAt(hair)-48;
hair++;
}
horse += String.fromCharCode(smite(bus,sponge,shrub));
}
parent.location = 'm'+'a'+'i'+'l'+'t'+'o'+':'+horse;
}

function forsake(singer,face,whine) {
singer += ' ';
var city = singer.length;
var tail = 0;
for(var coordinated = 0; coordinated < city; coordinated++) {
tail = 0;
while(singer.charCodeAt(coordinated) != 32) {
tail = tail * 10;
tail = tail + singer.charCodeAt(coordinated)-48;
coordinated++;
}
//document.write('&');
//document.write('#');
//document.write(smite(tail,face,whine));
document.write(String.fromCharCode(smite(tail,face,whine)));
}
}

function smite(cost,goodbye,speech) {
if (speech % 2 == 0) {
government = 1;
for(var hour = 1; hour <= speech/2; hour++) {
historian = (cost*cost) % goodbye;
government = (historian*government) % goodbye;
}
} else {
government = cost;
for(var broad = 1; broad <= speech/2; broad++) {
historian = (cost*cost) % goodbye;
government = (historian*government) % goodbye;
}
}
return government;
}
// -->
