import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { produitsComponent } from './produits/produits.component';
import { addProduitComponent } from './add-produit/add-produit.component';
import { UpdateProduitComponent } from './update-produit/update-produit.component';

const routes: Routes = [
  {path : "produits", component : produitsComponent},
  {path: "add-produit", component : addProduitComponent},
  {path: "updateProduit/:id", component: UpdateProduitComponent},
  {path: "", redirectTo: "produits", pathMatch: "full" }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
