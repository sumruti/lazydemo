import { Injectable } from '@angular/core';
import { SERVER_URL } from '../../../environments/environment';
import { HttpClient , HttpHeaders   } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
     public http: HttpClient,
  ) { }


  getPostId(id:any){

      return this.http.get(`${SERVER_URL}`+'/items/'+id)
  }
}
