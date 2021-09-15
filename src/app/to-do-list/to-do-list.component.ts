import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  myForm!: FormGroup;
  myList :any = [];

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      isChecked : [],
      task: ['', Validators.required],
      date: [''],
    });
    this.getData();

  }
  addTask(){
    if(this.myForm.invalid){
      return
    }
    this.myForm.patchValue({
      date : new Date(),
      isChecked : false
    })
    if(localStorage.getItem('list')){
      this.pushData();
    }
    else{
      localStorage.setItem('list',JSON.stringify([]));
      this.pushData();
    }
    this.myForm.reset();
    if(localStorage.getItem('list')){
      this.myList = JSON.parse(localStorage.getItem('list')|| '{}');
    }
  }

  deleteTask(index:number){
    this.getData();
    this.myList.splice(index, 1);
    localStorage.setItem('list', JSON.stringify(this.myList));

  }
  checktask(index:number){
    this.getData()
    if(this.myList[index].isChecked){
      this.myList[index].isChecked = false
    }else{
      this.myList[index].isChecked = true
    }
    localStorage.setItem('list', JSON.stringify(this.myList));

  }
  edit(index:number){
    if(this.myForm.value.task){
      return
    }
    this.getData()
    this.myForm.patchValue(this.myList[index])

    this.myList.splice(index, 1);

    localStorage.setItem('list', JSON.stringify(this.myList));



  }


  pushData(){
    let a =[]
    a = JSON.parse(localStorage.getItem('list')|| '{}');
    a.push(this.myForm.value);
    localStorage.setItem('list', JSON.stringify(a));
  }
  getData(){
    if(localStorage.getItem('list')){
      this.myList = JSON.parse(localStorage.getItem('list')|| '{}');
    }
  }

}
