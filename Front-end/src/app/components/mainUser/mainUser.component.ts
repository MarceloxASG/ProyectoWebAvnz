import { Component, OnInit, ViewChild, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { PostService, Post } from '../../post.service';
import { PostModalComponent } from '../post-modal/post-modal.component';

@Component({
  selector: 'app-mainUser',
  templateUrl: './mainUser.component.html',
  styleUrl: './mainUser.component.css'
})
export class mainUserComponent implements OnInit {
  posts: Post[] = [];
  @ViewChild('modalContainer', { read: ViewContainerRef }) modalContainer!: ViewContainerRef;

  constructor(
    private PostService: PostService,
    private resolver: ComponentFactoryResolver
  ) {}

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts(): void {
    this.PostService.getPosts().subscribe(posts => this.posts = posts);
  }

  openPostModal(post?: Post): void {
    this.modalContainer.clear();
    const factory = this.resolver.resolveComponentFactory(PostModalComponent);
    const componentRef = this.modalContainer.createComponent(factory);
    if (post) {
      componentRef.instance.post = { ...post };
      componentRef.instance.editMode = true;
    }
    componentRef.instance.closeModal = (result: string) => {
      this.modalContainer.clear();
      this.loadPosts();
    };
  }
}
