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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__63958_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__63958_SHARP_));
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
var seq__63959 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__63960 = null;
var count__63961 = (0);
var i__63962 = (0);
while(true){
if((i__63962 < count__63961)){
var n = cljs.core._nth.call(null,chunk__63960,i__63962);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__63963 = seq__63959;
var G__63964 = chunk__63960;
var G__63965 = count__63961;
var G__63966 = (i__63962 + (1));
seq__63959 = G__63963;
chunk__63960 = G__63964;
count__63961 = G__63965;
i__63962 = G__63966;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__63959);
if(temp__5457__auto__){
var seq__63959__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__63959__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__63959__$1);
var G__63967 = cljs.core.chunk_rest.call(null,seq__63959__$1);
var G__63968 = c__4319__auto__;
var G__63969 = cljs.core.count.call(null,c__4319__auto__);
var G__63970 = (0);
seq__63959 = G__63967;
chunk__63960 = G__63968;
count__63961 = G__63969;
i__63962 = G__63970;
continue;
} else {
var n = cljs.core.first.call(null,seq__63959__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__63971 = cljs.core.next.call(null,seq__63959__$1);
var G__63972 = null;
var G__63973 = (0);
var G__63974 = (0);
seq__63959 = G__63971;
chunk__63960 = G__63972;
count__63961 = G__63973;
i__63962 = G__63974;
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
return cljs.core.some.call(null,(function (p__63975){
var vec__63976 = p__63975;
var _ = cljs.core.nth.call(null,vec__63976,(0),null);
var v = cljs.core.nth.call(null,vec__63976,(1),null);
var and__3911__auto__ = v;
if(cljs.core.truth_(and__3911__auto__)){
return v.call(null,dep);
} else {
return and__3911__auto__;
}
}),cljs.core.filter.call(null,(function (p__63979){
var vec__63980 = p__63979;
var k = cljs.core.nth.call(null,vec__63980,(0),null);
var v = cljs.core.nth.call(null,vec__63980,(1),null);
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

var seq__63992_64000 = cljs.core.seq.call(null,deps);
var chunk__63993_64001 = null;
var count__63994_64002 = (0);
var i__63995_64003 = (0);
while(true){
if((i__63995_64003 < count__63994_64002)){
var dep_64004 = cljs.core._nth.call(null,chunk__63993_64001,i__63995_64003);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_64004;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_64004));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_64004,(depth + (1)),state);
} else {
}


var G__64005 = seq__63992_64000;
var G__64006 = chunk__63993_64001;
var G__64007 = count__63994_64002;
var G__64008 = (i__63995_64003 + (1));
seq__63992_64000 = G__64005;
chunk__63993_64001 = G__64006;
count__63994_64002 = G__64007;
i__63995_64003 = G__64008;
continue;
} else {
var temp__5457__auto___64009 = cljs.core.seq.call(null,seq__63992_64000);
if(temp__5457__auto___64009){
var seq__63992_64010__$1 = temp__5457__auto___64009;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__63992_64010__$1)){
var c__4319__auto___64011 = cljs.core.chunk_first.call(null,seq__63992_64010__$1);
var G__64012 = cljs.core.chunk_rest.call(null,seq__63992_64010__$1);
var G__64013 = c__4319__auto___64011;
var G__64014 = cljs.core.count.call(null,c__4319__auto___64011);
var G__64015 = (0);
seq__63992_64000 = G__64012;
chunk__63993_64001 = G__64013;
count__63994_64002 = G__64014;
i__63995_64003 = G__64015;
continue;
} else {
var dep_64016 = cljs.core.first.call(null,seq__63992_64010__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_64016;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_64016));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_64016,(depth + (1)),state);
} else {
}


var G__64017 = cljs.core.next.call(null,seq__63992_64010__$1);
var G__64018 = null;
var G__64019 = (0);
var G__64020 = (0);
seq__63992_64000 = G__64017;
chunk__63993_64001 = G__64018;
count__63994_64002 = G__64019;
i__63995_64003 = G__64020;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__63996){
var vec__63997 = p__63996;
var seq__63998 = cljs.core.seq.call(null,vec__63997);
var first__63999 = cljs.core.first.call(null,seq__63998);
var seq__63998__$1 = cljs.core.next.call(null,seq__63998);
var x = first__63999;
var xs = seq__63998__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__63997,seq__63998,first__63999,seq__63998__$1,x,xs,get_deps__$1){
return (function (p1__63983_SHARP_){
return clojure.set.difference.call(null,p1__63983_SHARP_,x);
});})(vec__63997,seq__63998,first__63999,seq__63998__$1,x,xs,get_deps__$1))
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
var seq__64021 = cljs.core.seq.call(null,provides);
var chunk__64022 = null;
var count__64023 = (0);
var i__64024 = (0);
while(true){
if((i__64024 < count__64023)){
var prov = cljs.core._nth.call(null,chunk__64022,i__64024);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__64025_64033 = cljs.core.seq.call(null,requires);
var chunk__64026_64034 = null;
var count__64027_64035 = (0);
var i__64028_64036 = (0);
while(true){
if((i__64028_64036 < count__64027_64035)){
var req_64037 = cljs.core._nth.call(null,chunk__64026_64034,i__64028_64036);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_64037,prov);


var G__64038 = seq__64025_64033;
var G__64039 = chunk__64026_64034;
var G__64040 = count__64027_64035;
var G__64041 = (i__64028_64036 + (1));
seq__64025_64033 = G__64038;
chunk__64026_64034 = G__64039;
count__64027_64035 = G__64040;
i__64028_64036 = G__64041;
continue;
} else {
var temp__5457__auto___64042 = cljs.core.seq.call(null,seq__64025_64033);
if(temp__5457__auto___64042){
var seq__64025_64043__$1 = temp__5457__auto___64042;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__64025_64043__$1)){
var c__4319__auto___64044 = cljs.core.chunk_first.call(null,seq__64025_64043__$1);
var G__64045 = cljs.core.chunk_rest.call(null,seq__64025_64043__$1);
var G__64046 = c__4319__auto___64044;
var G__64047 = cljs.core.count.call(null,c__4319__auto___64044);
var G__64048 = (0);
seq__64025_64033 = G__64045;
chunk__64026_64034 = G__64046;
count__64027_64035 = G__64047;
i__64028_64036 = G__64048;
continue;
} else {
var req_64049 = cljs.core.first.call(null,seq__64025_64043__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_64049,prov);


var G__64050 = cljs.core.next.call(null,seq__64025_64043__$1);
var G__64051 = null;
var G__64052 = (0);
var G__64053 = (0);
seq__64025_64033 = G__64050;
chunk__64026_64034 = G__64051;
count__64027_64035 = G__64052;
i__64028_64036 = G__64053;
continue;
}
} else {
}
}
break;
}


var G__64054 = seq__64021;
var G__64055 = chunk__64022;
var G__64056 = count__64023;
var G__64057 = (i__64024 + (1));
seq__64021 = G__64054;
chunk__64022 = G__64055;
count__64023 = G__64056;
i__64024 = G__64057;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__64021);
if(temp__5457__auto__){
var seq__64021__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__64021__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__64021__$1);
var G__64058 = cljs.core.chunk_rest.call(null,seq__64021__$1);
var G__64059 = c__4319__auto__;
var G__64060 = cljs.core.count.call(null,c__4319__auto__);
var G__64061 = (0);
seq__64021 = G__64058;
chunk__64022 = G__64059;
count__64023 = G__64060;
i__64024 = G__64061;
continue;
} else {
var prov = cljs.core.first.call(null,seq__64021__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__64029_64062 = cljs.core.seq.call(null,requires);
var chunk__64030_64063 = null;
var count__64031_64064 = (0);
var i__64032_64065 = (0);
while(true){
if((i__64032_64065 < count__64031_64064)){
var req_64066 = cljs.core._nth.call(null,chunk__64030_64063,i__64032_64065);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_64066,prov);


var G__64067 = seq__64029_64062;
var G__64068 = chunk__64030_64063;
var G__64069 = count__64031_64064;
var G__64070 = (i__64032_64065 + (1));
seq__64029_64062 = G__64067;
chunk__64030_64063 = G__64068;
count__64031_64064 = G__64069;
i__64032_64065 = G__64070;
continue;
} else {
var temp__5457__auto___64071__$1 = cljs.core.seq.call(null,seq__64029_64062);
if(temp__5457__auto___64071__$1){
var seq__64029_64072__$1 = temp__5457__auto___64071__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__64029_64072__$1)){
var c__4319__auto___64073 = cljs.core.chunk_first.call(null,seq__64029_64072__$1);
var G__64074 = cljs.core.chunk_rest.call(null,seq__64029_64072__$1);
var G__64075 = c__4319__auto___64073;
var G__64076 = cljs.core.count.call(null,c__4319__auto___64073);
var G__64077 = (0);
seq__64029_64062 = G__64074;
chunk__64030_64063 = G__64075;
count__64031_64064 = G__64076;
i__64032_64065 = G__64077;
continue;
} else {
var req_64078 = cljs.core.first.call(null,seq__64029_64072__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_64078,prov);


var G__64079 = cljs.core.next.call(null,seq__64029_64072__$1);
var G__64080 = null;
var G__64081 = (0);
var G__64082 = (0);
seq__64029_64062 = G__64079;
chunk__64030_64063 = G__64080;
count__64031_64064 = G__64081;
i__64032_64065 = G__64082;
continue;
}
} else {
}
}
break;
}


var G__64083 = cljs.core.next.call(null,seq__64021__$1);
var G__64084 = null;
var G__64085 = (0);
var G__64086 = (0);
seq__64021 = G__64083;
chunk__64022 = G__64084;
count__64023 = G__64085;
i__64024 = G__64086;
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
var seq__64087_64091 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__64088_64092 = null;
var count__64089_64093 = (0);
var i__64090_64094 = (0);
while(true){
if((i__64090_64094 < count__64089_64093)){
var ns_64095 = cljs.core._nth.call(null,chunk__64088_64092,i__64090_64094);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_64095);


var G__64096 = seq__64087_64091;
var G__64097 = chunk__64088_64092;
var G__64098 = count__64089_64093;
var G__64099 = (i__64090_64094 + (1));
seq__64087_64091 = G__64096;
chunk__64088_64092 = G__64097;
count__64089_64093 = G__64098;
i__64090_64094 = G__64099;
continue;
} else {
var temp__5457__auto___64100 = cljs.core.seq.call(null,seq__64087_64091);
if(temp__5457__auto___64100){
var seq__64087_64101__$1 = temp__5457__auto___64100;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__64087_64101__$1)){
var c__4319__auto___64102 = cljs.core.chunk_first.call(null,seq__64087_64101__$1);
var G__64103 = cljs.core.chunk_rest.call(null,seq__64087_64101__$1);
var G__64104 = c__4319__auto___64102;
var G__64105 = cljs.core.count.call(null,c__4319__auto___64102);
var G__64106 = (0);
seq__64087_64091 = G__64103;
chunk__64088_64092 = G__64104;
count__64089_64093 = G__64105;
i__64090_64094 = G__64106;
continue;
} else {
var ns_64107 = cljs.core.first.call(null,seq__64087_64101__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_64107);


var G__64108 = cljs.core.next.call(null,seq__64087_64101__$1);
var G__64109 = null;
var G__64110 = (0);
var G__64111 = (0);
seq__64087_64091 = G__64108;
chunk__64088_64092 = G__64109;
count__64089_64093 = G__64110;
i__64090_64094 = G__64111;
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
var G__64112__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__64112 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__64113__i = 0, G__64113__a = new Array(arguments.length -  0);
while (G__64113__i < G__64113__a.length) {G__64113__a[G__64113__i] = arguments[G__64113__i + 0]; ++G__64113__i;}
  args = new cljs.core.IndexedSeq(G__64113__a,0,null);
} 
return G__64112__delegate.call(this,args);};
G__64112.cljs$lang$maxFixedArity = 0;
G__64112.cljs$lang$applyTo = (function (arglist__64114){
var args = cljs.core.seq(arglist__64114);
return G__64112__delegate(args);
});
G__64112.cljs$core$IFn$_invoke$arity$variadic = G__64112__delegate;
return G__64112;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__64115_SHARP_,p2__64116_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__64115_SHARP_)].join('')),p2__64116_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__64117_SHARP_,p2__64118_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__64117_SHARP_)].join(''),p2__64118_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__64119 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__64119.addCallback(((function (G__64119){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__64119))
);

G__64119.addErrback(((function (G__64119){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__64119))
);

return G__64119;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e64120){if((e64120 instanceof Error)){
var e = e64120;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e64120;

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
}catch (e64121){if((e64121 instanceof Error)){
var e = e64121;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e64121;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__64122 = cljs.core._EQ_;
var expr__64123 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__64122.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__64123))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__64122.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__64123))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__64122.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__64123))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__64122,expr__64123){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__64122,expr__64123))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__64125,callback){
var map__64126 = p__64125;
var map__64126__$1 = ((((!((map__64126 == null)))?(((((map__64126.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64126.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64126):map__64126);
var file_msg = map__64126__$1;
var request_url = cljs.core.get.call(null,map__64126__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3922__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__64126,map__64126__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__64126,map__64126__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__27974__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27974__auto__){
return (function (){
var f__27975__auto__ = (function (){var switch__27884__auto__ = ((function (c__27974__auto__){
return (function (state_64164){
var state_val_64165 = (state_64164[(1)]);
if((state_val_64165 === (7))){
var inst_64160 = (state_64164[(2)]);
var state_64164__$1 = state_64164;
var statearr_64166_64192 = state_64164__$1;
(statearr_64166_64192[(2)] = inst_64160);

(statearr_64166_64192[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64165 === (1))){
var state_64164__$1 = state_64164;
var statearr_64167_64193 = state_64164__$1;
(statearr_64167_64193[(2)] = null);

(statearr_64167_64193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64165 === (4))){
var inst_64130 = (state_64164[(7)]);
var inst_64130__$1 = (state_64164[(2)]);
var state_64164__$1 = (function (){var statearr_64168 = state_64164;
(statearr_64168[(7)] = inst_64130__$1);

return statearr_64168;
})();
if(cljs.core.truth_(inst_64130__$1)){
var statearr_64169_64194 = state_64164__$1;
(statearr_64169_64194[(1)] = (5));

} else {
var statearr_64170_64195 = state_64164__$1;
(statearr_64170_64195[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64165 === (15))){
var inst_64145 = (state_64164[(8)]);
var inst_64143 = (state_64164[(9)]);
var inst_64147 = inst_64145.call(null,inst_64143);
var state_64164__$1 = state_64164;
var statearr_64171_64196 = state_64164__$1;
(statearr_64171_64196[(2)] = inst_64147);

(statearr_64171_64196[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64165 === (13))){
var inst_64154 = (state_64164[(2)]);
var state_64164__$1 = state_64164;
var statearr_64172_64197 = state_64164__$1;
(statearr_64172_64197[(2)] = inst_64154);

(statearr_64172_64197[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64165 === (6))){
var state_64164__$1 = state_64164;
var statearr_64173_64198 = state_64164__$1;
(statearr_64173_64198[(2)] = null);

(statearr_64173_64198[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64165 === (17))){
var inst_64151 = (state_64164[(2)]);
var state_64164__$1 = state_64164;
var statearr_64174_64199 = state_64164__$1;
(statearr_64174_64199[(2)] = inst_64151);

(statearr_64174_64199[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64165 === (3))){
var inst_64162 = (state_64164[(2)]);
var state_64164__$1 = state_64164;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64164__$1,inst_64162);
} else {
if((state_val_64165 === (12))){
var state_64164__$1 = state_64164;
var statearr_64175_64200 = state_64164__$1;
(statearr_64175_64200[(2)] = null);

(statearr_64175_64200[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64165 === (2))){
var state_64164__$1 = state_64164;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64164__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_64165 === (11))){
var inst_64135 = (state_64164[(10)]);
var inst_64141 = figwheel.client.file_reloading.blocking_load.call(null,inst_64135);
var state_64164__$1 = state_64164;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64164__$1,(14),inst_64141);
} else {
if((state_val_64165 === (9))){
var inst_64135 = (state_64164[(10)]);
var state_64164__$1 = state_64164;
if(cljs.core.truth_(inst_64135)){
var statearr_64176_64201 = state_64164__$1;
(statearr_64176_64201[(1)] = (11));

} else {
var statearr_64177_64202 = state_64164__$1;
(statearr_64177_64202[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64165 === (5))){
var inst_64130 = (state_64164[(7)]);
var inst_64136 = (state_64164[(11)]);
var inst_64135 = cljs.core.nth.call(null,inst_64130,(0),null);
var inst_64136__$1 = cljs.core.nth.call(null,inst_64130,(1),null);
var state_64164__$1 = (function (){var statearr_64178 = state_64164;
(statearr_64178[(11)] = inst_64136__$1);

(statearr_64178[(10)] = inst_64135);

return statearr_64178;
})();
if(cljs.core.truth_(inst_64136__$1)){
var statearr_64179_64203 = state_64164__$1;
(statearr_64179_64203[(1)] = (8));

} else {
var statearr_64180_64204 = state_64164__$1;
(statearr_64180_64204[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64165 === (14))){
var inst_64145 = (state_64164[(8)]);
var inst_64135 = (state_64164[(10)]);
var inst_64143 = (state_64164[(2)]);
var inst_64144 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_64145__$1 = cljs.core.get.call(null,inst_64144,inst_64135);
var state_64164__$1 = (function (){var statearr_64181 = state_64164;
(statearr_64181[(8)] = inst_64145__$1);

(statearr_64181[(9)] = inst_64143);

return statearr_64181;
})();
if(cljs.core.truth_(inst_64145__$1)){
var statearr_64182_64205 = state_64164__$1;
(statearr_64182_64205[(1)] = (15));

} else {
var statearr_64183_64206 = state_64164__$1;
(statearr_64183_64206[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64165 === (16))){
var inst_64143 = (state_64164[(9)]);
var inst_64149 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_64143);
var state_64164__$1 = state_64164;
var statearr_64184_64207 = state_64164__$1;
(statearr_64184_64207[(2)] = inst_64149);

(statearr_64184_64207[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64165 === (10))){
var inst_64156 = (state_64164[(2)]);
var state_64164__$1 = (function (){var statearr_64185 = state_64164;
(statearr_64185[(12)] = inst_64156);

return statearr_64185;
})();
var statearr_64186_64208 = state_64164__$1;
(statearr_64186_64208[(2)] = null);

(statearr_64186_64208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64165 === (8))){
var inst_64136 = (state_64164[(11)]);
var inst_64138 = eval(inst_64136);
var state_64164__$1 = state_64164;
var statearr_64187_64209 = state_64164__$1;
(statearr_64187_64209[(2)] = inst_64138);

(statearr_64187_64209[(1)] = (10));


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
});})(c__27974__auto__))
;
return ((function (switch__27884__auto__,c__27974__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__27885__auto__ = null;
var figwheel$client$file_reloading$state_machine__27885__auto____0 = (function (){
var statearr_64188 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64188[(0)] = figwheel$client$file_reloading$state_machine__27885__auto__);

(statearr_64188[(1)] = (1));

return statearr_64188;
});
var figwheel$client$file_reloading$state_machine__27885__auto____1 = (function (state_64164){
while(true){
var ret_value__27886__auto__ = (function (){try{while(true){
var result__27887__auto__ = switch__27884__auto__.call(null,state_64164);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27887__auto__;
}
break;
}
}catch (e64189){if((e64189 instanceof Object)){
var ex__27888__auto__ = e64189;
var statearr_64190_64210 = state_64164;
(statearr_64190_64210[(5)] = ex__27888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64164);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64189;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64211 = state_64164;
state_64164 = G__64211;
continue;
} else {
return ret_value__27886__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__27885__auto__ = function(state_64164){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__27885__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__27885__auto____1.call(this,state_64164);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__27885__auto____0;
figwheel$client$file_reloading$state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__27885__auto____1;
return figwheel$client$file_reloading$state_machine__27885__auto__;
})()
;})(switch__27884__auto__,c__27974__auto__))
})();
var state__27976__auto__ = (function (){var statearr_64191 = f__27975__auto__.call(null);
(statearr_64191[(6)] = c__27974__auto__);

return statearr_64191;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27976__auto__);
});})(c__27974__auto__))
);

return c__27974__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__64213 = arguments.length;
switch (G__64213) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__64215,callback){
var map__64216 = p__64215;
var map__64216__$1 = ((((!((map__64216 == null)))?(((((map__64216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64216.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64216):map__64216);
var file_msg = map__64216__$1;
var namespace = cljs.core.get.call(null,map__64216__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__64216,map__64216__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__64216,map__64216__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__64218){
var map__64219 = p__64218;
var map__64219__$1 = ((((!((map__64219 == null)))?(((((map__64219.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64219.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64219):map__64219);
var file_msg = map__64219__$1;
var namespace = cljs.core.get.call(null,map__64219__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__64221){
var map__64222 = p__64221;
var map__64222__$1 = ((((!((map__64222 == null)))?(((((map__64222.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64222.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64222):map__64222);
var file_msg = map__64222__$1;
var namespace = cljs.core.get.call(null,map__64222__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__64224,callback){
var map__64225 = p__64224;
var map__64225__$1 = ((((!((map__64225 == null)))?(((((map__64225.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64225.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64225):map__64225);
var file_msg = map__64225__$1;
var request_url = cljs.core.get.call(null,map__64225__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__64225__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__27974__auto___64275 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27974__auto___64275,out){
return (function (){
var f__27975__auto__ = (function (){var switch__27884__auto__ = ((function (c__27974__auto___64275,out){
return (function (state_64260){
var state_val_64261 = (state_64260[(1)]);
if((state_val_64261 === (1))){
var inst_64234 = cljs.core.seq.call(null,files);
var inst_64235 = cljs.core.first.call(null,inst_64234);
var inst_64236 = cljs.core.next.call(null,inst_64234);
var inst_64237 = files;
var state_64260__$1 = (function (){var statearr_64262 = state_64260;
(statearr_64262[(7)] = inst_64237);

(statearr_64262[(8)] = inst_64236);

(statearr_64262[(9)] = inst_64235);

return statearr_64262;
})();
var statearr_64263_64276 = state_64260__$1;
(statearr_64263_64276[(2)] = null);

(statearr_64263_64276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64261 === (2))){
var inst_64237 = (state_64260[(7)]);
var inst_64243 = (state_64260[(10)]);
var inst_64242 = cljs.core.seq.call(null,inst_64237);
var inst_64243__$1 = cljs.core.first.call(null,inst_64242);
var inst_64244 = cljs.core.next.call(null,inst_64242);
var inst_64245 = (inst_64243__$1 == null);
var inst_64246 = cljs.core.not.call(null,inst_64245);
var state_64260__$1 = (function (){var statearr_64264 = state_64260;
(statearr_64264[(10)] = inst_64243__$1);

(statearr_64264[(11)] = inst_64244);

return statearr_64264;
})();
if(inst_64246){
var statearr_64265_64277 = state_64260__$1;
(statearr_64265_64277[(1)] = (4));

} else {
var statearr_64266_64278 = state_64260__$1;
(statearr_64266_64278[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64261 === (3))){
var inst_64258 = (state_64260[(2)]);
var state_64260__$1 = state_64260;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64260__$1,inst_64258);
} else {
if((state_val_64261 === (4))){
var inst_64243 = (state_64260[(10)]);
var inst_64248 = figwheel.client.file_reloading.reload_js_file.call(null,inst_64243);
var state_64260__$1 = state_64260;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64260__$1,(7),inst_64248);
} else {
if((state_val_64261 === (5))){
var inst_64254 = cljs.core.async.close_BANG_.call(null,out);
var state_64260__$1 = state_64260;
var statearr_64267_64279 = state_64260__$1;
(statearr_64267_64279[(2)] = inst_64254);

(statearr_64267_64279[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64261 === (6))){
var inst_64256 = (state_64260[(2)]);
var state_64260__$1 = state_64260;
var statearr_64268_64280 = state_64260__$1;
(statearr_64268_64280[(2)] = inst_64256);

(statearr_64268_64280[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64261 === (7))){
var inst_64244 = (state_64260[(11)]);
var inst_64250 = (state_64260[(2)]);
var inst_64251 = cljs.core.async.put_BANG_.call(null,out,inst_64250);
var inst_64237 = inst_64244;
var state_64260__$1 = (function (){var statearr_64269 = state_64260;
(statearr_64269[(7)] = inst_64237);

(statearr_64269[(12)] = inst_64251);

return statearr_64269;
})();
var statearr_64270_64281 = state_64260__$1;
(statearr_64270_64281[(2)] = null);

(statearr_64270_64281[(1)] = (2));


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
});})(c__27974__auto___64275,out))
;
return ((function (switch__27884__auto__,c__27974__auto___64275,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27885__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27885__auto____0 = (function (){
var statearr_64271 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64271[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27885__auto__);

(statearr_64271[(1)] = (1));

return statearr_64271;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27885__auto____1 = (function (state_64260){
while(true){
var ret_value__27886__auto__ = (function (){try{while(true){
var result__27887__auto__ = switch__27884__auto__.call(null,state_64260);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27887__auto__;
}
break;
}
}catch (e64272){if((e64272 instanceof Object)){
var ex__27888__auto__ = e64272;
var statearr_64273_64282 = state_64260;
(statearr_64273_64282[(5)] = ex__27888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64260);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64272;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64283 = state_64260;
state_64260 = G__64283;
continue;
} else {
return ret_value__27886__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27885__auto__ = function(state_64260){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27885__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27885__auto____1.call(this,state_64260);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27885__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27885__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27885__auto__;
})()
;})(switch__27884__auto__,c__27974__auto___64275,out))
})();
var state__27976__auto__ = (function (){var statearr_64274 = f__27975__auto__.call(null);
(statearr_64274[(6)] = c__27974__auto___64275);

return statearr_64274;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27976__auto__);
});})(c__27974__auto___64275,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__64284,opts){
var map__64285 = p__64284;
var map__64285__$1 = ((((!((map__64285 == null)))?(((((map__64285.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64285.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64285):map__64285);
var eval_body = cljs.core.get.call(null,map__64285__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__64285__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e64287){var e = e64287;
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
return (function (p1__64288_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__64288_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__64289){
var vec__64290 = p__64289;
var k = cljs.core.nth.call(null,vec__64290,(0),null);
var v = cljs.core.nth.call(null,vec__64290,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__64293){
var vec__64294 = p__64293;
var k = cljs.core.nth.call(null,vec__64294,(0),null);
var v = cljs.core.nth.call(null,vec__64294,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__64300,p__64301){
var map__64302 = p__64300;
var map__64302__$1 = ((((!((map__64302 == null)))?(((((map__64302.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64302.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64302):map__64302);
var opts = map__64302__$1;
var before_jsload = cljs.core.get.call(null,map__64302__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__64302__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__64302__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__64303 = p__64301;
var map__64303__$1 = ((((!((map__64303 == null)))?(((((map__64303.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64303.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64303):map__64303);
var msg = map__64303__$1;
var files = cljs.core.get.call(null,map__64303__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__64303__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__64303__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__27974__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27974__auto__,map__64302,map__64302__$1,opts,before_jsload,on_jsload,reload_dependents,map__64303,map__64303__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__27975__auto__ = (function (){var switch__27884__auto__ = ((function (c__27974__auto__,map__64302,map__64302__$1,opts,before_jsload,on_jsload,reload_dependents,map__64303,map__64303__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_64457){
var state_val_64458 = (state_64457[(1)]);
if((state_val_64458 === (7))){
var inst_64317 = (state_64457[(7)]);
var inst_64320 = (state_64457[(8)]);
var inst_64318 = (state_64457[(9)]);
var inst_64319 = (state_64457[(10)]);
var inst_64325 = cljs.core._nth.call(null,inst_64318,inst_64320);
var inst_64326 = figwheel.client.file_reloading.eval_body.call(null,inst_64325,opts);
var inst_64327 = (inst_64320 + (1));
var tmp64459 = inst_64317;
var tmp64460 = inst_64318;
var tmp64461 = inst_64319;
var inst_64317__$1 = tmp64459;
var inst_64318__$1 = tmp64460;
var inst_64319__$1 = tmp64461;
var inst_64320__$1 = inst_64327;
var state_64457__$1 = (function (){var statearr_64462 = state_64457;
(statearr_64462[(7)] = inst_64317__$1);

(statearr_64462[(8)] = inst_64320__$1);

(statearr_64462[(9)] = inst_64318__$1);

(statearr_64462[(10)] = inst_64319__$1);

(statearr_64462[(11)] = inst_64326);

return statearr_64462;
})();
var statearr_64463_64546 = state_64457__$1;
(statearr_64463_64546[(2)] = null);

(statearr_64463_64546[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64458 === (20))){
var inst_64360 = (state_64457[(12)]);
var inst_64368 = figwheel.client.file_reloading.sort_files.call(null,inst_64360);
var state_64457__$1 = state_64457;
var statearr_64464_64547 = state_64457__$1;
(statearr_64464_64547[(2)] = inst_64368);

(statearr_64464_64547[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64458 === (27))){
var state_64457__$1 = state_64457;
var statearr_64465_64548 = state_64457__$1;
(statearr_64465_64548[(2)] = null);

(statearr_64465_64548[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64458 === (1))){
var inst_64309 = (state_64457[(13)]);
var inst_64306 = before_jsload.call(null,files);
var inst_64307 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_64308 = (function (){return ((function (inst_64309,inst_64306,inst_64307,state_val_64458,c__27974__auto__,map__64302,map__64302__$1,opts,before_jsload,on_jsload,reload_dependents,map__64303,map__64303__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__64297_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__64297_SHARP_);
});
;})(inst_64309,inst_64306,inst_64307,state_val_64458,c__27974__auto__,map__64302,map__64302__$1,opts,before_jsload,on_jsload,reload_dependents,map__64303,map__64303__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_64309__$1 = cljs.core.filter.call(null,inst_64308,files);
var inst_64310 = cljs.core.not_empty.call(null,inst_64309__$1);
var state_64457__$1 = (function (){var statearr_64466 = state_64457;
(statearr_64466[(14)] = inst_64307);

(statearr_64466[(15)] = inst_64306);

(statearr_64466[(13)] = inst_64309__$1);

return statearr_64466;
})();
if(cljs.core.truth_(inst_64310)){
var statearr_64467_64549 = state_64457__$1;
(statearr_64467_64549[(1)] = (2));

} else {
var statearr_64468_64550 = state_64457__$1;
(statearr_64468_64550[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64458 === (24))){
var state_64457__$1 = state_64457;
var statearr_64469_64551 = state_64457__$1;
(statearr_64469_64551[(2)] = null);

(statearr_64469_64551[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64458 === (39))){
var inst_64410 = (state_64457[(16)]);
var state_64457__$1 = state_64457;
var statearr_64470_64552 = state_64457__$1;
(statearr_64470_64552[(2)] = inst_64410);

(statearr_64470_64552[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64458 === (46))){
var inst_64452 = (state_64457[(2)]);
var state_64457__$1 = state_64457;
var statearr_64471_64553 = state_64457__$1;
(statearr_64471_64553[(2)] = inst_64452);

(statearr_64471_64553[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64458 === (4))){
var inst_64354 = (state_64457[(2)]);
var inst_64355 = cljs.core.List.EMPTY;
var inst_64356 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_64355);
var inst_64357 = (function (){return ((function (inst_64354,inst_64355,inst_64356,state_val_64458,c__27974__auto__,map__64302,map__64302__$1,opts,before_jsload,on_jsload,reload_dependents,map__64303,map__64303__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__64298_SHARP_){
var and__3911__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__64298_SHARP_);
if(cljs.core.truth_(and__3911__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__64298_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__64298_SHARP_))));
} else {
return and__3911__auto__;
}
});
;})(inst_64354,inst_64355,inst_64356,state_val_64458,c__27974__auto__,map__64302,map__64302__$1,opts,before_jsload,on_jsload,reload_dependents,map__64303,map__64303__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_64358 = cljs.core.filter.call(null,inst_64357,files);
var inst_64359 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_64360 = cljs.core.concat.call(null,inst_64358,inst_64359);
var state_64457__$1 = (function (){var statearr_64472 = state_64457;
(statearr_64472[(17)] = inst_64354);

(statearr_64472[(12)] = inst_64360);

(statearr_64472[(18)] = inst_64356);

return statearr_64472;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_64473_64554 = state_64457__$1;
(statearr_64473_64554[(1)] = (16));

} else {
var statearr_64474_64555 = state_64457__$1;
(statearr_64474_64555[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64458 === (15))){
var inst_64344 = (state_64457[(2)]);
var state_64457__$1 = state_64457;
var statearr_64475_64556 = state_64457__$1;
(statearr_64475_64556[(2)] = inst_64344);

(statearr_64475_64556[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64458 === (21))){
var inst_64370 = (state_64457[(19)]);
var inst_64370__$1 = (state_64457[(2)]);
var inst_64371 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_64370__$1);
var state_64457__$1 = (function (){var statearr_64476 = state_64457;
(statearr_64476[(19)] = inst_64370__$1);

return statearr_64476;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64457__$1,(22),inst_64371);
} else {
if((state_val_64458 === (31))){
var inst_64455 = (state_64457[(2)]);
var state_64457__$1 = state_64457;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64457__$1,inst_64455);
} else {
if((state_val_64458 === (32))){
var inst_64410 = (state_64457[(16)]);
var inst_64415 = inst_64410.cljs$lang$protocol_mask$partition0$;
var inst_64416 = (inst_64415 & (64));
var inst_64417 = inst_64410.cljs$core$ISeq$;
var inst_64418 = (cljs.core.PROTOCOL_SENTINEL === inst_64417);
var inst_64419 = ((inst_64416) || (inst_64418));
var state_64457__$1 = state_64457;
if(cljs.core.truth_(inst_64419)){
var statearr_64477_64557 = state_64457__$1;
(statearr_64477_64557[(1)] = (35));

} else {
var statearr_64478_64558 = state_64457__$1;
(statearr_64478_64558[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64458 === (40))){
var inst_64432 = (state_64457[(20)]);
var inst_64431 = (state_64457[(2)]);
var inst_64432__$1 = cljs.core.get.call(null,inst_64431,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_64433 = cljs.core.get.call(null,inst_64431,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_64434 = cljs.core.not_empty.call(null,inst_64432__$1);
var state_64457__$1 = (function (){var statearr_64479 = state_64457;
(statearr_64479[(20)] = inst_64432__$1);

(statearr_64479[(21)] = inst_64433);

return statearr_64479;
})();
if(cljs.core.truth_(inst_64434)){
var statearr_64480_64559 = state_64457__$1;
(statearr_64480_64559[(1)] = (41));

} else {
var statearr_64481_64560 = state_64457__$1;
(statearr_64481_64560[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64458 === (33))){
var state_64457__$1 = state_64457;
var statearr_64482_64561 = state_64457__$1;
(statearr_64482_64561[(2)] = false);

(statearr_64482_64561[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64458 === (13))){
var inst_64330 = (state_64457[(22)]);
var inst_64334 = cljs.core.chunk_first.call(null,inst_64330);
var inst_64335 = cljs.core.chunk_rest.call(null,inst_64330);
var inst_64336 = cljs.core.count.call(null,inst_64334);
var inst_64317 = inst_64335;
var inst_64318 = inst_64334;
var inst_64319 = inst_64336;
var inst_64320 = (0);
var state_64457__$1 = (function (){var statearr_64483 = state_64457;
(statearr_64483[(7)] = inst_64317);

(statearr_64483[(8)] = inst_64320);

(statearr_64483[(9)] = inst_64318);

(statearr_64483[(10)] = inst_64319);

return statearr_64483;
})();
var statearr_64484_64562 = state_64457__$1;
(statearr_64484_64562[(2)] = null);

(statearr_64484_64562[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64458 === (22))){
var inst_64370 = (state_64457[(19)]);
var inst_64373 = (state_64457[(23)]);
var inst_64378 = (state_64457[(24)]);
var inst_64374 = (state_64457[(25)]);
var inst_64373__$1 = (state_64457[(2)]);
var inst_64374__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_64373__$1);
var inst_64375 = (function (){var all_files = inst_64370;
var res_SINGLEQUOTE_ = inst_64373__$1;
var res = inst_64374__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_64370,inst_64373,inst_64378,inst_64374,inst_64373__$1,inst_64374__$1,state_val_64458,c__27974__auto__,map__64302,map__64302__$1,opts,before_jsload,on_jsload,reload_dependents,map__64303,map__64303__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__64299_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__64299_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_64370,inst_64373,inst_64378,inst_64374,inst_64373__$1,inst_64374__$1,state_val_64458,c__27974__auto__,map__64302,map__64302__$1,opts,before_jsload,on_jsload,reload_dependents,map__64303,map__64303__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_64376 = cljs.core.filter.call(null,inst_64375,inst_64373__$1);
var inst_64377 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_64378__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_64377);
var inst_64379 = cljs.core.not_empty.call(null,inst_64378__$1);
var state_64457__$1 = (function (){var statearr_64485 = state_64457;
(statearr_64485[(23)] = inst_64373__$1);

(statearr_64485[(24)] = inst_64378__$1);

(statearr_64485[(25)] = inst_64374__$1);

(statearr_64485[(26)] = inst_64376);

return statearr_64485;
})();
if(cljs.core.truth_(inst_64379)){
var statearr_64486_64563 = state_64457__$1;
(statearr_64486_64563[(1)] = (23));

} else {
var statearr_64487_64564 = state_64457__$1;
(statearr_64487_64564[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64458 === (36))){
var state_64457__$1 = state_64457;
var statearr_64488_64565 = state_64457__$1;
(statearr_64488_64565[(2)] = false);

(statearr_64488_64565[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64458 === (41))){
var inst_64432 = (state_64457[(20)]);
var inst_64436 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_64437 = cljs.core.map.call(null,inst_64436,inst_64432);
var inst_64438 = cljs.core.pr_str.call(null,inst_64437);
var inst_64439 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_64438)].join('');
var inst_64440 = figwheel.client.utils.log.call(null,inst_64439);
var state_64457__$1 = state_64457;
var statearr_64489_64566 = state_64457__$1;
(statearr_64489_64566[(2)] = inst_64440);

(statearr_64489_64566[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64458 === (43))){
var inst_64433 = (state_64457[(21)]);
var inst_64443 = (state_64457[(2)]);
var inst_64444 = cljs.core.not_empty.call(null,inst_64433);
var state_64457__$1 = (function (){var statearr_64490 = state_64457;
(statearr_64490[(27)] = inst_64443);

return statearr_64490;
})();
if(cljs.core.truth_(inst_64444)){
var statearr_64491_64567 = state_64457__$1;
(statearr_64491_64567[(1)] = (44));

} else {
var statearr_64492_64568 = state_64457__$1;
(statearr_64492_64568[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64458 === (29))){
var inst_64370 = (state_64457[(19)]);
var inst_64410 = (state_64457[(16)]);
var inst_64373 = (state_64457[(23)]);
var inst_64378 = (state_64457[(24)]);
var inst_64374 = (state_64457[(25)]);
var inst_64376 = (state_64457[(26)]);
var inst_64406 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_64409 = (function (){var all_files = inst_64370;
var res_SINGLEQUOTE_ = inst_64373;
var res = inst_64374;
var files_not_loaded = inst_64376;
var dependencies_that_loaded = inst_64378;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_64370,inst_64410,inst_64373,inst_64378,inst_64374,inst_64376,inst_64406,state_val_64458,c__27974__auto__,map__64302,map__64302__$1,opts,before_jsload,on_jsload,reload_dependents,map__64303,map__64303__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__64408){
var map__64493 = p__64408;
var map__64493__$1 = ((((!((map__64493 == null)))?(((((map__64493.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64493.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64493):map__64493);
var namespace = cljs.core.get.call(null,map__64493__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_64370,inst_64410,inst_64373,inst_64378,inst_64374,inst_64376,inst_64406,state_val_64458,c__27974__auto__,map__64302,map__64302__$1,opts,before_jsload,on_jsload,reload_dependents,map__64303,map__64303__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_64410__$1 = cljs.core.group_by.call(null,inst_64409,inst_64376);
var inst_64412 = (inst_64410__$1 == null);
var inst_64413 = cljs.core.not.call(null,inst_64412);
var state_64457__$1 = (function (){var statearr_64495 = state_64457;
(statearr_64495[(28)] = inst_64406);

(statearr_64495[(16)] = inst_64410__$1);

return statearr_64495;
})();
if(inst_64413){
var statearr_64496_64569 = state_64457__$1;
(statearr_64496_64569[(1)] = (32));

} else {
var statearr_64497_64570 = state_64457__$1;
(statearr_64497_64570[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64458 === (44))){
var inst_64433 = (state_64457[(21)]);
var inst_64446 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_64433);
var inst_64447 = cljs.core.pr_str.call(null,inst_64446);
var inst_64448 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_64447)].join('');
var inst_64449 = figwheel.client.utils.log.call(null,inst_64448);
var state_64457__$1 = state_64457;
var statearr_64498_64571 = state_64457__$1;
(statearr_64498_64571[(2)] = inst_64449);

(statearr_64498_64571[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64458 === (6))){
var inst_64351 = (state_64457[(2)]);
var state_64457__$1 = state_64457;
var statearr_64499_64572 = state_64457__$1;
(statearr_64499_64572[(2)] = inst_64351);

(statearr_64499_64572[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64458 === (28))){
var inst_64376 = (state_64457[(26)]);
var inst_64403 = (state_64457[(2)]);
var inst_64404 = cljs.core.not_empty.call(null,inst_64376);
var state_64457__$1 = (function (){var statearr_64500 = state_64457;
(statearr_64500[(29)] = inst_64403);

return statearr_64500;
})();
if(cljs.core.truth_(inst_64404)){
var statearr_64501_64573 = state_64457__$1;
(statearr_64501_64573[(1)] = (29));

} else {
var statearr_64502_64574 = state_64457__$1;
(statearr_64502_64574[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64458 === (25))){
var inst_64374 = (state_64457[(25)]);
var inst_64390 = (state_64457[(2)]);
var inst_64391 = cljs.core.not_empty.call(null,inst_64374);
var state_64457__$1 = (function (){var statearr_64503 = state_64457;
(statearr_64503[(30)] = inst_64390);

return statearr_64503;
})();
if(cljs.core.truth_(inst_64391)){
var statearr_64504_64575 = state_64457__$1;
(statearr_64504_64575[(1)] = (26));

} else {
var statearr_64505_64576 = state_64457__$1;
(statearr_64505_64576[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64458 === (34))){
var inst_64426 = (state_64457[(2)]);
var state_64457__$1 = state_64457;
if(cljs.core.truth_(inst_64426)){
var statearr_64506_64577 = state_64457__$1;
(statearr_64506_64577[(1)] = (38));

} else {
var statearr_64507_64578 = state_64457__$1;
(statearr_64507_64578[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64458 === (17))){
var state_64457__$1 = state_64457;
var statearr_64508_64579 = state_64457__$1;
(statearr_64508_64579[(2)] = recompile_dependents);

(statearr_64508_64579[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64458 === (3))){
var state_64457__$1 = state_64457;
var statearr_64509_64580 = state_64457__$1;
(statearr_64509_64580[(2)] = null);

(statearr_64509_64580[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64458 === (12))){
var inst_64347 = (state_64457[(2)]);
var state_64457__$1 = state_64457;
var statearr_64510_64581 = state_64457__$1;
(statearr_64510_64581[(2)] = inst_64347);

(statearr_64510_64581[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64458 === (2))){
var inst_64309 = (state_64457[(13)]);
var inst_64316 = cljs.core.seq.call(null,inst_64309);
var inst_64317 = inst_64316;
var inst_64318 = null;
var inst_64319 = (0);
var inst_64320 = (0);
var state_64457__$1 = (function (){var statearr_64511 = state_64457;
(statearr_64511[(7)] = inst_64317);

(statearr_64511[(8)] = inst_64320);

(statearr_64511[(9)] = inst_64318);

(statearr_64511[(10)] = inst_64319);

return statearr_64511;
})();
var statearr_64512_64582 = state_64457__$1;
(statearr_64512_64582[(2)] = null);

(statearr_64512_64582[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64458 === (23))){
var inst_64370 = (state_64457[(19)]);
var inst_64373 = (state_64457[(23)]);
var inst_64378 = (state_64457[(24)]);
var inst_64374 = (state_64457[(25)]);
var inst_64376 = (state_64457[(26)]);
var inst_64381 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_64383 = (function (){var all_files = inst_64370;
var res_SINGLEQUOTE_ = inst_64373;
var res = inst_64374;
var files_not_loaded = inst_64376;
var dependencies_that_loaded = inst_64378;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_64370,inst_64373,inst_64378,inst_64374,inst_64376,inst_64381,state_val_64458,c__27974__auto__,map__64302,map__64302__$1,opts,before_jsload,on_jsload,reload_dependents,map__64303,map__64303__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__64382){
var map__64513 = p__64382;
var map__64513__$1 = ((((!((map__64513 == null)))?(((((map__64513.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64513.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64513):map__64513);
var request_url = cljs.core.get.call(null,map__64513__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_64370,inst_64373,inst_64378,inst_64374,inst_64376,inst_64381,state_val_64458,c__27974__auto__,map__64302,map__64302__$1,opts,before_jsload,on_jsload,reload_dependents,map__64303,map__64303__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_64384 = cljs.core.reverse.call(null,inst_64378);
var inst_64385 = cljs.core.map.call(null,inst_64383,inst_64384);
var inst_64386 = cljs.core.pr_str.call(null,inst_64385);
var inst_64387 = figwheel.client.utils.log.call(null,inst_64386);
var state_64457__$1 = (function (){var statearr_64515 = state_64457;
(statearr_64515[(31)] = inst_64381);

return statearr_64515;
})();
var statearr_64516_64583 = state_64457__$1;
(statearr_64516_64583[(2)] = inst_64387);

(statearr_64516_64583[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64458 === (35))){
var state_64457__$1 = state_64457;
var statearr_64517_64584 = state_64457__$1;
(statearr_64517_64584[(2)] = true);

(statearr_64517_64584[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64458 === (19))){
var inst_64360 = (state_64457[(12)]);
var inst_64366 = figwheel.client.file_reloading.expand_files.call(null,inst_64360);
var state_64457__$1 = state_64457;
var statearr_64518_64585 = state_64457__$1;
(statearr_64518_64585[(2)] = inst_64366);

(statearr_64518_64585[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64458 === (11))){
var state_64457__$1 = state_64457;
var statearr_64519_64586 = state_64457__$1;
(statearr_64519_64586[(2)] = null);

(statearr_64519_64586[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64458 === (9))){
var inst_64349 = (state_64457[(2)]);
var state_64457__$1 = state_64457;
var statearr_64520_64587 = state_64457__$1;
(statearr_64520_64587[(2)] = inst_64349);

(statearr_64520_64587[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64458 === (5))){
var inst_64320 = (state_64457[(8)]);
var inst_64319 = (state_64457[(10)]);
var inst_64322 = (inst_64320 < inst_64319);
var inst_64323 = inst_64322;
var state_64457__$1 = state_64457;
if(cljs.core.truth_(inst_64323)){
var statearr_64521_64588 = state_64457__$1;
(statearr_64521_64588[(1)] = (7));

} else {
var statearr_64522_64589 = state_64457__$1;
(statearr_64522_64589[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64458 === (14))){
var inst_64330 = (state_64457[(22)]);
var inst_64339 = cljs.core.first.call(null,inst_64330);
var inst_64340 = figwheel.client.file_reloading.eval_body.call(null,inst_64339,opts);
var inst_64341 = cljs.core.next.call(null,inst_64330);
var inst_64317 = inst_64341;
var inst_64318 = null;
var inst_64319 = (0);
var inst_64320 = (0);
var state_64457__$1 = (function (){var statearr_64523 = state_64457;
(statearr_64523[(32)] = inst_64340);

(statearr_64523[(7)] = inst_64317);

(statearr_64523[(8)] = inst_64320);

(statearr_64523[(9)] = inst_64318);

(statearr_64523[(10)] = inst_64319);

return statearr_64523;
})();
var statearr_64524_64590 = state_64457__$1;
(statearr_64524_64590[(2)] = null);

(statearr_64524_64590[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64458 === (45))){
var state_64457__$1 = state_64457;
var statearr_64525_64591 = state_64457__$1;
(statearr_64525_64591[(2)] = null);

(statearr_64525_64591[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64458 === (26))){
var inst_64370 = (state_64457[(19)]);
var inst_64373 = (state_64457[(23)]);
var inst_64378 = (state_64457[(24)]);
var inst_64374 = (state_64457[(25)]);
var inst_64376 = (state_64457[(26)]);
var inst_64393 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_64395 = (function (){var all_files = inst_64370;
var res_SINGLEQUOTE_ = inst_64373;
var res = inst_64374;
var files_not_loaded = inst_64376;
var dependencies_that_loaded = inst_64378;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_64370,inst_64373,inst_64378,inst_64374,inst_64376,inst_64393,state_val_64458,c__27974__auto__,map__64302,map__64302__$1,opts,before_jsload,on_jsload,reload_dependents,map__64303,map__64303__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__64394){
var map__64526 = p__64394;
var map__64526__$1 = ((((!((map__64526 == null)))?(((((map__64526.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64526.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64526):map__64526);
var namespace = cljs.core.get.call(null,map__64526__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__64526__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_64370,inst_64373,inst_64378,inst_64374,inst_64376,inst_64393,state_val_64458,c__27974__auto__,map__64302,map__64302__$1,opts,before_jsload,on_jsload,reload_dependents,map__64303,map__64303__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_64396 = cljs.core.map.call(null,inst_64395,inst_64374);
var inst_64397 = cljs.core.pr_str.call(null,inst_64396);
var inst_64398 = figwheel.client.utils.log.call(null,inst_64397);
var inst_64399 = (function (){var all_files = inst_64370;
var res_SINGLEQUOTE_ = inst_64373;
var res = inst_64374;
var files_not_loaded = inst_64376;
var dependencies_that_loaded = inst_64378;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_64370,inst_64373,inst_64378,inst_64374,inst_64376,inst_64393,inst_64395,inst_64396,inst_64397,inst_64398,state_val_64458,c__27974__auto__,map__64302,map__64302__$1,opts,before_jsload,on_jsload,reload_dependents,map__64303,map__64303__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_64370,inst_64373,inst_64378,inst_64374,inst_64376,inst_64393,inst_64395,inst_64396,inst_64397,inst_64398,state_val_64458,c__27974__auto__,map__64302,map__64302__$1,opts,before_jsload,on_jsload,reload_dependents,map__64303,map__64303__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_64400 = setTimeout(inst_64399,(10));
var state_64457__$1 = (function (){var statearr_64528 = state_64457;
(statearr_64528[(33)] = inst_64398);

(statearr_64528[(34)] = inst_64393);

return statearr_64528;
})();
var statearr_64529_64592 = state_64457__$1;
(statearr_64529_64592[(2)] = inst_64400);

(statearr_64529_64592[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64458 === (16))){
var state_64457__$1 = state_64457;
var statearr_64530_64593 = state_64457__$1;
(statearr_64530_64593[(2)] = reload_dependents);

(statearr_64530_64593[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64458 === (38))){
var inst_64410 = (state_64457[(16)]);
var inst_64428 = cljs.core.apply.call(null,cljs.core.hash_map,inst_64410);
var state_64457__$1 = state_64457;
var statearr_64531_64594 = state_64457__$1;
(statearr_64531_64594[(2)] = inst_64428);

(statearr_64531_64594[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64458 === (30))){
var state_64457__$1 = state_64457;
var statearr_64532_64595 = state_64457__$1;
(statearr_64532_64595[(2)] = null);

(statearr_64532_64595[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64458 === (10))){
var inst_64330 = (state_64457[(22)]);
var inst_64332 = cljs.core.chunked_seq_QMARK_.call(null,inst_64330);
var state_64457__$1 = state_64457;
if(inst_64332){
var statearr_64533_64596 = state_64457__$1;
(statearr_64533_64596[(1)] = (13));

} else {
var statearr_64534_64597 = state_64457__$1;
(statearr_64534_64597[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64458 === (18))){
var inst_64364 = (state_64457[(2)]);
var state_64457__$1 = state_64457;
if(cljs.core.truth_(inst_64364)){
var statearr_64535_64598 = state_64457__$1;
(statearr_64535_64598[(1)] = (19));

} else {
var statearr_64536_64599 = state_64457__$1;
(statearr_64536_64599[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64458 === (42))){
var state_64457__$1 = state_64457;
var statearr_64537_64600 = state_64457__$1;
(statearr_64537_64600[(2)] = null);

(statearr_64537_64600[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64458 === (37))){
var inst_64423 = (state_64457[(2)]);
var state_64457__$1 = state_64457;
var statearr_64538_64601 = state_64457__$1;
(statearr_64538_64601[(2)] = inst_64423);

(statearr_64538_64601[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64458 === (8))){
var inst_64317 = (state_64457[(7)]);
var inst_64330 = (state_64457[(22)]);
var inst_64330__$1 = cljs.core.seq.call(null,inst_64317);
var state_64457__$1 = (function (){var statearr_64539 = state_64457;
(statearr_64539[(22)] = inst_64330__$1);

return statearr_64539;
})();
if(inst_64330__$1){
var statearr_64540_64602 = state_64457__$1;
(statearr_64540_64602[(1)] = (10));

} else {
var statearr_64541_64603 = state_64457__$1;
(statearr_64541_64603[(1)] = (11));

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
});})(c__27974__auto__,map__64302,map__64302__$1,opts,before_jsload,on_jsload,reload_dependents,map__64303,map__64303__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__27884__auto__,c__27974__auto__,map__64302,map__64302__$1,opts,before_jsload,on_jsload,reload_dependents,map__64303,map__64303__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27885__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27885__auto____0 = (function (){
var statearr_64542 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64542[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__27885__auto__);

(statearr_64542[(1)] = (1));

return statearr_64542;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27885__auto____1 = (function (state_64457){
while(true){
var ret_value__27886__auto__ = (function (){try{while(true){
var result__27887__auto__ = switch__27884__auto__.call(null,state_64457);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27887__auto__;
}
break;
}
}catch (e64543){if((e64543 instanceof Object)){
var ex__27888__auto__ = e64543;
var statearr_64544_64604 = state_64457;
(statearr_64544_64604[(5)] = ex__27888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64457);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64543;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64605 = state_64457;
state_64457 = G__64605;
continue;
} else {
return ret_value__27886__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__27885__auto__ = function(state_64457){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27885__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27885__auto____1.call(this,state_64457);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27885__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27885__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27885__auto__;
})()
;})(switch__27884__auto__,c__27974__auto__,map__64302,map__64302__$1,opts,before_jsload,on_jsload,reload_dependents,map__64303,map__64303__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__27976__auto__ = (function (){var statearr_64545 = f__27975__auto__.call(null);
(statearr_64545[(6)] = c__27974__auto__);

return statearr_64545;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27976__auto__);
});})(c__27974__auto__,map__64302,map__64302__$1,opts,before_jsload,on_jsload,reload_dependents,map__64303,map__64303__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__27974__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__64608,link){
var map__64609 = p__64608;
var map__64609__$1 = ((((!((map__64609 == null)))?(((((map__64609.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64609.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64609):map__64609);
var file = cljs.core.get.call(null,map__64609__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__64609,map__64609__$1,file){
return (function (p1__64606_SHARP_,p2__64607_SHARP_){
if(cljs.core._EQ_.call(null,p1__64606_SHARP_,p2__64607_SHARP_)){
return p1__64606_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__64609,map__64609__$1,file))
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
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__64612){
var map__64613 = p__64612;
var map__64613__$1 = ((((!((map__64613 == null)))?(((((map__64613.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64613.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64613):map__64613);
var match_length = cljs.core.get.call(null,map__64613__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__64613__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__64611_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__64611_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__64615_SHARP_,p2__64616_SHARP_){
return cljs.core.assoc.call(null,p1__64615_SHARP_,cljs.core.get.call(null,p2__64616_SHARP_,key),p2__64616_SHARP_);
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
var loaded_f_datas_64617 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_64617);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_64617);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__64618,p__64619){
var map__64620 = p__64618;
var map__64620__$1 = ((((!((map__64620 == null)))?(((((map__64620.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64620.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64620):map__64620);
var on_cssload = cljs.core.get.call(null,map__64620__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__64621 = p__64619;
var map__64621__$1 = ((((!((map__64621 == null)))?(((((map__64621.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64621.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64621):map__64621);
var files_msg = map__64621__$1;
var files = cljs.core.get.call(null,map__64621__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1525389502546
