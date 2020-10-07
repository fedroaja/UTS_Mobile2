import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HomeService} from '../../home.service';
import {Product} from '../../home.model';

import {AlertController, ToastController} from '@ionic/angular';


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.page.html',
  styleUrls: ['./edit-product.page.scss'],
})
export class EditProductPage implements OnInit {

  loadedEditedProduct: Product;

  private productEdit = {
    editedNama: '',
    editedImg1: '',
    editedImg2: '',
    editedModel: '',
    editedHarga: 0,
    editedStok: 0,
    editedBaseClock: 0,
    editedBoostClock: 0,
    editedCore: 0,
    editedThread: 0,
    editedSpeed: 0,
    editedUkuran: 0,
    editedChipset: '',
    editedProcessor: '',
  };

  constructor(
      private activatedRoute: ActivatedRoute,
      private productService: HomeService,
      private router: Router,
      private toastController: ToastController,
      private alertController: AlertController,
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('productId')) { return; }
      const productId = paramMap.get('productId');
      this.loadedEditedProduct = this.productService.getProduct(productId);

      this.productEdit['editedNama'] = this.loadedEditedProduct.nama;
      this.productEdit['editedImg1'] = this.loadedEditedProduct.imgUrl[0];
      this.productEdit['editedImg2'] = this.loadedEditedProduct.imgUrl[1];
      this.productEdit['editedModel'] = this.loadedEditedProduct.model;
      this.productEdit['editedHarga'] = this.loadedEditedProduct.harga;
      this.productEdit['editedStok'] = this.loadedEditedProduct.stok;
      this.productEdit['editedBaseClock'] = this.loadedEditedProduct.baseClock;
      this.productEdit['editedBoostClock'] = this.loadedEditedProduct.boostClock;
      this.productEdit['editedCore'] = this.loadedEditedProduct.jumlahCore;
      this.productEdit['editedThread'] = this.loadedEditedProduct.jumlahThread;
      this.productEdit['editedSpeed'] = this.loadedEditedProduct.speed;
      this.productEdit['editedUkuran'] = this.loadedEditedProduct.ukuran;
      this.productEdit['editedChipset'] = this.loadedEditedProduct.chipset;
      this.productEdit['editedProcessor'] = this.loadedEditedProduct.processor;

    })
  }

  editProduct(){
    this.productService.editProduk(this.loadedEditedProduct.id, this.productEdit)
    this.router.navigate(['home/admin']);
    this.editToast();
  }


  async confirmEdit() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Edit Item',
      message: 'Save Changes ?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Yes',
          handler: () => this.editProduct()
        }
      ]
    });

    await alert.present();
  }

  async editToast() {
    const toast = await this.toastController.create({
      message: 'Produk Berhasil di Ubah.',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }


}
