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

let nomerindukkaryawan = [
    1234567890,
    1123456789,
    1112345678,
    1111234567,
    1111123456,
    1111112345,
    1111111234,
    1111111123,
    1111111112,
    1111111111
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
//========== READ ME ==========\\
//========== READ ME ==========\\
//========== READ ME ==========\\
//========== READ ME ==========\\
//========== READ ME ==========\\

//SEBELUM OPEN TERMINAL, TULIS DULU FUNCTION YANG INGINN DIPANGGGIL\\

//========== READ ME ==========\\
//========== READ ME ==========\\
//========== READ ME ==========\\
//========== READ ME ==========\\
//========== READ ME ==========\\
  

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

//========== READ ME ==========\\
//========== READ ME ==========\\
//========== READ ME ==========\\
//========== READ ME ==========\\
//========== READ ME ==========\\

//SEBELUM OPEN TERMINAL, TULIS DULU FUNCTION YANG INGINN DIPANGGGIL\\

//========== READ ME ==========\\
//========== READ ME ==========\\
//========== READ ME ==========\\
//========== READ ME ==========\\
//========== READ ME ==========\\


                    //=============FOR IN==============\\
function ForIn () {
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

    console.log('Daftar karyawan junior :')
    let teh = 0
    for (let index in karyawanJunior ){
        teh = teh + 1
        console.log(`${teh}.${karyawanJunior[index]}`)
    }

    console.log('Daftar karyawan senior :')
    let kopi = 0
    for (let index in karyawanSenior ){
        kopi = kopi + 1
        console.log(`${kopi}.${karyawanSenior[index]}`)
    }
}              

//========== READ ME ==========\\
//========== READ ME ==========\\
//========== READ ME ==========\\
//========== READ ME ==========\\
//========== READ ME ==========\\

//SEBELUM OPEN TERMINAL, TULIS DULU FUNCTION YANG INGINN DIPANGGGIL\\

//========== READ ME ==========\\
//========== READ ME ==========\\
//========== READ ME ==========\\
//========== READ ME ==========\\
//========== READ ME ==========\\


                //==============FOR OF===============\\
function ForOF (){
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

    console.log('Daftar karyawan junior :')
    let teh = 0
    for (let index of karyawanJunior ){
            console.log(`${teh+=1}.${index}`)
        }

    console.log('Daftar karyawan senior :')
    let kopi = 0
    for (let index of karyawanSenior ){
            console.log(`${kopi+=1}.${index}`)
        }
}                

//========== READ ME ==========\\
//========== READ ME ==========\\
//========== READ ME ==========\\
//========== READ ME ==========\\
//========== READ ME ==========\\

//SEBELUM OPEN TERMINAL, TULIS DULU FUNCTION YANG INGINN DIPANGGGIL\\

//========== READ ME ==========\\
//========== READ ME ==========\\
//========== READ ME ==========\\
//========== READ ME ==========\\
//========== READ ME ==========\\


