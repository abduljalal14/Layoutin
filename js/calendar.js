let doc, doc2;
let imageArray = new Array();
let jenis_kal;
let jenis;
let orientasi = 'l';
let a5 = {
    'lebar' : 210,
    'tinggi' : 150
};
let pad = {
    'left': 25,
    'top' : 5
};
let pcs;
let x, y;
let paper = document.getElementById("iframepdf");
let warnaGp = 255;
let gp = document.getElementById("checkgp");
let syaratJmlFile = 14;

function jenisKalender() {
    jenis_kal = document.getElementById("input_jenis").value;

    switch (jenis_kal) {

        case 'kdh1':
            console.log("You selected: " + jenis_kal);
            syaratJmlFile = 14;
            landscape();
            jenis = "KD Horizotal 1 Bulan";
            break;
        case 'kdh2':
            console.log("You selected: " + jenis_kal);
            syaratJmlFile = 7;
            landscape();
            jenis = "KD Horizontal 2 Bulan";
            break;
        case 'kdv1':
            console.log("You selected: " + jenis_kal);
            syaratJmlFile = 14;
            potraite();
            jenis = "KD Horizotal 1 Bulan";
            break;
        case 'kdv2':
            console.log("You selected: " + jenis_kal);
            syaratJmlFile = 7;
            potraite();
            jenis = "KD Horizontal 2 Bulan";
            break;
        default:
            syaratJmlFile = 14;
            landscape();
            jenis = "Belum Dipilih"
            break;
    }
}

//dipanggil ketika input onchange
function readURL(input) {
    // jika ada input
    if (input.files) {
        let jumlahFile = input.files.length; // banyaknya file input
        if (syaratJmlFile == jumlahFile) {
            for (let i = 0; i < jumlahFile; i++) {
                let reader = 0;
                reader = new FileReader();
                reader.onload = function (event) {
                    let avatarImg = new Image(); // membuat objek image
                    let src = reader.result; // url file ke i
                    avatarImg.src = src; // memasukan url ke image
                    imageArray.push(avatarImg); // mengisi imageArray dengan image ke i
                }
                reader.readAsDataURL(input.files[i]);
            }
        } else {
            alert("Jumlah file gambar tidak sesuai!");
        }
        
    }

}

// function handleFileSelect(event) {
//     //Check File API support
//     if (window.File && window.FileList && window.FileReader) {

//         var files = event.target.files; //FileList object

//         for (var i = 0; i < files.length; i++) {
//             var file = files[i];
//             //Only pics
//             if (!file.type.match('image')) continue;

//             var picReader = new FileReader();
//             picReader.addEventListener("load", function (event) {
//                 var picFile = event.target;
//                 var image = picFile.result; 
//                 imageArray.push(image);   
//             });
//             //Read the image
//             picReader.readAsDataURL(file);
//         }
//     } else {
//         console.log("Your browser does not support File API");
//     }
// }


// document.getElementById('file-to-upload').addEventListener('change', handleFileSelect, false);

function prosesData() {
    console.log(imageArray.length);
    if (gp.checked == true) {
        warnaGp = 225;
    } else {
        warnaGp = 0;
    }
    switch (jenis_kal) {

        case 'kdh1':
            console.log("You selected: " + jenis_kal);
            gambarPDF1()
            break;
        case 'kdh2':
            console.log("You selected: " + jenis_kal);
            gambarPDF2()
            break;
        case 'kdv1':
            console.log("You selected: " + jenis_kal);
            gambarPDF1();
            break;
        case 'kdv2':
            console.log("You selected: " + jenis_kal);
            gambarPDF2();
            break;
        default:
            alert("Jenis Kalender belum dipilih");
            break;
    }
}

function gambarPDF1() {
    doc = new jsPDF(orientasi, 'mm', [310, 470], { putOnlyUsedFonts: true });

    doc.addImage(imageArray[0], 'JPEG', pad['left'], pad['top'], a5['lebar'], a5['tinggi'], undefined,'FAST');
    doc.addImage(imageArray[2], 'JPEG', pad['left'] + a5['lebar'], pad['top'], a5['lebar'], a5['tinggi'], undefined,'FAST');
    doc.addImage(imageArray[4], 'JPEG', pad['left'], pad['top'] + a5['tinggi'], a5['lebar'], a5['tinggi'], undefined,'FAST');
    doc.addImage(imageArray[6], 'JPEG', pad['left'] + a5['lebar'], pad['top'] + a5['tinggi'], a5['lebar'], a5['tinggi'], undefined,'FAST');

    for (let b = 0; b < 3; b++) {
        for (let k = 0; k < 3; k++) {
            doc.setDrawColor(warnaGp, 0, 0); 
            doc.line(k * a5['lebar'] + pad['left'] - 3, b * a5['tinggi'] + pad['top'], k * a5['lebar'] + pad['left'] + 3, b * a5['tinggi'] + pad['top']);
            doc.line(k * a5['lebar'] + pad['left'], b * a5['tinggi'] + pad['top'] - 3, k * a5['lebar'] + pad['left'], b * a5['tinggi'] + pad['top'] + 3);
        }
    }

    doc.addPage([470, 310], orientasi);
    doc.addImage(imageArray[3], 'JPEG', pad['left'], pad['top'], a5['lebar'], a5['tinggi'], undefined,'FAST');
    doc.addImage(imageArray[1], 'JPEG', pad['left'] + a5['lebar'], pad['top'], a5['lebar'], a5['tinggi'], undefined,'FAST');
    doc.addImage(imageArray[7], 'JPEG', pad['left'], pad['top'] + a5['tinggi'], a5['lebar'], a5['tinggi'], undefined, 'FAST');
    doc.addImage(imageArray[5], 'JPEG', pad['left'] + a5['lebar'], pad['top'] + a5['tinggi'], a5['lebar'], a5['tinggi'], undefined, 'FAST');

    doc.addPage([470, 310], orientasi);
    doc.addImage(imageArray[8], 'JPEG', pad['left'], pad['top'], a5['lebar'], a5['tinggi'], undefined, 'FAST');
    doc.addImage(imageArray[10], 'JPEG', pad['left'] + a5['lebar'], pad['top'], a5['lebar'], a5['tinggi'], undefined, 'FAST');
    doc.addImage(imageArray[12], 'JPEG', pad['left'] + a5['lebar'], pad['top'] + a5['tinggi'], a5['lebar'], a5['tinggi'], undefined, 'FAST');

    for (let b = 0; b < 3; b++) {
        for (let k = 0; k < 3; k++) {
            doc.setDrawColor(warnaGp, 0, 0); 
            doc.line(k * a5['lebar'] + pad['left'] - 3, b * a5['tinggi'] + pad['top'], k * a5['lebar'] + pad['left'] + 3, b * a5['tinggi'] + pad['top']);
            doc.line(k * a5['lebar'] + pad['left'], b * a5['tinggi'] + pad['top'] - 3, k * a5['lebar'] + pad['left'], b * a5['tinggi'] + pad['top'] + 3);
        }
    }


    doc.addPage([470, 310], orientasi);
    doc.addImage(imageArray[11], 'JPEG', pad['left'], pad['top'], a5['lebar'], a5['tinggi'], undefined,'FAST');
    doc.addImage(imageArray[9], 'JPEG', pad['left'] + a5['lebar'], pad['top'], a5['lebar'], a5['tinggi'], undefined, 'FAST');
    doc.addImage(imageArray[13], 'JPEG', pad['left'], pad['top'] + a5['tinggi'], a5['lebar'], a5['tinggi'], undefined, 'FAST');

    doc.setProperties({
        title: jenis+' A',
        subject: 'Dibuat oleh Abdul Jalal',
        author: 'Abdul Jalal',
        keywords: 'generated, javascript, web 2.0, ajax',
        creator: 'ABDUL JALAL'
    });
    document.getElementById('iframepdf').src = doc.output('bloburl');

    // membuat pdf hal 3-4
    doc2 = new jsPDF(orientasi, 'mm', [310, 470], { putOnlyUsedFonts: true });

    doc2.addImage(imageArray[8], 'JPEG', pad['left'], pad['top'], a5['lebar'], a5['tinggi'], undefined, 'FAST');
    doc2.addImage(imageArray[10], 'JPEG', pad['left'] + a5['lebar'], pad['top'], a5['lebar'], a5['tinggi'], undefined, 'FAST');
    doc2.addImage(imageArray[12], 'JPEG', pad['left'] + a5['lebar'], pad['top'] + a5['tinggi'], a5['lebar'], a5['tinggi'], undefined, 'FAST');

    for (let b = 0; b < 3; b++) {
        for (let k = 0; k < 3; k++) {
            doc.setDrawColor(warnaGp, 0, 0); 
            doc2.line(k * a5['lebar'] + pad['left'] - 3, b * a5['tinggi'] + pad['top'], k * a5['lebar'] + pad['left'] + 3, b * a5['tinggi'] + pad['top']);
            doc2.line(k * a5['lebar'] + pad['left'], b * a5['tinggi'] + pad['top'] - 3, k * a5['lebar'] + pad['left'], b * a5['tinggi'] + pad['top'] + 3);
        }
    }

    doc2.addPage([470, 310], orientasi);
    doc2.addImage(imageArray[11], 'JPEG', pad['left'], pad['top'], a5['lebar'], a5['tinggi'], undefined, 'FAST');
    doc2.addImage(imageArray[9], 'JPEG', pad['left'] + a5['lebar'], pad['top'], a5['lebar'], a5['tinggi'], undefined, 'FAST');
    doc2.addImage(imageArray[13], 'JPEG', pad['left'], pad['top'] + a5['tinggi'], a5['lebar'], a5['tinggi'], undefined, 'FAST');

    doc2.setProperties({
        title: jenis+' B',
        subject: 'Dibuat oleh Abdul Jalal',
        author: 'Abdul Jalal',
        keywords: 'generated, javascript, web 2.0, ajax',
        creator: 'ABDUL JALAL'
    });


}

function gambarPDF2() {
    doc = new jsPDF(orientasi, 'mm', [310, 470], { putOnlyUsedFonts: true });

    doc.addImage(imageArray[0], 'JPEG', pad['left'], pad['top'], a5['lebar'], a5['tinggi'], undefined, 'FAST');
    doc.addImage(imageArray[1], 'JPEG', pad['left'] + a5['lebar'], pad['top'], a5['lebar'], a5['tinggi'], undefined, 'FAST');
    doc.addImage(imageArray[2], 'JPEG', pad['left'], pad['top'] + a5['tinggi'], a5['lebar'], a5['tinggi'], undefined, 'FAST');
    doc.addImage(imageArray[3], 'JPEG', pad['left'] + a5['lebar'], pad['top'] + a5['tinggi'], a5['lebar'], a5['tinggi'], undefined, 'FAST');

    for (let b = 0; b < 3; b++) {
        for (let k = 0; k < 3; k++) {
            doc.setDrawColor(warnaGp, 0, 0); 
            doc.line(k * a5['lebar'] + pad['left'] - 3, b * a5['tinggi'] + pad['top'], k * a5['lebar'] + pad['left'] + 3, b * a5['tinggi'] + pad['top']);
            doc.line(k * a5['lebar'] + pad['left'], b * a5['tinggi'] + pad['top'] - 3, k * a5['lebar'] + pad['left'], b * a5['tinggi'] + pad['top'] + 3);
        }
    }

    doc.addPage([470, 310], orientasi);
    doc.addImage(imageArray[4], 'JPEG', pad['left'], pad['top'], a5['lebar'], a5['tinggi'], undefined, 'FAST');
    doc.addImage(imageArray[5], 'JPEG', pad['left'] + a5['lebar'], pad['top'], a5['lebar'], a5['tinggi'], undefined, 'FAST');
    doc.addImage(imageArray[6], 'JPEG', pad['left'] + a5['lebar'], pad['top'] + a5['tinggi'], a5['lebar'], a5['tinggi'], undefined, 'FAST');
    for (let b = 0; b < 3; b++) {
        for (let k = 0; k < 3; k++) {
            doc.setDrawColor(warnaGp, 0, 0); 
            doc.line(k * a5['lebar'] + pad['left'] - 3, b * a5['tinggi'] + pad['top'], k * a5['lebar'] + pad['left'] + 3, b * a5['tinggi'] + pad['top']);
            doc.line(k * a5['lebar'] + pad['left'], b * a5['tinggi'] + pad['top'] - 3, k * a5['lebar'] + pad['left'], b * a5['tinggi'] + pad['top'] + 3);
        }
    }

    doc.setProperties({
        title: jenis,
        subject: 'Dibuat oleh Abdul Jalal',
        author: 'Abdul Jalal',
        keywords: 'generated, javascript, web 2.0, ajax',
        creator: 'ABDUL JALAL'
    });
    document.getElementById('iframepdf').src = doc.output('bloburl');
}

function potraite() {
    a5['lebar'] = 150;
    a5['tinggi'] = 210;
    pad['left'] = 5;
    pad['top'] = 25;
    paper.style.marginTop = "-120px";
    paper.style.width = "371px";
    paper.style.height = "561px";
    orientasi = 'p';
}

function landscape() {
    a5['lebar'] = 210;
    a5['tinggi'] = 150;
    pad['left'] = 25;
    pad['top'] = 5;
    paper.style.width = "561px";
    paper.style.height = "371px";
    orientasi = 'l';
}

function unduhPDF() {
    switch (jenis_kal) {
        case 'kdh1':
            doc.deletePage(3);
            doc.deletePage(3);
            doc.save(jenis + " A.pdf");
            doc2.save(jenis + " B.pdf")
            break;
        case 'kdh2':
            doc.save(jenis + ".pdf");
            break;
        case 'kdv1':
            doc.deletePage(3);
            doc.deletePage(3);
            doc.save(jenis + " A.pdf");
            doc2.save(jenis + " B.pdf");
            break;
        case 'kdv2':
            doc.save(jenis + ".pdf");
            break;
        default:
            alert("Terjadi Kesalahan");
            break;
    }
}

function compressPDF() {
    window.open("https://www.ilovepdf.com/compress_pdf");
}