
//OBJECT
// const siswa1 = {
//     nama : "Kng Fadilll",
//     jenKel : "L",
//     umur : "Unlimited",
//     wfavorit : "Kegelapan",
//     // ARRAY BISA DALAM OBJECT 
//     seragam : ["osis", 'identitas',' wearpack',' pramuka',' olahraga']
// }
// const siswa2 = {
//     nama : "Riski",
//     jenKel : "L",
//     umur : "16",
//     wfavorit : "merah",
//     seragam : ["osis", 'identitas',' wearpack',' pramuka',' olahraga']
// }
// const siswa3 = {
//     nama : "Ambar",
//     jenKel : "P",
//     umur : "16",
//     wfavorit : "ungu",
//     seragam : ["osis", 'identitas', 'wearpack', 'pramuka',' olahraga']
// }
// const siswa4 = {
//     nama : "Mila",
//     jenKel : "P",
//     umur : "18",
//     wfavorit : "biru",
//     seragam : ["osis", 'identitas', 'wearpack', 'pramuka', 'olahraga']
// }
// const siswa5 = {
//     nama : "Bagas",
//     jenKel : "L",
//     umur : "15",
//     wfavorit : "coklat",
//     seragam : ["osis", 'identitas',' wearpack', 'pramuka', 'olahraga']
// }

// OBJECT DALAM ARRAY

daftarsiswa = [
    {
        nama : "King Fadilll",
        jenKel : "L",
        umur : "18",
        wfavorit : "Kegelapan",
        // ARRAY BISA DALAM OBJECT 
        seragam : ["osis", 'identitas',' wearpack',' pramuka',' olahraga']
    },
    {
        nama : "Riski",
        jenKel : "L",
        umur : "16",
        wfavorit : "merah",
        seragam : ["osis", 'identitas',' wearpack',' pramuka',' olahraga']
    },
    {
        nama : "Ambar",
        jenKel : "P",
        umur : "16",
        wfavorit : "ungu",
        seragam : ["osis", 'identitas', 'wearpack', 'pramuka',' olahraga']
    },
    {
        nama : "Mila",
        jenKel : "P",
        umur : "18",
        wfavorit : "biru",
        seragam : ["osis", 'identitas', 'wearpack', 'pramuka', 'olahraga']
    },
    {
        nama : "Bagas",
        jenKel : "L",
        umur : "15",
        wfavorit : "coklat",
        seragam : ["osis", 'identitas',' wearpack', 'pramuka', 'olahraga']
    }
]

let mode ="tambah"

// CREAT , READ , UPDATE , DELETE

// function tampilkansiswa () {

// }

//=========== ARROW FUNCTION ===========\\


        //======READ=====\\
        //======READ=====\\
        //======READ=====\\


const tampilkansiswa = () => {
    
    const tblsiswa = document.getElementById("tblsiswa")
    tblsiswa.innerHTML = '<tr><th>No</th><th>Nama</th><th>jenKel</th><th>umur</th><th>wfavorit</th><th>Hapus</th><th>Edit</th></tr> '

    for (let siswa in daftarsiswa){
        console.log(`${parseInt(siswa) + 1}. Nama :${daftarsiswa[siswa].nama}. 
   Umur : ${daftarsiswa[siswa].umur}. 
   Jenis kelamin :${daftarsiswa[siswa].jenKel}. 
   Suka warna : ${daftarsiswa[siswa].wfavorit}. 
   Seragam : ${daftarsiswa[siswa].seragam}`)

    //mengakses dom

    //menambah isinya
    tblsiswa.innerHTML += ` <tr><td>${parseInt(siswa) + 1}</td><td>${daftarsiswa[siswa].nama}</td><td>${daftarsiswa[siswa].jenKel}</td><td>${daftarsiswa[siswa].umur}</td><td>${daftarsiswa[siswa].wfavorit}</td><td><button class="btn btn-warning" onclick="editsiswa('${daftarsiswa[siswa].nama}')">Edit</button></td> </td><td><button class="btn btn-danger" onclick= "hapussiswa('${daftarsiswa[siswa].nama}') + tampilkansiswa()">Hapus</button></td></tr> `
    }

}

        //=====CREAT=====\\
        //=====CREAT=====\\
        //=====CREAT=====\\


const tambahsiswa = () => {
    const nama = document.getElementById("txtNama").value
    const jenkel = document.getElementById("slcjk").value
    const umur = document.getElementById("umur").value
    const wfavorit = document.getElementById("Fwarna").value

    const siswabaru = {
        nama : nama,
        jenKel: jenkel,
        umur : umur,
        wfavorit: wfavorit,
        seragam : ["osis", 'identitas',' wearpack', 'pramuka', 'olahraga']
    }

    //jika tambah
    if (mode == 'tambah'){
        daftarsiswa.push(siswabaru)
    } else {
        daftarsiswa[mode] = siswabaru 
    }

    document.getElementById("txtNama").value = ""
    document.getElementById("slcjk").value = ""
    document.getElementById("umur").value = ""
    document.getElementById("Fwarna").value = ""
    
    mode = 'tambah'

}


        //=====DELETE=====\\
        //=====DELETE=====\\
        //=====DELETE=====\\



            //========= DALAM BENTUK PROMPT ===========\\
            

// const hapussiswa = (hapus = prompt('Masukan nama member yang ingin di kick')) => {
//     for (let i = 0; i < daftarsiswa.tdngth; i++){
//         if (daftarsiswa[i].nama === hapus){
//             daftarsiswa.splice(i,1)
//         }
//     }
// }

// const carisiswa = (nama) => {
//     // tampilkan siswa juga nama siswa == siswa
// }

            //========= DALAM BENTUK PROMPT ===========\\

const cariindex = (nama)=> {
    //tampilan index jika nama siswa == nama
    for (let i = 0; i < daftarsiswa.length; i++){
        if (daftarsiswa[i].nama == nama){
            return i
        }
    }
}

const hapussiswa = (target) => {
    const indexdihapus = cariindex(target)
    //menghapus elemen dari dalam array
    daftarsiswa.splice(indexdihapus,1)

    
}


        //=====UPDATE====\\
        //=====UPDATE====\\
        //=====UPDATE====\\


const editsiswa = (target) => {
    const indexEdit = cariindex(target)

    // const namabaru = document.getElementById("txtNama").value
    // const jenkelbaru = document.getElementById("slcjk").value
    // const umurbaru = document.getElementById("umur").value
    // const wfavoritbaru = document.getElementById("Fwarna").value

    // daftarsiswa[indexEdit] = {
    //     nama : namabaru,
    //     jenKel: jenkelbaru,
    //     umur : umurbaru,
    //     wfavorit: wfavoritbaru,
    // }
    console.log(target)
    console.log(indexEdit)

    console.log(daftarsiswa[indexEdit])

    document.getElementById("txtNama").value = target;
    document.getElementById("slcjk").value = daftarsiswa[indexEdit].jenKel ;
    document.getElementById("umur").value = daftarsiswa[indexEdit].umur ;
    document.getElementById("Fwarna").value = daftarsiswa[indexEdit].wfavorit ;
  
    mode = indexEdit
}

        //===== CLEAR =====\\
        //===== CLEAR =====\\
        //===== CLEAR =====\\


const cancel = () => {

    document.getElementById("txtNama").value = ""
    document.getElementById("slcjk").value = ""
    document.getElementById("umur").value = ""
    document.getElementById("Fwarna").value = ""
    
    mode = 'tambah'
}

