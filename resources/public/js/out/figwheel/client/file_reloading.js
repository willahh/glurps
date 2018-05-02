// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__3922__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__3922__auto__){
return or__3922__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__3922__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__50482_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__50482_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__50483 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__50484 = null;
var count__50485 = (0);
var i__50486 = (0);
while(true){
if((i__50486 < count__50485)){
var n = cljs.core._nth.call(null,chunk__50484,i__50486);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__50487 = seq__50483;
var G__50488 = chunk__50484;
var G__50489 = count__50485;
var G__50490 = (i__50486 + (1));
seq__50483 = G__50487;
chunk__50484 = G__50488;
count__50485 = G__50489;
i__50486 = G__50490;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__50483);
if(temp__5457__auto__){
var seq__50483__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50483__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__50483__$1);
var G__50491 = cljs.core.chunk_rest.call(null,seq__50483__$1);
var G__50492 = c__4319__auto__;
var G__50493 = cljs.core.count.call(null,c__4319__auto__);
var G__50494 = (0);
seq__50483 = G__50491;
chunk__50484 = G__50492;
count__50485 = G__50493;
i__50486 = G__50494;
continue;
} else {
var n = cljs.core.first.call(null,seq__50483__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__50495 = cljs.core.next.call(null,seq__50483__$1);
var G__50496 = null;
var G__50497 = (0);
var G__50498 = (0);
seq__50483 = G__50495;
chunk__50484 = G__50496;
count__50485 = G__50497;
i__50486 = G__50498;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__50499){
var vec__50500 = p__50499;
var _ = cljs.core.nth.call(null,vec__50500,(0),null);
var v = cljs.core.nth.call(null,vec__50500,(1),null);
var and__3911__auto__ = v;
if(cljs.core.truth_(and__3911__auto__)){
return v.call(null,dep);
} else {
return and__3911__auto__;
}
}),cljs.core.filter.call(null,(function (p__50503){
var vec__50504 = p__50503;
var k = cljs.core.nth.call(null,vec__50504,(0),null);
var v = cljs.core.nth.call(null,vec__50504,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__50516_50524 = cljs.core.seq.call(null,deps);
var chunk__50517_50525 = null;
var count__50518_50526 = (0);
var i__50519_50527 = (0);
while(true){
if((i__50519_50527 < count__50518_50526)){
var dep_50528 = cljs.core._nth.call(null,chunk__50517_50525,i__50519_50527);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_50528;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_50528));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_50528,(depth + (1)),state);
} else {
}


var G__50529 = seq__50516_50524;
var G__50530 = chunk__50517_50525;
var G__50531 = count__50518_50526;
var G__50532 = (i__50519_50527 + (1));
seq__50516_50524 = G__50529;
chunk__50517_50525 = G__50530;
count__50518_50526 = G__50531;
i__50519_50527 = G__50532;
continue;
} else {
var temp__5457__auto___50533 = cljs.core.seq.call(null,seq__50516_50524);
if(temp__5457__auto___50533){
var seq__50516_50534__$1 = temp__5457__auto___50533;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50516_50534__$1)){
var c__4319__auto___50535 = cljs.core.chunk_first.call(null,seq__50516_50534__$1);
var G__50536 = cljs.core.chunk_rest.call(null,seq__50516_50534__$1);
var G__50537 = c__4319__auto___50535;
var G__50538 = cljs.core.count.call(null,c__4319__auto___50535);
var G__50539 = (0);
seq__50516_50524 = G__50536;
chunk__50517_50525 = G__50537;
count__50518_50526 = G__50538;
i__50519_50527 = G__50539;
continue;
} else {
var dep_50540 = cljs.core.first.call(null,seq__50516_50534__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_50540;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_50540));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_50540,(depth + (1)),state);
} else {
}


var G__50541 = cljs.core.next.call(null,seq__50516_50534__$1);
var G__50542 = null;
var G__50543 = (0);
var G__50544 = (0);
seq__50516_50524 = G__50541;
chunk__50517_50525 = G__50542;
count__50518_50526 = G__50543;
i__50519_50527 = G__50544;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__50520){
var vec__50521 = p__50520;
var seq__50522 = cljs.core.seq.call(null,vec__50521);
var first__50523 = cljs.core.first.call(null,seq__50522);
var seq__50522__$1 = cljs.core.next.call(null,seq__50522);
var x = first__50523;
var xs = seq__50522__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__50521,seq__50522,first__50523,seq__50522__$1,x,xs,get_deps__$1){
return (function (p1__50507_SHARP_){
return clojure.set.difference.call(null,p1__50507_SHARP_,x);
});})(vec__50521,seq__50522,first__50523,seq__50522__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__50545 = cljs.core.seq.call(null,provides);
var chunk__50546 = null;
var count__50547 = (0);
var i__50548 = (0);
while(true){
if((i__50548 < count__50547)){
var prov = cljs.core._nth.call(null,chunk__50546,i__50548);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__50549_50557 = cljs.core.seq.call(null,requires);
var chunk__50550_50558 = null;
var count__50551_50559 = (0);
var i__50552_50560 = (0);
while(true){
if((i__50552_50560 < count__50551_50559)){
var req_50561 = cljs.core._nth.call(null,chunk__50550_50558,i__50552_50560);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_50561,prov);


var G__50562 = seq__50549_50557;
var G__50563 = chunk__50550_50558;
var G__50564 = count__50551_50559;
var G__50565 = (i__50552_50560 + (1));
seq__50549_50557 = G__50562;
chunk__50550_50558 = G__50563;
count__50551_50559 = G__50564;
i__50552_50560 = G__50565;
continue;
} else {
var temp__5457__auto___50566 = cljs.core.seq.call(null,seq__50549_50557);
if(temp__5457__auto___50566){
var seq__50549_50567__$1 = temp__5457__auto___50566;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50549_50567__$1)){
var c__4319__auto___50568 = cljs.core.chunk_first.call(null,seq__50549_50567__$1);
var G__50569 = cljs.core.chunk_rest.call(null,seq__50549_50567__$1);
var G__50570 = c__4319__auto___50568;
var G__50571 = cljs.core.count.call(null,c__4319__auto___50568);
var G__50572 = (0);
seq__50549_50557 = G__50569;
chunk__50550_50558 = G__50570;
count__50551_50559 = G__50571;
i__50552_50560 = G__50572;
continue;
} else {
var req_50573 = cljs.core.first.call(null,seq__50549_50567__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_50573,prov);


var G__50574 = cljs.core.next.call(null,seq__50549_50567__$1);
var G__50575 = null;
var G__50576 = (0);
var G__50577 = (0);
seq__50549_50557 = G__50574;
chunk__50550_50558 = G__50575;
count__50551_50559 = G__50576;
i__50552_50560 = G__50577;
continue;
}
} else {
}
}
break;
}


var G__50578 = seq__50545;
var G__50579 = chunk__50546;
var G__50580 = count__50547;
var G__50581 = (i__50548 + (1));
seq__50545 = G__50578;
chunk__50546 = G__50579;
count__50547 = G__50580;
i__50548 = G__50581;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__50545);
if(temp__5457__auto__){
var seq__50545__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50545__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__50545__$1);
var G__50582 = cljs.core.chunk_rest.call(null,seq__50545__$1);
var G__50583 = c__4319__auto__;
var G__50584 = cljs.core.count.call(null,c__4319__auto__);
var G__50585 = (0);
seq__50545 = G__50582;
chunk__50546 = G__50583;
count__50547 = G__50584;
i__50548 = G__50585;
continue;
} else {
var prov = cljs.core.first.call(null,seq__50545__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__50553_50586 = cljs.core.seq.call(null,requires);
var chunk__50554_50587 = null;
var count__50555_50588 = (0);
var i__50556_50589 = (0);
while(true){
if((i__50556_50589 < count__50555_50588)){
var req_50590 = cljs.core._nth.call(null,chunk__50554_50587,i__50556_50589);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_50590,prov);


var G__50591 = seq__50553_50586;
var G__50592 = chunk__50554_50587;
var G__50593 = count__50555_50588;
var G__50594 = (i__50556_50589 + (1));
seq__50553_50586 = G__50591;
chunk__50554_50587 = G__50592;
count__50555_50588 = G__50593;
i__50556_50589 = G__50594;
continue;
} else {
var temp__5457__auto___50595__$1 = cljs.core.seq.call(null,seq__50553_50586);
if(temp__5457__auto___50595__$1){
var seq__50553_50596__$1 = temp__5457__auto___50595__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50553_50596__$1)){
var c__4319__auto___50597 = cljs.core.chunk_first.call(null,seq__50553_50596__$1);
var G__50598 = cljs.core.chunk_rest.call(null,seq__50553_50596__$1);
var G__50599 = c__4319__auto___50597;
var G__50600 = cljs.core.count.call(null,c__4319__auto___50597);
var G__50601 = (0);
seq__50553_50586 = G__50598;
chunk__50554_50587 = G__50599;
count__50555_50588 = G__50600;
i__50556_50589 = G__50601;
continue;
} else {
var req_50602 = cljs.core.first.call(null,seq__50553_50596__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_50602,prov);


var G__50603 = cljs.core.next.call(null,seq__50553_50596__$1);
var G__50604 = null;
var G__50605 = (0);
var G__50606 = (0);
seq__50553_50586 = G__50603;
chunk__50554_50587 = G__50604;
count__50555_50588 = G__50605;
i__50556_50589 = G__50606;
continue;
}
} else {
}
}
break;
}


var G__50607 = cljs.core.next.call(null,seq__50545__$1);
var G__50608 = null;
var G__50609 = (0);
var G__50610 = (0);
seq__50545 = G__50607;
chunk__50546 = G__50608;
count__50547 = G__50609;
i__50548 = G__50610;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__50611_50615 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__50612_50616 = null;
var count__50613_50617 = (0);
var i__50614_50618 = (0);
while(true){
if((i__50614_50618 < count__50613_50617)){
var ns_50619 = cljs.core._nth.call(null,chunk__50612_50616,i__50614_50618);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_50619);


var G__50620 = seq__50611_50615;
var G__50621 = chunk__50612_50616;
var G__50622 = count__50613_50617;
var G__50623 = (i__50614_50618 + (1));
seq__50611_50615 = G__50620;
chunk__50612_50616 = G__50621;
count__50613_50617 = G__50622;
i__50614_50618 = G__50623;
continue;
} else {
var temp__5457__auto___50624 = cljs.core.seq.call(null,seq__50611_50615);
if(temp__5457__auto___50624){
var seq__50611_50625__$1 = temp__5457__auto___50624;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50611_50625__$1)){
var c__4319__auto___50626 = cljs.core.chunk_first.call(null,seq__50611_50625__$1);
var G__50627 = cljs.core.chunk_rest.call(null,seq__50611_50625__$1);
var G__50628 = c__4319__auto___50626;
var G__50629 = cljs.core.count.call(null,c__4319__auto___50626);
var G__50630 = (0);
seq__50611_50615 = G__50627;
chunk__50612_50616 = G__50628;
count__50613_50617 = G__50629;
i__50614_50618 = G__50630;
continue;
} else {
var ns_50631 = cljs.core.first.call(null,seq__50611_50625__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_50631);


var G__50632 = cljs.core.next.call(null,seq__50611_50625__$1);
var G__50633 = null;
var G__50634 = (0);
var G__50635 = (0);
seq__50611_50615 = G__50632;
chunk__50612_50616 = G__50633;
count__50613_50617 = G__50634;
i__50614_50618 = G__50635;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__3922__auto__ = goog.require__;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__50636__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__50636 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50637__i = 0, G__50637__a = new Array(arguments.length -  0);
while (G__50637__i < G__50637__a.length) {G__50637__a[G__50637__i] = arguments[G__50637__i + 0]; ++G__50637__i;}
  args = new cljs.core.IndexedSeq(G__50637__a,0,null);
} 
return G__50636__delegate.call(this,args);};
G__50636.cljs$lang$maxFixedArity = 0;
G__50636.cljs$lang$applyTo = (function (arglist__50638){
var args = cljs.core.seq(arglist__50638);
return G__50636__delegate(args);
});
G__50636.cljs$core$IFn$_invoke$arity$variadic = G__50636__delegate;
return G__50636;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__50639_SHARP_,p2__50640_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__50639_SHARP_)].join('')),p2__50640_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__50641_SHARP_,p2__50642_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__50641_SHARP_)].join(''),p2__50642_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__50643 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__50643.addCallback(((function (G__50643){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__50643))
);

G__50643.addErrback(((function (G__50643){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__50643))
);

return G__50643;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e50644){if((e50644 instanceof Error)){
var e = e50644;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e50644;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e50645){if((e50645 instanceof Error)){
var e = e50645;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e50645;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__50646 = cljs.core._EQ_;
var expr__50647 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__50646.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__50647))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__50646.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__50647))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__50646.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__50647))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__50646,expr__50647){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__50646,expr__50647))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__50649,callback){
var map__50650 = p__50649;
var map__50650__$1 = ((((!((map__50650 == null)))?(((((map__50650.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50650.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50650):map__50650);
var file_msg = map__50650__$1;
var request_url = cljs.core.get.call(null,map__50650__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3922__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__50650,map__50650__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__50650,map__50650__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__43716__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43716__auto__){
return (function (){
var f__43717__auto__ = (function (){var switch__43559__auto__ = ((function (c__43716__auto__){
return (function (state_50688){
var state_val_50689 = (state_50688[(1)]);
if((state_val_50689 === (7))){
var inst_50684 = (state_50688[(2)]);
var state_50688__$1 = state_50688;
var statearr_50690_50716 = state_50688__$1;
(statearr_50690_50716[(2)] = inst_50684);

(statearr_50690_50716[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50689 === (1))){
var state_50688__$1 = state_50688;
var statearr_50691_50717 = state_50688__$1;
(statearr_50691_50717[(2)] = null);

(statearr_50691_50717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50689 === (4))){
var inst_50654 = (state_50688[(7)]);
var inst_50654__$1 = (state_50688[(2)]);
var state_50688__$1 = (function (){var statearr_50692 = state_50688;
(statearr_50692[(7)] = inst_50654__$1);

return statearr_50692;
})();
if(cljs.core.truth_(inst_50654__$1)){
var statearr_50693_50718 = state_50688__$1;
(statearr_50693_50718[(1)] = (5));

} else {
var statearr_50694_50719 = state_50688__$1;
(statearr_50694_50719[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50689 === (15))){
var inst_50669 = (state_50688[(8)]);
var inst_50667 = (state_50688[(9)]);
var inst_50671 = inst_50669.call(null,inst_50667);
var state_50688__$1 = state_50688;
var statearr_50695_50720 = state_50688__$1;
(statearr_50695_50720[(2)] = inst_50671);

(statearr_50695_50720[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50689 === (13))){
var inst_50678 = (state_50688[(2)]);
var state_50688__$1 = state_50688;
var statearr_50696_50721 = state_50688__$1;
(statearr_50696_50721[(2)] = inst_50678);

(statearr_50696_50721[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50689 === (6))){
var state_50688__$1 = state_50688;
var statearr_50697_50722 = state_50688__$1;
(statearr_50697_50722[(2)] = null);

(statearr_50697_50722[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50689 === (17))){
var inst_50675 = (state_50688[(2)]);
var state_50688__$1 = state_50688;
var statearr_50698_50723 = state_50688__$1;
(statearr_50698_50723[(2)] = inst_50675);

(statearr_50698_50723[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50689 === (3))){
var inst_50686 = (state_50688[(2)]);
var state_50688__$1 = state_50688;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50688__$1,inst_50686);
} else {
if((state_val_50689 === (12))){
var state_50688__$1 = state_50688;
var statearr_50699_50724 = state_50688__$1;
(statearr_50699_50724[(2)] = null);

(statearr_50699_50724[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50689 === (2))){
var state_50688__$1 = state_50688;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50688__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_50689 === (11))){
var inst_50659 = (state_50688[(10)]);
var inst_50665 = figwheel.client.file_reloading.blocking_load.call(null,inst_50659);
var state_50688__$1 = state_50688;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50688__$1,(14),inst_50665);
} else {
if((state_val_50689 === (9))){
var inst_50659 = (state_50688[(10)]);
var state_50688__$1 = state_50688;
if(cljs.core.truth_(inst_50659)){
var statearr_50700_50725 = state_50688__$1;
(statearr_50700_50725[(1)] = (11));

} else {
var statearr_50701_50726 = state_50688__$1;
(statearr_50701_50726[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50689 === (5))){
var inst_50654 = (state_50688[(7)]);
var inst_50660 = (state_50688[(11)]);
var inst_50659 = cljs.core.nth.call(null,inst_50654,(0),null);
var inst_50660__$1 = cljs.core.nth.call(null,inst_50654,(1),null);
var state_50688__$1 = (function (){var statearr_50702 = state_50688;
(statearr_50702[(10)] = inst_50659);

(statearr_50702[(11)] = inst_50660__$1);

return statearr_50702;
})();
if(cljs.core.truth_(inst_50660__$1)){
var statearr_50703_50727 = state_50688__$1;
(statearr_50703_50727[(1)] = (8));

} else {
var statearr_50704_50728 = state_50688__$1;
(statearr_50704_50728[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50689 === (14))){
var inst_50659 = (state_50688[(10)]);
var inst_50669 = (state_50688[(8)]);
var inst_50667 = (state_50688[(2)]);
var inst_50668 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_50669__$1 = cljs.core.get.call(null,inst_50668,inst_50659);
var state_50688__$1 = (function (){var statearr_50705 = state_50688;
(statearr_50705[(8)] = inst_50669__$1);

(statearr_50705[(9)] = inst_50667);

return statearr_50705;
})();
if(cljs.core.truth_(inst_50669__$1)){
var statearr_50706_50729 = state_50688__$1;
(statearr_50706_50729[(1)] = (15));

} else {
var statearr_50707_50730 = state_50688__$1;
(statearr_50707_50730[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50689 === (16))){
var inst_50667 = (state_50688[(9)]);
var inst_50673 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_50667);
var state_50688__$1 = state_50688;
var statearr_50708_50731 = state_50688__$1;
(statearr_50708_50731[(2)] = inst_50673);

(statearr_50708_50731[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50689 === (10))){
var inst_50680 = (state_50688[(2)]);
var state_50688__$1 = (function (){var statearr_50709 = state_50688;
(statearr_50709[(12)] = inst_50680);

return statearr_50709;
})();
var statearr_50710_50732 = state_50688__$1;
(statearr_50710_50732[(2)] = null);

(statearr_50710_50732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50689 === (8))){
var inst_50660 = (state_50688[(11)]);
var inst_50662 = eval(inst_50660);
var state_50688__$1 = state_50688;
var statearr_50711_50733 = state_50688__$1;
(statearr_50711_50733[(2)] = inst_50662);

(statearr_50711_50733[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__43716__auto__))
;
return ((function (switch__43559__auto__,c__43716__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__43560__auto__ = null;
var figwheel$client$file_reloading$state_machine__43560__auto____0 = (function (){
var statearr_50712 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50712[(0)] = figwheel$client$file_reloading$state_machine__43560__auto__);

(statearr_50712[(1)] = (1));

return statearr_50712;
});
var figwheel$client$file_reloading$state_machine__43560__auto____1 = (function (state_50688){
while(true){
var ret_value__43561__auto__ = (function (){try{while(true){
var result__43562__auto__ = switch__43559__auto__.call(null,state_50688);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43562__auto__;
}
break;
}
}catch (e50713){if((e50713 instanceof Object)){
var ex__43563__auto__ = e50713;
var statearr_50714_50734 = state_50688;
(statearr_50714_50734[(5)] = ex__43563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50688);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50713;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50735 = state_50688;
state_50688 = G__50735;
continue;
} else {
return ret_value__43561__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__43560__auto__ = function(state_50688){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__43560__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__43560__auto____1.call(this,state_50688);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__43560__auto____0;
figwheel$client$file_reloading$state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__43560__auto____1;
return figwheel$client$file_reloading$state_machine__43560__auto__;
})()
;})(switch__43559__auto__,c__43716__auto__))
})();
var state__43718__auto__ = (function (){var statearr_50715 = f__43717__auto__.call(null);
(statearr_50715[(6)] = c__43716__auto__);

return statearr_50715;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43718__auto__);
});})(c__43716__auto__))
);

return c__43716__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__50737 = arguments.length;
switch (G__50737) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__50739,callback){
var map__50740 = p__50739;
var map__50740__$1 = ((((!((map__50740 == null)))?(((((map__50740.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50740.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50740):map__50740);
var file_msg = map__50740__$1;
var namespace = cljs.core.get.call(null,map__50740__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__50740,map__50740__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__50740,map__50740__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__50742){
var map__50743 = p__50742;
var map__50743__$1 = ((((!((map__50743 == null)))?(((((map__50743.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50743.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50743):map__50743);
var file_msg = map__50743__$1;
var namespace = cljs.core.get.call(null,map__50743__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__50745){
var map__50746 = p__50745;
var map__50746__$1 = ((((!((map__50746 == null)))?(((((map__50746.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50746.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50746):map__50746);
var file_msg = map__50746__$1;
var namespace = cljs.core.get.call(null,map__50746__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__3911__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__3911__auto__){
var or__3922__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
var or__3922__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__3922__auto____$2)){
return or__3922__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__3911__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__50748,callback){
var map__50749 = p__50748;
var map__50749__$1 = ((((!((map__50749 == null)))?(((((map__50749.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50749.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50749):map__50749);
var file_msg = map__50749__$1;
var request_url = cljs.core.get.call(null,map__50749__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__50749__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__43716__auto___50799 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43716__auto___50799,out){
return (function (){
var f__43717__auto__ = (function (){var switch__43559__auto__ = ((function (c__43716__auto___50799,out){
return (function (state_50784){
var state_val_50785 = (state_50784[(1)]);
if((state_val_50785 === (1))){
var inst_50758 = cljs.core.seq.call(null,files);
var inst_50759 = cljs.core.first.call(null,inst_50758);
var inst_50760 = cljs.core.next.call(null,inst_50758);
var inst_50761 = files;
var state_50784__$1 = (function (){var statearr_50786 = state_50784;
(statearr_50786[(7)] = inst_50761);

(statearr_50786[(8)] = inst_50760);

(statearr_50786[(9)] = inst_50759);

return statearr_50786;
})();
var statearr_50787_50800 = state_50784__$1;
(statearr_50787_50800[(2)] = null);

(statearr_50787_50800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50785 === (2))){
var inst_50761 = (state_50784[(7)]);
var inst_50767 = (state_50784[(10)]);
var inst_50766 = cljs.core.seq.call(null,inst_50761);
var inst_50767__$1 = cljs.core.first.call(null,inst_50766);
var inst_50768 = cljs.core.next.call(null,inst_50766);
var inst_50769 = (inst_50767__$1 == null);
var inst_50770 = cljs.core.not.call(null,inst_50769);
var state_50784__$1 = (function (){var statearr_50788 = state_50784;
(statearr_50788[(10)] = inst_50767__$1);

(statearr_50788[(11)] = inst_50768);

return statearr_50788;
})();
if(inst_50770){
var statearr_50789_50801 = state_50784__$1;
(statearr_50789_50801[(1)] = (4));

} else {
var statearr_50790_50802 = state_50784__$1;
(statearr_50790_50802[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50785 === (3))){
var inst_50782 = (state_50784[(2)]);
var state_50784__$1 = state_50784;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50784__$1,inst_50782);
} else {
if((state_val_50785 === (4))){
var inst_50767 = (state_50784[(10)]);
var inst_50772 = figwheel.client.file_reloading.reload_js_file.call(null,inst_50767);
var state_50784__$1 = state_50784;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50784__$1,(7),inst_50772);
} else {
if((state_val_50785 === (5))){
var inst_50778 = cljs.core.async.close_BANG_.call(null,out);
var state_50784__$1 = state_50784;
var statearr_50791_50803 = state_50784__$1;
(statearr_50791_50803[(2)] = inst_50778);

(statearr_50791_50803[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50785 === (6))){
var inst_50780 = (state_50784[(2)]);
var state_50784__$1 = state_50784;
var statearr_50792_50804 = state_50784__$1;
(statearr_50792_50804[(2)] = inst_50780);

(statearr_50792_50804[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50785 === (7))){
var inst_50768 = (state_50784[(11)]);
var inst_50774 = (state_50784[(2)]);
var inst_50775 = cljs.core.async.put_BANG_.call(null,out,inst_50774);
var inst_50761 = inst_50768;
var state_50784__$1 = (function (){var statearr_50793 = state_50784;
(statearr_50793[(7)] = inst_50761);

(statearr_50793[(12)] = inst_50775);

return statearr_50793;
})();
var statearr_50794_50805 = state_50784__$1;
(statearr_50794_50805[(2)] = null);

(statearr_50794_50805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__43716__auto___50799,out))
;
return ((function (switch__43559__auto__,c__43716__auto___50799,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__43560__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__43560__auto____0 = (function (){
var statearr_50795 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50795[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__43560__auto__);

(statearr_50795[(1)] = (1));

return statearr_50795;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__43560__auto____1 = (function (state_50784){
while(true){
var ret_value__43561__auto__ = (function (){try{while(true){
var result__43562__auto__ = switch__43559__auto__.call(null,state_50784);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43562__auto__;
}
break;
}
}catch (e50796){if((e50796 instanceof Object)){
var ex__43563__auto__ = e50796;
var statearr_50797_50806 = state_50784;
(statearr_50797_50806[(5)] = ex__43563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50784);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50796;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50807 = state_50784;
state_50784 = G__50807;
continue;
} else {
return ret_value__43561__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__43560__auto__ = function(state_50784){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__43560__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__43560__auto____1.call(this,state_50784);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__43560__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__43560__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__43560__auto__;
})()
;})(switch__43559__auto__,c__43716__auto___50799,out))
})();
var state__43718__auto__ = (function (){var statearr_50798 = f__43717__auto__.call(null);
(statearr_50798[(6)] = c__43716__auto___50799);

return statearr_50798;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43718__auto__);
});})(c__43716__auto___50799,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__50808,opts){
var map__50809 = p__50808;
var map__50809__$1 = ((((!((map__50809 == null)))?(((((map__50809.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50809.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50809):map__50809);
var eval_body = cljs.core.get.call(null,map__50809__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__50809__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__3911__auto__ = eval_body;
if(cljs.core.truth_(and__3911__auto__)){
return typeof eval_body === 'string';
} else {
return and__3911__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e50811){var e = e50811;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5455__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__50812_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__50812_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5455__auto__)){
var file_msg = temp__5455__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__50813){
var vec__50814 = p__50813;
var k = cljs.core.nth.call(null,vec__50814,(0),null);
var v = cljs.core.nth.call(null,vec__50814,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__50817){
var vec__50818 = p__50817;
var k = cljs.core.nth.call(null,vec__50818,(0),null);
var v = cljs.core.nth.call(null,vec__50818,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__50824,p__50825){
var map__50826 = p__50824;
var map__50826__$1 = ((((!((map__50826 == null)))?(((((map__50826.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50826.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50826):map__50826);
var opts = map__50826__$1;
var before_jsload = cljs.core.get.call(null,map__50826__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__50826__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__50826__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__50827 = p__50825;
var map__50827__$1 = ((((!((map__50827 == null)))?(((((map__50827.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50827.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50827):map__50827);
var msg = map__50827__$1;
var files = cljs.core.get.call(null,map__50827__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__50827__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__50827__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__43716__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43716__auto__,map__50826,map__50826__$1,opts,before_jsload,on_jsload,reload_dependents,map__50827,map__50827__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__43717__auto__ = (function (){var switch__43559__auto__ = ((function (c__43716__auto__,map__50826,map__50826__$1,opts,before_jsload,on_jsload,reload_dependents,map__50827,map__50827__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_50981){
var state_val_50982 = (state_50981[(1)]);
if((state_val_50982 === (7))){
var inst_50844 = (state_50981[(7)]);
var inst_50843 = (state_50981[(8)]);
var inst_50842 = (state_50981[(9)]);
var inst_50841 = (state_50981[(10)]);
var inst_50849 = cljs.core._nth.call(null,inst_50842,inst_50844);
var inst_50850 = figwheel.client.file_reloading.eval_body.call(null,inst_50849,opts);
var inst_50851 = (inst_50844 + (1));
var tmp50983 = inst_50843;
var tmp50984 = inst_50842;
var tmp50985 = inst_50841;
var inst_50841__$1 = tmp50985;
var inst_50842__$1 = tmp50984;
var inst_50843__$1 = tmp50983;
var inst_50844__$1 = inst_50851;
var state_50981__$1 = (function (){var statearr_50986 = state_50981;
(statearr_50986[(7)] = inst_50844__$1);

(statearr_50986[(8)] = inst_50843__$1);

(statearr_50986[(9)] = inst_50842__$1);

(statearr_50986[(10)] = inst_50841__$1);

(statearr_50986[(11)] = inst_50850);

return statearr_50986;
})();
var statearr_50987_51070 = state_50981__$1;
(statearr_50987_51070[(2)] = null);

(statearr_50987_51070[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50982 === (20))){
var inst_50884 = (state_50981[(12)]);
var inst_50892 = figwheel.client.file_reloading.sort_files.call(null,inst_50884);
var state_50981__$1 = state_50981;
var statearr_50988_51071 = state_50981__$1;
(statearr_50988_51071[(2)] = inst_50892);

(statearr_50988_51071[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50982 === (27))){
var state_50981__$1 = state_50981;
var statearr_50989_51072 = state_50981__$1;
(statearr_50989_51072[(2)] = null);

(statearr_50989_51072[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50982 === (1))){
var inst_50833 = (state_50981[(13)]);
var inst_50830 = before_jsload.call(null,files);
var inst_50831 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_50832 = (function (){return ((function (inst_50833,inst_50830,inst_50831,state_val_50982,c__43716__auto__,map__50826,map__50826__$1,opts,before_jsload,on_jsload,reload_dependents,map__50827,map__50827__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__50821_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__50821_SHARP_);
});
;})(inst_50833,inst_50830,inst_50831,state_val_50982,c__43716__auto__,map__50826,map__50826__$1,opts,before_jsload,on_jsload,reload_dependents,map__50827,map__50827__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_50833__$1 = cljs.core.filter.call(null,inst_50832,files);
var inst_50834 = cljs.core.not_empty.call(null,inst_50833__$1);
var state_50981__$1 = (function (){var statearr_50990 = state_50981;
(statearr_50990[(13)] = inst_50833__$1);

(statearr_50990[(14)] = inst_50830);

(statearr_50990[(15)] = inst_50831);

return statearr_50990;
})();
if(cljs.core.truth_(inst_50834)){
var statearr_50991_51073 = state_50981__$1;
(statearr_50991_51073[(1)] = (2));

} else {
var statearr_50992_51074 = state_50981__$1;
(statearr_50992_51074[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50982 === (24))){
var state_50981__$1 = state_50981;
var statearr_50993_51075 = state_50981__$1;
(statearr_50993_51075[(2)] = null);

(statearr_50993_51075[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50982 === (39))){
var inst_50934 = (state_50981[(16)]);
var state_50981__$1 = state_50981;
var statearr_50994_51076 = state_50981__$1;
(statearr_50994_51076[(2)] = inst_50934);

(statearr_50994_51076[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50982 === (46))){
var inst_50976 = (state_50981[(2)]);
var state_50981__$1 = state_50981;
var statearr_50995_51077 = state_50981__$1;
(statearr_50995_51077[(2)] = inst_50976);

(statearr_50995_51077[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50982 === (4))){
var inst_50878 = (state_50981[(2)]);
var inst_50879 = cljs.core.List.EMPTY;
var inst_50880 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_50879);
var inst_50881 = (function (){return ((function (inst_50878,inst_50879,inst_50880,state_val_50982,c__43716__auto__,map__50826,map__50826__$1,opts,before_jsload,on_jsload,reload_dependents,map__50827,map__50827__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__50822_SHARP_){
var and__3911__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__50822_SHARP_);
if(cljs.core.truth_(and__3911__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__50822_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__50822_SHARP_))));
} else {
return and__3911__auto__;
}
});
;})(inst_50878,inst_50879,inst_50880,state_val_50982,c__43716__auto__,map__50826,map__50826__$1,opts,before_jsload,on_jsload,reload_dependents,map__50827,map__50827__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_50882 = cljs.core.filter.call(null,inst_50881,files);
var inst_50883 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_50884 = cljs.core.concat.call(null,inst_50882,inst_50883);
var state_50981__$1 = (function (){var statearr_50996 = state_50981;
(statearr_50996[(17)] = inst_50880);

(statearr_50996[(18)] = inst_50878);

(statearr_50996[(12)] = inst_50884);

return statearr_50996;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_50997_51078 = state_50981__$1;
(statearr_50997_51078[(1)] = (16));

} else {
var statearr_50998_51079 = state_50981__$1;
(statearr_50998_51079[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50982 === (15))){
var inst_50868 = (state_50981[(2)]);
var state_50981__$1 = state_50981;
var statearr_50999_51080 = state_50981__$1;
(statearr_50999_51080[(2)] = inst_50868);

(statearr_50999_51080[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50982 === (21))){
var inst_50894 = (state_50981[(19)]);
var inst_50894__$1 = (state_50981[(2)]);
var inst_50895 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_50894__$1);
var state_50981__$1 = (function (){var statearr_51000 = state_50981;
(statearr_51000[(19)] = inst_50894__$1);

return statearr_51000;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50981__$1,(22),inst_50895);
} else {
if((state_val_50982 === (31))){
var inst_50979 = (state_50981[(2)]);
var state_50981__$1 = state_50981;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50981__$1,inst_50979);
} else {
if((state_val_50982 === (32))){
var inst_50934 = (state_50981[(16)]);
var inst_50939 = inst_50934.cljs$lang$protocol_mask$partition0$;
var inst_50940 = (inst_50939 & (64));
var inst_50941 = inst_50934.cljs$core$ISeq$;
var inst_50942 = (cljs.core.PROTOCOL_SENTINEL === inst_50941);
var inst_50943 = ((inst_50940) || (inst_50942));
var state_50981__$1 = state_50981;
if(cljs.core.truth_(inst_50943)){
var statearr_51001_51081 = state_50981__$1;
(statearr_51001_51081[(1)] = (35));

} else {
var statearr_51002_51082 = state_50981__$1;
(statearr_51002_51082[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50982 === (40))){
var inst_50956 = (state_50981[(20)]);
var inst_50955 = (state_50981[(2)]);
var inst_50956__$1 = cljs.core.get.call(null,inst_50955,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_50957 = cljs.core.get.call(null,inst_50955,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_50958 = cljs.core.not_empty.call(null,inst_50956__$1);
var state_50981__$1 = (function (){var statearr_51003 = state_50981;
(statearr_51003[(21)] = inst_50957);

(statearr_51003[(20)] = inst_50956__$1);

return statearr_51003;
})();
if(cljs.core.truth_(inst_50958)){
var statearr_51004_51083 = state_50981__$1;
(statearr_51004_51083[(1)] = (41));

} else {
var statearr_51005_51084 = state_50981__$1;
(statearr_51005_51084[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50982 === (33))){
var state_50981__$1 = state_50981;
var statearr_51006_51085 = state_50981__$1;
(statearr_51006_51085[(2)] = false);

(statearr_51006_51085[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50982 === (13))){
var inst_50854 = (state_50981[(22)]);
var inst_50858 = cljs.core.chunk_first.call(null,inst_50854);
var inst_50859 = cljs.core.chunk_rest.call(null,inst_50854);
var inst_50860 = cljs.core.count.call(null,inst_50858);
var inst_50841 = inst_50859;
var inst_50842 = inst_50858;
var inst_50843 = inst_50860;
var inst_50844 = (0);
var state_50981__$1 = (function (){var statearr_51007 = state_50981;
(statearr_51007[(7)] = inst_50844);

(statearr_51007[(8)] = inst_50843);

(statearr_51007[(9)] = inst_50842);

(statearr_51007[(10)] = inst_50841);

return statearr_51007;
})();
var statearr_51008_51086 = state_50981__$1;
(statearr_51008_51086[(2)] = null);

(statearr_51008_51086[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50982 === (22))){
var inst_50898 = (state_50981[(23)]);
var inst_50894 = (state_50981[(19)]);
var inst_50902 = (state_50981[(24)]);
var inst_50897 = (state_50981[(25)]);
var inst_50897__$1 = (state_50981[(2)]);
var inst_50898__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_50897__$1);
var inst_50899 = (function (){var all_files = inst_50894;
var res_SINGLEQUOTE_ = inst_50897__$1;
var res = inst_50898__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_50898,inst_50894,inst_50902,inst_50897,inst_50897__$1,inst_50898__$1,state_val_50982,c__43716__auto__,map__50826,map__50826__$1,opts,before_jsload,on_jsload,reload_dependents,map__50827,map__50827__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__50823_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__50823_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_50898,inst_50894,inst_50902,inst_50897,inst_50897__$1,inst_50898__$1,state_val_50982,c__43716__auto__,map__50826,map__50826__$1,opts,before_jsload,on_jsload,reload_dependents,map__50827,map__50827__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_50900 = cljs.core.filter.call(null,inst_50899,inst_50897__$1);
var inst_50901 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_50902__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_50901);
var inst_50903 = cljs.core.not_empty.call(null,inst_50902__$1);
var state_50981__$1 = (function (){var statearr_51009 = state_50981;
(statearr_51009[(23)] = inst_50898__$1);

(statearr_51009[(24)] = inst_50902__$1);

(statearr_51009[(25)] = inst_50897__$1);

(statearr_51009[(26)] = inst_50900);

return statearr_51009;
})();
if(cljs.core.truth_(inst_50903)){
var statearr_51010_51087 = state_50981__$1;
(statearr_51010_51087[(1)] = (23));

} else {
var statearr_51011_51088 = state_50981__$1;
(statearr_51011_51088[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50982 === (36))){
var state_50981__$1 = state_50981;
var statearr_51012_51089 = state_50981__$1;
(statearr_51012_51089[(2)] = false);

(statearr_51012_51089[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50982 === (41))){
var inst_50956 = (state_50981[(20)]);
var inst_50960 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_50961 = cljs.core.map.call(null,inst_50960,inst_50956);
var inst_50962 = cljs.core.pr_str.call(null,inst_50961);
var inst_50963 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_50962)].join('');
var inst_50964 = figwheel.client.utils.log.call(null,inst_50963);
var state_50981__$1 = state_50981;
var statearr_51013_51090 = state_50981__$1;
(statearr_51013_51090[(2)] = inst_50964);

(statearr_51013_51090[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50982 === (43))){
var inst_50957 = (state_50981[(21)]);
var inst_50967 = (state_50981[(2)]);
var inst_50968 = cljs.core.not_empty.call(null,inst_50957);
var state_50981__$1 = (function (){var statearr_51014 = state_50981;
(statearr_51014[(27)] = inst_50967);

return statearr_51014;
})();
if(cljs.core.truth_(inst_50968)){
var statearr_51015_51091 = state_50981__$1;
(statearr_51015_51091[(1)] = (44));

} else {
var statearr_51016_51092 = state_50981__$1;
(statearr_51016_51092[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50982 === (29))){
var inst_50898 = (state_50981[(23)]);
var inst_50894 = (state_50981[(19)]);
var inst_50902 = (state_50981[(24)]);
var inst_50897 = (state_50981[(25)]);
var inst_50900 = (state_50981[(26)]);
var inst_50934 = (state_50981[(16)]);
var inst_50930 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_50933 = (function (){var all_files = inst_50894;
var res_SINGLEQUOTE_ = inst_50897;
var res = inst_50898;
var files_not_loaded = inst_50900;
var dependencies_that_loaded = inst_50902;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50898,inst_50894,inst_50902,inst_50897,inst_50900,inst_50934,inst_50930,state_val_50982,c__43716__auto__,map__50826,map__50826__$1,opts,before_jsload,on_jsload,reload_dependents,map__50827,map__50827__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__50932){
var map__51017 = p__50932;
var map__51017__$1 = ((((!((map__51017 == null)))?(((((map__51017.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51017.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51017):map__51017);
var namespace = cljs.core.get.call(null,map__51017__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50898,inst_50894,inst_50902,inst_50897,inst_50900,inst_50934,inst_50930,state_val_50982,c__43716__auto__,map__50826,map__50826__$1,opts,before_jsload,on_jsload,reload_dependents,map__50827,map__50827__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_50934__$1 = cljs.core.group_by.call(null,inst_50933,inst_50900);
var inst_50936 = (inst_50934__$1 == null);
var inst_50937 = cljs.core.not.call(null,inst_50936);
var state_50981__$1 = (function (){var statearr_51019 = state_50981;
(statearr_51019[(16)] = inst_50934__$1);

(statearr_51019[(28)] = inst_50930);

return statearr_51019;
})();
if(inst_50937){
var statearr_51020_51093 = state_50981__$1;
(statearr_51020_51093[(1)] = (32));

} else {
var statearr_51021_51094 = state_50981__$1;
(statearr_51021_51094[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50982 === (44))){
var inst_50957 = (state_50981[(21)]);
var inst_50970 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_50957);
var inst_50971 = cljs.core.pr_str.call(null,inst_50970);
var inst_50972 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_50971)].join('');
var inst_50973 = figwheel.client.utils.log.call(null,inst_50972);
var state_50981__$1 = state_50981;
var statearr_51022_51095 = state_50981__$1;
(statearr_51022_51095[(2)] = inst_50973);

(statearr_51022_51095[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50982 === (6))){
var inst_50875 = (state_50981[(2)]);
var state_50981__$1 = state_50981;
var statearr_51023_51096 = state_50981__$1;
(statearr_51023_51096[(2)] = inst_50875);

(statearr_51023_51096[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50982 === (28))){
var inst_50900 = (state_50981[(26)]);
var inst_50927 = (state_50981[(2)]);
var inst_50928 = cljs.core.not_empty.call(null,inst_50900);
var state_50981__$1 = (function (){var statearr_51024 = state_50981;
(statearr_51024[(29)] = inst_50927);

return statearr_51024;
})();
if(cljs.core.truth_(inst_50928)){
var statearr_51025_51097 = state_50981__$1;
(statearr_51025_51097[(1)] = (29));

} else {
var statearr_51026_51098 = state_50981__$1;
(statearr_51026_51098[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50982 === (25))){
var inst_50898 = (state_50981[(23)]);
var inst_50914 = (state_50981[(2)]);
var inst_50915 = cljs.core.not_empty.call(null,inst_50898);
var state_50981__$1 = (function (){var statearr_51027 = state_50981;
(statearr_51027[(30)] = inst_50914);

return statearr_51027;
})();
if(cljs.core.truth_(inst_50915)){
var statearr_51028_51099 = state_50981__$1;
(statearr_51028_51099[(1)] = (26));

} else {
var statearr_51029_51100 = state_50981__$1;
(statearr_51029_51100[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50982 === (34))){
var inst_50950 = (state_50981[(2)]);
var state_50981__$1 = state_50981;
if(cljs.core.truth_(inst_50950)){
var statearr_51030_51101 = state_50981__$1;
(statearr_51030_51101[(1)] = (38));

} else {
var statearr_51031_51102 = state_50981__$1;
(statearr_51031_51102[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50982 === (17))){
var state_50981__$1 = state_50981;
var statearr_51032_51103 = state_50981__$1;
(statearr_51032_51103[(2)] = recompile_dependents);

(statearr_51032_51103[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50982 === (3))){
var state_50981__$1 = state_50981;
var statearr_51033_51104 = state_50981__$1;
(statearr_51033_51104[(2)] = null);

(statearr_51033_51104[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50982 === (12))){
var inst_50871 = (state_50981[(2)]);
var state_50981__$1 = state_50981;
var statearr_51034_51105 = state_50981__$1;
(statearr_51034_51105[(2)] = inst_50871);

(statearr_51034_51105[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50982 === (2))){
var inst_50833 = (state_50981[(13)]);
var inst_50840 = cljs.core.seq.call(null,inst_50833);
var inst_50841 = inst_50840;
var inst_50842 = null;
var inst_50843 = (0);
var inst_50844 = (0);
var state_50981__$1 = (function (){var statearr_51035 = state_50981;
(statearr_51035[(7)] = inst_50844);

(statearr_51035[(8)] = inst_50843);

(statearr_51035[(9)] = inst_50842);

(statearr_51035[(10)] = inst_50841);

return statearr_51035;
})();
var statearr_51036_51106 = state_50981__$1;
(statearr_51036_51106[(2)] = null);

(statearr_51036_51106[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50982 === (23))){
var inst_50898 = (state_50981[(23)]);
var inst_50894 = (state_50981[(19)]);
var inst_50902 = (state_50981[(24)]);
var inst_50897 = (state_50981[(25)]);
var inst_50900 = (state_50981[(26)]);
var inst_50905 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_50907 = (function (){var all_files = inst_50894;
var res_SINGLEQUOTE_ = inst_50897;
var res = inst_50898;
var files_not_loaded = inst_50900;
var dependencies_that_loaded = inst_50902;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50898,inst_50894,inst_50902,inst_50897,inst_50900,inst_50905,state_val_50982,c__43716__auto__,map__50826,map__50826__$1,opts,before_jsload,on_jsload,reload_dependents,map__50827,map__50827__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__50906){
var map__51037 = p__50906;
var map__51037__$1 = ((((!((map__51037 == null)))?(((((map__51037.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51037.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51037):map__51037);
var request_url = cljs.core.get.call(null,map__51037__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50898,inst_50894,inst_50902,inst_50897,inst_50900,inst_50905,state_val_50982,c__43716__auto__,map__50826,map__50826__$1,opts,before_jsload,on_jsload,reload_dependents,map__50827,map__50827__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_50908 = cljs.core.reverse.call(null,inst_50902);
var inst_50909 = cljs.core.map.call(null,inst_50907,inst_50908);
var inst_50910 = cljs.core.pr_str.call(null,inst_50909);
var inst_50911 = figwheel.client.utils.log.call(null,inst_50910);
var state_50981__$1 = (function (){var statearr_51039 = state_50981;
(statearr_51039[(31)] = inst_50905);

return statearr_51039;
})();
var statearr_51040_51107 = state_50981__$1;
(statearr_51040_51107[(2)] = inst_50911);

(statearr_51040_51107[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50982 === (35))){
var state_50981__$1 = state_50981;
var statearr_51041_51108 = state_50981__$1;
(statearr_51041_51108[(2)] = true);

(statearr_51041_51108[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50982 === (19))){
var inst_50884 = (state_50981[(12)]);
var inst_50890 = figwheel.client.file_reloading.expand_files.call(null,inst_50884);
var state_50981__$1 = state_50981;
var statearr_51042_51109 = state_50981__$1;
(statearr_51042_51109[(2)] = inst_50890);

(statearr_51042_51109[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50982 === (11))){
var state_50981__$1 = state_50981;
var statearr_51043_51110 = state_50981__$1;
(statearr_51043_51110[(2)] = null);

(statearr_51043_51110[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50982 === (9))){
var inst_50873 = (state_50981[(2)]);
var state_50981__$1 = state_50981;
var statearr_51044_51111 = state_50981__$1;
(statearr_51044_51111[(2)] = inst_50873);

(statearr_51044_51111[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50982 === (5))){
var inst_50844 = (state_50981[(7)]);
var inst_50843 = (state_50981[(8)]);
var inst_50846 = (inst_50844 < inst_50843);
var inst_50847 = inst_50846;
var state_50981__$1 = state_50981;
if(cljs.core.truth_(inst_50847)){
var statearr_51045_51112 = state_50981__$1;
(statearr_51045_51112[(1)] = (7));

} else {
var statearr_51046_51113 = state_50981__$1;
(statearr_51046_51113[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50982 === (14))){
var inst_50854 = (state_50981[(22)]);
var inst_50863 = cljs.core.first.call(null,inst_50854);
var inst_50864 = figwheel.client.file_reloading.eval_body.call(null,inst_50863,opts);
var inst_50865 = cljs.core.next.call(null,inst_50854);
var inst_50841 = inst_50865;
var inst_50842 = null;
var inst_50843 = (0);
var inst_50844 = (0);
var state_50981__$1 = (function (){var statearr_51047 = state_50981;
(statearr_51047[(7)] = inst_50844);

(statearr_51047[(8)] = inst_50843);

(statearr_51047[(9)] = inst_50842);

(statearr_51047[(10)] = inst_50841);

(statearr_51047[(32)] = inst_50864);

return statearr_51047;
})();
var statearr_51048_51114 = state_50981__$1;
(statearr_51048_51114[(2)] = null);

(statearr_51048_51114[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50982 === (45))){
var state_50981__$1 = state_50981;
var statearr_51049_51115 = state_50981__$1;
(statearr_51049_51115[(2)] = null);

(statearr_51049_51115[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50982 === (26))){
var inst_50898 = (state_50981[(23)]);
var inst_50894 = (state_50981[(19)]);
var inst_50902 = (state_50981[(24)]);
var inst_50897 = (state_50981[(25)]);
var inst_50900 = (state_50981[(26)]);
var inst_50917 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_50919 = (function (){var all_files = inst_50894;
var res_SINGLEQUOTE_ = inst_50897;
var res = inst_50898;
var files_not_loaded = inst_50900;
var dependencies_that_loaded = inst_50902;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50898,inst_50894,inst_50902,inst_50897,inst_50900,inst_50917,state_val_50982,c__43716__auto__,map__50826,map__50826__$1,opts,before_jsload,on_jsload,reload_dependents,map__50827,map__50827__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__50918){
var map__51050 = p__50918;
var map__51050__$1 = ((((!((map__51050 == null)))?(((((map__51050.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51050.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51050):map__51050);
var namespace = cljs.core.get.call(null,map__51050__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__51050__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50898,inst_50894,inst_50902,inst_50897,inst_50900,inst_50917,state_val_50982,c__43716__auto__,map__50826,map__50826__$1,opts,before_jsload,on_jsload,reload_dependents,map__50827,map__50827__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_50920 = cljs.core.map.call(null,inst_50919,inst_50898);
var inst_50921 = cljs.core.pr_str.call(null,inst_50920);
var inst_50922 = figwheel.client.utils.log.call(null,inst_50921);
var inst_50923 = (function (){var all_files = inst_50894;
var res_SINGLEQUOTE_ = inst_50897;
var res = inst_50898;
var files_not_loaded = inst_50900;
var dependencies_that_loaded = inst_50902;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50898,inst_50894,inst_50902,inst_50897,inst_50900,inst_50917,inst_50919,inst_50920,inst_50921,inst_50922,state_val_50982,c__43716__auto__,map__50826,map__50826__$1,opts,before_jsload,on_jsload,reload_dependents,map__50827,map__50827__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50898,inst_50894,inst_50902,inst_50897,inst_50900,inst_50917,inst_50919,inst_50920,inst_50921,inst_50922,state_val_50982,c__43716__auto__,map__50826,map__50826__$1,opts,before_jsload,on_jsload,reload_dependents,map__50827,map__50827__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_50924 = setTimeout(inst_50923,(10));
var state_50981__$1 = (function (){var statearr_51052 = state_50981;
(statearr_51052[(33)] = inst_50917);

(statearr_51052[(34)] = inst_50922);

return statearr_51052;
})();
var statearr_51053_51116 = state_50981__$1;
(statearr_51053_51116[(2)] = inst_50924);

(statearr_51053_51116[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50982 === (16))){
var state_50981__$1 = state_50981;
var statearr_51054_51117 = state_50981__$1;
(statearr_51054_51117[(2)] = reload_dependents);

(statearr_51054_51117[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50982 === (38))){
var inst_50934 = (state_50981[(16)]);
var inst_50952 = cljs.core.apply.call(null,cljs.core.hash_map,inst_50934);
var state_50981__$1 = state_50981;
var statearr_51055_51118 = state_50981__$1;
(statearr_51055_51118[(2)] = inst_50952);

(statearr_51055_51118[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50982 === (30))){
var state_50981__$1 = state_50981;
var statearr_51056_51119 = state_50981__$1;
(statearr_51056_51119[(2)] = null);

(statearr_51056_51119[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50982 === (10))){
var inst_50854 = (state_50981[(22)]);
var inst_50856 = cljs.core.chunked_seq_QMARK_.call(null,inst_50854);
var state_50981__$1 = state_50981;
if(inst_50856){
var statearr_51057_51120 = state_50981__$1;
(statearr_51057_51120[(1)] = (13));

} else {
var statearr_51058_51121 = state_50981__$1;
(statearr_51058_51121[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50982 === (18))){
var inst_50888 = (state_50981[(2)]);
var state_50981__$1 = state_50981;
if(cljs.core.truth_(inst_50888)){
var statearr_51059_51122 = state_50981__$1;
(statearr_51059_51122[(1)] = (19));

} else {
var statearr_51060_51123 = state_50981__$1;
(statearr_51060_51123[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50982 === (42))){
var state_50981__$1 = state_50981;
var statearr_51061_51124 = state_50981__$1;
(statearr_51061_51124[(2)] = null);

(statearr_51061_51124[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50982 === (37))){
var inst_50947 = (state_50981[(2)]);
var state_50981__$1 = state_50981;
var statearr_51062_51125 = state_50981__$1;
(statearr_51062_51125[(2)] = inst_50947);

(statearr_51062_51125[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50982 === (8))){
var inst_50854 = (state_50981[(22)]);
var inst_50841 = (state_50981[(10)]);
var inst_50854__$1 = cljs.core.seq.call(null,inst_50841);
var state_50981__$1 = (function (){var statearr_51063 = state_50981;
(statearr_51063[(22)] = inst_50854__$1);

return statearr_51063;
})();
if(inst_50854__$1){
var statearr_51064_51126 = state_50981__$1;
(statearr_51064_51126[(1)] = (10));

} else {
var statearr_51065_51127 = state_50981__$1;
(statearr_51065_51127[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__43716__auto__,map__50826,map__50826__$1,opts,before_jsload,on_jsload,reload_dependents,map__50827,map__50827__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__43559__auto__,c__43716__auto__,map__50826,map__50826__$1,opts,before_jsload,on_jsload,reload_dependents,map__50827,map__50827__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__43560__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__43560__auto____0 = (function (){
var statearr_51066 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51066[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__43560__auto__);

(statearr_51066[(1)] = (1));

return statearr_51066;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__43560__auto____1 = (function (state_50981){
while(true){
var ret_value__43561__auto__ = (function (){try{while(true){
var result__43562__auto__ = switch__43559__auto__.call(null,state_50981);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43562__auto__;
}
break;
}
}catch (e51067){if((e51067 instanceof Object)){
var ex__43563__auto__ = e51067;
var statearr_51068_51128 = state_50981;
(statearr_51068_51128[(5)] = ex__43563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50981);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51067;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51129 = state_50981;
state_50981 = G__51129;
continue;
} else {
return ret_value__43561__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__43560__auto__ = function(state_50981){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__43560__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__43560__auto____1.call(this,state_50981);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__43560__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__43560__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__43560__auto__;
})()
;})(switch__43559__auto__,c__43716__auto__,map__50826,map__50826__$1,opts,before_jsload,on_jsload,reload_dependents,map__50827,map__50827__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__43718__auto__ = (function (){var statearr_51069 = f__43717__auto__.call(null);
(statearr_51069[(6)] = c__43716__auto__);

return statearr_51069;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43718__auto__);
});})(c__43716__auto__,map__50826,map__50826__$1,opts,before_jsload,on_jsload,reload_dependents,map__50827,map__50827__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__43716__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__51132,link){
var map__51133 = p__51132;
var map__51133__$1 = ((((!((map__51133 == null)))?(((((map__51133.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51133.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51133):map__51133);
var file = cljs.core.get.call(null,map__51133__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__51133,map__51133__$1,file){
return (function (p1__51130_SHARP_,p2__51131_SHARP_){
if(cljs.core._EQ_.call(null,p1__51130_SHARP_,p2__51131_SHARP_)){
return p1__51130_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__51133,map__51133__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__51136){
var map__51137 = p__51136;
var map__51137__$1 = ((((!((map__51137 == null)))?(((((map__51137.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51137.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51137):map__51137);
var match_length = cljs.core.get.call(null,map__51137__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__51137__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__51135_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__51135_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5457__auto__)){
var res = temp__5457__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__51139_SHARP_,p2__51140_SHARP_){
return cljs.core.assoc.call(null,p1__51139_SHARP_,cljs.core.get.call(null,p2__51140_SHARP_,key),p2__51140_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5455__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5455__auto__)){
var link = temp__5455__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5455__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5455__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_51141 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_51141);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_51141);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__51142,p__51143){
var map__51144 = p__51142;
var map__51144__$1 = ((((!((map__51144 == null)))?(((((map__51144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51144.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51144):map__51144);
var on_cssload = cljs.core.get.call(null,map__51144__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__51145 = p__51143;
var map__51145__$1 = ((((!((map__51145 == null)))?(((((map__51145.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51145.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51145):map__51145);
var files_msg = map__51145__$1;
var files = cljs.core.get.call(null,map__51145__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5457__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5457__auto__)){
var f_datas = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1525299195387
