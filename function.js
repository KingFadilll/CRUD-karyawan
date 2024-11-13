//================VARIABEL=================\\

let nama =[

    'Devyn Ramirez', 
    'Harmony Duncan', 
    'Clarissa Burgess', 
    'Reilly Blanchard', 
    'Zion Brooks', 
    'Jovanny Mays', 
    'Cindy Chase', 
    'Kristin Mcdaniel', 
    'Macey Sanford', 
    'Alfredo Faulkner', 
]

let masaKerja =[ 
        '10',
        '5',
        '8',
        '7',
        '4',
        '10',
        '9',
        '8',
        '7',
        '10',
]

let karyawanJunior = []
let gajiJunior = '4.000.000'

let karyawanSenior = []
let gajiSenior = '7.000.000'


            //================ DAFTAR JUNIOR & SENIOR ================\\

function DaftarKaryawan () {
for (let i = 0; i < nama.length; i++) {
//MENENTUKAN JUNIOR DAN SENIOR  
if (masaKerja[i] < 6 ){
//jika ketemu
karyawanJunior.push(nama[i])
}
else {
//jika tidak ketemu
karyawanSenior.push(nama[i])
}
}

//========== JUNIOR =========\\
console.log('Daftar karyawan junior :')
//for untuk menampilkan daftar karyawanJunior secara urut 
for (let i = 0; i < karyawanJunior.length; i++){
console.log((i+1)+". "+karyawanJunior[i])
}

//========== SENIOR =========\\
console.log('Daftar karyawan senior :')
//for untuk menampilkan daftar karyawanSenior secara urut
for (let i = 0; i < karyawanSenior.length; i++){
console.log((i+1)+". "+karyawanSenior[i])
} 
}

DaftarKaryawan()    

            //================ TAMPILKAN GAJI ================\\

function TampilkanGaji (){
for (let i = 0; i < nama.length; i++) {
//MENENTUKAN JUNIOR DAN SENIOR  
if (masaKerja[i] < 6 ){
//jika ketemu
karyawanJunior.push(nama[i])
// console.log(`Karyawan ${nama[i]} Mendapat gaji Rp. ${gajiJunior}`)
}
else {
karyawanSenior.push(nama[i])
// console.log(`Karyawan ${nama[i]} Mendapat gaji Rp.${gajiSenior}`)
}
}

//========== JUNIOR =========\\
console.log('Daftar karyawan junior :')
//for untuk menampilkan daftar karyawanJunior secara urut beserta gajinya
for (let i = 0; i < karyawanJunior.length; i++){
console.log((i+1)+". "+karyawanJunior[i]+' Mendapat gaji : Rp.'+gajiJunior)
}

//========== SENIOR =========\\
console.log('Daftar karyawan senior :')
//for untuk menampilkan daftar karyawanSenior secara urut
for (let i = 0; i < karyawanSenior.length; i++){
console.log((i+1)+". "+karyawanSenior[i]+' Mendapat gaji : Rp.'+gajiSenior)
}

}
TampilkanGaji()