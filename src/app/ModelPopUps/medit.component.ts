import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-medit',
  templateUrl: './medit.component.html',
  styleUrls: ['./medit.component.css']
})
export class MEditComponent implements OnInit {

  constructor() { }
  @Input() Details: any;
  @Output() OnEditClick = new EventEmitter<any>();
  ngOnInit() {
  }

  Save(){
    this.Details = <any>{};
    this.Details.id =1;
    this.Details.Name ="jagadeesh";
    this.OnEditClick.emit({Details: this.Details, isSave:true});
  }
  Cancel(){
    this.OnEditClick.emit({Details: null, isSave:false});
  }
}
