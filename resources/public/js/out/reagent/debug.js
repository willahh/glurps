// Compiled by ClojureScript 1.10.238 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__55264__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__55264 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__55265__i = 0, G__55265__a = new Array(arguments.length -  0);
while (G__55265__i < G__55265__a.length) {G__55265__a[G__55265__i] = arguments[G__55265__i + 0]; ++G__55265__i;}
  args = new cljs.core.IndexedSeq(G__55265__a,0,null);
} 
return G__55264__delegate.call(this,args);};
G__55264.cljs$lang$maxFixedArity = 0;
G__55264.cljs$lang$applyTo = (function (arglist__55266){
var args = cljs.core.seq(arglist__55266);
return G__55264__delegate(args);
});
G__55264.cljs$core$IFn$_invoke$arity$variadic = G__55264__delegate;
return G__55264;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__55267__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__55267 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__55268__i = 0, G__55268__a = new Array(arguments.length -  0);
while (G__55268__i < G__55268__a.length) {G__55268__a[G__55268__i] = arguments[G__55268__i + 0]; ++G__55268__i;}
  args = new cljs.core.IndexedSeq(G__55268__a,0,null);
} 
return G__55267__delegate.call(this,args);};
G__55267.cljs$lang$maxFixedArity = 0;
G__55267.cljs$lang$applyTo = (function (arglist__55269){
var args = cljs.core.seq(arglist__55269);
return G__55267__delegate(args);
});
G__55267.cljs$core$IFn$_invoke$arity$variadic = G__55267__delegate;
return G__55267;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1525389490645
