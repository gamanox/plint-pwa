
import HomePage from '../pages/home.svelte';
import AboutPage from '../pages/about.svelte';
import FormPage from '../pages/form.svelte';
import ClientesPage from '../pages/clientes.svelte';

import LeftPage1 from '../pages/left-page-1.svelte';
import LeftPage2 from '../pages/left-page-2.svelte';
import DynamicRoutePage from '../pages/dynamic-route.svelte';
import RequestAndLoad from '../pages/request-and-load.svelte';
import NotFoundPage from '../pages/404.svelte';

var routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/about/',
    component: AboutPage,
  },
  {
    path: '/form/',
    component: FormPage,
  },
 

  {
    path: '/left-page-1/',
    component: LeftPage1,
  },
  {
    path: '/left-page-2/',
    component: LeftPage2,
  },
  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage,
  },
  
  {
    path: '/clientes',
    async: function (routeTo, routeFrom, resolve, reject) {
      // Router instance
      var router = this;

      // App instance
      var app = router.app;

      // Show Preloader
      // app.preloader.show();

      // User ID from request
      

      // Simulate Ajax Request
      this.app.request.json('http://api.plint.mx/clientes', function (data) {
        resolve(
          // How and what to load: template
          {
            component: ClientesPage
          },
          // Custom template context
          {
            context: {
              clients: data,
            },
          }
        );
      });
    },
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;
