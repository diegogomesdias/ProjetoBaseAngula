import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProtudoComponent } from './protudo.component';

const routes: Routes = [
    {
        path: '', component: ProtudoComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProdutoRoutingModule {}