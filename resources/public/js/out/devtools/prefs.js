// Compiled by ClojureScript 1.10.238 {}
goog.provide('devtools.prefs');
goog.require('cljs.core');
goog.require('devtools.defaults');
devtools.prefs.default_config = (new cljs.core.Delay((function (){
return cljs.core.deref.call(null,devtools.defaults.config);
}),null));
devtools.prefs.external_config = (new cljs.core.Delay((function (){
return cljs.core.PersistentArrayMap.EMPTY;
}),null));
devtools.prefs.env_config = (new cljs.core.Delay((function (){
return cljs.core.PersistentArrayMap.EMPTY;
}),null));
devtools.prefs.initial_config = (new cljs.core.Delay((function (){
return cljs.core.merge.call(null,cljs.core.deref.call(null,devtools.prefs.default_config),cljs.core.deref.call(null,devtools.prefs.external_config),cljs.core.deref.call(null,devtools.prefs.env_config));
}),null));
devtools.prefs._STAR_current_config_STAR_ = (new cljs.core.Delay((function (){
return cljs.core.deref.call(null,devtools.prefs.initial_config);
}),null));
devtools.prefs.set_prefs_BANG_ = (function devtools$prefs$set_prefs_BANG_(new_prefs){
return devtools.prefs._STAR_current_config_STAR_ = new_prefs;
});
devtools.prefs.get_prefs = (function devtools$prefs$get_prefs(){
if(cljs.core.delay_QMARK_.call(null,devtools.prefs._STAR_current_config_STAR_)){
devtools.prefs.set_prefs_BANG_.call(null,cljs.core.deref.call(null,devtools.prefs._STAR_current_config_STAR_));
} else {
}

return devtools.prefs._STAR_current_config_STAR_;
});
devtools.prefs.pref = (function devtools$prefs$pref(key){
return key.call(null,devtools.prefs.get_prefs.call(null));
});
devtools.prefs.set_pref_BANG_ = (function devtools$prefs$set_pref_BANG_(key,val){
return devtools.prefs.set_prefs_BANG_.call(null,cljs.core.assoc.call(null,devtools.prefs.get_prefs.call(null),key,val));
});
devtools.prefs.merge_prefs_BANG_ = (function devtools$prefs$merge_prefs_BANG_(m){
return devtools.prefs.set_prefs_BANG_.call(null,cljs.core.merge.call(null,devtools.prefs.get_prefs.call(null),m));
});
devtools.prefs.update_pref_BANG_ = (function devtools$prefs$update_pref_BANG_(var_args){
var args__4502__auto__ = [];
<<<<<<< HEAD
var len__4499__auto___52008 = arguments.length;
var i__4500__auto___52009 = (0);
while(true){
if((i__4500__auto___52009 < len__4499__auto___52008)){
args__4502__auto__.push((arguments[i__4500__auto___52009]));

var G__52010 = (i__4500__auto___52009 + (1));
i__4500__auto___52009 = G__52010;
=======
var len__4499__auto___68326 = arguments.length;
var i__4500__auto___68327 = (0);
while(true){
if((i__4500__auto___68327 < len__4499__auto___68326)){
args__4502__auto__.push((arguments[i__4500__auto___68327]));

var G__68328 = (i__4500__auto___68327 + (1));
i__4500__auto___68327 = G__68328;
>>>>>>> sqlite
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return devtools.prefs.update_pref_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

devtools.prefs.update_pref_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (key,f,args){
var new_val = cljs.core.apply.call(null,f,devtools.prefs.pref.call(null,key),args);
return devtools.prefs.set_pref_BANG_.call(null,key,new_val);
});

devtools.prefs.update_pref_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
<<<<<<< HEAD
devtools.prefs.update_pref_BANG_.cljs$lang$applyTo = (function (seq52005){
var G__52006 = cljs.core.first.call(null,seq52005);
var seq52005__$1 = cljs.core.next.call(null,seq52005);
var G__52007 = cljs.core.first.call(null,seq52005__$1);
var seq52005__$2 = cljs.core.next.call(null,seq52005__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52006,G__52007,seq52005__$2);
});


//# sourceMappingURL=prefs.js.map?rel=1525389484965
=======
devtools.prefs.update_pref_BANG_.cljs$lang$applyTo = (function (seq68323){
var G__68324 = cljs.core.first.call(null,seq68323);
var seq68323__$1 = cljs.core.next.call(null,seq68323);
var G__68325 = cljs.core.first.call(null,seq68323__$1);
var seq68323__$2 = cljs.core.next.call(null,seq68323__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__68324,G__68325,seq68323__$2);
});


//# sourceMappingURL=prefs.js.map?rel=1525389564164
>>>>>>> sqlite
