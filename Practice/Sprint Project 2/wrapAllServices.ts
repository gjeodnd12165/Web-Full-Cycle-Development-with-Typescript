import * as express from 'express';

export function wrapAllServices(app: express.Express, wrapper: (fn: Function) => Function) {
  app._router.stack.filter((appLayer) => {
    return appLayer.name === 'router';
  }).forEach((routerLayer) => {
    const router = routerLayer.handle;
    router.stack.filter((controllerLayer) => {
      return controllerLayer.name === 'bound dispatch';
    }).forEach((controllerLayer) => {
      controllerLayer.route.stack.forEach((serviceLayer) => {
        const fn: Function = serviceLayer.handle;
        serviceLayer.handle = wrapper(fn);
      });
    });
  });
}