//TUGAS NO 1
// let input= prompt("masukan angka ")

// if(input <0){
//     document.write("negtif")
// }else if (input >0){
//     document.write("positif ")
// }else if (input == 0){
//     document.write("netral")
// }else{
//     document.write("masukan angka")
// }

//TGAS NO 2
// let umur =prompt("berapa usiamu")
// if(umur >=17){
//     document.write("sudah punya SIM")
// }else{
//     document.write("belum punya sim")
// }

//TUGAS NO 3
// let x =prompt("masukan nilaai x")
// let y =prompt("masukan nilai y")
// if(x>0 & y>0){
//     console.log('player berada di kanan atas')
// }else if(x<0 & y<0){
//     console.log('player dikiri atas')
// }else if (x>0 & y< 0){
//     console.log('player berada dikanan bawah')
// }else if(x<0 &y>0){
//     console,log('player berada dikiri bawah')
// }else if(x ==0 & y==0){
//     console.log('netral')
// }else if(x==0 & y>0){
//     console.log('player diatas')
// }else if(x== 0 & y<0){
//     console.log('player dibawah')
// }else if(x>0 & y==0){
//     console.log('player dikanan')
// }else if(x < 0 & y==0){
//     console.log('player berada dibawah')
    
// }else{
//     console.log('masukan input yang tepat')
// }


//looping = perulangan 
// Counted loop =>for, forech, map 
//uncounted loop =>While, do while

// for(let i=0; i<10; i++){
//    document.write(i);
// }

// const Tired = ()=> {

// }

// const Run = ()=> {

// }

// while (!Tired){
//     Run();

// }


//TUGAS NAMA
// for(let i=0; i<20; i++){
//     console.log("saya");
//  }

//TUGAS 1-20
//  for(let i=0; i<20; i++){
//    console.log(i + 1);
//  }

//TUGAS KELIPATAN 5
// for(let k=1; k<=20 ; k++ ){
//     console.log(k * 5)
// }

// for(let i=5; i<=100; i+=5){
//     console.log(i);
//   }

//BILANGAN GENAP
// for(let i=1; i<=4; i++){
//     console.log( i* 2)
// }

//BILANGAN GANJIL
// for(let i=1; i<=10; i+=2){
//     console.log(i)
// }

//PERULANGAN MENGGUNAKAN PROMPT
// let satu = prompt("masukan angka")
// let dua = prompt("masukan yang ke dua")
// // let dua = prompt("diulang berapakali")

// for(i=satu ; i<=dua; i++){
//     console.log("")
// }

// //SWICH CASE 
// let sa = prompt("saa")
// let kartu = [2 , 4 , 6 , 8 , 10, 12];
// for (i=1; i<=sa; i++){
// let angka = Math.floor(Math.random () * 6 +1);
    // switch(angka){
    //     case 1:
    //         console.log(`dadu pertama ${kartu[0]} kartu`);
    //         break;
    //     case 2:
    //         console.log(`dadu kedua ${kartu[1]} kartu`)
    //         break;
    //     case 3:
    //         console.log(`dadu ketiga ${kartu[2]} kartu`)
    //         break;
    //     case 4:
    //         console.log(`dadu keempat ${kartu[3]} kartu`)
    //         break;
    //     case 5:
    //         console.log(`dadu kelima ${kartu[4]} kartu`)
    //         break;
    //     case 6:
    //         console.log(`dadu keenam ${kartu[5]} kartu`)
    //         break;
    //     default:
    //         break;
    // }
    
// }


//ARRAY
//sebuah cara untuk menyimpan banyak tipe data
// let arr =["orek", "opor", "telor balado", "nasi"]
// arr.push("esjeruk");
// arr.pop();
// arr.shift()
// arr.splice(1,3)//(index awal,terhitung dri index)

//cara mengkonsol
// arr.forEach((food) => {
//     console.log(food)
// });
// arr.map((food) => {
//     console.log(food)
// });
// for(let i=0; i<arr.length; i++){
//     console.log(arr[i])
// }
// console.log(arr[0])
// console.log(arr)

// let saya=["toyota", "honda", "yamaha", "google", "telkomsel","cfc","menantea"]

// console.log(saya)
// console.log(saya[2])


// saya.push("kfc")
// saya.pop()
// saya.unshift("kopiKenangan")
// saya.shift()
// saya.splice(1,2)

// for(let i=0; i<saya.length ; i++){
//     console.log(saya[i] + " " +saya[i])
// }
// saya.forEach((item) => {
//     console.log(item)
// });


// let d=prompt("yaya")
// switch(d){
//     case "toyota":
//         console.log(saya[0] + ' supra')
//         break;
//     case "honda":
//         console.log(saya[1] +" revo")
//         break;
//     case "yamaha":
//         console.log(saya[2]+" semakin didepan")
//         break;
//     case "google":
//         console.log(saya[3]+ " yaudah lah")
//         break;
//     case "telkomsel":
//         console.log(saya[4]+ " jaringan terpecaya")
//         break;
//     case "cfc":
//         console.log(saya[5]+ " enak")
//         break;
//     case"menantea":
//        console.log(saya[6]+ " teh")
//        break;
//        default:
//  }
// console.log(saya)

//ARROW FUNCTIO
// const tambah = (angka) =>{
//     let sa = parseInt(prompt("saa"))
//     for (i=1; i<=sa; i++){
//         let angka = Math.floor(Math.random () * 6 +1);
//         switch(angka){
//             case 1:
//                 console.log(`dadu pertama ${kartu[0]} kartu`)
//                 break;
//             case 2:
//                 console.log(`dadu kedua ${kartu[1]} kartu`)
//                 break;
//             case 3:
//                 console.log(`dadu ketiga ${kartu[2]} kartu`)
//                 break;
//             case 4:
//                 console.log(`dadu keempat ${kartu[3]} kartu`)
//                 break;
//             case 5:
//                 console.log(`dadu kelima ${kartu[4]} kartu`)
//                 break;
//             case 6:
//                 console.log(`dadu keenam ${kartu[5]} kartu`)
//                 break;
//             default:
//                 break;
//         };
// }
// }
// console.log(tambah)
// tambah()


let bermain = [2, 2, 3, 3, 1, 4, 5];
let total = 0;
let melebihi = 0;

for (let i = 0; i < bermain.length; i++) {
  total += bermain[i];
  
  if (bermain[i] > 2) {
    melebihi++;
  }
}

console.log(`Total waktu bermain  ${total}`, "jam");
console.log("Jumlah melebihi batas waktu ", melebihi, "hari");