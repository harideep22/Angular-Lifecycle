import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent implements OnInit{

  check=false;
  name="";

  constructor(){
    console.log("Parent On Constructor called")
  }

  ngOnInit(): void {
    console.log("Parent ngOninit called ")
  }

  checkClick(){
    this.check = !this.check;
  }



}
