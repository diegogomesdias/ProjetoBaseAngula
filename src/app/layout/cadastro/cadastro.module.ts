import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroRoutingModule } from './cadastro-routing.module';
import { CadastroComponent } from './cadastro.component';
import { PageHeaderModule } from './../../shared';
import {MatInputModule, MatTableModule, MatToolbarModule, MatTabsModule } from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import { UsuarioComponent } from './usuario/usuario.component';
import { GrupoComponent } from './grupo/grupo.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { ServidorComponent } from './servidor/servidor.component';
import { ProtudoComponent } from './protudo/protudo.component';


@NgModule({
    imports: [
        CommonModule,
        CadastroRoutingModule,
        PageHeaderModule,
        MatInputModule,
        MatTableModule,
        MatToolbarModule,
        MatTabsModule,
        MatFormFieldModule],
    declarations: [CadastroComponent, UsuarioComponent, GrupoComponent, EmpresaComponent, ServidorComponent, ProtudoComponent]
})
export class CadastroModule {}