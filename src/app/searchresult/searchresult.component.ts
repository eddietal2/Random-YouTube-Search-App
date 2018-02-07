import { Component, OnInit, Input } from '@angular/core';
import { SearchResult } from '../search-result.model';

@Component({
  selector: 'search-result',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.css']
})
export class SearchresultComponent implements OnInit {

  @Input() result: SearchResult[];

  constructor() { }

  ngOnInit() {
  }

}
