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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__29068_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__29068_SHARP_));
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
var seq__29069 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__29070 = null;
var count__29071 = (0);
var i__29072 = (0);
while(true){
if((i__29072 < count__29071)){
var n = cljs.core._nth.call(null,chunk__29070,i__29072);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__29073 = seq__29069;
var G__29074 = chunk__29070;
var G__29075 = count__29071;
var G__29076 = (i__29072 + (1));
seq__29069 = G__29073;
chunk__29070 = G__29074;
count__29071 = G__29075;
i__29072 = G__29076;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__29069);
if(temp__5457__auto__){
var seq__29069__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29069__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__29069__$1);
var G__29077 = cljs.core.chunk_rest.call(null,seq__29069__$1);
var G__29078 = c__4319__auto__;
var G__29079 = cljs.core.count.call(null,c__4319__auto__);
var G__29080 = (0);
seq__29069 = G__29077;
chunk__29070 = G__29078;
count__29071 = G__29079;
i__29072 = G__29080;
continue;
} else {
var n = cljs.core.first.call(null,seq__29069__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__29081 = cljs.core.next.call(null,seq__29069__$1);
var G__29082 = null;
var G__29083 = (0);
var G__29084 = (0);
seq__29069 = G__29081;
chunk__29070 = G__29082;
count__29071 = G__29083;
i__29072 = G__29084;
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
return cljs.core.some.call(null,(function (p__29085){
var vec__29086 = p__29085;
var _ = cljs.core.nth.call(null,vec__29086,(0),null);
var v = cljs.core.nth.call(null,vec__29086,(1),null);
var and__3911__auto__ = v;
if(cljs.core.truth_(and__3911__auto__)){
return v.call(null,dep);
} else {
return and__3911__auto__;
}
}),cljs.core.filter.call(null,(function (p__29089){
var vec__29090 = p__29089;
var k = cljs.core.nth.call(null,vec__29090,(0),null);
var v = cljs.core.nth.call(null,vec__29090,(1),null);
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

var seq__29102_29110 = cljs.core.seq.call(null,deps);
var chunk__29103_29111 = null;
var count__29104_29112 = (0);
var i__29105_29113 = (0);
while(true){
if((i__29105_29113 < count__29104_29112)){
var dep_29114 = cljs.core._nth.call(null,chunk__29103_29111,i__29105_29113);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_29114;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_29114));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_29114,(depth + (1)),state);
} else {
}


var G__29115 = seq__29102_29110;
var G__29116 = chunk__29103_29111;
var G__29117 = count__29104_29112;
var G__29118 = (i__29105_29113 + (1));
seq__29102_29110 = G__29115;
chunk__29103_29111 = G__29116;
count__29104_29112 = G__29117;
i__29105_29113 = G__29118;
continue;
} else {
var temp__5457__auto___29119 = cljs.core.seq.call(null,seq__29102_29110);
if(temp__5457__auto___29119){
var seq__29102_29120__$1 = temp__5457__auto___29119;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29102_29120__$1)){
var c__4319__auto___29121 = cljs.core.chunk_first.call(null,seq__29102_29120__$1);
var G__29122 = cljs.core.chunk_rest.call(null,seq__29102_29120__$1);
var G__29123 = c__4319__auto___29121;
var G__29124 = cljs.core.count.call(null,c__4319__auto___29121);
var G__29125 = (0);
seq__29102_29110 = G__29122;
chunk__29103_29111 = G__29123;
count__29104_29112 = G__29124;
i__29105_29113 = G__29125;
continue;
} else {
var dep_29126 = cljs.core.first.call(null,seq__29102_29120__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_29126;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_29126));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_29126,(depth + (1)),state);
} else {
}


var G__29127 = cljs.core.next.call(null,seq__29102_29120__$1);
var G__29128 = null;
var G__29129 = (0);
var G__29130 = (0);
seq__29102_29110 = G__29127;
chunk__29103_29111 = G__29128;
count__29104_29112 = G__29129;
i__29105_29113 = G__29130;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__29106){
var vec__29107 = p__29106;
var seq__29108 = cljs.core.seq.call(null,vec__29107);
var first__29109 = cljs.core.first.call(null,seq__29108);
var seq__29108__$1 = cljs.core.next.call(null,seq__29108);
var x = first__29109;
var xs = seq__29108__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__29107,seq__29108,first__29109,seq__29108__$1,x,xs,get_deps__$1){
return (function (p1__29093_SHARP_){
return clojure.set.difference.call(null,p1__29093_SHARP_,x);
});})(vec__29107,seq__29108,first__29109,seq__29108__$1,x,xs,get_deps__$1))
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
var seq__29131 = cljs.core.seq.call(null,provides);
var chunk__29132 = null;
var count__29133 = (0);
var i__29134 = (0);
while(true){
if((i__29134 < count__29133)){
var prov = cljs.core._nth.call(null,chunk__29132,i__29134);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29135_29143 = cljs.core.seq.call(null,requires);
var chunk__29136_29144 = null;
var count__29137_29145 = (0);
var i__29138_29146 = (0);
while(true){
if((i__29138_29146 < count__29137_29145)){
var req_29147 = cljs.core._nth.call(null,chunk__29136_29144,i__29138_29146);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29147,prov);


var G__29148 = seq__29135_29143;
var G__29149 = chunk__29136_29144;
var G__29150 = count__29137_29145;
var G__29151 = (i__29138_29146 + (1));
seq__29135_29143 = G__29148;
chunk__29136_29144 = G__29149;
count__29137_29145 = G__29150;
i__29138_29146 = G__29151;
continue;
} else {
var temp__5457__auto___29152 = cljs.core.seq.call(null,seq__29135_29143);
if(temp__5457__auto___29152){
var seq__29135_29153__$1 = temp__5457__auto___29152;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29135_29153__$1)){
var c__4319__auto___29154 = cljs.core.chunk_first.call(null,seq__29135_29153__$1);
var G__29155 = cljs.core.chunk_rest.call(null,seq__29135_29153__$1);
var G__29156 = c__4319__auto___29154;
var G__29157 = cljs.core.count.call(null,c__4319__auto___29154);
var G__29158 = (0);
seq__29135_29143 = G__29155;
chunk__29136_29144 = G__29156;
count__29137_29145 = G__29157;
i__29138_29146 = G__29158;
continue;
} else {
var req_29159 = cljs.core.first.call(null,seq__29135_29153__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29159,prov);


var G__29160 = cljs.core.next.call(null,seq__29135_29153__$1);
var G__29161 = null;
var G__29162 = (0);
var G__29163 = (0);
seq__29135_29143 = G__29160;
chunk__29136_29144 = G__29161;
count__29137_29145 = G__29162;
i__29138_29146 = G__29163;
continue;
}
} else {
}
}
break;
}


var G__29164 = seq__29131;
var G__29165 = chunk__29132;
var G__29166 = count__29133;
var G__29167 = (i__29134 + (1));
seq__29131 = G__29164;
chunk__29132 = G__29165;
count__29133 = G__29166;
i__29134 = G__29167;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__29131);
if(temp__5457__auto__){
var seq__29131__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29131__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__29131__$1);
var G__29168 = cljs.core.chunk_rest.call(null,seq__29131__$1);
var G__29169 = c__4319__auto__;
var G__29170 = cljs.core.count.call(null,c__4319__auto__);
var G__29171 = (0);
seq__29131 = G__29168;
chunk__29132 = G__29169;
count__29133 = G__29170;
i__29134 = G__29171;
continue;
} else {
var prov = cljs.core.first.call(null,seq__29131__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29139_29172 = cljs.core.seq.call(null,requires);
var chunk__29140_29173 = null;
var count__29141_29174 = (0);
var i__29142_29175 = (0);
while(true){
if((i__29142_29175 < count__29141_29174)){
var req_29176 = cljs.core._nth.call(null,chunk__29140_29173,i__29142_29175);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29176,prov);


var G__29177 = seq__29139_29172;
var G__29178 = chunk__29140_29173;
var G__29179 = count__29141_29174;
var G__29180 = (i__29142_29175 + (1));
seq__29139_29172 = G__29177;
chunk__29140_29173 = G__29178;
count__29141_29174 = G__29179;
i__29142_29175 = G__29180;
continue;
} else {
var temp__5457__auto___29181__$1 = cljs.core.seq.call(null,seq__29139_29172);
if(temp__5457__auto___29181__$1){
var seq__29139_29182__$1 = temp__5457__auto___29181__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29139_29182__$1)){
var c__4319__auto___29183 = cljs.core.chunk_first.call(null,seq__29139_29182__$1);
var G__29184 = cljs.core.chunk_rest.call(null,seq__29139_29182__$1);
var G__29185 = c__4319__auto___29183;
var G__29186 = cljs.core.count.call(null,c__4319__auto___29183);
var G__29187 = (0);
seq__29139_29172 = G__29184;
chunk__29140_29173 = G__29185;
count__29141_29174 = G__29186;
i__29142_29175 = G__29187;
continue;
} else {
var req_29188 = cljs.core.first.call(null,seq__29139_29182__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29188,prov);


var G__29189 = cljs.core.next.call(null,seq__29139_29182__$1);
var G__29190 = null;
var G__29191 = (0);
var G__29192 = (0);
seq__29139_29172 = G__29189;
chunk__29140_29173 = G__29190;
count__29141_29174 = G__29191;
i__29142_29175 = G__29192;
continue;
}
} else {
}
}
break;
}


var G__29193 = cljs.core.next.call(null,seq__29131__$1);
var G__29194 = null;
var G__29195 = (0);
var G__29196 = (0);
seq__29131 = G__29193;
chunk__29132 = G__29194;
count__29133 = G__29195;
i__29134 = G__29196;
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
var seq__29197_29201 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__29198_29202 = null;
var count__29199_29203 = (0);
var i__29200_29204 = (0);
while(true){
if((i__29200_29204 < count__29199_29203)){
var ns_29205 = cljs.core._nth.call(null,chunk__29198_29202,i__29200_29204);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29205);


var G__29206 = seq__29197_29201;
var G__29207 = chunk__29198_29202;
var G__29208 = count__29199_29203;
var G__29209 = (i__29200_29204 + (1));
seq__29197_29201 = G__29206;
chunk__29198_29202 = G__29207;
count__29199_29203 = G__29208;
i__29200_29204 = G__29209;
continue;
} else {
var temp__5457__auto___29210 = cljs.core.seq.call(null,seq__29197_29201);
if(temp__5457__auto___29210){
var seq__29197_29211__$1 = temp__5457__auto___29210;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29197_29211__$1)){
var c__4319__auto___29212 = cljs.core.chunk_first.call(null,seq__29197_29211__$1);
var G__29213 = cljs.core.chunk_rest.call(null,seq__29197_29211__$1);
var G__29214 = c__4319__auto___29212;
var G__29215 = cljs.core.count.call(null,c__4319__auto___29212);
var G__29216 = (0);
seq__29197_29201 = G__29213;
chunk__29198_29202 = G__29214;
count__29199_29203 = G__29215;
i__29200_29204 = G__29216;
continue;
} else {
var ns_29217 = cljs.core.first.call(null,seq__29197_29211__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29217);


var G__29218 = cljs.core.next.call(null,seq__29197_29211__$1);
var G__29219 = null;
var G__29220 = (0);
var G__29221 = (0);
seq__29197_29201 = G__29218;
chunk__29198_29202 = G__29219;
count__29199_29203 = G__29220;
i__29200_29204 = G__29221;
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
var G__29222__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__29222 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29223__i = 0, G__29223__a = new Array(arguments.length -  0);
while (G__29223__i < G__29223__a.length) {G__29223__a[G__29223__i] = arguments[G__29223__i + 0]; ++G__29223__i;}
  args = new cljs.core.IndexedSeq(G__29223__a,0,null);
} 
return G__29222__delegate.call(this,args);};
G__29222.cljs$lang$maxFixedArity = 0;
G__29222.cljs$lang$applyTo = (function (arglist__29224){
var args = cljs.core.seq(arglist__29224);
return G__29222__delegate(args);
});
G__29222.cljs$core$IFn$_invoke$arity$variadic = G__29222__delegate;
return G__29222;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__29225_SHARP_,p2__29226_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29225_SHARP_)].join('')),p2__29226_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__29227_SHARP_,p2__29228_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29227_SHARP_)].join(''),p2__29228_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__29229 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__29229.addCallback(((function (G__29229){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__29229))
);

G__29229.addErrback(((function (G__29229){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__29229))
);

return G__29229;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e29230){if((e29230 instanceof Error)){
var e = e29230;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29230;

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
}catch (e29231){if((e29231 instanceof Error)){
var e = e29231;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29231;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__29232 = cljs.core._EQ_;
var expr__29233 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__29232.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__29233))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__29232.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__29233))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__29232.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__29233))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__29232,expr__29233){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__29232,expr__29233))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__29235,callback){
var map__29236 = p__29235;
var map__29236__$1 = ((((!((map__29236 == null)))?(((((map__29236.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29236.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29236):map__29236);
var file_msg = map__29236__$1;
var request_url = cljs.core.get.call(null,map__29236__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3922__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__29236,map__29236__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__29236,map__29236__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__26964__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26964__auto__){
return (function (){
var f__26965__auto__ = (function (){var switch__26874__auto__ = ((function (c__26964__auto__){
return (function (state_29274){
var state_val_29275 = (state_29274[(1)]);
if((state_val_29275 === (7))){
var inst_29270 = (state_29274[(2)]);
var state_29274__$1 = state_29274;
var statearr_29276_29302 = state_29274__$1;
(statearr_29276_29302[(2)] = inst_29270);

(statearr_29276_29302[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29275 === (1))){
var state_29274__$1 = state_29274;
var statearr_29277_29303 = state_29274__$1;
(statearr_29277_29303[(2)] = null);

(statearr_29277_29303[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29275 === (4))){
var inst_29240 = (state_29274[(7)]);
var inst_29240__$1 = (state_29274[(2)]);
var state_29274__$1 = (function (){var statearr_29278 = state_29274;
(statearr_29278[(7)] = inst_29240__$1);

return statearr_29278;
})();
if(cljs.core.truth_(inst_29240__$1)){
var statearr_29279_29304 = state_29274__$1;
(statearr_29279_29304[(1)] = (5));

} else {
var statearr_29280_29305 = state_29274__$1;
(statearr_29280_29305[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29275 === (15))){
var inst_29255 = (state_29274[(8)]);
var inst_29253 = (state_29274[(9)]);
var inst_29257 = inst_29255.call(null,inst_29253);
var state_29274__$1 = state_29274;
var statearr_29281_29306 = state_29274__$1;
(statearr_29281_29306[(2)] = inst_29257);

(statearr_29281_29306[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29275 === (13))){
var inst_29264 = (state_29274[(2)]);
var state_29274__$1 = state_29274;
var statearr_29282_29307 = state_29274__$1;
(statearr_29282_29307[(2)] = inst_29264);

(statearr_29282_29307[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29275 === (6))){
var state_29274__$1 = state_29274;
var statearr_29283_29308 = state_29274__$1;
(statearr_29283_29308[(2)] = null);

(statearr_29283_29308[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29275 === (17))){
var inst_29261 = (state_29274[(2)]);
var state_29274__$1 = state_29274;
var statearr_29284_29309 = state_29274__$1;
(statearr_29284_29309[(2)] = inst_29261);

(statearr_29284_29309[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29275 === (3))){
var inst_29272 = (state_29274[(2)]);
var state_29274__$1 = state_29274;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29274__$1,inst_29272);
} else {
if((state_val_29275 === (12))){
var state_29274__$1 = state_29274;
var statearr_29285_29310 = state_29274__$1;
(statearr_29285_29310[(2)] = null);

(statearr_29285_29310[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29275 === (2))){
var state_29274__$1 = state_29274;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29274__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_29275 === (11))){
var inst_29245 = (state_29274[(10)]);
var inst_29251 = figwheel.client.file_reloading.blocking_load.call(null,inst_29245);
var state_29274__$1 = state_29274;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29274__$1,(14),inst_29251);
} else {
if((state_val_29275 === (9))){
var inst_29245 = (state_29274[(10)]);
var state_29274__$1 = state_29274;
if(cljs.core.truth_(inst_29245)){
var statearr_29286_29311 = state_29274__$1;
(statearr_29286_29311[(1)] = (11));

} else {
var statearr_29287_29312 = state_29274__$1;
(statearr_29287_29312[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29275 === (5))){
var inst_29246 = (state_29274[(11)]);
var inst_29240 = (state_29274[(7)]);
var inst_29245 = cljs.core.nth.call(null,inst_29240,(0),null);
var inst_29246__$1 = cljs.core.nth.call(null,inst_29240,(1),null);
var state_29274__$1 = (function (){var statearr_29288 = state_29274;
(statearr_29288[(11)] = inst_29246__$1);

(statearr_29288[(10)] = inst_29245);

return statearr_29288;
})();
if(cljs.core.truth_(inst_29246__$1)){
var statearr_29289_29313 = state_29274__$1;
(statearr_29289_29313[(1)] = (8));

} else {
var statearr_29290_29314 = state_29274__$1;
(statearr_29290_29314[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29275 === (14))){
var inst_29245 = (state_29274[(10)]);
var inst_29255 = (state_29274[(8)]);
var inst_29253 = (state_29274[(2)]);
var inst_29254 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_29255__$1 = cljs.core.get.call(null,inst_29254,inst_29245);
var state_29274__$1 = (function (){var statearr_29291 = state_29274;
(statearr_29291[(8)] = inst_29255__$1);

(statearr_29291[(9)] = inst_29253);

return statearr_29291;
})();
if(cljs.core.truth_(inst_29255__$1)){
var statearr_29292_29315 = state_29274__$1;
(statearr_29292_29315[(1)] = (15));

} else {
var statearr_29293_29316 = state_29274__$1;
(statearr_29293_29316[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29275 === (16))){
var inst_29253 = (state_29274[(9)]);
var inst_29259 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_29253);
var state_29274__$1 = state_29274;
var statearr_29294_29317 = state_29274__$1;
(statearr_29294_29317[(2)] = inst_29259);

(statearr_29294_29317[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29275 === (10))){
var inst_29266 = (state_29274[(2)]);
var state_29274__$1 = (function (){var statearr_29295 = state_29274;
(statearr_29295[(12)] = inst_29266);

return statearr_29295;
})();
var statearr_29296_29318 = state_29274__$1;
(statearr_29296_29318[(2)] = null);

(statearr_29296_29318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29275 === (8))){
var inst_29246 = (state_29274[(11)]);
var inst_29248 = eval(inst_29246);
var state_29274__$1 = state_29274;
var statearr_29297_29319 = state_29274__$1;
(statearr_29297_29319[(2)] = inst_29248);

(statearr_29297_29319[(1)] = (10));


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
});})(c__26964__auto__))
;
return ((function (switch__26874__auto__,c__26964__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__26875__auto__ = null;
var figwheel$client$file_reloading$state_machine__26875__auto____0 = (function (){
var statearr_29298 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29298[(0)] = figwheel$client$file_reloading$state_machine__26875__auto__);

(statearr_29298[(1)] = (1));

return statearr_29298;
});
var figwheel$client$file_reloading$state_machine__26875__auto____1 = (function (state_29274){
while(true){
var ret_value__26876__auto__ = (function (){try{while(true){
var result__26877__auto__ = switch__26874__auto__.call(null,state_29274);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26877__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26877__auto__;
}
break;
}
}catch (e29299){if((e29299 instanceof Object)){
var ex__26878__auto__ = e29299;
var statearr_29300_29320 = state_29274;
(statearr_29300_29320[(5)] = ex__26878__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29274);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29299;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26876__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29321 = state_29274;
state_29274 = G__29321;
continue;
} else {
return ret_value__26876__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__26875__auto__ = function(state_29274){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__26875__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__26875__auto____1.call(this,state_29274);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__26875__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__26875__auto____0;
figwheel$client$file_reloading$state_machine__26875__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__26875__auto____1;
return figwheel$client$file_reloading$state_machine__26875__auto__;
})()
;})(switch__26874__auto__,c__26964__auto__))
})();
var state__26966__auto__ = (function (){var statearr_29301 = f__26965__auto__.call(null);
(statearr_29301[(6)] = c__26964__auto__);

return statearr_29301;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26966__auto__);
});})(c__26964__auto__))
);

return c__26964__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__29323 = arguments.length;
switch (G__29323) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__29325,callback){
var map__29326 = p__29325;
var map__29326__$1 = ((((!((map__29326 == null)))?(((((map__29326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29326.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29326):map__29326);
var file_msg = map__29326__$1;
var namespace = cljs.core.get.call(null,map__29326__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__29326,map__29326__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__29326,map__29326__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__29328){
var map__29329 = p__29328;
var map__29329__$1 = ((((!((map__29329 == null)))?(((((map__29329.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29329.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29329):map__29329);
var file_msg = map__29329__$1;
var namespace = cljs.core.get.call(null,map__29329__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__29331){
var map__29332 = p__29331;
var map__29332__$1 = ((((!((map__29332 == null)))?(((((map__29332.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29332.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29332):map__29332);
var file_msg = map__29332__$1;
var namespace = cljs.core.get.call(null,map__29332__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__29334,callback){
var map__29335 = p__29334;
var map__29335__$1 = ((((!((map__29335 == null)))?(((((map__29335.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29335.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29335):map__29335);
var file_msg = map__29335__$1;
var request_url = cljs.core.get.call(null,map__29335__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__29335__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__26964__auto___29385 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26964__auto___29385,out){
return (function (){
var f__26965__auto__ = (function (){var switch__26874__auto__ = ((function (c__26964__auto___29385,out){
return (function (state_29370){
var state_val_29371 = (state_29370[(1)]);
if((state_val_29371 === (1))){
var inst_29344 = cljs.core.seq.call(null,files);
var inst_29345 = cljs.core.first.call(null,inst_29344);
var inst_29346 = cljs.core.next.call(null,inst_29344);
var inst_29347 = files;
var state_29370__$1 = (function (){var statearr_29372 = state_29370;
(statearr_29372[(7)] = inst_29346);

(statearr_29372[(8)] = inst_29347);

(statearr_29372[(9)] = inst_29345);

return statearr_29372;
})();
var statearr_29373_29386 = state_29370__$1;
(statearr_29373_29386[(2)] = null);

(statearr_29373_29386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29371 === (2))){
var inst_29353 = (state_29370[(10)]);
var inst_29347 = (state_29370[(8)]);
var inst_29352 = cljs.core.seq.call(null,inst_29347);
var inst_29353__$1 = cljs.core.first.call(null,inst_29352);
var inst_29354 = cljs.core.next.call(null,inst_29352);
var inst_29355 = (inst_29353__$1 == null);
var inst_29356 = cljs.core.not.call(null,inst_29355);
var state_29370__$1 = (function (){var statearr_29374 = state_29370;
(statearr_29374[(11)] = inst_29354);

(statearr_29374[(10)] = inst_29353__$1);

return statearr_29374;
})();
if(inst_29356){
var statearr_29375_29387 = state_29370__$1;
(statearr_29375_29387[(1)] = (4));

} else {
var statearr_29376_29388 = state_29370__$1;
(statearr_29376_29388[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29371 === (3))){
var inst_29368 = (state_29370[(2)]);
var state_29370__$1 = state_29370;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29370__$1,inst_29368);
} else {
if((state_val_29371 === (4))){
var inst_29353 = (state_29370[(10)]);
var inst_29358 = figwheel.client.file_reloading.reload_js_file.call(null,inst_29353);
var state_29370__$1 = state_29370;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29370__$1,(7),inst_29358);
} else {
if((state_val_29371 === (5))){
var inst_29364 = cljs.core.async.close_BANG_.call(null,out);
var state_29370__$1 = state_29370;
var statearr_29377_29389 = state_29370__$1;
(statearr_29377_29389[(2)] = inst_29364);

(statearr_29377_29389[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29371 === (6))){
var inst_29366 = (state_29370[(2)]);
var state_29370__$1 = state_29370;
var statearr_29378_29390 = state_29370__$1;
(statearr_29378_29390[(2)] = inst_29366);

(statearr_29378_29390[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29371 === (7))){
var inst_29354 = (state_29370[(11)]);
var inst_29360 = (state_29370[(2)]);
var inst_29361 = cljs.core.async.put_BANG_.call(null,out,inst_29360);
var inst_29347 = inst_29354;
var state_29370__$1 = (function (){var statearr_29379 = state_29370;
(statearr_29379[(8)] = inst_29347);

(statearr_29379[(12)] = inst_29361);

return statearr_29379;
})();
var statearr_29380_29391 = state_29370__$1;
(statearr_29380_29391[(2)] = null);

(statearr_29380_29391[(1)] = (2));


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
});})(c__26964__auto___29385,out))
;
return ((function (switch__26874__auto__,c__26964__auto___29385,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26875__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26875__auto____0 = (function (){
var statearr_29381 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29381[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26875__auto__);

(statearr_29381[(1)] = (1));

return statearr_29381;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26875__auto____1 = (function (state_29370){
while(true){
var ret_value__26876__auto__ = (function (){try{while(true){
var result__26877__auto__ = switch__26874__auto__.call(null,state_29370);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26877__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26877__auto__;
}
break;
}
}catch (e29382){if((e29382 instanceof Object)){
var ex__26878__auto__ = e29382;
var statearr_29383_29392 = state_29370;
(statearr_29383_29392[(5)] = ex__26878__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29370);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29382;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26876__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29393 = state_29370;
state_29370 = G__29393;
continue;
} else {
return ret_value__26876__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26875__auto__ = function(state_29370){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26875__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26875__auto____1.call(this,state_29370);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26875__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26875__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26875__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26875__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26875__auto__;
})()
;})(switch__26874__auto__,c__26964__auto___29385,out))
})();
var state__26966__auto__ = (function (){var statearr_29384 = f__26965__auto__.call(null);
(statearr_29384[(6)] = c__26964__auto___29385);

return statearr_29384;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26966__auto__);
});})(c__26964__auto___29385,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__29394,opts){
var map__29395 = p__29394;
var map__29395__$1 = ((((!((map__29395 == null)))?(((((map__29395.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29395.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29395):map__29395);
var eval_body = cljs.core.get.call(null,map__29395__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__29395__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e29397){var e = e29397;
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
return (function (p1__29398_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29398_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__29399){
var vec__29400 = p__29399;
var k = cljs.core.nth.call(null,vec__29400,(0),null);
var v = cljs.core.nth.call(null,vec__29400,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__29403){
var vec__29404 = p__29403;
var k = cljs.core.nth.call(null,vec__29404,(0),null);
var v = cljs.core.nth.call(null,vec__29404,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__29410,p__29411){
var map__29412 = p__29410;
var map__29412__$1 = ((((!((map__29412 == null)))?(((((map__29412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29412.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29412):map__29412);
var opts = map__29412__$1;
var before_jsload = cljs.core.get.call(null,map__29412__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__29412__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__29412__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__29413 = p__29411;
var map__29413__$1 = ((((!((map__29413 == null)))?(((((map__29413.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29413.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29413):map__29413);
var msg = map__29413__$1;
var files = cljs.core.get.call(null,map__29413__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__29413__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__29413__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__26964__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26964__auto__,map__29412,map__29412__$1,opts,before_jsload,on_jsload,reload_dependents,map__29413,map__29413__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__26965__auto__ = (function (){var switch__26874__auto__ = ((function (c__26964__auto__,map__29412,map__29412__$1,opts,before_jsload,on_jsload,reload_dependents,map__29413,map__29413__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_29567){
var state_val_29568 = (state_29567[(1)]);
if((state_val_29568 === (7))){
var inst_29427 = (state_29567[(7)]);
var inst_29430 = (state_29567[(8)]);
var inst_29429 = (state_29567[(9)]);
var inst_29428 = (state_29567[(10)]);
var inst_29435 = cljs.core._nth.call(null,inst_29428,inst_29430);
var inst_29436 = figwheel.client.file_reloading.eval_body.call(null,inst_29435,opts);
var inst_29437 = (inst_29430 + (1));
var tmp29569 = inst_29427;
var tmp29570 = inst_29429;
var tmp29571 = inst_29428;
var inst_29427__$1 = tmp29569;
var inst_29428__$1 = tmp29571;
var inst_29429__$1 = tmp29570;
var inst_29430__$1 = inst_29437;
var state_29567__$1 = (function (){var statearr_29572 = state_29567;
(statearr_29572[(7)] = inst_29427__$1);

(statearr_29572[(11)] = inst_29436);

(statearr_29572[(8)] = inst_29430__$1);

(statearr_29572[(9)] = inst_29429__$1);

(statearr_29572[(10)] = inst_29428__$1);

return statearr_29572;
})();
var statearr_29573_29656 = state_29567__$1;
(statearr_29573_29656[(2)] = null);

(statearr_29573_29656[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (20))){
var inst_29470 = (state_29567[(12)]);
var inst_29478 = figwheel.client.file_reloading.sort_files.call(null,inst_29470);
var state_29567__$1 = state_29567;
var statearr_29574_29657 = state_29567__$1;
(statearr_29574_29657[(2)] = inst_29478);

(statearr_29574_29657[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (27))){
var state_29567__$1 = state_29567;
var statearr_29575_29658 = state_29567__$1;
(statearr_29575_29658[(2)] = null);

(statearr_29575_29658[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (1))){
var inst_29419 = (state_29567[(13)]);
var inst_29416 = before_jsload.call(null,files);
var inst_29417 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_29418 = (function (){return ((function (inst_29419,inst_29416,inst_29417,state_val_29568,c__26964__auto__,map__29412,map__29412__$1,opts,before_jsload,on_jsload,reload_dependents,map__29413,map__29413__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29407_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29407_SHARP_);
});
;})(inst_29419,inst_29416,inst_29417,state_val_29568,c__26964__auto__,map__29412,map__29412__$1,opts,before_jsload,on_jsload,reload_dependents,map__29413,map__29413__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29419__$1 = cljs.core.filter.call(null,inst_29418,files);
var inst_29420 = cljs.core.not_empty.call(null,inst_29419__$1);
var state_29567__$1 = (function (){var statearr_29576 = state_29567;
(statearr_29576[(14)] = inst_29417);

(statearr_29576[(15)] = inst_29416);

(statearr_29576[(13)] = inst_29419__$1);

return statearr_29576;
})();
if(cljs.core.truth_(inst_29420)){
var statearr_29577_29659 = state_29567__$1;
(statearr_29577_29659[(1)] = (2));

} else {
var statearr_29578_29660 = state_29567__$1;
(statearr_29578_29660[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (24))){
var state_29567__$1 = state_29567;
var statearr_29579_29661 = state_29567__$1;
(statearr_29579_29661[(2)] = null);

(statearr_29579_29661[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (39))){
var inst_29520 = (state_29567[(16)]);
var state_29567__$1 = state_29567;
var statearr_29580_29662 = state_29567__$1;
(statearr_29580_29662[(2)] = inst_29520);

(statearr_29580_29662[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (46))){
var inst_29562 = (state_29567[(2)]);
var state_29567__$1 = state_29567;
var statearr_29581_29663 = state_29567__$1;
(statearr_29581_29663[(2)] = inst_29562);

(statearr_29581_29663[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (4))){
var inst_29464 = (state_29567[(2)]);
var inst_29465 = cljs.core.List.EMPTY;
var inst_29466 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_29465);
var inst_29467 = (function (){return ((function (inst_29464,inst_29465,inst_29466,state_val_29568,c__26964__auto__,map__29412,map__29412__$1,opts,before_jsload,on_jsload,reload_dependents,map__29413,map__29413__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29408_SHARP_){
var and__3911__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29408_SHARP_);
if(cljs.core.truth_(and__3911__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29408_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__29408_SHARP_))));
} else {
return and__3911__auto__;
}
});
;})(inst_29464,inst_29465,inst_29466,state_val_29568,c__26964__auto__,map__29412,map__29412__$1,opts,before_jsload,on_jsload,reload_dependents,map__29413,map__29413__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29468 = cljs.core.filter.call(null,inst_29467,files);
var inst_29469 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_29470 = cljs.core.concat.call(null,inst_29468,inst_29469);
var state_29567__$1 = (function (){var statearr_29582 = state_29567;
(statearr_29582[(12)] = inst_29470);

(statearr_29582[(17)] = inst_29464);

(statearr_29582[(18)] = inst_29466);

return statearr_29582;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_29583_29664 = state_29567__$1;
(statearr_29583_29664[(1)] = (16));

} else {
var statearr_29584_29665 = state_29567__$1;
(statearr_29584_29665[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (15))){
var inst_29454 = (state_29567[(2)]);
var state_29567__$1 = state_29567;
var statearr_29585_29666 = state_29567__$1;
(statearr_29585_29666[(2)] = inst_29454);

(statearr_29585_29666[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (21))){
var inst_29480 = (state_29567[(19)]);
var inst_29480__$1 = (state_29567[(2)]);
var inst_29481 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_29480__$1);
var state_29567__$1 = (function (){var statearr_29586 = state_29567;
(statearr_29586[(19)] = inst_29480__$1);

return statearr_29586;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29567__$1,(22),inst_29481);
} else {
if((state_val_29568 === (31))){
var inst_29565 = (state_29567[(2)]);
var state_29567__$1 = state_29567;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29567__$1,inst_29565);
} else {
if((state_val_29568 === (32))){
var inst_29520 = (state_29567[(16)]);
var inst_29525 = inst_29520.cljs$lang$protocol_mask$partition0$;
var inst_29526 = (inst_29525 & (64));
var inst_29527 = inst_29520.cljs$core$ISeq$;
var inst_29528 = (cljs.core.PROTOCOL_SENTINEL === inst_29527);
var inst_29529 = ((inst_29526) || (inst_29528));
var state_29567__$1 = state_29567;
if(cljs.core.truth_(inst_29529)){
var statearr_29587_29667 = state_29567__$1;
(statearr_29587_29667[(1)] = (35));

} else {
var statearr_29588_29668 = state_29567__$1;
(statearr_29588_29668[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (40))){
var inst_29542 = (state_29567[(20)]);
var inst_29541 = (state_29567[(2)]);
var inst_29542__$1 = cljs.core.get.call(null,inst_29541,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_29543 = cljs.core.get.call(null,inst_29541,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_29544 = cljs.core.not_empty.call(null,inst_29542__$1);
var state_29567__$1 = (function (){var statearr_29589 = state_29567;
(statearr_29589[(20)] = inst_29542__$1);

(statearr_29589[(21)] = inst_29543);

return statearr_29589;
})();
if(cljs.core.truth_(inst_29544)){
var statearr_29590_29669 = state_29567__$1;
(statearr_29590_29669[(1)] = (41));

} else {
var statearr_29591_29670 = state_29567__$1;
(statearr_29591_29670[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (33))){
var state_29567__$1 = state_29567;
var statearr_29592_29671 = state_29567__$1;
(statearr_29592_29671[(2)] = false);

(statearr_29592_29671[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (13))){
var inst_29440 = (state_29567[(22)]);
var inst_29444 = cljs.core.chunk_first.call(null,inst_29440);
var inst_29445 = cljs.core.chunk_rest.call(null,inst_29440);
var inst_29446 = cljs.core.count.call(null,inst_29444);
var inst_29427 = inst_29445;
var inst_29428 = inst_29444;
var inst_29429 = inst_29446;
var inst_29430 = (0);
var state_29567__$1 = (function (){var statearr_29593 = state_29567;
(statearr_29593[(7)] = inst_29427);

(statearr_29593[(8)] = inst_29430);

(statearr_29593[(9)] = inst_29429);

(statearr_29593[(10)] = inst_29428);

return statearr_29593;
})();
var statearr_29594_29672 = state_29567__$1;
(statearr_29594_29672[(2)] = null);

(statearr_29594_29672[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (22))){
var inst_29484 = (state_29567[(23)]);
var inst_29488 = (state_29567[(24)]);
var inst_29480 = (state_29567[(19)]);
var inst_29483 = (state_29567[(25)]);
var inst_29483__$1 = (state_29567[(2)]);
var inst_29484__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29483__$1);
var inst_29485 = (function (){var all_files = inst_29480;
var res_SINGLEQUOTE_ = inst_29483__$1;
var res = inst_29484__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_29484,inst_29488,inst_29480,inst_29483,inst_29483__$1,inst_29484__$1,state_val_29568,c__26964__auto__,map__29412,map__29412__$1,opts,before_jsload,on_jsload,reload_dependents,map__29413,map__29413__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29409_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__29409_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_29484,inst_29488,inst_29480,inst_29483,inst_29483__$1,inst_29484__$1,state_val_29568,c__26964__auto__,map__29412,map__29412__$1,opts,before_jsload,on_jsload,reload_dependents,map__29413,map__29413__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29486 = cljs.core.filter.call(null,inst_29485,inst_29483__$1);
var inst_29487 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_29488__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29487);
var inst_29489 = cljs.core.not_empty.call(null,inst_29488__$1);
var state_29567__$1 = (function (){var statearr_29595 = state_29567;
(statearr_29595[(26)] = inst_29486);

(statearr_29595[(23)] = inst_29484__$1);

(statearr_29595[(24)] = inst_29488__$1);

(statearr_29595[(25)] = inst_29483__$1);

return statearr_29595;
})();
if(cljs.core.truth_(inst_29489)){
var statearr_29596_29673 = state_29567__$1;
(statearr_29596_29673[(1)] = (23));

} else {
var statearr_29597_29674 = state_29567__$1;
(statearr_29597_29674[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (36))){
var state_29567__$1 = state_29567;
var statearr_29598_29675 = state_29567__$1;
(statearr_29598_29675[(2)] = false);

(statearr_29598_29675[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (41))){
var inst_29542 = (state_29567[(20)]);
var inst_29546 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_29547 = cljs.core.map.call(null,inst_29546,inst_29542);
var inst_29548 = cljs.core.pr_str.call(null,inst_29547);
var inst_29549 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29548)].join('');
var inst_29550 = figwheel.client.utils.log.call(null,inst_29549);
var state_29567__$1 = state_29567;
var statearr_29599_29676 = state_29567__$1;
(statearr_29599_29676[(2)] = inst_29550);

(statearr_29599_29676[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (43))){
var inst_29543 = (state_29567[(21)]);
var inst_29553 = (state_29567[(2)]);
var inst_29554 = cljs.core.not_empty.call(null,inst_29543);
var state_29567__$1 = (function (){var statearr_29600 = state_29567;
(statearr_29600[(27)] = inst_29553);

return statearr_29600;
})();
if(cljs.core.truth_(inst_29554)){
var statearr_29601_29677 = state_29567__$1;
(statearr_29601_29677[(1)] = (44));

} else {
var statearr_29602_29678 = state_29567__$1;
(statearr_29602_29678[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (29))){
var inst_29486 = (state_29567[(26)]);
var inst_29484 = (state_29567[(23)]);
var inst_29488 = (state_29567[(24)]);
var inst_29480 = (state_29567[(19)]);
var inst_29520 = (state_29567[(16)]);
var inst_29483 = (state_29567[(25)]);
var inst_29516 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_29519 = (function (){var all_files = inst_29480;
var res_SINGLEQUOTE_ = inst_29483;
var res = inst_29484;
var files_not_loaded = inst_29486;
var dependencies_that_loaded = inst_29488;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29486,inst_29484,inst_29488,inst_29480,inst_29520,inst_29483,inst_29516,state_val_29568,c__26964__auto__,map__29412,map__29412__$1,opts,before_jsload,on_jsload,reload_dependents,map__29413,map__29413__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29518){
var map__29603 = p__29518;
var map__29603__$1 = ((((!((map__29603 == null)))?(((((map__29603.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29603.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29603):map__29603);
var namespace = cljs.core.get.call(null,map__29603__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29486,inst_29484,inst_29488,inst_29480,inst_29520,inst_29483,inst_29516,state_val_29568,c__26964__auto__,map__29412,map__29412__$1,opts,before_jsload,on_jsload,reload_dependents,map__29413,map__29413__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29520__$1 = cljs.core.group_by.call(null,inst_29519,inst_29486);
var inst_29522 = (inst_29520__$1 == null);
var inst_29523 = cljs.core.not.call(null,inst_29522);
var state_29567__$1 = (function (){var statearr_29605 = state_29567;
(statearr_29605[(16)] = inst_29520__$1);

(statearr_29605[(28)] = inst_29516);

return statearr_29605;
})();
if(inst_29523){
var statearr_29606_29679 = state_29567__$1;
(statearr_29606_29679[(1)] = (32));

} else {
var statearr_29607_29680 = state_29567__$1;
(statearr_29607_29680[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (44))){
var inst_29543 = (state_29567[(21)]);
var inst_29556 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29543);
var inst_29557 = cljs.core.pr_str.call(null,inst_29556);
var inst_29558 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29557)].join('');
var inst_29559 = figwheel.client.utils.log.call(null,inst_29558);
var state_29567__$1 = state_29567;
var statearr_29608_29681 = state_29567__$1;
(statearr_29608_29681[(2)] = inst_29559);

(statearr_29608_29681[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (6))){
var inst_29461 = (state_29567[(2)]);
var state_29567__$1 = state_29567;
var statearr_29609_29682 = state_29567__$1;
(statearr_29609_29682[(2)] = inst_29461);

(statearr_29609_29682[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (28))){
var inst_29486 = (state_29567[(26)]);
var inst_29513 = (state_29567[(2)]);
var inst_29514 = cljs.core.not_empty.call(null,inst_29486);
var state_29567__$1 = (function (){var statearr_29610 = state_29567;
(statearr_29610[(29)] = inst_29513);

return statearr_29610;
})();
if(cljs.core.truth_(inst_29514)){
var statearr_29611_29683 = state_29567__$1;
(statearr_29611_29683[(1)] = (29));

} else {
var statearr_29612_29684 = state_29567__$1;
(statearr_29612_29684[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (25))){
var inst_29484 = (state_29567[(23)]);
var inst_29500 = (state_29567[(2)]);
var inst_29501 = cljs.core.not_empty.call(null,inst_29484);
var state_29567__$1 = (function (){var statearr_29613 = state_29567;
(statearr_29613[(30)] = inst_29500);

return statearr_29613;
})();
if(cljs.core.truth_(inst_29501)){
var statearr_29614_29685 = state_29567__$1;
(statearr_29614_29685[(1)] = (26));

} else {
var statearr_29615_29686 = state_29567__$1;
(statearr_29615_29686[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (34))){
var inst_29536 = (state_29567[(2)]);
var state_29567__$1 = state_29567;
if(cljs.core.truth_(inst_29536)){
var statearr_29616_29687 = state_29567__$1;
(statearr_29616_29687[(1)] = (38));

} else {
var statearr_29617_29688 = state_29567__$1;
(statearr_29617_29688[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (17))){
var state_29567__$1 = state_29567;
var statearr_29618_29689 = state_29567__$1;
(statearr_29618_29689[(2)] = recompile_dependents);

(statearr_29618_29689[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (3))){
var state_29567__$1 = state_29567;
var statearr_29619_29690 = state_29567__$1;
(statearr_29619_29690[(2)] = null);

(statearr_29619_29690[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (12))){
var inst_29457 = (state_29567[(2)]);
var state_29567__$1 = state_29567;
var statearr_29620_29691 = state_29567__$1;
(statearr_29620_29691[(2)] = inst_29457);

(statearr_29620_29691[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (2))){
var inst_29419 = (state_29567[(13)]);
var inst_29426 = cljs.core.seq.call(null,inst_29419);
var inst_29427 = inst_29426;
var inst_29428 = null;
var inst_29429 = (0);
var inst_29430 = (0);
var state_29567__$1 = (function (){var statearr_29621 = state_29567;
(statearr_29621[(7)] = inst_29427);

(statearr_29621[(8)] = inst_29430);

(statearr_29621[(9)] = inst_29429);

(statearr_29621[(10)] = inst_29428);

return statearr_29621;
})();
var statearr_29622_29692 = state_29567__$1;
(statearr_29622_29692[(2)] = null);

(statearr_29622_29692[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (23))){
var inst_29486 = (state_29567[(26)]);
var inst_29484 = (state_29567[(23)]);
var inst_29488 = (state_29567[(24)]);
var inst_29480 = (state_29567[(19)]);
var inst_29483 = (state_29567[(25)]);
var inst_29491 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_29493 = (function (){var all_files = inst_29480;
var res_SINGLEQUOTE_ = inst_29483;
var res = inst_29484;
var files_not_loaded = inst_29486;
var dependencies_that_loaded = inst_29488;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29486,inst_29484,inst_29488,inst_29480,inst_29483,inst_29491,state_val_29568,c__26964__auto__,map__29412,map__29412__$1,opts,before_jsload,on_jsload,reload_dependents,map__29413,map__29413__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29492){
var map__29623 = p__29492;
var map__29623__$1 = ((((!((map__29623 == null)))?(((((map__29623.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29623.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29623):map__29623);
var request_url = cljs.core.get.call(null,map__29623__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29486,inst_29484,inst_29488,inst_29480,inst_29483,inst_29491,state_val_29568,c__26964__auto__,map__29412,map__29412__$1,opts,before_jsload,on_jsload,reload_dependents,map__29413,map__29413__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29494 = cljs.core.reverse.call(null,inst_29488);
var inst_29495 = cljs.core.map.call(null,inst_29493,inst_29494);
var inst_29496 = cljs.core.pr_str.call(null,inst_29495);
var inst_29497 = figwheel.client.utils.log.call(null,inst_29496);
var state_29567__$1 = (function (){var statearr_29625 = state_29567;
(statearr_29625[(31)] = inst_29491);

return statearr_29625;
})();
var statearr_29626_29693 = state_29567__$1;
(statearr_29626_29693[(2)] = inst_29497);

(statearr_29626_29693[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (35))){
var state_29567__$1 = state_29567;
var statearr_29627_29694 = state_29567__$1;
(statearr_29627_29694[(2)] = true);

(statearr_29627_29694[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (19))){
var inst_29470 = (state_29567[(12)]);
var inst_29476 = figwheel.client.file_reloading.expand_files.call(null,inst_29470);
var state_29567__$1 = state_29567;
var statearr_29628_29695 = state_29567__$1;
(statearr_29628_29695[(2)] = inst_29476);

(statearr_29628_29695[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (11))){
var state_29567__$1 = state_29567;
var statearr_29629_29696 = state_29567__$1;
(statearr_29629_29696[(2)] = null);

(statearr_29629_29696[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (9))){
var inst_29459 = (state_29567[(2)]);
var state_29567__$1 = state_29567;
var statearr_29630_29697 = state_29567__$1;
(statearr_29630_29697[(2)] = inst_29459);

(statearr_29630_29697[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (5))){
var inst_29430 = (state_29567[(8)]);
var inst_29429 = (state_29567[(9)]);
var inst_29432 = (inst_29430 < inst_29429);
var inst_29433 = inst_29432;
var state_29567__$1 = state_29567;
if(cljs.core.truth_(inst_29433)){
var statearr_29631_29698 = state_29567__$1;
(statearr_29631_29698[(1)] = (7));

} else {
var statearr_29632_29699 = state_29567__$1;
(statearr_29632_29699[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (14))){
var inst_29440 = (state_29567[(22)]);
var inst_29449 = cljs.core.first.call(null,inst_29440);
var inst_29450 = figwheel.client.file_reloading.eval_body.call(null,inst_29449,opts);
var inst_29451 = cljs.core.next.call(null,inst_29440);
var inst_29427 = inst_29451;
var inst_29428 = null;
var inst_29429 = (0);
var inst_29430 = (0);
var state_29567__$1 = (function (){var statearr_29633 = state_29567;
(statearr_29633[(7)] = inst_29427);

(statearr_29633[(32)] = inst_29450);

(statearr_29633[(8)] = inst_29430);

(statearr_29633[(9)] = inst_29429);

(statearr_29633[(10)] = inst_29428);

return statearr_29633;
})();
var statearr_29634_29700 = state_29567__$1;
(statearr_29634_29700[(2)] = null);

(statearr_29634_29700[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (45))){
var state_29567__$1 = state_29567;
var statearr_29635_29701 = state_29567__$1;
(statearr_29635_29701[(2)] = null);

(statearr_29635_29701[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (26))){
var inst_29486 = (state_29567[(26)]);
var inst_29484 = (state_29567[(23)]);
var inst_29488 = (state_29567[(24)]);
var inst_29480 = (state_29567[(19)]);
var inst_29483 = (state_29567[(25)]);
var inst_29503 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_29505 = (function (){var all_files = inst_29480;
var res_SINGLEQUOTE_ = inst_29483;
var res = inst_29484;
var files_not_loaded = inst_29486;
var dependencies_that_loaded = inst_29488;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29486,inst_29484,inst_29488,inst_29480,inst_29483,inst_29503,state_val_29568,c__26964__auto__,map__29412,map__29412__$1,opts,before_jsload,on_jsload,reload_dependents,map__29413,map__29413__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29504){
var map__29636 = p__29504;
var map__29636__$1 = ((((!((map__29636 == null)))?(((((map__29636.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29636.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29636):map__29636);
var namespace = cljs.core.get.call(null,map__29636__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__29636__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29486,inst_29484,inst_29488,inst_29480,inst_29483,inst_29503,state_val_29568,c__26964__auto__,map__29412,map__29412__$1,opts,before_jsload,on_jsload,reload_dependents,map__29413,map__29413__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29506 = cljs.core.map.call(null,inst_29505,inst_29484);
var inst_29507 = cljs.core.pr_str.call(null,inst_29506);
var inst_29508 = figwheel.client.utils.log.call(null,inst_29507);
var inst_29509 = (function (){var all_files = inst_29480;
var res_SINGLEQUOTE_ = inst_29483;
var res = inst_29484;
var files_not_loaded = inst_29486;
var dependencies_that_loaded = inst_29488;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29486,inst_29484,inst_29488,inst_29480,inst_29483,inst_29503,inst_29505,inst_29506,inst_29507,inst_29508,state_val_29568,c__26964__auto__,map__29412,map__29412__$1,opts,before_jsload,on_jsload,reload_dependents,map__29413,map__29413__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29486,inst_29484,inst_29488,inst_29480,inst_29483,inst_29503,inst_29505,inst_29506,inst_29507,inst_29508,state_val_29568,c__26964__auto__,map__29412,map__29412__$1,opts,before_jsload,on_jsload,reload_dependents,map__29413,map__29413__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29510 = setTimeout(inst_29509,(10));
var state_29567__$1 = (function (){var statearr_29638 = state_29567;
(statearr_29638[(33)] = inst_29503);

(statearr_29638[(34)] = inst_29508);

return statearr_29638;
})();
var statearr_29639_29702 = state_29567__$1;
(statearr_29639_29702[(2)] = inst_29510);

(statearr_29639_29702[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (16))){
var state_29567__$1 = state_29567;
var statearr_29640_29703 = state_29567__$1;
(statearr_29640_29703[(2)] = reload_dependents);

(statearr_29640_29703[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (38))){
var inst_29520 = (state_29567[(16)]);
var inst_29538 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29520);
var state_29567__$1 = state_29567;
var statearr_29641_29704 = state_29567__$1;
(statearr_29641_29704[(2)] = inst_29538);

(statearr_29641_29704[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (30))){
var state_29567__$1 = state_29567;
var statearr_29642_29705 = state_29567__$1;
(statearr_29642_29705[(2)] = null);

(statearr_29642_29705[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (10))){
var inst_29440 = (state_29567[(22)]);
var inst_29442 = cljs.core.chunked_seq_QMARK_.call(null,inst_29440);
var state_29567__$1 = state_29567;
if(inst_29442){
var statearr_29643_29706 = state_29567__$1;
(statearr_29643_29706[(1)] = (13));

} else {
var statearr_29644_29707 = state_29567__$1;
(statearr_29644_29707[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (18))){
var inst_29474 = (state_29567[(2)]);
var state_29567__$1 = state_29567;
if(cljs.core.truth_(inst_29474)){
var statearr_29645_29708 = state_29567__$1;
(statearr_29645_29708[(1)] = (19));

} else {
var statearr_29646_29709 = state_29567__$1;
(statearr_29646_29709[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (42))){
var state_29567__$1 = state_29567;
var statearr_29647_29710 = state_29567__$1;
(statearr_29647_29710[(2)] = null);

(statearr_29647_29710[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (37))){
var inst_29533 = (state_29567[(2)]);
var state_29567__$1 = state_29567;
var statearr_29648_29711 = state_29567__$1;
(statearr_29648_29711[(2)] = inst_29533);

(statearr_29648_29711[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29568 === (8))){
var inst_29427 = (state_29567[(7)]);
var inst_29440 = (state_29567[(22)]);
var inst_29440__$1 = cljs.core.seq.call(null,inst_29427);
var state_29567__$1 = (function (){var statearr_29649 = state_29567;
(statearr_29649[(22)] = inst_29440__$1);

return statearr_29649;
})();
if(inst_29440__$1){
var statearr_29650_29712 = state_29567__$1;
(statearr_29650_29712[(1)] = (10));

} else {
var statearr_29651_29713 = state_29567__$1;
(statearr_29651_29713[(1)] = (11));

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
});})(c__26964__auto__,map__29412,map__29412__$1,opts,before_jsload,on_jsload,reload_dependents,map__29413,map__29413__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__26874__auto__,c__26964__auto__,map__29412,map__29412__$1,opts,before_jsload,on_jsload,reload_dependents,map__29413,map__29413__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26875__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26875__auto____0 = (function (){
var statearr_29652 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29652[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__26875__auto__);

(statearr_29652[(1)] = (1));

return statearr_29652;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26875__auto____1 = (function (state_29567){
while(true){
var ret_value__26876__auto__ = (function (){try{while(true){
var result__26877__auto__ = switch__26874__auto__.call(null,state_29567);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26877__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26877__auto__;
}
break;
}
}catch (e29653){if((e29653 instanceof Object)){
var ex__26878__auto__ = e29653;
var statearr_29654_29714 = state_29567;
(statearr_29654_29714[(5)] = ex__26878__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29567);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29653;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26876__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29715 = state_29567;
state_29567 = G__29715;
continue;
} else {
return ret_value__26876__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__26875__auto__ = function(state_29567){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26875__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26875__auto____1.call(this,state_29567);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__26875__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26875__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__26875__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26875__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26875__auto__;
})()
;})(switch__26874__auto__,c__26964__auto__,map__29412,map__29412__$1,opts,before_jsload,on_jsload,reload_dependents,map__29413,map__29413__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__26966__auto__ = (function (){var statearr_29655 = f__26965__auto__.call(null);
(statearr_29655[(6)] = c__26964__auto__);

return statearr_29655;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26966__auto__);
});})(c__26964__auto__,map__29412,map__29412__$1,opts,before_jsload,on_jsload,reload_dependents,map__29413,map__29413__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__26964__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__29718,link){
var map__29719 = p__29718;
var map__29719__$1 = ((((!((map__29719 == null)))?(((((map__29719.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29719.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29719):map__29719);
var file = cljs.core.get.call(null,map__29719__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__29719,map__29719__$1,file){
return (function (p1__29716_SHARP_,p2__29717_SHARP_){
if(cljs.core._EQ_.call(null,p1__29716_SHARP_,p2__29717_SHARP_)){
return p1__29716_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__29719,map__29719__$1,file))
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
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__29722){
var map__29723 = p__29722;
var map__29723__$1 = ((((!((map__29723 == null)))?(((((map__29723.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29723.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29723):map__29723);
var match_length = cljs.core.get.call(null,map__29723__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__29723__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__29721_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__29721_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__29725_SHARP_,p2__29726_SHARP_){
return cljs.core.assoc.call(null,p1__29725_SHARP_,cljs.core.get.call(null,p2__29726_SHARP_,key),p2__29726_SHARP_);
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
var loaded_f_datas_29727 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_29727);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_29727);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__29728,p__29729){
var map__29730 = p__29728;
var map__29730__$1 = ((((!((map__29730 == null)))?(((((map__29730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29730.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29730):map__29730);
var on_cssload = cljs.core.get.call(null,map__29730__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__29731 = p__29729;
var map__29731__$1 = ((((!((map__29731 == null)))?(((((map__29731.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29731.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29731):map__29731);
var files_msg = map__29731__$1;
var files = cljs.core.get.call(null,map__29731__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1525295746370
