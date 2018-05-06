// Compiled by ClojureScript 1.10.238 {}
goog.provide('devtools.reporter');
goog.require('cljs.core');
goog.require('devtools.util');
goog.require('devtools.context');
devtools.reporter.issues_url = "https://github.com/binaryage/cljs-devtools/issues";
devtools.reporter.report_internal_error_BANG_ = (function devtools$reporter$report_internal_error_BANG_(var_args){
var args__4502__auto__ = [];
<<<<<<< HEAD
var len__4499__auto___55161 = arguments.length;
var i__4500__auto___55162 = (0);
while(true){
if((i__4500__auto___55162 < len__4499__auto___55161)){
args__4502__auto__.push((arguments[i__4500__auto___55162]));

var G__55163 = (i__4500__auto___55162 + (1));
i__4500__auto___55162 = G__55163;
=======
var len__4499__auto___71479 = arguments.length;
var i__4500__auto___71480 = (0);
while(true){
if((i__4500__auto___71480 < len__4499__auto___71479)){
args__4502__auto__.push((arguments[i__4500__auto___71480]));

var G__71481 = (i__4500__auto___71480 + (1));
i__4500__auto___71480 = G__71481;
>>>>>>> sqlite
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return devtools.reporter.report_internal_error_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

<<<<<<< HEAD
devtools.reporter.report_internal_error_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (e,p__55156){
var vec__55157 = p__55156;
var context = cljs.core.nth.call(null,vec__55157,(0),null);
var footer = cljs.core.nth.call(null,vec__55157,(1),null);
=======
devtools.reporter.report_internal_error_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (e,p__71474){
var vec__71475 = p__71474;
var context = cljs.core.nth.call(null,vec__71475,(0),null);
var footer = cljs.core.nth.call(null,vec__71475,(1),null);
>>>>>>> sqlite
var console = devtools.context.get_console.call(null);
try{var message = (((e instanceof Error))?(function (){var or__3922__auto__ = e.message;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return e;
}
})():e);
var header = ["%cCLJS DevTools Error%c%s","background-color:red;color:white;font-weight:bold;padding:0px 3px;border-radius:2px;","color:red",[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('')];
var context_msg = ["In ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.get_lib_info.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(context)?[", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(context),"."].join(''):".")),"\n\n"].join('');
var footer_msg = ((!((footer == null)))?footer:["\n\n","---\n","Please report the issue here: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.reporter.issues_url)].join(''));
var details = [context_msg,e,footer_msg];
var group_collapsed = (console["groupCollapsed"]);
var log = (console["log"]);
var group_end = (console["groupEnd"]);
if(cljs.core.truth_(group_collapsed)){
} else {
throw (new Error("Assert failed: group-collapsed"));
}

if(cljs.core.truth_(log)){
} else {
throw (new Error("Assert failed: log"));
}

if(cljs.core.truth_(group_end)){
} else {
throw (new Error("Assert failed: group-end"));
}

group_collapsed.apply(console,header);

log.apply(console,details);

return group_end.call(console);
<<<<<<< HEAD
}catch (e55160){var e__$1 = e55160;
=======
}catch (e71478){var e__$1 = e71478;
>>>>>>> sqlite
return console.error("FATAL: report-internal-error! failed",e__$1);
}});

devtools.reporter.report_internal_error_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
<<<<<<< HEAD
devtools.reporter.report_internal_error_BANG_.cljs$lang$applyTo = (function (seq55154){
var G__55155 = cljs.core.first.call(null,seq55154);
var seq55154__$1 = cljs.core.next.call(null,seq55154);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55155,seq55154__$1);
});


//# sourceMappingURL=reporter.js.map?rel=1525389490462
=======
devtools.reporter.report_internal_error_BANG_.cljs$lang$applyTo = (function (seq71472){
var G__71473 = cljs.core.first.call(null,seq71472);
var seq71472__$1 = cljs.core.next.call(null,seq71472);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__71473,seq71472__$1);
});


//# sourceMappingURL=reporter.js.map?rel=1525389569732
>>>>>>> sqlite
