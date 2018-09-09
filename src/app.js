import { routes } from "./routes";
import './app.css';

export class App {

  configureRouter(config, router) {
    this.router = router;
    config.title = '';
    config.options.pushState = true;
    config.options.root = '/';
    config.map(routes);
  }

}