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
var G__40382__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__40382 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40383__i = 0, G__40383__a = new Array(arguments.length -  0);
while (G__40383__i < G__40383__a.length) {G__40383__a[G__40383__i] = arguments[G__40383__i + 0]; ++G__40383__i;}
  args = new cljs.core.IndexedSeq(G__40383__a,0,null);
} 
return G__40382__delegate.call(this,args);};
G__40382.cljs$lang$maxFixedArity = 0;
G__40382.cljs$lang$applyTo = (function (arglist__40384){
var args = cljs.core.seq(arglist__40384);
return G__40382__delegate(args);
});
G__40382.cljs$core$IFn$_invoke$arity$variadic = G__40382__delegate;
return G__40382;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__40385__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__40385 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40386__i = 0, G__40386__a = new Array(arguments.length -  0);
while (G__40386__i < G__40386__a.length) {G__40386__a[G__40386__i] = arguments[G__40386__i + 0]; ++G__40386__i;}
  args = new cljs.core.IndexedSeq(G__40386__a,0,null);
} 
return G__40385__delegate.call(this,args);};
G__40385.cljs$lang$maxFixedArity = 0;
G__40385.cljs$lang$applyTo = (function (arglist__40387){
var args = cljs.core.seq(arglist__40387);
return G__40385__delegate(args);
});
G__40385.cljs$core$IFn$_invoke$arity$variadic = G__40385__delegate;
return G__40385;
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

//# sourceMappingURL=debug.js.map?rel=1525299182491
