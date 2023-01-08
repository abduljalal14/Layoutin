let bahan; //Nama bahan
let tinggi; //panjang file gambar mm
let lebar; // lebar file gambar mm
let pcs; // jumlah cetak pcs
let lebarA3 = 310;  // satuan mm
let tinggiA3 = 470;
let jumlahA3;
let muat;// untuk menampung data 1 kertas A3 muat berapa pcs
const rim = 500;
const potongKertas = 10000;
const potongSticker = 15000;
let a3; // objek
let x, y;
let avatarImg;
let namafile;
let doc;
let statuspotong = '';
let warnaGp = 255;
let gp;

// mengembalikan baris dengan kolom

// mengecek apakah di layout secara horizontal / vertikal
function cekMuat() {
    let layout1;
    let layout2;
    layout1 = (parseInt(lebarA3 / lebar)) * (parseInt(tinggiA3 / tinggi));
    layout2 = (parseInt(lebarA3 / tinggi)) * (parseInt(tinggiA3 / lebar));
    // menentukan disusun horisontal atau vertikal
    // mengembalikan jumlah yang paling banyak
    if (layout1 > layout2) {
        x = lebar;
        y = tinggi
        return layout1;
    }
    else if (layout1 < layout2) {
        x = tinggi;
        y = lebar;
        return layout2;
    } else if (layout1==layout2) {
        if (lebarA3 < x * parseInt(lebarA3 / x)) {
            x = tinggi;
            y = lebar;
        } 
        x = lebar;
        y = tinggi;
        return layout2;
    }
    
}

// mengembalikan jumlah A3 yang dibutuhkan
function cekA3(pcs, muat) {
    let a3 = pcs / muat;
    return Math.ceil(a3);
}

function tampilHasil() {
    // Deklarasi element p sebagai view rincian
    let textbahan = document.getElementById("view_bahan");
    let textdimensi = document.getElementById("view_dimensi");
    let textmuat = document.getElementById("view_muatA3");
    let textpcs = document.getElementById("view_pcs");
    let textrealpcs = document.getElementById("view_realpcs");
    let textA3 = document.getElementById("view_A3");
    let texthargaA3 = document.getElementById("view_hargaA3");
    let textpotong = document.getElementById("view_potong");
    let textdesain = document.getElementById("view_desain");
    let texttotal = document.getElementById("view_total");
    let textname = document.getElementById("view_name");

    let biayaPotong = cekBiayaPotong(a3.jenis, pcs);
    let biayaDesain = cekBiayaDesain();
    // Menampilkan Output ke Div Rincian
    textbahan.innerHTML = a3.getJenis();
    textdimensi.innerHTML = lebar/10 + " x " + tinggi/10 + " CM";
    textmuat.innerHTML = muat;
    textpcs.innerHTML = pcs;
    textrealpcs.innerHTML = muat*jumlahA3;
    textA3.innerHTML = jumlahA3;
    texthargaA3.innerHTML = a3.getHarga();
    textpotong.innerHTML = biayaPotong;
    textdesain.innerHTML = biayaDesain;
    texttotal.innerHTML = jumlahA3*a3.getHarga()+biayaPotong+biayaDesain;
    textname.innerHTML = namafile;

}

function prosesData() {
    // data input
    gp = document.getElementById("checkgp");
    if (gp.checked == true) {
        warnaGp = 225;
    } else {
        warnaGp = 0;
    }
    bahan = document.getElementById("input_bahan").value;
    pcs = (document.getElementById("input_pcs").value);
    lebar = 10*(document.getElementById("input_panjang").value);
    tinggi = 10 * (document.getElementById("input_lebar").value);
    muat = cekMuat();
    jumlahA3 = cekA3(pcs, muat);
    // membuat objek A3 dari js/a3.js
    a3 = new A3(bahan, jumlahA3);

    tampilHasil();  

    gambarPDF(avatarImg, y, x);
 
}

function cekBiayaPotong(bahan, pcs) {
    let potongState = document.getElementById("input_potong");
    let totalRim = Math.ceil(pcs / rim);
    let biayaPotong = 0;
    if (potongState.checked == true) {
        statuspotong = '+potong';
        switch (bahan) {
            case 'ac': biayaPotong = totalRim * potongKertas; break;
            case 'ap': biayaPotong = totalRim * potongKertas; break;
            case 'hvs': biayaPotong = totalRim * potongKertas; break;
            case 'fc': biayaPotong = totalRim * potongKertas; break;
            case 'sc': biayaPotong = totalRim * potongSticker; break;
            case 'sv': biayaPotong = totalRim * potongSticker; break;
            case 'st': biayaPotong = totalRim * potongSticker; break;
            default: biayaPotong = 0; break;
        }
    } 
    return biayaPotong;
}
function cekBiayaDesain() {
    let desainState = document.getElementById("input_desain");
    // Jika desain di pilih maka
    if (desainState.checked == true) {
        return 20000;
    }
    return 0;
}

// membuat url gambar
function readURL(input) {
    // mengambil nama file
    let fullPath = document.getElementById('input_gambar').value;
    if (fullPath) {
        let startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
        let file = fullPath.substring(startIndex);
        if (file.indexOf('\\') === 0 || file.indexOf('/') === 0) {
            file = file.substring(1);
            namafile = file.split('.').slice(0, -1).join('.')
        }
    }
    // mengambil url file
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        let preview = document.getElementById("image-preview");
        reader.addEventListener(
            "load",
            function () {
                avatarImg = new Image();
                let src = reader.result;
                avatarImg.src = src;
                preview.src = src;
                
            },
            false
        );
        reader.readAsDataURL(input.files[0]);
    }
}

// generate pdf
function gambarPDF(url, t, l) {
    let lebarKonten = l * parseInt(lebarA3 / l);
    let tinggiKonten = t * parseInt(tinggiA3 / t);
    let padRL = (lebarA3 - lebarKonten) / 2;
    let padTB = (tinggiA3 - tinggiKonten) / 2;

    doc = new jsPDF('p', 'mm', [470, 310]);
    doc.setFont('arial', 'normal');
    
    // menyusun gambar
    for (let b = 0; b < parseInt(tinggiA3 / t); b++) {
        for (let k = 0; k < parseInt(lebarA3 / l); k++) {
            doc.addImage(url, 'JPEG', padRL + lebar * k, padTB + tinggi * b, lebar, tinggi);
        }
    }

    // membuat garis potong
    for (let b = 0; b < parseInt(tinggiA3 / t)+1; b++) {
        for (let k = 0; k < parseInt(lebarA3 / l) + 1; k++) {
            doc.setDrawColor(warnaGp, 0, 0); 
            doc.line(k * lebar + padRL - 3, b * tinggi + padTB, k * lebar + padRL + 3, b * tinggi + padTB);
            doc.line(k * lebar + padRL, b * tinggi + padTB - 3, k * lebar + padRL, b * tinggi + padTB + 3);
        }
    }

    doc.setProperties({
        title: 'Dokumenku',
        subject: 'Dibuat oleh Abdul Jalal',
        author: 'Abdul Jalal',
        keywords: 'generated, javascript, web 2.0, ajax',
        creator: 'ABDUL JALAL'
    });
    // menampilkan hasil generate pdf ke iframe
    document.getElementById('iframepdf').src = doc.output('bloburl');
}

function unduhPDF() {
    let namalengkap = namafile + " ctk " + " " + a3.getJenis() + " @" + jumlahA3 +"x "+statuspotong+".pdf";
    doc.save(namalengkap);
}



