export interface Product {
    id: string;
    produkType: string;
    imgUrl: string[];
    nama: string;
    model: string;
    harga: number;
    stok: number;
    baseClock: number | null;
    boostClock: number | null;
    jumlahCore: number | null;
    jumlahThread: number | null;
    speed: number | null;
    ukuran: number | null;
    chipset: string | null;
    processor: string | null;
}
