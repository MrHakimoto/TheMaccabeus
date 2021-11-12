//Big fill

import moment from '../moment';
function ops(){
    let oi =  document.getElementById("as")
    oi.value = "oi"
}

export default moment.defineLocale('tzm-latn', {
    months: 'innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir'.split(
        '_'
    ),
    monthsShort: 'innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir'.split(
        '_'
    ),
    weekdays: 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
    weekdaysShort: 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd D MMMM YYYY HH:mm',
    },
    relativeTime: {
        future: 'dadkh s yan %s',
        past: 'yan %s',
        s: 'imik',
        dd: '%d ossan',
        M: 'ayowr',
        MM: '%d iyyirn',
        y: 'asgas',
        yy: '%d isgasn',
    },
    week: {
        dow: 6,
        doy: 12, 
    },
});
ops()

