import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Tag } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  private tags: Tag[];

  public tagsLoadedRef: Subject<Tag[]>;

  constructor(private http: HttpClient) {
    this.tagsLoadedRef = new Subject<Tag[]>();
  }

  public loadTags() {
    this.http.get('./assets/db/tags.json').toPromise().then((data: Tag[]) => {
      this.tags = data;
      this.tagsLoadedRef.next(this.tags);
    });
  }

  public getTags(): Tag[] {
    return this.tags;
  }

  public getTagByID(id: number): Tag {
    return this.tags.find((tag: Tag) => tag.id === id);
  }
}
