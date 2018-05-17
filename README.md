# Tokyo

![ghost badge](https://img.shields.io/badge/ghost-1.22.0-green.svg?longCache=true&style=flat-square)
![ghost CLI badge](https://img.shields.io/badge/ghost_CLI-1.6.0-green.svg?longCache=true&style=flat-square)
![node badge](https://img.shields.io/badge/node-%3E6.9%20%3C7.*-green.svg?longCache=true&style=flat-square)
![gulp badge](https://img.shields.io/badge/gulp-3.9.1-green.svg?longCache=true&style=flat-square)
![gulp sass badge](https://img.shields.io/badge/gulp_sass-3.1.0-green.svg?longCache=true&style=flat-square)
![express-hbs badge](https://img.shields.io/badge/express_hbs-1.0.4-green.svg?longCache=true&style=flat-square)

Theme for the Ghost platform. Live preview can be seen here: https://toddbirchard.com

![Tokyo Theme](https://miscellaneous.nyc3.digitaloceanspaces.com/tokyodrift.jpg)

## About

_Tokyo_ is a minimalist Ghost theme emphasizing readability, load times, and customization. Stays true to a philosophy of simplicity while expanding on Ghost features to elevate authors.

### Features
- Responsive layout
- Featured hero pages
- Related articles widget
- Recent articles widget
- Experience widget
- Twitter widget
- Github widget
- Reading time

# Installation

For information on installing the Ghost platform, please reference the [Ghost CLI](https://docs.ghost.org/docs/cli-install).

### Quickstart

```
git clone https://github.com/toddbirchard/ghosttheme-tokyo.git
cd ghosttheme-tokyo

npm install --global gulp-cli
npm install
```

### First time developers

Ghost uses a simple templating language called [Handlebars](http://handlebarsjs.com/). This theme is styled using [SaSS](https://sass-lang.com/) and compiled with [Gulp](https://gulpjs.com/). 

**Templates:**
- `default.hbs` - Base template
- `index.hbs` - Home page
- `post.hbs` - Individual posts
- `page.hbs` - Standalone pages
- `tag.hbs` - Tag archives
- `author.hbs` - Author archives

**Stack**
- Ghost
- Express
- Handlebars
- Sass
- Gulp
- JQuery

## Roadmap

This theme is still in active development.

### Known Issues
- SASS refactor
- Configuration setup
- Additional widget options
- Speed optimizations
- Documentation
