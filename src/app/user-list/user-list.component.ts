import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserFormat } from '../model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userList :UserFormat | undefined
  page :number =1

  constructor(
    private http :HttpClient
  ) { }

  ngOnInit(): void {
    this.getUserData()
  }

  getUserData(){
    this.http
    .get("https://reqres.in/api/users?page="+ this.page)
    .subscribe((res: any) => {
      this.userList = res;
    });
}
next(){

  if(this.userList?.page >= this.userList?.total_pages){
    return
  }
  else{
    this.page ++
    this.getUserData();
    document.getElementById("user-table")?.scrollIntoView({behavior: "smooth"});

  }
}
previous(){
  if(this.page <= 1){
    return
  }
  else{
    this.page --
    this.getUserData();
    document.getElementById("user-table")?.scrollIntoView({behavior: "smooth"});
  }

}
}
