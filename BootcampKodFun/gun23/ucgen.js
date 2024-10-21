// repeat  yöntemi:

// for (let i = 1; i <= 7; i++) {
//   console.log("*".repeat(i));
// }

for (let i = 1; i <= 7; i++) {
  let yazilacak = ""; 

  for (let j = 0; j < i; j++) yazilacak += "-";
  console.log(yazilacak);
}
