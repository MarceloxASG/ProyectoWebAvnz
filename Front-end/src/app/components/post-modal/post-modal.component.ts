import { Component, Input, OnInit } from '@angular/core';
import { PostService, Post } from '../../post.service';


@Component({
  selector: 'app-post-modal',
  templateUrl: './post-modal.component.html',
  styleUrls: ['./post-modal.component.css']
})
export class PostModalComponent implements OnInit {
  @Input() post: Post = { title: '', content: '' };
  @Input() editMode: boolean = false;

  constructor(private PostService: PostService) {}

  ngOnInit(): void {}

  savePost(): void {
    if (this.editMode) {
      this.PostService.updatePost(this.post).subscribe(() => this.closeModal('post updated'));
    } else {
      this.PostService.createPost(this.post).subscribe(() => this.closeModal('post created'));
    }
  }

  closeModal(result: string): void {
    // Aquí puedes usar un Output EventEmitter para notificar al componente padre
  }
}
