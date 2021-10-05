// ---------- VARIABLE ----------
// var x = 30;
// console.log("isi variable x adalah : " + x);

// ---------- POPUP BOX ----------
function contohPopup() {
  alert(x);
  var y = prompt("Masukan Nama : ");
  alert("Umur " + y + " adalah " + x);
  var z = confirm("Apakah anda yakin?");

  // program sederhana 1
  if (z === true) {
    alert("user menekan tombol OKE");
  } else {
    alert("user menekan tombol CANCEL");
  }

  // program sederhana 2
  alert("Selamat Datang");
  var a = true;

  while (a) {
    var nama = prompt("Masukan Nama Anda : ");
    alert("Hallo " + nama);
    a = confirm("ingin mengulang?");
  }
}

// ---------- WHILE LOOP ----------
function contohWhile() {
  var nilaiAwal = 1;
  while (nilaiAwal <= 10) {
    console.log("Pengulangan ke-" + nilaiAwal);
    nilaiAwal++;
  }
}

// ---------- FOR LOOP ----------
function contohFor() {
  for (var i = 1; i <= 10; i++) {
    console.log("Hello World " + i + "x");
  }

  var s = "";
  for (var i = 0; i < 10; i++) {
    for (var j = 0; j <= i; j++) {
      s += "*";
    }
    s += "\n";
  }
  console.log(s);

  var k = "";
  for (var i = 10; i > 0; i--) {
    for (var j = 0; j < i; j++) {
      k += "*";
    }
    k += "\n";
  }
  console.log(k);
}

// ---------- IF STATEMENT ----------
function contohIf() {
  for (var i = 1; i <= 10; i++) {
    if (i <= 6) {
      console.log("No. " + i + " beroprasi dengan baik");
    } else {
      console.log("No. " + i + " tidak berfungsi");
    }
  }

  var angka = prompt("Masukan Angka :");
  if (angka % 2 == 0) {
    alert(angka + " adalah angka GENAP");
  } else if (angka % 2 == 1) {
    alert(angka + " adalah angka GANJIL");
  } else {
    alert("yang anda masukan bukan angka!");
  }
}

// ---------- SWITCH ----------
function contohSwitch() {
  var angka = parseInt(prompt("Masukan Angka :"));

  switch (angka) {
    case 1:
      alert("Anda Memasukan angka " + angka);
      break; // bila tidak memakai break, maka akan menjalankan fungsi dibawahnya
    case 2:
      alert("Anda Memasukan angka " + angka);
      break;
    case 3:
      alert("Anda Memasukan angka " + angka);
      break;
    default:
      alert("Anda Memasukan angka yang salah");
      break;
  }
}

// ---------- LATIHAN (SUWIT JAWA) ----------
function suwitJawa() {
  var p1 = true;

  while (p1) {
    alert(" ---------- KERTAS GUNTING BATU ---------- ");

    var p2 = true;
    // menampilkan pilihan player
    while (p2) {
      var player = prompt("Masukan pilihan (kertas, gunting, batu) :");
      var hasil;

      // menangkap pilihan computer
      // mengambil angka random
      var bot = Math.floor(Math.random() * 3) + 1;
      if (bot == 1) {
        bot = "kertas";
      } else if (bot == 2) {
        bot = "gunting";
      } else {
        bot = "batu";
      }

      // menentukan rules
      if (player == bot) {
        alert("player = " + player + "\nbot = " + bot + "\nhasil = SERI");
        p2 = false;
      } else if (player == "kertas") {
        hasil = bot == "batu" ? "MENANG" : "KALAH";
        alert(
          "player = " + player + "\nbot = " + bot + "\nhasil = PLAYER " + hasil
        );
        p2 = false;
      } else if (player == "gunting") {
        hasil = bot == "kertas" ? "MENANG" : "KALAH";
        alert(
          "player = " + player + "\nbot = " + bot + "\nhasil = PLAYER " + hasil
        );
        p2 = false;
      } else if (player == "batu") {
        hasil = bot == "gunting" ? "MENANG" : "KALAH";
        alert(
          "player = " + player + "\nbot = " + bot + "\nhasil = PLAYER " + hasil
        );
        p2 = false;
      } else {
        alert("anda memasukan pilihan yang salah!\n\ncoba lagi");
        p2 = true;
      }
    }

    p1 = confirm("Ingin bermain lagi?");
  }

  alert("Terima Kasih sudah bermain");
}

// ---------- FUNCTION (ARGUMENTS) ----------
function contohArguments() {
  var hasil = 0;
  for (var i = 0; i < arguments.length; i++) {
    hasil += arguments[i];
  }
  return hasil;
}

// ---------- FAKTORIAL DI JS (REKURSIF) ----------
function faktorial(n) {
  // faktorial ==> 5! = 5 x 4 x 3 x 2 x 1
  if (n === 0) return 1;
  return n * faktorial(n - 1);
}

// ---------- ARRAY ----------
function contohArray() {
  var nama = ["anggara", "sandi", "anton", "dindin", "arif", "opik", "deri"];

  console.log(nama.length);

  for (var i = 0; i < nama.length; i++) {
    console.log(nama[i]);
  }
}

// ---------- MANIPULASI ARRAY ----------
function manipulasiArray() {
  // 1. menambah isi array
  var arr = [];
  arr[0] = "angga";
  arr[1] = "sandi";

  console.log("menambah isi array : ");
  console.log(arr);

  // 2. menghapus isi array
  var arr2 = ["angga", "sandi", "anton"];
  arr2[1] = undefined;
  console.log("menghapus isi array : ");
  console.log(arr2);

  // 3. Method pada array
  var arr3 = ["angga", "sandi", "anton", "arif", "dindin", "opik", "deri"];

  // a. join
  console.log("method pada array (join) : ");
  console.log(arr3.join(" - "));

  // b. push
  arr3.push("sony");
  console.log("method pada array (push) : ");
  console.log(arr3);

  // c. pop
  arr3.pop();
  console.log("method pada array (pop) : ");
  console.log(arr3);

  // d. unshift
  arr3.unshift("sony");
  console.log("method pada array (unshift) : ");
  console.log(arr3);

  // e. shift
  arr3.shift();
  console.log("method pada array (shift) : ");
  console.log(arr3);

  // f. splice
  arr3.splice(1, 2, "Rezi", "Agung");
  console.log("method pada array (splice) : ");
  console.log(arr3);

  // g. slice
  var arr4 = arr3.slice(1, 3);
  console.log("method pada array (slice) : ");
  console.log(arr4);

  // h. forEach
  console.log("method pada array (forEach) : ");
  arr3.forEach(function (e, i) {
    // i ==> index (opsional)
    console.log("Siswa ke-" + (i + 1) + " adalah " + e);
  });

  var angka = [7, 3, 2, 1, 6, 4, 5, 8];

  // i. map
  console.log("method pada array (map) : ");
  var namaVariable = angka.map(function (e) {
    return e * 2;
  });
  console.log(namaVariable.join(" - "));

  // j. sort
  console.log("method pada array (sort) : ");
  angka.sort();
  console.log(angka.join(" - "));

  // k. filter
  console.log("method pada array (filter) : ");
  var angkaFilter = angka.filter(function (e) {
    return e > 3;
  });
  console.log(angkaFilter.join(" - "));

  // l. find
  console.log("method pada array (find) : ");
  var angkaFind = angka.find(function (x) {
    return x > 6;
  });
  console.log(angkaFind);
}

// ---------- LATIHAN ARRAY DAN FUNCTION ----------
var penumpang = [];

var tambahPenumpang = function (namaPenumpang, penumpang) {
  // jika angkot kosong
  if (penumpang.length == 0) {
    // tambah penumpang di awal array
    penumpang.push(namaPenumpang);
    // kembalikan isi array dan keluar dari function
    return penumpang;
  } else {
    // telusuri seluruh kursi dari awal
    for (var i = 0; i < penumpang.length; i++) {
      // jika ada kursi kosong
      if (penumpang[i] == undefined) {
        // tambah penumpang di kursi tersebut
        penumpang[i] = namaPenumpang;
        // kembalikan isi array dan keluar dari function
        return penumpang;
      } else if (penumpang[i] == namaPenumpang) {
        // tampilkan pesan kesalahan
        console.log(namaPenumpang + " Sudah ada didalam angkot");
        // kembalikan isi array dan keluar dari function
        return penumpang;
      } else if (i == penumpang.length - 1) {
        // tambahkan penumpang di akhir array
        penumpang.push(namaPenumpang);
        // kembalikan isi array dan keluar dari function
        return penumpang;
      }
    }
  }
};

var hapusPenumpang = function (namaPenumpang, penumpang) {
  // jika angkotnya kosong
  if (penumpang.length == 0) {
    // pesan bahwa angkot masih kosong
    console.log("Angkot ini masih kosong");
    // kembalikan isi array dan keluar dari function
    return penumpang;
  } else {
    // menelusuri seluruh kursi
    for (var i = 0; i < penumpang.length; i++) {
      // jika nama penumpang sesuai
      if (penumpang[i] == namaPenumpang) {
        // hapus penumpang dengan mengubah namanya menjadi undefined
        penumpang[i] = undefined;
        return penumpang;
      } else if (i == penumpang.length - 1) {
        console.log(namaPenumpang + " tidak ada didalam angkot");
        return penumpang;
      }
    }
  }
};

// ---------- OBJECT ----------
// object literal
var murid = {
  nama: "Anggara",
  umur: 18,
  nilai: [70, 80, 90], // murid.nilai[2] / murid['nilai'][2] ==> 90
  alamat: {
    jalan: "babakan, G.Manik",
    kota: "bandung", // murid.alamat.kota / murid.alamat['kota'] / murid['alamat']['kota']
    provinsi: "Jawa Barat",
  },
  hai: function () {
    return (
      "Hi, nama saya " +
      this.nama +
      ", umur saya adalah " +
      this.umur +
      " tahun, nilai tertinggi saya adalah " +
      this.nilai[2] +
      ", saya tinggal di " +
      this.alamat["jalan"] +
      ", kota " +
      this.alamat["kota"] +
      ", provinsi " +
      this.alamat["provinsi"] +
      "."
    );
  },
};

// function declaration
function buatObjectMurid(nama, nis, email, jurusan) {
  var murid = {};
  murid.nama = nama;
  murid.nis = nis;
  murid.email = email;
  murid.jurusan = jurusan;
  return murid;
}

// constructor
function Murid(nama, nis, email, jurusan) {
  this.nama = nama;
  this.nis = nis;
  this.email = email;
  this.jurusan = jurusan;
}

// ---------- LATIHAN OBJECT ----------
function Angkot(sopir, trayek, penumpang, kas) {
  this.sopir = sopir;
  this.trayek = trayek;
  this.penumpang = penumpang;
  this.kas = kas;

  this.penumpangNaik = function (namaPenumpang) {
    this.penumpang.push(namaPenumpang);
    return this.penumpang;
  };

  this.penumpangTurun = function (namaPenumpang, bayar) {
    if (this.penumpang.length === 0) {
      console.log("Angkot masih kosong!");
      return false;
    }

    for (var i = 0; i < this.penumpang.length; i++) {
      if (this.penumpang[i] == namaPenumpang) {
        this.penumpang[i] = undefined;
        this.kas += bayar;
        return this.penumpang;
      }
    }
  };
}

// contohPopup();
// contohWhile();
// contohFor();
// contohIf();
// contohSwitch();
// suwitJawa();
// console.log(contohArguments(1, 2, 3, 4, 5, 6));
// console.log(faktorial(5));
// contohArray();
// manipulasiArray();
// buatObjectMurid("Anggara", "19204288", "shalangga047@gmail.com", "RPL");
var objectConstructor = new Murid(
  "Anggara",
  "19204288",
  "shalangga047@gmail.com",
  "RPL"
);
var angkot1 = new Angkot("sandi", ["cikijing", "talaga"], [], 0);
var angkot2 = new Angkot("anton", ["maja", "bantarujeg"], [], 0);
