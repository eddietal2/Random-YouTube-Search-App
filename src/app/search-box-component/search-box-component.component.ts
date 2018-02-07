import { Component, OnInit, EventEmitter, Output, ElementRef } from '@angular/core';
import { SearchResult } from '../search-result.model';
import { Observable } from 'rxjs';
import { YouTubeSearchService } from '../you-tube-search.service';

@Component({
  selector: 'search-box',
  templateUrl: './search-box-component.component.html',
  styleUrls: ['./search-box-component.component.css']
})
export class SearchBoxComponent implements OnInit {

  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() results: EventEmitter<SearchResult[]> = new EventEmitter<SearchResult[]>();

  constructor(private youtube: YouTubeSearchService,
              private el: ElementRef) { }

  ngOnInit(): void {
    // converts the 'keyup' event into an observable stream
    Observable.fromEvent(this.el.nativeElement, 'keyup')
      .map( ( e: any ) => e.target.value ) // map over each keyup event, and get value
      .filter( (text: string) => text.length > 1) // filter streams to not emit on strings that are
                                                 // less than 1 charcter
       .debounceTime(250) // Once every 250ms
       .do( () => this.loading.next(true)) // enable loading
       .map( (query: string) => this.youtube.search(query))
       .switch()

       // act on return of the Search
       .subscribe(
         ( results: SearchResult[] ) => { // on success
           this.loading.next(false);
           this.results.next(results);
         },
         ( err: any) => { // on error
           console.log(err);
           this.loading.next(false);
         },
         () => { // on completion
          this.loading.next(false);
         }
       );
  }

}
