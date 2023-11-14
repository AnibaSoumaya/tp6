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

              ngOnInit(): void 
              {    
                this.produitService.listeCategories().subscribe(cats => {this.categories = cats;                       
                console.log(cats); 
              }); 
              } 
            
                

addProduit()
{    
  this.newProduit.categorie = this.categories.find(cat => cat.idCat == this.newIdCat)!;
  this.produitService.ajouterProduit(this.newProduit).subscribe(prod => { 
  console.log(prod);                       
  this.router.navigate(['produits']); });  
} 



}
