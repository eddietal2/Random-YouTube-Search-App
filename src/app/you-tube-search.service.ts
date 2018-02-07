import { Injectable, Inject } from '@angular/core';
import { youTubeSearchInjectables } from './you-tube-search-injectables';
import { Observable } from 'rxjs';
import { Http, Response } from '@angular/http';
import { SearchResult } from './search-result.model';


export var YOUTUBE_API_KEY = "AIzaSyAYoU-64aoZUA385BDE3gIjDGZEyGkBvMc";
export var YOUTUBE_API_URL = "https://www.googleapis.com/youtube/v3/search";

@Injectable()
export class YouTubeSearchService {

  constructor(private http: Http,
              @Inject(YOUTUBE_API_KEY) private apiKey: string,
              @Inject(YOUTUBE_API_URL) private apiUrl: string) {

  }

  // Takes a query string as a parameter and returns an Observable which
  // will emit a stream of SearchResult[]'s'
  search(query: string): Observable<SearchResult[]> {

    // Creates params constant that holds the fields for the api
    const params: string = [
      `q=${query}`,
      `key=${this.apiKey}`,
      `part=snippet`,
      `type=video`,
      `maxResults=10`
    ].join('&');
    // Joins each element of the array with an '&' character
    // ei: {query}&{this.apiKey}&part&type&maxResults

    // Creates a string variable with the api link/params
    let queryUrl: string = `${this.apiUrl}?${params}`;

    // returns an http get method with queryUrl
    return this.http.get(queryUrl)

      // For each response
      .map( (response: Response) => {

        // returns the response and parses into JSON
        // also, maps each item in items to return...
        return ( <any>response.json()).items.map(item => {
          console.log("raw item", item);

          // ... a new 'SearchResult[]'
          return new SearchResult({
            id: item.id.videoId,
            title: item.snippet.title,
            description: item.snippet.description,
            thumbnailUrl: item.snippet.thumbnails.high.url
          });
        });
      });
    }
}
