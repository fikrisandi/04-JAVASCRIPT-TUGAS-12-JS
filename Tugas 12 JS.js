function buahbuahan() {
    var buah = ['Naga', 'jeruk', 'Anggur', 'Durian'];
    console.log(buah);
    buah.pop();
    console.log(buah);
    buah.shift();
    return buah;
}

console.log(buahbuahan());