import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../services/post/post.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  data:any;
  constructor(

     public activatedRoute: ActivatedRoute,
     private router: Router,
     private postService: PostService,
  ) { }

  ngOnInit(): void {
      this.getPostId();
  }

  getPostId(){
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    try{
      this.postService.getPostId(id).subscribe((data : any) => {
          console.log(data)
          this.data = data;

      })
    }catch(err){
       console.log(err)
    }
  }


  back(){
      this.router.navigateByUrl('/');
  }

}
