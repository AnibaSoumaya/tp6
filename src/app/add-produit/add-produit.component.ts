import { Component } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../produit.service';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class addProduitComponent {
  newProduit = new Produit();
  message : any;
  constructor(private produitService: ProduitService) { }
addProduit()
{
  // console.log(this.newProduit);
  this.produitService.ajouterProduit(this.newProduit);
  this.message =  " produit " + this.newProduit.nomProduit+ " ajouté avec succès! "

}

}
