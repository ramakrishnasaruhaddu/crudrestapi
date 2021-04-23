import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
   id:number;
   post:Post;
   viewform:FormGroup;
  constructor(
    public postService:PostService,private route:ActivatedRoute,private router:Router
  ) { }

  ngOnInit(): void {

       this.id =this.route.snapshot.params['postId'];
       this.postService.find(this.id).subscribe((data:Post)=>{
          this.post = data;
       })

       this.viewform = new FormGroup({
          title: new FormControl('',[Validators.required]),
          body: new FormControl('',Validators.required)
       })
  }

  get f(){
      return this.viewform.controls;
  }

  submit(){
     console.log(this.viewform.value);

     this.postService.update(this.id,this.viewform.value).subscribe(res=>{
        console.log("Post update successfully");
        this.router.navigateByUrl('post/index');
     })
  }

}
