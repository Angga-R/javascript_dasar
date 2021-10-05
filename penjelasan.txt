javascript mirip java, cuman penamaan variable menggunakan var bukan int, String, dll
typeof(parameter) ==> untuk mengetahui type data
javascript juga bisa if oneline ==> () ?  :
if oneline tanpa else ==> (kondisi) hasil;

ESCAPE CHARACTER :
    untuk mengabaikan karakter pembuka(mungkin)
    contoh : 'disini hari Jum\'at' ==> kalo tidak pake \ akan error

\0      ==> karakter NULL
\'      ==> '
\"      ==> "
\\      ==> \
\n      ==> new line
\t      ==> tab
\b      ==> backspace
\uXXXX  ==> unicode. 
            misal : '\u00A9' (logo copyright),
                    '\u00AE' (logo R)
                    '\u00B1' (+- kebawah)
                    '\u00B5' (u)
                    '\u2122' (tm)

.length ==> menghitung panjang string / panjang array (sama dengan java)

Boolean(parameter) ==> untuk menentukan boolean sesuatu yang ada di parameter
true => "string", non-zero number, object, array, function
false => "", 0, undefined, null, NaN

---------- variable ------------

variable ada 3 di javascript, yaitu :
var, let, const.

paling disarankan dalam javascript untuk nama variable :
var namaVariable;

shorthand variable di javascript :
var nama = "angga",
    umur = 18,
    lulus = true;
    (biar tidak nulis var 3x)

---------- POP UP BOX ----------

ada 3 buah pop up box yaitu :
alert(parameter), prompt(parameter), confirm(parameter)

prompt & confirm bisa disimpan dalam variable

---------- CONTROL FLOW ----------

Pengulangan(loop) & pengkondisian adalah control flow alias untuk mengatur alur

pengulangan     : for, while, do while
pengkondisian   : if else, switch

---------- PARSE ----------

parseInt(prompt('masukan angka :)) ==> mengubah menjadi integer. kalo tanpa parseInt akan menghasilkan
                                       string

---------- ANGKA RANDOM ----------

var angkaRandom = Math.floor(Math.random() * 10) + 1; // ini akan menghasilkan angka dari 1-10

---------- FUNCTION ----------

--- built-in function ---
(fungsi yang berasal dari sistem)
contoh :
    - string :
        + charAt()
        + slice()
        + split()
        + toString()
        + toLowerCase()
        + toUpperCase()
        + dll
    - Math :
        + sin()
        + cos()
        + tan()
        + random()
        + round()
        + floor()
        + ceil()
        + log()

--- function buatan user ---

- Function declaration
    + contoh : 
        function jumlahDuaBilangan(a, b) {
            var total = a + b;

            return total;
        }

- function expression (lebih powerfull)
    + contoh :
        var jumlahDuaBilangan = function(a, b) {
            var total;
            total = a + b;

            return total;
        }

- tips :
    ~ jika parameternya < argument, maka argument yang lebih akan diabaikan
        + contoh : jumlahDuaBilangan(10,20,30) => angka 30 akan diabaikan
    ~ jika parameter > argument, maka parameter yang lebih akan diisi nilai undefined

- arguments
    bila kita memasukan suatu argument kedalam sebuah function yang tanpa parameter,
    di js tidak akan error namun argument tersebut akan disimpan didalam 'arguments'.
    + contoh :
        function tambah () {
            return arguments;
        }
        var coba = tambah(5,10,20,"hi",false);
    bisa juga digunakan untuk kasus seperti di tips[1]


- variable global
    + contoh :
        var a = 1;
        function tes() {
            var a = 2;
            console.log(window.a); ==> akan menampilkan output 2
        }
        tes();

- rekursif
    function yang memanggil dirinya sendiri (bisa menghasilkan infinity loop 
    bila tidak ada kondisi akhir(base case))
    + contoh :
        function tampilAngka(n) {
            if (n === 0) return;
            console.log(n);
            tampilAngka(n-1);
        }

---------- ARRAY ----------

- Array dalam javascript bisa menyimpan tipe data apa aja dalam 1 array.
    bahkan bisa menyimpan function

- di javascript juga bisa array multi dimensi (array didalam array)

- Mengambil jumlah array ==> nama_array.length

- menggabungkan isi array dan mengubahnya menjadi string ==> nama_array.join()
    + yang didalam parameter join nya bisa diisi dengan separator / pemisah.
    + contoh : nama_array.join('-');
- menambah element baru di akhir array (bisa > 1) ==> nama_array.push('angga');

- menghapus element terakhir di array (hanya bisa 1) ==> nama_array.pop();

- menambah element baru di awal array (bisa > 1) ==> nama_array.unshift('angga');

- menghapus element diawal di array (hanya bisa 1) ==> nama_array.shift();

- menambah element baru di tengah array (bisa > 1) ==> nama_array.splice();
    + isi parameter splice : (indexAwal, mauDihapusBerapa, elementBaru1, ...);
    + contoh nama_array.splice(2, 0, 'angga');

- mengiris element di array (bisa > 1) ==> nama_array.slice();
    + isi parameter slice : (awal, akhir);
    + yang diisikan diakhir tidak akan dihapus. sehingga jika kita akan menghapus 2
        contohnya, bisa ditulis (1, 3)
    + simpanlah di dalam variable ( misal : var arr = nama_array.slice(1, 3);)
    + slice ini bukan menghapus bagian yang ada diparameter, melainkan menyisakan yang
        ada di parameter

- foreach di javascript
    nama_array.forEach(function(e) {
        console.log(e);
    });
    artinya : untuk setiap element(e) yang ada pada array(nama_array), lakukan function(function)
                berikut ini : console.log(e);

- map (sama dengan foreach, tapi mengembalikan nilai array dan lebih baik)
    + bisa disimpan dalam variable 
    + contoh :
        var namaVariable = nama_array.map(function(e) {
            return e * 2;
        });
        console.log(namaVariable.join(' - '));

- sort (mengurutkan)
    + 1-9 ==> nama_array.short(); 
    + 1-puluhan ==> nama_array.short(function(a,b) {
                        return a-b;
                    });

- filter ==> mencari (mengembalikan banyak nilai dalam bentuk array)
    var namaVariable = nama_array.filter(function(e) {
        return e (>, <, ==) yang_dicari;
    });

- find ==> mencari (mengembalikan 1 nilai dalam bentuk object)
    var namaVariable = nama_array.find(function(e) {
        return e (>, <, ==) yang_dicari;
    });

---------- OBJECT ----------

- kalo di php ini sama dengan array associative

- variable didalam object disebut properties, function didalam obejct disebut method

- contoh penulisan :
    + object literal :
        var orang = {
            nama : 'anggara',
            umur : '18',
            pekerjaan : 'pelajar',
            sapa : function() {
                return 'Hi, nama saya ' + this.nama + '. Umur saya ' + this.umur +
                ' tahun, dan saya adalah seorang ' + pekerjaan + '.';
            },
            nilai : [70, 80, 90],
            alamat : {
                jalan: "babakan, G.Manik",
                kota: "bandung",
                provinsi: "Jawa Barat",
            },
        }
    + function declaration :
        function buatObjectMurid(nama, nis, email, jurusan) {
            var murid = {};
            murid.nama = nama;
            murid.nis = nis;
            murid.email = email;
            murid.jurusan = jurusan;
            return murid;
        }
    + constructor :
        function Murid(nama, nis, email, jurusan) {
            this.nama = nama;
            this.nis = nis;
            this.email = email;
            this.jurusan = jurusan;
        }

- pemanggilan :
    * object literal
        + bisa orang.nama / orang['nama']
        + memanggil array beserta indexnya ==> orang.nilai[2] / orang['nilai'][2]
        + memanggil object didalam object ==> orang.alamat.kota / orang.alamat['kota']
                                                / orang['alamat']['kota']
    * function declaration
        + buatObjectMurid("Anggara", "19204288", "shalangga047@gmail.com", "RPL");
        + bila misal ingin menambahkan object / function, sebaiknya disimpan didalam   variable                                                
    * constructor 
        var objectConstructor = new Murid(
            "Anggara",
            "19204288",
            "shalangga047@gmail.com",
            "RPL"
        );