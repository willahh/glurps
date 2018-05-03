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
var G__24860__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__24860 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24861__i = 0, G__24861__a = new Array(arguments.length -  0);
while (G__24861__i < G__24861__a.length) {G__24861__a[G__24861__i] = arguments[G__24861__i + 0]; ++G__24861__i;}
  args = new cljs.core.IndexedSeq(G__24861__a,0,null);
} 
return G__24860__delegate.call(this,args);};
G__24860.cljs$lang$maxFixedArity = 0;
G__24860.cljs$lang$applyTo = (function (arglist__24862){
var args = cljs.core.seq(arglist__24862);
return G__24860__delegate(args);
});
G__24860.cljs$core$IFn$_invoke$arity$variadic = G__24860__delegate;
return G__24860;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__24863__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__24863 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24864__i = 0, G__24864__a = new Array(arguments.length -  0);
while (G__24864__i < G__24864__a.length) {G__24864__a[G__24864__i] = arguments[G__24864__i + 0]; ++G__24864__i;}
  args = new cljs.core.IndexedSeq(G__24864__a,0,null);
} 
return G__24863__delegate.call(this,args);};
G__24863.cljs$lang$maxFixedArity = 0;
G__24863.cljs$lang$applyTo = (function (arglist__24865){
var args = cljs.core.seq(arglist__24865);
return G__24863__delegate(args);
});
G__24863.cljs$core$IFn$_invoke$arity$variadic = G__24863__delegate;
return G__24863;
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

//# sourceMappingURL=debug.js.map?rel=1525376040459
