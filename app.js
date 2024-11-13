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

let karyawanSenior = []

//================PERULANGAN================\\

for (let i = 0; i < nama.length; i++) {
    //cek masa kerja
    if (masaKerja[i] < 6 ){
        //jika ketemu
        karyawanJunior.push(nama[i])
        
    }
    else {
        karyawanSenior.push(nama[i])

    }
}

//================K.JUNIOR================\\

console.log('Daftar karyawan junior :')

// //for untuk menampilkan daftar karyawanJunior secara urut
// for (let i = 0; i < karyawanJunior.length; i++){
//     console.log((i+1)+". "+karyawanJunior[i])
// }


//FOR IN
for (let index in karyawanJunior ){
    console.log(`${index}.${karyawanJunior[index]}`)
}

//================K.SENIOR================\\

console.log('Daftar karyawan senior :')


// for (let i = 0; i < karyawanSenior.length; i++){
//     console.log((i+1)+". "+karyawanSenior[i])
// }

for (let index in karyawanSenior ){
    console.log(`${index}.${karyawanSenior[index]}`)
}