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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__29725_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__29725_SHARP_));
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
var seq__29726 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__29727 = null;
var count__29728 = (0);
var i__29729 = (0);
while(true){
if((i__29729 < count__29728)){
var n = cljs.core._nth.call(null,chunk__29727,i__29729);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__29730 = seq__29726;
var G__29731 = chunk__29727;
var G__29732 = count__29728;
var G__29733 = (i__29729 + (1));
seq__29726 = G__29730;
chunk__29727 = G__29731;
count__29728 = G__29732;
i__29729 = G__29733;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__29726);
if(temp__5457__auto__){
var seq__29726__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29726__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__29726__$1);
var G__29734 = cljs.core.chunk_rest.call(null,seq__29726__$1);
var G__29735 = c__4319__auto__;
var G__29736 = cljs.core.count.call(null,c__4319__auto__);
var G__29737 = (0);
seq__29726 = G__29734;
chunk__29727 = G__29735;
count__29728 = G__29736;
i__29729 = G__29737;
continue;
} else {
var n = cljs.core.first.call(null,seq__29726__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__29738 = cljs.core.next.call(null,seq__29726__$1);
var G__29739 = null;
var G__29740 = (0);
var G__29741 = (0);
seq__29726 = G__29738;
chunk__29727 = G__29739;
count__29728 = G__29740;
i__29729 = G__29741;
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
return cljs.core.some.call(null,(function (p__29742){
var vec__29743 = p__29742;
var _ = cljs.core.nth.call(null,vec__29743,(0),null);
var v = cljs.core.nth.call(null,vec__29743,(1),null);
var and__3911__auto__ = v;
if(cljs.core.truth_(and__3911__auto__)){
return v.call(null,dep);
} else {
return and__3911__auto__;
}
}),cljs.core.filter.call(null,(function (p__29746){
var vec__29747 = p__29746;
var k = cljs.core.nth.call(null,vec__29747,(0),null);
var v = cljs.core.nth.call(null,vec__29747,(1),null);
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

var seq__29759_29767 = cljs.core.seq.call(null,deps);
var chunk__29760_29768 = null;
var count__29761_29769 = (0);
var i__29762_29770 = (0);
while(true){
if((i__29762_29770 < count__29761_29769)){
var dep_29771 = cljs.core._nth.call(null,chunk__29760_29768,i__29762_29770);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_29771;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_29771));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_29771,(depth + (1)),state);
} else {
}


var G__29772 = seq__29759_29767;
var G__29773 = chunk__29760_29768;
var G__29774 = count__29761_29769;
var G__29775 = (i__29762_29770 + (1));
seq__29759_29767 = G__29772;
chunk__29760_29768 = G__29773;
count__29761_29769 = G__29774;
i__29762_29770 = G__29775;
continue;
} else {
var temp__5457__auto___29776 = cljs.core.seq.call(null,seq__29759_29767);
if(temp__5457__auto___29776){
var seq__29759_29777__$1 = temp__5457__auto___29776;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29759_29777__$1)){
var c__4319__auto___29778 = cljs.core.chunk_first.call(null,seq__29759_29777__$1);
var G__29779 = cljs.core.chunk_rest.call(null,seq__29759_29777__$1);
var G__29780 = c__4319__auto___29778;
var G__29781 = cljs.core.count.call(null,c__4319__auto___29778);
var G__29782 = (0);
seq__29759_29767 = G__29779;
chunk__29760_29768 = G__29780;
count__29761_29769 = G__29781;
i__29762_29770 = G__29782;
continue;
} else {
var dep_29783 = cljs.core.first.call(null,seq__29759_29777__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_29783;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_29783));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_29783,(depth + (1)),state);
} else {
}


var G__29784 = cljs.core.next.call(null,seq__29759_29777__$1);
var G__29785 = null;
var G__29786 = (0);
var G__29787 = (0);
seq__29759_29767 = G__29784;
chunk__29760_29768 = G__29785;
count__29761_29769 = G__29786;
i__29762_29770 = G__29787;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__29763){
var vec__29764 = p__29763;
var seq__29765 = cljs.core.seq.call(null,vec__29764);
var first__29766 = cljs.core.first.call(null,seq__29765);
var seq__29765__$1 = cljs.core.next.call(null,seq__29765);
var x = first__29766;
var xs = seq__29765__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__29764,seq__29765,first__29766,seq__29765__$1,x,xs,get_deps__$1){
return (function (p1__29750_SHARP_){
return clojure.set.difference.call(null,p1__29750_SHARP_,x);
});})(vec__29764,seq__29765,first__29766,seq__29765__$1,x,xs,get_deps__$1))
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
var seq__29788 = cljs.core.seq.call(null,provides);
var chunk__29789 = null;
var count__29790 = (0);
var i__29791 = (0);
while(true){
if((i__29791 < count__29790)){
var prov = cljs.core._nth.call(null,chunk__29789,i__29791);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29792_29800 = cljs.core.seq.call(null,requires);
var chunk__29793_29801 = null;
var count__29794_29802 = (0);
var i__29795_29803 = (0);
while(true){
if((i__29795_29803 < count__29794_29802)){
var req_29804 = cljs.core._nth.call(null,chunk__29793_29801,i__29795_29803);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29804,prov);


var G__29805 = seq__29792_29800;
var G__29806 = chunk__29793_29801;
var G__29807 = count__29794_29802;
var G__29808 = (i__29795_29803 + (1));
seq__29792_29800 = G__29805;
chunk__29793_29801 = G__29806;
count__29794_29802 = G__29807;
i__29795_29803 = G__29808;
continue;
} else {
var temp__5457__auto___29809 = cljs.core.seq.call(null,seq__29792_29800);
if(temp__5457__auto___29809){
var seq__29792_29810__$1 = temp__5457__auto___29809;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29792_29810__$1)){
var c__4319__auto___29811 = cljs.core.chunk_first.call(null,seq__29792_29810__$1);
var G__29812 = cljs.core.chunk_rest.call(null,seq__29792_29810__$1);
var G__29813 = c__4319__auto___29811;
var G__29814 = cljs.core.count.call(null,c__4319__auto___29811);
var G__29815 = (0);
seq__29792_29800 = G__29812;
chunk__29793_29801 = G__29813;
count__29794_29802 = G__29814;
i__29795_29803 = G__29815;
continue;
} else {
var req_29816 = cljs.core.first.call(null,seq__29792_29810__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29816,prov);


var G__29817 = cljs.core.next.call(null,seq__29792_29810__$1);
var G__29818 = null;
var G__29819 = (0);
var G__29820 = (0);
seq__29792_29800 = G__29817;
chunk__29793_29801 = G__29818;
count__29794_29802 = G__29819;
i__29795_29803 = G__29820;
continue;
}
} else {
}
}
break;
}


var G__29821 = seq__29788;
var G__29822 = chunk__29789;
var G__29823 = count__29790;
var G__29824 = (i__29791 + (1));
seq__29788 = G__29821;
chunk__29789 = G__29822;
count__29790 = G__29823;
i__29791 = G__29824;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__29788);
if(temp__5457__auto__){
var seq__29788__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29788__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__29788__$1);
var G__29825 = cljs.core.chunk_rest.call(null,seq__29788__$1);
var G__29826 = c__4319__auto__;
var G__29827 = cljs.core.count.call(null,c__4319__auto__);
var G__29828 = (0);
seq__29788 = G__29825;
chunk__29789 = G__29826;
count__29790 = G__29827;
i__29791 = G__29828;
continue;
} else {
var prov = cljs.core.first.call(null,seq__29788__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29796_29829 = cljs.core.seq.call(null,requires);
var chunk__29797_29830 = null;
var count__29798_29831 = (0);
var i__29799_29832 = (0);
while(true){
if((i__29799_29832 < count__29798_29831)){
var req_29833 = cljs.core._nth.call(null,chunk__29797_29830,i__29799_29832);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29833,prov);


var G__29834 = seq__29796_29829;
var G__29835 = chunk__29797_29830;
var G__29836 = count__29798_29831;
var G__29837 = (i__29799_29832 + (1));
seq__29796_29829 = G__29834;
chunk__29797_29830 = G__29835;
count__29798_29831 = G__29836;
i__29799_29832 = G__29837;
continue;
} else {
var temp__5457__auto___29838__$1 = cljs.core.seq.call(null,seq__29796_29829);
if(temp__5457__auto___29838__$1){
var seq__29796_29839__$1 = temp__5457__auto___29838__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29796_29839__$1)){
var c__4319__auto___29840 = cljs.core.chunk_first.call(null,seq__29796_29839__$1);
var G__29841 = cljs.core.chunk_rest.call(null,seq__29796_29839__$1);
var G__29842 = c__4319__auto___29840;
var G__29843 = cljs.core.count.call(null,c__4319__auto___29840);
var G__29844 = (0);
seq__29796_29829 = G__29841;
chunk__29797_29830 = G__29842;
count__29798_29831 = G__29843;
i__29799_29832 = G__29844;
continue;
} else {
var req_29845 = cljs.core.first.call(null,seq__29796_29839__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29845,prov);


var G__29846 = cljs.core.next.call(null,seq__29796_29839__$1);
var G__29847 = null;
var G__29848 = (0);
var G__29849 = (0);
seq__29796_29829 = G__29846;
chunk__29797_29830 = G__29847;
count__29798_29831 = G__29848;
i__29799_29832 = G__29849;
continue;
}
} else {
}
}
break;
}


var G__29850 = cljs.core.next.call(null,seq__29788__$1);
var G__29851 = null;
var G__29852 = (0);
var G__29853 = (0);
seq__29788 = G__29850;
chunk__29789 = G__29851;
count__29790 = G__29852;
i__29791 = G__29853;
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
var seq__29854_29858 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__29855_29859 = null;
var count__29856_29860 = (0);
var i__29857_29861 = (0);
while(true){
if((i__29857_29861 < count__29856_29860)){
var ns_29862 = cljs.core._nth.call(null,chunk__29855_29859,i__29857_29861);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29862);


var G__29863 = seq__29854_29858;
var G__29864 = chunk__29855_29859;
var G__29865 = count__29856_29860;
var G__29866 = (i__29857_29861 + (1));
seq__29854_29858 = G__29863;
chunk__29855_29859 = G__29864;
count__29856_29860 = G__29865;
i__29857_29861 = G__29866;
continue;
} else {
var temp__5457__auto___29867 = cljs.core.seq.call(null,seq__29854_29858);
if(temp__5457__auto___29867){
var seq__29854_29868__$1 = temp__5457__auto___29867;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29854_29868__$1)){
var c__4319__auto___29869 = cljs.core.chunk_first.call(null,seq__29854_29868__$1);
var G__29870 = cljs.core.chunk_rest.call(null,seq__29854_29868__$1);
var G__29871 = c__4319__auto___29869;
var G__29872 = cljs.core.count.call(null,c__4319__auto___29869);
var G__29873 = (0);
seq__29854_29858 = G__29870;
chunk__29855_29859 = G__29871;
count__29856_29860 = G__29872;
i__29857_29861 = G__29873;
continue;
} else {
var ns_29874 = cljs.core.first.call(null,seq__29854_29868__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29874);


var G__29875 = cljs.core.next.call(null,seq__29854_29868__$1);
var G__29876 = null;
var G__29877 = (0);
var G__29878 = (0);
seq__29854_29858 = G__29875;
chunk__29855_29859 = G__29876;
count__29856_29860 = G__29877;
i__29857_29861 = G__29878;
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
var G__29879__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__29879 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29880__i = 0, G__29880__a = new Array(arguments.length -  0);
while (G__29880__i < G__29880__a.length) {G__29880__a[G__29880__i] = arguments[G__29880__i + 0]; ++G__29880__i;}
  args = new cljs.core.IndexedSeq(G__29880__a,0,null);
} 
return G__29879__delegate.call(this,args);};
G__29879.cljs$lang$maxFixedArity = 0;
G__29879.cljs$lang$applyTo = (function (arglist__29881){
var args = cljs.core.seq(arglist__29881);
return G__29879__delegate(args);
});
G__29879.cljs$core$IFn$_invoke$arity$variadic = G__29879__delegate;
return G__29879;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__29882_SHARP_,p2__29883_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29882_SHARP_)].join('')),p2__29883_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__29884_SHARP_,p2__29885_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29884_SHARP_)].join(''),p2__29885_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__29886 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__29886.addCallback(((function (G__29886){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__29886))
);

G__29886.addErrback(((function (G__29886){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__29886))
);

return G__29886;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e29887){if((e29887 instanceof Error)){
var e = e29887;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29887;

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
}catch (e29888){if((e29888 instanceof Error)){
var e = e29888;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29888;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__29889 = cljs.core._EQ_;
var expr__29890 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__29889.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__29890))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__29889.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__29890))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__29889.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__29890))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__29889,expr__29890){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__29889,expr__29890))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__29892,callback){
var map__29893 = p__29892;
var map__29893__$1 = ((((!((map__29893 == null)))?(((((map__29893.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29893.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29893):map__29893);
var file_msg = map__29893__$1;
var request_url = cljs.core.get.call(null,map__29893__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3922__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__29893,map__29893__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__29893,map__29893__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__27621__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27621__auto__){
return (function (){
var f__27622__auto__ = (function (){var switch__27531__auto__ = ((function (c__27621__auto__){
return (function (state_29931){
var state_val_29932 = (state_29931[(1)]);
if((state_val_29932 === (7))){
var inst_29927 = (state_29931[(2)]);
var state_29931__$1 = state_29931;
var statearr_29933_29959 = state_29931__$1;
(statearr_29933_29959[(2)] = inst_29927);

(statearr_29933_29959[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29932 === (1))){
var state_29931__$1 = state_29931;
var statearr_29934_29960 = state_29931__$1;
(statearr_29934_29960[(2)] = null);

(statearr_29934_29960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29932 === (4))){
var inst_29897 = (state_29931[(7)]);
var inst_29897__$1 = (state_29931[(2)]);
var state_29931__$1 = (function (){var statearr_29935 = state_29931;
(statearr_29935[(7)] = inst_29897__$1);

return statearr_29935;
})();
if(cljs.core.truth_(inst_29897__$1)){
var statearr_29936_29961 = state_29931__$1;
(statearr_29936_29961[(1)] = (5));

} else {
var statearr_29937_29962 = state_29931__$1;
(statearr_29937_29962[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29932 === (15))){
var inst_29912 = (state_29931[(8)]);
var inst_29910 = (state_29931[(9)]);
var inst_29914 = inst_29912.call(null,inst_29910);
var state_29931__$1 = state_29931;
var statearr_29938_29963 = state_29931__$1;
(statearr_29938_29963[(2)] = inst_29914);

(statearr_29938_29963[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29932 === (13))){
var inst_29921 = (state_29931[(2)]);
var state_29931__$1 = state_29931;
var statearr_29939_29964 = state_29931__$1;
(statearr_29939_29964[(2)] = inst_29921);

(statearr_29939_29964[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29932 === (6))){
var state_29931__$1 = state_29931;
var statearr_29940_29965 = state_29931__$1;
(statearr_29940_29965[(2)] = null);

(statearr_29940_29965[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29932 === (17))){
var inst_29918 = (state_29931[(2)]);
var state_29931__$1 = state_29931;
var statearr_29941_29966 = state_29931__$1;
(statearr_29941_29966[(2)] = inst_29918);

(statearr_29941_29966[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29932 === (3))){
var inst_29929 = (state_29931[(2)]);
var state_29931__$1 = state_29931;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29931__$1,inst_29929);
} else {
if((state_val_29932 === (12))){
var state_29931__$1 = state_29931;
var statearr_29942_29967 = state_29931__$1;
(statearr_29942_29967[(2)] = null);

(statearr_29942_29967[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29932 === (2))){
var state_29931__$1 = state_29931;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29931__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_29932 === (11))){
var inst_29902 = (state_29931[(10)]);
var inst_29908 = figwheel.client.file_reloading.blocking_load.call(null,inst_29902);
var state_29931__$1 = state_29931;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29931__$1,(14),inst_29908);
} else {
if((state_val_29932 === (9))){
var inst_29902 = (state_29931[(10)]);
var state_29931__$1 = state_29931;
if(cljs.core.truth_(inst_29902)){
var statearr_29943_29968 = state_29931__$1;
(statearr_29943_29968[(1)] = (11));

} else {
var statearr_29944_29969 = state_29931__$1;
(statearr_29944_29969[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29932 === (5))){
var inst_29903 = (state_29931[(11)]);
var inst_29897 = (state_29931[(7)]);
var inst_29902 = cljs.core.nth.call(null,inst_29897,(0),null);
var inst_29903__$1 = cljs.core.nth.call(null,inst_29897,(1),null);
var state_29931__$1 = (function (){var statearr_29945 = state_29931;
(statearr_29945[(11)] = inst_29903__$1);

(statearr_29945[(10)] = inst_29902);

return statearr_29945;
})();
if(cljs.core.truth_(inst_29903__$1)){
var statearr_29946_29970 = state_29931__$1;
(statearr_29946_29970[(1)] = (8));

} else {
var statearr_29947_29971 = state_29931__$1;
(statearr_29947_29971[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29932 === (14))){
var inst_29912 = (state_29931[(8)]);
var inst_29902 = (state_29931[(10)]);
var inst_29910 = (state_29931[(2)]);
var inst_29911 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_29912__$1 = cljs.core.get.call(null,inst_29911,inst_29902);
var state_29931__$1 = (function (){var statearr_29948 = state_29931;
(statearr_29948[(8)] = inst_29912__$1);

(statearr_29948[(9)] = inst_29910);

return statearr_29948;
})();
if(cljs.core.truth_(inst_29912__$1)){
var statearr_29949_29972 = state_29931__$1;
(statearr_29949_29972[(1)] = (15));

} else {
var statearr_29950_29973 = state_29931__$1;
(statearr_29950_29973[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29932 === (16))){
var inst_29910 = (state_29931[(9)]);
var inst_29916 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_29910);
var state_29931__$1 = state_29931;
var statearr_29951_29974 = state_29931__$1;
(statearr_29951_29974[(2)] = inst_29916);

(statearr_29951_29974[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29932 === (10))){
var inst_29923 = (state_29931[(2)]);
var state_29931__$1 = (function (){var statearr_29952 = state_29931;
(statearr_29952[(12)] = inst_29923);

return statearr_29952;
})();
var statearr_29953_29975 = state_29931__$1;
(statearr_29953_29975[(2)] = null);

(statearr_29953_29975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29932 === (8))){
var inst_29903 = (state_29931[(11)]);
var inst_29905 = eval(inst_29903);
var state_29931__$1 = state_29931;
var statearr_29954_29976 = state_29931__$1;
(statearr_29954_29976[(2)] = inst_29905);

(statearr_29954_29976[(1)] = (10));


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
});})(c__27621__auto__))
;
return ((function (switch__27531__auto__,c__27621__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__27532__auto__ = null;
var figwheel$client$file_reloading$state_machine__27532__auto____0 = (function (){
var statearr_29955 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29955[(0)] = figwheel$client$file_reloading$state_machine__27532__auto__);

(statearr_29955[(1)] = (1));

return statearr_29955;
});
var figwheel$client$file_reloading$state_machine__27532__auto____1 = (function (state_29931){
while(true){
var ret_value__27533__auto__ = (function (){try{while(true){
var result__27534__auto__ = switch__27531__auto__.call(null,state_29931);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27534__auto__;
}
break;
}
}catch (e29956){if((e29956 instanceof Object)){
var ex__27535__auto__ = e29956;
var statearr_29957_29977 = state_29931;
(statearr_29957_29977[(5)] = ex__27535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29931);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29956;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29978 = state_29931;
state_29931 = G__29978;
continue;
} else {
return ret_value__27533__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__27532__auto__ = function(state_29931){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__27532__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__27532__auto____1.call(this,state_29931);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__27532__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__27532__auto____0;
figwheel$client$file_reloading$state_machine__27532__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__27532__auto____1;
return figwheel$client$file_reloading$state_machine__27532__auto__;
})()
;})(switch__27531__auto__,c__27621__auto__))
})();
var state__27623__auto__ = (function (){var statearr_29958 = f__27622__auto__.call(null);
(statearr_29958[(6)] = c__27621__auto__);

return statearr_29958;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27623__auto__);
});})(c__27621__auto__))
);

return c__27621__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__29980 = arguments.length;
switch (G__29980) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__29982,callback){
var map__29983 = p__29982;
var map__29983__$1 = ((((!((map__29983 == null)))?(((((map__29983.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29983.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29983):map__29983);
var file_msg = map__29983__$1;
var namespace = cljs.core.get.call(null,map__29983__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__29983,map__29983__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__29983,map__29983__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__29985){
var map__29986 = p__29985;
var map__29986__$1 = ((((!((map__29986 == null)))?(((((map__29986.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29986.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29986):map__29986);
var file_msg = map__29986__$1;
var namespace = cljs.core.get.call(null,map__29986__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__29988){
var map__29989 = p__29988;
var map__29989__$1 = ((((!((map__29989 == null)))?(((((map__29989.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29989.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29989):map__29989);
var file_msg = map__29989__$1;
var namespace = cljs.core.get.call(null,map__29989__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__29991,callback){
var map__29992 = p__29991;
var map__29992__$1 = ((((!((map__29992 == null)))?(((((map__29992.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29992.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29992):map__29992);
var file_msg = map__29992__$1;
var request_url = cljs.core.get.call(null,map__29992__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__29992__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__27621__auto___30042 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27621__auto___30042,out){
return (function (){
var f__27622__auto__ = (function (){var switch__27531__auto__ = ((function (c__27621__auto___30042,out){
return (function (state_30027){
var state_val_30028 = (state_30027[(1)]);
if((state_val_30028 === (1))){
var inst_30001 = cljs.core.seq.call(null,files);
var inst_30002 = cljs.core.first.call(null,inst_30001);
var inst_30003 = cljs.core.next.call(null,inst_30001);
var inst_30004 = files;
var state_30027__$1 = (function (){var statearr_30029 = state_30027;
(statearr_30029[(7)] = inst_30004);

(statearr_30029[(8)] = inst_30002);

(statearr_30029[(9)] = inst_30003);

return statearr_30029;
})();
var statearr_30030_30043 = state_30027__$1;
(statearr_30030_30043[(2)] = null);

(statearr_30030_30043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30028 === (2))){
var inst_30010 = (state_30027[(10)]);
var inst_30004 = (state_30027[(7)]);
var inst_30009 = cljs.core.seq.call(null,inst_30004);
var inst_30010__$1 = cljs.core.first.call(null,inst_30009);
var inst_30011 = cljs.core.next.call(null,inst_30009);
var inst_30012 = (inst_30010__$1 == null);
var inst_30013 = cljs.core.not.call(null,inst_30012);
var state_30027__$1 = (function (){var statearr_30031 = state_30027;
(statearr_30031[(11)] = inst_30011);

(statearr_30031[(10)] = inst_30010__$1);

return statearr_30031;
})();
if(inst_30013){
var statearr_30032_30044 = state_30027__$1;
(statearr_30032_30044[(1)] = (4));

} else {
var statearr_30033_30045 = state_30027__$1;
(statearr_30033_30045[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30028 === (3))){
var inst_30025 = (state_30027[(2)]);
var state_30027__$1 = state_30027;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30027__$1,inst_30025);
} else {
if((state_val_30028 === (4))){
var inst_30010 = (state_30027[(10)]);
var inst_30015 = figwheel.client.file_reloading.reload_js_file.call(null,inst_30010);
var state_30027__$1 = state_30027;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30027__$1,(7),inst_30015);
} else {
if((state_val_30028 === (5))){
var inst_30021 = cljs.core.async.close_BANG_.call(null,out);
var state_30027__$1 = state_30027;
var statearr_30034_30046 = state_30027__$1;
(statearr_30034_30046[(2)] = inst_30021);

(statearr_30034_30046[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30028 === (6))){
var inst_30023 = (state_30027[(2)]);
var state_30027__$1 = state_30027;
var statearr_30035_30047 = state_30027__$1;
(statearr_30035_30047[(2)] = inst_30023);

(statearr_30035_30047[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30028 === (7))){
var inst_30011 = (state_30027[(11)]);
var inst_30017 = (state_30027[(2)]);
var inst_30018 = cljs.core.async.put_BANG_.call(null,out,inst_30017);
var inst_30004 = inst_30011;
var state_30027__$1 = (function (){var statearr_30036 = state_30027;
(statearr_30036[(12)] = inst_30018);

(statearr_30036[(7)] = inst_30004);

return statearr_30036;
})();
var statearr_30037_30048 = state_30027__$1;
(statearr_30037_30048[(2)] = null);

(statearr_30037_30048[(1)] = (2));


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
});})(c__27621__auto___30042,out))
;
return ((function (switch__27531__auto__,c__27621__auto___30042,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27532__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27532__auto____0 = (function (){
var statearr_30038 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30038[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27532__auto__);

(statearr_30038[(1)] = (1));

return statearr_30038;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27532__auto____1 = (function (state_30027){
while(true){
var ret_value__27533__auto__ = (function (){try{while(true){
var result__27534__auto__ = switch__27531__auto__.call(null,state_30027);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27534__auto__;
}
break;
}
}catch (e30039){if((e30039 instanceof Object)){
var ex__27535__auto__ = e30039;
var statearr_30040_30049 = state_30027;
(statearr_30040_30049[(5)] = ex__27535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30027);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30039;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30050 = state_30027;
state_30027 = G__30050;
continue;
} else {
return ret_value__27533__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27532__auto__ = function(state_30027){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27532__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27532__auto____1.call(this,state_30027);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27532__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27532__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27532__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27532__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27532__auto__;
})()
;})(switch__27531__auto__,c__27621__auto___30042,out))
})();
var state__27623__auto__ = (function (){var statearr_30041 = f__27622__auto__.call(null);
(statearr_30041[(6)] = c__27621__auto___30042);

return statearr_30041;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27623__auto__);
});})(c__27621__auto___30042,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__30051,opts){
var map__30052 = p__30051;
var map__30052__$1 = ((((!((map__30052 == null)))?(((((map__30052.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30052.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30052):map__30052);
var eval_body = cljs.core.get.call(null,map__30052__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__30052__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e30054){var e = e30054;
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
return (function (p1__30055_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30055_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__30056){
var vec__30057 = p__30056;
var k = cljs.core.nth.call(null,vec__30057,(0),null);
var v = cljs.core.nth.call(null,vec__30057,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__30060){
var vec__30061 = p__30060;
var k = cljs.core.nth.call(null,vec__30061,(0),null);
var v = cljs.core.nth.call(null,vec__30061,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__30067,p__30068){
var map__30069 = p__30067;
var map__30069__$1 = ((((!((map__30069 == null)))?(((((map__30069.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30069.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30069):map__30069);
var opts = map__30069__$1;
var before_jsload = cljs.core.get.call(null,map__30069__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__30069__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__30069__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__30070 = p__30068;
var map__30070__$1 = ((((!((map__30070 == null)))?(((((map__30070.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30070.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30070):map__30070);
var msg = map__30070__$1;
var files = cljs.core.get.call(null,map__30070__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__30070__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__30070__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__27621__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27621__auto__,map__30069,map__30069__$1,opts,before_jsload,on_jsload,reload_dependents,map__30070,map__30070__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__27622__auto__ = (function (){var switch__27531__auto__ = ((function (c__27621__auto__,map__30069,map__30069__$1,opts,before_jsload,on_jsload,reload_dependents,map__30070,map__30070__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_30224){
var state_val_30225 = (state_30224[(1)]);
if((state_val_30225 === (7))){
var inst_30086 = (state_30224[(7)]);
var inst_30085 = (state_30224[(8)]);
var inst_30087 = (state_30224[(9)]);
var inst_30084 = (state_30224[(10)]);
var inst_30092 = cljs.core._nth.call(null,inst_30085,inst_30087);
var inst_30093 = figwheel.client.file_reloading.eval_body.call(null,inst_30092,opts);
var inst_30094 = (inst_30087 + (1));
var tmp30226 = inst_30086;
var tmp30227 = inst_30085;
var tmp30228 = inst_30084;
var inst_30084__$1 = tmp30228;
var inst_30085__$1 = tmp30227;
var inst_30086__$1 = tmp30226;
var inst_30087__$1 = inst_30094;
var state_30224__$1 = (function (){var statearr_30229 = state_30224;
(statearr_30229[(7)] = inst_30086__$1);

(statearr_30229[(8)] = inst_30085__$1);

(statearr_30229[(11)] = inst_30093);

(statearr_30229[(9)] = inst_30087__$1);

(statearr_30229[(10)] = inst_30084__$1);

return statearr_30229;
})();
var statearr_30230_30313 = state_30224__$1;
(statearr_30230_30313[(2)] = null);

(statearr_30230_30313[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30225 === (20))){
var inst_30127 = (state_30224[(12)]);
var inst_30135 = figwheel.client.file_reloading.sort_files.call(null,inst_30127);
var state_30224__$1 = state_30224;
var statearr_30231_30314 = state_30224__$1;
(statearr_30231_30314[(2)] = inst_30135);

(statearr_30231_30314[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30225 === (27))){
var state_30224__$1 = state_30224;
var statearr_30232_30315 = state_30224__$1;
(statearr_30232_30315[(2)] = null);

(statearr_30232_30315[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30225 === (1))){
var inst_30076 = (state_30224[(13)]);
var inst_30073 = before_jsload.call(null,files);
var inst_30074 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_30075 = (function (){return ((function (inst_30076,inst_30073,inst_30074,state_val_30225,c__27621__auto__,map__30069,map__30069__$1,opts,before_jsload,on_jsload,reload_dependents,map__30070,map__30070__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30064_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30064_SHARP_);
});
;})(inst_30076,inst_30073,inst_30074,state_val_30225,c__27621__auto__,map__30069,map__30069__$1,opts,before_jsload,on_jsload,reload_dependents,map__30070,map__30070__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30076__$1 = cljs.core.filter.call(null,inst_30075,files);
var inst_30077 = cljs.core.not_empty.call(null,inst_30076__$1);
var state_30224__$1 = (function (){var statearr_30233 = state_30224;
(statearr_30233[(14)] = inst_30073);

(statearr_30233[(13)] = inst_30076__$1);

(statearr_30233[(15)] = inst_30074);

return statearr_30233;
})();
if(cljs.core.truth_(inst_30077)){
var statearr_30234_30316 = state_30224__$1;
(statearr_30234_30316[(1)] = (2));

} else {
var statearr_30235_30317 = state_30224__$1;
(statearr_30235_30317[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30225 === (24))){
var state_30224__$1 = state_30224;
var statearr_30236_30318 = state_30224__$1;
(statearr_30236_30318[(2)] = null);

(statearr_30236_30318[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30225 === (39))){
var inst_30177 = (state_30224[(16)]);
var state_30224__$1 = state_30224;
var statearr_30237_30319 = state_30224__$1;
(statearr_30237_30319[(2)] = inst_30177);

(statearr_30237_30319[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30225 === (46))){
var inst_30219 = (state_30224[(2)]);
var state_30224__$1 = state_30224;
var statearr_30238_30320 = state_30224__$1;
(statearr_30238_30320[(2)] = inst_30219);

(statearr_30238_30320[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30225 === (4))){
var inst_30121 = (state_30224[(2)]);
var inst_30122 = cljs.core.List.EMPTY;
var inst_30123 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_30122);
var inst_30124 = (function (){return ((function (inst_30121,inst_30122,inst_30123,state_val_30225,c__27621__auto__,map__30069,map__30069__$1,opts,before_jsload,on_jsload,reload_dependents,map__30070,map__30070__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30065_SHARP_){
var and__3911__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30065_SHARP_);
if(cljs.core.truth_(and__3911__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30065_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__30065_SHARP_))));
} else {
return and__3911__auto__;
}
});
;})(inst_30121,inst_30122,inst_30123,state_val_30225,c__27621__auto__,map__30069,map__30069__$1,opts,before_jsload,on_jsload,reload_dependents,map__30070,map__30070__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30125 = cljs.core.filter.call(null,inst_30124,files);
var inst_30126 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_30127 = cljs.core.concat.call(null,inst_30125,inst_30126);
var state_30224__$1 = (function (){var statearr_30239 = state_30224;
(statearr_30239[(17)] = inst_30121);

(statearr_30239[(18)] = inst_30123);

(statearr_30239[(12)] = inst_30127);

return statearr_30239;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_30240_30321 = state_30224__$1;
(statearr_30240_30321[(1)] = (16));

} else {
var statearr_30241_30322 = state_30224__$1;
(statearr_30241_30322[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30225 === (15))){
var inst_30111 = (state_30224[(2)]);
var state_30224__$1 = state_30224;
var statearr_30242_30323 = state_30224__$1;
(statearr_30242_30323[(2)] = inst_30111);

(statearr_30242_30323[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30225 === (21))){
var inst_30137 = (state_30224[(19)]);
var inst_30137__$1 = (state_30224[(2)]);
var inst_30138 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_30137__$1);
var state_30224__$1 = (function (){var statearr_30243 = state_30224;
(statearr_30243[(19)] = inst_30137__$1);

return statearr_30243;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30224__$1,(22),inst_30138);
} else {
if((state_val_30225 === (31))){
var inst_30222 = (state_30224[(2)]);
var state_30224__$1 = state_30224;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30224__$1,inst_30222);
} else {
if((state_val_30225 === (32))){
var inst_30177 = (state_30224[(16)]);
var inst_30182 = inst_30177.cljs$lang$protocol_mask$partition0$;
var inst_30183 = (inst_30182 & (64));
var inst_30184 = inst_30177.cljs$core$ISeq$;
var inst_30185 = (cljs.core.PROTOCOL_SENTINEL === inst_30184);
var inst_30186 = ((inst_30183) || (inst_30185));
var state_30224__$1 = state_30224;
if(cljs.core.truth_(inst_30186)){
var statearr_30244_30324 = state_30224__$1;
(statearr_30244_30324[(1)] = (35));

} else {
var statearr_30245_30325 = state_30224__$1;
(statearr_30245_30325[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30225 === (40))){
var inst_30199 = (state_30224[(20)]);
var inst_30198 = (state_30224[(2)]);
var inst_30199__$1 = cljs.core.get.call(null,inst_30198,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_30200 = cljs.core.get.call(null,inst_30198,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_30201 = cljs.core.not_empty.call(null,inst_30199__$1);
var state_30224__$1 = (function (){var statearr_30246 = state_30224;
(statearr_30246[(21)] = inst_30200);

(statearr_30246[(20)] = inst_30199__$1);

return statearr_30246;
})();
if(cljs.core.truth_(inst_30201)){
var statearr_30247_30326 = state_30224__$1;
(statearr_30247_30326[(1)] = (41));

} else {
var statearr_30248_30327 = state_30224__$1;
(statearr_30248_30327[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30225 === (33))){
var state_30224__$1 = state_30224;
var statearr_30249_30328 = state_30224__$1;
(statearr_30249_30328[(2)] = false);

(statearr_30249_30328[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30225 === (13))){
var inst_30097 = (state_30224[(22)]);
var inst_30101 = cljs.core.chunk_first.call(null,inst_30097);
var inst_30102 = cljs.core.chunk_rest.call(null,inst_30097);
var inst_30103 = cljs.core.count.call(null,inst_30101);
var inst_30084 = inst_30102;
var inst_30085 = inst_30101;
var inst_30086 = inst_30103;
var inst_30087 = (0);
var state_30224__$1 = (function (){var statearr_30250 = state_30224;
(statearr_30250[(7)] = inst_30086);

(statearr_30250[(8)] = inst_30085);

(statearr_30250[(9)] = inst_30087);

(statearr_30250[(10)] = inst_30084);

return statearr_30250;
})();
var statearr_30251_30329 = state_30224__$1;
(statearr_30251_30329[(2)] = null);

(statearr_30251_30329[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30225 === (22))){
var inst_30145 = (state_30224[(23)]);
var inst_30141 = (state_30224[(24)]);
var inst_30137 = (state_30224[(19)]);
var inst_30140 = (state_30224[(25)]);
var inst_30140__$1 = (state_30224[(2)]);
var inst_30141__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30140__$1);
var inst_30142 = (function (){var all_files = inst_30137;
var res_SINGLEQUOTE_ = inst_30140__$1;
var res = inst_30141__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_30145,inst_30141,inst_30137,inst_30140,inst_30140__$1,inst_30141__$1,state_val_30225,c__27621__auto__,map__30069,map__30069__$1,opts,before_jsload,on_jsload,reload_dependents,map__30070,map__30070__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30066_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__30066_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_30145,inst_30141,inst_30137,inst_30140,inst_30140__$1,inst_30141__$1,state_val_30225,c__27621__auto__,map__30069,map__30069__$1,opts,before_jsload,on_jsload,reload_dependents,map__30070,map__30070__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30143 = cljs.core.filter.call(null,inst_30142,inst_30140__$1);
var inst_30144 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_30145__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30144);
var inst_30146 = cljs.core.not_empty.call(null,inst_30145__$1);
var state_30224__$1 = (function (){var statearr_30252 = state_30224;
(statearr_30252[(23)] = inst_30145__$1);

(statearr_30252[(24)] = inst_30141__$1);

(statearr_30252[(26)] = inst_30143);

(statearr_30252[(25)] = inst_30140__$1);

return statearr_30252;
})();
if(cljs.core.truth_(inst_30146)){
var statearr_30253_30330 = state_30224__$1;
(statearr_30253_30330[(1)] = (23));

} else {
var statearr_30254_30331 = state_30224__$1;
(statearr_30254_30331[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30225 === (36))){
var state_30224__$1 = state_30224;
var statearr_30255_30332 = state_30224__$1;
(statearr_30255_30332[(2)] = false);

(statearr_30255_30332[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30225 === (41))){
var inst_30199 = (state_30224[(20)]);
var inst_30203 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_30204 = cljs.core.map.call(null,inst_30203,inst_30199);
var inst_30205 = cljs.core.pr_str.call(null,inst_30204);
var inst_30206 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30205)].join('');
var inst_30207 = figwheel.client.utils.log.call(null,inst_30206);
var state_30224__$1 = state_30224;
var statearr_30256_30333 = state_30224__$1;
(statearr_30256_30333[(2)] = inst_30207);

(statearr_30256_30333[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30225 === (43))){
var inst_30200 = (state_30224[(21)]);
var inst_30210 = (state_30224[(2)]);
var inst_30211 = cljs.core.not_empty.call(null,inst_30200);
var state_30224__$1 = (function (){var statearr_30257 = state_30224;
(statearr_30257[(27)] = inst_30210);

return statearr_30257;
})();
if(cljs.core.truth_(inst_30211)){
var statearr_30258_30334 = state_30224__$1;
(statearr_30258_30334[(1)] = (44));

} else {
var statearr_30259_30335 = state_30224__$1;
(statearr_30259_30335[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30225 === (29))){
var inst_30145 = (state_30224[(23)]);
var inst_30141 = (state_30224[(24)]);
var inst_30137 = (state_30224[(19)]);
var inst_30143 = (state_30224[(26)]);
var inst_30140 = (state_30224[(25)]);
var inst_30177 = (state_30224[(16)]);
var inst_30173 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_30176 = (function (){var all_files = inst_30137;
var res_SINGLEQUOTE_ = inst_30140;
var res = inst_30141;
var files_not_loaded = inst_30143;
var dependencies_that_loaded = inst_30145;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30145,inst_30141,inst_30137,inst_30143,inst_30140,inst_30177,inst_30173,state_val_30225,c__27621__auto__,map__30069,map__30069__$1,opts,before_jsload,on_jsload,reload_dependents,map__30070,map__30070__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30175){
var map__30260 = p__30175;
var map__30260__$1 = ((((!((map__30260 == null)))?(((((map__30260.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30260.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30260):map__30260);
var namespace = cljs.core.get.call(null,map__30260__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30145,inst_30141,inst_30137,inst_30143,inst_30140,inst_30177,inst_30173,state_val_30225,c__27621__auto__,map__30069,map__30069__$1,opts,before_jsload,on_jsload,reload_dependents,map__30070,map__30070__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30177__$1 = cljs.core.group_by.call(null,inst_30176,inst_30143);
var inst_30179 = (inst_30177__$1 == null);
var inst_30180 = cljs.core.not.call(null,inst_30179);
var state_30224__$1 = (function (){var statearr_30262 = state_30224;
(statearr_30262[(28)] = inst_30173);

(statearr_30262[(16)] = inst_30177__$1);

return statearr_30262;
})();
if(inst_30180){
var statearr_30263_30336 = state_30224__$1;
(statearr_30263_30336[(1)] = (32));

} else {
var statearr_30264_30337 = state_30224__$1;
(statearr_30264_30337[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30225 === (44))){
var inst_30200 = (state_30224[(21)]);
var inst_30213 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30200);
var inst_30214 = cljs.core.pr_str.call(null,inst_30213);
var inst_30215 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30214)].join('');
var inst_30216 = figwheel.client.utils.log.call(null,inst_30215);
var state_30224__$1 = state_30224;
var statearr_30265_30338 = state_30224__$1;
(statearr_30265_30338[(2)] = inst_30216);

(statearr_30265_30338[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30225 === (6))){
var inst_30118 = (state_30224[(2)]);
var state_30224__$1 = state_30224;
var statearr_30266_30339 = state_30224__$1;
(statearr_30266_30339[(2)] = inst_30118);

(statearr_30266_30339[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30225 === (28))){
var inst_30143 = (state_30224[(26)]);
var inst_30170 = (state_30224[(2)]);
var inst_30171 = cljs.core.not_empty.call(null,inst_30143);
var state_30224__$1 = (function (){var statearr_30267 = state_30224;
(statearr_30267[(29)] = inst_30170);

return statearr_30267;
})();
if(cljs.core.truth_(inst_30171)){
var statearr_30268_30340 = state_30224__$1;
(statearr_30268_30340[(1)] = (29));

} else {
var statearr_30269_30341 = state_30224__$1;
(statearr_30269_30341[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30225 === (25))){
var inst_30141 = (state_30224[(24)]);
var inst_30157 = (state_30224[(2)]);
var inst_30158 = cljs.core.not_empty.call(null,inst_30141);
var state_30224__$1 = (function (){var statearr_30270 = state_30224;
(statearr_30270[(30)] = inst_30157);

return statearr_30270;
})();
if(cljs.core.truth_(inst_30158)){
var statearr_30271_30342 = state_30224__$1;
(statearr_30271_30342[(1)] = (26));

} else {
var statearr_30272_30343 = state_30224__$1;
(statearr_30272_30343[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30225 === (34))){
var inst_30193 = (state_30224[(2)]);
var state_30224__$1 = state_30224;
if(cljs.core.truth_(inst_30193)){
var statearr_30273_30344 = state_30224__$1;
(statearr_30273_30344[(1)] = (38));

} else {
var statearr_30274_30345 = state_30224__$1;
(statearr_30274_30345[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30225 === (17))){
var state_30224__$1 = state_30224;
var statearr_30275_30346 = state_30224__$1;
(statearr_30275_30346[(2)] = recompile_dependents);

(statearr_30275_30346[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30225 === (3))){
var state_30224__$1 = state_30224;
var statearr_30276_30347 = state_30224__$1;
(statearr_30276_30347[(2)] = null);

(statearr_30276_30347[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30225 === (12))){
var inst_30114 = (state_30224[(2)]);
var state_30224__$1 = state_30224;
var statearr_30277_30348 = state_30224__$1;
(statearr_30277_30348[(2)] = inst_30114);

(statearr_30277_30348[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30225 === (2))){
var inst_30076 = (state_30224[(13)]);
var inst_30083 = cljs.core.seq.call(null,inst_30076);
var inst_30084 = inst_30083;
var inst_30085 = null;
var inst_30086 = (0);
var inst_30087 = (0);
var state_30224__$1 = (function (){var statearr_30278 = state_30224;
(statearr_30278[(7)] = inst_30086);

(statearr_30278[(8)] = inst_30085);

(statearr_30278[(9)] = inst_30087);

(statearr_30278[(10)] = inst_30084);

return statearr_30278;
})();
var statearr_30279_30349 = state_30224__$1;
(statearr_30279_30349[(2)] = null);

(statearr_30279_30349[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30225 === (23))){
var inst_30145 = (state_30224[(23)]);
var inst_30141 = (state_30224[(24)]);
var inst_30137 = (state_30224[(19)]);
var inst_30143 = (state_30224[(26)]);
var inst_30140 = (state_30224[(25)]);
var inst_30148 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_30150 = (function (){var all_files = inst_30137;
var res_SINGLEQUOTE_ = inst_30140;
var res = inst_30141;
var files_not_loaded = inst_30143;
var dependencies_that_loaded = inst_30145;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30145,inst_30141,inst_30137,inst_30143,inst_30140,inst_30148,state_val_30225,c__27621__auto__,map__30069,map__30069__$1,opts,before_jsload,on_jsload,reload_dependents,map__30070,map__30070__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30149){
var map__30280 = p__30149;
var map__30280__$1 = ((((!((map__30280 == null)))?(((((map__30280.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30280.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30280):map__30280);
var request_url = cljs.core.get.call(null,map__30280__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30145,inst_30141,inst_30137,inst_30143,inst_30140,inst_30148,state_val_30225,c__27621__auto__,map__30069,map__30069__$1,opts,before_jsload,on_jsload,reload_dependents,map__30070,map__30070__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30151 = cljs.core.reverse.call(null,inst_30145);
var inst_30152 = cljs.core.map.call(null,inst_30150,inst_30151);
var inst_30153 = cljs.core.pr_str.call(null,inst_30152);
var inst_30154 = figwheel.client.utils.log.call(null,inst_30153);
var state_30224__$1 = (function (){var statearr_30282 = state_30224;
(statearr_30282[(31)] = inst_30148);

return statearr_30282;
})();
var statearr_30283_30350 = state_30224__$1;
(statearr_30283_30350[(2)] = inst_30154);

(statearr_30283_30350[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30225 === (35))){
var state_30224__$1 = state_30224;
var statearr_30284_30351 = state_30224__$1;
(statearr_30284_30351[(2)] = true);

(statearr_30284_30351[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30225 === (19))){
var inst_30127 = (state_30224[(12)]);
var inst_30133 = figwheel.client.file_reloading.expand_files.call(null,inst_30127);
var state_30224__$1 = state_30224;
var statearr_30285_30352 = state_30224__$1;
(statearr_30285_30352[(2)] = inst_30133);

(statearr_30285_30352[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30225 === (11))){
var state_30224__$1 = state_30224;
var statearr_30286_30353 = state_30224__$1;
(statearr_30286_30353[(2)] = null);

(statearr_30286_30353[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30225 === (9))){
var inst_30116 = (state_30224[(2)]);
var state_30224__$1 = state_30224;
var statearr_30287_30354 = state_30224__$1;
(statearr_30287_30354[(2)] = inst_30116);

(statearr_30287_30354[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30225 === (5))){
var inst_30086 = (state_30224[(7)]);
var inst_30087 = (state_30224[(9)]);
var inst_30089 = (inst_30087 < inst_30086);
var inst_30090 = inst_30089;
var state_30224__$1 = state_30224;
if(cljs.core.truth_(inst_30090)){
var statearr_30288_30355 = state_30224__$1;
(statearr_30288_30355[(1)] = (7));

} else {
var statearr_30289_30356 = state_30224__$1;
(statearr_30289_30356[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30225 === (14))){
var inst_30097 = (state_30224[(22)]);
var inst_30106 = cljs.core.first.call(null,inst_30097);
var inst_30107 = figwheel.client.file_reloading.eval_body.call(null,inst_30106,opts);
var inst_30108 = cljs.core.next.call(null,inst_30097);
var inst_30084 = inst_30108;
var inst_30085 = null;
var inst_30086 = (0);
var inst_30087 = (0);
var state_30224__$1 = (function (){var statearr_30290 = state_30224;
(statearr_30290[(7)] = inst_30086);

(statearr_30290[(8)] = inst_30085);

(statearr_30290[(9)] = inst_30087);

(statearr_30290[(10)] = inst_30084);

(statearr_30290[(32)] = inst_30107);

return statearr_30290;
})();
var statearr_30291_30357 = state_30224__$1;
(statearr_30291_30357[(2)] = null);

(statearr_30291_30357[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30225 === (45))){
var state_30224__$1 = state_30224;
var statearr_30292_30358 = state_30224__$1;
(statearr_30292_30358[(2)] = null);

(statearr_30292_30358[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30225 === (26))){
var inst_30145 = (state_30224[(23)]);
var inst_30141 = (state_30224[(24)]);
var inst_30137 = (state_30224[(19)]);
var inst_30143 = (state_30224[(26)]);
var inst_30140 = (state_30224[(25)]);
var inst_30160 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_30162 = (function (){var all_files = inst_30137;
var res_SINGLEQUOTE_ = inst_30140;
var res = inst_30141;
var files_not_loaded = inst_30143;
var dependencies_that_loaded = inst_30145;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30145,inst_30141,inst_30137,inst_30143,inst_30140,inst_30160,state_val_30225,c__27621__auto__,map__30069,map__30069__$1,opts,before_jsload,on_jsload,reload_dependents,map__30070,map__30070__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30161){
var map__30293 = p__30161;
var map__30293__$1 = ((((!((map__30293 == null)))?(((((map__30293.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30293.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30293):map__30293);
var namespace = cljs.core.get.call(null,map__30293__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__30293__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30145,inst_30141,inst_30137,inst_30143,inst_30140,inst_30160,state_val_30225,c__27621__auto__,map__30069,map__30069__$1,opts,before_jsload,on_jsload,reload_dependents,map__30070,map__30070__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30163 = cljs.core.map.call(null,inst_30162,inst_30141);
var inst_30164 = cljs.core.pr_str.call(null,inst_30163);
var inst_30165 = figwheel.client.utils.log.call(null,inst_30164);
var inst_30166 = (function (){var all_files = inst_30137;
var res_SINGLEQUOTE_ = inst_30140;
var res = inst_30141;
var files_not_loaded = inst_30143;
var dependencies_that_loaded = inst_30145;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30145,inst_30141,inst_30137,inst_30143,inst_30140,inst_30160,inst_30162,inst_30163,inst_30164,inst_30165,state_val_30225,c__27621__auto__,map__30069,map__30069__$1,opts,before_jsload,on_jsload,reload_dependents,map__30070,map__30070__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30145,inst_30141,inst_30137,inst_30143,inst_30140,inst_30160,inst_30162,inst_30163,inst_30164,inst_30165,state_val_30225,c__27621__auto__,map__30069,map__30069__$1,opts,before_jsload,on_jsload,reload_dependents,map__30070,map__30070__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30167 = setTimeout(inst_30166,(10));
var state_30224__$1 = (function (){var statearr_30295 = state_30224;
(statearr_30295[(33)] = inst_30165);

(statearr_30295[(34)] = inst_30160);

return statearr_30295;
})();
var statearr_30296_30359 = state_30224__$1;
(statearr_30296_30359[(2)] = inst_30167);

(statearr_30296_30359[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30225 === (16))){
var state_30224__$1 = state_30224;
var statearr_30297_30360 = state_30224__$1;
(statearr_30297_30360[(2)] = reload_dependents);

(statearr_30297_30360[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30225 === (38))){
var inst_30177 = (state_30224[(16)]);
var inst_30195 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30177);
var state_30224__$1 = state_30224;
var statearr_30298_30361 = state_30224__$1;
(statearr_30298_30361[(2)] = inst_30195);

(statearr_30298_30361[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30225 === (30))){
var state_30224__$1 = state_30224;
var statearr_30299_30362 = state_30224__$1;
(statearr_30299_30362[(2)] = null);

(statearr_30299_30362[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30225 === (10))){
var inst_30097 = (state_30224[(22)]);
var inst_30099 = cljs.core.chunked_seq_QMARK_.call(null,inst_30097);
var state_30224__$1 = state_30224;
if(inst_30099){
var statearr_30300_30363 = state_30224__$1;
(statearr_30300_30363[(1)] = (13));

} else {
var statearr_30301_30364 = state_30224__$1;
(statearr_30301_30364[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30225 === (18))){
var inst_30131 = (state_30224[(2)]);
var state_30224__$1 = state_30224;
if(cljs.core.truth_(inst_30131)){
var statearr_30302_30365 = state_30224__$1;
(statearr_30302_30365[(1)] = (19));

} else {
var statearr_30303_30366 = state_30224__$1;
(statearr_30303_30366[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30225 === (42))){
var state_30224__$1 = state_30224;
var statearr_30304_30367 = state_30224__$1;
(statearr_30304_30367[(2)] = null);

(statearr_30304_30367[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30225 === (37))){
var inst_30190 = (state_30224[(2)]);
var state_30224__$1 = state_30224;
var statearr_30305_30368 = state_30224__$1;
(statearr_30305_30368[(2)] = inst_30190);

(statearr_30305_30368[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30225 === (8))){
var inst_30097 = (state_30224[(22)]);
var inst_30084 = (state_30224[(10)]);
var inst_30097__$1 = cljs.core.seq.call(null,inst_30084);
var state_30224__$1 = (function (){var statearr_30306 = state_30224;
(statearr_30306[(22)] = inst_30097__$1);

return statearr_30306;
})();
if(inst_30097__$1){
var statearr_30307_30369 = state_30224__$1;
(statearr_30307_30369[(1)] = (10));

} else {
var statearr_30308_30370 = state_30224__$1;
(statearr_30308_30370[(1)] = (11));

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
});})(c__27621__auto__,map__30069,map__30069__$1,opts,before_jsload,on_jsload,reload_dependents,map__30070,map__30070__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__27531__auto__,c__27621__auto__,map__30069,map__30069__$1,opts,before_jsload,on_jsload,reload_dependents,map__30070,map__30070__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27532__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27532__auto____0 = (function (){
var statearr_30309 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30309[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__27532__auto__);

(statearr_30309[(1)] = (1));

return statearr_30309;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27532__auto____1 = (function (state_30224){
while(true){
var ret_value__27533__auto__ = (function (){try{while(true){
var result__27534__auto__ = switch__27531__auto__.call(null,state_30224);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27534__auto__;
}
break;
}
}catch (e30310){if((e30310 instanceof Object)){
var ex__27535__auto__ = e30310;
var statearr_30311_30371 = state_30224;
(statearr_30311_30371[(5)] = ex__27535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30224);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30310;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30372 = state_30224;
state_30224 = G__30372;
continue;
} else {
return ret_value__27533__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__27532__auto__ = function(state_30224){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27532__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27532__auto____1.call(this,state_30224);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__27532__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27532__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__27532__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27532__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27532__auto__;
})()
;})(switch__27531__auto__,c__27621__auto__,map__30069,map__30069__$1,opts,before_jsload,on_jsload,reload_dependents,map__30070,map__30070__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__27623__auto__ = (function (){var statearr_30312 = f__27622__auto__.call(null);
(statearr_30312[(6)] = c__27621__auto__);

return statearr_30312;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27623__auto__);
});})(c__27621__auto__,map__30069,map__30069__$1,opts,before_jsload,on_jsload,reload_dependents,map__30070,map__30070__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__27621__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__30375,link){
var map__30376 = p__30375;
var map__30376__$1 = ((((!((map__30376 == null)))?(((((map__30376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30376.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30376):map__30376);
var file = cljs.core.get.call(null,map__30376__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__30376,map__30376__$1,file){
return (function (p1__30373_SHARP_,p2__30374_SHARP_){
if(cljs.core._EQ_.call(null,p1__30373_SHARP_,p2__30374_SHARP_)){
return p1__30373_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__30376,map__30376__$1,file))
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
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__30379){
var map__30380 = p__30379;
var map__30380__$1 = ((((!((map__30380 == null)))?(((((map__30380.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30380.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30380):map__30380);
var match_length = cljs.core.get.call(null,map__30380__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__30380__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__30378_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__30378_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__30382_SHARP_,p2__30383_SHARP_){
return cljs.core.assoc.call(null,p1__30382_SHARP_,cljs.core.get.call(null,p2__30383_SHARP_,key),p2__30383_SHARP_);
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
var loaded_f_datas_30384 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_30384);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_30384);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__30385,p__30386){
var map__30387 = p__30385;
var map__30387__$1 = ((((!((map__30387 == null)))?(((((map__30387.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30387.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30387):map__30387);
var on_cssload = cljs.core.get.call(null,map__30387__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__30388 = p__30386;
var map__30388__$1 = ((((!((map__30388 == null)))?(((((map__30388.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30388.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30388):map__30388);
var files_msg = map__30388__$1;
var files = cljs.core.get.call(null,map__30388__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1525301025536
