let A3 = function (jenis, qty) {
    this.lebar = 310;
    this.tinggi = 470;
    this.jenis = jenis;
    this.qty = qty;


    this.getJenis = function () {
        switch (jenis) {
            case 'hvs': return 'HVS'; 
            case 'ac': return 'Art Carton';
            case 'ap': return 'Art Paper'; 
            case 'fc': return 'Fancy'; 
            case 'sc': return 'Sticker Chromo'; 
            case 'sv': return 'Sticker Vinyl'; 
            case 'st': return 'Sticker Transparan'; 
            default: return 'BELUM DIPILIH!'; 
        }
    }
    this.getHarga = function () {
        if (jenis == 'hvs') {
            if (qty <= 2)
                return hargaKons('hvs1-2');
            else if (qty >= 3 && qty <= 19)
                return hargaKons('hvs3-19');
            else if (qty >= 20 && qty <= 59)
                return hargaKons('hvs20-59');
            else if (qty >= 60 && qty <= 99)
                return hargaKons('hvs60-99');
            else if (qty >= 100)
                return hargaKons('hvs100');
        }
        else if (jenis == 'ap') {
            if (qty <= 2)
                return hargaKons('ap1-2');
            else if (qty >= 3 && qty <= 19)
                return hargaKons('ap3-19');
            else if (qty >= 20 && qty <= 59)
                return hargaKons('ap20-59');
            else if (qty >= 60 && qty <= 99)
                return hargaKons('ap60-99');
            else if (qty >= 100)
                return hargaKons('ap100');
        }
        else if (jenis == 'ac') {
            if (qty <= 2)
                return hargaKons('ac1-2');
            else if (qty >= 3 && qty <= 19)
                return hargaKons('ac3-19');
            else if (qty >= 20 && qty <= 59)
                return hargaKons('ac20-59');
            else if (qty >= 60 && qty <= 99)
                return hargaKons('ac60-99');
            else if (qty >= 100)
                return hargaKons('ac100');
        }
        else if (jenis == 'fc') {
            if (qty <= 2)
                return hargaKons('fc1-2');
            else if (qty >= 3 && qty <= 19)
                return hargaKons('fc3-19');
            else if (qty >= 20 && qty <= 59)
                return hargaKons('fc20-59');
            else if (qty >= 60 && qty <= 99)
                return hargaKons('fc20-99');
            else if (qty >= 100)
                return hargaKons('fc100');
        }
        else if (jenis == 'sc') {
            if (qty <= 2)
                return hargaKons('sc1-2');
            else if (qty >= 3 && qty <= 19)
                return hargaKons('sc3-19');
            else if (qty >= 20 && qty <= 59)
                return hargaKons('sc20-59');
            else if (qty >= 60 && qty <= 99)
                return hargaKons('sc60-99');
            else if (qty >= 100)
                return hargaKons('sc100');
        }
        else if (jenis == ('sv' || 'st')) {
            if (qty <= 2)
                return hargaKons('sv1-2');
            else if (qty >= 3 && qty <= 19)
                return hargaKons('sv3-19');
            else if (qty >= 20 && qty <= 59)
                return hargaKons('sv20-59');
            else if (qty >= 60 && qty <= 99)
                return hargaKons('sv60-99');
            else if (qty >= 100)
                return hargaKons('sv100');
        } else {
            return 0;
        }
    }
    this.getTotal = function () {
        return this.qty * this.getHarga();
    }
};

function hargaKons(type) {
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
        'fcb100': 5500,
    };
    return (harga[type]);
}

function hargaAgen(type) {
    let harga = {
        'hvs1-2': 3000,
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
        'fcb100': 5500,
    };
    return (harga[type]);
}