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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__83844_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__83844_SHARP_));
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
var seq__83845 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__83846 = null;
var count__83847 = (0);
var i__83848 = (0);
while(true){
if((i__83848 < count__83847)){
var n = cljs.core._nth.call(null,chunk__83846,i__83848);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__83849 = seq__83845;
var G__83850 = chunk__83846;
var G__83851 = count__83847;
var G__83852 = (i__83848 + (1));
seq__83845 = G__83849;
chunk__83846 = G__83850;
count__83847 = G__83851;
i__83848 = G__83852;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__83845);
if(temp__5457__auto__){
var seq__83845__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__83845__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__83845__$1);
var G__83853 = cljs.core.chunk_rest.call(null,seq__83845__$1);
var G__83854 = c__4319__auto__;
var G__83855 = cljs.core.count.call(null,c__4319__auto__);
var G__83856 = (0);
seq__83845 = G__83853;
chunk__83846 = G__83854;
count__83847 = G__83855;
i__83848 = G__83856;
continue;
} else {
var n = cljs.core.first.call(null,seq__83845__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__83857 = cljs.core.next.call(null,seq__83845__$1);
var G__83858 = null;
var G__83859 = (0);
var G__83860 = (0);
seq__83845 = G__83857;
chunk__83846 = G__83858;
count__83847 = G__83859;
i__83848 = G__83860;
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
return cljs.core.some.call(null,(function (p__83861){
var vec__83862 = p__83861;
var _ = cljs.core.nth.call(null,vec__83862,(0),null);
var v = cljs.core.nth.call(null,vec__83862,(1),null);
var and__3911__auto__ = v;
if(cljs.core.truth_(and__3911__auto__)){
return v.call(null,dep);
} else {
return and__3911__auto__;
}
}),cljs.core.filter.call(null,(function (p__83865){
var vec__83866 = p__83865;
var k = cljs.core.nth.call(null,vec__83866,(0),null);
var v = cljs.core.nth.call(null,vec__83866,(1),null);
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

var seq__83878_83886 = cljs.core.seq.call(null,deps);
var chunk__83879_83887 = null;
var count__83880_83888 = (0);
var i__83881_83889 = (0);
while(true){
if((i__83881_83889 < count__83880_83888)){
var dep_83890 = cljs.core._nth.call(null,chunk__83879_83887,i__83881_83889);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_83890;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_83890));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_83890,(depth + (1)),state);
} else {
}


var G__83891 = seq__83878_83886;
var G__83892 = chunk__83879_83887;
var G__83893 = count__83880_83888;
var G__83894 = (i__83881_83889 + (1));
seq__83878_83886 = G__83891;
chunk__83879_83887 = G__83892;
count__83880_83888 = G__83893;
i__83881_83889 = G__83894;
continue;
} else {
var temp__5457__auto___83895 = cljs.core.seq.call(null,seq__83878_83886);
if(temp__5457__auto___83895){
var seq__83878_83896__$1 = temp__5457__auto___83895;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__83878_83896__$1)){
var c__4319__auto___83897 = cljs.core.chunk_first.call(null,seq__83878_83896__$1);
var G__83898 = cljs.core.chunk_rest.call(null,seq__83878_83896__$1);
var G__83899 = c__4319__auto___83897;
var G__83900 = cljs.core.count.call(null,c__4319__auto___83897);
var G__83901 = (0);
seq__83878_83886 = G__83898;
chunk__83879_83887 = G__83899;
count__83880_83888 = G__83900;
i__83881_83889 = G__83901;
continue;
} else {
var dep_83902 = cljs.core.first.call(null,seq__83878_83896__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_83902;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_83902));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_83902,(depth + (1)),state);
} else {
}


var G__83903 = cljs.core.next.call(null,seq__83878_83896__$1);
var G__83904 = null;
var G__83905 = (0);
var G__83906 = (0);
seq__83878_83886 = G__83903;
chunk__83879_83887 = G__83904;
count__83880_83888 = G__83905;
i__83881_83889 = G__83906;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__83882){
var vec__83883 = p__83882;
var seq__83884 = cljs.core.seq.call(null,vec__83883);
var first__83885 = cljs.core.first.call(null,seq__83884);
var seq__83884__$1 = cljs.core.next.call(null,seq__83884);
var x = first__83885;
var xs = seq__83884__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__83883,seq__83884,first__83885,seq__83884__$1,x,xs,get_deps__$1){
return (function (p1__83869_SHARP_){
return clojure.set.difference.call(null,p1__83869_SHARP_,x);
});})(vec__83883,seq__83884,first__83885,seq__83884__$1,x,xs,get_deps__$1))
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
var seq__83907 = cljs.core.seq.call(null,provides);
var chunk__83908 = null;
var count__83909 = (0);
var i__83910 = (0);
while(true){
if((i__83910 < count__83909)){
var prov = cljs.core._nth.call(null,chunk__83908,i__83910);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__83911_83919 = cljs.core.seq.call(null,requires);
var chunk__83912_83920 = null;
var count__83913_83921 = (0);
var i__83914_83922 = (0);
while(true){
if((i__83914_83922 < count__83913_83921)){
var req_83923 = cljs.core._nth.call(null,chunk__83912_83920,i__83914_83922);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_83923,prov);


var G__83924 = seq__83911_83919;
var G__83925 = chunk__83912_83920;
var G__83926 = count__83913_83921;
var G__83927 = (i__83914_83922 + (1));
seq__83911_83919 = G__83924;
chunk__83912_83920 = G__83925;
count__83913_83921 = G__83926;
i__83914_83922 = G__83927;
continue;
} else {
var temp__5457__auto___83928 = cljs.core.seq.call(null,seq__83911_83919);
if(temp__5457__auto___83928){
var seq__83911_83929__$1 = temp__5457__auto___83928;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__83911_83929__$1)){
var c__4319__auto___83930 = cljs.core.chunk_first.call(null,seq__83911_83929__$1);
var G__83931 = cljs.core.chunk_rest.call(null,seq__83911_83929__$1);
var G__83932 = c__4319__auto___83930;
var G__83933 = cljs.core.count.call(null,c__4319__auto___83930);
var G__83934 = (0);
seq__83911_83919 = G__83931;
chunk__83912_83920 = G__83932;
count__83913_83921 = G__83933;
i__83914_83922 = G__83934;
continue;
} else {
var req_83935 = cljs.core.first.call(null,seq__83911_83929__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_83935,prov);


var G__83936 = cljs.core.next.call(null,seq__83911_83929__$1);
var G__83937 = null;
var G__83938 = (0);
var G__83939 = (0);
seq__83911_83919 = G__83936;
chunk__83912_83920 = G__83937;
count__83913_83921 = G__83938;
i__83914_83922 = G__83939;
continue;
}
} else {
}
}
break;
}


var G__83940 = seq__83907;
var G__83941 = chunk__83908;
var G__83942 = count__83909;
var G__83943 = (i__83910 + (1));
seq__83907 = G__83940;
chunk__83908 = G__83941;
count__83909 = G__83942;
i__83910 = G__83943;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__83907);
if(temp__5457__auto__){
var seq__83907__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__83907__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__83907__$1);
var G__83944 = cljs.core.chunk_rest.call(null,seq__83907__$1);
var G__83945 = c__4319__auto__;
var G__83946 = cljs.core.count.call(null,c__4319__auto__);
var G__83947 = (0);
seq__83907 = G__83944;
chunk__83908 = G__83945;
count__83909 = G__83946;
i__83910 = G__83947;
continue;
} else {
var prov = cljs.core.first.call(null,seq__83907__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__83915_83948 = cljs.core.seq.call(null,requires);
var chunk__83916_83949 = null;
var count__83917_83950 = (0);
var i__83918_83951 = (0);
while(true){
if((i__83918_83951 < count__83917_83950)){
var req_83952 = cljs.core._nth.call(null,chunk__83916_83949,i__83918_83951);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_83952,prov);


var G__83953 = seq__83915_83948;
var G__83954 = chunk__83916_83949;
var G__83955 = count__83917_83950;
var G__83956 = (i__83918_83951 + (1));
seq__83915_83948 = G__83953;
chunk__83916_83949 = G__83954;
count__83917_83950 = G__83955;
i__83918_83951 = G__83956;
continue;
} else {
var temp__5457__auto___83957__$1 = cljs.core.seq.call(null,seq__83915_83948);
if(temp__5457__auto___83957__$1){
var seq__83915_83958__$1 = temp__5457__auto___83957__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__83915_83958__$1)){
var c__4319__auto___83959 = cljs.core.chunk_first.call(null,seq__83915_83958__$1);
var G__83960 = cljs.core.chunk_rest.call(null,seq__83915_83958__$1);
var G__83961 = c__4319__auto___83959;
var G__83962 = cljs.core.count.call(null,c__4319__auto___83959);
var G__83963 = (0);
seq__83915_83948 = G__83960;
chunk__83916_83949 = G__83961;
count__83917_83950 = G__83962;
i__83918_83951 = G__83963;
continue;
} else {
var req_83964 = cljs.core.first.call(null,seq__83915_83958__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_83964,prov);


var G__83965 = cljs.core.next.call(null,seq__83915_83958__$1);
var G__83966 = null;
var G__83967 = (0);
var G__83968 = (0);
seq__83915_83948 = G__83965;
chunk__83916_83949 = G__83966;
count__83917_83950 = G__83967;
i__83918_83951 = G__83968;
continue;
}
} else {
}
}
break;
}


var G__83969 = cljs.core.next.call(null,seq__83907__$1);
var G__83970 = null;
var G__83971 = (0);
var G__83972 = (0);
seq__83907 = G__83969;
chunk__83908 = G__83970;
count__83909 = G__83971;
i__83910 = G__83972;
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
var seq__83973_83977 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__83974_83978 = null;
var count__83975_83979 = (0);
var i__83976_83980 = (0);
while(true){
if((i__83976_83980 < count__83975_83979)){
var ns_83981 = cljs.core._nth.call(null,chunk__83974_83978,i__83976_83980);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_83981);


var G__83982 = seq__83973_83977;
var G__83983 = chunk__83974_83978;
var G__83984 = count__83975_83979;
var G__83985 = (i__83976_83980 + (1));
seq__83973_83977 = G__83982;
chunk__83974_83978 = G__83983;
count__83975_83979 = G__83984;
i__83976_83980 = G__83985;
continue;
} else {
var temp__5457__auto___83986 = cljs.core.seq.call(null,seq__83973_83977);
if(temp__5457__auto___83986){
var seq__83973_83987__$1 = temp__5457__auto___83986;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__83973_83987__$1)){
var c__4319__auto___83988 = cljs.core.chunk_first.call(null,seq__83973_83987__$1);
var G__83989 = cljs.core.chunk_rest.call(null,seq__83973_83987__$1);
var G__83990 = c__4319__auto___83988;
var G__83991 = cljs.core.count.call(null,c__4319__auto___83988);
var G__83992 = (0);
seq__83973_83977 = G__83989;
chunk__83974_83978 = G__83990;
count__83975_83979 = G__83991;
i__83976_83980 = G__83992;
continue;
} else {
var ns_83993 = cljs.core.first.call(null,seq__83973_83987__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_83993);


var G__83994 = cljs.core.next.call(null,seq__83973_83987__$1);
var G__83995 = null;
var G__83996 = (0);
var G__83997 = (0);
seq__83973_83977 = G__83994;
chunk__83974_83978 = G__83995;
count__83975_83979 = G__83996;
i__83976_83980 = G__83997;
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
var G__83998__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__83998 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__83999__i = 0, G__83999__a = new Array(arguments.length -  0);
while (G__83999__i < G__83999__a.length) {G__83999__a[G__83999__i] = arguments[G__83999__i + 0]; ++G__83999__i;}
  args = new cljs.core.IndexedSeq(G__83999__a,0,null);
} 
return G__83998__delegate.call(this,args);};
G__83998.cljs$lang$maxFixedArity = 0;
G__83998.cljs$lang$applyTo = (function (arglist__84000){
var args = cljs.core.seq(arglist__84000);
return G__83998__delegate(args);
});
G__83998.cljs$core$IFn$_invoke$arity$variadic = G__83998__delegate;
return G__83998;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__84001_SHARP_,p2__84002_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__84001_SHARP_)].join('')),p2__84002_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__84003_SHARP_,p2__84004_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__84003_SHARP_)].join(''),p2__84004_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__84005 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__84005.addCallback(((function (G__84005){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__84005))
);

G__84005.addErrback(((function (G__84005){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__84005))
);

return G__84005;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e84006){if((e84006 instanceof Error)){
var e = e84006;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e84006;

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
}catch (e84007){if((e84007 instanceof Error)){
var e = e84007;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e84007;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__84008 = cljs.core._EQ_;
var expr__84009 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__84008.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__84009))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__84008.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__84009))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__84008.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__84009))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__84008,expr__84009){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__84008,expr__84009))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__84011,callback){
var map__84012 = p__84011;
var map__84012__$1 = ((((!((map__84012 == null)))?(((((map__84012.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__84012.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__84012):map__84012);
var file_msg = map__84012__$1;
var request_url = cljs.core.get.call(null,map__84012__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3922__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__84012,map__84012__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__84012,map__84012__$1,file_msg,request_url))
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
return (function (state_84050){
var state_val_84051 = (state_84050[(1)]);
if((state_val_84051 === (7))){
var inst_84046 = (state_84050[(2)]);
var state_84050__$1 = state_84050;
var statearr_84052_84078 = state_84050__$1;
(statearr_84052_84078[(2)] = inst_84046);

(statearr_84052_84078[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84051 === (1))){
var state_84050__$1 = state_84050;
var statearr_84053_84079 = state_84050__$1;
(statearr_84053_84079[(2)] = null);

(statearr_84053_84079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84051 === (4))){
var inst_84016 = (state_84050[(7)]);
var inst_84016__$1 = (state_84050[(2)]);
var state_84050__$1 = (function (){var statearr_84054 = state_84050;
(statearr_84054[(7)] = inst_84016__$1);

return statearr_84054;
})();
if(cljs.core.truth_(inst_84016__$1)){
var statearr_84055_84080 = state_84050__$1;
(statearr_84055_84080[(1)] = (5));

} else {
var statearr_84056_84081 = state_84050__$1;
(statearr_84056_84081[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84051 === (15))){
var inst_84031 = (state_84050[(8)]);
var inst_84029 = (state_84050[(9)]);
var inst_84033 = inst_84031.call(null,inst_84029);
var state_84050__$1 = state_84050;
var statearr_84057_84082 = state_84050__$1;
(statearr_84057_84082[(2)] = inst_84033);

(statearr_84057_84082[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84051 === (13))){
var inst_84040 = (state_84050[(2)]);
var state_84050__$1 = state_84050;
var statearr_84058_84083 = state_84050__$1;
(statearr_84058_84083[(2)] = inst_84040);

(statearr_84058_84083[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84051 === (6))){
var state_84050__$1 = state_84050;
var statearr_84059_84084 = state_84050__$1;
(statearr_84059_84084[(2)] = null);

(statearr_84059_84084[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84051 === (17))){
var inst_84037 = (state_84050[(2)]);
var state_84050__$1 = state_84050;
var statearr_84060_84085 = state_84050__$1;
(statearr_84060_84085[(2)] = inst_84037);

(statearr_84060_84085[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84051 === (3))){
var inst_84048 = (state_84050[(2)]);
var state_84050__$1 = state_84050;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_84050__$1,inst_84048);
} else {
if((state_val_84051 === (12))){
var state_84050__$1 = state_84050;
var statearr_84061_84086 = state_84050__$1;
(statearr_84061_84086[(2)] = null);

(statearr_84061_84086[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84051 === (2))){
var state_84050__$1 = state_84050;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_84050__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_84051 === (11))){
var inst_84021 = (state_84050[(10)]);
var inst_84027 = figwheel.client.file_reloading.blocking_load.call(null,inst_84021);
var state_84050__$1 = state_84050;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_84050__$1,(14),inst_84027);
} else {
if((state_val_84051 === (9))){
var inst_84021 = (state_84050[(10)]);
var state_84050__$1 = state_84050;
if(cljs.core.truth_(inst_84021)){
var statearr_84062_84087 = state_84050__$1;
(statearr_84062_84087[(1)] = (11));

} else {
var statearr_84063_84088 = state_84050__$1;
(statearr_84063_84088[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84051 === (5))){
var inst_84022 = (state_84050[(11)]);
var inst_84016 = (state_84050[(7)]);
var inst_84021 = cljs.core.nth.call(null,inst_84016,(0),null);
var inst_84022__$1 = cljs.core.nth.call(null,inst_84016,(1),null);
var state_84050__$1 = (function (){var statearr_84064 = state_84050;
(statearr_84064[(11)] = inst_84022__$1);

(statearr_84064[(10)] = inst_84021);

return statearr_84064;
})();
if(cljs.core.truth_(inst_84022__$1)){
var statearr_84065_84089 = state_84050__$1;
(statearr_84065_84089[(1)] = (8));

} else {
var statearr_84066_84090 = state_84050__$1;
(statearr_84066_84090[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84051 === (14))){
var inst_84031 = (state_84050[(8)]);
var inst_84021 = (state_84050[(10)]);
var inst_84029 = (state_84050[(2)]);
var inst_84030 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_84031__$1 = cljs.core.get.call(null,inst_84030,inst_84021);
var state_84050__$1 = (function (){var statearr_84067 = state_84050;
(statearr_84067[(8)] = inst_84031__$1);

(statearr_84067[(9)] = inst_84029);

return statearr_84067;
})();
if(cljs.core.truth_(inst_84031__$1)){
var statearr_84068_84091 = state_84050__$1;
(statearr_84068_84091[(1)] = (15));

} else {
var statearr_84069_84092 = state_84050__$1;
(statearr_84069_84092[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84051 === (16))){
var inst_84029 = (state_84050[(9)]);
var inst_84035 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_84029);
var state_84050__$1 = state_84050;
var statearr_84070_84093 = state_84050__$1;
(statearr_84070_84093[(2)] = inst_84035);

(statearr_84070_84093[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84051 === (10))){
var inst_84042 = (state_84050[(2)]);
var state_84050__$1 = (function (){var statearr_84071 = state_84050;
(statearr_84071[(12)] = inst_84042);

return statearr_84071;
})();
var statearr_84072_84094 = state_84050__$1;
(statearr_84072_84094[(2)] = null);

(statearr_84072_84094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84051 === (8))){
var inst_84022 = (state_84050[(11)]);
var inst_84024 = eval(inst_84022);
var state_84050__$1 = state_84050;
var statearr_84073_84095 = state_84050__$1;
(statearr_84073_84095[(2)] = inst_84024);

(statearr_84073_84095[(1)] = (10));


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
var statearr_84074 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_84074[(0)] = figwheel$client$file_reloading$state_machine__27885__auto__);

(statearr_84074[(1)] = (1));

return statearr_84074;
});
var figwheel$client$file_reloading$state_machine__27885__auto____1 = (function (state_84050){
while(true){
var ret_value__27886__auto__ = (function (){try{while(true){
var result__27887__auto__ = switch__27884__auto__.call(null,state_84050);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27887__auto__;
}
break;
}
}catch (e84075){if((e84075 instanceof Object)){
var ex__27888__auto__ = e84075;
var statearr_84076_84096 = state_84050;
(statearr_84076_84096[(5)] = ex__27888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_84050);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e84075;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__84097 = state_84050;
state_84050 = G__84097;
continue;
} else {
return ret_value__27886__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__27885__auto__ = function(state_84050){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__27885__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__27885__auto____1.call(this,state_84050);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__27885__auto____0;
figwheel$client$file_reloading$state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__27885__auto____1;
return figwheel$client$file_reloading$state_machine__27885__auto__;
})()
;})(switch__27884__auto__,c__27974__auto__))
})();
var state__27976__auto__ = (function (){var statearr_84077 = f__27975__auto__.call(null);
(statearr_84077[(6)] = c__27974__auto__);

return statearr_84077;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27976__auto__);
});})(c__27974__auto__))
);

return c__27974__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__84099 = arguments.length;
switch (G__84099) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__84101,callback){
var map__84102 = p__84101;
var map__84102__$1 = ((((!((map__84102 == null)))?(((((map__84102.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__84102.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__84102):map__84102);
var file_msg = map__84102__$1;
var namespace = cljs.core.get.call(null,map__84102__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__84102,map__84102__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__84102,map__84102__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__84104){
var map__84105 = p__84104;
var map__84105__$1 = ((((!((map__84105 == null)))?(((((map__84105.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__84105.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__84105):map__84105);
var file_msg = map__84105__$1;
var namespace = cljs.core.get.call(null,map__84105__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__84107){
var map__84108 = p__84107;
var map__84108__$1 = ((((!((map__84108 == null)))?(((((map__84108.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__84108.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__84108):map__84108);
var file_msg = map__84108__$1;
var namespace = cljs.core.get.call(null,map__84108__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__84110,callback){
var map__84111 = p__84110;
var map__84111__$1 = ((((!((map__84111 == null)))?(((((map__84111.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__84111.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__84111):map__84111);
var file_msg = map__84111__$1;
var request_url = cljs.core.get.call(null,map__84111__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__84111__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__27974__auto___84161 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27974__auto___84161,out){
return (function (){
var f__27975__auto__ = (function (){var switch__27884__auto__ = ((function (c__27974__auto___84161,out){
return (function (state_84146){
var state_val_84147 = (state_84146[(1)]);
if((state_val_84147 === (1))){
var inst_84120 = cljs.core.seq.call(null,files);
var inst_84121 = cljs.core.first.call(null,inst_84120);
var inst_84122 = cljs.core.next.call(null,inst_84120);
var inst_84123 = files;
var state_84146__$1 = (function (){var statearr_84148 = state_84146;
(statearr_84148[(7)] = inst_84122);

(statearr_84148[(8)] = inst_84123);

(statearr_84148[(9)] = inst_84121);

return statearr_84148;
})();
var statearr_84149_84162 = state_84146__$1;
(statearr_84149_84162[(2)] = null);

(statearr_84149_84162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84147 === (2))){
var inst_84123 = (state_84146[(8)]);
var inst_84129 = (state_84146[(10)]);
var inst_84128 = cljs.core.seq.call(null,inst_84123);
var inst_84129__$1 = cljs.core.first.call(null,inst_84128);
var inst_84130 = cljs.core.next.call(null,inst_84128);
var inst_84131 = (inst_84129__$1 == null);
var inst_84132 = cljs.core.not.call(null,inst_84131);
var state_84146__$1 = (function (){var statearr_84150 = state_84146;
(statearr_84150[(11)] = inst_84130);

(statearr_84150[(10)] = inst_84129__$1);

return statearr_84150;
})();
if(inst_84132){
var statearr_84151_84163 = state_84146__$1;
(statearr_84151_84163[(1)] = (4));

} else {
var statearr_84152_84164 = state_84146__$1;
(statearr_84152_84164[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84147 === (3))){
var inst_84144 = (state_84146[(2)]);
var state_84146__$1 = state_84146;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_84146__$1,inst_84144);
} else {
if((state_val_84147 === (4))){
var inst_84129 = (state_84146[(10)]);
var inst_84134 = figwheel.client.file_reloading.reload_js_file.call(null,inst_84129);
var state_84146__$1 = state_84146;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_84146__$1,(7),inst_84134);
} else {
if((state_val_84147 === (5))){
var inst_84140 = cljs.core.async.close_BANG_.call(null,out);
var state_84146__$1 = state_84146;
var statearr_84153_84165 = state_84146__$1;
(statearr_84153_84165[(2)] = inst_84140);

(statearr_84153_84165[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84147 === (6))){
var inst_84142 = (state_84146[(2)]);
var state_84146__$1 = state_84146;
var statearr_84154_84166 = state_84146__$1;
(statearr_84154_84166[(2)] = inst_84142);

(statearr_84154_84166[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84147 === (7))){
var inst_84130 = (state_84146[(11)]);
var inst_84136 = (state_84146[(2)]);
var inst_84137 = cljs.core.async.put_BANG_.call(null,out,inst_84136);
var inst_84123 = inst_84130;
var state_84146__$1 = (function (){var statearr_84155 = state_84146;
(statearr_84155[(12)] = inst_84137);

(statearr_84155[(8)] = inst_84123);

return statearr_84155;
})();
var statearr_84156_84167 = state_84146__$1;
(statearr_84156_84167[(2)] = null);

(statearr_84156_84167[(1)] = (2));


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
});})(c__27974__auto___84161,out))
;
return ((function (switch__27884__auto__,c__27974__auto___84161,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27885__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27885__auto____0 = (function (){
var statearr_84157 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_84157[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27885__auto__);

(statearr_84157[(1)] = (1));

return statearr_84157;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27885__auto____1 = (function (state_84146){
while(true){
var ret_value__27886__auto__ = (function (){try{while(true){
var result__27887__auto__ = switch__27884__auto__.call(null,state_84146);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27887__auto__;
}
break;
}
}catch (e84158){if((e84158 instanceof Object)){
var ex__27888__auto__ = e84158;
var statearr_84159_84168 = state_84146;
(statearr_84159_84168[(5)] = ex__27888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_84146);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e84158;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__84169 = state_84146;
state_84146 = G__84169;
continue;
} else {
return ret_value__27886__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27885__auto__ = function(state_84146){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27885__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27885__auto____1.call(this,state_84146);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27885__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27885__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27885__auto__;
})()
;})(switch__27884__auto__,c__27974__auto___84161,out))
})();
var state__27976__auto__ = (function (){var statearr_84160 = f__27975__auto__.call(null);
(statearr_84160[(6)] = c__27974__auto___84161);

return statearr_84160;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27976__auto__);
});})(c__27974__auto___84161,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__84170,opts){
var map__84171 = p__84170;
var map__84171__$1 = ((((!((map__84171 == null)))?(((((map__84171.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__84171.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__84171):map__84171);
var eval_body = cljs.core.get.call(null,map__84171__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__84171__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e84173){var e = e84173;
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
return (function (p1__84174_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__84174_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__84175){
var vec__84176 = p__84175;
var k = cljs.core.nth.call(null,vec__84176,(0),null);
var v = cljs.core.nth.call(null,vec__84176,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__84179){
var vec__84180 = p__84179;
var k = cljs.core.nth.call(null,vec__84180,(0),null);
var v = cljs.core.nth.call(null,vec__84180,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__84186,p__84187){
var map__84188 = p__84186;
var map__84188__$1 = ((((!((map__84188 == null)))?(((((map__84188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__84188.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__84188):map__84188);
var opts = map__84188__$1;
var before_jsload = cljs.core.get.call(null,map__84188__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__84188__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__84188__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__84189 = p__84187;
var map__84189__$1 = ((((!((map__84189 == null)))?(((((map__84189.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__84189.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__84189):map__84189);
var msg = map__84189__$1;
var files = cljs.core.get.call(null,map__84189__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__84189__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__84189__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__27974__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27974__auto__,map__84188,map__84188__$1,opts,before_jsload,on_jsload,reload_dependents,map__84189,map__84189__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__27975__auto__ = (function (){var switch__27884__auto__ = ((function (c__27974__auto__,map__84188,map__84188__$1,opts,before_jsload,on_jsload,reload_dependents,map__84189,map__84189__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_84343){
var state_val_84344 = (state_84343[(1)]);
if((state_val_84344 === (7))){
var inst_84204 = (state_84343[(7)]);
var inst_84203 = (state_84343[(8)]);
var inst_84206 = (state_84343[(9)]);
var inst_84205 = (state_84343[(10)]);
var inst_84211 = cljs.core._nth.call(null,inst_84204,inst_84206);
var inst_84212 = figwheel.client.file_reloading.eval_body.call(null,inst_84211,opts);
var inst_84213 = (inst_84206 + (1));
var tmp84345 = inst_84204;
var tmp84346 = inst_84203;
var tmp84347 = inst_84205;
var inst_84203__$1 = tmp84346;
var inst_84204__$1 = tmp84345;
var inst_84205__$1 = tmp84347;
var inst_84206__$1 = inst_84213;
var state_84343__$1 = (function (){var statearr_84348 = state_84343;
(statearr_84348[(11)] = inst_84212);

(statearr_84348[(7)] = inst_84204__$1);

(statearr_84348[(8)] = inst_84203__$1);

(statearr_84348[(9)] = inst_84206__$1);

(statearr_84348[(10)] = inst_84205__$1);

return statearr_84348;
})();
var statearr_84349_84432 = state_84343__$1;
(statearr_84349_84432[(2)] = null);

(statearr_84349_84432[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84344 === (20))){
var inst_84246 = (state_84343[(12)]);
var inst_84254 = figwheel.client.file_reloading.sort_files.call(null,inst_84246);
var state_84343__$1 = state_84343;
var statearr_84350_84433 = state_84343__$1;
(statearr_84350_84433[(2)] = inst_84254);

(statearr_84350_84433[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84344 === (27))){
var state_84343__$1 = state_84343;
var statearr_84351_84434 = state_84343__$1;
(statearr_84351_84434[(2)] = null);

(statearr_84351_84434[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84344 === (1))){
var inst_84195 = (state_84343[(13)]);
var inst_84192 = before_jsload.call(null,files);
var inst_84193 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_84194 = (function (){return ((function (inst_84195,inst_84192,inst_84193,state_val_84344,c__27974__auto__,map__84188,map__84188__$1,opts,before_jsload,on_jsload,reload_dependents,map__84189,map__84189__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__84183_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__84183_SHARP_);
});
;})(inst_84195,inst_84192,inst_84193,state_val_84344,c__27974__auto__,map__84188,map__84188__$1,opts,before_jsload,on_jsload,reload_dependents,map__84189,map__84189__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_84195__$1 = cljs.core.filter.call(null,inst_84194,files);
var inst_84196 = cljs.core.not_empty.call(null,inst_84195__$1);
var state_84343__$1 = (function (){var statearr_84352 = state_84343;
(statearr_84352[(14)] = inst_84193);

(statearr_84352[(13)] = inst_84195__$1);

(statearr_84352[(15)] = inst_84192);

return statearr_84352;
})();
if(cljs.core.truth_(inst_84196)){
var statearr_84353_84435 = state_84343__$1;
(statearr_84353_84435[(1)] = (2));

} else {
var statearr_84354_84436 = state_84343__$1;
(statearr_84354_84436[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84344 === (24))){
var state_84343__$1 = state_84343;
var statearr_84355_84437 = state_84343__$1;
(statearr_84355_84437[(2)] = null);

(statearr_84355_84437[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84344 === (39))){
var inst_84296 = (state_84343[(16)]);
var state_84343__$1 = state_84343;
var statearr_84356_84438 = state_84343__$1;
(statearr_84356_84438[(2)] = inst_84296);

(statearr_84356_84438[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84344 === (46))){
var inst_84338 = (state_84343[(2)]);
var state_84343__$1 = state_84343;
var statearr_84357_84439 = state_84343__$1;
(statearr_84357_84439[(2)] = inst_84338);

(statearr_84357_84439[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84344 === (4))){
var inst_84240 = (state_84343[(2)]);
var inst_84241 = cljs.core.List.EMPTY;
var inst_84242 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_84241);
var inst_84243 = (function (){return ((function (inst_84240,inst_84241,inst_84242,state_val_84344,c__27974__auto__,map__84188,map__84188__$1,opts,before_jsload,on_jsload,reload_dependents,map__84189,map__84189__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__84184_SHARP_){
var and__3911__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__84184_SHARP_);
if(cljs.core.truth_(and__3911__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__84184_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__84184_SHARP_))));
} else {
return and__3911__auto__;
}
});
;})(inst_84240,inst_84241,inst_84242,state_val_84344,c__27974__auto__,map__84188,map__84188__$1,opts,before_jsload,on_jsload,reload_dependents,map__84189,map__84189__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_84244 = cljs.core.filter.call(null,inst_84243,files);
var inst_84245 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_84246 = cljs.core.concat.call(null,inst_84244,inst_84245);
var state_84343__$1 = (function (){var statearr_84358 = state_84343;
(statearr_84358[(17)] = inst_84242);

(statearr_84358[(12)] = inst_84246);

(statearr_84358[(18)] = inst_84240);

return statearr_84358;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_84359_84440 = state_84343__$1;
(statearr_84359_84440[(1)] = (16));

} else {
var statearr_84360_84441 = state_84343__$1;
(statearr_84360_84441[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84344 === (15))){
var inst_84230 = (state_84343[(2)]);
var state_84343__$1 = state_84343;
var statearr_84361_84442 = state_84343__$1;
(statearr_84361_84442[(2)] = inst_84230);

(statearr_84361_84442[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84344 === (21))){
var inst_84256 = (state_84343[(19)]);
var inst_84256__$1 = (state_84343[(2)]);
var inst_84257 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_84256__$1);
var state_84343__$1 = (function (){var statearr_84362 = state_84343;
(statearr_84362[(19)] = inst_84256__$1);

return statearr_84362;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_84343__$1,(22),inst_84257);
} else {
if((state_val_84344 === (31))){
var inst_84341 = (state_84343[(2)]);
var state_84343__$1 = state_84343;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_84343__$1,inst_84341);
} else {
if((state_val_84344 === (32))){
var inst_84296 = (state_84343[(16)]);
var inst_84301 = inst_84296.cljs$lang$protocol_mask$partition0$;
var inst_84302 = (inst_84301 & (64));
var inst_84303 = inst_84296.cljs$core$ISeq$;
var inst_84304 = (cljs.core.PROTOCOL_SENTINEL === inst_84303);
var inst_84305 = ((inst_84302) || (inst_84304));
var state_84343__$1 = state_84343;
if(cljs.core.truth_(inst_84305)){
var statearr_84363_84443 = state_84343__$1;
(statearr_84363_84443[(1)] = (35));

} else {
var statearr_84364_84444 = state_84343__$1;
(statearr_84364_84444[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84344 === (40))){
var inst_84318 = (state_84343[(20)]);
var inst_84317 = (state_84343[(2)]);
var inst_84318__$1 = cljs.core.get.call(null,inst_84317,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_84319 = cljs.core.get.call(null,inst_84317,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_84320 = cljs.core.not_empty.call(null,inst_84318__$1);
var state_84343__$1 = (function (){var statearr_84365 = state_84343;
(statearr_84365[(21)] = inst_84319);

(statearr_84365[(20)] = inst_84318__$1);

return statearr_84365;
})();
if(cljs.core.truth_(inst_84320)){
var statearr_84366_84445 = state_84343__$1;
(statearr_84366_84445[(1)] = (41));

} else {
var statearr_84367_84446 = state_84343__$1;
(statearr_84367_84446[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84344 === (33))){
var state_84343__$1 = state_84343;
var statearr_84368_84447 = state_84343__$1;
(statearr_84368_84447[(2)] = false);

(statearr_84368_84447[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84344 === (13))){
var inst_84216 = (state_84343[(22)]);
var inst_84220 = cljs.core.chunk_first.call(null,inst_84216);
var inst_84221 = cljs.core.chunk_rest.call(null,inst_84216);
var inst_84222 = cljs.core.count.call(null,inst_84220);
var inst_84203 = inst_84221;
var inst_84204 = inst_84220;
var inst_84205 = inst_84222;
var inst_84206 = (0);
var state_84343__$1 = (function (){var statearr_84369 = state_84343;
(statearr_84369[(7)] = inst_84204);

(statearr_84369[(8)] = inst_84203);

(statearr_84369[(9)] = inst_84206);

(statearr_84369[(10)] = inst_84205);

return statearr_84369;
})();
var statearr_84370_84448 = state_84343__$1;
(statearr_84370_84448[(2)] = null);

(statearr_84370_84448[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84344 === (22))){
var inst_84259 = (state_84343[(23)]);
var inst_84264 = (state_84343[(24)]);
var inst_84256 = (state_84343[(19)]);
var inst_84260 = (state_84343[(25)]);
var inst_84259__$1 = (state_84343[(2)]);
var inst_84260__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_84259__$1);
var inst_84261 = (function (){var all_files = inst_84256;
var res_SINGLEQUOTE_ = inst_84259__$1;
var res = inst_84260__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_84259,inst_84264,inst_84256,inst_84260,inst_84259__$1,inst_84260__$1,state_val_84344,c__27974__auto__,map__84188,map__84188__$1,opts,before_jsload,on_jsload,reload_dependents,map__84189,map__84189__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__84185_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__84185_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_84259,inst_84264,inst_84256,inst_84260,inst_84259__$1,inst_84260__$1,state_val_84344,c__27974__auto__,map__84188,map__84188__$1,opts,before_jsload,on_jsload,reload_dependents,map__84189,map__84189__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_84262 = cljs.core.filter.call(null,inst_84261,inst_84259__$1);
var inst_84263 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_84264__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_84263);
var inst_84265 = cljs.core.not_empty.call(null,inst_84264__$1);
var state_84343__$1 = (function (){var statearr_84371 = state_84343;
(statearr_84371[(26)] = inst_84262);

(statearr_84371[(23)] = inst_84259__$1);

(statearr_84371[(24)] = inst_84264__$1);

(statearr_84371[(25)] = inst_84260__$1);

return statearr_84371;
})();
if(cljs.core.truth_(inst_84265)){
var statearr_84372_84449 = state_84343__$1;
(statearr_84372_84449[(1)] = (23));

} else {
var statearr_84373_84450 = state_84343__$1;
(statearr_84373_84450[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84344 === (36))){
var state_84343__$1 = state_84343;
var statearr_84374_84451 = state_84343__$1;
(statearr_84374_84451[(2)] = false);

(statearr_84374_84451[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84344 === (41))){
var inst_84318 = (state_84343[(20)]);
var inst_84322 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_84323 = cljs.core.map.call(null,inst_84322,inst_84318);
var inst_84324 = cljs.core.pr_str.call(null,inst_84323);
var inst_84325 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_84324)].join('');
var inst_84326 = figwheel.client.utils.log.call(null,inst_84325);
var state_84343__$1 = state_84343;
var statearr_84375_84452 = state_84343__$1;
(statearr_84375_84452[(2)] = inst_84326);

(statearr_84375_84452[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84344 === (43))){
var inst_84319 = (state_84343[(21)]);
var inst_84329 = (state_84343[(2)]);
var inst_84330 = cljs.core.not_empty.call(null,inst_84319);
var state_84343__$1 = (function (){var statearr_84376 = state_84343;
(statearr_84376[(27)] = inst_84329);

return statearr_84376;
})();
if(cljs.core.truth_(inst_84330)){
var statearr_84377_84453 = state_84343__$1;
(statearr_84377_84453[(1)] = (44));

} else {
var statearr_84378_84454 = state_84343__$1;
(statearr_84378_84454[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84344 === (29))){
var inst_84296 = (state_84343[(16)]);
var inst_84262 = (state_84343[(26)]);
var inst_84259 = (state_84343[(23)]);
var inst_84264 = (state_84343[(24)]);
var inst_84256 = (state_84343[(19)]);
var inst_84260 = (state_84343[(25)]);
var inst_84292 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_84295 = (function (){var all_files = inst_84256;
var res_SINGLEQUOTE_ = inst_84259;
var res = inst_84260;
var files_not_loaded = inst_84262;
var dependencies_that_loaded = inst_84264;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_84296,inst_84262,inst_84259,inst_84264,inst_84256,inst_84260,inst_84292,state_val_84344,c__27974__auto__,map__84188,map__84188__$1,opts,before_jsload,on_jsload,reload_dependents,map__84189,map__84189__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__84294){
var map__84379 = p__84294;
var map__84379__$1 = ((((!((map__84379 == null)))?(((((map__84379.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__84379.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__84379):map__84379);
var namespace = cljs.core.get.call(null,map__84379__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_84296,inst_84262,inst_84259,inst_84264,inst_84256,inst_84260,inst_84292,state_val_84344,c__27974__auto__,map__84188,map__84188__$1,opts,before_jsload,on_jsload,reload_dependents,map__84189,map__84189__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_84296__$1 = cljs.core.group_by.call(null,inst_84295,inst_84262);
var inst_84298 = (inst_84296__$1 == null);
var inst_84299 = cljs.core.not.call(null,inst_84298);
var state_84343__$1 = (function (){var statearr_84381 = state_84343;
(statearr_84381[(16)] = inst_84296__$1);

(statearr_84381[(28)] = inst_84292);

return statearr_84381;
})();
if(inst_84299){
var statearr_84382_84455 = state_84343__$1;
(statearr_84382_84455[(1)] = (32));

} else {
var statearr_84383_84456 = state_84343__$1;
(statearr_84383_84456[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84344 === (44))){
var inst_84319 = (state_84343[(21)]);
var inst_84332 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_84319);
var inst_84333 = cljs.core.pr_str.call(null,inst_84332);
var inst_84334 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_84333)].join('');
var inst_84335 = figwheel.client.utils.log.call(null,inst_84334);
var state_84343__$1 = state_84343;
var statearr_84384_84457 = state_84343__$1;
(statearr_84384_84457[(2)] = inst_84335);

(statearr_84384_84457[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84344 === (6))){
var inst_84237 = (state_84343[(2)]);
var state_84343__$1 = state_84343;
var statearr_84385_84458 = state_84343__$1;
(statearr_84385_84458[(2)] = inst_84237);

(statearr_84385_84458[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84344 === (28))){
var inst_84262 = (state_84343[(26)]);
var inst_84289 = (state_84343[(2)]);
var inst_84290 = cljs.core.not_empty.call(null,inst_84262);
var state_84343__$1 = (function (){var statearr_84386 = state_84343;
(statearr_84386[(29)] = inst_84289);

return statearr_84386;
})();
if(cljs.core.truth_(inst_84290)){
var statearr_84387_84459 = state_84343__$1;
(statearr_84387_84459[(1)] = (29));

} else {
var statearr_84388_84460 = state_84343__$1;
(statearr_84388_84460[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84344 === (25))){
var inst_84260 = (state_84343[(25)]);
var inst_84276 = (state_84343[(2)]);
var inst_84277 = cljs.core.not_empty.call(null,inst_84260);
var state_84343__$1 = (function (){var statearr_84389 = state_84343;
(statearr_84389[(30)] = inst_84276);

return statearr_84389;
})();
if(cljs.core.truth_(inst_84277)){
var statearr_84390_84461 = state_84343__$1;
(statearr_84390_84461[(1)] = (26));

} else {
var statearr_84391_84462 = state_84343__$1;
(statearr_84391_84462[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84344 === (34))){
var inst_84312 = (state_84343[(2)]);
var state_84343__$1 = state_84343;
if(cljs.core.truth_(inst_84312)){
var statearr_84392_84463 = state_84343__$1;
(statearr_84392_84463[(1)] = (38));

} else {
var statearr_84393_84464 = state_84343__$1;
(statearr_84393_84464[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84344 === (17))){
var state_84343__$1 = state_84343;
var statearr_84394_84465 = state_84343__$1;
(statearr_84394_84465[(2)] = recompile_dependents);

(statearr_84394_84465[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84344 === (3))){
var state_84343__$1 = state_84343;
var statearr_84395_84466 = state_84343__$1;
(statearr_84395_84466[(2)] = null);

(statearr_84395_84466[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84344 === (12))){
var inst_84233 = (state_84343[(2)]);
var state_84343__$1 = state_84343;
var statearr_84396_84467 = state_84343__$1;
(statearr_84396_84467[(2)] = inst_84233);

(statearr_84396_84467[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84344 === (2))){
var inst_84195 = (state_84343[(13)]);
var inst_84202 = cljs.core.seq.call(null,inst_84195);
var inst_84203 = inst_84202;
var inst_84204 = null;
var inst_84205 = (0);
var inst_84206 = (0);
var state_84343__$1 = (function (){var statearr_84397 = state_84343;
(statearr_84397[(7)] = inst_84204);

(statearr_84397[(8)] = inst_84203);

(statearr_84397[(9)] = inst_84206);

(statearr_84397[(10)] = inst_84205);

return statearr_84397;
})();
var statearr_84398_84468 = state_84343__$1;
(statearr_84398_84468[(2)] = null);

(statearr_84398_84468[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84344 === (23))){
var inst_84262 = (state_84343[(26)]);
var inst_84259 = (state_84343[(23)]);
var inst_84264 = (state_84343[(24)]);
var inst_84256 = (state_84343[(19)]);
var inst_84260 = (state_84343[(25)]);
var inst_84267 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_84269 = (function (){var all_files = inst_84256;
var res_SINGLEQUOTE_ = inst_84259;
var res = inst_84260;
var files_not_loaded = inst_84262;
var dependencies_that_loaded = inst_84264;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_84262,inst_84259,inst_84264,inst_84256,inst_84260,inst_84267,state_val_84344,c__27974__auto__,map__84188,map__84188__$1,opts,before_jsload,on_jsload,reload_dependents,map__84189,map__84189__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__84268){
var map__84399 = p__84268;
var map__84399__$1 = ((((!((map__84399 == null)))?(((((map__84399.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__84399.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__84399):map__84399);
var request_url = cljs.core.get.call(null,map__84399__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_84262,inst_84259,inst_84264,inst_84256,inst_84260,inst_84267,state_val_84344,c__27974__auto__,map__84188,map__84188__$1,opts,before_jsload,on_jsload,reload_dependents,map__84189,map__84189__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_84270 = cljs.core.reverse.call(null,inst_84264);
var inst_84271 = cljs.core.map.call(null,inst_84269,inst_84270);
var inst_84272 = cljs.core.pr_str.call(null,inst_84271);
var inst_84273 = figwheel.client.utils.log.call(null,inst_84272);
var state_84343__$1 = (function (){var statearr_84401 = state_84343;
(statearr_84401[(31)] = inst_84267);

return statearr_84401;
})();
var statearr_84402_84469 = state_84343__$1;
(statearr_84402_84469[(2)] = inst_84273);

(statearr_84402_84469[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84344 === (35))){
var state_84343__$1 = state_84343;
var statearr_84403_84470 = state_84343__$1;
(statearr_84403_84470[(2)] = true);

(statearr_84403_84470[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84344 === (19))){
var inst_84246 = (state_84343[(12)]);
var inst_84252 = figwheel.client.file_reloading.expand_files.call(null,inst_84246);
var state_84343__$1 = state_84343;
var statearr_84404_84471 = state_84343__$1;
(statearr_84404_84471[(2)] = inst_84252);

(statearr_84404_84471[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84344 === (11))){
var state_84343__$1 = state_84343;
var statearr_84405_84472 = state_84343__$1;
(statearr_84405_84472[(2)] = null);

(statearr_84405_84472[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84344 === (9))){
var inst_84235 = (state_84343[(2)]);
var state_84343__$1 = state_84343;
var statearr_84406_84473 = state_84343__$1;
(statearr_84406_84473[(2)] = inst_84235);

(statearr_84406_84473[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84344 === (5))){
var inst_84206 = (state_84343[(9)]);
var inst_84205 = (state_84343[(10)]);
var inst_84208 = (inst_84206 < inst_84205);
var inst_84209 = inst_84208;
var state_84343__$1 = state_84343;
if(cljs.core.truth_(inst_84209)){
var statearr_84407_84474 = state_84343__$1;
(statearr_84407_84474[(1)] = (7));

} else {
var statearr_84408_84475 = state_84343__$1;
(statearr_84408_84475[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84344 === (14))){
var inst_84216 = (state_84343[(22)]);
var inst_84225 = cljs.core.first.call(null,inst_84216);
var inst_84226 = figwheel.client.file_reloading.eval_body.call(null,inst_84225,opts);
var inst_84227 = cljs.core.next.call(null,inst_84216);
var inst_84203 = inst_84227;
var inst_84204 = null;
var inst_84205 = (0);
var inst_84206 = (0);
var state_84343__$1 = (function (){var statearr_84409 = state_84343;
(statearr_84409[(32)] = inst_84226);

(statearr_84409[(7)] = inst_84204);

(statearr_84409[(8)] = inst_84203);

(statearr_84409[(9)] = inst_84206);

(statearr_84409[(10)] = inst_84205);

return statearr_84409;
})();
var statearr_84410_84476 = state_84343__$1;
(statearr_84410_84476[(2)] = null);

(statearr_84410_84476[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84344 === (45))){
var state_84343__$1 = state_84343;
var statearr_84411_84477 = state_84343__$1;
(statearr_84411_84477[(2)] = null);

(statearr_84411_84477[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84344 === (26))){
var inst_84262 = (state_84343[(26)]);
var inst_84259 = (state_84343[(23)]);
var inst_84264 = (state_84343[(24)]);
var inst_84256 = (state_84343[(19)]);
var inst_84260 = (state_84343[(25)]);
var inst_84279 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_84281 = (function (){var all_files = inst_84256;
var res_SINGLEQUOTE_ = inst_84259;
var res = inst_84260;
var files_not_loaded = inst_84262;
var dependencies_that_loaded = inst_84264;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_84262,inst_84259,inst_84264,inst_84256,inst_84260,inst_84279,state_val_84344,c__27974__auto__,map__84188,map__84188__$1,opts,before_jsload,on_jsload,reload_dependents,map__84189,map__84189__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__84280){
var map__84412 = p__84280;
var map__84412__$1 = ((((!((map__84412 == null)))?(((((map__84412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__84412.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__84412):map__84412);
var namespace = cljs.core.get.call(null,map__84412__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__84412__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_84262,inst_84259,inst_84264,inst_84256,inst_84260,inst_84279,state_val_84344,c__27974__auto__,map__84188,map__84188__$1,opts,before_jsload,on_jsload,reload_dependents,map__84189,map__84189__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_84282 = cljs.core.map.call(null,inst_84281,inst_84260);
var inst_84283 = cljs.core.pr_str.call(null,inst_84282);
var inst_84284 = figwheel.client.utils.log.call(null,inst_84283);
var inst_84285 = (function (){var all_files = inst_84256;
var res_SINGLEQUOTE_ = inst_84259;
var res = inst_84260;
var files_not_loaded = inst_84262;
var dependencies_that_loaded = inst_84264;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_84262,inst_84259,inst_84264,inst_84256,inst_84260,inst_84279,inst_84281,inst_84282,inst_84283,inst_84284,state_val_84344,c__27974__auto__,map__84188,map__84188__$1,opts,before_jsload,on_jsload,reload_dependents,map__84189,map__84189__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_84262,inst_84259,inst_84264,inst_84256,inst_84260,inst_84279,inst_84281,inst_84282,inst_84283,inst_84284,state_val_84344,c__27974__auto__,map__84188,map__84188__$1,opts,before_jsload,on_jsload,reload_dependents,map__84189,map__84189__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_84286 = setTimeout(inst_84285,(10));
var state_84343__$1 = (function (){var statearr_84414 = state_84343;
(statearr_84414[(33)] = inst_84284);

(statearr_84414[(34)] = inst_84279);

return statearr_84414;
})();
var statearr_84415_84478 = state_84343__$1;
(statearr_84415_84478[(2)] = inst_84286);

(statearr_84415_84478[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84344 === (16))){
var state_84343__$1 = state_84343;
var statearr_84416_84479 = state_84343__$1;
(statearr_84416_84479[(2)] = reload_dependents);

(statearr_84416_84479[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84344 === (38))){
var inst_84296 = (state_84343[(16)]);
var inst_84314 = cljs.core.apply.call(null,cljs.core.hash_map,inst_84296);
var state_84343__$1 = state_84343;
var statearr_84417_84480 = state_84343__$1;
(statearr_84417_84480[(2)] = inst_84314);

(statearr_84417_84480[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84344 === (30))){
var state_84343__$1 = state_84343;
var statearr_84418_84481 = state_84343__$1;
(statearr_84418_84481[(2)] = null);

(statearr_84418_84481[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84344 === (10))){
var inst_84216 = (state_84343[(22)]);
var inst_84218 = cljs.core.chunked_seq_QMARK_.call(null,inst_84216);
var state_84343__$1 = state_84343;
if(inst_84218){
var statearr_84419_84482 = state_84343__$1;
(statearr_84419_84482[(1)] = (13));

} else {
var statearr_84420_84483 = state_84343__$1;
(statearr_84420_84483[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84344 === (18))){
var inst_84250 = (state_84343[(2)]);
var state_84343__$1 = state_84343;
if(cljs.core.truth_(inst_84250)){
var statearr_84421_84484 = state_84343__$1;
(statearr_84421_84484[(1)] = (19));

} else {
var statearr_84422_84485 = state_84343__$1;
(statearr_84422_84485[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84344 === (42))){
var state_84343__$1 = state_84343;
var statearr_84423_84486 = state_84343__$1;
(statearr_84423_84486[(2)] = null);

(statearr_84423_84486[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84344 === (37))){
var inst_84309 = (state_84343[(2)]);
var state_84343__$1 = state_84343;
var statearr_84424_84487 = state_84343__$1;
(statearr_84424_84487[(2)] = inst_84309);

(statearr_84424_84487[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84344 === (8))){
var inst_84216 = (state_84343[(22)]);
var inst_84203 = (state_84343[(8)]);
var inst_84216__$1 = cljs.core.seq.call(null,inst_84203);
var state_84343__$1 = (function (){var statearr_84425 = state_84343;
(statearr_84425[(22)] = inst_84216__$1);

return statearr_84425;
})();
if(inst_84216__$1){
var statearr_84426_84488 = state_84343__$1;
(statearr_84426_84488[(1)] = (10));

} else {
var statearr_84427_84489 = state_84343__$1;
(statearr_84427_84489[(1)] = (11));

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
});})(c__27974__auto__,map__84188,map__84188__$1,opts,before_jsload,on_jsload,reload_dependents,map__84189,map__84189__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__27884__auto__,c__27974__auto__,map__84188,map__84188__$1,opts,before_jsload,on_jsload,reload_dependents,map__84189,map__84189__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27885__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27885__auto____0 = (function (){
var statearr_84428 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_84428[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__27885__auto__);

(statearr_84428[(1)] = (1));

return statearr_84428;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27885__auto____1 = (function (state_84343){
while(true){
var ret_value__27886__auto__ = (function (){try{while(true){
var result__27887__auto__ = switch__27884__auto__.call(null,state_84343);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27887__auto__;
}
break;
}
}catch (e84429){if((e84429 instanceof Object)){
var ex__27888__auto__ = e84429;
var statearr_84430_84490 = state_84343;
(statearr_84430_84490[(5)] = ex__27888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_84343);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e84429;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__84491 = state_84343;
state_84343 = G__84491;
continue;
} else {
return ret_value__27886__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__27885__auto__ = function(state_84343){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27885__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27885__auto____1.call(this,state_84343);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27885__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27885__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27885__auto__;
})()
;})(switch__27884__auto__,c__27974__auto__,map__84188,map__84188__$1,opts,before_jsload,on_jsload,reload_dependents,map__84189,map__84189__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__27976__auto__ = (function (){var statearr_84431 = f__27975__auto__.call(null);
(statearr_84431[(6)] = c__27974__auto__);

return statearr_84431;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27976__auto__);
});})(c__27974__auto__,map__84188,map__84188__$1,opts,before_jsload,on_jsload,reload_dependents,map__84189,map__84189__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__27974__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__84494,link){
var map__84495 = p__84494;
var map__84495__$1 = ((((!((map__84495 == null)))?(((((map__84495.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__84495.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__84495):map__84495);
var file = cljs.core.get.call(null,map__84495__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__84495,map__84495__$1,file){
return (function (p1__84492_SHARP_,p2__84493_SHARP_){
if(cljs.core._EQ_.call(null,p1__84492_SHARP_,p2__84493_SHARP_)){
return p1__84492_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__84495,map__84495__$1,file))
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
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__84498){
var map__84499 = p__84498;
var map__84499__$1 = ((((!((map__84499 == null)))?(((((map__84499.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__84499.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__84499):map__84499);
var match_length = cljs.core.get.call(null,map__84499__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__84499__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__84497_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__84497_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__84501_SHARP_,p2__84502_SHARP_){
return cljs.core.assoc.call(null,p1__84501_SHARP_,cljs.core.get.call(null,p2__84502_SHARP_,key),p2__84502_SHARP_);
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
var loaded_f_datas_84503 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_84503);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_84503);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__84504,p__84505){
var map__84506 = p__84504;
var map__84506__$1 = ((((!((map__84506 == null)))?(((((map__84506.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__84506.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__84506):map__84506);
var on_cssload = cljs.core.get.call(null,map__84506__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__84507 = p__84505;
var map__84507__$1 = ((((!((map__84507 == null)))?(((((map__84507.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__84507.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__84507):map__84507);
var files_msg = map__84507__$1;
var files = cljs.core.get.call(null,map__84507__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1525389589783
