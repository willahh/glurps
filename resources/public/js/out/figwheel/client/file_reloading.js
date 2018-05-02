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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__70134_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__70134_SHARP_));
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
var seq__70135 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__70136 = null;
var count__70137 = (0);
var i__70138 = (0);
while(true){
if((i__70138 < count__70137)){
var n = cljs.core._nth.call(null,chunk__70136,i__70138);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__70139 = seq__70135;
var G__70140 = chunk__70136;
var G__70141 = count__70137;
var G__70142 = (i__70138 + (1));
seq__70135 = G__70139;
chunk__70136 = G__70140;
count__70137 = G__70141;
i__70138 = G__70142;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__70135);
if(temp__5457__auto__){
var seq__70135__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__70135__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__70135__$1);
var G__70143 = cljs.core.chunk_rest.call(null,seq__70135__$1);
var G__70144 = c__4319__auto__;
var G__70145 = cljs.core.count.call(null,c__4319__auto__);
var G__70146 = (0);
seq__70135 = G__70143;
chunk__70136 = G__70144;
count__70137 = G__70145;
i__70138 = G__70146;
continue;
} else {
var n = cljs.core.first.call(null,seq__70135__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__70147 = cljs.core.next.call(null,seq__70135__$1);
var G__70148 = null;
var G__70149 = (0);
var G__70150 = (0);
seq__70135 = G__70147;
chunk__70136 = G__70148;
count__70137 = G__70149;
i__70138 = G__70150;
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
return cljs.core.some.call(null,(function (p__70151){
var vec__70152 = p__70151;
var _ = cljs.core.nth.call(null,vec__70152,(0),null);
var v = cljs.core.nth.call(null,vec__70152,(1),null);
var and__3911__auto__ = v;
if(cljs.core.truth_(and__3911__auto__)){
return v.call(null,dep);
} else {
return and__3911__auto__;
}
}),cljs.core.filter.call(null,(function (p__70155){
var vec__70156 = p__70155;
var k = cljs.core.nth.call(null,vec__70156,(0),null);
var v = cljs.core.nth.call(null,vec__70156,(1),null);
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

var seq__70168_70176 = cljs.core.seq.call(null,deps);
var chunk__70169_70177 = null;
var count__70170_70178 = (0);
var i__70171_70179 = (0);
while(true){
if((i__70171_70179 < count__70170_70178)){
var dep_70180 = cljs.core._nth.call(null,chunk__70169_70177,i__70171_70179);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_70180;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_70180));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_70180,(depth + (1)),state);
} else {
}


var G__70181 = seq__70168_70176;
var G__70182 = chunk__70169_70177;
var G__70183 = count__70170_70178;
var G__70184 = (i__70171_70179 + (1));
seq__70168_70176 = G__70181;
chunk__70169_70177 = G__70182;
count__70170_70178 = G__70183;
i__70171_70179 = G__70184;
continue;
} else {
var temp__5457__auto___70185 = cljs.core.seq.call(null,seq__70168_70176);
if(temp__5457__auto___70185){
var seq__70168_70186__$1 = temp__5457__auto___70185;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__70168_70186__$1)){
var c__4319__auto___70187 = cljs.core.chunk_first.call(null,seq__70168_70186__$1);
var G__70188 = cljs.core.chunk_rest.call(null,seq__70168_70186__$1);
var G__70189 = c__4319__auto___70187;
var G__70190 = cljs.core.count.call(null,c__4319__auto___70187);
var G__70191 = (0);
seq__70168_70176 = G__70188;
chunk__70169_70177 = G__70189;
count__70170_70178 = G__70190;
i__70171_70179 = G__70191;
continue;
} else {
var dep_70192 = cljs.core.first.call(null,seq__70168_70186__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_70192;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_70192));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_70192,(depth + (1)),state);
} else {
}


var G__70193 = cljs.core.next.call(null,seq__70168_70186__$1);
var G__70194 = null;
var G__70195 = (0);
var G__70196 = (0);
seq__70168_70176 = G__70193;
chunk__70169_70177 = G__70194;
count__70170_70178 = G__70195;
i__70171_70179 = G__70196;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__70172){
var vec__70173 = p__70172;
var seq__70174 = cljs.core.seq.call(null,vec__70173);
var first__70175 = cljs.core.first.call(null,seq__70174);
var seq__70174__$1 = cljs.core.next.call(null,seq__70174);
var x = first__70175;
var xs = seq__70174__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__70173,seq__70174,first__70175,seq__70174__$1,x,xs,get_deps__$1){
return (function (p1__70159_SHARP_){
return clojure.set.difference.call(null,p1__70159_SHARP_,x);
});})(vec__70173,seq__70174,first__70175,seq__70174__$1,x,xs,get_deps__$1))
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
var seq__70197 = cljs.core.seq.call(null,provides);
var chunk__70198 = null;
var count__70199 = (0);
var i__70200 = (0);
while(true){
if((i__70200 < count__70199)){
var prov = cljs.core._nth.call(null,chunk__70198,i__70200);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__70201_70209 = cljs.core.seq.call(null,requires);
var chunk__70202_70210 = null;
var count__70203_70211 = (0);
var i__70204_70212 = (0);
while(true){
if((i__70204_70212 < count__70203_70211)){
var req_70213 = cljs.core._nth.call(null,chunk__70202_70210,i__70204_70212);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_70213,prov);


var G__70214 = seq__70201_70209;
var G__70215 = chunk__70202_70210;
var G__70216 = count__70203_70211;
var G__70217 = (i__70204_70212 + (1));
seq__70201_70209 = G__70214;
chunk__70202_70210 = G__70215;
count__70203_70211 = G__70216;
i__70204_70212 = G__70217;
continue;
} else {
var temp__5457__auto___70218 = cljs.core.seq.call(null,seq__70201_70209);
if(temp__5457__auto___70218){
var seq__70201_70219__$1 = temp__5457__auto___70218;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__70201_70219__$1)){
var c__4319__auto___70220 = cljs.core.chunk_first.call(null,seq__70201_70219__$1);
var G__70221 = cljs.core.chunk_rest.call(null,seq__70201_70219__$1);
var G__70222 = c__4319__auto___70220;
var G__70223 = cljs.core.count.call(null,c__4319__auto___70220);
var G__70224 = (0);
seq__70201_70209 = G__70221;
chunk__70202_70210 = G__70222;
count__70203_70211 = G__70223;
i__70204_70212 = G__70224;
continue;
} else {
var req_70225 = cljs.core.first.call(null,seq__70201_70219__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_70225,prov);


var G__70226 = cljs.core.next.call(null,seq__70201_70219__$1);
var G__70227 = null;
var G__70228 = (0);
var G__70229 = (0);
seq__70201_70209 = G__70226;
chunk__70202_70210 = G__70227;
count__70203_70211 = G__70228;
i__70204_70212 = G__70229;
continue;
}
} else {
}
}
break;
}


var G__70230 = seq__70197;
var G__70231 = chunk__70198;
var G__70232 = count__70199;
var G__70233 = (i__70200 + (1));
seq__70197 = G__70230;
chunk__70198 = G__70231;
count__70199 = G__70232;
i__70200 = G__70233;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__70197);
if(temp__5457__auto__){
var seq__70197__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__70197__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__70197__$1);
var G__70234 = cljs.core.chunk_rest.call(null,seq__70197__$1);
var G__70235 = c__4319__auto__;
var G__70236 = cljs.core.count.call(null,c__4319__auto__);
var G__70237 = (0);
seq__70197 = G__70234;
chunk__70198 = G__70235;
count__70199 = G__70236;
i__70200 = G__70237;
continue;
} else {
var prov = cljs.core.first.call(null,seq__70197__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__70205_70238 = cljs.core.seq.call(null,requires);
var chunk__70206_70239 = null;
var count__70207_70240 = (0);
var i__70208_70241 = (0);
while(true){
if((i__70208_70241 < count__70207_70240)){
var req_70242 = cljs.core._nth.call(null,chunk__70206_70239,i__70208_70241);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_70242,prov);


var G__70243 = seq__70205_70238;
var G__70244 = chunk__70206_70239;
var G__70245 = count__70207_70240;
var G__70246 = (i__70208_70241 + (1));
seq__70205_70238 = G__70243;
chunk__70206_70239 = G__70244;
count__70207_70240 = G__70245;
i__70208_70241 = G__70246;
continue;
} else {
var temp__5457__auto___70247__$1 = cljs.core.seq.call(null,seq__70205_70238);
if(temp__5457__auto___70247__$1){
var seq__70205_70248__$1 = temp__5457__auto___70247__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__70205_70248__$1)){
var c__4319__auto___70249 = cljs.core.chunk_first.call(null,seq__70205_70248__$1);
var G__70250 = cljs.core.chunk_rest.call(null,seq__70205_70248__$1);
var G__70251 = c__4319__auto___70249;
var G__70252 = cljs.core.count.call(null,c__4319__auto___70249);
var G__70253 = (0);
seq__70205_70238 = G__70250;
chunk__70206_70239 = G__70251;
count__70207_70240 = G__70252;
i__70208_70241 = G__70253;
continue;
} else {
var req_70254 = cljs.core.first.call(null,seq__70205_70248__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_70254,prov);


var G__70255 = cljs.core.next.call(null,seq__70205_70248__$1);
var G__70256 = null;
var G__70257 = (0);
var G__70258 = (0);
seq__70205_70238 = G__70255;
chunk__70206_70239 = G__70256;
count__70207_70240 = G__70257;
i__70208_70241 = G__70258;
continue;
}
} else {
}
}
break;
}


var G__70259 = cljs.core.next.call(null,seq__70197__$1);
var G__70260 = null;
var G__70261 = (0);
var G__70262 = (0);
seq__70197 = G__70259;
chunk__70198 = G__70260;
count__70199 = G__70261;
i__70200 = G__70262;
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
var seq__70263_70267 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__70264_70268 = null;
var count__70265_70269 = (0);
var i__70266_70270 = (0);
while(true){
if((i__70266_70270 < count__70265_70269)){
var ns_70271 = cljs.core._nth.call(null,chunk__70264_70268,i__70266_70270);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_70271);


var G__70272 = seq__70263_70267;
var G__70273 = chunk__70264_70268;
var G__70274 = count__70265_70269;
var G__70275 = (i__70266_70270 + (1));
seq__70263_70267 = G__70272;
chunk__70264_70268 = G__70273;
count__70265_70269 = G__70274;
i__70266_70270 = G__70275;
continue;
} else {
var temp__5457__auto___70276 = cljs.core.seq.call(null,seq__70263_70267);
if(temp__5457__auto___70276){
var seq__70263_70277__$1 = temp__5457__auto___70276;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__70263_70277__$1)){
var c__4319__auto___70278 = cljs.core.chunk_first.call(null,seq__70263_70277__$1);
var G__70279 = cljs.core.chunk_rest.call(null,seq__70263_70277__$1);
var G__70280 = c__4319__auto___70278;
var G__70281 = cljs.core.count.call(null,c__4319__auto___70278);
var G__70282 = (0);
seq__70263_70267 = G__70279;
chunk__70264_70268 = G__70280;
count__70265_70269 = G__70281;
i__70266_70270 = G__70282;
continue;
} else {
var ns_70283 = cljs.core.first.call(null,seq__70263_70277__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_70283);


var G__70284 = cljs.core.next.call(null,seq__70263_70277__$1);
var G__70285 = null;
var G__70286 = (0);
var G__70287 = (0);
seq__70263_70267 = G__70284;
chunk__70264_70268 = G__70285;
count__70265_70269 = G__70286;
i__70266_70270 = G__70287;
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
var G__70288__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__70288 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__70289__i = 0, G__70289__a = new Array(arguments.length -  0);
while (G__70289__i < G__70289__a.length) {G__70289__a[G__70289__i] = arguments[G__70289__i + 0]; ++G__70289__i;}
  args = new cljs.core.IndexedSeq(G__70289__a,0,null);
} 
return G__70288__delegate.call(this,args);};
G__70288.cljs$lang$maxFixedArity = 0;
G__70288.cljs$lang$applyTo = (function (arglist__70290){
var args = cljs.core.seq(arglist__70290);
return G__70288__delegate(args);
});
G__70288.cljs$core$IFn$_invoke$arity$variadic = G__70288__delegate;
return G__70288;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__70291_SHARP_,p2__70292_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__70291_SHARP_)].join('')),p2__70292_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__70293_SHARP_,p2__70294_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__70293_SHARP_)].join(''),p2__70294_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__70295 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__70295.addCallback(((function (G__70295){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__70295))
);

G__70295.addErrback(((function (G__70295){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__70295))
);

return G__70295;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e70296){if((e70296 instanceof Error)){
var e = e70296;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e70296;

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
}catch (e70297){if((e70297 instanceof Error)){
var e = e70297;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e70297;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__70298 = cljs.core._EQ_;
var expr__70299 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__70298.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__70299))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__70298.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__70299))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__70298.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__70299))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__70298,expr__70299){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__70298,expr__70299))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__70301,callback){
var map__70302 = p__70301;
var map__70302__$1 = ((((!((map__70302 == null)))?(((((map__70302.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70302.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70302):map__70302);
var file_msg = map__70302__$1;
var request_url = cljs.core.get.call(null,map__70302__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3922__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__70302,map__70302__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__70302,map__70302__$1,file_msg,request_url))
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
return (function (state_70340){
var state_val_70341 = (state_70340[(1)]);
if((state_val_70341 === (7))){
var inst_70336 = (state_70340[(2)]);
var state_70340__$1 = state_70340;
var statearr_70342_70368 = state_70340__$1;
(statearr_70342_70368[(2)] = inst_70336);

(statearr_70342_70368[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70341 === (1))){
var state_70340__$1 = state_70340;
var statearr_70343_70369 = state_70340__$1;
(statearr_70343_70369[(2)] = null);

(statearr_70343_70369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70341 === (4))){
var inst_70306 = (state_70340[(7)]);
var inst_70306__$1 = (state_70340[(2)]);
var state_70340__$1 = (function (){var statearr_70344 = state_70340;
(statearr_70344[(7)] = inst_70306__$1);

return statearr_70344;
})();
if(cljs.core.truth_(inst_70306__$1)){
var statearr_70345_70370 = state_70340__$1;
(statearr_70345_70370[(1)] = (5));

} else {
var statearr_70346_70371 = state_70340__$1;
(statearr_70346_70371[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70341 === (15))){
var inst_70319 = (state_70340[(8)]);
var inst_70321 = (state_70340[(9)]);
var inst_70323 = inst_70321.call(null,inst_70319);
var state_70340__$1 = state_70340;
var statearr_70347_70372 = state_70340__$1;
(statearr_70347_70372[(2)] = inst_70323);

(statearr_70347_70372[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70341 === (13))){
var inst_70330 = (state_70340[(2)]);
var state_70340__$1 = state_70340;
var statearr_70348_70373 = state_70340__$1;
(statearr_70348_70373[(2)] = inst_70330);

(statearr_70348_70373[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70341 === (6))){
var state_70340__$1 = state_70340;
var statearr_70349_70374 = state_70340__$1;
(statearr_70349_70374[(2)] = null);

(statearr_70349_70374[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70341 === (17))){
var inst_70327 = (state_70340[(2)]);
var state_70340__$1 = state_70340;
var statearr_70350_70375 = state_70340__$1;
(statearr_70350_70375[(2)] = inst_70327);

(statearr_70350_70375[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70341 === (3))){
var inst_70338 = (state_70340[(2)]);
var state_70340__$1 = state_70340;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_70340__$1,inst_70338);
} else {
if((state_val_70341 === (12))){
var state_70340__$1 = state_70340;
var statearr_70351_70376 = state_70340__$1;
(statearr_70351_70376[(2)] = null);

(statearr_70351_70376[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70341 === (2))){
var state_70340__$1 = state_70340;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_70340__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_70341 === (11))){
var inst_70311 = (state_70340[(10)]);
var inst_70317 = figwheel.client.file_reloading.blocking_load.call(null,inst_70311);
var state_70340__$1 = state_70340;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_70340__$1,(14),inst_70317);
} else {
if((state_val_70341 === (9))){
var inst_70311 = (state_70340[(10)]);
var state_70340__$1 = state_70340;
if(cljs.core.truth_(inst_70311)){
var statearr_70352_70377 = state_70340__$1;
(statearr_70352_70377[(1)] = (11));

} else {
var statearr_70353_70378 = state_70340__$1;
(statearr_70353_70378[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70341 === (5))){
var inst_70306 = (state_70340[(7)]);
var inst_70312 = (state_70340[(11)]);
var inst_70311 = cljs.core.nth.call(null,inst_70306,(0),null);
var inst_70312__$1 = cljs.core.nth.call(null,inst_70306,(1),null);
var state_70340__$1 = (function (){var statearr_70354 = state_70340;
(statearr_70354[(10)] = inst_70311);

(statearr_70354[(11)] = inst_70312__$1);

return statearr_70354;
})();
if(cljs.core.truth_(inst_70312__$1)){
var statearr_70355_70379 = state_70340__$1;
(statearr_70355_70379[(1)] = (8));

} else {
var statearr_70356_70380 = state_70340__$1;
(statearr_70356_70380[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70341 === (14))){
var inst_70311 = (state_70340[(10)]);
var inst_70321 = (state_70340[(9)]);
var inst_70319 = (state_70340[(2)]);
var inst_70320 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_70321__$1 = cljs.core.get.call(null,inst_70320,inst_70311);
var state_70340__$1 = (function (){var statearr_70357 = state_70340;
(statearr_70357[(8)] = inst_70319);

(statearr_70357[(9)] = inst_70321__$1);

return statearr_70357;
})();
if(cljs.core.truth_(inst_70321__$1)){
var statearr_70358_70381 = state_70340__$1;
(statearr_70358_70381[(1)] = (15));

} else {
var statearr_70359_70382 = state_70340__$1;
(statearr_70359_70382[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70341 === (16))){
var inst_70319 = (state_70340[(8)]);
var inst_70325 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_70319);
var state_70340__$1 = state_70340;
var statearr_70360_70383 = state_70340__$1;
(statearr_70360_70383[(2)] = inst_70325);

(statearr_70360_70383[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70341 === (10))){
var inst_70332 = (state_70340[(2)]);
var state_70340__$1 = (function (){var statearr_70361 = state_70340;
(statearr_70361[(12)] = inst_70332);

return statearr_70361;
})();
var statearr_70362_70384 = state_70340__$1;
(statearr_70362_70384[(2)] = null);

(statearr_70362_70384[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70341 === (8))){
var inst_70312 = (state_70340[(11)]);
var inst_70314 = eval(inst_70312);
var state_70340__$1 = state_70340;
var statearr_70363_70385 = state_70340__$1;
(statearr_70363_70385[(2)] = inst_70314);

(statearr_70363_70385[(1)] = (10));


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
var statearr_70364 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_70364[(0)] = figwheel$client$file_reloading$state_machine__43560__auto__);

(statearr_70364[(1)] = (1));

return statearr_70364;
});
var figwheel$client$file_reloading$state_machine__43560__auto____1 = (function (state_70340){
while(true){
var ret_value__43561__auto__ = (function (){try{while(true){
var result__43562__auto__ = switch__43559__auto__.call(null,state_70340);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43562__auto__;
}
break;
}
}catch (e70365){if((e70365 instanceof Object)){
var ex__43563__auto__ = e70365;
var statearr_70366_70386 = state_70340;
(statearr_70366_70386[(5)] = ex__43563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70340);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70365;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70387 = state_70340;
state_70340 = G__70387;
continue;
} else {
return ret_value__43561__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__43560__auto__ = function(state_70340){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__43560__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__43560__auto____1.call(this,state_70340);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__43560__auto____0;
figwheel$client$file_reloading$state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__43560__auto____1;
return figwheel$client$file_reloading$state_machine__43560__auto__;
})()
;})(switch__43559__auto__,c__43716__auto__))
})();
var state__43718__auto__ = (function (){var statearr_70367 = f__43717__auto__.call(null);
(statearr_70367[(6)] = c__43716__auto__);

return statearr_70367;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43718__auto__);
});})(c__43716__auto__))
);

return c__43716__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__70389 = arguments.length;
switch (G__70389) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__70391,callback){
var map__70392 = p__70391;
var map__70392__$1 = ((((!((map__70392 == null)))?(((((map__70392.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70392.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70392):map__70392);
var file_msg = map__70392__$1;
var namespace = cljs.core.get.call(null,map__70392__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__70392,map__70392__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__70392,map__70392__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__70394){
var map__70395 = p__70394;
var map__70395__$1 = ((((!((map__70395 == null)))?(((((map__70395.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70395.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70395):map__70395);
var file_msg = map__70395__$1;
var namespace = cljs.core.get.call(null,map__70395__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__70397){
var map__70398 = p__70397;
var map__70398__$1 = ((((!((map__70398 == null)))?(((((map__70398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70398.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70398):map__70398);
var file_msg = map__70398__$1;
var namespace = cljs.core.get.call(null,map__70398__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__70400,callback){
var map__70401 = p__70400;
var map__70401__$1 = ((((!((map__70401 == null)))?(((((map__70401.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70401.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70401):map__70401);
var file_msg = map__70401__$1;
var request_url = cljs.core.get.call(null,map__70401__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__70401__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__43716__auto___70451 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43716__auto___70451,out){
return (function (){
var f__43717__auto__ = (function (){var switch__43559__auto__ = ((function (c__43716__auto___70451,out){
return (function (state_70436){
var state_val_70437 = (state_70436[(1)]);
if((state_val_70437 === (1))){
var inst_70410 = cljs.core.seq.call(null,files);
var inst_70411 = cljs.core.first.call(null,inst_70410);
var inst_70412 = cljs.core.next.call(null,inst_70410);
var inst_70413 = files;
var state_70436__$1 = (function (){var statearr_70438 = state_70436;
(statearr_70438[(7)] = inst_70411);

(statearr_70438[(8)] = inst_70413);

(statearr_70438[(9)] = inst_70412);

return statearr_70438;
})();
var statearr_70439_70452 = state_70436__$1;
(statearr_70439_70452[(2)] = null);

(statearr_70439_70452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70437 === (2))){
var inst_70413 = (state_70436[(8)]);
var inst_70419 = (state_70436[(10)]);
var inst_70418 = cljs.core.seq.call(null,inst_70413);
var inst_70419__$1 = cljs.core.first.call(null,inst_70418);
var inst_70420 = cljs.core.next.call(null,inst_70418);
var inst_70421 = (inst_70419__$1 == null);
var inst_70422 = cljs.core.not.call(null,inst_70421);
var state_70436__$1 = (function (){var statearr_70440 = state_70436;
(statearr_70440[(11)] = inst_70420);

(statearr_70440[(10)] = inst_70419__$1);

return statearr_70440;
})();
if(inst_70422){
var statearr_70441_70453 = state_70436__$1;
(statearr_70441_70453[(1)] = (4));

} else {
var statearr_70442_70454 = state_70436__$1;
(statearr_70442_70454[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70437 === (3))){
var inst_70434 = (state_70436[(2)]);
var state_70436__$1 = state_70436;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_70436__$1,inst_70434);
} else {
if((state_val_70437 === (4))){
var inst_70419 = (state_70436[(10)]);
var inst_70424 = figwheel.client.file_reloading.reload_js_file.call(null,inst_70419);
var state_70436__$1 = state_70436;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_70436__$1,(7),inst_70424);
} else {
if((state_val_70437 === (5))){
var inst_70430 = cljs.core.async.close_BANG_.call(null,out);
var state_70436__$1 = state_70436;
var statearr_70443_70455 = state_70436__$1;
(statearr_70443_70455[(2)] = inst_70430);

(statearr_70443_70455[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70437 === (6))){
var inst_70432 = (state_70436[(2)]);
var state_70436__$1 = state_70436;
var statearr_70444_70456 = state_70436__$1;
(statearr_70444_70456[(2)] = inst_70432);

(statearr_70444_70456[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70437 === (7))){
var inst_70420 = (state_70436[(11)]);
var inst_70426 = (state_70436[(2)]);
var inst_70427 = cljs.core.async.put_BANG_.call(null,out,inst_70426);
var inst_70413 = inst_70420;
var state_70436__$1 = (function (){var statearr_70445 = state_70436;
(statearr_70445[(8)] = inst_70413);

(statearr_70445[(12)] = inst_70427);

return statearr_70445;
})();
var statearr_70446_70457 = state_70436__$1;
(statearr_70446_70457[(2)] = null);

(statearr_70446_70457[(1)] = (2));


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
});})(c__43716__auto___70451,out))
;
return ((function (switch__43559__auto__,c__43716__auto___70451,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__43560__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__43560__auto____0 = (function (){
var statearr_70447 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_70447[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__43560__auto__);

(statearr_70447[(1)] = (1));

return statearr_70447;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__43560__auto____1 = (function (state_70436){
while(true){
var ret_value__43561__auto__ = (function (){try{while(true){
var result__43562__auto__ = switch__43559__auto__.call(null,state_70436);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43562__auto__;
}
break;
}
}catch (e70448){if((e70448 instanceof Object)){
var ex__43563__auto__ = e70448;
var statearr_70449_70458 = state_70436;
(statearr_70449_70458[(5)] = ex__43563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70436);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70448;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70459 = state_70436;
state_70436 = G__70459;
continue;
} else {
return ret_value__43561__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__43560__auto__ = function(state_70436){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__43560__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__43560__auto____1.call(this,state_70436);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__43560__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__43560__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__43560__auto__;
})()
;})(switch__43559__auto__,c__43716__auto___70451,out))
})();
var state__43718__auto__ = (function (){var statearr_70450 = f__43717__auto__.call(null);
(statearr_70450[(6)] = c__43716__auto___70451);

return statearr_70450;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43718__auto__);
});})(c__43716__auto___70451,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__70460,opts){
var map__70461 = p__70460;
var map__70461__$1 = ((((!((map__70461 == null)))?(((((map__70461.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70461.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70461):map__70461);
var eval_body = cljs.core.get.call(null,map__70461__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__70461__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e70463){var e = e70463;
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
return (function (p1__70464_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__70464_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__70465){
var vec__70466 = p__70465;
var k = cljs.core.nth.call(null,vec__70466,(0),null);
var v = cljs.core.nth.call(null,vec__70466,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__70469){
var vec__70470 = p__70469;
var k = cljs.core.nth.call(null,vec__70470,(0),null);
var v = cljs.core.nth.call(null,vec__70470,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__70476,p__70477){
var map__70478 = p__70476;
var map__70478__$1 = ((((!((map__70478 == null)))?(((((map__70478.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70478.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70478):map__70478);
var opts = map__70478__$1;
var before_jsload = cljs.core.get.call(null,map__70478__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__70478__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__70478__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__70479 = p__70477;
var map__70479__$1 = ((((!((map__70479 == null)))?(((((map__70479.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70479.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70479):map__70479);
var msg = map__70479__$1;
var files = cljs.core.get.call(null,map__70479__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__70479__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__70479__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__43716__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43716__auto__,map__70478,map__70478__$1,opts,before_jsload,on_jsload,reload_dependents,map__70479,map__70479__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__43717__auto__ = (function (){var switch__43559__auto__ = ((function (c__43716__auto__,map__70478,map__70478__$1,opts,before_jsload,on_jsload,reload_dependents,map__70479,map__70479__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_70633){
var state_val_70634 = (state_70633[(1)]);
if((state_val_70634 === (7))){
var inst_70493 = (state_70633[(7)]);
var inst_70494 = (state_70633[(8)]);
var inst_70496 = (state_70633[(9)]);
var inst_70495 = (state_70633[(10)]);
var inst_70501 = cljs.core._nth.call(null,inst_70494,inst_70496);
var inst_70502 = figwheel.client.file_reloading.eval_body.call(null,inst_70501,opts);
var inst_70503 = (inst_70496 + (1));
var tmp70635 = inst_70493;
var tmp70636 = inst_70494;
var tmp70637 = inst_70495;
var inst_70493__$1 = tmp70635;
var inst_70494__$1 = tmp70636;
var inst_70495__$1 = tmp70637;
var inst_70496__$1 = inst_70503;
var state_70633__$1 = (function (){var statearr_70638 = state_70633;
(statearr_70638[(7)] = inst_70493__$1);

(statearr_70638[(8)] = inst_70494__$1);

(statearr_70638[(9)] = inst_70496__$1);

(statearr_70638[(11)] = inst_70502);

(statearr_70638[(10)] = inst_70495__$1);

return statearr_70638;
})();
var statearr_70639_70722 = state_70633__$1;
(statearr_70639_70722[(2)] = null);

(statearr_70639_70722[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70634 === (20))){
var inst_70536 = (state_70633[(12)]);
var inst_70544 = figwheel.client.file_reloading.sort_files.call(null,inst_70536);
var state_70633__$1 = state_70633;
var statearr_70640_70723 = state_70633__$1;
(statearr_70640_70723[(2)] = inst_70544);

(statearr_70640_70723[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70634 === (27))){
var state_70633__$1 = state_70633;
var statearr_70641_70724 = state_70633__$1;
(statearr_70641_70724[(2)] = null);

(statearr_70641_70724[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70634 === (1))){
var inst_70485 = (state_70633[(13)]);
var inst_70482 = before_jsload.call(null,files);
var inst_70483 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_70484 = (function (){return ((function (inst_70485,inst_70482,inst_70483,state_val_70634,c__43716__auto__,map__70478,map__70478__$1,opts,before_jsload,on_jsload,reload_dependents,map__70479,map__70479__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__70473_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__70473_SHARP_);
});
;})(inst_70485,inst_70482,inst_70483,state_val_70634,c__43716__auto__,map__70478,map__70478__$1,opts,before_jsload,on_jsload,reload_dependents,map__70479,map__70479__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_70485__$1 = cljs.core.filter.call(null,inst_70484,files);
var inst_70486 = cljs.core.not_empty.call(null,inst_70485__$1);
var state_70633__$1 = (function (){var statearr_70642 = state_70633;
(statearr_70642[(14)] = inst_70483);

(statearr_70642[(15)] = inst_70482);

(statearr_70642[(13)] = inst_70485__$1);

return statearr_70642;
})();
if(cljs.core.truth_(inst_70486)){
var statearr_70643_70725 = state_70633__$1;
(statearr_70643_70725[(1)] = (2));

} else {
var statearr_70644_70726 = state_70633__$1;
(statearr_70644_70726[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70634 === (24))){
var state_70633__$1 = state_70633;
var statearr_70645_70727 = state_70633__$1;
(statearr_70645_70727[(2)] = null);

(statearr_70645_70727[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70634 === (39))){
var inst_70586 = (state_70633[(16)]);
var state_70633__$1 = state_70633;
var statearr_70646_70728 = state_70633__$1;
(statearr_70646_70728[(2)] = inst_70586);

(statearr_70646_70728[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70634 === (46))){
var inst_70628 = (state_70633[(2)]);
var state_70633__$1 = state_70633;
var statearr_70647_70729 = state_70633__$1;
(statearr_70647_70729[(2)] = inst_70628);

(statearr_70647_70729[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70634 === (4))){
var inst_70530 = (state_70633[(2)]);
var inst_70531 = cljs.core.List.EMPTY;
var inst_70532 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_70531);
var inst_70533 = (function (){return ((function (inst_70530,inst_70531,inst_70532,state_val_70634,c__43716__auto__,map__70478,map__70478__$1,opts,before_jsload,on_jsload,reload_dependents,map__70479,map__70479__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__70474_SHARP_){
var and__3911__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__70474_SHARP_);
if(cljs.core.truth_(and__3911__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__70474_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__70474_SHARP_))));
} else {
return and__3911__auto__;
}
});
;})(inst_70530,inst_70531,inst_70532,state_val_70634,c__43716__auto__,map__70478,map__70478__$1,opts,before_jsload,on_jsload,reload_dependents,map__70479,map__70479__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_70534 = cljs.core.filter.call(null,inst_70533,files);
var inst_70535 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_70536 = cljs.core.concat.call(null,inst_70534,inst_70535);
var state_70633__$1 = (function (){var statearr_70648 = state_70633;
(statearr_70648[(12)] = inst_70536);

(statearr_70648[(17)] = inst_70530);

(statearr_70648[(18)] = inst_70532);

return statearr_70648;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_70649_70730 = state_70633__$1;
(statearr_70649_70730[(1)] = (16));

} else {
var statearr_70650_70731 = state_70633__$1;
(statearr_70650_70731[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70634 === (15))){
var inst_70520 = (state_70633[(2)]);
var state_70633__$1 = state_70633;
var statearr_70651_70732 = state_70633__$1;
(statearr_70651_70732[(2)] = inst_70520);

(statearr_70651_70732[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70634 === (21))){
var inst_70546 = (state_70633[(19)]);
var inst_70546__$1 = (state_70633[(2)]);
var inst_70547 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_70546__$1);
var state_70633__$1 = (function (){var statearr_70652 = state_70633;
(statearr_70652[(19)] = inst_70546__$1);

return statearr_70652;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_70633__$1,(22),inst_70547);
} else {
if((state_val_70634 === (31))){
var inst_70631 = (state_70633[(2)]);
var state_70633__$1 = state_70633;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_70633__$1,inst_70631);
} else {
if((state_val_70634 === (32))){
var inst_70586 = (state_70633[(16)]);
var inst_70591 = inst_70586.cljs$lang$protocol_mask$partition0$;
var inst_70592 = (inst_70591 & (64));
var inst_70593 = inst_70586.cljs$core$ISeq$;
var inst_70594 = (cljs.core.PROTOCOL_SENTINEL === inst_70593);
var inst_70595 = ((inst_70592) || (inst_70594));
var state_70633__$1 = state_70633;
if(cljs.core.truth_(inst_70595)){
var statearr_70653_70733 = state_70633__$1;
(statearr_70653_70733[(1)] = (35));

} else {
var statearr_70654_70734 = state_70633__$1;
(statearr_70654_70734[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70634 === (40))){
var inst_70608 = (state_70633[(20)]);
var inst_70607 = (state_70633[(2)]);
var inst_70608__$1 = cljs.core.get.call(null,inst_70607,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_70609 = cljs.core.get.call(null,inst_70607,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_70610 = cljs.core.not_empty.call(null,inst_70608__$1);
var state_70633__$1 = (function (){var statearr_70655 = state_70633;
(statearr_70655[(20)] = inst_70608__$1);

(statearr_70655[(21)] = inst_70609);

return statearr_70655;
})();
if(cljs.core.truth_(inst_70610)){
var statearr_70656_70735 = state_70633__$1;
(statearr_70656_70735[(1)] = (41));

} else {
var statearr_70657_70736 = state_70633__$1;
(statearr_70657_70736[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70634 === (33))){
var state_70633__$1 = state_70633;
var statearr_70658_70737 = state_70633__$1;
(statearr_70658_70737[(2)] = false);

(statearr_70658_70737[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70634 === (13))){
var inst_70506 = (state_70633[(22)]);
var inst_70510 = cljs.core.chunk_first.call(null,inst_70506);
var inst_70511 = cljs.core.chunk_rest.call(null,inst_70506);
var inst_70512 = cljs.core.count.call(null,inst_70510);
var inst_70493 = inst_70511;
var inst_70494 = inst_70510;
var inst_70495 = inst_70512;
var inst_70496 = (0);
var state_70633__$1 = (function (){var statearr_70659 = state_70633;
(statearr_70659[(7)] = inst_70493);

(statearr_70659[(8)] = inst_70494);

(statearr_70659[(9)] = inst_70496);

(statearr_70659[(10)] = inst_70495);

return statearr_70659;
})();
var statearr_70660_70738 = state_70633__$1;
(statearr_70660_70738[(2)] = null);

(statearr_70660_70738[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70634 === (22))){
var inst_70549 = (state_70633[(23)]);
var inst_70546 = (state_70633[(19)]);
var inst_70550 = (state_70633[(24)]);
var inst_70554 = (state_70633[(25)]);
var inst_70549__$1 = (state_70633[(2)]);
var inst_70550__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_70549__$1);
var inst_70551 = (function (){var all_files = inst_70546;
var res_SINGLEQUOTE_ = inst_70549__$1;
var res = inst_70550__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_70549,inst_70546,inst_70550,inst_70554,inst_70549__$1,inst_70550__$1,state_val_70634,c__43716__auto__,map__70478,map__70478__$1,opts,before_jsload,on_jsload,reload_dependents,map__70479,map__70479__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__70475_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__70475_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_70549,inst_70546,inst_70550,inst_70554,inst_70549__$1,inst_70550__$1,state_val_70634,c__43716__auto__,map__70478,map__70478__$1,opts,before_jsload,on_jsload,reload_dependents,map__70479,map__70479__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_70552 = cljs.core.filter.call(null,inst_70551,inst_70549__$1);
var inst_70553 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_70554__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_70553);
var inst_70555 = cljs.core.not_empty.call(null,inst_70554__$1);
var state_70633__$1 = (function (){var statearr_70661 = state_70633;
(statearr_70661[(26)] = inst_70552);

(statearr_70661[(23)] = inst_70549__$1);

(statearr_70661[(24)] = inst_70550__$1);

(statearr_70661[(25)] = inst_70554__$1);

return statearr_70661;
})();
if(cljs.core.truth_(inst_70555)){
var statearr_70662_70739 = state_70633__$1;
(statearr_70662_70739[(1)] = (23));

} else {
var statearr_70663_70740 = state_70633__$1;
(statearr_70663_70740[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70634 === (36))){
var state_70633__$1 = state_70633;
var statearr_70664_70741 = state_70633__$1;
(statearr_70664_70741[(2)] = false);

(statearr_70664_70741[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70634 === (41))){
var inst_70608 = (state_70633[(20)]);
var inst_70612 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_70613 = cljs.core.map.call(null,inst_70612,inst_70608);
var inst_70614 = cljs.core.pr_str.call(null,inst_70613);
var inst_70615 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_70614)].join('');
var inst_70616 = figwheel.client.utils.log.call(null,inst_70615);
var state_70633__$1 = state_70633;
var statearr_70665_70742 = state_70633__$1;
(statearr_70665_70742[(2)] = inst_70616);

(statearr_70665_70742[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70634 === (43))){
var inst_70609 = (state_70633[(21)]);
var inst_70619 = (state_70633[(2)]);
var inst_70620 = cljs.core.not_empty.call(null,inst_70609);
var state_70633__$1 = (function (){var statearr_70666 = state_70633;
(statearr_70666[(27)] = inst_70619);

return statearr_70666;
})();
if(cljs.core.truth_(inst_70620)){
var statearr_70667_70743 = state_70633__$1;
(statearr_70667_70743[(1)] = (44));

} else {
var statearr_70668_70744 = state_70633__$1;
(statearr_70668_70744[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70634 === (29))){
var inst_70552 = (state_70633[(26)]);
var inst_70549 = (state_70633[(23)]);
var inst_70546 = (state_70633[(19)]);
var inst_70550 = (state_70633[(24)]);
var inst_70586 = (state_70633[(16)]);
var inst_70554 = (state_70633[(25)]);
var inst_70582 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_70585 = (function (){var all_files = inst_70546;
var res_SINGLEQUOTE_ = inst_70549;
var res = inst_70550;
var files_not_loaded = inst_70552;
var dependencies_that_loaded = inst_70554;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_70552,inst_70549,inst_70546,inst_70550,inst_70586,inst_70554,inst_70582,state_val_70634,c__43716__auto__,map__70478,map__70478__$1,opts,before_jsload,on_jsload,reload_dependents,map__70479,map__70479__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__70584){
var map__70669 = p__70584;
var map__70669__$1 = ((((!((map__70669 == null)))?(((((map__70669.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70669.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70669):map__70669);
var namespace = cljs.core.get.call(null,map__70669__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_70552,inst_70549,inst_70546,inst_70550,inst_70586,inst_70554,inst_70582,state_val_70634,c__43716__auto__,map__70478,map__70478__$1,opts,before_jsload,on_jsload,reload_dependents,map__70479,map__70479__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_70586__$1 = cljs.core.group_by.call(null,inst_70585,inst_70552);
var inst_70588 = (inst_70586__$1 == null);
var inst_70589 = cljs.core.not.call(null,inst_70588);
var state_70633__$1 = (function (){var statearr_70671 = state_70633;
(statearr_70671[(16)] = inst_70586__$1);

(statearr_70671[(28)] = inst_70582);

return statearr_70671;
})();
if(inst_70589){
var statearr_70672_70745 = state_70633__$1;
(statearr_70672_70745[(1)] = (32));

} else {
var statearr_70673_70746 = state_70633__$1;
(statearr_70673_70746[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70634 === (44))){
var inst_70609 = (state_70633[(21)]);
var inst_70622 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_70609);
var inst_70623 = cljs.core.pr_str.call(null,inst_70622);
var inst_70624 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_70623)].join('');
var inst_70625 = figwheel.client.utils.log.call(null,inst_70624);
var state_70633__$1 = state_70633;
var statearr_70674_70747 = state_70633__$1;
(statearr_70674_70747[(2)] = inst_70625);

(statearr_70674_70747[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70634 === (6))){
var inst_70527 = (state_70633[(2)]);
var state_70633__$1 = state_70633;
var statearr_70675_70748 = state_70633__$1;
(statearr_70675_70748[(2)] = inst_70527);

(statearr_70675_70748[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70634 === (28))){
var inst_70552 = (state_70633[(26)]);
var inst_70579 = (state_70633[(2)]);
var inst_70580 = cljs.core.not_empty.call(null,inst_70552);
var state_70633__$1 = (function (){var statearr_70676 = state_70633;
(statearr_70676[(29)] = inst_70579);

return statearr_70676;
})();
if(cljs.core.truth_(inst_70580)){
var statearr_70677_70749 = state_70633__$1;
(statearr_70677_70749[(1)] = (29));

} else {
var statearr_70678_70750 = state_70633__$1;
(statearr_70678_70750[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70634 === (25))){
var inst_70550 = (state_70633[(24)]);
var inst_70566 = (state_70633[(2)]);
var inst_70567 = cljs.core.not_empty.call(null,inst_70550);
var state_70633__$1 = (function (){var statearr_70679 = state_70633;
(statearr_70679[(30)] = inst_70566);

return statearr_70679;
})();
if(cljs.core.truth_(inst_70567)){
var statearr_70680_70751 = state_70633__$1;
(statearr_70680_70751[(1)] = (26));

} else {
var statearr_70681_70752 = state_70633__$1;
(statearr_70681_70752[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70634 === (34))){
var inst_70602 = (state_70633[(2)]);
var state_70633__$1 = state_70633;
if(cljs.core.truth_(inst_70602)){
var statearr_70682_70753 = state_70633__$1;
(statearr_70682_70753[(1)] = (38));

} else {
var statearr_70683_70754 = state_70633__$1;
(statearr_70683_70754[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70634 === (17))){
var state_70633__$1 = state_70633;
var statearr_70684_70755 = state_70633__$1;
(statearr_70684_70755[(2)] = recompile_dependents);

(statearr_70684_70755[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70634 === (3))){
var state_70633__$1 = state_70633;
var statearr_70685_70756 = state_70633__$1;
(statearr_70685_70756[(2)] = null);

(statearr_70685_70756[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70634 === (12))){
var inst_70523 = (state_70633[(2)]);
var state_70633__$1 = state_70633;
var statearr_70686_70757 = state_70633__$1;
(statearr_70686_70757[(2)] = inst_70523);

(statearr_70686_70757[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70634 === (2))){
var inst_70485 = (state_70633[(13)]);
var inst_70492 = cljs.core.seq.call(null,inst_70485);
var inst_70493 = inst_70492;
var inst_70494 = null;
var inst_70495 = (0);
var inst_70496 = (0);
var state_70633__$1 = (function (){var statearr_70687 = state_70633;
(statearr_70687[(7)] = inst_70493);

(statearr_70687[(8)] = inst_70494);

(statearr_70687[(9)] = inst_70496);

(statearr_70687[(10)] = inst_70495);

return statearr_70687;
})();
var statearr_70688_70758 = state_70633__$1;
(statearr_70688_70758[(2)] = null);

(statearr_70688_70758[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70634 === (23))){
var inst_70552 = (state_70633[(26)]);
var inst_70549 = (state_70633[(23)]);
var inst_70546 = (state_70633[(19)]);
var inst_70550 = (state_70633[(24)]);
var inst_70554 = (state_70633[(25)]);
var inst_70557 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_70559 = (function (){var all_files = inst_70546;
var res_SINGLEQUOTE_ = inst_70549;
var res = inst_70550;
var files_not_loaded = inst_70552;
var dependencies_that_loaded = inst_70554;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_70552,inst_70549,inst_70546,inst_70550,inst_70554,inst_70557,state_val_70634,c__43716__auto__,map__70478,map__70478__$1,opts,before_jsload,on_jsload,reload_dependents,map__70479,map__70479__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__70558){
var map__70689 = p__70558;
var map__70689__$1 = ((((!((map__70689 == null)))?(((((map__70689.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70689.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70689):map__70689);
var request_url = cljs.core.get.call(null,map__70689__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_70552,inst_70549,inst_70546,inst_70550,inst_70554,inst_70557,state_val_70634,c__43716__auto__,map__70478,map__70478__$1,opts,before_jsload,on_jsload,reload_dependents,map__70479,map__70479__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_70560 = cljs.core.reverse.call(null,inst_70554);
var inst_70561 = cljs.core.map.call(null,inst_70559,inst_70560);
var inst_70562 = cljs.core.pr_str.call(null,inst_70561);
var inst_70563 = figwheel.client.utils.log.call(null,inst_70562);
var state_70633__$1 = (function (){var statearr_70691 = state_70633;
(statearr_70691[(31)] = inst_70557);

return statearr_70691;
})();
var statearr_70692_70759 = state_70633__$1;
(statearr_70692_70759[(2)] = inst_70563);

(statearr_70692_70759[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70634 === (35))){
var state_70633__$1 = state_70633;
var statearr_70693_70760 = state_70633__$1;
(statearr_70693_70760[(2)] = true);

(statearr_70693_70760[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70634 === (19))){
var inst_70536 = (state_70633[(12)]);
var inst_70542 = figwheel.client.file_reloading.expand_files.call(null,inst_70536);
var state_70633__$1 = state_70633;
var statearr_70694_70761 = state_70633__$1;
(statearr_70694_70761[(2)] = inst_70542);

(statearr_70694_70761[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70634 === (11))){
var state_70633__$1 = state_70633;
var statearr_70695_70762 = state_70633__$1;
(statearr_70695_70762[(2)] = null);

(statearr_70695_70762[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70634 === (9))){
var inst_70525 = (state_70633[(2)]);
var state_70633__$1 = state_70633;
var statearr_70696_70763 = state_70633__$1;
(statearr_70696_70763[(2)] = inst_70525);

(statearr_70696_70763[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70634 === (5))){
var inst_70496 = (state_70633[(9)]);
var inst_70495 = (state_70633[(10)]);
var inst_70498 = (inst_70496 < inst_70495);
var inst_70499 = inst_70498;
var state_70633__$1 = state_70633;
if(cljs.core.truth_(inst_70499)){
var statearr_70697_70764 = state_70633__$1;
(statearr_70697_70764[(1)] = (7));

} else {
var statearr_70698_70765 = state_70633__$1;
(statearr_70698_70765[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70634 === (14))){
var inst_70506 = (state_70633[(22)]);
var inst_70515 = cljs.core.first.call(null,inst_70506);
var inst_70516 = figwheel.client.file_reloading.eval_body.call(null,inst_70515,opts);
var inst_70517 = cljs.core.next.call(null,inst_70506);
var inst_70493 = inst_70517;
var inst_70494 = null;
var inst_70495 = (0);
var inst_70496 = (0);
var state_70633__$1 = (function (){var statearr_70699 = state_70633;
(statearr_70699[(7)] = inst_70493);

(statearr_70699[(8)] = inst_70494);

(statearr_70699[(9)] = inst_70496);

(statearr_70699[(32)] = inst_70516);

(statearr_70699[(10)] = inst_70495);

return statearr_70699;
})();
var statearr_70700_70766 = state_70633__$1;
(statearr_70700_70766[(2)] = null);

(statearr_70700_70766[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70634 === (45))){
var state_70633__$1 = state_70633;
var statearr_70701_70767 = state_70633__$1;
(statearr_70701_70767[(2)] = null);

(statearr_70701_70767[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70634 === (26))){
var inst_70552 = (state_70633[(26)]);
var inst_70549 = (state_70633[(23)]);
var inst_70546 = (state_70633[(19)]);
var inst_70550 = (state_70633[(24)]);
var inst_70554 = (state_70633[(25)]);
var inst_70569 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_70571 = (function (){var all_files = inst_70546;
var res_SINGLEQUOTE_ = inst_70549;
var res = inst_70550;
var files_not_loaded = inst_70552;
var dependencies_that_loaded = inst_70554;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_70552,inst_70549,inst_70546,inst_70550,inst_70554,inst_70569,state_val_70634,c__43716__auto__,map__70478,map__70478__$1,opts,before_jsload,on_jsload,reload_dependents,map__70479,map__70479__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__70570){
var map__70702 = p__70570;
var map__70702__$1 = ((((!((map__70702 == null)))?(((((map__70702.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70702.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70702):map__70702);
var namespace = cljs.core.get.call(null,map__70702__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__70702__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_70552,inst_70549,inst_70546,inst_70550,inst_70554,inst_70569,state_val_70634,c__43716__auto__,map__70478,map__70478__$1,opts,before_jsload,on_jsload,reload_dependents,map__70479,map__70479__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_70572 = cljs.core.map.call(null,inst_70571,inst_70550);
var inst_70573 = cljs.core.pr_str.call(null,inst_70572);
var inst_70574 = figwheel.client.utils.log.call(null,inst_70573);
var inst_70575 = (function (){var all_files = inst_70546;
var res_SINGLEQUOTE_ = inst_70549;
var res = inst_70550;
var files_not_loaded = inst_70552;
var dependencies_that_loaded = inst_70554;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_70552,inst_70549,inst_70546,inst_70550,inst_70554,inst_70569,inst_70571,inst_70572,inst_70573,inst_70574,state_val_70634,c__43716__auto__,map__70478,map__70478__$1,opts,before_jsload,on_jsload,reload_dependents,map__70479,map__70479__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_70552,inst_70549,inst_70546,inst_70550,inst_70554,inst_70569,inst_70571,inst_70572,inst_70573,inst_70574,state_val_70634,c__43716__auto__,map__70478,map__70478__$1,opts,before_jsload,on_jsload,reload_dependents,map__70479,map__70479__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_70576 = setTimeout(inst_70575,(10));
var state_70633__$1 = (function (){var statearr_70704 = state_70633;
(statearr_70704[(33)] = inst_70574);

(statearr_70704[(34)] = inst_70569);

return statearr_70704;
})();
var statearr_70705_70768 = state_70633__$1;
(statearr_70705_70768[(2)] = inst_70576);

(statearr_70705_70768[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70634 === (16))){
var state_70633__$1 = state_70633;
var statearr_70706_70769 = state_70633__$1;
(statearr_70706_70769[(2)] = reload_dependents);

(statearr_70706_70769[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70634 === (38))){
var inst_70586 = (state_70633[(16)]);
var inst_70604 = cljs.core.apply.call(null,cljs.core.hash_map,inst_70586);
var state_70633__$1 = state_70633;
var statearr_70707_70770 = state_70633__$1;
(statearr_70707_70770[(2)] = inst_70604);

(statearr_70707_70770[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70634 === (30))){
var state_70633__$1 = state_70633;
var statearr_70708_70771 = state_70633__$1;
(statearr_70708_70771[(2)] = null);

(statearr_70708_70771[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70634 === (10))){
var inst_70506 = (state_70633[(22)]);
var inst_70508 = cljs.core.chunked_seq_QMARK_.call(null,inst_70506);
var state_70633__$1 = state_70633;
if(inst_70508){
var statearr_70709_70772 = state_70633__$1;
(statearr_70709_70772[(1)] = (13));

} else {
var statearr_70710_70773 = state_70633__$1;
(statearr_70710_70773[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70634 === (18))){
var inst_70540 = (state_70633[(2)]);
var state_70633__$1 = state_70633;
if(cljs.core.truth_(inst_70540)){
var statearr_70711_70774 = state_70633__$1;
(statearr_70711_70774[(1)] = (19));

} else {
var statearr_70712_70775 = state_70633__$1;
(statearr_70712_70775[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70634 === (42))){
var state_70633__$1 = state_70633;
var statearr_70713_70776 = state_70633__$1;
(statearr_70713_70776[(2)] = null);

(statearr_70713_70776[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70634 === (37))){
var inst_70599 = (state_70633[(2)]);
var state_70633__$1 = state_70633;
var statearr_70714_70777 = state_70633__$1;
(statearr_70714_70777[(2)] = inst_70599);

(statearr_70714_70777[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_70634 === (8))){
var inst_70493 = (state_70633[(7)]);
var inst_70506 = (state_70633[(22)]);
var inst_70506__$1 = cljs.core.seq.call(null,inst_70493);
var state_70633__$1 = (function (){var statearr_70715 = state_70633;
(statearr_70715[(22)] = inst_70506__$1);

return statearr_70715;
})();
if(inst_70506__$1){
var statearr_70716_70778 = state_70633__$1;
(statearr_70716_70778[(1)] = (10));

} else {
var statearr_70717_70779 = state_70633__$1;
(statearr_70717_70779[(1)] = (11));

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
});})(c__43716__auto__,map__70478,map__70478__$1,opts,before_jsload,on_jsload,reload_dependents,map__70479,map__70479__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__43559__auto__,c__43716__auto__,map__70478,map__70478__$1,opts,before_jsload,on_jsload,reload_dependents,map__70479,map__70479__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__43560__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__43560__auto____0 = (function (){
var statearr_70718 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_70718[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__43560__auto__);

(statearr_70718[(1)] = (1));

return statearr_70718;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__43560__auto____1 = (function (state_70633){
while(true){
var ret_value__43561__auto__ = (function (){try{while(true){
var result__43562__auto__ = switch__43559__auto__.call(null,state_70633);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43562__auto__;
}
break;
}
}catch (e70719){if((e70719 instanceof Object)){
var ex__43563__auto__ = e70719;
var statearr_70720_70780 = state_70633;
(statearr_70720_70780[(5)] = ex__43563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_70633);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e70719;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__70781 = state_70633;
state_70633 = G__70781;
continue;
} else {
return ret_value__43561__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__43560__auto__ = function(state_70633){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__43560__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__43560__auto____1.call(this,state_70633);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__43560__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__43560__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__43560__auto__;
})()
;})(switch__43559__auto__,c__43716__auto__,map__70478,map__70478__$1,opts,before_jsload,on_jsload,reload_dependents,map__70479,map__70479__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__43718__auto__ = (function (){var statearr_70721 = f__43717__auto__.call(null);
(statearr_70721[(6)] = c__43716__auto__);

return statearr_70721;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43718__auto__);
});})(c__43716__auto__,map__70478,map__70478__$1,opts,before_jsload,on_jsload,reload_dependents,map__70479,map__70479__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__43716__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__70784,link){
var map__70785 = p__70784;
var map__70785__$1 = ((((!((map__70785 == null)))?(((((map__70785.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70785.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70785):map__70785);
var file = cljs.core.get.call(null,map__70785__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__70785,map__70785__$1,file){
return (function (p1__70782_SHARP_,p2__70783_SHARP_){
if(cljs.core._EQ_.call(null,p1__70782_SHARP_,p2__70783_SHARP_)){
return p1__70782_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__70785,map__70785__$1,file))
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
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__70788){
var map__70789 = p__70788;
var map__70789__$1 = ((((!((map__70789 == null)))?(((((map__70789.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70789.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70789):map__70789);
var match_length = cljs.core.get.call(null,map__70789__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__70789__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__70787_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__70787_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__70791_SHARP_,p2__70792_SHARP_){
return cljs.core.assoc.call(null,p1__70791_SHARP_,cljs.core.get.call(null,p2__70792_SHARP_,key),p2__70792_SHARP_);
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
var loaded_f_datas_70793 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_70793);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_70793);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__70794,p__70795){
var map__70796 = p__70794;
var map__70796__$1 = ((((!((map__70796 == null)))?(((((map__70796.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70796.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70796):map__70796);
var on_cssload = cljs.core.get.call(null,map__70796__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__70797 = p__70795;
var map__70797__$1 = ((((!((map__70797 == null)))?(((((map__70797.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__70797.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70797):map__70797);
var files_msg = map__70797__$1;
var files = cljs.core.get.call(null,map__70797__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1525299307048
