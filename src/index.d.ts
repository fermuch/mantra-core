import React = require('react');

declare module "react-mounter" {
  export var mount: any;
  export var withOptions: any;
}

declare module "mantra-core" {
  interface IKomposer {
    (params: Object, onData: Function): Function;
  }

  interface IKomposerData<T> {
    (error?: Object, data?: T): void;
  }

  interface IInjectDeps {
    (...deps: any[]): IInjectDeps;
  }

  interface IDepsMapper {
    (...deps: any[]): void;
  }

  interface Component extends React.Component<any, any> { }

  export var injectDeps: IInjectDeps;
  export function useDeps(depsMapper?: IDepsMapper): any;
  export function createApp(context: any): any;

  export function compose<V>(komposer: IKomposer, loadingComponent?: any, opts1?: any, opts2?: { pure: Boolean}):
    (component: Component) => () => React.Component<V, {}>;

  export function composeWithTracker<V>(komposer: IKomposer, loadingComponent?: any, opts1?: any, opts2?: { pure: Boolean}):
    (component: Component) => () => React.Component<V, {}>;

  export function composeWithPromise<V>(komposer: IKomposer, loadingComponent?: any, opts1?: any, opts2?: { pure: Boolean}):
    (component: Component) => () => React.Component<V, {}>;

  export function composeWithObservable<V>(komposer: IKomposer, loadingComponent?: any, opts1?: any, opts2?: { pure: Boolean}):
    (component: Component) => () => React.Component<V, {}>;

  export function composeAll<V>(...composeFunctions: ((component?: Component) => () => Component)[]):
    (component: any) => () => React.Component<V, {}>;
}
