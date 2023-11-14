import { Component } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../produit.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html'

})
export class produitsComponent
{
  produits! : Produit[]; //un tableau de Produit
  constructor(private produitService: ProduitService ) 
  {
  //this.produits = produitService.listeProduits();
  }
  ngOnInit(): void
  {
    this.chargerProduits(); 
  } 
  chargerProduits()
  {   this.produitService.listeProduit().subscribe(prods => {console.log(prods);
      this.produits = prods; 
      });  
  }
  
 supprimerProduit(p: Produit) 
 {       
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
    this.produitService.supprimerProduit(p.idProduit).subscribe(() => {   
    console.log("produit supprimé"); 
    this.chargerProduits(); 
    }); 
 }

}

  
  


