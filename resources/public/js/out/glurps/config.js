// Compiled by ClojureScript 1.10.238 {}
goog.provide('glurps.config');
goog.require('cljs.core');
goog.require('glurps.config_edn');
glurps.config.get = (function glurps$config$get(key){
var conf = glurps.config_edn.data;
return cljs.core.keyword.call(null,key).call(null,conf);
});

<<<<<<< HEAD
//# sourceMappingURL=config.js.map?rel=1525389491709
=======
//# sourceMappingURL=config.js.map?rel=1525457308301
>>>>>>> sqlite
