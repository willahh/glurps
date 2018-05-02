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
var G__61444__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__61444 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__61445__i = 0, G__61445__a = new Array(arguments.length -  0);
while (G__61445__i < G__61445__a.length) {G__61445__a[G__61445__i] = arguments[G__61445__i + 0]; ++G__61445__i;}
  args = new cljs.core.IndexedSeq(G__61445__a,0,null);
} 
return G__61444__delegate.call(this,args);};
G__61444.cljs$lang$maxFixedArity = 0;
G__61444.cljs$lang$applyTo = (function (arglist__61446){
var args = cljs.core.seq(arglist__61446);
return G__61444__delegate(args);
});
G__61444.cljs$core$IFn$_invoke$arity$variadic = G__61444__delegate;
return G__61444;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__61447__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__61447 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__61448__i = 0, G__61448__a = new Array(arguments.length -  0);
while (G__61448__i < G__61448__a.length) {G__61448__a[G__61448__i] = arguments[G__61448__i + 0]; ++G__61448__i;}
  args = new cljs.core.IndexedSeq(G__61448__a,0,null);
} 
return G__61447__delegate.call(this,args);};
G__61447.cljs$lang$maxFixedArity = 0;
G__61447.cljs$lang$applyTo = (function (arglist__61449){
var args = cljs.core.seq(arglist__61449);
return G__61447__delegate(args);
});
G__61447.cljs$core$IFn$_invoke$arity$variadic = G__61447__delegate;
return G__61447;
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

//# sourceMappingURL=debug.js.map?rel=1525299294498
