import { Injectable } from '@angular/core';
import { Tag } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  private tags: Tag[];

  public setTags(newTags: Tag[]) {
    this.tags = newTags;
  }

  public getTags(): Tag[] {
    return this.tags;
  }

  public getTagByID(id: number): Tag {
    return this.tags.find((tag: Tag) => tag.id === id);
  }
}
