import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../post';
import { PostService } from '../post.service';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

   id:number;
   post:Post;
  constructor(private postSerive:PostService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['postId'];

    this.postSerive.find(this.id).subscribe((data:Post)=>{
      this.post = data;
    })
  }

}
