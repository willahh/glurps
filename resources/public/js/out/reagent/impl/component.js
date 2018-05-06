// Compiled by ClojureScript 1.10.238 {}
goog.provide('reagent.impl.component');
goog.require('cljs.core');
goog.require('create_react_class');
goog.require('react');
goog.require('reagent.impl.util');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
goog.require('reagent.interop');
goog.require('reagent.debug');
reagent.impl.component.global$module$create_react_class = goog.global.createReactClass;
reagent.impl.component.global$module$react = goog.global.React;
reagent.impl.component.shallow_obj_to_map = (function reagent$impl$component$shallow_obj_to_map(o){
var ks = cljs.core.js_keys.call(null,o);
var len = ks.length;
var m = cljs.core.PersistentArrayMap.EMPTY;
var i = (0);
while(true){
if((i < len)){
var k = (ks[i]);
<<<<<<< HEAD
var G__55665 = cljs.core.assoc.call(null,m,cljs.core.keyword.call(null,k),(o[k]));
var G__55666 = (i + (1));
m = G__55665;
i = G__55666;
=======
var G__73215 = cljs.core.assoc.call(null,m,cljs.core.keyword.call(null,k),(o[k]));
var G__73216 = (i + (1));
m = G__73215;
i = G__73216;
>>>>>>> sqlite
continue;
} else {
return m;
}
break;
}
});
reagent.impl.component.extract_props = (function reagent$impl$component$extract_props(v){
var p = cljs.core.nth.call(null,v,(1),null);
if(cljs.core.map_QMARK_.call(null,p)){
return p;
} else {
return null;
}
});
reagent.impl.component.extract_children = (function reagent$impl$component$extract_children(v){
var p = cljs.core.nth.call(null,v,(1),null);
var first_child = (((((p == null)) || (cljs.core.map_QMARK_.call(null,p))))?(2):(1));
if((cljs.core.count.call(null,v) > first_child)){
return cljs.core.subvec.call(null,v,first_child);
} else {
return null;
}
});
reagent.impl.component.props_argv = (function reagent$impl$component$props_argv(c,p){
var temp__5459__auto__ = (p["argv"]);
if((temp__5459__auto__ == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c.constructor,reagent.impl.component.shallow_obj_to_map.call(null,p)], null);
} else {
var a = temp__5459__auto__;
return a;
}
});
reagent.impl.component.get_argv = (function reagent$impl$component$get_argv(c){
return reagent.impl.component.props_argv.call(null,c,(c["props"]));
});
reagent.impl.component.get_props = (function reagent$impl$component$get_props(c){
var p = (c["props"]);
var temp__5459__auto__ = (p["argv"]);
if((temp__5459__auto__ == null)){
return reagent.impl.component.shallow_obj_to_map.call(null,p);
} else {
var v = temp__5459__auto__;
return reagent.impl.component.extract_props.call(null,v);
}
});
reagent.impl.component.get_children = (function reagent$impl$component$get_children(c){
var p = (c["props"]);
var temp__5459__auto__ = (p["argv"]);
if((temp__5459__auto__ == null)){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,reagent.impl.component.global$module$react.Children.toArray.call(null,(p["children"])));
} else {
var v = temp__5459__auto__;
return reagent.impl.component.extract_children.call(null,v);
}
});
reagent.impl.component.reagent_class_QMARK_ = (function reagent$impl$component$reagent_class_QMARK_(c){
<<<<<<< HEAD
return ((cljs.core.fn_QMARK_.call(null,c)) && (!(((function (){var G__55668 = c;
var G__55668__$1 = (((G__55668 == null))?null:G__55668.prototype);
if((G__55668__$1 == null)){
return null;
} else {
return (G__55668__$1["reagentRender"]);
=======
return ((cljs.core.fn_QMARK_.call(null,c)) && (!(((function (){var G__73218 = c;
var G__73218__$1 = (((G__73218 == null))?null:G__73218.prototype);
if((G__73218__$1 == null)){
return null;
} else {
return (G__73218__$1["reagentRender"]);
>>>>>>> sqlite
}
})() == null))));
});
reagent.impl.component.react_class_QMARK_ = (function reagent$impl$component$react_class_QMARK_(c){
<<<<<<< HEAD
return ((cljs.core.fn_QMARK_.call(null,c)) && (!(((function (){var G__55670 = c;
var G__55670__$1 = (((G__55670 == null))?null:G__55670.prototype);
if((G__55670__$1 == null)){
return null;
} else {
return (G__55670__$1["render"]);
=======
return ((cljs.core.fn_QMARK_.call(null,c)) && (!(((function (){var G__73220 = c;
var G__73220__$1 = (((G__73220 == null))?null:G__73220.prototype);
if((G__73220__$1 == null)){
return null;
} else {
return (G__73220__$1["render"]);
>>>>>>> sqlite
}
})() == null))));
});
reagent.impl.component.reagent_component_QMARK_ = (function reagent$impl$component$reagent_component_QMARK_(c){
return !(((c["reagentRender"]) == null));
});
reagent.impl.component.cached_react_class = (function reagent$impl$component$cached_react_class(c){
return (c["cljsReactClass"]);
});
reagent.impl.component.cache_react_class = (function reagent$impl$component$cache_react_class(c,constructor$){
return (c["cljsReactClass"] = constructor$);
});
reagent.impl.component.state_atom = (function reagent$impl$component$state_atom(this$){
var sa = (this$["cljsState"]);
if(!((sa == null))){
return sa;
} else {
return (this$["cljsState"] = reagent.ratom.atom.call(null,null));
}
});
if(typeof reagent.impl.component.as_element !== 'undefined'){
} else {
reagent.impl.component.as_element = null;
}
reagent.impl.component.wrap_render = (function reagent$impl$component$wrap_render(c){
while(true){
var f = (c["reagentRender"]);
var _ = ((cljs.core.ifn_QMARK_.call(null,f))?null:(function(){throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Expected something callable, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,f))].join('')),"\n","(clojure.core/ifn? f)"].join('')))})());
var res = (((c["cljsLegacyRender"]) === true)?f.call(c,c):(function (){var v = reagent.impl.component.get_argv.call(null,c);
var n = cljs.core.count.call(null,v);
<<<<<<< HEAD
var G__55671 = n;
switch (G__55671) {
=======
var G__73221 = n;
switch (G__73221) {
>>>>>>> sqlite
case (1):
return f.call(c);

break;
case (2):
return f.call(c,cljs.core.nth.call(null,v,(1)));

break;
case (3):
return f.call(c,cljs.core.nth.call(null,v,(1)),cljs.core.nth.call(null,v,(2)));

break;
case (4):
return f.call(c,cljs.core.nth.call(null,v,(1)),cljs.core.nth.call(null,v,(2)),cljs.core.nth.call(null,v,(3)));

break;
case (5):
return f.call(c,cljs.core.nth.call(null,v,(1)),cljs.core.nth.call(null,v,(2)),cljs.core.nth.call(null,v,(3)),cljs.core.nth.call(null,v,(4)));

break;
default:
return f.apply(c,cljs.core.into_array.call(null,v).slice((1)));

}
})());
if(cljs.core.vector_QMARK_.call(null,res)){
return reagent.impl.component.as_element.call(null,res);
} else {
if(cljs.core.ifn_QMARK_.call(null,res)){
var f__$1 = ((reagent.impl.component.reagent_class_QMARK_.call(null,res))?((function (c,f,_,res){
return (function() { 
<<<<<<< HEAD
var G__55673__delegate = function (args){
return reagent.impl.component.as_element.call(null,cljs.core.apply.call(null,cljs.core.vector,res,args));
};
var G__55673 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__55674__i = 0, G__55674__a = new Array(arguments.length -  0);
while (G__55674__i < G__55674__a.length) {G__55674__a[G__55674__i] = arguments[G__55674__i + 0]; ++G__55674__i;}
  args = new cljs.core.IndexedSeq(G__55674__a,0,null);
} 
return G__55673__delegate.call(this,args);};
G__55673.cljs$lang$maxFixedArity = 0;
G__55673.cljs$lang$applyTo = (function (arglist__55675){
var args = cljs.core.seq(arglist__55675);
return G__55673__delegate(args);
});
G__55673.cljs$core$IFn$_invoke$arity$variadic = G__55673__delegate;
return G__55673;
=======
var G__73223__delegate = function (args){
return reagent.impl.component.as_element.call(null,cljs.core.apply.call(null,cljs.core.vector,res,args));
};
var G__73223 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__73224__i = 0, G__73224__a = new Array(arguments.length -  0);
while (G__73224__i < G__73224__a.length) {G__73224__a[G__73224__i] = arguments[G__73224__i + 0]; ++G__73224__i;}
  args = new cljs.core.IndexedSeq(G__73224__a,0,null);
} 
return G__73223__delegate.call(this,args);};
G__73223.cljs$lang$maxFixedArity = 0;
G__73223.cljs$lang$applyTo = (function (arglist__73225){
var args = cljs.core.seq(arglist__73225);
return G__73223__delegate(args);
});
G__73223.cljs$core$IFn$_invoke$arity$variadic = G__73223__delegate;
return G__73223;
>>>>>>> sqlite
})()
;})(c,f,_,res))
:res);
(c["reagentRender"] = f__$1);

<<<<<<< HEAD
var G__55676 = c;
c = G__55676;
=======
var G__73226 = c;
c = G__73226;
>>>>>>> sqlite
continue;
} else {
return res;

}
}
break;
}
});
reagent.impl.component.do_render = (function reagent$impl$component$do_render(c){
<<<<<<< HEAD
var _STAR_current_component_STAR_55677 = reagent.impl.component._STAR_current_component_STAR_;
=======
var _STAR_current_component_STAR_73227 = reagent.impl.component._STAR_current_component_STAR_;
>>>>>>> sqlite
reagent.impl.component._STAR_current_component_STAR_ = c;

try{var ok = [false];
try{var res = reagent.impl.component.wrap_render.call(null,c);
(ok[(0)] = true);

return res;
}finally {if(cljs.core.truth_((ok[(0)]))){
} else {
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Error rendering component",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reagent.impl.component.comp_name.call(null))].join(''))].join(''));
} else {
}
}
}
<<<<<<< HEAD
}finally {reagent.impl.component._STAR_current_component_STAR_ = _STAR_current_component_STAR_55677;
=======
}finally {reagent.impl.component._STAR_current_component_STAR_ = _STAR_current_component_STAR_73227;
>>>>>>> sqlite
}});
reagent.impl.component.rat_opts = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-cache","no-cache",1588056370),true], null);
reagent.impl.component.static_fns = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function reagent$impl$component$render(){
var c = this;
if(reagent.impl.util._STAR_non_reactive_STAR_){
return reagent.impl.component.do_render.call(null,c);
} else {
var rat = (c["cljsRatom"]);
reagent.impl.batching.mark_rendered.call(null,c);

if((rat == null)){
return reagent.ratom.run_in_reaction.call(null,((function (rat,c){
return (function (){
return reagent.impl.component.do_render.call(null,c);
});})(rat,c))
,c,"cljsRatom",reagent.impl.batching.queue_render,reagent.impl.component.rat_opts);
} else {
return rat._run(false);
}
}
})], null);
reagent.impl.component.custom_wrapper = (function reagent$impl$component$custom_wrapper(key,f){
<<<<<<< HEAD
var G__55678 = key;
var G__55678__$1 = (((G__55678 instanceof cljs.core.Keyword))?G__55678.fqn:null);
switch (G__55678__$1) {
=======
var G__73228 = key;
var G__73228__$1 = (((G__73228 instanceof cljs.core.Keyword))?G__73228.fqn:null);
switch (G__73228__$1) {
>>>>>>> sqlite
case "getDefaultProps":
throw (new Error("getDefaultProps not supported"));

break;
case "getInitialState":
<<<<<<< HEAD
return ((function (G__55678,G__55678__$1){
=======
return ((function (G__73228,G__73228__$1){
>>>>>>> sqlite
return (function reagent$impl$component$custom_wrapper_$_getInitialState(){
var c = this;
return cljs.core.reset_BANG_.call(null,reagent.impl.component.state_atom.call(null,c),f.call(c,c));
});
<<<<<<< HEAD
;})(G__55678,G__55678__$1))

break;
case "componentWillReceiveProps":
return ((function (G__55678,G__55678__$1){
=======
;})(G__73228,G__73228__$1))

break;
case "componentWillReceiveProps":
return ((function (G__73228,G__73228__$1){
>>>>>>> sqlite
return (function reagent$impl$component$custom_wrapper_$_componentWillReceiveProps(nextprops){
var c = this;
return f.call(c,c,reagent.impl.component.props_argv.call(null,c,nextprops));
});
<<<<<<< HEAD
;})(G__55678,G__55678__$1))

break;
case "shouldComponentUpdate":
return ((function (G__55678,G__55678__$1){
=======
;})(G__73228,G__73228__$1))

break;
case "shouldComponentUpdate":
return ((function (G__73228,G__73228__$1){
>>>>>>> sqlite
return (function reagent$impl$component$custom_wrapper_$_shouldComponentUpdate(nextprops,nextstate){
var or__3922__auto__ = reagent.impl.util._STAR_always_update_STAR_;
if(or__3922__auto__){
return or__3922__auto__;
} else {
var c = this;
var old_argv = (c["props"]["argv"]);
var new_argv = (nextprops["argv"]);
var noargv = (((old_argv == null)) || ((new_argv == null)));
if((f == null)){
return ((noargv) || (cljs.core.not_EQ_.call(null,old_argv,new_argv)));
} else {
if(noargv){
return f.call(c,c,reagent.impl.component.get_argv.call(null,c),reagent.impl.component.props_argv.call(null,c,nextprops));
} else {
return f.call(c,c,old_argv,new_argv);

}
}
}
});
<<<<<<< HEAD
;})(G__55678,G__55678__$1))

break;
case "componentWillUpdate":
return ((function (G__55678,G__55678__$1){
=======
;})(G__73228,G__73228__$1))

break;
case "componentWillUpdate":
return ((function (G__73228,G__73228__$1){
>>>>>>> sqlite
return (function reagent$impl$component$custom_wrapper_$_componentWillUpdate(nextprops){
var c = this;
return f.call(c,c,reagent.impl.component.props_argv.call(null,c,nextprops));
});
<<<<<<< HEAD
;})(G__55678,G__55678__$1))

break;
case "componentDidUpdate":
return ((function (G__55678,G__55678__$1){
=======
;})(G__73228,G__73228__$1))

break;
case "componentDidUpdate":
return ((function (G__73228,G__73228__$1){
>>>>>>> sqlite
return (function reagent$impl$component$custom_wrapper_$_componentDidUpdate(oldprops){
var c = this;
return f.call(c,c,reagent.impl.component.props_argv.call(null,c,oldprops));
});
<<<<<<< HEAD
;})(G__55678,G__55678__$1))

break;
case "componentWillMount":
return ((function (G__55678,G__55678__$1){
=======
;})(G__73228,G__73228__$1))

break;
case "componentWillMount":
return ((function (G__73228,G__73228__$1){
>>>>>>> sqlite
return (function reagent$impl$component$custom_wrapper_$_componentWillMount(){
var c = this;
(c["cljsMountOrder"] = reagent.impl.batching.next_mount_count.call(null));

if((f == null)){
return null;
} else {
return f.call(c,c);
}
});
<<<<<<< HEAD
;})(G__55678,G__55678__$1))

break;
case "componentDidMount":
return ((function (G__55678,G__55678__$1){
=======
;})(G__73228,G__73228__$1))

break;
case "componentDidMount":
return ((function (G__73228,G__73228__$1){
>>>>>>> sqlite
return (function reagent$impl$component$custom_wrapper_$_componentDidMount(){
var c = this;
return f.call(c,c);
});
<<<<<<< HEAD
;})(G__55678,G__55678__$1))

break;
case "componentWillUnmount":
return ((function (G__55678,G__55678__$1){
return (function reagent$impl$component$custom_wrapper_$_componentWillUnmount(){
var c = this;
var G__55679_55681 = (c["cljsRatom"]);
if((G__55679_55681 == null)){
} else {
reagent.ratom.dispose_BANG_.call(null,G__55679_55681);
=======
;})(G__73228,G__73228__$1))

break;
case "componentWillUnmount":
return ((function (G__73228,G__73228__$1){
return (function reagent$impl$component$custom_wrapper_$_componentWillUnmount(){
var c = this;
var G__73229_73231 = (c["cljsRatom"]);
if((G__73229_73231 == null)){
} else {
reagent.ratom.dispose_BANG_.call(null,G__73229_73231);
>>>>>>> sqlite
}

reagent.impl.batching.mark_rendered.call(null,c);

if((f == null)){
return null;
} else {
return f.call(c,c);
}
});
<<<<<<< HEAD
;})(G__55678,G__55678__$1))

break;
case "componentDidCatch":
return ((function (G__55678,G__55678__$1){
=======
;})(G__73228,G__73228__$1))

break;
case "componentDidCatch":
return ((function (G__73228,G__73228__$1){
>>>>>>> sqlite
return (function reagent$impl$component$custom_wrapper_$_componentDidCatch(error,info){
var c = this;
return f.call(c,c,error,info);
});
<<<<<<< HEAD
;})(G__55678,G__55678__$1))
=======
;})(G__73228,G__73228__$1))
>>>>>>> sqlite

break;
default:
return null;

}
});
reagent.impl.component.get_wrapper = (function reagent$impl$component$get_wrapper(key,f,name){
var wrap = reagent.impl.component.custom_wrapper.call(null,key,f);
if(cljs.core.truth_((function (){var and__3911__auto__ = wrap;
if(cljs.core.truth_(and__3911__auto__)){
return f;
} else {
return and__3911__auto__;
}
})())){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Expected something callable, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,f))].join('')),"\n","(clojure.core/ifn? f)"].join('')));
}
} else {
}

var or__3922__auto__ = wrap;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return f;
}
});
reagent.impl.component.obligatory = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),null,new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619),null,new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),null], null);
reagent.impl.component.dash_to_camel = reagent.impl.util.memoize_1.call(null,reagent.impl.util.dash_to_camel);
reagent.impl.component.camelify_map_keys = (function reagent$impl$component$camelify_map_keys(fun_map){
return cljs.core.reduce_kv.call(null,(function (m,k,v){
return cljs.core.assoc.call(null,m,cljs.core.keyword.call(null,reagent.impl.component.dash_to_camel.call(null,k)),v);
}),cljs.core.PersistentArrayMap.EMPTY,fun_map);
});
reagent.impl.component.add_obligatory = (function reagent$impl$component$add_obligatory(fun_map){
return cljs.core.merge.call(null,reagent.impl.component.obligatory,fun_map);
});
reagent.impl.component.wrap_funs = (function reagent$impl$component$wrap_funs(fmap){
<<<<<<< HEAD
var renders_55683 = cljs.core.select_keys.call(null,fmap,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"reagentRender","reagentRender",-358306383),new cljs.core.Keyword(null,"componentFunction","componentFunction",825866104)], null));
var render_fun_55684 = cljs.core.first.call(null,cljs.core.vals.call(null,renders_55683));
if((cljs.core.count.call(null,renders_55683) > (0))){
=======
var renders_73233 = cljs.core.select_keys.call(null,fmap,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"reagentRender","reagentRender",-358306383),new cljs.core.Keyword(null,"componentFunction","componentFunction",825866104)], null));
var render_fun_73234 = cljs.core.first.call(null,cljs.core.vals.call(null,renders_73233));
if((cljs.core.count.call(null,renders_73233) > (0))){
>>>>>>> sqlite
} else {
throw (new Error(["Assert failed: ","Missing reagent-render","\n","(pos? (count renders))"].join('')));
}

<<<<<<< HEAD
if(((1) === cljs.core.count.call(null,renders_55683))){
=======
if(((1) === cljs.core.count.call(null,renders_73233))){
>>>>>>> sqlite
} else {
throw (new Error(["Assert failed: ","Too many render functions supplied","\n","(== 1 (count renders))"].join('')));
}

<<<<<<< HEAD
if(cljs.core.ifn_QMARK_.call(null,render_fun_55684)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Expected something callable, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,render_fun_55684))].join('')),"\n","(clojure.core/ifn? render-fun)"].join('')));
=======
if(cljs.core.ifn_QMARK_.call(null,render_fun_73234)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Expected something callable, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,render_fun_73234))].join('')),"\n","(clojure.core/ifn? render-fun)"].join('')));
>>>>>>> sqlite
}


var render_fun = (function (){var or__3922__auto__ = new cljs.core.Keyword(null,"reagentRender","reagentRender",-358306383).cljs$core$IFn$_invoke$arity$1(fmap);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"componentFunction","componentFunction",825866104).cljs$core$IFn$_invoke$arity$1(fmap);
}
})();
var legacy_render = (render_fun == null);
var render_fun__$1 = (function (){var or__3922__auto__ = render_fun;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(fmap);
}
})();
var name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"displayName","displayName",-809144601).cljs$core$IFn$_invoke$arity$1(fmap);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return reagent.impl.util.fun_name.call(null,render_fun__$1);
}
})())].join('');
<<<<<<< HEAD
var name__$1 = (function (){var G__55682 = name;
switch (G__55682) {
=======
var name__$1 = (function (){var G__73232 = name;
switch (G__73232) {
>>>>>>> sqlite
case "":
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.call(null,"reagent"))].join('');

break;
default:
return name;

}
})();
var fmap__$1 = cljs.core.reduce_kv.call(null,((function (render_fun,legacy_render,render_fun__$1,name,name__$1){
return (function (m,k,v){
return cljs.core.assoc.call(null,m,k,reagent.impl.component.get_wrapper.call(null,k,v,name__$1));
});})(render_fun,legacy_render,render_fun__$1,name,name__$1))
,cljs.core.PersistentArrayMap.EMPTY,fmap);
return cljs.core.assoc.call(null,fmap__$1,new cljs.core.Keyword(null,"displayName","displayName",-809144601),name__$1,new cljs.core.Keyword(null,"autobind","autobind",-570650245),false,new cljs.core.Keyword(null,"cljsLegacyRender","cljsLegacyRender",-1527295613),legacy_render,new cljs.core.Keyword(null,"reagentRender","reagentRender",-358306383),render_fun__$1,new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"render","render",-1408033454).cljs$core$IFn$_invoke$arity$1(reagent.impl.component.static_fns));
});
reagent.impl.component.map_to_js = (function reagent$impl$component$map_to_js(m){
return cljs.core.reduce_kv.call(null,(function (o,k,v){
<<<<<<< HEAD
var G__55686 = o;
(G__55686[cljs.core.name.call(null,k)] = v);

return G__55686;
=======
var G__73236 = o;
(G__73236[cljs.core.name.call(null,k)] = v);

return G__73236;
>>>>>>> sqlite
}),({}),m);
});
reagent.impl.component.cljsify = (function reagent$impl$component$cljsify(body){
return reagent.impl.component.map_to_js.call(null,reagent.impl.component.wrap_funs.call(null,reagent.impl.component.add_obligatory.call(null,reagent.impl.component.camelify_map_keys.call(null,body))));
});
reagent.impl.component.create_class = (function reagent$impl$component$create_class(body){
if(cljs.core.map_QMARK_.call(null,body)){
} else {
throw (new Error("Assert failed: (map? body)"));
}

return reagent.impl.component.global$module$create_react_class.call(null,reagent.impl.component.cljsify.call(null,body));
});
reagent.impl.component.fiber_component_path = (function reagent$impl$component$fiber_component_path(fiber){
<<<<<<< HEAD
var name = (function (){var G__55687 = fiber;
var G__55687__$1 = (((G__55687 == null))?null:(G__55687["type"]));
if((G__55687__$1 == null)){
return null;
} else {
return (G__55687__$1["displayName"]);
}
})();
var parent = (function (){var G__55688 = fiber;
if((G__55688 == null)){
return null;
} else {
return (G__55688["return"]);
}
})();
var path = (function (){var G__55689 = parent;
var G__55689__$1 = (((G__55689 == null))?null:reagent.impl.component.fiber_component_path.call(null,G__55689));
if((G__55689__$1 == null)){
return null;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55689__$1)," > "].join('');
=======
var name = (function (){var G__73237 = fiber;
var G__73237__$1 = (((G__73237 == null))?null:(G__73237["type"]));
if((G__73237__$1 == null)){
return null;
} else {
return (G__73237__$1["displayName"]);
}
})();
var parent = (function (){var G__73238 = fiber;
if((G__73238 == null)){
return null;
} else {
return (G__73238["return"]);
}
})();
var path = (function (){var G__73239 = parent;
var G__73239__$1 = (((G__73239 == null))?null:reagent.impl.component.fiber_component_path.call(null,G__73239));
if((G__73239__$1 == null)){
return null;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__73239__$1)," > "].join('');
>>>>>>> sqlite
}
})();
var res = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('');
if(cljs.core.empty_QMARK_.call(null,res)){
return null;
} else {
return res;
}
});
reagent.impl.component.component_path = (function reagent$impl$component$component_path(c){
<<<<<<< HEAD
var temp__5455__auto__ = (function (){var or__3922__auto__ = (function (){var G__55691 = c;
if((G__55691 == null)){
return null;
} else {
return (G__55691["_reactInternalFiber"]);
=======
var temp__5455__auto__ = (function (){var or__3922__auto__ = (function (){var G__73241 = c;
if((G__73241 == null)){
return null;
} else {
return (G__73241["_reactInternalFiber"]);
>>>>>>> sqlite
}
})();
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
<<<<<<< HEAD
var G__55692 = c;
if((G__55692 == null)){
return null;
} else {
return G__55692._reactInternalFiber;
=======
var G__73242 = c;
if((G__73242 == null)){
return null;
} else {
return G__73242._reactInternalFiber;
>>>>>>> sqlite
}
}
})();
if(cljs.core.truth_(temp__5455__auto__)){
var fiber = temp__5455__auto__;
return reagent.impl.component.fiber_component_path.call(null,fiber);
} else {
<<<<<<< HEAD
var instance = (function (){var or__3922__auto__ = (function (){var G__55694 = c;
if((G__55694 == null)){
return null;
} else {
return (G__55694["_reactInternalInstance"]);
=======
var instance = (function (){var or__3922__auto__ = (function (){var G__73244 = c;
if((G__73244 == null)){
return null;
} else {
return (G__73244["_reactInternalInstance"]);
>>>>>>> sqlite
}
})();
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
<<<<<<< HEAD
var or__3922__auto____$1 = (function (){var G__55696 = c;
if((G__55696 == null)){
return null;
} else {
return G__55696._reactInternalInstance;
=======
var or__3922__auto____$1 = (function (){var G__73246 = c;
if((G__73246 == null)){
return null;
} else {
return G__73246._reactInternalInstance;
>>>>>>> sqlite
}
})();
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return c;
}
}
})();
<<<<<<< HEAD
var elem = (function (){var or__3922__auto__ = (function (){var G__55698 = instance;
if((G__55698 == null)){
return null;
} else {
return (G__55698["_currentElement"]);
=======
var elem = (function (){var or__3922__auto__ = (function (){var G__73248 = instance;
if((G__73248 == null)){
return null;
} else {
return (G__73248["_currentElement"]);
>>>>>>> sqlite
}
})();
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
<<<<<<< HEAD
var G__55699 = instance;
if((G__55699 == null)){
return null;
} else {
return G__55699._currentElement;
}
}
})();
var name = (function (){var G__55700 = elem;
var G__55700__$1 = (((G__55700 == null))?null:(G__55700["type"]));
if((G__55700__$1 == null)){
return null;
} else {
return (G__55700__$1["displayName"]);
}
})();
var owner = (function (){var or__3922__auto__ = (function (){var G__55702 = elem;
if((G__55702 == null)){
return null;
} else {
return (G__55702["_owner"]);
=======
var G__73249 = instance;
if((G__73249 == null)){
return null;
} else {
return G__73249._currentElement;
}
}
})();
var name = (function (){var G__73250 = elem;
var G__73250__$1 = (((G__73250 == null))?null:(G__73250["type"]));
if((G__73250__$1 == null)){
return null;
} else {
return (G__73250__$1["displayName"]);
}
})();
var owner = (function (){var or__3922__auto__ = (function (){var G__73252 = elem;
if((G__73252 == null)){
return null;
} else {
return (G__73252["_owner"]);
>>>>>>> sqlite
}
})();
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
<<<<<<< HEAD
var G__55703 = elem;
if((G__55703 == null)){
return null;
} else {
return G__55703._owner;
}
}
})();
var path = (function (){var G__55704 = owner;
var G__55704__$1 = (((G__55704 == null))?null:reagent.impl.component.component_path.call(null,G__55704));
if((G__55704__$1 == null)){
return null;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55704__$1)," > "].join('');
=======
var G__73253 = elem;
if((G__73253 == null)){
return null;
} else {
return G__73253._owner;
}
}
})();
var path = (function (){var G__73254 = owner;
var G__73254__$1 = (((G__73254 == null))?null:reagent.impl.component.component_path.call(null,G__73254));
if((G__73254__$1 == null)){
return null;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__73254__$1)," > "].join('');
>>>>>>> sqlite
}
})();
var res = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('');
if(cljs.core.empty_QMARK_.call(null,res)){
return null;
} else {
return res;
}
}
});
reagent.impl.component.comp_name = (function reagent$impl$component$comp_name(){
var c = reagent.impl.component._STAR_current_component_STAR_;
var n = (function (){var or__3922__auto__ = reagent.impl.component.component_path.call(null,c);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
<<<<<<< HEAD
var G__55705 = c;
var G__55705__$1 = (((G__55705 == null))?null:G__55705.constructor);
if((G__55705__$1 == null)){
return null;
} else {
return reagent.impl.util.fun_name.call(null,G__55705__$1);
=======
var G__73255 = c;
var G__73255__$1 = (((G__73255 == null))?null:G__73255.constructor);
if((G__73255__$1 == null)){
return null;
} else {
return reagent.impl.util.fun_name.call(null,G__73255__$1);
>>>>>>> sqlite
}
}
})();
if(!(cljs.core.empty_QMARK_.call(null,n))){
return [" (in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),")"].join('');
} else {
return "";
}

});
reagent.impl.component.fn_to_class = (function reagent$impl$component$fn_to_class(f){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Expected something callable, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,f))].join('')),"\n","(clojure.core/ifn? f)"].join('')));
}

if(!(!(((reagent.impl.component.react_class_QMARK_.call(null,f)) && (!(reagent.impl.component.reagent_class_QMARK_.call(null,f))))))){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).warn(["Warning: ","Using native React classes directly in Hiccup forms ","is not supported. Use create-element or ","adapt-react-class instead: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var n = reagent.impl.util.fun_name.call(null,f);
if(cljs.core.empty_QMARK_.call(null,n)){
return f;
} else {
return n;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(reagent.impl.component.comp_name.call(null))].join(''));
} else {
}
} else {
}

if(reagent.impl.component.reagent_class_QMARK_.call(null,f)){
return reagent.impl.component.cache_react_class.call(null,f,f);
} else {
var spec = cljs.core.meta.call(null,f);
var withrender = cljs.core.assoc.call(null,spec,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),f);
var res = reagent.impl.component.create_class.call(null,withrender);
return reagent.impl.component.cache_react_class.call(null,f,res);
}
});
reagent.impl.component.as_class = (function reagent$impl$component$as_class(tag){
var temp__5459__auto__ = reagent.impl.component.cached_react_class.call(null,tag);
if((temp__5459__auto__ == null)){
return reagent.impl.component.fn_to_class.call(null,tag);
} else {
var cached_class = temp__5459__auto__;
return cached_class;
}
});
reagent.impl.component.reactify_component = (function reagent$impl$component$reactify_component(comp){
if(reagent.impl.component.react_class_QMARK_.call(null,comp)){
return comp;
} else {
return reagent.impl.component.as_class.call(null,comp);
}
});

<<<<<<< HEAD
//# sourceMappingURL=component.js.map?rel=1525389491978
=======
//# sourceMappingURL=component.js.map?rel=1525389574625
>>>>>>> sqlite
