import { inject } from "aurelia-framework";
import { Router } from "aurelia-router";
import { mockService } from '../mocks';
import './home.css';

@inject(Router)
export class Home {

  constructor(router) {
    this.router = router;
    this.searchText = '';
  }


  activate() {
    return this.getTiles();
  }

  onSearch({ detail }) {
    this.searchText = detail.value;
  }

  async getTiles() {
    this.tiles = await mockService('tiles', 700);
  }

  goToDetails(tile) {
    this.router.navigateToRoute('details', { id: tile.id });
  }
}