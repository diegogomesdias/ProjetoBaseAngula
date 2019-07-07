import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioComponent } from './usuario.component';
import { PageHeaderModule } from './../../../shared';
import {MatInputModule, MatTableModule, MatToolbarModule, MatTabsModule } from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
    imports: [
        CommonModule,
        UsuarioRoutingModule,
        PageHeaderModule,
        MatInputModule,
        MatTableModule,
        MatToolbarModule,
        MatTabsModule,
        MatFormFieldModule],
    declarations: [UsuarioComponent]
})
export class UsuarioModule {}