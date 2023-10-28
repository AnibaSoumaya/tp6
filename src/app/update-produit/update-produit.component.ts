import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ProduitService } from '../produit.service';
import { Produit } from '../model/produit.model';
import { Categorie } from '../model/categorie.model';

@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styleUrls: ['./update-produit.component.css']
})
export class UpdateProduitComponent {

  currentProduit = new Produit();
  categories! : Categorie[];
  updatedCatId! : number;


  constructor(private activatedRoute: ActivatedRoute,
              private router :Router, 
              private produitService: ProduitService) { }
            
  ngOnInit(): void
  {
    this.categories = this.produitService.listeCategories();
    //console.log(this.activatedRoute.snapshot.params['id']);
    this.currentProduit = this.produitService.consulterProduit(this.activatedRoute.snapshot. params['id']);
    //console.log(this.currentProduit);
    this.updatedCatId=this.currentProduit.categorie.idCat;



 }

 updateProduit() 
 { //console.log(this.currentProduit); 
    this.currentProduit.categorie=this.produitService.consulterCategorie(this.updatedCatId);
    this.produitService.updateProduit(this.currentProduit);
    this.router.navigate(['produits']);
 } 
}
