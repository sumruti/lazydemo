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
  query: any = <any>{};
  items: any = [];
  isLoding=true;
  page: number = 1;

  constructor(

     public activatedRoute: ActivatedRoute,
     private router: Router,
     private postService: PostService,
  ) { }

  ngOnInit(): void {
      this.getPhotos();
      this.getPostId();
      
  }

  getPhotos() {
    this.postService.randomPhotos(this.page)
      .subscribe((res:any) => {
          var data = res.results;
          for (let i = 0; i < data.length; i++) {

                   this.items.push({
                      email: data[i].email,
                      last: data[i].name.last,
                      value: data[i].id.value,
                   })


          }
      })
  }

  onScroll() {
       this.page++
      this.getPhotos();
    
}

  getPostId(){
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    try{
      this.postService.getPostId(id).subscribe((data : any) => {
      this.data = data;
       this.isLoding = false
          

      })
    }catch(err){
    this.isLoding = false
       console.log(err)
    }
  }


  back(){
      this.router.navigateByUrl('/');
  }

}
