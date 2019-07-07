import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { EmpresaModule } from './empresa.module';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.scss']
})
export class EmpresaComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];


  constructor() { }

  ngOnInit() {}

  applyFilter(filterValue: string) {
    
  }
  
}
