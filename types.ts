
export interface Anak {
  id: string;
  nama: string;
  nik: string;
  tanggalLahir: string;
  usia: string; // e.g., "2 tahun 3 bulan"
  beratBadan: number; // in kg
  tinggiBadan: number; // in cm
  noBPJS: string;
  namaOrangTua: string;
}

export interface IbuHamil {
  id: string;
  nama: string;
  nik: string;
  usia: number;
  usiaKehamilan: number; // in weeks
  noBPJS: string;
  namaSuami: string;
}

export type ViewType = 'anak' | 'ibuHamil';

export interface HistoryLog {
  id: string;
  timestamp: Date;
  user: string;
  action: string;
  details: string;
}
