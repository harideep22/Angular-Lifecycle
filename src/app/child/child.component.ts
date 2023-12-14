import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';



@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnInit,OnChanges,OnDestroy{

  counter=0;
  interval:any;

  @Input() ch=""

  constructor(){
    console.log("Child constructor called")
  }

  ngOnInit(): void {
      this.interval =setInterval(()=>{
        this.counter=this.counter+1;
        console.log(this.counter);
      },1000)
      console.log("Child ngOninit called ")
  }

  ngOnDestroy(): void {
      clearInterval(this.interval);
  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log("NG ON Changes");
  }


}
