let qty, hargaA3, total, kembalian, rim, bayar;
let r = 500;
let b = 10000;

let bahan, dana, pcs;

let harga = {
    'hvs1-2': 5000,
    'hvs3-19': 3500,
    'hvs20-59': 2750,
    'hvs60-99': 2250,
    'hvs100': 2000,

    'ap1-2': 5000,
    'ap3-19': 3500,
    'ap20-59': 2750,
    'ap60-99': 2250,
    'ap100': 2000,

    'ac1-2': 5000,
    'ac3-19': 4000,
    'ac20-59': 3500,
    'ac60-99': 3250,
    'ac100': 3000,

    'sc1-2': 5500,
    'sc3-19': 4250,
    'sc20-59': 4000,
    'sc60-99': 3750,
    'sc100': 3500,

    'sv1-2': 9000,
    'sv3-19': 8000,
    'sv20-59': 7500,
    'sv60-99': 7250,
    'sv100': 7000,

    'fc1-2': 5500,
    'fc3-19': 4500,
    'fc20-59': 4000,
    'fc60-99': 3750,
    'fc100': 3500,

    'hvsb1-2': 5500,
    'hvsb3-19': 5000,
    'hvsb20-59': 4250,
    'hvsb60-99': 3750,
    'hvsb100': 3500,

    'apb1-2': 5500,
    'apb3-19': 5000,
    'apb20-59': 4250,
    'apb60-99': 3750,
    'apb100': 3500,

    'acb1-2': 7000,
    'acb3-19': 6000,
    'acb20-59': 5500,
    'acb60-99': 5250,
    'acb100': 5000,

    'fcb1-2': 7500,
    'fcb3-19': 6500,
    'fcb20-59': 6000,
    'fcb60-99': 5750,
    'fcb100': 5500
};

let hargaAgen = {
    'hvs1-2': 3000,
    'hvs3-49': 2250,
    'hvs50-99': 1700,
    'hvs100': 1400,

    'ap1-2': 3000,
    'ap3-49': 2250,
    'ap50-99': 1750,
    'ap100': 1450,

    'ac1-2': 3500,
    'ac3-49': 2500,
    'ac50-99': 2000,
    'ac100': 1900,

    'sc1-2': 4000,
    'sc3-49': 3500,
    'sc50-99': 3250,
    'sc100': 3000,

    'sv1-2': 8000,
    'sv3-49': 7250,
    'sv50-99': 7000,
    'sv100': 6500,

    'fc1-2': 5000,
    'fc3-49': 4000,
    'fc50-99': 3500,
    'fc100': 3250,

    'hvsb1-2': 4250,
    'hvsb3-49': 3500,
    'hvsb50-99': 2550,
    'hvsb100': 2500,

    'apb1-2': 4250,
    'apb3-49': 3500,
    'apb50-99': 2600,
    'apb100': 2550,

    'acb1-2': 5000,
    'acb3-49': 4000,
    'acb50-99': 3500,
    'acb100': 3400,

    'fcb1-2': 7000,
    'fcb3-49': 6000,
    'fcb50-99': 5500,
    'fcb100': 5250
};

function tampilHasil() {
    console.log("work")

    bahan = document.getElementById("input_bahan").value;
    dana = document.getElementById("input_dana").value;
    pcs = document.getElementById("input_pcs").value;


    let textbahan = document.getElementById("view_bahan");
    let textdana = document.getElementById("view_dana");
    let textpcs = document.getElementById("view_pcs");
    let textqa3 = document.getElementById("view_qa3");
    let texttpcs = document.getElementById("view_tpcs");
    let texta3 = document.getElementById("view_a3");
    let textrim = document.getElementById("view_rim");
    let textta3 = document.getElementById("view_ta3");
    let textbpotong = document.getElementById("view_bpotong");
    let textbayar = document.getElementById("view_bayar");
    let textkembalian = document.getElementById("view_kembalian");

    switch (bahan) {
        case 'ac': b = 10000; break;
        case 'ap': b = 10000; break;
        case 'hvs': b = 10000; break;
        case 'fc': b = 10000; break;
        case 'acb': b = 10000; break;
        case 'apb': b = 10000; break;
        case 'hvsb': b = 10000; break;
        case 'fcb': b = 10000; break;
        case 'sc': b = 15000; break;
        case 'sv': b = 15000; break;
        default: b = 0; break;
    }


    // let sqty = dana / (harga[bahan+'100'] + pcs * b / r)

    // if (sqty >= 100) {
    //     qty = Math.floor(sqty);
    //     hargaA3 = harga[bahan+'100'];
    // } else if (sqty >= 60 && sqty <= 99) {
    //     qty = Math.floor(dana / (harga[bahan + '60-59'] + pcs * b / r));
    //     hargaA3 = harga[bahan + '60-99'];
    // } else if (sqty >= 20 && sqty <= 69) {
    //     qty = Math.floor(dana / (harga[bahan + '20-59'] + pcs * b / r));
    //     hargaA3 = harga[bahan + '20-59'];
    // } else if (sqty >= 3 && sqty <= 19) {
    //     qty = Math.floor(dana / (harga[bahan + '3-19'] + pcs * b / r));
    //     hargaA3 = harga[bahan + '3-19'];
    // } else if (sqty >= 1 && sqty <= 2) {
    //     qty = Math.floor(dana / (harga[bahan + '1-2'] + pcs * b / r));
    //     hargaA3 = harga[bahan + '1-2'];
    // } else {
    //     qty = 0;
    //     hargaA3 = 0;
    // }

    let sqty = dana / (hargaAgen[bahan + '100'] + pcs * b / r)

    if (sqty >= 100) {
        qty = Math.floor(sqty);
        hargaA3 = hargaAgen[bahan + '100'];
    } else if (sqty >= 50 && sqty <= 99) {
        qty = Math.floor(dana / (hargaAgen[bahan + '50-99'] + pcs * b / r));
        hargaA3 = hargaAgen[bahan + '50-99'];
    } else if (sqty >= 3 && sqty <= 49) {
        qty = Math.floor(dana / (hargaAgen[bahan + '3-49'] + pcs * b / r));
        hargaA3 = hargaAgen[bahan + '3-49'];
    } else if (sqty >= 1 && sqty <= 2) {
        qty = Math.floor(dana / (hargaAgen[bahan + '1-2'] + pcs * b / r));
        hargaA3 = hargaAgen[bahan + '1-2'];
    } else {
        qty = 0;
        hargaA3 = 0;
    }

   hitung(qty);

    textbahan.innerHTML = bahan;
    textpcs.innerHTML = pcs +" pcs/A3";
    textdana.innerHTML = "Rp. "+dana;
    textqa3.innerHTML = qty +" Lembar";
    texttpcs.innerHTML = pcs * qty +" Pcs";
    texta3.innerHTML = "Rp. " + hargaA3;
    textrim.innerHTML = rim + " Rim";
    textta3.innerHTML = "Rp. " + hargaA3 * qty;
    textbpotong.innerHTML = "Rp. " + b * rim;
    textbayar.innerHTML = "Rp. " + bayar;
    textkembalian.innerHTML = "Rp. " + kembalian;
}

function hitung(sqty) {
    cekHarga2(sqty);
    total = hargaA3 * sqty;
    rim = Math.ceil(sqty * pcs / r);
    bayar = total + rim * b;
    kembalian = dana - bayar;

    if (dana < bayar) {
        qty = sqty - 1;
        hitung(qty);
    }
}



function cekHarga(sqty) {
    if (sqty >= 100) {
        hargaA3 = harga[bahan+'100'];
    } else if (sqty >= 60 && sqty <= 99) {
        hargaA3 = harga[bahan + '60-99'];
    } else if (sqty >= 20 && sqty <= 69) {
        hargaA3 = harga[bahan + '20-59'];
    } else if (sqty >= 3 && sqty <= 19) {
        hargaA3 = harga[bahan + '3-19'];
    } else if (sqty >= 1 && sqty <= 2) {
        hargaA3 = harga[bahan + '1-2'];
    } else {
        hargaA3 = 0;
    }
}

function cekHarga2(sqty) {
    if (sqty >= 100) {
        hargaA3 = hargaAgen[bahan + '100'];
    } else if (sqty >= 50 && sqty <= 99) {
        hargaA3 = hargaAgen[bahan + '50-99'];
    } else if (sqty >= 3 && sqty <= 49) {
        hargaA3 = hargaAgen[bahan + '3-49'];
    } else if (sqty >= 1 && sqty <= 2) {
        hargaA3 = hargaAgen[bahan + '1-2'];
    } else {
        hargaA3 = 0;
    }
}

function coba(params) {
    let sqty = dana / (hargaAgen[bahan + '100'] + pcs * b / r)

    if (sqty >= 100) {
        qty = Math.floor(sqty);
        hargaA3 = hargaAgen[bahan + '100'];
    } else if (sqty >= 50 && sqty <= 99) {
        qty = Math.floor(dana / (hargaAgen[bahan + '50-99'] + pcs * b / r));
        hargaA3 = hargaAgen[bahan + '50-99'];
    } else if (sqty >= 3 && sqty <= 49) {
        qty = Math.floor(dana / (hargaAgen[bahan + '3-49'] + pcs * b / r));
        hargaA3 = hargaAgen[bahan + '3-49'];
    } else if (sqty >= 1 && sqty <= 2) {
        qty = Math.floor(dana / (hargaAgen[bahan + '1-2'] + pcs * b / r));
        hargaA3 = hargaAgen[bahan + '1-2'];
    } else {
        qty = 0;
        hargaA3 = 0;
    }
}