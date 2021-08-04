//SOLITION 1
let number_exists_in_arr_recursiv = (arr, n) => {

    // lINE 14 .de  dediyimiz kimi verilmis arrayin ortasindan baslayiriq axtarmaga
    //buna gorede array uzunlugun 2ye bolub alinmis ededi yuvarlasdirib orta index ededi yaradiram
    let midIndex = Math.floor(arr.length / 2);


    // LINE 20 ise mutleq yoxlamali oldugum bir sert varki burada men deyremki 
    //eger verilen arrayin uzunlugu 1e beraberdirse veya array kicildikce sonda
    //qalan array birinci heddi yoxlayiram n-e beraber deyilse false qaytariliram
    //meselen 201 yazsaq en sonda bu serte daxil olub gorecekki arr[0] buna beraber deyil
    //1ci heddi n berabe olmasin onda daha recursiyani dayandirib birdefelik false qaytariram,
    //cunki bele bir is bas verse daha funksiyani ise salib optimallasdirmani elverissiz etmek lazm deyil
    if (arr.length === 1 && arr[0] != n) {
        return false;
    }


    //LINE 31 ise verilen n ededi yaradigim orta indexden bir basa array ortasindan
    //baslayiram yoxlamaga.eger n beraberdise arrayin tam ortasindaki edede bir basa true qaytariram
    //daha bos bosuna diger sertlere ehtiyac qalmir ve funksiyam daha optimal olur
    if (n === arr[midIndex]) {
        return true;
    }

    //LINE 38 ise men yoxlayiramki eger n ededi kicikdirse ortadaki arrayin ededinden
    //onda men slice methodu ile array qisaldiram yeni n ededinin sagindaki arrayi silirem
    //mene ise son ededi n olan array yaranir ve bu zaman rekursiv funksiyami cagirib bu sefer parametrine
    //yeni yaranmis arrayimi ve yene deyismez olan n ededimi gonderirem ve funcsiya yeniden cagirib
    //ededi axtarmaq ucun ise saliram 
    else if (n < arr[midIndex]) {
        return number_exists_in_arr_recursiv(arr.slice(0, midIndex), n);
    }

    //LINE 51 ise men yoxlayiramki eger n ededi boyukdurse ortadaki arrayin ededinden
    //onda men slice methodu ile array qisaldiram yeni n ededinin solundaki arrayi silirem
    //mene ise ilk ededi n olan array yaranir ve bu zaman rekursiv funksiyami cagirib bu sefer parametrine
    //yeni yaranmis arrayimi ve yene deyismez olan n ededimi gonderirem ve funcsiya yeniden cagirib
    //ededi axtarmaq ucun ise saliram 
    else if (n > arr[midIndex]) {
        return number_exists_in_arr_recursiv(arr.slice(midIndex), n);
    }

    //bu sekilde funksiyam isleyir ve out but kimi mene ededi donderir
    //funksiyani bele outbutu gostere bilerem
    //n = 6
    //  [1, 4, 6, 99, 108, 200]
    //LINE 42 sertine daxil olur bize   [1, 4, 6] qaytarir
    //Bu sefer bu yaranmis arrayi LINE 43de funksiyani cagrib gonderirem 
    //Bu sefer LINE 51 daxil olur ve  [6] ve LINE 52de funksiya cagirilir bu [6] array iceri gonderilir
    //SOnda ise LINe 33 yerlesen serte daxil olub arr[0] === n beraber oldugun gorub bize true qaytarir
    //eks hdal ise [6] arrayi LINE 42 daxil olub bize arr[0] !=n sertini odediyi ucun false qaytarir
}

//SOLITION 2
let number_exists_in_arr_nonrecursiv = (arr, n) => {

    //Rekursivdeki kimi rahat ede bilmediyimiz ucun bize 2 variable teyin etmek lazimdirki
    //bu variable deyisdikce rekursiv funksiyadaki kimi arrayi ortasindan yoxlamaqla isimizi gorek
    let firstIndex = 0;
    let lastIndex = arr.length - 1;


    //Whiledan istifade etmek daha meslehetlidir cunki rahat sekilde sert vermek olur
    //burada sertde deyiremki 1ci index son indexden kicikdirse o zaman loop bas versin
    //sert tekrar etmeyende ise bir basa false return edrem
    while (firstIndex <= lastIndex) {

        //Burada yene oldugu kimi arrayin ortasini teyin edrem
        //Amma esas meqam burdadirki firstIndex ve lastIndex deyisken oldugundan burada 
        //minIndex daim deyisir ve buna gorede istedyimiz kimi hemise sert odeyene qeder 
        //Arrayi ortadan yoxlayiriq
        let minIndex = Math.floor((firstIndex + lastIndex) / 2);


        //LINE 80 Array balacalasib tek elementli array olanda bu sefer yoxlayiriq  n beraberdise true qaytarirq
        //True qaytarmaliyq cunki loopa giribse ya true olacaq yadaki true olana qeder diger loop daxili serti yerine 
        //yetirecek
        //Cunki True deyeri qayitmasa artiq serte cavab vermeyen firtIndex ve lastIndex while sertinden cixir
        //Buzaman deyer kimi bize funksiya false qaytarir.yeni eded arrayda yoxdur
        if (arr[minIndex] === n) {
            return true;

            //Burada ise daim deyisen minIndex.i n ile muqayise edrik < n sertine cavab verirse bu zaman
            // biz  firstIndex deyisirik cunki funksiya daxili firstIndex deyisende automatic minIndex deyisir ve arryin bu sefer
            //sol terefden uzunlugu ixtisar olunur ve bize ixtisar olunmus arrayde bu sefer yene axtarisa baslayirq 
        } else if (arr[minIndex] < n) {
            firstIndex = minIndex + 1;

            //LINE 94 de ise serte cavab verirse biz lastIndexsi azaldiriq ve arrayimiz bir nov slice() mentiqi ile desek 
            //Axtaris erazsin sag terefe gore balacalasdirirq
        } else if ((arr[minIndex] > n)) {
            lastIndex = minIndex - 1;
        }
    }
    //While eger  serte cavab vermirse erasizi balacalasan array sonda gorurki firtIndex ve lastIndex beraberdi onda
    //whiledan cixir ve bize sonra funksiya false qayatrir
    return false;
}

//SOLITION 3
let first_last_index_in_arr =(sorted_arr, n) => {

    //Burda hersey cox sadedir
    //Variable teyin edrem, daxil olmus n ededinin birinci ve sonuncu indexi qaytaran
    //Ve index sistemi oldugu ucun value ise -1 qeyd edrem
    firstIndexN = -1
    lastIndexN = -1

    for (var i = 0; i < sorted_arr.length; i++) {
        //if sertinde ise birinci indexi goturmek ucun yalniz -1.dirse o zaman 1defe i index deyerin 
        //firstIndexN beraber olmasin deyrem.Amma yalniz bir defe olsun deye.
        if (firstIndexN == -1 && sorted_arr[i] === n ) {
            firstIndexN = i
        }

        //Burda ise yalniz n beraberdirse onda lastIndexN ise i beraber oldugun deyrem
        if (sorted_arr[i] === n ) {
            lastIndexN = i
        }
    }


    //Bu hissede ise return ederken olan hisesin qeyd etmisem
    if (firstIndexN !== -1 && lastIndexN !== -1 && firstIndexN !== lastIndexN) {
        return {
            firstIndexN,
            lastIndexN
        }
    } 
    //99 ededi arrayde tekdirse bu zaman tek olan indexi qaytariram
    else if (firstIndexN === lastIndexN) {
        return {
            SingleNumberIndex: lastIndexN
        }
    } else {
        return 'Not found number'
    }
}


var arr = [1, 4, 6, 99, 108, 200]
var arrNew = [1, 4, 6,99, 99, 108,99, 200]


//OUTPUT 1
// console.log(number_exists_in_arr_recursiv(arr,6))

//OUTPUT 2
// console.log(number_exists_in_arr_nonrecursiv(arr, 99))

//OUTPUT 3
// console.log(first_last_index_in_arr(arrNew, 99))
