import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServidorRoutingModule } from './servidor-routing.module';
import { ServidorComponent } from './servidor.component';
import { PageHeaderModule } from './../../../shared';
import {MatInputModule, MatTableModule, MatToolbarModule, MatTabsModule } from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
    imports: [
        CommonModule,
        ServidorRoutingModule,
        PageHeaderModule,
        MatInputModule,
        MatTableModule,
        MatToolbarModule,
        MatTabsModule,
        MatFormFieldModule],
    declarations: [ServidorComponent]
})
export class ServidorModule {}