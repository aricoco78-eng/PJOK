/**
 * Konfigurasi Utama Aplikasi Tes Sumatif
 * SD N 1 DANGINTUKADAYA - JEMBRANA
 */

export interface KKTPPredicate {
  label: 'Perlu Bimbingan' | 'Cukup' | 'Baik' | 'Sangat Baik';
  status: 'Lulus' | 'Belum Lulus';
  range: string;
  badgeClass: string;
}

export function getKKTPPredicate(nilai: number): KKTPPredicate {
  if (nilai >= 90) {
    return {
      label: 'Sangat Baik',
      status: 'Lulus',
      range: '90-100',
      badgeClass: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    };
  }
  if (nilai >= 79) {
    return {
      label: 'Baik',
      status: 'Lulus',
      range: '79-89',
      badgeClass: 'bg-blue-100 text-blue-800 border-blue-200',
    };
  }
  if (nilai >= 69) {
    return {
      label: 'Cukup',
      status: 'Lulus',
      range: '69-78',
      badgeClass: 'bg-indigo-100 text-indigo-800 border-indigo-200',
    };
  }
  return {
    label: 'Perlu Bimbingan',
    status: 'Belum Lulus',
    range: '0-68',
    badgeClass: 'bg-amber-100 text-amber-800 border-amber-200',
  };
}

export const CONFIG = {
  SEKOLAH: "SD N 1 DANGINTUKADAYA",
  ALAMAT_SEKOLAH: "Jembrana",
  KOTA: "Jembrana",
  KELAS: "6",
  MATA_PELAJARAN: "PJOK",
  MATERI: "Permainan & Olahraga (Bola Besar, Bola Kecil/Net, Atletik) serta Aktivitas Bela Diri Pencak Silat",
  LINGKUP_MATERI:
    "1. Variasi & Kombinasi Gerak Dasar Permainan Bola Besar (Sepak Bola, Bola Voli, Bola Basket); 2. Permainan Net/Bola Kecil (Kasti, Rounders, Bulu Tangkis, Tenis Meja) & Atletik (Jalan, Lari, Lompat, Lempar); 3. Aktivitas Bela Diri Pencak Silat",
  GURU: "I MADE KARIASA,S.PD",
  LABEL_NIP_GURU: "NIPPPK",
  NIP_GURU: "199304162022211002",
  KEPALA_SEKOLAH: "IDA AYU KOMANG BINTANG,S.PD.,M.SI",
  NIP_KEPALA_SEKOLAH: "196712311989072012",
  KKTP: 69, // Batas minimal kategori Cukup (69-78)
  KKTP_SCALE_TEXT: "0–68 Perlu Bimbingan | 69–78 Cukup | 79–89 Baik | 90–100 Sangat Baik",
  ADMIN_PASSWORD: "GURUADMIN",

  // Endpoint Google Apps Script Web App utama bawaan aplikasi
  GOOGLE_APPS_SCRIPT_URL: "https://script.google.com/macros/s/AKfycbwqDAcnvERQaEnGNfkFzuBGRiYtlvcdQZKyr4nM0oXUwIPlB0nDS3mbwa16a-W7HIzO7w/exec",
};
