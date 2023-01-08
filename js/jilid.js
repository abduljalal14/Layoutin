let docs = new Array();
let abjad = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let imageArray = new Array();
let jenis;
let orientasi = 'p';
let warnaGp = 255;
let gp = document.getElementById("checkgp");

// Semua kertas secara default di set potraite
let a3 = {
    'lebar': 310,
    'tinggi': 470
};
let a4 = {
    'lebar': 210,
    'tinggi': 297
};
let a5 = {
    'lebar': 148,
    'tinggi': 210
};
let a6 = {
    'lebar': 148,
    'tinggi': 105
};
let pad = {
    'left': 0,
    'top': 0
};
let x, y;
let paper = document.getElementById("iframepdf");
function jenisJilid() {
    jenis_jilid = document.getElementById("input_jenis").value;
    imageArray.length = 0;
    docs.length = 0;
    switch (jenis_jilid) {

        case 'ja3':
            console.log("You selected: " + jenis_jilid);
            landscape();
            break;
        case 'ja4':
            console.log("You selected: " + jenis_jilid);
            potraite();
            break;
        case 'ja5':
            console.log("You selected: " + jenis_jilid);
            landscape();
            break;
        case 'ja6':
            console.log("You selected: " + jenis_jilid);
            potraite();
            break;
        case 'ja3b':
            console.log("You selected: " + jenis_jilid);
            landscape();
            break;
        case 'ja4b':
            console.log("You selected: " + jenis_jilid);
            potraite();
            break;
        case 'ja5b':
            console.log("You selected: " + jenis_jilid);
            landscape();
            break;
        case 'ja6b':
            console.log("You selected: " + jenis_jilid);
            potraite();
            break;
        case 'ja3v':
            console.log("You selected: " + jenis_jilid);
            potraite();
            break;
        case 'ja4v':
            console.log("You selected: " + jenis_jilid);
            landscape();
            break;
        case 'ja5v':
            console.log("You selected: " + jenis_jilid);
            potraite();
            break;
        case 'ja6v':
            console.log("You selected: " + jenis_jilid);
            landscape();
            break;
        case 'ja3bv':
            console.log("You selected: " + jenis_jilid);
            landscape();
            break;
        case 'ja4bv':
            console.log("You selected: " + jenis_jilid);
            landscape();
            break;
        case 'ja5bv':
            console.log("You selected: " + jenis_jilid);
            potraite();
            break;
        case 'ja6bv':
            console.log("You selected: " + jenis_jilid);
            landscape();
            break;
        default:
            console.log("Not Selected");
            break;
    }

}

function readURL(input) {
    // jika ada input
    if (input.files) {
        let jumlahFile = input.files.length; // banyaknya file input
        for (let i = 0; i < jumlahFile; i++) {
            let reader = 0;
            reader = new FileReader();
            reader.onload = function (event) {
                let img = new Image(); // membuat objek image
                img.src = reader.result; // memasukan url ke image
                imageArray.push(img); // mengisi imageArray dengan image ke i
            }
            reader.readAsDataURL(input.files[i]);
        }
    }
}

function prosesData() {
    console.log(imageArray.length);
    if (gp.checked == true) {
        warnaGp = 225;
    } else {
        warnaGp = 0;
    }
    switch (jenis_jilid) {
        case 'ja3':
            console.log("You selected: " + jenis_jilid);
            layoutA3(imageArray);
            break;
        case 'ja4':
            console.log("You selected: " + jenis_jilid);
            layoutA4(imageArray);
            break;
        case 'ja5':
            console.log("You selected: " + jenis_jilid);
            layoutA5(imageArray);
            break;
        case 'ja6':
            console.log("You selected: " + jenis_jilid);
            layoutA6(imageArray);
            break;
        case 'ja3b':
            console.log("You selected: " + jenis_jilid);
            layoutA3b(imageArray);
            break;
        case 'ja4b':
            console.log("You selected: " + jenis_jilid);
            layoutA4b(imageArray);
            break;
        case 'ja5b':
            console.log("You selected: " + jenis_jilid);
            layoutA5b(imageArray);
            break;
        case 'ja6b':
            console.log("You selected: " + jenis_jilid);
            layoutA6b(imageArray);
            break;
        case 'ja3v':
            console.log("You selected: " + jenis_jilid);
            layoutA3(imageArray)
            break;
        case 'ja4v':
            console.log("You selected: " + jenis_jilid);
            layoutA4V(imageArray);
            break;
        case 'ja5v':
            console.log("You selected: " + jenis_jilid);
            layoutA5V(imageArray);
            break;
        case 'ja6v':
            console.log("You selected: " + jenis_jilid);
            layoutA6V(imageArray);
            break;
        case 'ja3bv':
            console.log("You selected: " + jenis_jilid);
            layoutA3b(imageArray)
            break;
        case 'ja4bv':
            console.log("You selected: " + jenis_jilid);
            layoutA4bv(imageArray);
            break;
        case 'ja5bv':
            console.log("You selected: " + jenis_jilid);
            layoutA5bV(imageArray);
            break;
        case 'ja6bv':
            console.log("You selected: " + jenis_jilid);
            layoutA6bV(imageArray);
            break;
        case 'n':
            console.log("You selected: " + jenis_jilid);
            alert("Jenis jilid belum dipilih!")
            break;
        default:
            console.log("Not Selected");
            
            break;
    }
}

function layoutA3(images) {
    let pad = {
        'left': 0,
        'top': 0
    };
    let doc = new jsPDF(orientasi, 'mm', [310, 470], { putOnlyUsedFonts: true });
    for (let i = 0; i < images.length; i++) {
        doc.addImage(images[i], 'JPEG', pad['left'], pad['top'], a3['lebar'], a3['tinggi'], undefined, 'FAST');
        doc.addPage([470, 310], orientasi);
    }
    doc.deletePage(images.length + 1);
    docs.push(doc);
    document.getElementById('iframepdf').src = docs[0].output('bloburl');
}

function layoutA3b(images) {
    let pad = {
        'left': 0,
        'top': 0
    };
    let jumDoc = images.length / 2;
    let p = 0;
    //membuat dokumen sebanyak page/2
    for (let d = 0; d < jumDoc; d++) {
        let doc = new jsPDF(orientasi, 'mm', [310, 470], { putOnlyUsedFonts: true });
        doc.addImage(images[p], 'JPEG', pad['left'], pad['top'], a3['lebar'], a3['tinggi'], undefined, 'FAST');
        doc.addPage([470, 310], orientasi);
        p++;
        if (typeof images[p] !== 'undefined') {
            doc.addImage(images[p], 'JPEG', pad['left'], pad['top'], a3['lebar'], a3['tinggi'], undefined, 'FAST');           
        } p++;
        docs.push(doc);
    }
    console.log(docs);
    document.getElementById('iframepdf').src = docs[0].output('bloburl');
}

function layoutA4(images) {
    let pad = {
        'left': 6.5,
        'top': 25
    };
    let jumPage = Math.ceil(images.length / 2);
    let doc = new jsPDF(orientasi, 'mm', [310, 470], { putOnlyUsedFonts: true });
    let gj = 0;
    for (let p = 0; p < jumPage; p++) {
        doc.addImage(images[p + gj], 'JPEG', pad['left'], pad['top'], a4['lebar'], a4['tinggi'], undefined, 'FAST');
        gj++
        if (typeof images[p + gj] !== 'undefined') {    
            doc.addImage(images[p + gj], 'JPEG', pad['left'], pad['top'] + a4['tinggi'], a4['lebar'], a4['tinggi'], undefined, 'FAST');
        }
        // membuat garis potong
        for (let b = 0; b < 3; b++) {
            for (let k = 0; k < 2; k++) {
                doc.setDrawColor(warnaGp, 0, 0);
                doc.line(k * a4['lebar'] + pad['left'] - 3, b * a4['tinggi'] + pad['top'], k * a4['lebar'] + pad['left'] + 3, b * a4['tinggi'] + pad['top']);
                doc.line(k * a4['lebar'] + pad['left'], b * a4['tinggi'] + pad['top'] - 3, k * a4['lebar'] + pad['left'], b * a4['tinggi'] + pad['top'] + 3);
            }
        }
        doc.addPage([470, 310], orientasi);
    }
    doc.deletePage(jumPage + 1);
    docs.push(doc);
    document.getElementById('iframepdf').src = docs[0].output('bloburl');
}

function layoutA4b(images) {
    let pad = {
        'left': 6.5,
        'top': 25
    };
    let jumDoc = Math.ceil(images.length / 4);
    let gj = 0;
    //membuat dokumen sebanyak page/2
    for (let d = 0; d < jumDoc; d++) {
        let doc = new jsPDF(orientasi, 'mm', [310, 470], { putOnlyUsedFonts: true });
        doc.addImage(images[d + gj], 'JPEG', pad['left'], pad['top'], a4['lebar'], a4['tinggi'], undefined, 'FAST');
        gj++
        gj++
        if (typeof images[d + gj] !== 'undefined') {
            doc.addImage(images[d + gj], 'JPEG', pad['left'], pad['top'] + a4['tinggi'], a4['lebar'], a4['tinggi'], undefined, 'FAST');
        }
        // membuat garis potong
        for (let b = 0; b < 3; b++) {
            for (let k = 0; k < 2; k++) {
                doc.setDrawColor(warnaGp, 0, 0);
                doc.line(k * a4['lebar'] + pad['left'] - 3, b * a4['tinggi'] + pad['top'], k * a4['lebar'] + pad['left'] + 3, b * a4['tinggi'] + pad['top']);
                doc.line(k * a4['lebar'] + pad['left'], b * a4['tinggi'] + pad['top'] - 3, k * a4['lebar'] + pad['left'], b * a4['tinggi'] + pad['top'] + 3);
            }
        }
        doc.addPage([470, 310], orientasi);
        gj--
        if (typeof images[d + gj] !== 'undefined') {
            doc.addImage(images[d + gj], 'JPEG', pad['left'], pad['top'], a4['lebar'], a4['tinggi'], undefined, 'FAST');
        }
        gj++
        gj++
        if (typeof images[d + gj] !== 'undefined') {
            doc.addImage(images[d + gj], 'JPEG', pad['left'], pad['top'] + a4['tinggi'], a4['lebar'], a4['tinggi'], undefined, 'FAST');
        }
        docs.push(doc);
    }

    document.getElementById('iframepdf').src = docs[0].output('bloburl');
}

function layoutA4V(images) {
    let pad = {
        'left': 25,
        'top': 6.5
    };
    let jumPage = Math.ceil(images.length / 2);
    let doc = new jsPDF(orientasi, 'mm', [310, 470], { putOnlyUsedFonts: true });
    let gj = 0;
    for (let p = 0; p < jumPage; p++) {
        doc.addImage(images[p + gj], 'JPEG', pad['left'], pad['top'], a4['lebar'], a4['tinggi'], undefined, 'FAST');
        gj++
        if (typeof images[p + gj] !== 'undefined') {
            doc.addImage(images[p + gj], 'JPEG', pad['left'] + a4['lebar'], pad['top'], a4['lebar'], a4['tinggi'], undefined, 'FAST');    
        }
        // membuat garis potong
        for (let b = 0; b < 2; b++) {
            for (let k = 0; k < 3; k++) {
                doc.setDrawColor(warnaGp, 0, 0);
                doc.line(k * a4['lebar'] + pad['left'] - 3, b * a4['tinggi'] + pad['top'], k * a4['lebar'] + pad['left'] + 3, b * a4['tinggi'] + pad['top']);
                doc.line(k * a4['lebar'] + pad['left'], b * a4['tinggi'] + pad['top'] - 3, k * a4['lebar'] + pad['left'], b * a4['tinggi'] + pad['top'] + 3);
            }
        }
        doc.addPage([470, 310], orientasi);
    }
    doc.deletePage(jumPage + 1);
    docs.push(doc);
    document.getElementById('iframepdf').src = docs[0].output('bloburl');
}

function layoutA4bv(images) {
    let pad = {
        'left': 25,
        'top': 6.5
    };
    let jumDoc = Math.ceil(images.length / 4);
    let gj = 0;
    //membuat dokumen sebanyak page/2
    for (let d = 0; d < jumDoc; d++) {
        let doc = new jsPDF(orientasi, 'mm', [310, 470], { putOnlyUsedFonts: true });
        doc.addImage(images[d + gj], 'JPEG', pad['left'], pad['top'], a4['lebar'], a4['tinggi'], undefined, 'FAST');
        gj++
        gj++
        if (typeof images[d + gj] !== 'undefined') {
            doc.addImage(images[d + gj], 'JPEG', pad['left'] + a4['lebar'], pad['top'], a4['lebar'], a4['tinggi'], undefined, 'FAST');
        }
        // membuat garis potong
        for (let b = 0; b < 2; b++) {
            for (let k = 0; k < 3; k++) {
                doc.setDrawColor(warnaGp, 0, 0);
                doc.line(k * a4['lebar'] + pad['left'] - 3, b * a4['tinggi'] + pad['top'], k * a4['lebar'] + pad['left'] + 3, b * a4['tinggi'] + pad['top']);
                doc.line(k * a4['lebar'] + pad['left'], b * a4['tinggi'] + pad['top'] - 3, k * a4['lebar'] + pad['left'], b * a4['tinggi'] + pad['top'] + 3);
            }
        }
        doc.addPage([470, 310], orientasi);
        gj++
        if (typeof images[d + gj] !== 'undefined') {
            doc.addImage(images[d + gj], 'JPEG', pad['left'], pad['top'], a4['lebar'], a4['tinggi'], undefined, 'FAST');
        }
        gj--
        gj--
        if (typeof images[d + gj] !== 'undefined') {
            doc.addImage(images[d + gj], 'JPEG', pad['left'] + a4['lebar'], pad['top'], a4['lebar'], a4['tinggi'], undefined, 'FAST');
        }
        docs.push(doc);
    }
    document.getElementById('iframepdf').src = docs[0].output('bloburl');
}



function layoutA5(images) {
    let pad = {
        'left': 25,
        'top': 7
    };
    let jumPage = Math.ceil(images.length / 4);
    let doc = new jsPDF(orientasi, 'mm', [310, 470], { putOnlyUsedFonts: true });
    let gj = 0;
    for (let p = 0; p < jumPage; p++) {
        doc.addImage(images[p + gj], 'JPEG', pad['left'], pad['top'], a5['lebar'], a5['tinggi'], undefined, 'FAST');
        gj++
        if (typeof images[p + gj] !== 'undefined') {
            doc.addImage(images[p + gj], 'JPEG', pad['left'] + a5['lebar'], pad['top'], a5['lebar'], a5['tinggi'], undefined, 'FAST');
            
        } gj++
        if (typeof images[p + gj] !== 'undefined') {
            doc.addImage(images[p + gj], 'JPEG', pad['left'], pad['top'] + a5['tinggi'], a5['lebar'], a5['tinggi'], undefined, 'FAST');
            
        }
        gj++
        if (typeof images[p + gj] !== 'undefined') {
            doc.addImage(images[p + gj], 'JPEG', pad['left'] + a5['lebar'], pad['top'] + a5['tinggi'], a5['lebar'], a5['tinggi'], undefined, 'FAST');    
        }
        // membuat garis potong
        for (let b = 0; b < 3; b++) {
            for (let k = 0; k < 3; k++) {
                doc.setDrawColor(warnaGp, 0, 0);
                doc.line(k * a5['lebar'] + pad['left'] - 3, b * a5['tinggi'] + pad['top'], k * a5['lebar'] + pad['left'] + 3, b * a5['tinggi'] + pad['top']);
                doc.line(k * a5['lebar'] + pad['left'], b * a5['tinggi'] + pad['top'] - 3, k * a5['lebar'] + pad['left'], b * a5['tinggi'] + pad['top'] + 3);
            }
        }
        doc.addPage([470, 310], orientasi);
    }
    doc.deletePage(jumPage + 1);
    docs.push(doc);
    document.getElementById('iframepdf').src = docs[0].output('bloburl');
}

function layoutA5b(images) {
    let pad = {
        'left': 25,
        'top': 7
    };
    let jumDoc = Math.ceil(images.length / 8);
    let gj = 0;
    //membuat dokumen sebanyak page/2
    for (let d = 0; d < jumDoc; d++) {
        let doc = new jsPDF(orientasi, 'mm', [310, 470], { putOnlyUsedFonts: true });
        doc.addImage(images[d + gj], 'JPEG', pad['left'], pad['top'], a5['lebar'], a5['tinggi'], undefined, 'FAST');
        gj += 2;
        if (typeof images[d + gj] !== 'undefined') {
            doc.addImage(images[d + gj], pad['left'] + a5['lebar'], pad['top'], a5['lebar'], a5['tinggi'], undefined, 'FAST');
        }
        gj += 2;
        if (typeof images[d + gj] !== 'undefined') {
            doc.addImage(images[d + gj], 'JPEG', pad['left'], pad['top'] + a5['tinggi'], a5['lebar'], a5['tinggi'], undefined, 'FAST');
        }
        gj += 2;
        if (typeof images[d + gj] !== 'undefined') {
            doc.addImage(images[d + gj], 'JPEG', pad['left'] + a5['lebar'], pad['top'] + a5['tinggi'], a5['lebar'], a5['tinggi'], undefined, 'FAST');
        }
        // membuat garis potong
        for (let b = 0; b < 3; b++) {
            for (let k = 0; k < 3; k++) {
                doc.setDrawColor(warnaGp, 0, 0);
                doc.line(k * a5['lebar'] + pad['left'] - 3, b * a5['tinggi'] + pad['top'], k * a5['lebar'] + pad['left'] + 3, b * a5['tinggi'] + pad['top']);
                doc.line(k * a5['lebar'] + pad['left'], b * a5['tinggi'] + pad['top'] - 3, k * a5['lebar'] + pad['left'], b * a5['tinggi'] + pad['top'] + 3);
            }
        }
        doc.addPage([470, 310], orientasi);
        gj -= 3;
        doc.addImage(images[d + gj], 'JPEG', pad['left'], pad['top'], a5['lebar'], a5['tinggi'], undefined, 'FAST');
        gj -= 2;
        if (typeof images[d + gj] !== 'undefined') {
            doc.addImage(images[d + gj], 'JPEG', pad['left'] + a5['lebar'], pad['top'], a5['lebar'], a5['tinggi'], undefined, 'FAST');
        }
        gj += 6;
        if (typeof images[d + gj] !== 'undefined') {
            doc.addImage(images[d + gj], 'JPEG', pad['left'], pad['top'] + a5['tinggi'], a5['lebar'], a5['tinggi'], undefined, 'FAST');
        }
        gj -= 2;
        if (typeof images[d + gj] !== 'undefined') {
            doc.addImage(images[d + gj], 'JPEG', pad['left'] + a5['lebar'], pad['top'] + a5['tinggi'], a5['lebar'], a5['tinggi'], undefined, 'FAST');
        }
        gj += 2;
        docs.push(doc);
        
    }
    console.log(docs);
    document.getElementById('iframepdf').src = docs[0].output('bloburl');
}

function layoutA5V(images) {
    let pad = {
        'left': 7,
        'top': 25
    };
    let jumPage = Math.ceil(images.length / 4);
    let doc = new jsPDF(orientasi, 'mm', [310, 470], { putOnlyUsedFonts: true });
    let gj = 0;
    for (let p = 0; p < jumPage; p++) {
        doc.addImage(images[p + gj], 'JPEG', pad['left'], pad['top'], a5['lebar'], a5['tinggi'], undefined, 'FAST');
        gj++
        if (typeof images[p + gj] !== 'undefined') {
            doc.addImage(images[p + gj], 'JPEG', pad['left'] + a5['lebar'], pad['top'], a5['lebar'], a5['tinggi'], undefined, 'FAST');
            
        } gj++
        if (typeof images[p + gj] !== 'undefined') {
            doc.addImage(images[p + gj], 'JPEG', pad['left'], pad['top'] + a5['tinggi'], a5['lebar'], a5['tinggi'], undefined, 'FAST');
            
        } gj++
        if (typeof images[p + gj] !== 'undefined') {
            doc.addImage(images[p + gj], 'JPEG', pad['left'] + a5['lebar'], pad['top'] + a5['tinggi'], a5['lebar'], a5['tinggi'], undefined, 'FAST');
        }
        // membuat garis potong
        for (let b = 0; b < 3; b++) {
            for (let k = 0; k < 3; k++) {
                doc.setDrawColor(warnaGp, 0, 0);
                doc.line(k * a5['lebar'] + pad['left'] - 3, b * a5['tinggi'] + pad['top'], k * a5['lebar'] + pad['left'] + 3, b * a5['tinggi'] + pad['top']);
                doc.line(k * a5['lebar'] + pad['left'], b * a5['tinggi'] + pad['top'] - 3, k * a5['lebar'] + pad['left'], b * a5['tinggi'] + pad['top'] + 3);
            }
        }
        doc.addPage([470, 310], orientasi);
    }
    doc.deletePage(jumPage + 1);
    docs.push(doc);
    document.getElementById('iframepdf').src = docs[0].output('bloburl');
}

function layoutA5bV(images) {
    let pad = {
        'left': 7,
        'top': 25
    };
    let jumDoc = Math.ceil(images.length / 8);
    let gj = 0;
    //membuat dokumen sebanyak page/2
    for (let d = 0; d < jumDoc; d++) {
        let doc = new jsPDF(orientasi, 'mm', [310, 470], { putOnlyUsedFonts: true });
        doc.addImage(images[d + gj], 'JPEG', pad['left'], pad['top'], a5['lebar'], a5['tinggi'], undefined, 'FAST');
        gj += 2;
        if (typeof images[d + gj] !== 'undefined') {
            doc.addImage(images[d + gj], pad['left'] + a5['lebar'], pad['top'], a5['lebar'], a5['tinggi'], undefined, 'FAST');
        }
        gj += 2;
        if (typeof images[d + gj] !== 'undefined') {
            doc.addImage(images[d + gj], 'JPEG', pad['left'], pad['top'] + a5['tinggi'], a5['lebar'], a5['tinggi'], undefined, 'FAST');
        }
        gj += 2;
        if (typeof images[d + gj] !== 'undefined') {
            doc.addImage(images[d + gj], 'JPEG', pad['left'] + a5['lebar'], pad['top'] + a5['tinggi'], a5['lebar'], a5['tinggi'], undefined, 'FAST');
        }
        // membuat garis potong
        for (let b = 0; b < 3; b++) {
            for (let k = 0; k < 3; k++) {
                doc.setDrawColor(warnaGp, 0, 0);
                doc.line(k * a5['lebar'] + pad['left'] - 3, b * a5['tinggi'] + pad['top'], k * a5['lebar'] + pad['left'] + 3, b * a5['tinggi'] + pad['top']);
                doc.line(k * a5['lebar'] + pad['left'], b * a5['tinggi'] + pad['top'] - 3, k * a5['lebar'] + pad['left'], b * a5['tinggi'] + pad['top'] + 3);
            }
        }
        doc.addPage([470, 310], orientasi);
        gj -= 3;
        doc.addImage(images[d + gj], 'JPEG', pad['left'], pad['top'], a5['lebar'], a5['tinggi'], undefined, 'FAST');
        gj -= 2;
        if (typeof images[d + gj] !== 'undefined') {
            doc.addImage(images[d + gj], 'JPEG', pad['left'] + a5['lebar'], pad['top'], a5['lebar'], a5['tinggi'], undefined, 'FAST');
        }
        gj += 6;
        if (typeof images[d + gj] !== 'undefined') {
            doc.addImage(images[d + gj], 'JPEG', pad['left'], pad['top'] + a5['tinggi'], a5['lebar'], a5['tinggi'], undefined, 'FAST');
        }
        gj -= 2;
        if (typeof images[d + gj] !== 'undefined') {
            doc.addImage(images[d + gj], 'JPEG', pad['left'] + a5['lebar'], pad['top'] + a5['tinggi'], a5['lebar'], a5['tinggi'], undefined, 'FAST');
        }
        gj += 2;
        docs.push(doc);

    }
    console.log(docs);
    document.getElementById('iframepdf').src = docs[0].output('bloburl');
}

function layoutA6(images) {
    let pad = {
        'left': 7,
        'top': 25
    };
    let jumPage = Math.ceil(images.length / 8);
    let doc = new jsPDF(orientasi, 'mm', [310, 470], { putOnlyUsedFonts: true });
    let gj = 0;
    for (let p = 0; p < jumPage; p++) { 
        doc.addImage(images[p + gj], 'JPEG', pad['left'], pad['top'], a6['lebar'], a6['tinggi'], undefined, 'FAST');
        gj++
        if (typeof images[p + gj] !== 'undefined') {
            doc.addImage(images[p + gj], 'JPEG', pad['left'] + a6['lebar'], pad['top'], a6['lebar'], a6['tinggi'], undefined, 'FAST');
           
        } gj++
        if (typeof images[p + gj] !== 'undefined') {
            doc.addImage(images[p + gj], 'JPEG', pad['left'], pad['top'] + a6['tinggi'], a6['lebar'], a6['tinggi'], undefined, 'FAST');
            
        } gj++
        if (typeof images[p + gj] !== 'undefined') {
            doc.addImage(images[p + gj], 'JPEG', pad['left'] + a6['lebar'], pad['top'] + a6['tinggi'], a6['lebar'], a6['tinggi'], undefined, 'FAST');
            
        } gj++
        if (typeof images[p + gj] !== 'undefined') {
            doc.addImage(images[p + gj], 'JPEG', pad['left'], pad['top'] + a6['tinggi'] * 2, a6['lebar'], a6['tinggi'], undefined, 'FAST');
            
        } gj++
        if (typeof images[p + gj] !== 'undefined') {
            doc.addImage(images[p + gj], 'JPEG', pad['left'] + a6['lebar'], pad['top'] + a6['tinggi'] * 2, a6['lebar'], a6['tinggi'], undefined, 'FAST');
            
        } gj++
        if (typeof images[p + gj] !== 'undefined') {
            doc.addImage(images[p + gj], 'JPEG', pad['left'], pad['top'] + a6['tinggi'] * 3, a6['lebar'], a6['tinggi'], undefined, 'FAST');
            
        } gj++
        if (typeof images[p + gj] !== 'undefined') {
            doc.addImage(images[p + gj], 'JPEG', pad['left'] + a6['lebar'], pad['top'] + a6['tinggi'] * 3, a6['lebar'], a6['tinggi'], undefined, 'FAST');
        }
        for (let b = 0; b < 5; b++) {
            for (let k = 0; k < 3; k++) {
                doc.setDrawColor(warnaGp, 0, 0);
                doc.line(k * a6['lebar'] + pad['left'] - 3, b * a6['tinggi'] + pad['top'], k * a6['lebar'] + pad['left'] + 3, b * a6['tinggi'] + pad['top']);
                doc.line(k * a6['lebar'] + pad['left'], b * a6['tinggi'] + pad['top'] - 3, k * a6['lebar'] + pad['left'], b * a6['tinggi'] + pad['top'] + 3);
            }
        }
        doc.addPage([470, 310], orientasi);
    }
    doc.deletePage(jumPage + 1);
    docs.push(doc);
    document.getElementById('iframepdf').src = docs[0].output('bloburl');
}

function layoutA6b(images) {
    let pad = {
        'left': 7,
        'top': 25
    };
    let jumDoc = Math.ceil(images.length / 16);
    let gj = 0;
    //membuat dokumen sebanyak page/2
    for (let d = 0; d < jumDoc; d++) {
        let doc = new jsPDF(orientasi, 'mm', [310, 470], { putOnlyUsedFonts: true });
        doc.addImage(images[d + gj], 'JPEG', pad['left'], pad['top'], a6['lebar'], a6['tinggi'], undefined, 'FAST');
        gj += 2;
        if (typeof images[d + gj] !== 'undefined') {
            doc.addImage(images[d + gj], 'JPEG', pad['left'] + a6['lebar'], pad['top'], a6['lebar'], a6['tinggi'], undefined, 'FAST');           
        } gj += 2;
        if (typeof images[d + gj] !== 'undefined') {
            doc.addImage(images[d + gj], 'JPEG', pad['left'], pad['top'] + a6['tinggi'], a6['lebar'], a6['tinggi'], undefined, 'FAST');            
        } gj += 2;
        if (typeof images[d + gj] !== 'undefined') {
            doc.addImage(images[d + gj], 'JPEG', pad['left'] + a6['lebar'], pad['top'] + a6['tinggi'], a6['lebar'], a6['tinggi'], undefined, 'FAST');            
        } gj += 2;
        if (typeof images[d + gj] !== 'undefined') {
            doc.addImage(images[d + gj], 'JPEG', pad['left'], pad['top'] + a6['tinggi'] * 2, a6['lebar'], a6['tinggi'], undefined, 'FAST');            
        } gj += 2;
        if (typeof images[d + gj] !== 'undefined') {
            doc.addImage(images[d + gj], 'JPEG', pad['left'] + a6['lebar'], pad['top'] + a6['tinggi'] * 2, a6['lebar'], a6['tinggi'], undefined, 'FAST');            
        } gj += 2;
        if (typeof images[d + gj] !== 'undefined') {
            doc.addImage(images[d + gj], 'JPEG', pad['left'], pad['top'] + a6['tinggi'] * 3, a6['lebar'], a6['tinggi'], undefined, 'FAST');            
        } gj += 2;
        if (typeof images[d + gj] !== 'undefined') {
            doc.addImage(images[d + gj], 'JPEG', pad['left'] + a6['lebar'], pad['top'] + a6['tinggi'] * 3, a6['lebar'], a6['tinggi'], undefined, 'FAST');
        }
        for (let b = 0; b < 5; b++) {
            for (let k = 0; k < 3; k++) {
                doc.setDrawColor(warnaGp, 0, 0);
                doc.line(k * a6['lebar'] + pad['left'] - 3, b * a6['tinggi'] + pad['top'], k * a6['lebar'] + pad['left'] + 3, b * a6['tinggi'] + pad['top']);
                doc.line(k * a6['lebar'] + pad['left'], b * a6['tinggi'] + pad['top'] - 3, k * a6['lebar'] + pad['left'], b * a6['tinggi'] + pad['top'] + 3);
            }
        }
        doc.addPage([470, 310], orientasi);
        gj -= 11;
        doc.addImage(images[d + gj], 'JPEG', pad['left'], pad['top'], a6['lebar'], a6['tinggi'], undefined, 'FAST');
        gj -= 2;
        if (typeof images[d + gj] !== 'undefined') {
            doc.addImage(images[d + gj], 'JPEG', pad['left'] + a6['lebar'], pad['top'], a6['lebar'], a6['tinggi'], undefined, 'FAST');           
        } gj += 6;
        if (typeof images[d + gj] !== 'undefined') {
            doc.addImage(images[d + gj], 'JPEG', pad['left'], pad['top'] + a6['tinggi'], a6['lebar'], a6['tinggi'], undefined, 'FAST');           
        } gj -= 2;
        if (typeof images[d + gj] !== 'undefined') {
            doc.addImage(images[d + gj], 'JPEG', pad['left'] + a6['lebar'], pad['top'] + a6['tinggi'], a6['lebar'], a6['tinggi'], undefined, 'FAST');            
        } gj += 6;
        if (typeof images[d + gj] !== 'undefined') {
            doc.addImage(images[d + gj], 'JPEG', pad['left'], pad['top'] + a6['tinggi'] * 2, a6['lebar'], a6['tinggi'], undefined, 'FAST');          
        } gj -= 2;
        if (typeof images[d + gj] !== 'undefined') {
            doc.addImage(images[d + gj], 'JPEG', pad['left'] + a6['lebar'], pad['top'] + a6['tinggi'] * 2, a6['lebar'], a6['tinggi'], undefined, 'FAST');            
        } gj += 6;
        if (typeof images[d + gj] !== 'undefined') {
            doc.addImage(images[d + gj], 'JPEG', pad['left'], pad['top'] + a6['tinggi'] * 3, a6['lebar'], a6['tinggi'], undefined, 'FAST');            
        } gj -= 2;
        if (typeof images[d + gj] !== 'undefined') {
            doc.addImage(images[d + gj], 'JPEG', pad['left'] + a6['lebar'], pad['top'] + a6['tinggi'] * 3, a6['lebar'], a6['tinggi'], undefined, 'FAST');
        }
        gj += 2;
        docs.push(doc);
    }
    console.log(docs);
    document.getElementById('iframepdf').src = docs[0].output('bloburl');
}

function layoutA6V(images) {
    let pad = {
        'left': 25,
        'top': 7
    };
    let jumPage = Math.ceil(images.length / 8);
    let doc = new jsPDF(orientasi, 'mm', [310, 470], { putOnlyUsedFonts: true });
    let gj = 0;
    for (let p = 0; p < jumPage; p++) {
        doc.addImage(images[p + gj], 'JPEG', pad['left'], pad['top'], a6['lebar'], a6['tinggi'], undefined, 'FAST');
        gj++
        if (typeof images[p + gj] !== 'undefined') {
            doc.addImage(images[p + gj], 'JPEG', pad['left'] + a6['lebar'], pad['top'], a6['lebar'], a6['tinggi'], undefined, 'FAST');
            
        } gj++
        if (typeof images[p + gj] !== 'undefined') {
            doc.addImage(images[p + gj], 'JPEG', pad['left'] + a6['lebar'] * 2, pad['top'], a6['lebar'], a6['tinggi'], undefined, 'FAST');
           
        } gj++
        if (typeof images[p + gj] !== 'undefined') {
            doc.addImage(images[p + gj], 'JPEG', pad['left'] + a6['lebar'] * 3, pad['top'], a6['lebar'], a6['tinggi'], undefined, 'FAST');
            
        } gj++
        if (typeof images[p + gj] !== 'undefined') {
            doc.addImage(images[p + gj], 'JPEG', pad['left'], pad['top'] + a6['tinggi'], a6['lebar'], a6['tinggi'], undefined, 'FAST');
            
        } gj++
        if (typeof images[p + gj] !== 'undefined') {
            doc.addImage(images[p + gj], 'JPEG', pad['left'] + a6['lebar'], pad['top'] + a6['tinggi'], a6['lebar'], a6['tinggi'], undefined, 'FAST');
            
        } gj++
        if (typeof images[p + gj] !== 'undefined') {
            doc.addImage(images[p + gj], 'JPEG', pad['left'] + a6['lebar'] * 2, pad['top'] + a6['tinggi'], a6['lebar'], a6['tinggi'], undefined, 'FAST');
            
        } gj++
        if (typeof images[p + gj] !== 'undefined') {
            doc.addImage(images[p + gj], 'JPEG', pad['left'] + a6['lebar'] * 3, pad['top'] + a6['tinggi'], a6['lebar'], a6['tinggi'], undefined, 'FAST');
        }
        for (let b = 0; b < 3; b++) {
            for (let k = 0; k < 5; k++) {
                doc.setDrawColor(warnaGp, 0, 0);
                doc.line(k * a6['lebar'] + pad['left'] - 3, b * a6['tinggi'] + pad['top'], k * a6['lebar'] + pad['left'] + 3, b * a6['tinggi'] + pad['top']);
                doc.line(k * a6['lebar'] + pad['left'], b * a6['tinggi'] + pad['top'] - 3, k * a6['lebar'] + pad['left'], b * a6['tinggi'] + pad['top'] + 3);
            }
        }
        doc.addPage([470, 310], orientasi);
    }
    doc.deletePage(jumPage + 1);
    docs.push(doc);
    document.getElementById('iframepdf').src = docs[0].output('bloburl');
}

function layoutA6bV(images) {
    let pad = {
        'left': 25,
        'top': 7
    };
    let jumDoc = Math.ceil(images.length / 16);
    let gj = 0;
    //membuat dokumen sebanyak page/2
    for (let d = 0; d < jumDoc; d++) {
        let doc = new jsPDF(orientasi, 'mm', [310, 470], { putOnlyUsedFonts: true });
        doc.addImage(images[d + gj], 'JPEG', pad['left'], pad['top'], a6['lebar'], a6['tinggi'], undefined, 'FAST');
        gj += 2;
        if (typeof images[d + gj] !== 'undefined') {
            doc.addImage(images[d + gj], 'JPEG', pad['left'] + a6['lebar'], pad['top'], a6['lebar'], a6['tinggi'], undefined, 'FAST');
            
        } gj += 2;
        if (typeof images[d + gj] !== 'undefined') {
            doc.addImage(images[d + gj], 'JPEG', pad['left'] + a6['lebar'] * 2, pad['top'], a6['lebar'], a6['tinggi'], undefined, 'FAST');
            
        } gj += 2;
        if (typeof images[d + gj] !== 'undefined') {
            doc.addImage(images[d + gj], 'JPEG', pad['left'] + a6['lebar'] * 3, pad['top'], a6['lebar'], a6['tinggi'], undefined, 'FAST');
            
        } gj += 2;
        if (typeof images[d + gj] !== 'undefined') {
            doc.addImage(images[d + gj], 'JPEG', pad['left'], pad['top'] + a6['tinggi'], a6['lebar'], a6['tinggi'], undefined, 'FAST');
            
        } gj += 2;
        if (typeof images[d + gj] !== 'undefined') {
            doc.addImage(images[d + gj], 'JPEG', pad['left'] + a6['lebar'], pad['top'] + a6['tinggi'], a6['lebar'], a6['tinggi'], undefined, 'FAST');
            
        } gj += 2;
        if (typeof images[d + gj] !== 'undefined') {
            doc.addImage(images[d + gj], 'JPEG', pad['left'] + a6['lebar'] * 2, pad['top'] + a6['tinggi'], a6['lebar'], a6['tinggi'], undefined, 'FAST');
            
        } gj += 2;
        if (typeof images[d + gj] !== 'undefined') {
            doc.addImage(images[d + gj], 'JPEG', pad['left'] + a6['lebar'] * 3, pad['top'] + a6['tinggi'], a6['lebar'], a6['tinggi'], undefined, 'FAST');
        }
        for (let b = 0; b < 3; b++) {
            for (let k = 0; k < 5; k++) {
                doc.setDrawColor(warnaGp, 0, 0);
                doc.line(k * a6['lebar'] + pad['left'] - 3, b * a6['tinggi'] + pad['top'], k * a6['lebar'] + pad['left'] + 3, b * a6['tinggi'] + pad['top']);
                doc.line(k * a6['lebar'] + pad['left'], b * a6['tinggi'] + pad['top'] - 3, k * a6['lebar'] + pad['left'], b * a6['tinggi'] + pad['top'] + 3);
            }
        }
        doc.addPage([470, 310], orientasi);
        gj -= 1;
        doc.addImage(images[d + gj], 'JPEG', pad['left'], pad['top'], a6['lebar'], a6['tinggi'], undefined, 'FAST');
        gj -= 2;
        if (typeof images[d + gj] !== 'undefined') {
            doc.addImage(images[d + gj], 'JPEG', pad['left'] + a6['lebar'], pad['top'], a6['lebar'], a6['tinggi'], undefined, 'FAST');
            
        } gj -= 2;
        if (typeof images[d + gj] !== 'undefined') {
            doc.addImage(images[d + gj], 'JPEG', pad['left'] + a6['lebar'] * 2, pad['top'], a6['lebar'], a6['tinggi'], undefined, 'FAST');
            
        } gj -= 2;
        if (typeof images[d + gj] !== 'undefined') {
            doc.addImage(images[d + gj], 'JPEG', pad['left'] + a6['lebar'] * 3, pad['top'], a6['lebar'], a6['tinggi'], undefined, 'FAST');
            
        } gj += 14;
        if (typeof images[d + gj] !== 'undefined') {
            doc.addImage(images[d + gj], 'JPEG', pad['left'], pad['top'] + a6['tinggi'], a6['lebar'], a6['tinggi'], undefined, 'FAST');
            
        } gj -= 2;
        if (typeof images[d + gj] !== 'undefined') {
            doc.addImage(images[d + gj], 'JPEG', pad['left'] + a6['lebar'], pad['top'] + a6['tinggi'], a6['lebar'], a6['tinggi'], undefined, 'FAST');
            
        } gj -= 2;
        if (typeof images[d + gj] !== 'undefined') {
            doc.addImage(images[d + gj], 'JPEG', pad['left'] + a6['lebar'] * 2, pad['top'] + a6['tinggi'], a6['lebar'], a6['tinggi'], undefined, 'FAST');
            
        } gj -= 2;
        if (typeof images[d + gj] !== 'undefined') {
            doc.addImage(images[d + gj], 'JPEG', pad['left'] + a6['lebar'] * 3, pad['top'] + a6['tinggi'], a6['lebar'], a6['tinggi'], undefined, 'FAST');
        }
        gj += 6;
        docs.push(doc);
    }
    console.log(docs);
    document.getElementById('iframepdf').src = docs[0].output('bloburl');
}

function unduhPDF() {
    let index =0;
    for (const element of docs) {
        element.save('Book ' +abjad[index]+'.pdf');     
        index++;
    }
}

function compressPDF() {
    window.open("https://www.ilovepdf.com/compress_pdf");
}

function potraite() {
    a3['lebar'] = 310;
    a3['tinggi'] = 470;
    a4['lebar'] = 297;
    a4['tinggi'] = 210;
    a5['lebar'] = 148;
    a5['tinggi'] = 210;
    a6['lebar'] = 148;
    a6['tinggi'] = 105;
    paper.style.marginTop = "-120px";
    paper.style.width = "371px";
    paper.style.height = "561px";
    orientasi = 'p';
}

function landscape() {
    a3['lebar'] = 470;
    a3['tinggi'] = 310;
    a4['lebar'] = 210;
    a4['tinggi'] = 297;
    a5['lebar'] = 210;
    a5['tinggi'] = 148;
    a6['lebar'] = 105;
    a6['tinggi'] = 148;
    paper.style.width = "561px";
    paper.style.height = "371px";
    orientasi = 'l';
}
