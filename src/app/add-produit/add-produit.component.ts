import { Component } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../produit.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from '../model/categorie.model';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class addProduitComponent {
  newProduit = new Produit();
  categories! : Categorie[];
  newIdCat! : number;
  newCategorie! : Categorie;

  constructor(private produitService: ProduitService,
              private activatedRoute: ActivatedRoute,
              private router :Router, ) { }

  ngOnInit()
  {
    this.categories = this.produitService.listeCategories();
  }
                
addProduit()
{
  // console.log(this.newProduit);
  this.newCategorie =
  this.produitService.consulterCategorie(this.newIdCat);
  this.newProduit.categorie = this.newCategorie;

  this.produitService.ajouterProduit(this.newProduit);
  this.router.navigate(['produits']);
  let conf = confirm("Ajout avec succes!"); 
  

}

}
