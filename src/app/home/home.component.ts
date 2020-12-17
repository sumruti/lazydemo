import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   id = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router  
  ) { }

  ngOnInit(): void {
  }
 

  onKeyId(event: any) { 

    this.id = event.target.value;
  }


  getResult(){
  if(!this.id){
     return;
  }
     this.router.navigateByUrl('/post/'+this.id);

  }



}
