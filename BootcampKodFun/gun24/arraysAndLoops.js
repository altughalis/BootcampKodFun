let dizi = ["betül", "seviye", "güneş", "ati", "nur", "gürkan", "burak"];
console.log("dizi uzunluğu: " + dizi.length);
console.log("ilk eleman: " + dizi[0]);
console.log("son eleman: " + dizi[dizi.length - 1]);

// array/dizi birleştirme
let birlesik = dizi.join("<>");
console.log(birlesik);

console.log("-------------------------");
// array/dizi üzerinde dönme yöntemleri:

// 1: for:
for (let i = 0; i < dizi.length; i++) console.log(i + " " + dizi[i]);
console.log("-------------------------");

// 2: for ...in
for (let i in dizi) console.log(i + " " + dizi[i]);
console.log("-------------------------");

// 3: for ...of
for (const oge of dizi) console.log(oge);
console.log("-------------------------");

// 4: forEach (her eleman için fonksiyonu uygular)
dizi.forEach(function (value, index) {
  console.log(index + " : " + value);
});
console.log("-------------------------");

// forEach kısa yazım
dizi.forEach((v, i) => console.log(i + " > " + v));
console.log("-------------------------");

// 5: while:
let sayac = 0;
while (sayac < dizi.length) console.log(sayac + " | " + dizi[sayac++]);
console.log("-------------------------");

// tersten
// for(let i = dizi.lenght-1)
