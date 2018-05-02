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
var G__21810__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__21810 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21811__i = 0, G__21811__a = new Array(arguments.length -  0);
while (G__21811__i < G__21811__a.length) {G__21811__a[G__21811__i] = arguments[G__21811__i + 0]; ++G__21811__i;}
  args = new cljs.core.IndexedSeq(G__21811__a,0,null);
} 
return G__21810__delegate.call(this,args);};
G__21810.cljs$lang$maxFixedArity = 0;
G__21810.cljs$lang$applyTo = (function (arglist__21812){
var args = cljs.core.seq(arglist__21812);
return G__21810__delegate(args);
});
G__21810.cljs$core$IFn$_invoke$arity$variadic = G__21810__delegate;
return G__21810;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__21813__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__21813 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21814__i = 0, G__21814__a = new Array(arguments.length -  0);
while (G__21814__i < G__21814__a.length) {G__21814__a[G__21814__i] = arguments[G__21814__i + 0]; ++G__21814__i;}
  args = new cljs.core.IndexedSeq(G__21814__a,0,null);
} 
return G__21813__delegate.call(this,args);};
G__21813.cljs$lang$maxFixedArity = 0;
G__21813.cljs$lang$applyTo = (function (arglist__21815){
var args = cljs.core.seq(arglist__21815);
return G__21813__delegate(args);
});
G__21813.cljs$core$IFn$_invoke$arity$variadic = G__21813__delegate;
return G__21813;
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

//# sourceMappingURL=debug.js.map?rel=1525289320331
