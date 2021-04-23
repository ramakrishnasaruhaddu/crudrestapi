import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders}  from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { catchError}  from 'rxjs/operators';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiUrl = "https://jsonplaceholder.typicode.com";

  httpOptions = {
     headers:new Headers({
       'Content-Type':'application/json'
     })
  }

  constructor(private httpClient:HttpClient) { }
   //display get elememnt code
  getAll():Observable<Post[]>{
      return this.httpClient.get<Post[]>(this.apiUrl + '/posts');
  }

  //post the element code

  create(post):Observable<Post> {
    return  this.httpClient.post<Post>(this.apiUrl+'/posts/',JSON.stringify(post));
  }

  //view  element services

  find(id):Observable<Post>{

                return this.httpClient.get<Post>(this.apiUrl + '/posts/' + id).pipe(catchError(this.errorHandler));

              }

   //Updatating the            
   update(id,post):Observable<Post>{
        
               return this.httpClient.put<Post>(this.apiUrl + '/posts/' + id,JSON.stringify(post)).pipe(
                 catchError(this.errorHandler)
               )
   }           


        //handling  error message elements
              errorHandler(error) {
                let errorMessage = '';
                if(error.error instanceof ErrorEvent) {
                  errorMessage = error.error.message;
                } else {
                  errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
                }
                return throwError(errorMessage);
             }
}
