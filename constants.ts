
import { Anak, IbuHamil } from './types';

export const MOCK_ANAK_DATA: Anak[] = [
  { id: 'A001', nama: 'Budi Hartono', nik: '3273010101200001', tanggalLahir: '2022-01-01', usia: '2 th 5 bln', beratBadan: 12.5, tinggiBadan: 85, noBPJS: '0001234567890', namaOrangTua: 'Ahmad & Siti' },
  { id: 'A002', nama: 'Citra Lestari', nik: '3273010202210002', tanggalLahir: '2021-02-02', usia: '3 th 4 bln', beratBadan: 14.2, tinggiBadan: 92, noBPJS: '0001234567891', namaOrangTua: 'Joko & Wati' },
  { id: 'A003', nama: 'Dewi Anggraini', nik: '3273010303230003', tanggalLahir: '2023-03-03', usia: '1 th 3 bln', beratBadan: 9.8, tinggiBadan: 78, noBPJS: '0001234567892', namaOrangTua: 'Eko & Linda' },
  { id: 'A004', nama: 'Eka Wijaya', nik: '3273010404220004', tanggalLahir: '2022-04-04', usia: '2 th 2 bln', beratBadan: 11.0, tinggiBadan: 84, noBPJS: '0001234567893', namaOrangTua: 'Fajar & Maya' },
];

export const MOCK_IBU_HAMIL_DATA: IbuHamil[] = [
  { id: 'IH001', nama: 'Rina Melati', nik: '3273024101900001', usia: 30, usiaKehamilan: 28, noBPJS: '0002345678901', namaSuami: 'Bambang' },
  { id: 'IH002', nama: 'Sari Puspita', nik: '3273024202920002', usia: 28, usiaKehamilan: 16, noBPJS: '0002345678902', namaSuami: 'Agus' },
  { id: 'IH003', nama: 'Tika Wulandari', nik: '3273024303950003', usia: 25, usiaKehamilan: 32, noBPJS: '0002345678903', namaSuami: 'Cecep' },
];
