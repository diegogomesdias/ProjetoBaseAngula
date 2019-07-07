import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GrupoRoutingModule } from './grupo-routing.module';
import { GrupoComponent } from './grupo.component';
import { PageHeaderModule } from './../../../shared';
import {MatInputModule, MatTableModule, MatToolbarModule, MatTabsModule } from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
    imports: [
        CommonModule,
        GrupoRoutingModule,
        PageHeaderModule,
        MatInputModule,
        MatTableModule,
        MatToolbarModule,
        MatTabsModule,
        MatFormFieldModule],
    declarations: [GrupoComponent]
})
export class GrupoModule {}