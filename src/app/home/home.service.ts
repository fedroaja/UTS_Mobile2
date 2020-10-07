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
      imgUrl: ['https://images-na.ssl-images-amazon.com/images/I/71h68eptZwL._AC_SX466_.jpg','https://i.pcmag.com/imagery/articles/05H4n2dV0nMnFiEUnPG4Sgl-6.fit_scale.size_1050x591.v1569492159.jpg'],
      nama: 'Intel',
      model: 'Core-i7',
      harga: 1500000,
      stok: 100,
      baseClock: 3,
      boostClock: 4,
      jumlahCore: 8,
      jumlahThread: 16,
      speed: null,
      ukuran: null,
      chipset: null,
      processor: null,
    },
    {
      id: 'p2',
      produkType: 'RAM',
      imgUrl: ['https://images-na.ssl-images-amazon.com/images/I/419SRJu4kHL._AC_.jpg','https://ae01.alicdn.com/kf/HTB1BJMHdA9E3KVjSZFGq6A19XXas/TANBASSH-Memori-Ram-Ddr4-8GB-16GB-2400MHz-2666Mhz-1-2V-288pin-Tinggi-Kinerja-Tinggi-Kecepatan-Ram.jpg'],
      nama: 'Vgen',
      model: '10600',
      harga: 405100,
      stok: 10,
      baseClock: null,
      boostClock: null,
      jumlahCore: null,
      jumlahThread: null,
      speed: 3800,
      ukuran: 16,
      chipset: null,
      processor: null,
    },
    {
      id: 'p3',
      produkType: 'Motherboard',
      imgUrl: ['https://images-na.ssl-images-amazon.com/images/I/61B7e9pNOPL._SX466_.jpg','https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6416/6416651_sd.jpg;maxHeight=640;maxWidth=550'],
      nama: 'ASUS',
      model: 'ROG STRIX Z490-E GAMING',
      harga: 2560000,
      stok: 129,
      baseClock: null,
      boostClock: null,
      jumlahCore: null,
      jumlahThread: null,
      speed: null,
      ukuran: null,
      chipset: 'Intel H310',
      processor: 'Intel Core - I7',
    },
    {
      id: 'p4',
      produkType: 'GPU',
      imgUrl: ['https://venturebeat.com/wp-content/uploads/2020/09/nvidia-GeForce-RTX-30-Series.jpg?w=1200&strip=all','https://d2skuhm0vrry40.cloudfront.net/2019/articles/2019-09-28-10-35/gpu-power-ladder-all-graphics-cards-tested-1569663337391.jpg/EG11/thumbnail/750x422/format/jpg/quality/60'],
      nama: 'Nvidia',
      model: 'GeForce RTX 3080',
      harga: 15800000,
      stok: 19,
      baseClock: null,
      boostClock: null,
      jumlahCore: null,
      jumlahThread: null,
      speed: null,
      ukuran: null,
      chipset: null,
      processor: null,
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
