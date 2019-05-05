import { Router, RouterConfiguration } from 'aurelia-router';
import { PLATFORM } from 'aurelia-pal';
export class App {
  public message: string = 'Hello World!';


  router: Router

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = "ここせま！！";
    config.options.pushState = true;
    config.map([
      { route: ["", "index.html"], name: "index", moduleId: "index", nav: true },
      { route: ["story/*path"], name: "story", moduleId: "story/story", activationStrategy: 'invoke-lifecycle', title: "Welcome2" },
      { route: ["profile/alt"], redirect: "profile/alt/members" },
      { route: ["profile/ctrl"], redirect: "profile/ctrl/members" },
      { route: ["profile/*path"], name: "profile", moduleId: "profile/profile", activationStrategy: 'invoke-lifecycle', title: "Welcome3" }
    ]);
    config.mapUnknownRoutes(PLATFORM.moduleName('not-found'));
  
    this.router = router;
  }


}
