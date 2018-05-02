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
var G__40202__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__40202 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40203__i = 0, G__40203__a = new Array(arguments.length -  0);
while (G__40203__i < G__40203__a.length) {G__40203__a[G__40203__i] = arguments[G__40203__i + 0]; ++G__40203__i;}
  args = new cljs.core.IndexedSeq(G__40203__a,0,null);
} 
return G__40202__delegate.call(this,args);};
G__40202.cljs$lang$maxFixedArity = 0;
G__40202.cljs$lang$applyTo = (function (arglist__40204){
var args = cljs.core.seq(arglist__40204);
return G__40202__delegate(args);
});
G__40202.cljs$core$IFn$_invoke$arity$variadic = G__40202__delegate;
return G__40202;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__40205__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__40205 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40206__i = 0, G__40206__a = new Array(arguments.length -  0);
while (G__40206__i < G__40206__a.length) {G__40206__a[G__40206__i] = arguments[G__40206__i + 0]; ++G__40206__i;}
  args = new cljs.core.IndexedSeq(G__40206__a,0,null);
} 
return G__40205__delegate.call(this,args);};
G__40205.cljs$lang$maxFixedArity = 0;
G__40205.cljs$lang$applyTo = (function (arglist__40207){
var args = cljs.core.seq(arglist__40207);
return G__40205__delegate(args);
});
G__40205.cljs$core$IFn$_invoke$arity$variadic = G__40205__delegate;
return G__40205;
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

//# sourceMappingURL=debug.js.map
