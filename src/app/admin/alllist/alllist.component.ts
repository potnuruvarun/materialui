import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Services/service.service';
import { Alldata } from 'src/app/interfaces/alldata'

@Component({
  selector: 'app-alllist',
  templateUrl: './alllist.component.html',
  styleUrls: ['./alllist.component.css']
})

export class AlllistComponent implements OnInit {
  alldata: any
  dataSource: any;
  ngOnInit(): void {
    this.getdata();
  }
  constructor(private services: ServiceService) { }

  displayedColumns: string[] = ['publicationdetail', 'publishername', 'dateofpublish', 'publisherType'];

  getdata() {
    this.services.alllist().subscribe(res => {
      this.alldata = res;
      this.dataSource = this.alldata;
      console.log("response", res);
    })
  }



}
