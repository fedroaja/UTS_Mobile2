import { Injectable } from '@angular/core';
import { Product } from './home.model';
import {FormGroup} from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class HomeService {
  productHaveStock = [];
  private product: Product[] = [
    {
      id: 'p1',
      produkType: 'CPU',
      imgUrl: ['https://images-na.ssl-images-amazon.com/images/I/71h68eptZwL._AC_SX466_.jpg','https://images-na.ssl-images-amazon.com/images/I/71h68eptZwL._AC_SX466_.jpg'],
      nama: 'Intel',
      model: 'i7',
      harga: 1500000,
      stok: 100,
      baseClock: 10,
      boostClock: 20,
      jumlahCore: 4,
      jumlahThread: 8,
      speed: null,
      ukuran: null,
      chipset: null,
      processor: null,
    },
    {
      id: 'p2',
      produkType: 'GPU',
      imgUrl: ['https://images-na.ssl-images-amazon.com/images/I/71h68eptZwL._AC_SX466_.jpg','https://images-na.ssl-images-amazon.com/images/I/71h68eptZwL._AC_SX466_.jpg'],
      nama: 'AMD',
      model: 'i6',
      harga: 15055,
      stok: 10,
      baseClock: null,
      boostClock: null,
      jumlahCore: null,
      jumlahThread: null,
      speed: null,
      ukuran: null,
      chipset: null,
      processor: null,
    },
    {
      id: 'p3',
      produkType: 'RAM',
      imgUrl: ['https://i0.wp.com/edusoftcenter.com/wp-content/uploads/2018/09/Best-Budget-Processor-CPU.png?fit=640%2C317&ssl=1','https://images-na.ssl-images-amazon.com/images/I/71h68eptZwL._AC_SX466_.jpg'],
      nama: 'zeus',
      model: 'n300',
      harga: 15000,
      stok: 400,
      baseClock: null,
      boostClock: null,
      jumlahCore: null,
      jumlahThread: null,
      speed: 14,
      ukuran: 8,
      chipset: null,
      processor: null,
    },
    {
      id: 'p4',
      produkType: 'Motherboard',
      imgUrl: ['https://i0.wp.com/edusoftcenter.com/wp-content/uploads/2018/09/Best-Budget-Processor-CPU.png?fit=640%2C317&ssl=1','https://images-na.ssl-images-amazon.com/images/I/71h68eptZwL._AC_SX466_.jpg'],
      nama: 'papan ibu',
      model: 'Z-300',
      harga: 1534000,
      stok: 1,
      baseClock: null,
      boostClock: null,
      jumlahCore: null,
      jumlahThread: null,
      speed: null,
      ukuran: null,
      chipset: 'z490',
      processor: 'i7',
    }
  ];


  constructor() { }

  getAllProduct(){
    this.productHaveStock = [];
    let j = 0;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0 ; i < this.product.length; i++){
      if (this.product[i].stok > 0){
        this.productHaveStock[j] = this.product[i];
        j++;
      }
    }
    return [...this.productHaveStock];
  }

  getProduct(productId: string) {
    return {...this.product.find(product => {
      return product.id === productId;
    })};

  }

  addProduct(data: FormGroup){
    let DATA = {
      id: 'p' + (parseInt(this.product[this.product.length-1].id.substring(1))+1).toString(),
      produkType : data.value.type,
      imgUrl:[data.value.foto1,data.value.foto2],
      nama: data.value.nama,
      model: data.value.model,
      harga: data.value.harga,
      stok: data.value.stok,
      baseClock: data.value.baseClock,
      boostClock: data.value.boostClock,
      jumlahCore: data.value.core,
      jumlahThread: data.value.thread,
      speed: data.value.speed,
      ukuran: data.value.ukuran,
      chipset: data.value.chipset,
      processor: data.value.processor,
    }
    this.product.push(DATA)
  }

  deleteProduk(produkId){
    this.product = this.product.filter(produk => {
      return produk.id !== produkId;
    });
  }

  editProduk(produkId, editedProduk){
    return {...this.product.find(product => {
        if (product.id === produkId){
          product.nama = editedProduk['editedNama'];
          product.imgUrl = [editedProduk['editedImg1'],editedProduk['editedImg2']];
          product.model = editedProduk['editedModel'];
          product.harga = editedProduk['editedHarga'];
          product.stok = editedProduk['editedStok'];
          product.baseClock = editedProduk['editedBaseClock'];
          product.boostClock = editedProduk['editedBoostClock'];
          product.jumlahCore = editedProduk['editedCore'];
          product.jumlahThread = editedProduk['editedThread'];
          product.speed = editedProduk['editedSpeed'];
          product.ukuran = editedProduk['editedUkuran'];
          product.chipset = editedProduk['editedChipset'];
          product.processor = editedProduk['editedProcessor'];
        }
    })};
  }

}
