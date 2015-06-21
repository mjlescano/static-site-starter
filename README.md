# Static Site Starter
Minimal base files for starting a static site.

* __HTML__ with [Jade](http://jade-lang.com/)
* __CSS__ with [CSS Whitespace](https://github.com/clintwood/css-whitespace/tree/importer) + [Rework CSS](https://github.com/reworkcss/rework)
* __Javascript__ with [Browserify](http://browserify.org/) + [BabelJS](https://babeljs.io/)

## Install

1. Make sure to have [NodeJS](https://nodejs.org) installed.
2. Run `npm install --dev`.

## Getting Started

#### Commands

* Run `npm run build` to build all the assets on `/app` to `/build`.
* Run `npm run watch` to listen to all the changes made on `/app` and build them automatically.

#### Structure

* Add your **HTML** pages to `/app/*.jade` and will be builded to `/build/*.html`.
  * How to use layouts/partials: http://jade-lang.com/reference/extends/


* Put your **CSS** on `/app/css/app.css`
  * Thanks to [CSS Whitespace](https://github.com/clintwood/css-whitespace/tree/importer) you can use nesting (just like SCSS or Stylus)
  * Also files can be imported using [Importer](https://github.com/clintwood/css-whitespace/tree/importer). (It's a fork of CSS Whitespace)


* The **JavaScript** write it on `/app/js/app.js`
  * Order different modules using [Browserify](http://browserify.org/).
  * Use ES6 thanks to [BabelJS](https://babeljs.io/).


## TODOs
  * Option to minify assets for production.
  * Script to [ImageOptim](https://imageoptim.com/) the images on `/app/img`.
  * Script to generate a font from the svg files on `/app/img/icons`.

Ω

