import { Question } from '../types';

import sepakBolaImg from '../assets/images/pjok_sepak_bola_1795579164264.jpg';
import bolaVoliImg from '../assets/images/pjok_bola_voli_1795579164239.jpg';
import buluTangkisImg from '../assets/images/pjok_bulu_tangkis_1795579164623.jpg';
import atletikLariImg from '../assets/images/pjok_atletik_lari_1795579165645.jpg';
import pencakSilatImg from '../assets/images/pjok_pencak_silat_1795579165181.jpg';

/**
 * Bank Soal Tes Sumatif PJOK Kelas 6 - Kurikulum Merdeka
 * Lingkup Materi:
 * 1. Permainan dan Olahraga:
 *    - Variasi & kombinasi gerak dasar (lokomotor, nonlokomotor, manipulatif) pada permainan invasi/bola besar
 *      (sepak bola, bola voli, bola basket)
 *    - Permainan net/bola kecil (kasti, rounders, bulu tangkis, tenis meja)
 *    - Atletik (jalan, lari, lompat, lempar)
 * 2. Aktivitas Bela Diri (Pencak Silat):
 *    - Kuda-kuda, pola langkah, pukulan, tendangan, tangkisan, dan elakan/hindaran
 *
 * Komposisi:
 * - 30 Pilihan Ganda (PG, 4 opsi A–D)
 * - 5 Pilihan Ganda Kompleks (PGK, 3 opsi A–C, lebih dari 1 jawaban benar)
 * - 5 Pilihan Ganda Kompleks Kategori (PGK Kategori, 3 pernyataan Benar/Salah)
 */
export const INITIAL_QUESTIONS: Question[] = [
  // =========================================================================
  // PILIHAN GANDA (1 - 30) : 4 OPSI (A - D)
  // =========================================================================

  // --- BOLA BESAR / PERMAINAN INVASI: SEPAK BOLA (SOAL 1 - 4) ---
  {
    id: 1,
    type: 'pg',
    topic: 'Permainan Bola Besar (Sepak Bola)',
    elemen: 'Pengetahuan Gerak',
    difficulty: 'Mudah',
    imageUrl: sepakBolaImg,
    imageCaption: 'Siswa SD mempraktikkan gerak menendang bola untuk mengumpan ke teman satu tim',
    text: 'Perhatikan gambar di atas. Dalam permainan sepak bola, bagian kaki yang paling tepat dan akurat digunakan untuk mengumpan (passing) jarak pendek kepada teman satu tim seperti tampak pada gambar adalah ....',
    options: [
      { id: 'A', text: 'Kaki bagian dalam' },
      { id: 'B', text: 'Tumit kaki bagian belakang' },
      { id: 'C', text: 'Ujung jari kaki' },
      { id: 'D', text: 'Telapak kaki bagian tengah' },
    ],
    correctAnswer: 'A',
    explanation:
      'Mengumpan (passing) jarak pendek dalam sepak bola paling efektif menggunakan kaki bagian dalam karena memiliki bidang sentuh yang luas sehingga arah bola lebih akurat.',
  },
  {
    id: 2,
    type: 'pg',
    topic: 'Permainan Bola Besar (Sepak Bola)',
    elemen: 'Keterampilan Gerak',
    difficulty: 'Sedang',
    text: 'Pada permainan sepak bola, seorang siswa berlari sambil menggiring bola, kemudian berhenti sejenak dan menendang bola ke arah gawang. Rangkaian gerakan tersebut merupakan kombinasi gerak dasar ....',
    options: [
      { id: 'A', text: 'Nonlokomotor dan manipulatif saja' },
      { id: 'B', text: 'Lokomotor dan manipulatif' },
      { id: 'C', text: 'Lokomotor dan nonlokomotor saja' },
      { id: 'D', text: 'Keseimbangan statis dan melayang' },
    ],
    correctAnswer: 'B',
    explanation:
      'Berlari berpindah tempat adalah gerak lokomotor, sedangkan menggiring dan menendang bola menggunakan alat/objek merupakan gerak manipulatif.',
  },
  {
    id: 3,
    type: 'pg',
    topic: 'Permainan Bola Besar (Sepak Bola)',
    elemen: 'Pengetahuan Gerak',
    difficulty: 'Sedang',
    text: 'Ketika menerima umpan bola datar dari teman dalam permainan sepak bola, seorang pemain menekuk lutut dan menahan laju bola menggunakan kaki bagian dalam sebelum mengopernya kembali. Gerakan menahan bola tersebut termasuk gerak dasar ....',
    options: [
      { id: 'A', text: 'Lokomotor' },
      { id: 'B', text: 'Nonlokomotor' },
      { id: 'C', text: 'Manipulatif' },
      { id: 'D', text: 'Atletik' },
    ],
    correctAnswer: 'C',
    explanation:
      'Mengontrol atau menghentikan bola melibatkan penguasaan objek (bola) sehingga termasuk gerak dasar manipulatif yang dikombinasikan dengan menekuk lutut (nonlokomotor).',
  },
  {
    id: 4,
    type: 'pg',
    topic: 'Permainan Bola Besar (Sepak Bola)',
    elemen: 'Pengetahuan Gerak',
    difficulty: 'Sukar',
    text: 'Andi melihat penjaga gawang lawan berdiri agak maju ke depan saat ia membawa bola di luar kotak penalti. Untuk mencetak gol dengan tendangan melambung atau keras terarah ke sudut gawang, bagian kaki yang paling tepat digunakan Andi adalah ....',
    options: [
      { id: 'A', text: 'Telapak kaki bagian depan' },
      { id: 'B', text: 'Sisi luar tumit' },
      { id: 'C', text: 'Kaki bagian luar untuk lemparan ke dalam' },
      { id: 'D', text: 'Punggung kaki (kura-kura kaki)' },
    ],
    correctAnswer: 'D',
    explanation:
      'Menendang dengan punggung kaki (kura-kura kaki) menghasilkan tendangan yang keras, bertenaga, dan dapat diarahkan ke gawang jarak jauh.',
  },

  // --- BOLA BESAR / PERMAINAN NET: BOLA VOLI (SOAL 5 - 7) ---
  {
    id: 5,
    type: 'pg',
    topic: 'Permainan Bola Besar (Bola Voli)',
    elemen: 'Pengetahuan Gerak',
    difficulty: 'Mudah',
    imageUrl: bolaVoliImg,
    imageCaption: 'Siswa melakukan sikap menekuk lutut dan merapatkan kedua lengan lurus ke depan saat menerima bola voli',
    text: 'Perhatikan gambar di atas. Teknik dasar yang sedang dipraktikkan oleh siswa pada gambar tersebut adalah ....',
    options: [
      { id: 'A', text: 'Passing atas' },
      { id: 'B', text: 'Passing bawah' },
      { id: 'C', text: 'Servis atas' },
      { id: 'D', text: 'Smash' },
    ],
    correctAnswer: 'B',
    explanation:
      'Sikap lutut ditekuk, kedua lengan lurus dirapatkan ke depan dengan telapak tangan saling menggenggam untuk memantulkan bola dari bawah disebut passing bawah.',
  },
  {
    id: 6,
    type: 'pg',
    topic: 'Permainan Bola Besar (Bola Voli)',
    elemen: 'Keterampilan Gerak',
    difficulty: 'Sedang',
    text: 'Dalam permainan bola voli, saat melakukan passing bawah, posisi kedua lutut sedikit ditekuk kemudian diluruskan bersamaan dengan ayunan kedua lengan ke atas. Gerak menekuk dan meluruskan lutut di tempat tersebut merupakan gerak dasar ....',
    options: [
      { id: 'A', text: 'Lokomotor' },
      { id: 'B', text: 'Manipulatif' },
      { id: 'C', text: 'Nonlokomotor' },
      { id: 'D', text: 'Meluncur' },
    ],
    correctAnswer: 'C',
    explanation:
      'Menekuk dan meluruskan lutut serta mengayun lengan di tempat tanpa berpindah posisi merupakan gerak dasar nonlokomotor yang dikombinasikan dengan memantulkan bola (manipulatif).',
  },
  {
    id: 7,
    type: 'pg',
    topic: 'Permainan Bola Besar (Bola Voli)',
    elemen: 'Pengetahuan Gerak',
    difficulty: 'Sukar',
    text: 'Perkenaan bola yang benar saat melakukan passing atas dalam permainan bola voli agar bola tidak terpelintir dan mudah diarahkan kepada pengumpan adalah mengenai ....',
    options: [
      { id: 'A', text: 'Seluruh telapak tangan dengan posisi jari dirapatkan' },
      { id: 'B', text: 'Pergelangan tangan bagian dalam' },
      { id: 'C', text: 'Ujung-ujung jari tangan (ruas jari) yang terbuka lentur' },
      { id: 'D', text: 'Kepalan kedua tangan yang dirapatkan' },
    ],
    correctAnswer: 'C',
    explanation:
      'Passing atas dilakukan dengan mendorong bola menggunakan ruas ujung jari-jari tangan yang terbuka dan lentur tepat di atas dahi.',
  },

  // --- BOLA BESAR / PERMAINAN INVASI: BOLA BASKET (SOAL 8 - 10) ---
  {
    id: 8,
    type: 'pg',
    topic: 'Permainan Bola Besar (Bola Basket)',
    elemen: 'Pengetahuan Gerak',
    difficulty: 'Mudah',
    text: 'Teknik mengoper bola setinggi dada secara lurus dan cepat kepada teman satu tim dalam permainan bola basket disebut ....',
    options: [
      { id: 'A', text: 'Bounce pass' },
      { id: 'B', text: 'Overhead pass' },
      { id: 'C', text: 'Dribble' },
      { id: 'D', text: 'Chest pass' },
    ],
    correctAnswer: 'D',
    explanation:
      'Chest pass adalah operan setinggi dada yang dilakukan dengan dua tangan untuk menghasilkan umpan lurus dan cepat ke teman satu tim.',
  },
  {
    id: 9,
    type: 'pg',
    topic: 'Permainan Bola Besar (Bola Basket)',
    elemen: 'Keterampilan Gerak',
    difficulty: 'Sedang',
    text: 'Seorang siswa berjalan cepat lalu berlari sambil memantul-mantulkan bola basket ke lantai (dribbling), kemudian melakukan lemparan ke arah ring. Kombinasi gerak dasar yang terjadi secara berurutan adalah ....',
    options: [
      { id: 'A', text: 'Lokomotor dan manipulatif' },
      { id: 'B', text: 'Nonlokomotor dan keseimbangan' },
      { id: 'C', text: 'Menekuk dan memutar badan saja' },
      { id: 'D', text: 'Statis dan melayang' },
    ],
    correctAnswer: 'A',
    explanation:
      'Berjalan dan berlari merupakan gerak lokomotor, sedangkan memantulkan (dribbling) dan melempar bola ke ring termasuk gerak manipulatif.',
  },
  {
    id: 10,
    type: 'pg',
    topic: 'Permainan Bola Besar (Bola Basket)',
    elemen: 'Pengetahuan Gerak',
    difficulty: 'Sukar',
    text: 'Saat berhadapan dengan pemain bertahan lawan yang bertubuh lebih tinggi dan merentangkan tangan ke atas, teknik operan bola basket yang paling efektif agar bola melewati jangkauan tangannya dengan pantulan lantai adalah ....',
    options: [
      { id: 'A', text: 'Chest pass lurus ke dada' },
      { id: 'B', text: 'Bounce pass (operan pantul)' },
      { id: 'C', text: 'Backhand pass' },
      { id: 'D', text: 'Passing bawah voli' },
    ],
    correctAnswer: 'B',
    explanation:
      'Bounce pass dilakukan dengan memantulkan bola ke lantai terlebih dahulu sehingga efektif melewati hadangan pemain bertahan yang tangannya terentang tinggi.',
  },

  // --- PERMAINAN NET / BOLA KECIL: BULU TANGKIS (SOAL 11 - 13) ---
  {
    id: 11,
    type: 'pg',
    topic: 'Permainan Net (Bulu Tangkis)',
    elemen: 'Pengetahuan Gerak',
    difficulty: 'Mudah',
    imageUrl: buluTangkisImg,
    imageCaption: 'Siswa melakukan pukulan kok menggunakan raket melewati net di lapangan bulu tangkis sekolah',
    text: 'Perhatikan gambar di atas. Dalam permainan bulu tangkis, cara memegang raket seperti orang berjabat tangan dengan posisi ibu jari dan jari telunjuk membentuk huruf "V" disebut pegangan ....',
    options: [
      { id: 'A', text: 'Backhand grip' },
      { id: 'B', text: 'American grip' },
      { id: 'C', text: 'Forehand grip' },
      { id: 'D', text: 'Penhold grip' },
    ],
    correctAnswer: 'C',
    explanation:
      'Forehand grip dilakukan seperti berjabat tangan dengan celah antara ibu jari dan jari telunjuk membentuk huruf V di sisi tangkai raket.',
  },
  {
    id: 12,
    type: 'pg',
    topic: 'Permainan Net (Bulu Tangkis)',
    elemen: 'Keterampilan Gerak',
    difficulty: 'Sedang',
    text: 'Ketika kok melambung ke bagian belakang lapangan dalam permainan bulu tangkis, pemain melangkah cepat ke belakang (lokomotor), menekuk lutut dan mengayunkan bahu (nonlokomotor), lalu memukul kok melambung tinggi ke belakang lapangan lawan. Pukulan tersebut dinamakan ....',
    options: [
      { id: 'A', text: 'Pukulan lob' },
      { id: 'B', text: 'Pukulan dropshot' },
      { id: 'C', text: 'Servis pendek' },
      { id: 'D', text: 'Netting' },
    ],
    correctAnswer: 'A',
    explanation:
      'Pukulan lob adalah pukulan yang mengarahkan kok melambung tinggi dan jauh menuju garis belakang lapangan lawan.',
  },
  {
    id: 13,
    type: 'pg',
    topic: 'Permainan Net (Bulu Tangkis)',
    elemen: 'Pengetahuan Gerak',
    difficulty: 'Sedang',
    text: 'Pukulan servis pendek (short service) pada permainan bulu tangkis bertujuan untuk ....',
    options: [
      { id: 'A', text: 'Mengarahkan kok tinggi ke garis paling belakang lawan' },
      { id: 'B', text: 'Menjatuhkan kok tipis di dekat garis servis depan area lawan' },
      { id: 'C', text: 'Menghasilkan pukulan keras menukik tajam' },
      { id: 'D', text: 'Menghentikan kok di sisi lapangan sendiri' },
    ],
    correctAnswer: 'B',
    explanation:
      'Servis pendek mengarahkan kok serendah mungkin melewati net agar jatuh tepat di dekat garis servis depan lawan.',
  },

  // --- PERMAINAN NET / BOLA KECIL: TENIS MEJA (SOAL 14 - 15) ---
  {
    id: 14,
    type: 'pg',
    topic: 'Permainan Net (Tenis Meja)',
    elemen: 'Pengetahuan Gerak',
    difficulty: 'Mudah',
    text: 'Cara memegang bet dalam permainan tenis meja seperti cara memegang tangkai pena disebut teknik pegangan ....',
    options: [
      { id: 'A', text: 'Shakehand grip' },
      { id: 'B', text: 'Forehand grip' },
      { id: 'C', text: 'Backhand grip' },
      { id: 'D', text: 'Penhold grip' },
    ],
    correctAnswer: 'D',
    explanation:
      'Penhold grip adalah teknik memegang bet tenis meja seperti memegang pena/pulpen, sedangkan shakehand grip seperti berjabat tangan.',
  },
  {
    id: 15,
    type: 'pg',
    topic: 'Permainan Net (Tenis Meja)',
    elemen: 'Keterampilan Gerak',
    difficulty: 'Sedang',
    text: 'Dalam permainan tenis meja, seorang pemain melangkah menyamping ke kiri, menekuk siku, dan memukul bola pingpong menggunakan sisi punggung tangan menghadap arah datangnya bola. Kombinasi gerak tersebut menghasilkan pukulan ....',
    options: [
      { id: 'A', text: 'Backhand' },
      { id: 'B', text: 'Forehand' },
      { id: 'C', text: 'Smash' },
      { id: 'D', text: 'Servis' },
    ],
    correctAnswer: 'A',
    explanation:
      'Pukulan backhand dilakukan dengan posisi punggung tangan menghadap ke arah bola datang/arah pukulan.',
  },

  // --- PERMAINAN BOLA KECIL: KASTI & ROUNDERS (SOAL 16 - 18) ---
  {
    id: 16,
    type: 'pg',
    topic: 'Permainan Bola Kecil (Kasti & Rounders)',
    elemen: 'Keterampilan Gerak',
    difficulty: 'Mudah',
    text: 'Dalam permainan bola kasti, kombinasi gerak dasar yang dilakukan oleh pemukul setelah berhasil memukul bola adalah ....',
    options: [
      { id: 'A', text: 'Duduk diam di ruang bebas' },
      { id: 'B', text: 'Menangkap bola lalu melempar ke penjaga' },
      { id: 'C', text: 'Meletakkan pemukul lalu berlari menuju tiang hinggap' },
      { id: 'D', text: 'Melompat di tempat sambil memutar lengan' },
    ],
    correctAnswer: 'C',
    explanation:
      'Setelah memukul bola (manipulatif), pemukul harus meletakkan tongkat pemukul dengan benar dan segera berlari (lokomotor) menuju tiang hinggap.',
  },
  {
    id: 17,
    type: 'pg',
    topic: 'Permainan Bola Kecil (Kasti & Rounders)',
    elemen: 'Pengetahuan Gerak',
    difficulty: 'Sedang',
    text: 'Teknik melempar bola jarak dekat dengan arah datar dan cepat untuk mematikan pelari lawan dalam permainan kasti atau rounders adalah lemparan ....',
    options: [
      { id: 'A', text: 'Melambung tinggi' },
      { id: 'B', text: 'Mendatar setinggi dada' },
      { id: 'C', text: 'Menyusur tanah pelan' },
      { id: 'D', text: 'Memantul ke atas' },
    ],
    correctAnswer: 'B',
    explanation:
      'Lemparan mendatar setinggi dada memiliki laju cepat dan lurus sehingga tepat digunakan untuk mengoper cepat maupun mematikan pelari.',
  },
  {
    id: 18,
    type: 'pg',
    topic: 'Permainan Bola Kecil (Kasti & Rounders)',
    elemen: 'Pengembangan Karakter dan Nilai Gerak',
    difficulty: 'Sukar',
    text: 'Pada permainan rounders, terdapat lima tempat hinggap (base) berbentuk segi lima yang harus dilewati pelari setelah memukul bola. Jika seorang pelari memukul bola sangat jauh hingga mampu melewati semua base secara berurutan dan kembali ke ruang bebas tanpa terhenti, maka ia memperoleh nilai ....',
    options: [
      { id: 'A', text: 'Home run (nilai penuh/2 poin)' },
      { id: 'B', text: 'Pelanggaran keluar lapangan' },
      { id: 'C', text: 'Pergantian regu jaga' },
      { id: 'D', text: 'Kartu peringatan' },
    ],
    correctAnswer: 'A',
    explanation:
      'Dalam rounders, pelari yang berhasil memukul bola lalu berlari melewati seluruh base (1, 2, 3, 4, dan home plate/base 5) secara langsung tanpa berhenti mencetak home run.',
  },

  // --- ATLETIK: JALAN, LARI, LOMPAT, LEMPAR (SOAL 19 - 24) ---
  {
    id: 19,
    type: 'pg',
    topic: 'Atletik (Jalan Cepat)',
    elemen: 'Pengetahuan Gerak',
    difficulty: 'Mudah',
    text: 'Perbedaan utama antara gerak dasar jalan cepat dan lari pada cabang olahraga atletik adalah ....',
    options: [
      { id: 'A', text: 'Pada jalan cepat selalu ada satu kaki yang menempel/kontak dengan tanah' },
      { id: 'B', text: 'Pada jalan cepat kedua kaki harus melayang di udara setiap langkah' },
      { id: 'C', text: 'Pada lari kedua tangan tidak boleh diayunkan' },
      { id: 'D', text: 'Pada jalan cepat tubuh harus membungkuk rendah' },
    ],
    correctAnswer: 'A',
    explanation:
      'Dalam jalan cepat tidak ada fase melayang; salah satu kaki wajib selalu kontak dengan tanah sebelum kaki belakang diangkat.',
  },
  {
    id: 20,
    type: 'pg',
    topic: 'Atletik (Lari Jarak Pendek)',
    elemen: 'Pengetahuan Gerak',
    difficulty: 'Mudah',
    imageUrl: atletikLariImg,
    imageCaption: 'Siswa bersiap melakukan start jongkok di garis start lintasan lari sekolah',
    text: 'Perhatikan gambar di atas. Jenis start yang digunakan oleh siswa pada gambar untuk perlombaan lari jarak pendek (sprint) 60 meter atau 100 meter adalah ....',
    options: [
      { id: 'A', text: 'Start berdiri (standing start)' },
      { id: 'B', text: 'Start jongkok (crouching start)' },
      { id: 'C', text: 'Start melayang (flying start)' },
      { id: 'D', text: 'Start duduk' },
    ],
    correctAnswer: 'B',
    explanation:
      'Lari jarak pendek (sprint) selalu diawali dengan start jongkok (aba-aba: Bersedia, Siap, Ya/bunyi peluit) untuk menghasilkan tolakan awal yang kuat.',
  },
  {
    id: 21,
    type: 'pg',
    topic: 'Atletik (Lari Estafet)',
    elemen: 'Keterampilan Gerak',
    difficulty: 'Sedang',
    text: 'Dalam lomba lari sambung (estafet), pelari ke-2, ke-3, dan ke-4 menerima tongkat sambil berlari tanpa harus berhenti di tempat. Jenis start yang digunakan oleh pelari ke-2, ke-3, dan ke-4 adalah ....',
    options: [
      { id: 'A', text: 'Start jongkok' },
      { id: 'B', text: 'Start duduk' },
      { id: 'C', text: 'Start melayang' },
      { id: 'D', text: 'Start menyamping' },
    ],
    correctAnswer: 'C',
    explanation:
      'Pelari pertama menggunakan start jongkok, sedangkan pelari ke-2, ke-3, dan ke-4 menggunakan start melayang karena menerima tongkat sambil berlari.',
  },
  {
    id: 22,
    type: 'pg',
    topic: 'Atletik (Lompat Jauh)',
    elemen: 'Pengetahuan Gerak',
    difficulty: 'Sedang',
    text: 'Urutan tahapan gerak dasar yang benar dalam melakukan lompat jauh adalah ....',
    options: [
      { id: 'A', text: 'Tolakan – awalan – mendarat – melayang' },
      { id: 'B', text: 'Awalan – melayang – tolakan – mendarat' },
      { id: 'C', text: 'Melayang – tolakan – awalan – mendarat' },
      { id: 'D', text: 'Awalan – tolakan – melayang di udara – mendarat' },
    ],
    correctAnswer: 'D',
    explanation:
      'Empat tahapan berurutan lompat jauh adalah awalan (lari cepat), tolakan (satu kaki terkuat di papan tumpu), melayang di udara, dan mendarat dengan dua kaki di bak pasir.',
  },
  {
    id: 23,
    type: 'pg',
    topic: 'Atletik (Lompat Jauh)',
    elemen: 'Keterampilan Gerak',
    difficulty: 'Sukar',
    text: 'Pada saat mendarat di bak pasir dalam lompat jauh, sikap tubuh yang aman untuk menghindari cedera sekaligus memperoleh hasil lompatan terjauh adalah ....',
    options: [
      { id: 'A', text: 'Mendarat dengan kedua kaki bersamaan, lutut mengeper, dan badan condong ke depan' },
      { id: 'B', text: 'Mendarat dengan satu kaki lurus dan badan condong ke belakang' },
      { id: 'C', text: 'Menjatuhkan pinggul dan tangan ke belakang di bak pasir' },
      { id: 'D', text: 'Mengunci kedua lutut agar tetap kaku saat menyentuh pasir' },
    ],
    correctAnswer: 'A',
    explanation:
      'Mendarat dengan dua kaki mengeper dan badan condong ke depan mencegah cedera lutut serta mencegah tangan/pantat jatuh ke belakang yang memperpendek jarak pengukuran.',
  },
  {
    id: 24,
    type: 'pg',
    topic: 'Atletik (Lempar / Tolak)',
    elemen: 'Pengetahuan Gerak',
    difficulty: 'Sedang',
    text: 'Pada pembelajaran atletik nomor lempar bagi siswa SD (seperti lempar bola berekor/turbo atau tolak peluru modifikasi), kombinasi gerak dasar yang dilakukan saat melangkah menyilang kemudian melempar sejauh-jauhnya ke depan adalah ....',
    options: [
      { id: 'A', text: 'Lokomotor dan nonlokomotor saja' },
      { id: 'B', text: 'Lokomotor, nonlokomotor, dan manipulatif' },
      { id: 'C', text: 'Keseimbangan diam tanpa objek' },
      { id: 'D', text: 'Gerak ritmik berpasangan' },
    ],
    correctAnswer: 'B',
    explanation:
      'Melangkah menyilang (lokomotor), memutar pinggang dan menarik lengan ke belakang (nonlokomotor), lalu melempar/menolak alat ke depan (manipulatif) merupakan kombinasi ketiganya.',
  },

  // --- AKTIVITAS BELA DIRI PENCAK SILAT (SOAL 25 - 30) ---
  {
    id: 25,
    type: 'pg',
    topic: 'Bela Diri (Pencak Silat - Kuda-kuda)',
    elemen: 'Pengetahuan Gerak',
    difficulty: 'Mudah',
    imageUrl: pencakSilatImg,
    imageCaption: 'Siswa berlatih pencak silat dengan posisi kaki terbuka lebar, kedua lutut ditekuk, dan berat badan seimbang di tengah',
    text: 'Perhatikan gambar di atas. Sikap posisi kaki yang dibuka lebar ke samping dengan kedua lutut ditekuk dan berat badan bertumpu merata di tengah seperti tampak pada pesilat di depan adalah ....',
    options: [
      { id: 'A', text: 'Kuda-kuda depan' },
      { id: 'B', text: 'Kuda-kuda belakang' },
      { id: 'C', text: 'Kuda-kuda tengah' },
      { id: 'D', text: 'Kuda-kuda silang' },
    ],
    correctAnswer: 'C',
    explanation:
      'Kuda-kuda tengah dilakukan dengan membuka kedua kaki ke samping sejajar, kedua lutut ditekuk, dan titik berat badan berada tepat di tengah sebagai dasar keseimbangan.',
  },
  {
    id: 26,
    type: 'pg',
    topic: 'Bela Diri (Pencak Silat - Pola Langkah)',
    elemen: 'Keterampilan Gerak',
    difficulty: 'Sedang',
    text: 'Dalam pencak silat, teknik perpindahan posisi kaki yang berbentuk huruf "U", segitiga, atau zig-zag untuk mendekati lawan atau menghindari serangan termasuk gerak dasar ....',
    options: [
      { id: 'A', text: 'Pukulan bandul' },
      { id: 'B', text: 'Tangkisan luar' },
      { id: 'C', text: 'Elakan bawah' },
      { id: 'D', text: 'Pola langkah' },
    ],
    correctAnswer: 'D',
    explanation:
      'Pola langkah (seperti langkah lurus, segitiga, huruf U, dan huruf S) adalah teknik berpindah tempat/posisi kaki secara teratur dalam pencak silat.',
  },
  {
    id: 27,
    type: 'pg',
    topic: 'Bela Diri (Pencak Silat - Pukulan)',
    elemen: 'Pengetahuan Gerak',
    difficulty: 'Mudah',
    text: 'Serangan menggunakan lengan dengan tangan mengepal yang diarahkan lurus ke depan sejajar bahu atau ulu hati lawan dalam pencak silat disebut pukulan ....',
    options: [
      { id: 'A', text: 'Pukulan lurus (depan)' },
      { id: 'B', text: 'Pukulan bandul (atas)' },
      { id: 'C', text: 'Pukulan melingkar' },
      { id: 'D', text: 'Pukulan tebasan' },
    ],
    correctAnswer: 'A',
    explanation:
      'Pukulan lurus (pukulan depan) dilakukan dengan lintasan lurus ke depan, kepalan tangan menghadap ke bawah, dan bahu ikut mendorong.',
  },
  {
    id: 28,
    type: 'pg',
    topic: 'Bela Diri (Pencak Silat - Tendangan)',
    elemen: 'Pengetahuan Gerak',
    difficulty: 'Sedang',
    text: 'Dalam pencak silat, tendangan yang dilakukan dengan posisi tubuh menyamping dan perkenaan menggunakan sisi bagian luar telapak kaki atau tumit untuk mendorong sasaran ke samping adalah tendangan ....',
    options: [
      { id: 'A', text: 'Tendangan lurus ke depan' },
      { id: 'B', text: 'Tendangan T (samping)' },
      { id: 'C', text: 'Tendangan belakang' },
      { id: 'D', text: 'Tendangan melingkar bawah' },
    ],
    correctAnswer: 'B',
    explanation:
      'Tendangan T (tendangan samping) membentuk posisi tubuh seperti huruf T saat menendang dengan perkenaan bagian samping/pisau kaki atau tumit.',
  },
  {
    id: 29,
    type: 'pg',
    topic: 'Bela Diri (Pencak Silat - Tangkisan)',
    elemen: 'Keterampilan Gerak',
    difficulty: 'Sedang',
    text: 'Usaha pembelaan diri dalam pencak silat dengan cara mengadakan kontak langsung untuk mengalihkan arah serangan pukulan atau tendangan lawan menggunakan lengan disebut ....',
    options: [
      { id: 'A', text: 'Elakan' },
      { id: 'B', text: 'Hindaran' },
      { id: 'C', text: 'Tangkisan' },
      { id: 'D', text: 'Kuda-kuda' },
    ],
    correctAnswer: 'C',
    explanation:
      'Tangkisan merupakan pembelaan dengan kontak langsung (menahan/membelokkan serangan lawan menggunakan lengan atau kaki), berbeda dengan elakan yang tanpa kontak.',
  },
  {
    id: 30,
    type: 'pg',
    topic: 'Bela Diri (Pencak Silat - Elakan/Hindaran)',
    elemen: 'Pengetahuan Gerak',
    difficulty: 'Sukar',
    text: 'Ketika lawan melepaskan pukulan lurus ke arah kepala, seorang pesilat segera merendahkan badan dengan menekuk kedua lutut tanpa memindahkan posisi telapak kaki dari lantai sehingga pukulan lawan tidak mengenainya. Gerakan pembelaan tersebut adalah ....',
    options: [
      { id: 'A', text: 'Tangkisan atas dengan lengan' },
      { id: 'B', text: 'Tendangan sabit balasan' },
      { id: 'C', text: 'Pola langkah zig-zag ke belakang' },
      { id: 'D', text: 'Elakan bawah (merendahkan diri)' },
    ],
    correctAnswer: 'D',
    explanation:
      'Elakan adalah pembelaan diri tanpa menyentuh serangan lawan dan tanpa memindahkan kedua kaki (hanya menggeser/merendahkan tubuh seperti elakan bawah, atas, atau samping).',
  },

  // =========================================================================
  // PILIHAN GANDA KOMPLEKS / PGK (31 - 35) : 3 OPSI (A - C), >1 JAWABAN BENAR
  // =========================================================================
  {
    id: 31,
    type: 'pgk',
    topic: 'Permainan Bola Besar (Sepak Bola)',
    elemen: 'Keterampilan Gerak',
    difficulty: 'Sedang',
    imageUrl: sepakBolaImg,
    imageCaption: 'Latihan variasi dan kombinasi gerak dasar passing serta pergerakan dalam permainan sepak bola',
    text: 'Perhatikan gambar latihan sepak bola di atas. Pilihlah pernyataan yang BENAR mengenai variasi dan kombinasi gerak dasar dalam permainan sepak bola! (Pilih lebih dari satu jawaban benar)',
    options: [
      { id: 'A', text: 'Berlari mengejar bola di lapangan merupakan contoh gerak dasar lokomotor.' },
      { id: 'B', text: 'Menendang dan menghentikan bola dengan kaki bagian dalam termasuk gerak dasar manipulatif.' },
      { id: 'C', text: 'Menendang bola dengan kaki tidak pernah membutuhkan keseimbangan tubuh.' },
    ],
    correctAnswer: ['A', 'B'],
    explanation:
      'Pernyataan A (berlari = lokomotor) dan B (menendang/mengontrol bola = manipulatif) benar. Pernyataan C salah karena menendang dengan satu kaki sangat membutuhkan keseimbangan kaki tumpu.',
  },
  {
    id: 32,
    type: 'pgk',
    topic: 'Permainan Bola Besar (Bola Voli & Basket)',
    elemen: 'Pengetahuan Gerak',
    difficulty: 'Sedang',
    imageUrl: bolaVoliImg,
    imageCaption: 'Siswa mempraktikkan sikap tubuh rendah dengan kedua lengan lurus saat melakukan passing bawah',
    text: 'Perhatikan gambar siswa melakukan passing bawah bola voli di atas. Pilihlah pernyataan yang TEPAT mengenai teknik permainan bola besar (voli dan basket)! (Pilih lebih dari satu jawaban benar)',
    options: [
      { id: 'A', text: 'Pada passing bawah bola voli, kedua lengan harus lurus dan rapat saat bola mengenai lengan bawah.' },
      { id: 'B', text: 'Pada permainan bola basket, menggiring bola (dribbling) sambil berlari memadukan gerak lokomotor dan manipulatif.' },
      { id: 'C', text: 'Dalam bola voli, pemain diperbolehkan menangkap dan menahan bola di tangan selama 5 detik sebelum dioper.' },
    ],
    correctAnswer: ['A', 'B'],
    explanation:
      'Pernyataan A dan B benar. Pernyataan C salah karena dalam bola voli bola harus dipantulkan/dimainkan dengan sentuhan cepat, tidak boleh ditangkap atau ditahan.',
  },
  {
    id: 33,
    type: 'pgk',
    topic: 'Permainan Net / Bola Kecil',
    elemen: 'Pengetahuan Gerak',
    difficulty: 'Sedang',
    text: 'Dalam permainan net dan bola kecil (bulu tangkis, tenis meja, kasti, dan rounders), terdapat berbagai kombinasi gerak dasar. Manakah pernyataan berikut yang BENAR? (Pilih lebih dari satu jawaban benar)',
    options: [
      { id: 'A', text: 'Pukulan forehand pada bulu tangkis menggunakan pegangan seperti orang berjabat tangan.' },
      { id: 'B', text: 'Dalam permainan kasti dan rounders, regu pemukul harus berlari menuju tiang hinggap/base setelah memukul bola.' },
      { id: 'C', text: 'Pada permainan tenis meja, bola dipukul di atas lapangan rumput tanpa menggunakan meja dan net.' },
    ],
    correctAnswer: ['A', 'B'],
    explanation:
      'Pernyataan A dan B benar sesuai teknik dasar bulu tangkis dan kasti/rounders. Pernyataan C salah karena tenis meja dimainkan di atas meja khusus yang dibatasi net.',
  },
  {
    id: 34,
    type: 'pgk',
    topic: 'Atletik (Jalan, Lari, Lompat, Lempar)',
    elemen: 'Keterampilan Gerak',
    difficulty: 'Sedang',
    imageUrl: atletikLariImg,
    imageCaption: 'Persiapan start jongkok pada nomor lari jarak pendek cabang atletik',
    text: 'Perhatikan gambar start lari di atas. Pilihlah pernyataan yang BENAR mengenai gerak dasar cabang olahraga atletik! (Pilih lebih dari satu jawaban benar)',
    options: [
      { id: 'A', text: 'Lari jarak pendek (sprint) diawali dengan start jongkok seperti tampak pada gambar.' },
      { id: 'B', text: 'Dalam lompat jauh, tolakan dilakukan menggunakan satu kaki terkuat tepat di papan tumpuan.' },
      { id: 'C', text: 'Pada cabang jalan cepat, kedua kaki boleh melayang bersamaan di udara pada setiap langkah.' },
    ],
    correctAnswer: ['A', 'B'],
    explanation:
      'Pernyataan A (sprint menggunakan start jongkok) dan B (tolakan lompat jauh memakai satu kaki terkuat) benar. Pernyataan C salah karena jalan cepat melarang adanya fase melayang.',
  },
  {
    id: 35,
    type: 'pgk',
    topic: 'Bela Diri (Pencak Silat)',
    elemen: 'Pengetahuan Gerak',
    difficulty: 'Sukar',
    imageUrl: pencakSilatImg,
    imageCaption: 'Latihan jurus pencak silat dengan kuda-kuda kokoh dan gerakan serangan serta pertahanan',
    text: 'Perhatikan gambar latihan pencak silat di atas. Pilihlah pernyataan yang BENAR mengenai teknik dasar bela diri pencak silat! (Pilih lebih dari satu jawaban benar)',
    options: [
      { id: 'A', text: 'Kuda-kuda berfungsi sebagai tumpuan dasar agar keseimbangan tubuh tetap kokoh saat menyerang maupun bertahan.' },
      { id: 'B', text: 'Tangkisan dilakukan dengan membendung atau mengalihkan serangan lawan melalui kontak lengan/kaki.' },
      { id: 'C', text: 'Elakan mengharuskan pesilat menangkap tubuh lawan lalu membantingnya ke matras.' },
    ],
    correctAnswer: ['A', 'B'],
    explanation:
      'Pernyataan A dan B benar. Pernyataan C salah karena elakan adalah teknik menghindar dari serangan lawan tanpa melakukan kontak langsung.',
  },

  // =========================================================================
  // PILIHAN GANDA KOMPLEKS KATEGORI (36 - 40) : 3 PERNYATAAN BENAR / SALAH
  // =========================================================================
  {
    id: 36,
    type: 'pgk_kategori',
    topic: 'Permainan Bola Besar (Sepak Bola & Bola Voli)',
    elemen: 'Pengetahuan Gerak',
    difficulty: 'Sedang',
    imageUrl: bolaVoliImg,
    imageCaption: 'Aktivitas pembelajaran permainan bola besar di sekolah dasar',
    text: 'Tentukan apakah setiap pernyataan mengenai permainan bola besar (sepak bola dan bola voli) di bawah ini bernilai BENAR atau SALAH!',
    statements: [
      {
        id: 's1',
        text: 'Dalam sepak bola, kombinasi berlari sambil menggiring bola lalu menendangnya ke gawang memadukan gerak lokomotor dan manipulatif.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Saat melakukan passing bawah bola voli, kedua siku harus ditekuk rapat ke samping agar pantulan bola melambung tinggi.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Gerakan mengayunkan lengan dari bawah ke atas saat melakukan passing bawah voli merupakan gerak nonlokomotor.',
        correctAnswer: true,
      },
    ],
    explanation:
      'Pernyataan 1 benar (lari = lokomotor, menggiring/menendang = manipulatif). Pernyataan 2 salah karena kedua siku harus diluruskan saat passing bawah. Pernyataan 3 benar.',
  },
  {
    id: 37,
    type: 'pgk_kategori',
    topic: 'Permainan Invasi (Bola Basket)',
    elemen: 'Keterampilan Gerak',
    difficulty: 'Sedang',
    text: 'Tentukan nilai kebenaran (BENAR atau SALAH) untuk setiap pernyataan tentang teknik dasar permainan bola basket berikut ini!',
    statements: [
      {
        id: 's1',
        text: 'Chest pass dilakukan dengan mendorong bola menggunakan kedua tangan dari depan dada secara lurus ke arah teman.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Dalam permainan bola basket, pemain diperbolehkan berlari sambil memeluk bola tanpa memantulkannya ke lantai.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Overhead pass adalah teknik mengoper bola dari atas kepala untuk menjangkau teman yang posisinya jauh atau melewati hadangan lawan.',
        correctAnswer: true,
      },
    ],
    explanation:
      'Pernyataan 1 dan 3 benar. Pernyataan 2 salah karena berlari membawa bola tanpa mendribel termasuk pelanggaran traveling dalam bola basket.',
  },
  {
    id: 38,
    type: 'pgk_kategori',
    topic: 'Permainan Net & Bola Kecil',
    elemen: 'Pengetahuan Gerak',
    difficulty: 'Sedang',
    imageUrl: buluTangkisImg,
    imageCaption: 'Praktik permainan net bulu tangkis di lapangan sekolah',
    text: 'Perhatikan gambar permainan bulu tangkis di atas. Tentukan apakah pernyataan mengenai permainan net dan bola kecil (bulu tangkis, tenis meja, kasti, rounders) berikut bernilai BENAR atau SALAH!',
    statements: [
      {
        id: 's1',
        text: 'Permainan bulu tangkis dan tenis meja termasuk kelompok permainan net karena lapangan dipisahkan oleh jaring/net.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Dalam permainan kasti, menangkap bola lambung dan memukul bola menggunakan kayu pemukul termasuk gerak manipulatif.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Pada permainan tenis meja, pukulan forehand hanya boleh dilakukan dengan melompat tinggi di atas meja.',
        correctAnswer: false,
      },
    ],
    explanation:
      'Pernyataan 1 dan 2 benar. Pernyataan 3 salah karena pukulan forehand tenis meja dilakukan di belakang/sisi meja dengan kuda-kuda siap, bukan melompat di atas meja.',
  },
  {
    id: 39,
    type: 'pgk_kategori',
    topic: 'Atletik (Jalan, Lari, Lompat, Lempar)',
    elemen: 'Pengetahuan Gerak',
    difficulty: 'Sukar',
    imageUrl: atletikLariImg,
    imageCaption: 'Siswa melakukan start jongkok sebelum berlari pada lintasan atletik',
    text: 'Perhatikan gambar kegiatan atletik di atas. Tentukan apakah setiap pernyataan mengenai nomor-nomor atletik berikut bernilai BENAR atau SALAH!',
    statements: [
      {
        id: 's1',
        text: 'Aba-aba resmi pada start jongkok lari jarak pendek adalah "Bersedia", "Siap", dan "Ya" (atau bunyi pistol/peluit).',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Saat mendarat pada lompat jauh, atlet sebaiknya menjatuhkan badan dan kedua tangan ke belakang agar jaraknya lebih jauh.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Nomor atletik mencakup gerak dasar jalan cepat, lari (sprint/estafet), lompat (lompat jauh/tinggi), dan lempar (tolak peluru/lempar turbo).',
        correctAnswer: true,
      },
    ],
    explanation:
      'Pernyataan 1 dan 3 benar. Pernyataan 2 salah karena jatuhan badan/tangan ke belakang akan menjadi titik ukur terdekat dengan papan tumpu sehingga merugikan hasil lompatan.',
  },
  {
    id: 40,
    type: 'pgk_kategori',
    topic: 'Aktivitas Bela Diri (Pencak Silat)',
    elemen: 'Pengembangan Karakter dan Nilai Gerak',
    difficulty: 'Sukar',
    imageUrl: pencakSilatImg,
    imageCaption: 'Siswa mempraktikkan sikap kuda-kuda, pukulan, dan pembelaan diri pencak silat',
    text: 'Perhatikan gambar latihan pencak silat di atas. Tentukan apakah setiap pernyataan mengenai bela diri pencak silat berikut bernilai BENAR atau SALAH!',
    statements: [
      {
        id: 's1',
        text: 'Dalam pencak silat, menggeser atau memindahkan posisi kaki dalam lintasan tertentu untuk menyerang maupun bertahan disebut pola langkah.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Perbedaan utama tangkisan dan elakan adalah tangkisan melibatkan kontak langsung dengan serangan lawan, sedangkan elakan menghindari serangan tanpa kontak.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Keterampilan pencak silat boleh digunakan oleh siswa untuk menakut-nakuti atau berkelahi dengan teman di luar pembelajaran.',
        correctAnswer: false,
      },
    ],
    explanation:
      'Pernyataan 1 dan 2 benar sesuai konsep teknik pencak silat. Pernyataan 3 salah karena pencak silat menjunjung tinggi nilai sportivitas, pengendalian diri, dan budi pekerti luhur.',
  },
];
