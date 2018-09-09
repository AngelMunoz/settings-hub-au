# Aurelia Meets Stencil
[Stencil]: https://stenciljs.com/
[Aurelia]: https://aurelia.io/
[tun-stencil-hub]: https://www.npmjs.com/package/tun-settings-hub
[Stencil Repo]: https://github.com/AngelMunoz/settings-hub
[Angular Repo]: https://stackblitz.com/edit/tun-settings-hub

This is an [Aurelia] Application that uses [Stencil] components from a npm published library
[tun-settings-hub] this among these other repositories [Stencil Repo] and [Angular Repo]
share the same components, in an agnostic way.

To see the Stencil Components in action Please refer to the  `src/pages/**` files


# Caveats
1. Stencil Plugin for webpack is necesary on `aurelia-cli` based setups
2. Stencil Events should have the following form `my-event` instead of `myEvent`, Given the fact that Aurelia doesn't distinguish between cammel case events, Aurelia won't pick up the custom Event, unless the event is all on lowercase

Example: `<tun-search-bar on-search.delegate="onSearch($event)">` is okay, the following won't be picked up by aurelia `<tun-search-bar onSearch.delegate="onSearch($event)">`

On the Stencil Side: `@Event({ eventName: 'on-search' }) onSearch: EventEmitter;` is ok, and the following while it is not wrong, it won't work for aurelia `@Event({ eventName: 'onSearch' }) onSearch: EventEmitter;`


beyond that, everything related to bindings should work as normal, `bind, one-way, two-way`