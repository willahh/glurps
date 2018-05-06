// Compiled by ClojureScript 1.10.238 {}
goog.provide('devtools.formatters');
goog.require('cljs.core');
goog.require('goog.labs.userAgent.browser');
goog.require('devtools.prefs');
goog.require('devtools.util');
goog.require('devtools.context');
goog.require('devtools.formatters.core');
devtools.formatters._STAR_installed_STAR_ = false;
devtools.formatters._STAR_sanitizer_enabled_STAR_ = true;
devtools.formatters._STAR_monitor_enabled_STAR_ = false;
devtools.formatters.obsolete_formatter_key = "devtoolsFormatter";
devtools.formatters.available_QMARK_ = (function devtools$formatters$available_QMARK_(){
var or__3922__auto__ = devtools.util.in_node_context_QMARK_.call(null);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var and__3911__auto__ = goog.labs.userAgent.browser.isChrome();
if(cljs.core.truth_(and__3911__auto__)){
return goog.labs.userAgent.browser.isVersionOrHigher((47));
} else {
return and__3911__auto__;
}
}
});

/**
* @constructor
*/
devtools.formatters.CLJSDevtoolsFormatter = (function (){
});

devtools.formatters.CLJSDevtoolsFormatter.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

devtools.formatters.CLJSDevtoolsFormatter.cljs$lang$type = true;

devtools.formatters.CLJSDevtoolsFormatter.cljs$lang$ctorStr = "devtools.formatters/CLJSDevtoolsFormatter";

devtools.formatters.CLJSDevtoolsFormatter.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"devtools.formatters/CLJSDevtoolsFormatter");
});

/**
 * Positional factory function for devtools.formatters/CLJSDevtoolsFormatter.
 */
devtools.formatters.__GT_CLJSDevtoolsFormatter = (function devtools$formatters$__GT_CLJSDevtoolsFormatter(){
return (new devtools.formatters.CLJSDevtoolsFormatter());
});

devtools.formatters.find_fn_in_debug_ns = (function devtools$formatters$find_fn_in_debug_ns(fn_name){
try{return (devtools.context.get_root.call(null)["devtools"]["debug"][fn_name]);
<<<<<<< HEAD
}catch (e56018){var _ = e56018;
=======
}catch (e75909){var _ = e75909;
>>>>>>> sqlite
return null;
}});
devtools.formatters.monitor_api_call_if_avail = (function devtools$formatters$monitor_api_call_if_avail(name,api_call,args){
var temp__5455__auto__ = devtools.formatters.find_fn_in_debug_ns.call(null,"monitor_api_call");
if(cljs.core.truth_(temp__5455__auto__)){
var monitor_api_call = temp__5455__auto__;
return monitor_api_call.call(null,name,api_call,args);
} else {
return cljs.core.apply.call(null,api_call,args);
}
});
devtools.formatters.log_exception_if_avail = (function devtools$formatters$log_exception_if_avail(var_args){
var args__4502__auto__ = [];
<<<<<<< HEAD
var len__4499__auto___56020 = arguments.length;
var i__4500__auto___56021 = (0);
while(true){
if((i__4500__auto___56021 < len__4499__auto___56020)){
args__4502__auto__.push((arguments[i__4500__auto___56021]));

var G__56022 = (i__4500__auto___56021 + (1));
i__4500__auto___56021 = G__56022;
=======
var len__4499__auto___75911 = arguments.length;
var i__4500__auto___75912 = (0);
while(true){
if((i__4500__auto___75912 < len__4499__auto___75911)){
args__4502__auto__.push((arguments[i__4500__auto___75912]));

var G__75913 = (i__4500__auto___75912 + (1));
i__4500__auto___75912 = G__75913;
>>>>>>> sqlite
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return devtools.formatters.log_exception_if_avail.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

devtools.formatters.log_exception_if_avail.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var temp__5455__auto__ = devtools.formatters.find_fn_in_debug_ns.call(null,"log_exception");
if(cljs.core.truth_(temp__5455__auto__)){
var log_exception = temp__5455__auto__;
return cljs.core.apply.call(null,log_exception,args);
} else {
return null;
}
});

devtools.formatters.log_exception_if_avail.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD
devtools.formatters.log_exception_if_avail.cljs$lang$applyTo = (function (seq56019){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq56019));
=======
devtools.formatters.log_exception_if_avail.cljs$lang$applyTo = (function (seq75910){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq75910));
>>>>>>> sqlite
});

devtools.formatters.monitor_api_calls = (function devtools$formatters$monitor_api_calls(name,api_call){
return (function() { 
<<<<<<< HEAD
var G__56023__delegate = function (args){
=======
var G__75914__delegate = function (args){
>>>>>>> sqlite
if(!(devtools.formatters._STAR_monitor_enabled_STAR_)){
return cljs.core.apply.call(null,api_call,args);
} else {
return devtools.formatters.monitor_api_call_if_avail.call(null,name,api_call,args);
}
};
<<<<<<< HEAD
var G__56023 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__56024__i = 0, G__56024__a = new Array(arguments.length -  0);
while (G__56024__i < G__56024__a.length) {G__56024__a[G__56024__i] = arguments[G__56024__i + 0]; ++G__56024__i;}
  args = new cljs.core.IndexedSeq(G__56024__a,0,null);
} 
return G__56023__delegate.call(this,args);};
G__56023.cljs$lang$maxFixedArity = 0;
G__56023.cljs$lang$applyTo = (function (arglist__56025){
var args = cljs.core.seq(arglist__56025);
return G__56023__delegate(args);
});
G__56023.cljs$core$IFn$_invoke$arity$variadic = G__56023__delegate;
return G__56023;
=======
var G__75914 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__75915__i = 0, G__75915__a = new Array(arguments.length -  0);
while (G__75915__i < G__75915__a.length) {G__75915__a[G__75915__i] = arguments[G__75915__i + 0]; ++G__75915__i;}
  args = new cljs.core.IndexedSeq(G__75915__a,0,null);
} 
return G__75914__delegate.call(this,args);};
G__75914.cljs$lang$maxFixedArity = 0;
G__75914.cljs$lang$applyTo = (function (arglist__75916){
var args = cljs.core.seq(arglist__75916);
return G__75914__delegate(args);
});
G__75914.cljs$core$IFn$_invoke$arity$variadic = G__75914__delegate;
return G__75914;
>>>>>>> sqlite
})()
;
});
devtools.formatters.sanitize = (function devtools$formatters$sanitize(name,api_call){
return (function() { 
<<<<<<< HEAD
var G__56027__delegate = function (args){
=======
var G__75918__delegate = function (args){
>>>>>>> sqlite
if(!(devtools.formatters._STAR_sanitizer_enabled_STAR_)){
return cljs.core.apply.call(null,api_call,args);
} else {
try{return cljs.core.apply.call(null,api_call,args);
<<<<<<< HEAD
}catch (e56026){var e = e56026;
=======
}catch (e75917){var e = e75917;
>>>>>>> sqlite
devtools.formatters.log_exception_if_avail.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join(''));

return null;
}}
};
<<<<<<< HEAD
var G__56027 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__56028__i = 0, G__56028__a = new Array(arguments.length -  0);
while (G__56028__i < G__56028__a.length) {G__56028__a[G__56028__i] = arguments[G__56028__i + 0]; ++G__56028__i;}
  args = new cljs.core.IndexedSeq(G__56028__a,0,null);
} 
return G__56027__delegate.call(this,args);};
G__56027.cljs$lang$maxFixedArity = 0;
G__56027.cljs$lang$applyTo = (function (arglist__56029){
var args = cljs.core.seq(arglist__56029);
return G__56027__delegate(args);
});
G__56027.cljs$core$IFn$_invoke$arity$variadic = G__56027__delegate;
return G__56027;
=======
var G__75918 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__75919__i = 0, G__75919__a = new Array(arguments.length -  0);
while (G__75919__i < G__75919__a.length) {G__75919__a[G__75919__i] = arguments[G__75919__i + 0]; ++G__75919__i;}
  args = new cljs.core.IndexedSeq(G__75919__a,0,null);
} 
return G__75918__delegate.call(this,args);};
G__75918.cljs$lang$maxFixedArity = 0;
G__75918.cljs$lang$applyTo = (function (arglist__75920){
var args = cljs.core.seq(arglist__75920);
return G__75918__delegate(args);
});
G__75918.cljs$core$IFn$_invoke$arity$variadic = G__75918__delegate;
return G__75918;
>>>>>>> sqlite
})()
;
});
devtools.formatters.build_cljs_formatter = (function devtools$formatters$build_cljs_formatter(){
var wrap = (function (name,api_call){
var monitor = cljs.core.partial.call(null,devtools.formatters.monitor_api_calls,name);
var sanitizer = cljs.core.partial.call(null,devtools.formatters.sanitize,name);
cljs.core.comp.call(null,monitor,sanitizer).call(null,api_call);

return api_call;
});
var formatter = (new devtools.formatters.CLJSDevtoolsFormatter());
var define_BANG_ = ((function (wrap,formatter){
return (function (name,fn){
return (formatter[name] = wrap.call(null,name,fn));
});})(wrap,formatter))
;
define_BANG_.call(null,"header",devtools.formatters.core.header_api_call);

define_BANG_.call(null,"hasBody",devtools.formatters.core.has_body_api_call);

define_BANG_.call(null,"body",devtools.formatters.core.body_api_call);

return formatter;
});
devtools.formatters.is_ours_QMARK_ = (function devtools$formatters$is_ours_QMARK_(o){
return (o instanceof devtools.formatters.CLJSDevtoolsFormatter);
});
devtools.formatters.present_QMARK_ = (function devtools$formatters$present_QMARK_(){
var formatters = devtools.util.get_formatters_safe.call(null);
return cljs.core.boolean$.call(null,cljs.core.some.call(null,devtools.formatters.is_ours_QMARK_,formatters));
});
devtools.formatters.install_our_formatter_BANG_ = (function devtools$formatters$install_our_formatter_BANG_(formatter){
var formatters = devtools.util.get_formatters_safe.call(null).slice();
formatters.push(formatter);

devtools.util.set_formatters_safe_BANG_.call(null,formatters);

if(cljs.core.truth_(devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"legacy-formatter","legacy-formatter",-1954119499)))){
return (devtools.context.get_root.call(null)[devtools.formatters.obsolete_formatter_key] = formatter);
} else {
return null;
}
});
devtools.formatters.uninstall_our_formatters_BANG_ = (function devtools$formatters$uninstall_our_formatters_BANG_(){
var new_formatters = cljs.core.remove.call(null,devtools.formatters.is_ours_QMARK_,cljs.core.vec.call(null,devtools.util.get_formatters_safe.call(null)));
var new_formatters_js = ((cljs.core.empty_QMARK_.call(null,new_formatters))?null:cljs.core.into_array.call(null,new_formatters));
return devtools.util.set_formatters_safe_BANG_.call(null,new_formatters_js);
});
devtools.formatters.installed_QMARK_ = (function devtools$formatters$installed_QMARK_(){
return devtools.formatters._STAR_installed_STAR_;
});
devtools.formatters.install_BANG_ = (function devtools$formatters$install_BANG_(){
if(devtools.formatters._STAR_installed_STAR_){
return null;
} else {
devtools.formatters._STAR_installed_STAR_ = true;

devtools.formatters.install_our_formatter_BANG_.call(null,devtools.formatters.build_cljs_formatter.call(null));

return true;
}
});
devtools.formatters.uninstall_BANG_ = (function devtools$formatters$uninstall_BANG_(){
if(devtools.formatters._STAR_installed_STAR_){
devtools.formatters._STAR_installed_STAR_ = false;

return devtools.formatters.uninstall_our_formatters_BANG_.call(null);
} else {
return null;
}
});

<<<<<<< HEAD
//# sourceMappingURL=formatters.js.map?rel=1525389492787
=======
//# sourceMappingURL=formatters.js.map?rel=1525389579229
>>>>>>> sqlite
