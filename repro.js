const {ResolverFactory} = require('./napi');
let resolver = new ResolverFactory({});
resolver.sync(__dirname, 'x-' + __dirname + '\\\\node_modules\\\\any.js');
resolver = resolver.cloneWithOptions({});
resolver.clearCache();
resolver.sync(__dirname + '\\\\node_modules\\\\foo-bar-foo-bar-fo', 'foo-bar-fo');
console.log('unexpectedly survived second sync call');
