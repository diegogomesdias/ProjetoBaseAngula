import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpresaRoutingModule } from './empresa-routing.module';
import { EmpresaComponent } from './empresa.component';
import { PageHeaderModule } from './../../../shared';
import {MatInputModule, MatTableModule, MatToolbarModule, MatTabsModule, MatIconModule } from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
    imports: [
        CommonModule,
        EmpresaRoutingModule,
        PageHeaderModule,
        MatInputModule,
        MatTableModule,
        MatToolbarModule,
        MatTabsModule,
        MatFormFieldModule,
        MatIconModule
    ],
    declarations: [EmpresaComponent]
})
export class EmpresaModule {}