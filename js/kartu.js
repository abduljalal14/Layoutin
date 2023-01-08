
let lebarA3 = 310;  // satuan mm
let tinggiA3 = 470;
let lebarKN = 55;
let tinggiKN = 90;
let orientasi = 'p';
let x, y;
let avatarImg1;
let avatarImg2;
let namafile = "File belum ada";
let doc;
let jenis = "Belum Dipilih"
let warnaGp = 255;

// Deklarasi 
let input_img2 = document.getElementById("input_gambar2"); 
let text_img2 = document.getElementById("text-img2");
let img_preview1 = document.getElementById("img-preview1");
let img_preview2 = document.getElementById("img-preview2");
let paper = document.getElementById("iframepdf");
let jenis_kartu = '';
let gp = document.getElementById("checkgp");


function jenisKartu() {
    jenis_kartu = document.getElementById("input_jenis").value;
    
    switch (jenis_kartu) {

        case 'knh1':
            console.log("You selected: " + jenis_kartu);
            sembunyikan2();
            landscape();
            jenis = "Kartu Nama 1mk";
            break;
        case 'knv1':
            console.log("You selected: " + jenis_kartu);
            sembunyikan2();
            potraite();
            jenis = "Kartu Nama 1mk";
            break;
        case 'knh2':
            console.log("You selected: " + jenis_kartu);
            tampilkan2();
            landscape();
            jenis = "Kartu Nama 2mk";
            break;
        case 'knv2':
            console.log("You selected: " + jenis_kartu);
            tampilkan2();
            potraite();
            jenis = "Kartu Nama 2mk";
            break;

        default:
            sembunyikan2();
            landscape();
            jenis = "Belum Dipilih"
            break;
    }
}

function readURL(input) {
    // mengambil nama file
    let fullPath = document.getElementById('input_gambar1').value;
    if (fullPath) {
        let startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
        file = fullPath.substring(startIndex);
        if (file.indexOf('\\') === 0 || file.indexOf('/') === 0) {
            file = file.substring(1);
            namafile = file.split('.').slice(0, -1).join('.')
        }
    }

    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.addEventListener(
            "load",
            function () {
                avatarImg1 = new Image();
                var src = reader.result;
                avatarImg1.src = src;
                img_preview1.src = src;
            },
            false
        );
        reader.readAsDataURL(input.files[0]);
    }
}

function readURL2(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.addEventListener(
            "load",
            function () {
                avatarImg2 = new Image();
                var src = reader.result;
                avatarImg2.src = src;
                img_preview2.src = src;
            },
            false
        );
        reader.readAsDataURL(input.files[0]);
    }
}

function tampilHasil() {
    // Deklarasi element p sebagai view rincian
    let textnama = document.getElementById("view_name");
    let textjenis = document.getElementById("view_jenis");
    textnama.innerHTML = namafile;
    textjenis.innerHTML = jenis;
    if (gp.checked == true) {
        warnaGp = 225;
    } else {
        warnaGp = 0;
    }

    switch (jenis_kartu) {
        case 'knh1':
            console.log("You selected: " + jenis_kartu);
            if (avatarImg1==null) {
                alert("File Belum di input");
            }else
            layoutKNH1(avatarImg1);
            break;
        case 'knv1':
            console.log("You selected: " + jenis_kartu);
            if (avatarImg1 == null) {
                alert("File Belum di input");
            } else
            layoutKNV1(avatarImg1);
            break;
        case 'knh2':
            console.log("You selected: " + jenis_kartu);
            if (avatarImg1 == null || avatarImg2 == null) {
                alert("File Belum di input");
            }else
            layoutKNH2(avatarImg1, avatarImg2);
            break;
        case 'knv2':
            console.log("You selected: " + jenis_kartu);
            if (avatarImg1 == null || avatarImg2 == null) {
                alert("File Belum di input");
            } else
            layoutKNV2(avatarImg1,avatarImg2);
            break;

        default:
            alert("Jenis kartu nama belum dipilih");
            break;
    }
}

function layoutKNV1(url) {
    let padRL = 17.5;
    let padTB = 10;

    doc = new jsPDF('p', 'mm', [470, 310]);
    // menyusun gambar
    for (let b = 0; b < 5; b++) {
        for (let k = 0; k < 5; k++) {
            doc.addImage(url, 'JPEG', padRL + lebarKN * k, padTB + tinggiKN * b, lebarKN, tinggiKN);
        }
    }

    // membuat garis potong
    for (let b = 0; b < 6; b++) {
        for (let k = 0; k < 6; k++) {
            doc.setDrawColor(warnaGp, 0, 0); 
            doc.line(k * lebarKN + padRL - 3, b * tinggiKN + padTB, k * lebarKN + padRL + 3, b * tinggiKN + padTB);
            doc.line(k * lebarKN + padRL, b * tinggiKN + padTB - 3, k * lebarKN + padRL, b * tinggiKN + padTB + 3);
        }
    }

    doc.setProperties({
        title: 'Kartu Nama',
        subject: 'Dibuat oleh Abdul Jalal',
        author: 'Abdul Jalal',
        keywords: 'generated, javascript, web 2.0, ajax',
        creator: 'ABDUL JALAL'
    });
    // menampilkan hasil generate pdf ke iframe
    document.getElementById('iframepdf').src = doc.output('bloburl');
}

function layoutKNH1(url) {
    let padRL = 10;
    let padTB = 17.5;

    doc = new jsPDF('l', 'mm', [310, 470]);
    // menyusun gambar
    for (let b = 0; b < 5; b++) {
        for (let k = 0; k < 5; k++) {
            doc.addImage(url, 'JPEG', padRL + tinggiKN * k, padTB + lebarKN * b, tinggiKN, lebarKN);
        }
    }

    // membuat garis potong
    for (let b = 0; b < 6; b++) {
        for (let k = 0; k < 6; k++) {
            doc.setDrawColor(warnaGp, 0, 0); 
            doc.line(k * tinggiKN + padRL - 3, b * lebarKN + padTB, k * tinggiKN + padRL + 3, b * lebarKN + padTB);
            doc.line(k * tinggiKN + padRL, b * lebarKN + padTB - 3, k * tinggiKN + padRL, b * lebarKN + padTB + 3);
        }
    }

    doc.setProperties({
        title: 'Kartu Nama',
        subject: 'Dibuat oleh Abdul Jalal',
        author: 'Abdul Jalal',
        keywords: 'generated, javascript, web 2.0, ajax',
        creator: 'ABDUL JALAL'
    });
    // menampilkan hasil generate pdf ke iframe
    document.getElementById('iframepdf').src = doc.output('bloburl');
}

function layoutKNV2(url1, url2) {
    let padRL = 17.5;
    let padTB = 10;

    doc = new jsPDF('p', 'mm', [470, 310]);
    // menyusun gambar
    for (let b = 0; b < 5; b++) {
        for (let k = 0; k < 5; k++) {
            doc.addImage(url1, 'JPEG', padRL + lebarKN * k, padTB + tinggiKN * b, lebarKN, tinggiKN);
        }
    }

    // membuat garis potong
    for (let b = 0; b < 6; b++) {
        for (let k = 0; k < 6; k++) {
            doc.setDrawColor(warnaGp, 0, 0); 
            doc.line(k * lebarKN + padRL - 3, b * tinggiKN + padTB, k * lebarKN + padRL + 3, b * tinggiKN + padTB);
            doc.line(k * lebarKN + padRL, b * tinggiKN + padTB - 3, k * lebarKN + padRL, b * tinggiKN + padTB + 3);
        }
    }

    doc.addPage([470, 310], 'p');

    for (let b = 0; b < 5; b++) {
        for (let k = 0; k < 5; k++) {
            doc.addImage(url2, 'JPEG', padRL + lebarKN * k, padTB + tinggiKN * b, lebarKN, tinggiKN);
        }
    }

    doc.setProperties({
        title: 'Kartu Nama',
        subject: 'Dibuat oleh Abdul Jalal',
        author: 'Abdul Jalal',
        keywords: 'generated, javascript, web 2.0, ajax',
        creator: 'ABDUL JALAL'
    });
    // menampilkan hasil generate pdf ke iframe
    document.getElementById('iframepdf').src = doc.output('bloburl');
}

function layoutKNH2(url1,url2) {
    let padRL = 10;
    let padTB = 17.5;

    doc = new jsPDF('l', 'mm', [310, 470]);
    // menyusun gambar
    for (let b = 0; b < 5; b++) {
        for (let k = 0; k < 5; k++) {
            doc.addImage(url1, 'JPEG', padRL + tinggiKN * k, padTB + lebarKN * b, tinggiKN, lebarKN);
        }
    }

    // membuat garis potong
    for (let b = 0; b < 6; b++) {
        for (let k = 0; k < 6; k++) {
            doc.setDrawColor(warnaGp, 0, 0); 
            doc.line(k * tinggiKN + padRL - 3, b * lebarKN + padTB, k * tinggiKN + padRL + 3, b * lebarKN + padTB);
            doc.line(k * tinggiKN + padRL, b * lebarKN + padTB - 3, k * tinggiKN + padRL, b * lebarKN + padTB + 3);
        }
    }

    doc.addPage([310, 470], 'l');

    for (let b = 0; b < 5; b++) {
        for (let k = 0; k < 5; k++) {
            doc.addImage(url2, 'JPEG', padRL + tinggiKN * k, padTB + lebarKN * b, tinggiKN, lebarKN);
        }
    }

    doc.setProperties({
        title: 'Kartu Nama',
        subject: 'Dibuat oleh Abdul Jalal',
        author: 'Abdul Jalal',
        keywords: 'generated, javascript, web 2.0, ajax',
        creator: 'ABDUL JALAL'
    });
    // menampilkan hasil generate pdf ke iframe
    document.getElementById('iframepdf').src = doc.output('bloburl');
}

function unduhPDF() {
    let namalengkap = namafile + " ctk "+ jenis +".pdf";
    doc.save(namalengkap);
}


function sembunyikan2() {
    input_img2.style.display = "none";
    text_img2.style.display = "none";
    img_preview2.style.display = "none";
}

function tampilkan2() {
    input_img2.style.display = "flex";
    text_img2.style.display = "flex";
    img_preview2.style.display = "flex";
}

function potraite() {
    img_preview1.style.width = "73.333px";
    img_preview1.style.height = "120px";
    img_preview2.style.width = "73.333px";
    img_preview2.style.height = "120px";
    paper.style.width = "371px";
    paper.style.height = "561px";
    orientasi = 'p';
}

function landscape() {
    img_preview1.style.width = "120px";
    img_preview1.style.height = "73.333px";
    img_preview2.style.width = "120px";
    img_preview2.style.height = "73.333px";
    paper.style.width = "561px";
    paper.style.height = "371px";
    orientasi = 'l';
}

function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}