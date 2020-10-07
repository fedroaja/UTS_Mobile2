import { Component, OnInit } from '@angular/core';
import {HomeService} from '../home.service';
import {Product} from '../home.model';
import { IonItemSliding,AlertController,ToastController, LoadingController } from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  products: Product[];
  constructor(
    private productService: HomeService,
    private router: Router,
      private toastController: ToastController,
      private alertController: AlertController,
      public loadingController: LoadingController
  ) {}

  ngOnInit(){
    this.products = this.productService.getAllProduct();
  }
  
  ionViewWillEnter(){
    this.products = this.productService.getAllProduct();
  }

  edit(product: Product, slidingItem: IonItemSliding) {
    slidingItem.close();
    console.log(product.nama, 'edited');
  }

  
  delete(productId, slidingItems){

    this.presentLoading().then(() => {
      this.productService.deleteProduk(productId);
      slidingItems.close();
      this.router.navigate(['home/admin']);
      this.deleteToast();
      this.ionViewWillEnter();
    });
  }


  async confirmDelete(products: Product, slidingItems: IonItemSliding) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Delete Item',
      message: 'Kamu Yakin Ingin Menghapus Produk ini ?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Yes',
          handler: () => this.delete(products.id, slidingItems)
        }
      ]
    });

    await alert.present();
  }

  async deleteToast() {
    const toast = await this.toastController.create({
      message: 'Produk Berhasil di Hapus.',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }

  async presentLoading(){
    const loading = await this.loadingController.create({
      message: 'Deleting Product . . .',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();

  }
}
