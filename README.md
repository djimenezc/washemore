#Washemore project
 
 Refator of the logtrust widgets using React and Redux and including karma test runner and Webpack module system.
 
Out of the box it comes with support for:

* Webpack
* ES2015 via Babel-Loader
* Different supported style languages (sass, scss, less, stylus)
* Style transformations via PostCSS
* Automatic code linting via esLint
* Ability to unit test components via Karma and Mocha/Chai
* Functional testing using Nightwatch 

The project is created based on the yeoman generator https://github.com/react-webpack-generators/generator-react-webpack

## Usage
The following commands are available in your project:
```bash
# Start for development
npm start # or
npm run serve

# Start the dev-server with the dist version
npm run serve:dist

# Just build the dist version and copy static files
npm run dist

# Run unit tests
npm test

# Auto-run unit tests on file changes
npm run test:watch

# Lint all files in src (also automatically done AFTER tests are run)
npm run lint

# Clean up the dist directory
npm run clean

# Just copy the static assets
npm run copy
```

### Naming Components
We have opted to follow [@floydophone](https://twitter.com/floydophone) convention of uppercase for component file naming e.g. [Component.js]

### Modules
Each component is a module and can be required using the [Webpack](http://webpack.github.io/) module system. [Webpack](http://webpack.github.io/) uses [Loaders](http://webpack.github.io/docs/loaders.html) which means you can also require CSS and a host of other file types. Read the [Webpack documentation](http://webpack.github.io/docs/home.html) to find out more.

## Props
Thanks to [Edd Hannay](https://github.com/eddhannay) for his Webpack optimisations, my local merge and testing meant his additions lost his signature (my fault, sorry). So, big thanks Edd.

### Running Tests
`npm test` or `node node_modules/.bin/mocha`

## License
[MIT license](http://opensource.org/licenses/mit-license.php)
