export const routes = [
  { route: ['/', 'home'], name: 'home', moduleId: PLATFORM.moduleName('./pages/home'), nav: true, title: 'Home' },
  { route: '/product/:id', name: 'details', moduleId: PLATFORM.moduleName('./pages/details'), nav:false, title: 'Product Details' }
];