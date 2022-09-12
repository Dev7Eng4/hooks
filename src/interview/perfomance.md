# React

`https://www.codementor.io/blog/react-optimization-5wiwjnf9hj`

- use immutable data structures

- use (useMemo, useCallback, React.memo) to prevent component re-render unnecessary
- code splitting, chunk file (webpack, rollup, browserify)
- when import library ui (like material-ui) -> import component deepest that you need and you can config to just only import components that you use
- use cdn
- for image: try resize exactly that size you will show in ui (for mobile # laptop)
- dynamic import (import when you use, ex: in handleClick...)
- lazy load with router:

  - react.lazy will automatically load the bundle containing the component when this component is first rendered
  - react.lazy takes a function that must call a dynamic import(). This must return a `Promise` which resolves to a module with a default export containing a React component.
  - Need inside `Suspense` with fallback will be shown while waiting component load
  - Can use with transitions (startTransition, useTransition), ex: we have two tab component use lazy, when we click new tab, react will waiting new component load done, after that the tab change.

- use React.lazy, Suppense with react-router, large components
- render large list with react-window npm
- list virtualization - infinite loading

  render props

# BE

'CDN - Caching - Load balancing - db scaling - gzip';

# image

'https://99designs.com/blog/tips/image-file-types/';
'https://pageweight.imgix.com/';
'https://www.sitepoint.com/gif-png-jpg-which-one-to-use/';
const images = [
'transparency: PNG',
'animations: GIF',
'colourful images: JPG',
'simple icons, logos, illustrations: SVGs',
'Reduce PNG with TinyPNG',
'Reduce JPG with JPEG-optimizer',
'Try to choose simple illustrations over highly detailed photographs',
'Always lower JPEG image quality (30 - 60%)',
'Resize image based on size it will be displayed',
'Display different size image for different backgrounds',
'Use CDNs like imigx',
'Remove image metadata with https://www.verexif.com/',
];
