import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-product-des-dialog',
  templateUrl: './product-des-dialog.component.html',
  styleUrls: ['./product-des-dialog.component.css']
})
export class ProductDesDialogComponent implements OnInit {

  item: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    
    this.item = data.item;
    console.log(this.item);
  }

  ngOnInit(): void {
  }

}
