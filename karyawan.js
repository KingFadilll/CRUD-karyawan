                            //================VARIABEL=================\\
//OBJECT ARRAY\\

daftarkaryawan = [
    {
        nama : "Deni Suargo",
        id : "1234567890",
        masakerja : "10",
        gaji : "Rp. 7.000.000",
    },
    {
        nama : "Dani Cakwe",
        id : "1123456789",
        masakerja : "5",
        gaji : "Rp. 4.000.000",
    },
    
]

let mode = 'tambah'


            //======READ=====\\

            const tampilkankaryawan = () => {
    
                const tblkaryawan = document.getElementById("tblkaryawan")
                tblkaryawan.innerHTML = '<tr><th>No</th><th>Nama</th><th>Id</th><th>Masa Kerja</th><th>Gaji</th><th>Edit</th><th>Hapus</th></tr> '
            
                for (let karyawan in daftarkaryawan){
                    console.log(`${parseInt(karyawan) + 1}. Nama :${daftarkaryawan[karyawan].nama}. 
               Id : ${daftarkaryawan[karyawan].id}. 
               Masa kerja :${daftarkaryawan[karyawan].masakerja}. 
               Gaji : ${daftarkaryawan[karyawan].gaji}`)
            
                //mengakses dom
            
                //menambah isinya
                tblkaryawan.innerHTML += ` <tr><td>${parseInt(karyawan) + 1}</td><td>${daftarkaryawan[karyawan].nama}</td><td>${daftarkaryawan[karyawan].id}</td><td>${daftarkaryawan[karyawan].masakerja}</td><td>${daftarkaryawan[karyawan].gaji}</td><td><button class="btn btn-warning" onclick="editkaryawan('${daftarkaryawan[karyawan].nama}')">Edit</button></td> </td><td><button class="btn btn-danger" onclick= "hapuskaryawan('${daftarkaryawan[karyawan].nama}') + tampilkankaryawan()">Hapus</button></td></tr> `
                }
            
            }
            //======CREAT=====\\


// const tambahkaryawan = () => {
//     const nama = document.getElementById("txtNama").value
//     const id = document.getElementById("idkaryawan").value
//     const masakerja = document.getElementById("masakerja").value
//     const gaji = ''
            
//     const karyawanbaru = {
//         nama : nama,
//         id : id,
//         masakerja : masakerja, 
//         gaji : gaji
//     } 
//     if (karyawanbaru.masakerja < 6 ){
//         karyawanbaru.gaji = 'Rp. 4.000.000'
//     } else {
//         karyawanbaru.gaji = 'Rp. 7.000.000'
//     }

//     DaftarKaryawan.push(karyawanbaru)
// }

const tambahkaryawan = () => {
    const nama = document.getElementById("txtNama").value
    const id = document.getElementById("idkaryawan").value
    const masakerja = document.getElementById("masakerja").value
    const gaji = ''

    const karyawanbaru = {
        nama : nama,
        id: id,
        masakerja: masakerja,
        gaji : gaji
    }

    if (karyawanbaru.masakerja < 6 ){
        karyawanbaru.gaji = 'Rp. 4.000.000'
    } else {
        karyawanbaru.gaji = 'Rp. 7.000.000'
    }

    //jika tambah
    if (mode == 'tambah'){
        daftarkaryawan.push(karyawanbaru)
    } else {
        daftarkaryawan[mode] = karyawanbaru 
    }

    document.getElementById("txtNama").value = ""
    document.getElementById("idkaryawan").value = ""
    document.getElementById("masakerja").value = ""
    
    mode = 'tambah'

}



        //=====UPDATE=====\\

const cariindex = (nama)=> {
    //tampilan index jika nama karyawan == nama
    for (let i = 0; i < daftarkaryawan.length; i++){
        if (daftarkaryawan[i].nama == nama){
            return i
        }
    }
}
        
// const editkaryawan = (target) => {
//     const editkaryawan = cariindex(target)

//     const namabaru = document.getElementById("txtNama").value
//     const idbaru = document.getElementById("txtNama").value
//     const masakerjabaru = document.getElementById("txtNama").value

//     daftarkaryawan[editkaryawan] = {
//         nama : namabaru,
//         id: idbaru,
//         masakerja : masakerjabaru,
//     }
//     if (masakerjabaru > 6 ){
//         gajibaru.push('Rp.4.000.000')
        
//     }
//     else {
        
//     }
// }

const editkaryawan = (target) => {
    const indexEdit = cariindex(target)

    console.log(target)
    console.log(indexEdit)

    console.log(daftarkaryawan[indexEdit])

    document.getElementById("txtNama").value = target;
    document.getElementById("idkaryawan").value = daftarkaryawan[indexEdit].id ;
    document.getElementById("masakerja").value = daftarkaryawan[indexEdit].masakerja ;
  
    mode = indexEdit
}

        //===== CLEAR =====\\
        //===== CLEAR =====\\
        //===== CLEAR =====\\


const cancel = () => {

    document.getElementById("txtNama").value = ""
    document.getElementById("idkaryawan").value = ""
    document.getElementById("masakerja").value = ""
    
    mode = 'tambah'
}

        //=====DETELETE=====\\
        
    // const hapuskaryawan = (target) => {
    //     const indexdihapus = cariiindex(target)
    //     //menghapus elemen dari dalam array
    //     DaftarKaryawan.splice(indexdihapus,1)
    // }


    const hapuskaryawan = (target) => {
        const indexdihapus = cariindex(target)
        //menghapus elemen dari dalam array
        daftarkaryawan.splice(indexdihapus,1)
    
        
    }
    