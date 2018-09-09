import { mockGetTile } from "../mocks";
import './details.css';

export class Details {

  constructor() {
    this.tile = null;
  }

  async activate(params) {
    this.tile = await mockGetTile(parseInt(params.id));
    console.log(this.tile)
  }

  buy() {
    alert('Woah! you are crazy, well if you have the moneys!')
  }
}