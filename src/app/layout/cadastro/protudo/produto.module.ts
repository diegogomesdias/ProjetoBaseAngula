import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutoRoutingModule } from './produto-routing.module';
import { ProtudoComponent } from './protudo.component';
import { PageHeaderModule } from './../../../shared';
import {MatInputModule, MatTableModule, MatToolbarModule, MatTabsModule } from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
    imports: [
        CommonModule,
        ProdutoRoutingModule,
        PageHeaderModule,
        MatInputModule,
        MatTableModule,
        MatToolbarModule,
        MatTabsModule,
        MatFormFieldModule],
    declarations: [ProtudoComponent]
})
export class ProtudoModule {}