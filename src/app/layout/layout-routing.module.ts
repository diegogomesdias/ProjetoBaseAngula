import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
            { path: 'tables', loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule) },
            { path: 'forms', loadChildren: () => import('./form/form.module').then(m => m.FormModule) },
            { path: 'cadastro', loadChildren: () => import('./cadastro/cadastro.module').then(m => m.CadastroModule) },
            { path: 'empresa', loadChildren: () => import('./cadastro/empresa/empresa.module').then(m => m.EmpresaModule) },
            { path: 'grupo', loadChildren: () => import('./cadastro/grupo/grupo.module').then(m => m.GrupoModule) },
            { path: 'produto', loadChildren: () => import('./cadastro/protudo/produto.module').then(m => m.ProtudoModule) },
            { path: 'servidor', loadChildren: () => import('./cadastro/servidor/servidor.module').then(m => m.ServidorModule) },
            { path: 'usuario', loadChildren: () => import('./cadastro/usuario/usuario.module').then(m => m.UsuarioModule) }





        ]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
