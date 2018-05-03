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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__29976_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__29976_SHARP_));
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
var seq__29977 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__29978 = null;
var count__29979 = (0);
var i__29980 = (0);
while(true){
if((i__29980 < count__29979)){
var n = cljs.core._nth.call(null,chunk__29978,i__29980);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__29981 = seq__29977;
var G__29982 = chunk__29978;
var G__29983 = count__29979;
var G__29984 = (i__29980 + (1));
seq__29977 = G__29981;
chunk__29978 = G__29982;
count__29979 = G__29983;
i__29980 = G__29984;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__29977);
if(temp__5457__auto__){
var seq__29977__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29977__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__29977__$1);
var G__29985 = cljs.core.chunk_rest.call(null,seq__29977__$1);
var G__29986 = c__4319__auto__;
var G__29987 = cljs.core.count.call(null,c__4319__auto__);
var G__29988 = (0);
seq__29977 = G__29985;
chunk__29978 = G__29986;
count__29979 = G__29987;
i__29980 = G__29988;
continue;
} else {
var n = cljs.core.first.call(null,seq__29977__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__29989 = cljs.core.next.call(null,seq__29977__$1);
var G__29990 = null;
var G__29991 = (0);
var G__29992 = (0);
seq__29977 = G__29989;
chunk__29978 = G__29990;
count__29979 = G__29991;
i__29980 = G__29992;
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
return cljs.core.some.call(null,(function (p__29993){
var vec__29994 = p__29993;
var _ = cljs.core.nth.call(null,vec__29994,(0),null);
var v = cljs.core.nth.call(null,vec__29994,(1),null);
var and__3911__auto__ = v;
if(cljs.core.truth_(and__3911__auto__)){
return v.call(null,dep);
} else {
return and__3911__auto__;
}
}),cljs.core.filter.call(null,(function (p__29997){
var vec__29998 = p__29997;
var k = cljs.core.nth.call(null,vec__29998,(0),null);
var v = cljs.core.nth.call(null,vec__29998,(1),null);
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

var seq__30010_30018 = cljs.core.seq.call(null,deps);
var chunk__30011_30019 = null;
var count__30012_30020 = (0);
var i__30013_30021 = (0);
while(true){
if((i__30013_30021 < count__30012_30020)){
var dep_30022 = cljs.core._nth.call(null,chunk__30011_30019,i__30013_30021);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_30022;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_30022));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_30022,(depth + (1)),state);
} else {
}


var G__30023 = seq__30010_30018;
var G__30024 = chunk__30011_30019;
var G__30025 = count__30012_30020;
var G__30026 = (i__30013_30021 + (1));
seq__30010_30018 = G__30023;
chunk__30011_30019 = G__30024;
count__30012_30020 = G__30025;
i__30013_30021 = G__30026;
continue;
} else {
var temp__5457__auto___30027 = cljs.core.seq.call(null,seq__30010_30018);
if(temp__5457__auto___30027){
var seq__30010_30028__$1 = temp__5457__auto___30027;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30010_30028__$1)){
var c__4319__auto___30029 = cljs.core.chunk_first.call(null,seq__30010_30028__$1);
var G__30030 = cljs.core.chunk_rest.call(null,seq__30010_30028__$1);
var G__30031 = c__4319__auto___30029;
var G__30032 = cljs.core.count.call(null,c__4319__auto___30029);
var G__30033 = (0);
seq__30010_30018 = G__30030;
chunk__30011_30019 = G__30031;
count__30012_30020 = G__30032;
i__30013_30021 = G__30033;
continue;
} else {
var dep_30034 = cljs.core.first.call(null,seq__30010_30028__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_30034;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_30034));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_30034,(depth + (1)),state);
} else {
}


var G__30035 = cljs.core.next.call(null,seq__30010_30028__$1);
var G__30036 = null;
var G__30037 = (0);
var G__30038 = (0);
seq__30010_30018 = G__30035;
chunk__30011_30019 = G__30036;
count__30012_30020 = G__30037;
i__30013_30021 = G__30038;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__30014){
var vec__30015 = p__30014;
var seq__30016 = cljs.core.seq.call(null,vec__30015);
var first__30017 = cljs.core.first.call(null,seq__30016);
var seq__30016__$1 = cljs.core.next.call(null,seq__30016);
var x = first__30017;
var xs = seq__30016__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__30015,seq__30016,first__30017,seq__30016__$1,x,xs,get_deps__$1){
return (function (p1__30001_SHARP_){
return clojure.set.difference.call(null,p1__30001_SHARP_,x);
});})(vec__30015,seq__30016,first__30017,seq__30016__$1,x,xs,get_deps__$1))
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
var seq__30039 = cljs.core.seq.call(null,provides);
var chunk__30040 = null;
var count__30041 = (0);
var i__30042 = (0);
while(true){
if((i__30042 < count__30041)){
var prov = cljs.core._nth.call(null,chunk__30040,i__30042);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30043_30051 = cljs.core.seq.call(null,requires);
var chunk__30044_30052 = null;
var count__30045_30053 = (0);
var i__30046_30054 = (0);
while(true){
if((i__30046_30054 < count__30045_30053)){
var req_30055 = cljs.core._nth.call(null,chunk__30044_30052,i__30046_30054);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30055,prov);


var G__30056 = seq__30043_30051;
var G__30057 = chunk__30044_30052;
var G__30058 = count__30045_30053;
var G__30059 = (i__30046_30054 + (1));
seq__30043_30051 = G__30056;
chunk__30044_30052 = G__30057;
count__30045_30053 = G__30058;
i__30046_30054 = G__30059;
continue;
} else {
var temp__5457__auto___30060 = cljs.core.seq.call(null,seq__30043_30051);
if(temp__5457__auto___30060){
var seq__30043_30061__$1 = temp__5457__auto___30060;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30043_30061__$1)){
var c__4319__auto___30062 = cljs.core.chunk_first.call(null,seq__30043_30061__$1);
var G__30063 = cljs.core.chunk_rest.call(null,seq__30043_30061__$1);
var G__30064 = c__4319__auto___30062;
var G__30065 = cljs.core.count.call(null,c__4319__auto___30062);
var G__30066 = (0);
seq__30043_30051 = G__30063;
chunk__30044_30052 = G__30064;
count__30045_30053 = G__30065;
i__30046_30054 = G__30066;
continue;
} else {
var req_30067 = cljs.core.first.call(null,seq__30043_30061__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30067,prov);


var G__30068 = cljs.core.next.call(null,seq__30043_30061__$1);
var G__30069 = null;
var G__30070 = (0);
var G__30071 = (0);
seq__30043_30051 = G__30068;
chunk__30044_30052 = G__30069;
count__30045_30053 = G__30070;
i__30046_30054 = G__30071;
continue;
}
} else {
}
}
break;
}


var G__30072 = seq__30039;
var G__30073 = chunk__30040;
var G__30074 = count__30041;
var G__30075 = (i__30042 + (1));
seq__30039 = G__30072;
chunk__30040 = G__30073;
count__30041 = G__30074;
i__30042 = G__30075;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__30039);
if(temp__5457__auto__){
var seq__30039__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30039__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__30039__$1);
var G__30076 = cljs.core.chunk_rest.call(null,seq__30039__$1);
var G__30077 = c__4319__auto__;
var G__30078 = cljs.core.count.call(null,c__4319__auto__);
var G__30079 = (0);
seq__30039 = G__30076;
chunk__30040 = G__30077;
count__30041 = G__30078;
i__30042 = G__30079;
continue;
} else {
var prov = cljs.core.first.call(null,seq__30039__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30047_30080 = cljs.core.seq.call(null,requires);
var chunk__30048_30081 = null;
var count__30049_30082 = (0);
var i__30050_30083 = (0);
while(true){
if((i__30050_30083 < count__30049_30082)){
var req_30084 = cljs.core._nth.call(null,chunk__30048_30081,i__30050_30083);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30084,prov);


var G__30085 = seq__30047_30080;
var G__30086 = chunk__30048_30081;
var G__30087 = count__30049_30082;
var G__30088 = (i__30050_30083 + (1));
seq__30047_30080 = G__30085;
chunk__30048_30081 = G__30086;
count__30049_30082 = G__30087;
i__30050_30083 = G__30088;
continue;
} else {
var temp__5457__auto___30089__$1 = cljs.core.seq.call(null,seq__30047_30080);
if(temp__5457__auto___30089__$1){
var seq__30047_30090__$1 = temp__5457__auto___30089__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30047_30090__$1)){
var c__4319__auto___30091 = cljs.core.chunk_first.call(null,seq__30047_30090__$1);
var G__30092 = cljs.core.chunk_rest.call(null,seq__30047_30090__$1);
var G__30093 = c__4319__auto___30091;
var G__30094 = cljs.core.count.call(null,c__4319__auto___30091);
var G__30095 = (0);
seq__30047_30080 = G__30092;
chunk__30048_30081 = G__30093;
count__30049_30082 = G__30094;
i__30050_30083 = G__30095;
continue;
} else {
var req_30096 = cljs.core.first.call(null,seq__30047_30090__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30096,prov);


var G__30097 = cljs.core.next.call(null,seq__30047_30090__$1);
var G__30098 = null;
var G__30099 = (0);
var G__30100 = (0);
seq__30047_30080 = G__30097;
chunk__30048_30081 = G__30098;
count__30049_30082 = G__30099;
i__30050_30083 = G__30100;
continue;
}
} else {
}
}
break;
}


var G__30101 = cljs.core.next.call(null,seq__30039__$1);
var G__30102 = null;
var G__30103 = (0);
var G__30104 = (0);
seq__30039 = G__30101;
chunk__30040 = G__30102;
count__30041 = G__30103;
i__30042 = G__30104;
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
var seq__30105_30109 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__30106_30110 = null;
var count__30107_30111 = (0);
var i__30108_30112 = (0);
while(true){
if((i__30108_30112 < count__30107_30111)){
var ns_30113 = cljs.core._nth.call(null,chunk__30106_30110,i__30108_30112);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30113);


var G__30114 = seq__30105_30109;
var G__30115 = chunk__30106_30110;
var G__30116 = count__30107_30111;
var G__30117 = (i__30108_30112 + (1));
seq__30105_30109 = G__30114;
chunk__30106_30110 = G__30115;
count__30107_30111 = G__30116;
i__30108_30112 = G__30117;
continue;
} else {
var temp__5457__auto___30118 = cljs.core.seq.call(null,seq__30105_30109);
if(temp__5457__auto___30118){
var seq__30105_30119__$1 = temp__5457__auto___30118;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30105_30119__$1)){
var c__4319__auto___30120 = cljs.core.chunk_first.call(null,seq__30105_30119__$1);
var G__30121 = cljs.core.chunk_rest.call(null,seq__30105_30119__$1);
var G__30122 = c__4319__auto___30120;
var G__30123 = cljs.core.count.call(null,c__4319__auto___30120);
var G__30124 = (0);
seq__30105_30109 = G__30121;
chunk__30106_30110 = G__30122;
count__30107_30111 = G__30123;
i__30108_30112 = G__30124;
continue;
} else {
var ns_30125 = cljs.core.first.call(null,seq__30105_30119__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30125);


var G__30126 = cljs.core.next.call(null,seq__30105_30119__$1);
var G__30127 = null;
var G__30128 = (0);
var G__30129 = (0);
seq__30105_30109 = G__30126;
chunk__30106_30110 = G__30127;
count__30107_30111 = G__30128;
i__30108_30112 = G__30129;
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
var G__30130__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__30130 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30131__i = 0, G__30131__a = new Array(arguments.length -  0);
while (G__30131__i < G__30131__a.length) {G__30131__a[G__30131__i] = arguments[G__30131__i + 0]; ++G__30131__i;}
  args = new cljs.core.IndexedSeq(G__30131__a,0,null);
} 
return G__30130__delegate.call(this,args);};
G__30130.cljs$lang$maxFixedArity = 0;
G__30130.cljs$lang$applyTo = (function (arglist__30132){
var args = cljs.core.seq(arglist__30132);
return G__30130__delegate(args);
});
G__30130.cljs$core$IFn$_invoke$arity$variadic = G__30130__delegate;
return G__30130;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__30133_SHARP_,p2__30134_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__30133_SHARP_)].join('')),p2__30134_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__30135_SHARP_,p2__30136_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__30135_SHARP_)].join(''),p2__30136_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__30137 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__30137.addCallback(((function (G__30137){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__30137))
);

G__30137.addErrback(((function (G__30137){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__30137))
);

return G__30137;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e30138){if((e30138 instanceof Error)){
var e = e30138;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e30138;

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
}catch (e30139){if((e30139 instanceof Error)){
var e = e30139;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e30139;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__30140 = cljs.core._EQ_;
var expr__30141 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__30140.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__30141))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__30140.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__30141))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__30140.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__30141))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__30140,expr__30141){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__30140,expr__30141))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__30143,callback){
var map__30144 = p__30143;
var map__30144__$1 = ((((!((map__30144 == null)))?(((((map__30144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30144.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30144):map__30144);
var file_msg = map__30144__$1;
var request_url = cljs.core.get.call(null,map__30144__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3922__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__30144,map__30144__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__30144,map__30144__$1,file_msg,request_url))
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
return (function (state_30182){
var state_val_30183 = (state_30182[(1)]);
if((state_val_30183 === (7))){
var inst_30178 = (state_30182[(2)]);
var state_30182__$1 = state_30182;
var statearr_30184_30210 = state_30182__$1;
(statearr_30184_30210[(2)] = inst_30178);

(statearr_30184_30210[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30183 === (1))){
var state_30182__$1 = state_30182;
var statearr_30185_30211 = state_30182__$1;
(statearr_30185_30211[(2)] = null);

(statearr_30185_30211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30183 === (4))){
var inst_30148 = (state_30182[(7)]);
var inst_30148__$1 = (state_30182[(2)]);
var state_30182__$1 = (function (){var statearr_30186 = state_30182;
(statearr_30186[(7)] = inst_30148__$1);

return statearr_30186;
})();
if(cljs.core.truth_(inst_30148__$1)){
var statearr_30187_30212 = state_30182__$1;
(statearr_30187_30212[(1)] = (5));

} else {
var statearr_30188_30213 = state_30182__$1;
(statearr_30188_30213[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30183 === (15))){
var inst_30163 = (state_30182[(8)]);
var inst_30161 = (state_30182[(9)]);
var inst_30165 = inst_30163.call(null,inst_30161);
var state_30182__$1 = state_30182;
var statearr_30189_30214 = state_30182__$1;
(statearr_30189_30214[(2)] = inst_30165);

(statearr_30189_30214[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30183 === (13))){
var inst_30172 = (state_30182[(2)]);
var state_30182__$1 = state_30182;
var statearr_30190_30215 = state_30182__$1;
(statearr_30190_30215[(2)] = inst_30172);

(statearr_30190_30215[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30183 === (6))){
var state_30182__$1 = state_30182;
var statearr_30191_30216 = state_30182__$1;
(statearr_30191_30216[(2)] = null);

(statearr_30191_30216[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30183 === (17))){
var inst_30169 = (state_30182[(2)]);
var state_30182__$1 = state_30182;
var statearr_30192_30217 = state_30182__$1;
(statearr_30192_30217[(2)] = inst_30169);

(statearr_30192_30217[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30183 === (3))){
var inst_30180 = (state_30182[(2)]);
var state_30182__$1 = state_30182;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30182__$1,inst_30180);
} else {
if((state_val_30183 === (12))){
var state_30182__$1 = state_30182;
var statearr_30193_30218 = state_30182__$1;
(statearr_30193_30218[(2)] = null);

(statearr_30193_30218[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30183 === (2))){
var state_30182__$1 = state_30182;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30182__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_30183 === (11))){
var inst_30153 = (state_30182[(10)]);
var inst_30159 = figwheel.client.file_reloading.blocking_load.call(null,inst_30153);
var state_30182__$1 = state_30182;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30182__$1,(14),inst_30159);
} else {
if((state_val_30183 === (9))){
var inst_30153 = (state_30182[(10)]);
var state_30182__$1 = state_30182;
if(cljs.core.truth_(inst_30153)){
var statearr_30194_30219 = state_30182__$1;
(statearr_30194_30219[(1)] = (11));

} else {
var statearr_30195_30220 = state_30182__$1;
(statearr_30195_30220[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30183 === (5))){
var inst_30154 = (state_30182[(11)]);
var inst_30148 = (state_30182[(7)]);
var inst_30153 = cljs.core.nth.call(null,inst_30148,(0),null);
var inst_30154__$1 = cljs.core.nth.call(null,inst_30148,(1),null);
var state_30182__$1 = (function (){var statearr_30196 = state_30182;
(statearr_30196[(11)] = inst_30154__$1);

(statearr_30196[(10)] = inst_30153);

return statearr_30196;
})();
if(cljs.core.truth_(inst_30154__$1)){
var statearr_30197_30221 = state_30182__$1;
(statearr_30197_30221[(1)] = (8));

} else {
var statearr_30198_30222 = state_30182__$1;
(statearr_30198_30222[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30183 === (14))){
var inst_30163 = (state_30182[(8)]);
var inst_30153 = (state_30182[(10)]);
var inst_30161 = (state_30182[(2)]);
var inst_30162 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_30163__$1 = cljs.core.get.call(null,inst_30162,inst_30153);
var state_30182__$1 = (function (){var statearr_30199 = state_30182;
(statearr_30199[(8)] = inst_30163__$1);

(statearr_30199[(9)] = inst_30161);

return statearr_30199;
})();
if(cljs.core.truth_(inst_30163__$1)){
var statearr_30200_30223 = state_30182__$1;
(statearr_30200_30223[(1)] = (15));

} else {
var statearr_30201_30224 = state_30182__$1;
(statearr_30201_30224[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30183 === (16))){
var inst_30161 = (state_30182[(9)]);
var inst_30167 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_30161);
var state_30182__$1 = state_30182;
var statearr_30202_30225 = state_30182__$1;
(statearr_30202_30225[(2)] = inst_30167);

(statearr_30202_30225[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30183 === (10))){
var inst_30174 = (state_30182[(2)]);
var state_30182__$1 = (function (){var statearr_30203 = state_30182;
(statearr_30203[(12)] = inst_30174);

return statearr_30203;
})();
var statearr_30204_30226 = state_30182__$1;
(statearr_30204_30226[(2)] = null);

(statearr_30204_30226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30183 === (8))){
var inst_30154 = (state_30182[(11)]);
var inst_30156 = eval(inst_30154);
var state_30182__$1 = state_30182;
var statearr_30205_30227 = state_30182__$1;
(statearr_30205_30227[(2)] = inst_30156);

(statearr_30205_30227[(1)] = (10));


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
var statearr_30206 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30206[(0)] = figwheel$client$file_reloading$state_machine__27885__auto__);

(statearr_30206[(1)] = (1));

return statearr_30206;
});
var figwheel$client$file_reloading$state_machine__27885__auto____1 = (function (state_30182){
while(true){
var ret_value__27886__auto__ = (function (){try{while(true){
var result__27887__auto__ = switch__27884__auto__.call(null,state_30182);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27887__auto__;
}
break;
}
}catch (e30207){if((e30207 instanceof Object)){
var ex__27888__auto__ = e30207;
var statearr_30208_30228 = state_30182;
(statearr_30208_30228[(5)] = ex__27888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30182);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30207;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30229 = state_30182;
state_30182 = G__30229;
continue;
} else {
return ret_value__27886__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__27885__auto__ = function(state_30182){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__27885__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__27885__auto____1.call(this,state_30182);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__27885__auto____0;
figwheel$client$file_reloading$state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__27885__auto____1;
return figwheel$client$file_reloading$state_machine__27885__auto__;
})()
;})(switch__27884__auto__,c__27974__auto__))
})();
var state__27976__auto__ = (function (){var statearr_30209 = f__27975__auto__.call(null);
(statearr_30209[(6)] = c__27974__auto__);

return statearr_30209;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27976__auto__);
});})(c__27974__auto__))
);

return c__27974__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__30231 = arguments.length;
switch (G__30231) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__30233,callback){
var map__30234 = p__30233;
var map__30234__$1 = ((((!((map__30234 == null)))?(((((map__30234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30234.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30234):map__30234);
var file_msg = map__30234__$1;
var namespace = cljs.core.get.call(null,map__30234__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__30234,map__30234__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__30234,map__30234__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__30236){
var map__30237 = p__30236;
var map__30237__$1 = ((((!((map__30237 == null)))?(((((map__30237.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30237.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30237):map__30237);
var file_msg = map__30237__$1;
var namespace = cljs.core.get.call(null,map__30237__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__30239){
var map__30240 = p__30239;
var map__30240__$1 = ((((!((map__30240 == null)))?(((((map__30240.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30240.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30240):map__30240);
var file_msg = map__30240__$1;
var namespace = cljs.core.get.call(null,map__30240__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__30242,callback){
var map__30243 = p__30242;
var map__30243__$1 = ((((!((map__30243 == null)))?(((((map__30243.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30243.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30243):map__30243);
var file_msg = map__30243__$1;
var request_url = cljs.core.get.call(null,map__30243__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__30243__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__27974__auto___30293 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27974__auto___30293,out){
return (function (){
var f__27975__auto__ = (function (){var switch__27884__auto__ = ((function (c__27974__auto___30293,out){
return (function (state_30278){
var state_val_30279 = (state_30278[(1)]);
if((state_val_30279 === (1))){
var inst_30252 = cljs.core.seq.call(null,files);
var inst_30253 = cljs.core.first.call(null,inst_30252);
var inst_30254 = cljs.core.next.call(null,inst_30252);
var inst_30255 = files;
var state_30278__$1 = (function (){var statearr_30280 = state_30278;
(statearr_30280[(7)] = inst_30253);

(statearr_30280[(8)] = inst_30255);

(statearr_30280[(9)] = inst_30254);

return statearr_30280;
})();
var statearr_30281_30294 = state_30278__$1;
(statearr_30281_30294[(2)] = null);

(statearr_30281_30294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30279 === (2))){
var inst_30255 = (state_30278[(8)]);
var inst_30261 = (state_30278[(10)]);
var inst_30260 = cljs.core.seq.call(null,inst_30255);
var inst_30261__$1 = cljs.core.first.call(null,inst_30260);
var inst_30262 = cljs.core.next.call(null,inst_30260);
var inst_30263 = (inst_30261__$1 == null);
var inst_30264 = cljs.core.not.call(null,inst_30263);
var state_30278__$1 = (function (){var statearr_30282 = state_30278;
(statearr_30282[(11)] = inst_30262);

(statearr_30282[(10)] = inst_30261__$1);

return statearr_30282;
})();
if(inst_30264){
var statearr_30283_30295 = state_30278__$1;
(statearr_30283_30295[(1)] = (4));

} else {
var statearr_30284_30296 = state_30278__$1;
(statearr_30284_30296[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30279 === (3))){
var inst_30276 = (state_30278[(2)]);
var state_30278__$1 = state_30278;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30278__$1,inst_30276);
} else {
if((state_val_30279 === (4))){
var inst_30261 = (state_30278[(10)]);
var inst_30266 = figwheel.client.file_reloading.reload_js_file.call(null,inst_30261);
var state_30278__$1 = state_30278;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30278__$1,(7),inst_30266);
} else {
if((state_val_30279 === (5))){
var inst_30272 = cljs.core.async.close_BANG_.call(null,out);
var state_30278__$1 = state_30278;
var statearr_30285_30297 = state_30278__$1;
(statearr_30285_30297[(2)] = inst_30272);

(statearr_30285_30297[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30279 === (6))){
var inst_30274 = (state_30278[(2)]);
var state_30278__$1 = state_30278;
var statearr_30286_30298 = state_30278__$1;
(statearr_30286_30298[(2)] = inst_30274);

(statearr_30286_30298[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30279 === (7))){
var inst_30262 = (state_30278[(11)]);
var inst_30268 = (state_30278[(2)]);
var inst_30269 = cljs.core.async.put_BANG_.call(null,out,inst_30268);
var inst_30255 = inst_30262;
var state_30278__$1 = (function (){var statearr_30287 = state_30278;
(statearr_30287[(12)] = inst_30269);

(statearr_30287[(8)] = inst_30255);

return statearr_30287;
})();
var statearr_30288_30299 = state_30278__$1;
(statearr_30288_30299[(2)] = null);

(statearr_30288_30299[(1)] = (2));


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
});})(c__27974__auto___30293,out))
;
return ((function (switch__27884__auto__,c__27974__auto___30293,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27885__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27885__auto____0 = (function (){
var statearr_30289 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30289[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27885__auto__);

(statearr_30289[(1)] = (1));

return statearr_30289;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27885__auto____1 = (function (state_30278){
while(true){
var ret_value__27886__auto__ = (function (){try{while(true){
var result__27887__auto__ = switch__27884__auto__.call(null,state_30278);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27887__auto__;
}
break;
}
}catch (e30290){if((e30290 instanceof Object)){
var ex__27888__auto__ = e30290;
var statearr_30291_30300 = state_30278;
(statearr_30291_30300[(5)] = ex__27888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30278);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30290;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30301 = state_30278;
state_30278 = G__30301;
continue;
} else {
return ret_value__27886__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27885__auto__ = function(state_30278){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27885__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27885__auto____1.call(this,state_30278);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27885__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27885__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27885__auto__;
})()
;})(switch__27884__auto__,c__27974__auto___30293,out))
})();
var state__27976__auto__ = (function (){var statearr_30292 = f__27975__auto__.call(null);
(statearr_30292[(6)] = c__27974__auto___30293);

return statearr_30292;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27976__auto__);
});})(c__27974__auto___30293,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__30302,opts){
var map__30303 = p__30302;
var map__30303__$1 = ((((!((map__30303 == null)))?(((((map__30303.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30303.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30303):map__30303);
var eval_body = cljs.core.get.call(null,map__30303__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__30303__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e30305){var e = e30305;
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
return (function (p1__30306_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30306_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__30307){
var vec__30308 = p__30307;
var k = cljs.core.nth.call(null,vec__30308,(0),null);
var v = cljs.core.nth.call(null,vec__30308,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__30311){
var vec__30312 = p__30311;
var k = cljs.core.nth.call(null,vec__30312,(0),null);
var v = cljs.core.nth.call(null,vec__30312,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__30318,p__30319){
var map__30320 = p__30318;
var map__30320__$1 = ((((!((map__30320 == null)))?(((((map__30320.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30320.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30320):map__30320);
var opts = map__30320__$1;
var before_jsload = cljs.core.get.call(null,map__30320__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__30320__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__30320__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__30321 = p__30319;
var map__30321__$1 = ((((!((map__30321 == null)))?(((((map__30321.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30321.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30321):map__30321);
var msg = map__30321__$1;
var files = cljs.core.get.call(null,map__30321__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__30321__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__30321__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__27974__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27974__auto__,map__30320,map__30320__$1,opts,before_jsload,on_jsload,reload_dependents,map__30321,map__30321__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__27975__auto__ = (function (){var switch__27884__auto__ = ((function (c__27974__auto__,map__30320,map__30320__$1,opts,before_jsload,on_jsload,reload_dependents,map__30321,map__30321__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_30475){
var state_val_30476 = (state_30475[(1)]);
if((state_val_30476 === (7))){
var inst_30335 = (state_30475[(7)]);
var inst_30337 = (state_30475[(8)]);
var inst_30338 = (state_30475[(9)]);
var inst_30336 = (state_30475[(10)]);
var inst_30343 = cljs.core._nth.call(null,inst_30336,inst_30338);
var inst_30344 = figwheel.client.file_reloading.eval_body.call(null,inst_30343,opts);
var inst_30345 = (inst_30338 + (1));
var tmp30477 = inst_30335;
var tmp30478 = inst_30337;
var tmp30479 = inst_30336;
var inst_30335__$1 = tmp30477;
var inst_30336__$1 = tmp30479;
var inst_30337__$1 = tmp30478;
var inst_30338__$1 = inst_30345;
var state_30475__$1 = (function (){var statearr_30480 = state_30475;
(statearr_30480[(7)] = inst_30335__$1);

(statearr_30480[(8)] = inst_30337__$1);

(statearr_30480[(11)] = inst_30344);

(statearr_30480[(9)] = inst_30338__$1);

(statearr_30480[(10)] = inst_30336__$1);

return statearr_30480;
})();
var statearr_30481_30564 = state_30475__$1;
(statearr_30481_30564[(2)] = null);

(statearr_30481_30564[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (20))){
var inst_30378 = (state_30475[(12)]);
var inst_30386 = figwheel.client.file_reloading.sort_files.call(null,inst_30378);
var state_30475__$1 = state_30475;
var statearr_30482_30565 = state_30475__$1;
(statearr_30482_30565[(2)] = inst_30386);

(statearr_30482_30565[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (27))){
var state_30475__$1 = state_30475;
var statearr_30483_30566 = state_30475__$1;
(statearr_30483_30566[(2)] = null);

(statearr_30483_30566[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (1))){
var inst_30327 = (state_30475[(13)]);
var inst_30324 = before_jsload.call(null,files);
var inst_30325 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_30326 = (function (){return ((function (inst_30327,inst_30324,inst_30325,state_val_30476,c__27974__auto__,map__30320,map__30320__$1,opts,before_jsload,on_jsload,reload_dependents,map__30321,map__30321__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30315_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30315_SHARP_);
});
;})(inst_30327,inst_30324,inst_30325,state_val_30476,c__27974__auto__,map__30320,map__30320__$1,opts,before_jsload,on_jsload,reload_dependents,map__30321,map__30321__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30327__$1 = cljs.core.filter.call(null,inst_30326,files);
var inst_30328 = cljs.core.not_empty.call(null,inst_30327__$1);
var state_30475__$1 = (function (){var statearr_30484 = state_30475;
(statearr_30484[(13)] = inst_30327__$1);

(statearr_30484[(14)] = inst_30325);

(statearr_30484[(15)] = inst_30324);

return statearr_30484;
})();
if(cljs.core.truth_(inst_30328)){
var statearr_30485_30567 = state_30475__$1;
(statearr_30485_30567[(1)] = (2));

} else {
var statearr_30486_30568 = state_30475__$1;
(statearr_30486_30568[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (24))){
var state_30475__$1 = state_30475;
var statearr_30487_30569 = state_30475__$1;
(statearr_30487_30569[(2)] = null);

(statearr_30487_30569[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (39))){
var inst_30428 = (state_30475[(16)]);
var state_30475__$1 = state_30475;
var statearr_30488_30570 = state_30475__$1;
(statearr_30488_30570[(2)] = inst_30428);

(statearr_30488_30570[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (46))){
var inst_30470 = (state_30475[(2)]);
var state_30475__$1 = state_30475;
var statearr_30489_30571 = state_30475__$1;
(statearr_30489_30571[(2)] = inst_30470);

(statearr_30489_30571[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (4))){
var inst_30372 = (state_30475[(2)]);
var inst_30373 = cljs.core.List.EMPTY;
var inst_30374 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_30373);
var inst_30375 = (function (){return ((function (inst_30372,inst_30373,inst_30374,state_val_30476,c__27974__auto__,map__30320,map__30320__$1,opts,before_jsload,on_jsload,reload_dependents,map__30321,map__30321__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30316_SHARP_){
var and__3911__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30316_SHARP_);
if(cljs.core.truth_(and__3911__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30316_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__30316_SHARP_))));
} else {
return and__3911__auto__;
}
});
;})(inst_30372,inst_30373,inst_30374,state_val_30476,c__27974__auto__,map__30320,map__30320__$1,opts,before_jsload,on_jsload,reload_dependents,map__30321,map__30321__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30376 = cljs.core.filter.call(null,inst_30375,files);
var inst_30377 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_30378 = cljs.core.concat.call(null,inst_30376,inst_30377);
var state_30475__$1 = (function (){var statearr_30490 = state_30475;
(statearr_30490[(12)] = inst_30378);

(statearr_30490[(17)] = inst_30372);

(statearr_30490[(18)] = inst_30374);

return statearr_30490;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_30491_30572 = state_30475__$1;
(statearr_30491_30572[(1)] = (16));

} else {
var statearr_30492_30573 = state_30475__$1;
(statearr_30492_30573[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (15))){
var inst_30362 = (state_30475[(2)]);
var state_30475__$1 = state_30475;
var statearr_30493_30574 = state_30475__$1;
(statearr_30493_30574[(2)] = inst_30362);

(statearr_30493_30574[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (21))){
var inst_30388 = (state_30475[(19)]);
var inst_30388__$1 = (state_30475[(2)]);
var inst_30389 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_30388__$1);
var state_30475__$1 = (function (){var statearr_30494 = state_30475;
(statearr_30494[(19)] = inst_30388__$1);

return statearr_30494;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30475__$1,(22),inst_30389);
} else {
if((state_val_30476 === (31))){
var inst_30473 = (state_30475[(2)]);
var state_30475__$1 = state_30475;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30475__$1,inst_30473);
} else {
if((state_val_30476 === (32))){
var inst_30428 = (state_30475[(16)]);
var inst_30433 = inst_30428.cljs$lang$protocol_mask$partition0$;
var inst_30434 = (inst_30433 & (64));
var inst_30435 = inst_30428.cljs$core$ISeq$;
var inst_30436 = (cljs.core.PROTOCOL_SENTINEL === inst_30435);
var inst_30437 = ((inst_30434) || (inst_30436));
var state_30475__$1 = state_30475;
if(cljs.core.truth_(inst_30437)){
var statearr_30495_30575 = state_30475__$1;
(statearr_30495_30575[(1)] = (35));

} else {
var statearr_30496_30576 = state_30475__$1;
(statearr_30496_30576[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (40))){
var inst_30450 = (state_30475[(20)]);
var inst_30449 = (state_30475[(2)]);
var inst_30450__$1 = cljs.core.get.call(null,inst_30449,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_30451 = cljs.core.get.call(null,inst_30449,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_30452 = cljs.core.not_empty.call(null,inst_30450__$1);
var state_30475__$1 = (function (){var statearr_30497 = state_30475;
(statearr_30497[(21)] = inst_30451);

(statearr_30497[(20)] = inst_30450__$1);

return statearr_30497;
})();
if(cljs.core.truth_(inst_30452)){
var statearr_30498_30577 = state_30475__$1;
(statearr_30498_30577[(1)] = (41));

} else {
var statearr_30499_30578 = state_30475__$1;
(statearr_30499_30578[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (33))){
var state_30475__$1 = state_30475;
var statearr_30500_30579 = state_30475__$1;
(statearr_30500_30579[(2)] = false);

(statearr_30500_30579[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (13))){
var inst_30348 = (state_30475[(22)]);
var inst_30352 = cljs.core.chunk_first.call(null,inst_30348);
var inst_30353 = cljs.core.chunk_rest.call(null,inst_30348);
var inst_30354 = cljs.core.count.call(null,inst_30352);
var inst_30335 = inst_30353;
var inst_30336 = inst_30352;
var inst_30337 = inst_30354;
var inst_30338 = (0);
var state_30475__$1 = (function (){var statearr_30501 = state_30475;
(statearr_30501[(7)] = inst_30335);

(statearr_30501[(8)] = inst_30337);

(statearr_30501[(9)] = inst_30338);

(statearr_30501[(10)] = inst_30336);

return statearr_30501;
})();
var statearr_30502_30580 = state_30475__$1;
(statearr_30502_30580[(2)] = null);

(statearr_30502_30580[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (22))){
var inst_30392 = (state_30475[(23)]);
var inst_30388 = (state_30475[(19)]);
var inst_30396 = (state_30475[(24)]);
var inst_30391 = (state_30475[(25)]);
var inst_30391__$1 = (state_30475[(2)]);
var inst_30392__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30391__$1);
var inst_30393 = (function (){var all_files = inst_30388;
var res_SINGLEQUOTE_ = inst_30391__$1;
var res = inst_30392__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_30392,inst_30388,inst_30396,inst_30391,inst_30391__$1,inst_30392__$1,state_val_30476,c__27974__auto__,map__30320,map__30320__$1,opts,before_jsload,on_jsload,reload_dependents,map__30321,map__30321__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30317_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__30317_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_30392,inst_30388,inst_30396,inst_30391,inst_30391__$1,inst_30392__$1,state_val_30476,c__27974__auto__,map__30320,map__30320__$1,opts,before_jsload,on_jsload,reload_dependents,map__30321,map__30321__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30394 = cljs.core.filter.call(null,inst_30393,inst_30391__$1);
var inst_30395 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_30396__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30395);
var inst_30397 = cljs.core.not_empty.call(null,inst_30396__$1);
var state_30475__$1 = (function (){var statearr_30503 = state_30475;
(statearr_30503[(23)] = inst_30392__$1);

(statearr_30503[(26)] = inst_30394);

(statearr_30503[(24)] = inst_30396__$1);

(statearr_30503[(25)] = inst_30391__$1);

return statearr_30503;
})();
if(cljs.core.truth_(inst_30397)){
var statearr_30504_30581 = state_30475__$1;
(statearr_30504_30581[(1)] = (23));

} else {
var statearr_30505_30582 = state_30475__$1;
(statearr_30505_30582[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (36))){
var state_30475__$1 = state_30475;
var statearr_30506_30583 = state_30475__$1;
(statearr_30506_30583[(2)] = false);

(statearr_30506_30583[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (41))){
var inst_30450 = (state_30475[(20)]);
var inst_30454 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_30455 = cljs.core.map.call(null,inst_30454,inst_30450);
var inst_30456 = cljs.core.pr_str.call(null,inst_30455);
var inst_30457 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30456)].join('');
var inst_30458 = figwheel.client.utils.log.call(null,inst_30457);
var state_30475__$1 = state_30475;
var statearr_30507_30584 = state_30475__$1;
(statearr_30507_30584[(2)] = inst_30458);

(statearr_30507_30584[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (43))){
var inst_30451 = (state_30475[(21)]);
var inst_30461 = (state_30475[(2)]);
var inst_30462 = cljs.core.not_empty.call(null,inst_30451);
var state_30475__$1 = (function (){var statearr_30508 = state_30475;
(statearr_30508[(27)] = inst_30461);

return statearr_30508;
})();
if(cljs.core.truth_(inst_30462)){
var statearr_30509_30585 = state_30475__$1;
(statearr_30509_30585[(1)] = (44));

} else {
var statearr_30510_30586 = state_30475__$1;
(statearr_30510_30586[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (29))){
var inst_30392 = (state_30475[(23)]);
var inst_30394 = (state_30475[(26)]);
var inst_30428 = (state_30475[(16)]);
var inst_30388 = (state_30475[(19)]);
var inst_30396 = (state_30475[(24)]);
var inst_30391 = (state_30475[(25)]);
var inst_30424 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_30427 = (function (){var all_files = inst_30388;
var res_SINGLEQUOTE_ = inst_30391;
var res = inst_30392;
var files_not_loaded = inst_30394;
var dependencies_that_loaded = inst_30396;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30392,inst_30394,inst_30428,inst_30388,inst_30396,inst_30391,inst_30424,state_val_30476,c__27974__auto__,map__30320,map__30320__$1,opts,before_jsload,on_jsload,reload_dependents,map__30321,map__30321__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30426){
var map__30511 = p__30426;
var map__30511__$1 = ((((!((map__30511 == null)))?(((((map__30511.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30511.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30511):map__30511);
var namespace = cljs.core.get.call(null,map__30511__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30392,inst_30394,inst_30428,inst_30388,inst_30396,inst_30391,inst_30424,state_val_30476,c__27974__auto__,map__30320,map__30320__$1,opts,before_jsload,on_jsload,reload_dependents,map__30321,map__30321__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30428__$1 = cljs.core.group_by.call(null,inst_30427,inst_30394);
var inst_30430 = (inst_30428__$1 == null);
var inst_30431 = cljs.core.not.call(null,inst_30430);
var state_30475__$1 = (function (){var statearr_30513 = state_30475;
(statearr_30513[(28)] = inst_30424);

(statearr_30513[(16)] = inst_30428__$1);

return statearr_30513;
})();
if(inst_30431){
var statearr_30514_30587 = state_30475__$1;
(statearr_30514_30587[(1)] = (32));

} else {
var statearr_30515_30588 = state_30475__$1;
(statearr_30515_30588[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (44))){
var inst_30451 = (state_30475[(21)]);
var inst_30464 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30451);
var inst_30465 = cljs.core.pr_str.call(null,inst_30464);
var inst_30466 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30465)].join('');
var inst_30467 = figwheel.client.utils.log.call(null,inst_30466);
var state_30475__$1 = state_30475;
var statearr_30516_30589 = state_30475__$1;
(statearr_30516_30589[(2)] = inst_30467);

(statearr_30516_30589[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (6))){
var inst_30369 = (state_30475[(2)]);
var state_30475__$1 = state_30475;
var statearr_30517_30590 = state_30475__$1;
(statearr_30517_30590[(2)] = inst_30369);

(statearr_30517_30590[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (28))){
var inst_30394 = (state_30475[(26)]);
var inst_30421 = (state_30475[(2)]);
var inst_30422 = cljs.core.not_empty.call(null,inst_30394);
var state_30475__$1 = (function (){var statearr_30518 = state_30475;
(statearr_30518[(29)] = inst_30421);

return statearr_30518;
})();
if(cljs.core.truth_(inst_30422)){
var statearr_30519_30591 = state_30475__$1;
(statearr_30519_30591[(1)] = (29));

} else {
var statearr_30520_30592 = state_30475__$1;
(statearr_30520_30592[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (25))){
var inst_30392 = (state_30475[(23)]);
var inst_30408 = (state_30475[(2)]);
var inst_30409 = cljs.core.not_empty.call(null,inst_30392);
var state_30475__$1 = (function (){var statearr_30521 = state_30475;
(statearr_30521[(30)] = inst_30408);

return statearr_30521;
})();
if(cljs.core.truth_(inst_30409)){
var statearr_30522_30593 = state_30475__$1;
(statearr_30522_30593[(1)] = (26));

} else {
var statearr_30523_30594 = state_30475__$1;
(statearr_30523_30594[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (34))){
var inst_30444 = (state_30475[(2)]);
var state_30475__$1 = state_30475;
if(cljs.core.truth_(inst_30444)){
var statearr_30524_30595 = state_30475__$1;
(statearr_30524_30595[(1)] = (38));

} else {
var statearr_30525_30596 = state_30475__$1;
(statearr_30525_30596[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (17))){
var state_30475__$1 = state_30475;
var statearr_30526_30597 = state_30475__$1;
(statearr_30526_30597[(2)] = recompile_dependents);

(statearr_30526_30597[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (3))){
var state_30475__$1 = state_30475;
var statearr_30527_30598 = state_30475__$1;
(statearr_30527_30598[(2)] = null);

(statearr_30527_30598[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (12))){
var inst_30365 = (state_30475[(2)]);
var state_30475__$1 = state_30475;
var statearr_30528_30599 = state_30475__$1;
(statearr_30528_30599[(2)] = inst_30365);

(statearr_30528_30599[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (2))){
var inst_30327 = (state_30475[(13)]);
var inst_30334 = cljs.core.seq.call(null,inst_30327);
var inst_30335 = inst_30334;
var inst_30336 = null;
var inst_30337 = (0);
var inst_30338 = (0);
var state_30475__$1 = (function (){var statearr_30529 = state_30475;
(statearr_30529[(7)] = inst_30335);

(statearr_30529[(8)] = inst_30337);

(statearr_30529[(9)] = inst_30338);

(statearr_30529[(10)] = inst_30336);

return statearr_30529;
})();
var statearr_30530_30600 = state_30475__$1;
(statearr_30530_30600[(2)] = null);

(statearr_30530_30600[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (23))){
var inst_30392 = (state_30475[(23)]);
var inst_30394 = (state_30475[(26)]);
var inst_30388 = (state_30475[(19)]);
var inst_30396 = (state_30475[(24)]);
var inst_30391 = (state_30475[(25)]);
var inst_30399 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_30401 = (function (){var all_files = inst_30388;
var res_SINGLEQUOTE_ = inst_30391;
var res = inst_30392;
var files_not_loaded = inst_30394;
var dependencies_that_loaded = inst_30396;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30392,inst_30394,inst_30388,inst_30396,inst_30391,inst_30399,state_val_30476,c__27974__auto__,map__30320,map__30320__$1,opts,before_jsload,on_jsload,reload_dependents,map__30321,map__30321__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30400){
var map__30531 = p__30400;
var map__30531__$1 = ((((!((map__30531 == null)))?(((((map__30531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30531.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30531):map__30531);
var request_url = cljs.core.get.call(null,map__30531__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30392,inst_30394,inst_30388,inst_30396,inst_30391,inst_30399,state_val_30476,c__27974__auto__,map__30320,map__30320__$1,opts,before_jsload,on_jsload,reload_dependents,map__30321,map__30321__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30402 = cljs.core.reverse.call(null,inst_30396);
var inst_30403 = cljs.core.map.call(null,inst_30401,inst_30402);
var inst_30404 = cljs.core.pr_str.call(null,inst_30403);
var inst_30405 = figwheel.client.utils.log.call(null,inst_30404);
var state_30475__$1 = (function (){var statearr_30533 = state_30475;
(statearr_30533[(31)] = inst_30399);

return statearr_30533;
})();
var statearr_30534_30601 = state_30475__$1;
(statearr_30534_30601[(2)] = inst_30405);

(statearr_30534_30601[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (35))){
var state_30475__$1 = state_30475;
var statearr_30535_30602 = state_30475__$1;
(statearr_30535_30602[(2)] = true);

(statearr_30535_30602[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (19))){
var inst_30378 = (state_30475[(12)]);
var inst_30384 = figwheel.client.file_reloading.expand_files.call(null,inst_30378);
var state_30475__$1 = state_30475;
var statearr_30536_30603 = state_30475__$1;
(statearr_30536_30603[(2)] = inst_30384);

(statearr_30536_30603[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (11))){
var state_30475__$1 = state_30475;
var statearr_30537_30604 = state_30475__$1;
(statearr_30537_30604[(2)] = null);

(statearr_30537_30604[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (9))){
var inst_30367 = (state_30475[(2)]);
var state_30475__$1 = state_30475;
var statearr_30538_30605 = state_30475__$1;
(statearr_30538_30605[(2)] = inst_30367);

(statearr_30538_30605[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (5))){
var inst_30337 = (state_30475[(8)]);
var inst_30338 = (state_30475[(9)]);
var inst_30340 = (inst_30338 < inst_30337);
var inst_30341 = inst_30340;
var state_30475__$1 = state_30475;
if(cljs.core.truth_(inst_30341)){
var statearr_30539_30606 = state_30475__$1;
(statearr_30539_30606[(1)] = (7));

} else {
var statearr_30540_30607 = state_30475__$1;
(statearr_30540_30607[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (14))){
var inst_30348 = (state_30475[(22)]);
var inst_30357 = cljs.core.first.call(null,inst_30348);
var inst_30358 = figwheel.client.file_reloading.eval_body.call(null,inst_30357,opts);
var inst_30359 = cljs.core.next.call(null,inst_30348);
var inst_30335 = inst_30359;
var inst_30336 = null;
var inst_30337 = (0);
var inst_30338 = (0);
var state_30475__$1 = (function (){var statearr_30541 = state_30475;
(statearr_30541[(7)] = inst_30335);

(statearr_30541[(8)] = inst_30337);

(statearr_30541[(9)] = inst_30338);

(statearr_30541[(10)] = inst_30336);

(statearr_30541[(32)] = inst_30358);

return statearr_30541;
})();
var statearr_30542_30608 = state_30475__$1;
(statearr_30542_30608[(2)] = null);

(statearr_30542_30608[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (45))){
var state_30475__$1 = state_30475;
var statearr_30543_30609 = state_30475__$1;
(statearr_30543_30609[(2)] = null);

(statearr_30543_30609[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (26))){
var inst_30392 = (state_30475[(23)]);
var inst_30394 = (state_30475[(26)]);
var inst_30388 = (state_30475[(19)]);
var inst_30396 = (state_30475[(24)]);
var inst_30391 = (state_30475[(25)]);
var inst_30411 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_30413 = (function (){var all_files = inst_30388;
var res_SINGLEQUOTE_ = inst_30391;
var res = inst_30392;
var files_not_loaded = inst_30394;
var dependencies_that_loaded = inst_30396;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30392,inst_30394,inst_30388,inst_30396,inst_30391,inst_30411,state_val_30476,c__27974__auto__,map__30320,map__30320__$1,opts,before_jsload,on_jsload,reload_dependents,map__30321,map__30321__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30412){
var map__30544 = p__30412;
var map__30544__$1 = ((((!((map__30544 == null)))?(((((map__30544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30544.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30544):map__30544);
var namespace = cljs.core.get.call(null,map__30544__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__30544__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30392,inst_30394,inst_30388,inst_30396,inst_30391,inst_30411,state_val_30476,c__27974__auto__,map__30320,map__30320__$1,opts,before_jsload,on_jsload,reload_dependents,map__30321,map__30321__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30414 = cljs.core.map.call(null,inst_30413,inst_30392);
var inst_30415 = cljs.core.pr_str.call(null,inst_30414);
var inst_30416 = figwheel.client.utils.log.call(null,inst_30415);
var inst_30417 = (function (){var all_files = inst_30388;
var res_SINGLEQUOTE_ = inst_30391;
var res = inst_30392;
var files_not_loaded = inst_30394;
var dependencies_that_loaded = inst_30396;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30392,inst_30394,inst_30388,inst_30396,inst_30391,inst_30411,inst_30413,inst_30414,inst_30415,inst_30416,state_val_30476,c__27974__auto__,map__30320,map__30320__$1,opts,before_jsload,on_jsload,reload_dependents,map__30321,map__30321__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30392,inst_30394,inst_30388,inst_30396,inst_30391,inst_30411,inst_30413,inst_30414,inst_30415,inst_30416,state_val_30476,c__27974__auto__,map__30320,map__30320__$1,opts,before_jsload,on_jsload,reload_dependents,map__30321,map__30321__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30418 = setTimeout(inst_30417,(10));
var state_30475__$1 = (function (){var statearr_30546 = state_30475;
(statearr_30546[(33)] = inst_30416);

(statearr_30546[(34)] = inst_30411);

return statearr_30546;
})();
var statearr_30547_30610 = state_30475__$1;
(statearr_30547_30610[(2)] = inst_30418);

(statearr_30547_30610[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (16))){
var state_30475__$1 = state_30475;
var statearr_30548_30611 = state_30475__$1;
(statearr_30548_30611[(2)] = reload_dependents);

(statearr_30548_30611[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (38))){
var inst_30428 = (state_30475[(16)]);
var inst_30446 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30428);
var state_30475__$1 = state_30475;
var statearr_30549_30612 = state_30475__$1;
(statearr_30549_30612[(2)] = inst_30446);

(statearr_30549_30612[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (30))){
var state_30475__$1 = state_30475;
var statearr_30550_30613 = state_30475__$1;
(statearr_30550_30613[(2)] = null);

(statearr_30550_30613[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (10))){
var inst_30348 = (state_30475[(22)]);
var inst_30350 = cljs.core.chunked_seq_QMARK_.call(null,inst_30348);
var state_30475__$1 = state_30475;
if(inst_30350){
var statearr_30551_30614 = state_30475__$1;
(statearr_30551_30614[(1)] = (13));

} else {
var statearr_30552_30615 = state_30475__$1;
(statearr_30552_30615[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (18))){
var inst_30382 = (state_30475[(2)]);
var state_30475__$1 = state_30475;
if(cljs.core.truth_(inst_30382)){
var statearr_30553_30616 = state_30475__$1;
(statearr_30553_30616[(1)] = (19));

} else {
var statearr_30554_30617 = state_30475__$1;
(statearr_30554_30617[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (42))){
var state_30475__$1 = state_30475;
var statearr_30555_30618 = state_30475__$1;
(statearr_30555_30618[(2)] = null);

(statearr_30555_30618[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (37))){
var inst_30441 = (state_30475[(2)]);
var state_30475__$1 = state_30475;
var statearr_30556_30619 = state_30475__$1;
(statearr_30556_30619[(2)] = inst_30441);

(statearr_30556_30619[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30476 === (8))){
var inst_30335 = (state_30475[(7)]);
var inst_30348 = (state_30475[(22)]);
var inst_30348__$1 = cljs.core.seq.call(null,inst_30335);
var state_30475__$1 = (function (){var statearr_30557 = state_30475;
(statearr_30557[(22)] = inst_30348__$1);

return statearr_30557;
})();
if(inst_30348__$1){
var statearr_30558_30620 = state_30475__$1;
(statearr_30558_30620[(1)] = (10));

} else {
var statearr_30559_30621 = state_30475__$1;
(statearr_30559_30621[(1)] = (11));

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
});})(c__27974__auto__,map__30320,map__30320__$1,opts,before_jsload,on_jsload,reload_dependents,map__30321,map__30321__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__27884__auto__,c__27974__auto__,map__30320,map__30320__$1,opts,before_jsload,on_jsload,reload_dependents,map__30321,map__30321__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27885__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27885__auto____0 = (function (){
var statearr_30560 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30560[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__27885__auto__);

(statearr_30560[(1)] = (1));

return statearr_30560;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27885__auto____1 = (function (state_30475){
while(true){
var ret_value__27886__auto__ = (function (){try{while(true){
var result__27887__auto__ = switch__27884__auto__.call(null,state_30475);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27887__auto__;
}
break;
}
}catch (e30561){if((e30561 instanceof Object)){
var ex__27888__auto__ = e30561;
var statearr_30562_30622 = state_30475;
(statearr_30562_30622[(5)] = ex__27888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30475);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30561;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30623 = state_30475;
state_30475 = G__30623;
continue;
} else {
return ret_value__27886__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__27885__auto__ = function(state_30475){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27885__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27885__auto____1.call(this,state_30475);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27885__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27885__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27885__auto__;
})()
;})(switch__27884__auto__,c__27974__auto__,map__30320,map__30320__$1,opts,before_jsload,on_jsload,reload_dependents,map__30321,map__30321__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__27976__auto__ = (function (){var statearr_30563 = f__27975__auto__.call(null);
(statearr_30563[(6)] = c__27974__auto__);

return statearr_30563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27976__auto__);
});})(c__27974__auto__,map__30320,map__30320__$1,opts,before_jsload,on_jsload,reload_dependents,map__30321,map__30321__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__27974__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__30626,link){
var map__30627 = p__30626;
var map__30627__$1 = ((((!((map__30627 == null)))?(((((map__30627.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30627.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30627):map__30627);
var file = cljs.core.get.call(null,map__30627__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__30627,map__30627__$1,file){
return (function (p1__30624_SHARP_,p2__30625_SHARP_){
if(cljs.core._EQ_.call(null,p1__30624_SHARP_,p2__30625_SHARP_)){
return p1__30624_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__30627,map__30627__$1,file))
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
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__30630){
var map__30631 = p__30630;
var map__30631__$1 = ((((!((map__30631 == null)))?(((((map__30631.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30631.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30631):map__30631);
var match_length = cljs.core.get.call(null,map__30631__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__30631__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__30629_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__30629_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__30633_SHARP_,p2__30634_SHARP_){
return cljs.core.assoc.call(null,p1__30633_SHARP_,cljs.core.get.call(null,p2__30634_SHARP_,key),p2__30634_SHARP_);
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
var loaded_f_datas_30635 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_30635);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_30635);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__30636,p__30637){
var map__30638 = p__30636;
var map__30638__$1 = ((((!((map__30638 == null)))?(((((map__30638.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30638.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30638):map__30638);
var on_cssload = cljs.core.get.call(null,map__30638__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__30639 = p__30637;
var map__30639__$1 = ((((!((map__30639 == null)))?(((((map__30639.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30639.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30639):map__30639);
var files_msg = map__30639__$1;
var files = cljs.core.get.call(null,map__30639__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1525376047236
