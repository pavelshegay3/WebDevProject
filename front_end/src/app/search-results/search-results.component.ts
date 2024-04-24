import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.css'
})
export class SearchResultsComponent implements OnInit {
  query!: string;
  searchResults!: any[];

  constructor(private route: ActivatedRoute, private searchService: SearchService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.query = params['query'];
      this.searchService.searchProducts(this.query).subscribe(results => {
        this.searchResults = results;
      });
    });
  }
}
