import { Component, OnInit } from '@angular/core';
import { SearchResult } from '../search-result.model';

@Component({
  selector: 'you-tube-search',
  templateUrl: './you-tube-search.component.html',
  styleUrls: ['./you-tube-search.component.css']
})
export class YouTubeSearchComponent implements OnInit {

  resultz: SearchResult[];
  loading: boolean;

  constructor() { }
  ngOnInit() {}

  updateResults(resultz: SearchResult[]): void {
    this.resultz = resultz;
    console.log('results:', this.resultz);
  }

}
