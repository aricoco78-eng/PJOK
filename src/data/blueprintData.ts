import { Question, QuestionBlueprint, CognitiveLevel, Difficulty } from '../types';

/**
 * Data Acuan Matriks Kisi-Kisi Penulisan Soal Tes Sumatif
 * Kurikulum Merdeka - Fase C (Kelas 6) Mata Pelajaran PJOK
 * Lingkup Materi:
 * 1. Permainan dan Olahraga: Bola Besar (Sepak Bola, Bola Voli, Bola Basket),
 *    Permainan Net/Bola Kecil (Bulu Tangkis, Tenis Meja, Kasti, Rounders),
 *    dan Atletik (Jalan, Lari, Lompat, Lempar)
 * 2. Aktivitas Bela Diri (Pencak Silat): Kuda-kuda, Pola Langkah, Pukulan,
 *    Tendangan, Tangkisan, dan Elakan/Hindaran
 */

export interface BlueprintDefinition {
  elemen: string;
  tujuanPembelajaran: string;
  indikatorSoal: string;
  levelKognitif: CognitiveLevel;
  bobotSkor: number;
}

// Peta acuan default 40 butir soal PJOK (30 PG, 5 PGK, 5 PGK Kategori)
export const DEFAULT_BLUEPRINT_MAP: Record<number, BlueprintDefinition> = {
  1: {
    elemen: 'Pengetahuan Gerak',
    tujuanPembelajaran:
      'Peserta didik memahami teknik dasar menendang/mengumpan bola pada permainan invasi sepak bola.',
    indikatorSoal:
      'Disajikan gambar siswa menendang bola di lapangan, peserta didik dapat menentukan bagian kaki yang tepat untuk mengumpan jarak pendek secara akurat.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  2: {
    elemen: 'Keterampilan Gerak',
    tujuanPembelajaran:
      'Peserta didik menganalisis variasi dan kombinasi gerak dasar lokomotor dan manipulatif dalam permainan sepak bola.',
    indikatorSoal:
      'Disajikan ilustrasi rangkaian gerak berlari, menggiring, dan menendang bola, peserta didik dapat mengidentifikasi kombinasi gerak dasar yang terlibat.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  3: {
    elemen: 'Pengetahuan Gerak',
    tujuanPembelajaran:
      'Peserta didik mengidentifikasi gerak dasar manipulatif dalam mengontrol bola pada permainan sepak bola.',
    indikatorSoal:
      'Peserta didik dapat mengklasifikasikan gerakan menghentikan/menahan laju bola sebagai gerak dasar manipulatif.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  4: {
    elemen: 'Pengetahuan Gerak',
    tujuanPembelajaran:
      'Peserta didik memilih teknik menendang bola yang efektif sesuai situasi permainan sepak bola.',
    indikatorSoal:
      'Disajikan situasi permainan saat menendang bola keras ke arah gawang dari luar kotak penalti, peserta didik dapat menentukan bagian kaki yang tepat (HOTS).',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  5: {
    elemen: 'Pengetahuan Gerak',
    tujuanPembelajaran:
      'Peserta didik mengenal teknik dasar passing dalam permainan bola voli.',
    indikatorSoal:
      'Disajikan gambar siswa memantulkan bola voli dengan kedua lengan lurus ke depan, peserta didik dapat menentukan nama teknik passing bawah.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  6: {
    elemen: 'Keterampilan Gerak',
    tujuanPembelajaran:
      'Peserta didik memahami kombinasi gerak nonlokomotor dan manipulatif pada permainan bola voli.',
    indikatorSoal:
      'Peserta didik dapat menentukan gerak menekuk dan meluruskan lutut di tempat saat passing bawah sebagai gerak dasar nonlokomotor.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  7: {
    elemen: 'Pengetahuan Gerak',
    tujuanPembelajaran:
      'Peserta didik menganalisis perkenaan bola yang benar pada teknik passing atas bola voli.',
    indikatorSoal:
      'Peserta didik dapat menentukan bagian tangan yang tepat menyentuh bola saat melakukan passing atas agar arah umpan akurat (HOTS).',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  8: {
    elemen: 'Pengetahuan Gerak',
    tujuanPembelajaran:
      'Peserta didik memahami berbagai teknik mengoper bola pada permainan bola basket.',
    indikatorSoal:
      'Peserta didik dapat mengidentifikasi istilah chest pass untuk operan setinggi dada dalam bola basket.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  9: {
    elemen: 'Keterampilan Gerak',
    tujuanPembelajaran:
      'Peserta didik mempraktikkan variasi dan kombinasi gerak dasar pada permainan bola basket.',
    indikatorSoal:
      'Disajikan narasi berlari sambil menggiring dan melempar bola ke ring, peserta didik dapat menentukan kombinasi gerak lokomotor dan manipulatif.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  10: {
    elemen: 'Pengetahuan Gerak',
    tujuanPembelajaran:
      'Peserta didik menerapkan strategi memilih teknik operan bola basket sesuai hadangan lawan.',
    indikatorSoal:
      'Disajikan situasi menghadapi lawan yang bertubuh tinggi dan merentangkan tangan, peserta didik dapat memilih teknik bounce pass (HOTS).',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  11: {
    elemen: 'Pengetahuan Gerak',
    tujuanPembelajaran:
      'Peserta didik mengenal teknik pegangan raket pada permainan net bulu tangkis.',
    indikatorSoal:
      'Disajikan gambar siswa bermain bulu tangkis dan deskripsi pegangan berjabat tangan, peserta didik dapat menentukan jenis forehand grip.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  12: {
    elemen: 'Keterampilan Gerak',
    tujuanPembelajaran:
      'Peserta didik memahami kombinasi gerak dasar dan jenis pukulan dalam permainan bulu tangkis.',
    indikatorSoal:
      'Peserta didik dapat mengidentifikasi pukulan kok melambung tinggi ke belakang lapangan lawan sebagai pukulan lob.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  13: {
    elemen: 'Pengetahuan Gerak',
    tujuanPembelajaran:
      'Peserta didik memahami tujuan servis pendek dalam permainan bulu tangkis.',
    indikatorSoal:
      'Peserta didik dapat menjelaskan sasaran jatuhnya kok pada teknik servis pendek bulu tangkis.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  14: {
    elemen: 'Pengetahuan Gerak',
    tujuanPembelajaran:
      'Peserta didik mengenal teknik dasar memegang bet pada permainan tenis meja.',
    indikatorSoal:
      'Peserta didik dapat menentukan istilah penhold grip untuk cara memegang bet seperti memegang pena.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  15: {
    elemen: 'Keterampilan Gerak',
    tujuanPembelajaran:
      'Peserta didik memahami kombinasi gerak melangkah dan memukul bola dalam tenis meja.',
    indikatorSoal:
      'Peserta didik dapat mengidentifikasi pukulan dengan punggung tangan menghadap arah datangnya bola sebagai pukulan backhand.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  16: {
    elemen: 'Keterampilan Gerak',
    tujuanPembelajaran:
      'Peserta didik memahami rangkaian gerak dasar manipulatif dan lokomotor dalam permainan kasti.',
    indikatorSoal:
      'Peserta didik dapat menentukan gerak lanjutan berlari ke tiang hinggap setelah memukul bola kasti.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  17: {
    elemen: 'Pengetahuan Gerak',
    tujuanPembelajaran:
      'Peserta didik memahami jenis lemparan bola kecil dalam permainan kasti dan rounders.',
    indikatorSoal:
      'Peserta didik dapat menentukan jenis lemparan mendatar setinggi dada untuk mematikan pelari lawan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  18: {
    elemen: 'Pengembangan Karakter dan Nilai Gerak',
    tujuanPembelajaran:
      'Peserta didik memahami aturan dan perolehan poin dalam permainan bola kecil rounders.',
    indikatorSoal:
      'Disajikan situasi pelari melewati seluruh base tanpa berhenti setelah memukul jauh, peserta didik dapat menentukan istilah home run (HOTS).',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  19: {
    elemen: 'Pengetahuan Gerak',
    tujuanPembelajaran:
      'Peserta didik membedakan gerak dasar jalan cepat dan lari dalam cabang atletik.',
    indikatorSoal:
      'Peserta didik dapat menentukan ciri utama jalan cepat yaitu selalu ada kontak satu kaki dengan tanah.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  20: {
    elemen: 'Pengetahuan Gerak',
    tujuanPembelajaran:
      'Peserta didik mengenal teknik start pada nomor lari jarak pendek (sprint).',
    indikatorSoal:
      'Disajikan gambar siswa bersiap di garis start lintasan lari, peserta didik dapat mengidentifikasi teknik start jongkok.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  21: {
    elemen: 'Keterampilan Gerak',
    tujuanPembelajaran:
      'Peserta didik memahami penggunaan jenis start pada nomor lari sambung (estafet).',
    indikatorSoal:
      'Peserta didik dapat menentukan start melayang yang digunakan pelari ke-2, ke-3, dan ke-4 dalam lari estafet.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  22: {
    elemen: 'Pengetahuan Gerak',
    tujuanPembelajaran:
      'Peserta didik memahami tahapan gerak dasar lompat jauh secara berurutan.',
    indikatorSoal:
      'Peserta didik dapat mengurutkan tahapan lompat jauh dari awalan, tolakan, melayang, hingga mendarat.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  23: {
    elemen: 'Keterampilan Gerak',
    tujuanPembelajaran:
      'Peserta didik menganalisis teknik mendarat yang aman dan efektif pada lompat jauh.',
    indikatorSoal:
      'Peserta didik dapat menentukan posisi pendaratan dua kaki mengeper dengan badan condong ke depan untuk hasil optimal dan pencegahan cedera (HOTS).',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  24: {
    elemen: 'Pengetahuan Gerak',
    tujuanPembelajaran:
      'Peserta didik mengidentifikasi kombinasi gerak dasar pada atletik nomor lempar/tolak.',
    indikatorSoal:
      'Peserta didik dapat menganalisis perpaduan gerak lokomotor, nonlokomotor, dan manipulatif pada teknik awalan hingga pelepasan lemparan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  25: {
    elemen: 'Pengetahuan Gerak',
    tujuanPembelajaran:
      'Peserta didik mengenal berbagai sikap kuda-kuda dalam bela diri pencak silat.',
    indikatorSoal:
      'Disajikan gambar pesilat membuka kaki ke samping dan menekuk lutut dengan tumpuan di tengah, peserta didik dapat menentukan kuda-kuda tengah.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  26: {
    elemen: 'Keterampilan Gerak',
    tujuanPembelajaran:
      'Peserta didik memahami gerak dasar pola langkah dalam bela diri pencak silat.',
    indikatorSoal:
      'Peserta didik dapat mengidentifikasi teknik perpindahan posisi kaki berbentuk huruf U, segitiga, atau zig-zag sebagai pola langkah.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  27: {
    elemen: 'Pengetahuan Gerak',
    tujuanPembelajaran:
      'Peserta didik mengenal teknik serangan pukulan dalam pencak silat.',
    indikatorSoal:
      'Peserta didik dapat menentukan jenis pukulan lurus ke depan sejajar bahu dalam pencak silat.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  28: {
    elemen: 'Pengetahuan Gerak',
    tujuanPembelajaran:
      'Peserta didik memahami jenis-jenis tendangan pada aktivitas bela diri pencak silat.',
    indikatorSoal:
      'Peserta didik dapat menentukan teknik tendangan T (samping) berdasarkan posisi badan menyamping dan perkenaan sisi telapak kaki.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  29: {
    elemen: 'Keterampilan Gerak',
    tujuanPembelajaran:
      'Peserta didik membedakan teknik pembelaan diri tangkisan dengan pembelaan lain dalam pencak silat.',
    indikatorSoal:
      'Peserta didik dapat menentukan teknik tangkisan sebagai pembelaan diri dengan kontak langsung menggunakan lengan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  30: {
    elemen: 'Pengetahuan Gerak',
    tujuanPembelajaran:
      'Peserta didik memilih teknik elakan/hindaran yang sesuai terhadap arah serangan lawan dalam pencak silat.',
    indikatorSoal:
      'Disajikan skenario serangan pukulan lurus ke arah kepala, peserta didik dapat menentukan teknik elakan bawah tanpa memindahkan tumpuan kaki (HOTS).',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  31: {
    elemen: 'Keterampilan Gerak',
    tujuanPembelajaran:
      'Peserta didik mengidentifikasi kombinasi gerak dasar lokomotor, nonlokomotor, dan manipulatif dalam sepak bola.',
    indikatorSoal:
      'Disajikan gambar latihan sepak bola dan 3 pilihan pernyataan, peserta didik dapat memilih seluruh pernyataan yang benar tentang variasi gerak dasar.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  32: {
    elemen: 'Pengetahuan Gerak',
    tujuanPembelajaran:
      'Peserta didik menentukan kebenaran teknik dasar permainan bola voli dan bola basket.',
    indikatorSoal:
      'Disajikan gambar passing bawah bola voli dan 3 pilihan pernyataan, peserta didik dapat memilih pernyataan yang tepat tentang bola voli dan basket.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  33: {
    elemen: 'Pengetahuan Gerak',
    tujuanPembelajaran:
      'Peserta didik membedakan teknik dan aturan permainan net dan bola kecil (bulu tangkis, tenis meja, kasti, rounders).',
    indikatorSoal:
      'Disajikan 3 pernyataan tentang permainan net/bola kecil, peserta didik dapat memilih seluruh pernyataan yang benar.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  34: {
    elemen: 'Keterampilan Gerak',
    tujuanPembelajaran:
      'Peserta didik mengidentifikasi teknik dasar cabang atletik (jalan, lari, lompat).',
    indikatorSoal:
      'Disajikan gambar start jongkok dan 3 pilihan pernyataan tentang atletik, peserta didik dapat memilih seluruh pernyataan yang tepat.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  35: {
    elemen: 'Pengetahuan Gerak',
    tujuanPembelajaran:
      'Peserta didik mengevaluasi fungsi kuda-kuda, tangkisan, dan elakan dalam pencak silat.',
    indikatorSoal:
      'Disajikan gambar pencak silat dan 3 pilihan pernyataan, peserta didik dapat memilih seluruh pernyataan yang benar tentang teknik pencak silat (HOTS).',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  36: {
    elemen: 'Pengetahuan Gerak',
    tujuanPembelajaran:
      'Peserta didik menilai kebenaran prinsip gerak dasar pada permainan sepak bola dan bola voli.',
    indikatorSoal:
      'Disajikan gambar bola voli dan 3 pernyataan, peserta didik dapat menentukan nilai Benar atau Salah pada masing-masing pernyataan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  37: {
    elemen: 'Keterampilan Gerak',
    tujuanPembelajaran:
      'Peserta didik menilai kebenaran teknik operan dan aturan permainan bola basket.',
    indikatorSoal:
      'Disajikan 3 pernyataan mengenai chest pass, traveling, dan overhead pass pada bola basket, peserta didik dapat menentukan Benar atau Salah.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  38: {
    elemen: 'Pengetahuan Gerak',
    tujuanPembelajaran:
      'Peserta didik mengklasifikasikan permainan net dan menilai gerak manipulatif pada permainan bola kecil.',
    indikatorSoal:
      'Disajikan gambar bulu tangkis dan 3 pernyataan tentang bulu tangkis, kasti, serta tenis meja, peserta didik dapat menentukan Benar atau Salah.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  39: {
    elemen: 'Pengetahuan Gerak',
    tujuanPembelajaran:
      'Peserta didik mengevaluasi aturan start lari, teknik mendarat lompat jauh, dan ruang lingkup cabang atletik.',
    indikatorSoal:
      'Disajikan gambar start jongkok dan 3 pernyataan tentang atletik, peserta didik dapat menentukan nilai Benar atau Salah secara akurat (HOTS).',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  40: {
    elemen: 'Pengembangan Karakter dan Nilai Gerak',
    tujuanPembelajaran:
      'Peserta didik memahami teknik dasar serta nilai sportivitas dalam aktivitas bela diri pencak silat.',
    indikatorSoal:
      'Disajikan gambar pencak silat dan 3 pernyataan tentang pola langkah, tangkisan/elakan, dan etika bela diri, peserta didik dapat menentukan Benar atau Salah (HOTS).',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
};

/**
 * Format label bentuk soal
 */
export function getBentukSoalLabel(type: string): string {
  switch (type) {
    case 'pg':
      return 'Pilihan Ganda (PG)';
    case 'pgk':
      return 'Pilihan Ganda Kompleks (PGK)';
    case 'pgk_kategori':
      return 'Benar / Salah (PGK Kategori)';
    default:
      return 'Pilihan Ganda';
  }
}

/**
 * Format label level kognitif
 */
export function getCognitiveLevelLabel(level: CognitiveLevel): string {
  switch (level) {
    case 'L1':
      return 'L1 (Pemahaman / Mengingat)';
    case 'L2':
      return 'L2 (Aplikasi / Penerapan)';
    case 'L3':
      return 'L3 (Penalaran / Analisis HOTS)';
    default:
      return 'L2 (Aplikasi)';
  }
}

/**
 * Mendapatkan format string ringkas kunci jawaban
 */
export function formatCorrectAnswer(q: Question): string {
  if (q.type === 'pg') {
    return typeof q.correctAnswer === 'string' ? q.correctAnswer : 'A';
  }
  if (q.type === 'pgk') {
    if (Array.isArray(q.correctAnswer)) {
      return q.correctAnswer.join(', ');
    }
    return String(q.correctAnswer || 'A');
  }
  if (q.type === 'pgk_kategori') {
    if (q.statements && q.statements.length > 0) {
      return q.statements
        .map((st, i) => `${i + 1}:${st.correctAnswer ? 'B' : 'S'}`)
        .join(', ');
    }
    return 'B/S';
  }
  return '-';
}

/**
 * Menghasilkan metadata blueprint lengkap untuk butir soal tertentu
 */
export function getQuestionBlueprint(q: Question, index: number): QuestionBlueprint {
  const def = DEFAULT_BLUEPRINT_MAP[q.id];

  const elemen =
    q.elemen ||
    (def ? def.elemen : inferElemenFromTopic(q.topic));

  const levelKognitif: CognitiveLevel =
    q.levelKognitif ||
    (def ? def.levelKognitif : inferLevelFromDifficulty(q.difficulty));

  const tujuanPembelajaran =
    q.tujuanPembelajaran ||
    (def
      ? def.tujuanPembelajaran
      : `Peserta didik mampu memahami dan mempraktikkan variasi serta kombinasi gerak dasar pada materi ${q.topic}.`);

  const indikatorSoal =
    q.indikatorSoal ||
    (def
      ? def.indikatorSoal
      : `Disajikan stimulus tentang ${q.topic}, peserta didik dapat menentukan jawaban yang tepat.`);

  const bobotSkor = q.bobot || (def ? def.bobotSkor : 1);

  return {
    questionId: q.id,
    noSoal: index + 1,
    elemen,
    tujuanPembelajaran,
    materiPokok: q.topic,
    indikatorSoal,
    levelKognitif,
    levelKognitifLabel: getCognitiveLevelLabel(levelKognitif),
    bentukSoal: getBentukSoalLabel(q.type),
    kunciJawaban: formatCorrectAnswer(q),
    bobotSkor,
    difficulty: q.difficulty,
  };
}

function inferElemenFromTopic(topic: string): string {
  const t = topic.toLowerCase();
  if (t.includes('silat') || t.includes('karakter') || t.includes('sportivitas')) {
    return 'Pengembangan Karakter dan Nilai Gerak';
  }
  if (t.includes('kombinasi') || t.includes('atletik')) {
    return 'Keterampilan Gerak';
  }
  return 'Pengetahuan Gerak';
}

function inferLevelFromDifficulty(diff: Difficulty): CognitiveLevel {
  if (diff === 'Mudah') return 'L1';
  if (diff === 'Sukar') return 'L3';
  return 'L2';
}

/**
 * Menghitung rekapitulasi distribusi kisi-kisi soal
 */
export function getBlueprintStatistics(questions: Question[]) {
  const total = questions.length;
  const blueprints = questions.map((q, idx) => getQuestionBlueprint(q, idx));

  const elemenCountMap: Record<string, number> = {};
  const levelCountMap: Record<CognitiveLevel, number> = { L1: 0, L2: 0, L3: 0 };
  const diffCountMap: Record<Difficulty, number> = { Mudah: 0, Sedang: 0, Sukar: 0 };
  const typeCountMap: Record<string, number> = { pg: 0, pgk: 0, pgk_kategori: 0 };

  blueprints.forEach((bp, idx) => {
    elemenCountMap[bp.elemen] = (elemenCountMap[bp.elemen] || 0) + 1;
    levelCountMap[bp.levelKognitif] = (levelCountMap[bp.levelKognitif] || 0) + 1;
    const q = questions[idx];
    if (q) {
      diffCountMap[q.difficulty] = (diffCountMap[q.difficulty] || 0) + 1;
      typeCountMap[q.type] = (typeCountMap[q.type] || 0) + 1;
    }
  });

  const elemenDistribution = Object.entries(elemenCountMap).map(([elemen, count]) => ({
    elemen,
    count,
    percentage: total > 0 ? Math.round((count / total) * 100) : 0,
  }));

  const levelDistribution = [
    {
      level: 'L1' as const,
      label: 'L1 (Pemahaman / C1-C2)',
      desc: 'Mengingat & Memahami konsep dasar',
      count: levelCountMap.L1,
      percentage: total > 0 ? Math.round((levelCountMap.L1 / total) * 100) : 0,
      color: 'blue',
    },
    {
      level: 'L2' as const,
      label: 'L2 (Aplikasi / C3)',
      desc: 'Menerapkan konsep pada konteks nyata',
      count: levelCountMap.L2,
      percentage: total > 0 ? Math.round((levelCountMap.L2 / total) * 100) : 0,
      color: 'emerald',
    },
    {
      level: 'L3' as const,
      label: 'L3 (Penalaran / C4-C6 HOTS)',
      desc: 'Menganalisis & memecahkan masalah kompleks',
      count: levelCountMap.L3,
      percentage: total > 0 ? Math.round((levelCountMap.L3 / total) * 100) : 0,
      color: 'amber',
    },
  ];

  const difficultyDistribution = [
    {
      difficulty: 'Mudah' as const,
      count: diffCountMap.Mudah,
      percentage: total > 0 ? Math.round((diffCountMap.Mudah / total) * 100) : 0,
      color: 'emerald',
    },
    {
      difficulty: 'Sedang' as const,
      count: diffCountMap.Sedang,
      percentage: total > 0 ? Math.round((diffCountMap.Sedang / total) * 100) : 0,
      color: 'blue',
    },
    {
      difficulty: 'Sukar' as const,
      count: diffCountMap.Sukar,
      percentage: total > 0 ? Math.round((diffCountMap.Sukar / total) * 100) : 0,
      color: 'rose',
    },
  ];

  const typeDistribution = [
    {
      type: 'pg',
      label: 'Pilihan Ganda (PG)',
      count: typeCountMap.pg,
      percentage: total > 0 ? Math.round((typeCountMap.pg / total) * 100) : 0,
    },
    {
      type: 'pgk',
      label: 'Pilihan Ganda Kompleks (PGK)',
      count: typeCountMap.pgk,
      percentage: total > 0 ? Math.round((typeCountMap.pgk / total) * 100) : 0,
    },
    ...(typeCountMap.pgk_kategori > 0
      ? [
          {
            type: 'pgk_kategori',
            label: 'Benar / Salah (PGK Kategori)',
            count: typeCountMap.pgk_kategori,
            percentage: total > 0 ? Math.round((typeCountMap.pgk_kategori / total) * 100) : 0,
          },
        ]
      : []),
  ];

  return {
    total,
    blueprints,
    elemenDistribution,
    levelDistribution,
    difficultyDistribution,
    typeDistribution,
  };
}
