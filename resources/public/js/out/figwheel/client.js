// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.15";
figwheel.client.js_stringify = ((((typeof JSON !== 'undefined') && (!((JSON.stringify == null)))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e31476){if((e31476 instanceof Error)){
var e = e31476;
return "Error: Unable to stringify";
} else {
throw e31476;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__31479 = arguments.length;
switch (G__31479) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__31477_SHARP_){
if(typeof p1__31477_SHARP_ === 'string'){
return p1__31477_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__31477_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___31482 = arguments.length;
var i__4500__auto___31483 = (0);
while(true){
if((i__4500__auto___31483 < len__4499__auto___31482)){
args__4502__auto__.push((arguments[i__4500__auto___31483]));

var G__31484 = (i__4500__auto___31483 + (1));
i__4500__auto___31483 = G__31484;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq31481){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31481));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___31486 = arguments.length;
var i__4500__auto___31487 = (0);
while(true){
if((i__4500__auto___31487 < len__4499__auto___31486)){
args__4502__auto__.push((arguments[i__4500__auto___31487]));

var G__31488 = (i__4500__auto___31487 + (1));
i__4500__auto___31487 = G__31488;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq31485){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31485));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__31489){
var map__31490 = p__31489;
var map__31490__$1 = ((((!((map__31490 == null)))?(((((map__31490.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31490.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31490):map__31490);
var message = cljs.core.get.call(null,map__31490__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__31490__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__3922__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__3911__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__3911__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__3911__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__27621__auto___31569 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27621__auto___31569,ch){
return (function (){
var f__27622__auto__ = (function (){var switch__27531__auto__ = ((function (c__27621__auto___31569,ch){
return (function (state_31541){
var state_val_31542 = (state_31541[(1)]);
if((state_val_31542 === (7))){
var inst_31537 = (state_31541[(2)]);
var state_31541__$1 = state_31541;
var statearr_31543_31570 = state_31541__$1;
(statearr_31543_31570[(2)] = inst_31537);

(statearr_31543_31570[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31542 === (1))){
var state_31541__$1 = state_31541;
var statearr_31544_31571 = state_31541__$1;
(statearr_31544_31571[(2)] = null);

(statearr_31544_31571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31542 === (4))){
var inst_31494 = (state_31541[(7)]);
var inst_31494__$1 = (state_31541[(2)]);
var state_31541__$1 = (function (){var statearr_31545 = state_31541;
(statearr_31545[(7)] = inst_31494__$1);

return statearr_31545;
})();
if(cljs.core.truth_(inst_31494__$1)){
var statearr_31546_31572 = state_31541__$1;
(statearr_31546_31572[(1)] = (5));

} else {
var statearr_31547_31573 = state_31541__$1;
(statearr_31547_31573[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31542 === (15))){
var inst_31501 = (state_31541[(8)]);
var inst_31516 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31501);
var inst_31517 = cljs.core.first.call(null,inst_31516);
var inst_31518 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_31517);
var inst_31519 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31518)].join('');
var inst_31520 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_31519);
var state_31541__$1 = state_31541;
var statearr_31548_31574 = state_31541__$1;
(statearr_31548_31574[(2)] = inst_31520);

(statearr_31548_31574[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31542 === (13))){
var inst_31525 = (state_31541[(2)]);
var state_31541__$1 = state_31541;
var statearr_31549_31575 = state_31541__$1;
(statearr_31549_31575[(2)] = inst_31525);

(statearr_31549_31575[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31542 === (6))){
var state_31541__$1 = state_31541;
var statearr_31550_31576 = state_31541__$1;
(statearr_31550_31576[(2)] = null);

(statearr_31550_31576[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31542 === (17))){
var inst_31523 = (state_31541[(2)]);
var state_31541__$1 = state_31541;
var statearr_31551_31577 = state_31541__$1;
(statearr_31551_31577[(2)] = inst_31523);

(statearr_31551_31577[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31542 === (3))){
var inst_31539 = (state_31541[(2)]);
var state_31541__$1 = state_31541;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31541__$1,inst_31539);
} else {
if((state_val_31542 === (12))){
var inst_31500 = (state_31541[(9)]);
var inst_31514 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_31500,opts);
var state_31541__$1 = state_31541;
if(cljs.core.truth_(inst_31514)){
var statearr_31552_31578 = state_31541__$1;
(statearr_31552_31578[(1)] = (15));

} else {
var statearr_31553_31579 = state_31541__$1;
(statearr_31553_31579[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31542 === (2))){
var state_31541__$1 = state_31541;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31541__$1,(4),ch);
} else {
if((state_val_31542 === (11))){
var inst_31501 = (state_31541[(8)]);
var inst_31506 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31507 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_31501);
var inst_31508 = cljs.core.async.timeout.call(null,(1000));
var inst_31509 = [inst_31507,inst_31508];
var inst_31510 = (new cljs.core.PersistentVector(null,2,(5),inst_31506,inst_31509,null));
var state_31541__$1 = state_31541;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31541__$1,(14),inst_31510);
} else {
if((state_val_31542 === (9))){
var inst_31501 = (state_31541[(8)]);
var inst_31527 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_31528 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31501);
var inst_31529 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31528);
var inst_31530 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31529)].join('');
var inst_31531 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_31530);
var state_31541__$1 = (function (){var statearr_31554 = state_31541;
(statearr_31554[(10)] = inst_31527);

return statearr_31554;
})();
var statearr_31555_31580 = state_31541__$1;
(statearr_31555_31580[(2)] = inst_31531);

(statearr_31555_31580[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31542 === (5))){
var inst_31494 = (state_31541[(7)]);
var inst_31496 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_31497 = (new cljs.core.PersistentArrayMap(null,2,inst_31496,null));
var inst_31498 = (new cljs.core.PersistentHashSet(null,inst_31497,null));
var inst_31499 = figwheel.client.focus_msgs.call(null,inst_31498,inst_31494);
var inst_31500 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_31499);
var inst_31501 = cljs.core.first.call(null,inst_31499);
var inst_31502 = figwheel.client.autoload_QMARK_.call(null);
var state_31541__$1 = (function (){var statearr_31556 = state_31541;
(statearr_31556[(9)] = inst_31500);

(statearr_31556[(8)] = inst_31501);

return statearr_31556;
})();
if(cljs.core.truth_(inst_31502)){
var statearr_31557_31581 = state_31541__$1;
(statearr_31557_31581[(1)] = (8));

} else {
var statearr_31558_31582 = state_31541__$1;
(statearr_31558_31582[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31542 === (14))){
var inst_31512 = (state_31541[(2)]);
var state_31541__$1 = state_31541;
var statearr_31559_31583 = state_31541__$1;
(statearr_31559_31583[(2)] = inst_31512);

(statearr_31559_31583[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31542 === (16))){
var state_31541__$1 = state_31541;
var statearr_31560_31584 = state_31541__$1;
(statearr_31560_31584[(2)] = null);

(statearr_31560_31584[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31542 === (10))){
var inst_31533 = (state_31541[(2)]);
var state_31541__$1 = (function (){var statearr_31561 = state_31541;
(statearr_31561[(11)] = inst_31533);

return statearr_31561;
})();
var statearr_31562_31585 = state_31541__$1;
(statearr_31562_31585[(2)] = null);

(statearr_31562_31585[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31542 === (8))){
var inst_31500 = (state_31541[(9)]);
var inst_31504 = figwheel.client.reload_file_state_QMARK_.call(null,inst_31500,opts);
var state_31541__$1 = state_31541;
if(cljs.core.truth_(inst_31504)){
var statearr_31563_31586 = state_31541__$1;
(statearr_31563_31586[(1)] = (11));

} else {
var statearr_31564_31587 = state_31541__$1;
(statearr_31564_31587[(1)] = (12));

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
});})(c__27621__auto___31569,ch))
;
return ((function (switch__27531__auto__,c__27621__auto___31569,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__27532__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__27532__auto____0 = (function (){
var statearr_31565 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31565[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__27532__auto__);

(statearr_31565[(1)] = (1));

return statearr_31565;
});
var figwheel$client$file_reloader_plugin_$_state_machine__27532__auto____1 = (function (state_31541){
while(true){
var ret_value__27533__auto__ = (function (){try{while(true){
var result__27534__auto__ = switch__27531__auto__.call(null,state_31541);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27534__auto__;
}
break;
}
}catch (e31566){if((e31566 instanceof Object)){
var ex__27535__auto__ = e31566;
var statearr_31567_31588 = state_31541;
(statearr_31567_31588[(5)] = ex__27535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31541);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31566;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31589 = state_31541;
state_31541 = G__31589;
continue;
} else {
return ret_value__27533__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__27532__auto__ = function(state_31541){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__27532__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__27532__auto____1.call(this,state_31541);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__27532__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__27532__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__27532__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__27532__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__27532__auto__;
})()
;})(switch__27531__auto__,c__27621__auto___31569,ch))
})();
var state__27623__auto__ = (function (){var statearr_31568 = f__27622__auto__.call(null);
(statearr_31568[(6)] = c__27621__auto___31569);

return statearr_31568;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27623__auto__);
});})(c__27621__auto___31569,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__31590_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__31590_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_31594 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_31594){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_31592 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_31593 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_31592,_STAR_print_fn_STAR_31593,sb,base_path_31594){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_31592,_STAR_print_fn_STAR_31593,sb,base_path_31594))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_31593;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_31592;
}}catch (e31591){if((e31591 instanceof Error)){
var e = e31591;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_31594], null));
} else {
var e = e31591;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_31594))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__31595){
var map__31596 = p__31595;
var map__31596__$1 = ((((!((map__31596 == null)))?(((((map__31596.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31596.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31596):map__31596);
var opts = map__31596__$1;
var build_id = cljs.core.get.call(null,map__31596__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__31596,map__31596__$1,opts,build_id){
return (function (p__31598){
var vec__31599 = p__31598;
var seq__31600 = cljs.core.seq.call(null,vec__31599);
var first__31601 = cljs.core.first.call(null,seq__31600);
var seq__31600__$1 = cljs.core.next.call(null,seq__31600);
var map__31602 = first__31601;
var map__31602__$1 = ((((!((map__31602 == null)))?(((((map__31602.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31602.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31602):map__31602);
var msg = map__31602__$1;
var msg_name = cljs.core.get.call(null,map__31602__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31600__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__31599,seq__31600,first__31601,seq__31600__$1,map__31602,map__31602__$1,msg,msg_name,_,map__31596,map__31596__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__31599,seq__31600,first__31601,seq__31600__$1,map__31602,map__31602__$1,msg,msg_name,_,map__31596,map__31596__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__31596,map__31596__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__31604){
var vec__31605 = p__31604;
var seq__31606 = cljs.core.seq.call(null,vec__31605);
var first__31607 = cljs.core.first.call(null,seq__31606);
var seq__31606__$1 = cljs.core.next.call(null,seq__31606);
var map__31608 = first__31607;
var map__31608__$1 = ((((!((map__31608 == null)))?(((((map__31608.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31608.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31608):map__31608);
var msg = map__31608__$1;
var msg_name = cljs.core.get.call(null,map__31608__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31606__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__31610){
var map__31611 = p__31610;
var map__31611__$1 = ((((!((map__31611 == null)))?(((((map__31611.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31611.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31611):map__31611);
var on_compile_warning = cljs.core.get.call(null,map__31611__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__31611__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__31611,map__31611__$1,on_compile_warning,on_compile_fail){
return (function (p__31613){
var vec__31614 = p__31613;
var seq__31615 = cljs.core.seq.call(null,vec__31614);
var first__31616 = cljs.core.first.call(null,seq__31615);
var seq__31615__$1 = cljs.core.next.call(null,seq__31615);
var map__31617 = first__31616;
var map__31617__$1 = ((((!((map__31617 == null)))?(((((map__31617.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31617.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31617):map__31617);
var msg = map__31617__$1;
var msg_name = cljs.core.get.call(null,map__31617__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31615__$1;
var pred__31619 = cljs.core._EQ_;
var expr__31620 = msg_name;
if(cljs.core.truth_(pred__31619.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__31620))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__31619.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__31620))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__31611,map__31611__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__27621__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27621__auto__,msg_hist,msg_names,msg){
return (function (){
var f__27622__auto__ = (function (){var switch__27531__auto__ = ((function (c__27621__auto__,msg_hist,msg_names,msg){
return (function (state_31709){
var state_val_31710 = (state_31709[(1)]);
if((state_val_31710 === (7))){
var inst_31629 = (state_31709[(2)]);
var state_31709__$1 = state_31709;
if(cljs.core.truth_(inst_31629)){
var statearr_31711_31758 = state_31709__$1;
(statearr_31711_31758[(1)] = (8));

} else {
var statearr_31712_31759 = state_31709__$1;
(statearr_31712_31759[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31710 === (20))){
var inst_31703 = (state_31709[(2)]);
var state_31709__$1 = state_31709;
var statearr_31713_31760 = state_31709__$1;
(statearr_31713_31760[(2)] = inst_31703);

(statearr_31713_31760[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31710 === (27))){
var inst_31699 = (state_31709[(2)]);
var state_31709__$1 = state_31709;
var statearr_31714_31761 = state_31709__$1;
(statearr_31714_31761[(2)] = inst_31699);

(statearr_31714_31761[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31710 === (1))){
var inst_31622 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_31709__$1 = state_31709;
if(cljs.core.truth_(inst_31622)){
var statearr_31715_31762 = state_31709__$1;
(statearr_31715_31762[(1)] = (2));

} else {
var statearr_31716_31763 = state_31709__$1;
(statearr_31716_31763[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31710 === (24))){
var inst_31701 = (state_31709[(2)]);
var state_31709__$1 = state_31709;
var statearr_31717_31764 = state_31709__$1;
(statearr_31717_31764[(2)] = inst_31701);

(statearr_31717_31764[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31710 === (4))){
var inst_31707 = (state_31709[(2)]);
var state_31709__$1 = state_31709;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31709__$1,inst_31707);
} else {
if((state_val_31710 === (15))){
var inst_31705 = (state_31709[(2)]);
var state_31709__$1 = state_31709;
var statearr_31718_31765 = state_31709__$1;
(statearr_31718_31765[(2)] = inst_31705);

(statearr_31718_31765[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31710 === (21))){
var inst_31658 = (state_31709[(2)]);
var inst_31659 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31660 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31659);
var state_31709__$1 = (function (){var statearr_31719 = state_31709;
(statearr_31719[(7)] = inst_31658);

return statearr_31719;
})();
var statearr_31720_31766 = state_31709__$1;
(statearr_31720_31766[(2)] = inst_31660);

(statearr_31720_31766[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31710 === (31))){
var inst_31688 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_31709__$1 = state_31709;
if(cljs.core.truth_(inst_31688)){
var statearr_31721_31767 = state_31709__$1;
(statearr_31721_31767[(1)] = (34));

} else {
var statearr_31722_31768 = state_31709__$1;
(statearr_31722_31768[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31710 === (32))){
var inst_31697 = (state_31709[(2)]);
var state_31709__$1 = state_31709;
var statearr_31723_31769 = state_31709__$1;
(statearr_31723_31769[(2)] = inst_31697);

(statearr_31723_31769[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31710 === (33))){
var inst_31684 = (state_31709[(2)]);
var inst_31685 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31686 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31685);
var state_31709__$1 = (function (){var statearr_31724 = state_31709;
(statearr_31724[(8)] = inst_31684);

return statearr_31724;
})();
var statearr_31725_31770 = state_31709__$1;
(statearr_31725_31770[(2)] = inst_31686);

(statearr_31725_31770[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31710 === (13))){
var inst_31643 = figwheel.client.heads_up.clear.call(null);
var state_31709__$1 = state_31709;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31709__$1,(16),inst_31643);
} else {
if((state_val_31710 === (22))){
var inst_31664 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31665 = figwheel.client.heads_up.append_warning_message.call(null,inst_31664);
var state_31709__$1 = state_31709;
var statearr_31726_31771 = state_31709__$1;
(statearr_31726_31771[(2)] = inst_31665);

(statearr_31726_31771[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31710 === (36))){
var inst_31695 = (state_31709[(2)]);
var state_31709__$1 = state_31709;
var statearr_31727_31772 = state_31709__$1;
(statearr_31727_31772[(2)] = inst_31695);

(statearr_31727_31772[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31710 === (29))){
var inst_31675 = (state_31709[(2)]);
var inst_31676 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31677 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31676);
var state_31709__$1 = (function (){var statearr_31728 = state_31709;
(statearr_31728[(9)] = inst_31675);

return statearr_31728;
})();
var statearr_31729_31773 = state_31709__$1;
(statearr_31729_31773[(2)] = inst_31677);

(statearr_31729_31773[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31710 === (6))){
var inst_31624 = (state_31709[(10)]);
var state_31709__$1 = state_31709;
var statearr_31730_31774 = state_31709__$1;
(statearr_31730_31774[(2)] = inst_31624);

(statearr_31730_31774[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31710 === (28))){
var inst_31671 = (state_31709[(2)]);
var inst_31672 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31673 = figwheel.client.heads_up.display_warning.call(null,inst_31672);
var state_31709__$1 = (function (){var statearr_31731 = state_31709;
(statearr_31731[(11)] = inst_31671);

return statearr_31731;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31709__$1,(29),inst_31673);
} else {
if((state_val_31710 === (25))){
var inst_31669 = figwheel.client.heads_up.clear.call(null);
var state_31709__$1 = state_31709;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31709__$1,(28),inst_31669);
} else {
if((state_val_31710 === (34))){
var inst_31690 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31709__$1 = state_31709;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31709__$1,(37),inst_31690);
} else {
if((state_val_31710 === (17))){
var inst_31649 = (state_31709[(2)]);
var inst_31650 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31651 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31650);
var state_31709__$1 = (function (){var statearr_31732 = state_31709;
(statearr_31732[(12)] = inst_31649);

return statearr_31732;
})();
var statearr_31733_31775 = state_31709__$1;
(statearr_31733_31775[(2)] = inst_31651);

(statearr_31733_31775[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31710 === (3))){
var inst_31641 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_31709__$1 = state_31709;
if(cljs.core.truth_(inst_31641)){
var statearr_31734_31776 = state_31709__$1;
(statearr_31734_31776[(1)] = (13));

} else {
var statearr_31735_31777 = state_31709__$1;
(statearr_31735_31777[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31710 === (12))){
var inst_31637 = (state_31709[(2)]);
var state_31709__$1 = state_31709;
var statearr_31736_31778 = state_31709__$1;
(statearr_31736_31778[(2)] = inst_31637);

(statearr_31736_31778[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31710 === (2))){
var inst_31624 = (state_31709[(10)]);
var inst_31624__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_31709__$1 = (function (){var statearr_31737 = state_31709;
(statearr_31737[(10)] = inst_31624__$1);

return statearr_31737;
})();
if(cljs.core.truth_(inst_31624__$1)){
var statearr_31738_31779 = state_31709__$1;
(statearr_31738_31779[(1)] = (5));

} else {
var statearr_31739_31780 = state_31709__$1;
(statearr_31739_31780[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31710 === (23))){
var inst_31667 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_31709__$1 = state_31709;
if(cljs.core.truth_(inst_31667)){
var statearr_31740_31781 = state_31709__$1;
(statearr_31740_31781[(1)] = (25));

} else {
var statearr_31741_31782 = state_31709__$1;
(statearr_31741_31782[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31710 === (35))){
var state_31709__$1 = state_31709;
var statearr_31742_31783 = state_31709__$1;
(statearr_31742_31783[(2)] = null);

(statearr_31742_31783[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31710 === (19))){
var inst_31662 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_31709__$1 = state_31709;
if(cljs.core.truth_(inst_31662)){
var statearr_31743_31784 = state_31709__$1;
(statearr_31743_31784[(1)] = (22));

} else {
var statearr_31744_31785 = state_31709__$1;
(statearr_31744_31785[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31710 === (11))){
var inst_31633 = (state_31709[(2)]);
var state_31709__$1 = state_31709;
var statearr_31745_31786 = state_31709__$1;
(statearr_31745_31786[(2)] = inst_31633);

(statearr_31745_31786[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31710 === (9))){
var inst_31635 = figwheel.client.heads_up.clear.call(null);
var state_31709__$1 = state_31709;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31709__$1,(12),inst_31635);
} else {
if((state_val_31710 === (5))){
var inst_31626 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_31709__$1 = state_31709;
var statearr_31746_31787 = state_31709__$1;
(statearr_31746_31787[(2)] = inst_31626);

(statearr_31746_31787[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31710 === (14))){
var inst_31653 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_31709__$1 = state_31709;
if(cljs.core.truth_(inst_31653)){
var statearr_31747_31788 = state_31709__$1;
(statearr_31747_31788[(1)] = (18));

} else {
var statearr_31748_31789 = state_31709__$1;
(statearr_31748_31789[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31710 === (26))){
var inst_31679 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_31709__$1 = state_31709;
if(cljs.core.truth_(inst_31679)){
var statearr_31749_31790 = state_31709__$1;
(statearr_31749_31790[(1)] = (30));

} else {
var statearr_31750_31791 = state_31709__$1;
(statearr_31750_31791[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31710 === (16))){
var inst_31645 = (state_31709[(2)]);
var inst_31646 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31647 = figwheel.client.heads_up.display_exception.call(null,inst_31646);
var state_31709__$1 = (function (){var statearr_31751 = state_31709;
(statearr_31751[(13)] = inst_31645);

return statearr_31751;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31709__$1,(17),inst_31647);
} else {
if((state_val_31710 === (30))){
var inst_31681 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31682 = figwheel.client.heads_up.display_warning.call(null,inst_31681);
var state_31709__$1 = state_31709;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31709__$1,(33),inst_31682);
} else {
if((state_val_31710 === (10))){
var inst_31639 = (state_31709[(2)]);
var state_31709__$1 = state_31709;
var statearr_31752_31792 = state_31709__$1;
(statearr_31752_31792[(2)] = inst_31639);

(statearr_31752_31792[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31710 === (18))){
var inst_31655 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31656 = figwheel.client.heads_up.display_exception.call(null,inst_31655);
var state_31709__$1 = state_31709;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31709__$1,(21),inst_31656);
} else {
if((state_val_31710 === (37))){
var inst_31692 = (state_31709[(2)]);
var state_31709__$1 = state_31709;
var statearr_31753_31793 = state_31709__$1;
(statearr_31753_31793[(2)] = inst_31692);

(statearr_31753_31793[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31710 === (8))){
var inst_31631 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31709__$1 = state_31709;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31709__$1,(11),inst_31631);
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
});})(c__27621__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__27531__auto__,c__27621__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27532__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27532__auto____0 = (function (){
var statearr_31754 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31754[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27532__auto__);

(statearr_31754[(1)] = (1));

return statearr_31754;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27532__auto____1 = (function (state_31709){
while(true){
var ret_value__27533__auto__ = (function (){try{while(true){
var result__27534__auto__ = switch__27531__auto__.call(null,state_31709);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27534__auto__;
}
break;
}
}catch (e31755){if((e31755 instanceof Object)){
var ex__27535__auto__ = e31755;
var statearr_31756_31794 = state_31709;
(statearr_31756_31794[(5)] = ex__27535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31709);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31755;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31795 = state_31709;
state_31709 = G__31795;
continue;
} else {
return ret_value__27533__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27532__auto__ = function(state_31709){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27532__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27532__auto____1.call(this,state_31709);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27532__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27532__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27532__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27532__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27532__auto__;
})()
;})(switch__27531__auto__,c__27621__auto__,msg_hist,msg_names,msg))
})();
var state__27623__auto__ = (function (){var statearr_31757 = f__27622__auto__.call(null);
(statearr_31757[(6)] = c__27621__auto__);

return statearr_31757;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27623__auto__);
});})(c__27621__auto__,msg_hist,msg_names,msg))
);

return c__27621__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__27621__auto___31824 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27621__auto___31824,ch){
return (function (){
var f__27622__auto__ = (function (){var switch__27531__auto__ = ((function (c__27621__auto___31824,ch){
return (function (state_31810){
var state_val_31811 = (state_31810[(1)]);
if((state_val_31811 === (1))){
var state_31810__$1 = state_31810;
var statearr_31812_31825 = state_31810__$1;
(statearr_31812_31825[(2)] = null);

(statearr_31812_31825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31811 === (2))){
var state_31810__$1 = state_31810;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31810__$1,(4),ch);
} else {
if((state_val_31811 === (3))){
var inst_31808 = (state_31810[(2)]);
var state_31810__$1 = state_31810;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31810__$1,inst_31808);
} else {
if((state_val_31811 === (4))){
var inst_31798 = (state_31810[(7)]);
var inst_31798__$1 = (state_31810[(2)]);
var state_31810__$1 = (function (){var statearr_31813 = state_31810;
(statearr_31813[(7)] = inst_31798__$1);

return statearr_31813;
})();
if(cljs.core.truth_(inst_31798__$1)){
var statearr_31814_31826 = state_31810__$1;
(statearr_31814_31826[(1)] = (5));

} else {
var statearr_31815_31827 = state_31810__$1;
(statearr_31815_31827[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31811 === (5))){
var inst_31798 = (state_31810[(7)]);
var inst_31800 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_31798);
var state_31810__$1 = state_31810;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31810__$1,(8),inst_31800);
} else {
if((state_val_31811 === (6))){
var state_31810__$1 = state_31810;
var statearr_31816_31828 = state_31810__$1;
(statearr_31816_31828[(2)] = null);

(statearr_31816_31828[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31811 === (7))){
var inst_31806 = (state_31810[(2)]);
var state_31810__$1 = state_31810;
var statearr_31817_31829 = state_31810__$1;
(statearr_31817_31829[(2)] = inst_31806);

(statearr_31817_31829[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31811 === (8))){
var inst_31802 = (state_31810[(2)]);
var state_31810__$1 = (function (){var statearr_31818 = state_31810;
(statearr_31818[(8)] = inst_31802);

return statearr_31818;
})();
var statearr_31819_31830 = state_31810__$1;
(statearr_31819_31830[(2)] = null);

(statearr_31819_31830[(1)] = (2));


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
});})(c__27621__auto___31824,ch))
;
return ((function (switch__27531__auto__,c__27621__auto___31824,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__27532__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__27532__auto____0 = (function (){
var statearr_31820 = [null,null,null,null,null,null,null,null,null];
(statearr_31820[(0)] = figwheel$client$heads_up_plugin_$_state_machine__27532__auto__);

(statearr_31820[(1)] = (1));

return statearr_31820;
});
var figwheel$client$heads_up_plugin_$_state_machine__27532__auto____1 = (function (state_31810){
while(true){
var ret_value__27533__auto__ = (function (){try{while(true){
var result__27534__auto__ = switch__27531__auto__.call(null,state_31810);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27534__auto__;
}
break;
}
}catch (e31821){if((e31821 instanceof Object)){
var ex__27535__auto__ = e31821;
var statearr_31822_31831 = state_31810;
(statearr_31822_31831[(5)] = ex__27535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31810);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31821;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31832 = state_31810;
state_31810 = G__31832;
continue;
} else {
return ret_value__27533__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__27532__auto__ = function(state_31810){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__27532__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__27532__auto____1.call(this,state_31810);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__27532__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__27532__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__27532__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__27532__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__27532__auto__;
})()
;})(switch__27531__auto__,c__27621__auto___31824,ch))
})();
var state__27623__auto__ = (function (){var statearr_31823 = f__27622__auto__.call(null);
(statearr_31823[(6)] = c__27621__auto___31824);

return statearr_31823;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27623__auto__);
});})(c__27621__auto___31824,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__27621__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27621__auto__){
return (function (){
var f__27622__auto__ = (function (){var switch__27531__auto__ = ((function (c__27621__auto__){
return (function (state_31838){
var state_val_31839 = (state_31838[(1)]);
if((state_val_31839 === (1))){
var inst_31833 = cljs.core.async.timeout.call(null,(3000));
var state_31838__$1 = state_31838;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31838__$1,(2),inst_31833);
} else {
if((state_val_31839 === (2))){
var inst_31835 = (state_31838[(2)]);
var inst_31836 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_31838__$1 = (function (){var statearr_31840 = state_31838;
(statearr_31840[(7)] = inst_31835);

return statearr_31840;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31838__$1,inst_31836);
} else {
return null;
}
}
});})(c__27621__auto__))
;
return ((function (switch__27531__auto__,c__27621__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__27532__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__27532__auto____0 = (function (){
var statearr_31841 = [null,null,null,null,null,null,null,null];
(statearr_31841[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__27532__auto__);

(statearr_31841[(1)] = (1));

return statearr_31841;
});
var figwheel$client$enforce_project_plugin_$_state_machine__27532__auto____1 = (function (state_31838){
while(true){
var ret_value__27533__auto__ = (function (){try{while(true){
var result__27534__auto__ = switch__27531__auto__.call(null,state_31838);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27534__auto__;
}
break;
}
}catch (e31842){if((e31842 instanceof Object)){
var ex__27535__auto__ = e31842;
var statearr_31843_31845 = state_31838;
(statearr_31843_31845[(5)] = ex__27535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31838);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31842;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31846 = state_31838;
state_31838 = G__31846;
continue;
} else {
return ret_value__27533__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__27532__auto__ = function(state_31838){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__27532__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__27532__auto____1.call(this,state_31838);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__27532__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__27532__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__27532__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__27532__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__27532__auto__;
})()
;})(switch__27531__auto__,c__27621__auto__))
})();
var state__27623__auto__ = (function (){var statearr_31844 = f__27622__auto__.call(null);
(statearr_31844[(6)] = c__27621__auto__);

return statearr_31844;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27623__auto__);
});})(c__27621__auto__))
);

return c__27621__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5457__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5457__auto__)){
var figwheel_version = temp__5457__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__27621__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27621__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__27622__auto__ = (function (){var switch__27531__auto__ = ((function (c__27621__auto__,figwheel_version,temp__5457__auto__){
return (function (state_31853){
var state_val_31854 = (state_31853[(1)]);
if((state_val_31854 === (1))){
var inst_31847 = cljs.core.async.timeout.call(null,(2000));
var state_31853__$1 = state_31853;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31853__$1,(2),inst_31847);
} else {
if((state_val_31854 === (2))){
var inst_31849 = (state_31853[(2)]);
var inst_31850 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_31851 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_31850);
var state_31853__$1 = (function (){var statearr_31855 = state_31853;
(statearr_31855[(7)] = inst_31849);

return statearr_31855;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31853__$1,inst_31851);
} else {
return null;
}
}
});})(c__27621__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__27531__auto__,c__27621__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27532__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27532__auto____0 = (function (){
var statearr_31856 = [null,null,null,null,null,null,null,null];
(statearr_31856[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27532__auto__);

(statearr_31856[(1)] = (1));

return statearr_31856;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27532__auto____1 = (function (state_31853){
while(true){
var ret_value__27533__auto__ = (function (){try{while(true){
var result__27534__auto__ = switch__27531__auto__.call(null,state_31853);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27534__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27534__auto__;
}
break;
}
}catch (e31857){if((e31857 instanceof Object)){
var ex__27535__auto__ = e31857;
var statearr_31858_31860 = state_31853;
(statearr_31858_31860[(5)] = ex__27535__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31853);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31857;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27533__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31861 = state_31853;
state_31853 = G__31861;
continue;
} else {
return ret_value__27533__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27532__auto__ = function(state_31853){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27532__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27532__auto____1.call(this,state_31853);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27532__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27532__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27532__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27532__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27532__auto__;
})()
;})(switch__27531__auto__,c__27621__auto__,figwheel_version,temp__5457__auto__))
})();
var state__27623__auto__ = (function (){var statearr_31859 = f__27622__auto__.call(null);
(statearr_31859[(6)] = c__27621__auto__);

return statearr_31859;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27623__auto__);
});})(c__27621__auto__,figwheel_version,temp__5457__auto__))
);

return c__27621__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__31862){
var map__31863 = p__31862;
var map__31863__$1 = ((((!((map__31863 == null)))?(((((map__31863.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31863.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31863):map__31863);
var file = cljs.core.get.call(null,map__31863__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__31863__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__31863__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__31865 = "";
var G__31865__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31865),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__31865);
var G__31865__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31865__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__31865__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = line;
if(cljs.core.truth_(and__3911__auto__)){
return column;
} else {
return and__3911__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31865__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__31865__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__31866){
var map__31867 = p__31866;
var map__31867__$1 = ((((!((map__31867 == null)))?(((((map__31867.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31867.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31867):map__31867);
var ed = map__31867__$1;
var formatted_exception = cljs.core.get.call(null,map__31867__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__31867__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__31867__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__31869_31873 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__31870_31874 = null;
var count__31871_31875 = (0);
var i__31872_31876 = (0);
while(true){
if((i__31872_31876 < count__31871_31875)){
var msg_31877 = cljs.core._nth.call(null,chunk__31870_31874,i__31872_31876);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31877);


var G__31878 = seq__31869_31873;
var G__31879 = chunk__31870_31874;
var G__31880 = count__31871_31875;
var G__31881 = (i__31872_31876 + (1));
seq__31869_31873 = G__31878;
chunk__31870_31874 = G__31879;
count__31871_31875 = G__31880;
i__31872_31876 = G__31881;
continue;
} else {
var temp__5457__auto___31882 = cljs.core.seq.call(null,seq__31869_31873);
if(temp__5457__auto___31882){
var seq__31869_31883__$1 = temp__5457__auto___31882;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31869_31883__$1)){
var c__4319__auto___31884 = cljs.core.chunk_first.call(null,seq__31869_31883__$1);
var G__31885 = cljs.core.chunk_rest.call(null,seq__31869_31883__$1);
var G__31886 = c__4319__auto___31884;
var G__31887 = cljs.core.count.call(null,c__4319__auto___31884);
var G__31888 = (0);
seq__31869_31873 = G__31885;
chunk__31870_31874 = G__31886;
count__31871_31875 = G__31887;
i__31872_31876 = G__31888;
continue;
} else {
var msg_31889 = cljs.core.first.call(null,seq__31869_31883__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31889);


var G__31890 = cljs.core.next.call(null,seq__31869_31883__$1);
var G__31891 = null;
var G__31892 = (0);
var G__31893 = (0);
seq__31869_31873 = G__31890;
chunk__31870_31874 = G__31891;
count__31871_31875 = G__31892;
i__31872_31876 = G__31893;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__31894){
var map__31895 = p__31894;
var map__31895__$1 = ((((!((map__31895 == null)))?(((((map__31895.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31895.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31895):map__31895);
var w = map__31895__$1;
var message = cljs.core.get.call(null,map__31895__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/out/figwheel/client.cljs",33,1,361,361,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/out/figwheel/client.cljs",30,1,353,353,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__3911__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__3911__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__31897 = cljs.core.seq.call(null,plugins);
var chunk__31898 = null;
var count__31899 = (0);
var i__31900 = (0);
while(true){
if((i__31900 < count__31899)){
var vec__31901 = cljs.core._nth.call(null,chunk__31898,i__31900);
var k = cljs.core.nth.call(null,vec__31901,(0),null);
var plugin = cljs.core.nth.call(null,vec__31901,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31907 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31897,chunk__31898,count__31899,i__31900,pl_31907,vec__31901,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_31907.call(null,msg_hist);
});})(seq__31897,chunk__31898,count__31899,i__31900,pl_31907,vec__31901,k,plugin))
);
} else {
}


var G__31908 = seq__31897;
var G__31909 = chunk__31898;
var G__31910 = count__31899;
var G__31911 = (i__31900 + (1));
seq__31897 = G__31908;
chunk__31898 = G__31909;
count__31899 = G__31910;
i__31900 = G__31911;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__31897);
if(temp__5457__auto__){
var seq__31897__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31897__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__31897__$1);
var G__31912 = cljs.core.chunk_rest.call(null,seq__31897__$1);
var G__31913 = c__4319__auto__;
var G__31914 = cljs.core.count.call(null,c__4319__auto__);
var G__31915 = (0);
seq__31897 = G__31912;
chunk__31898 = G__31913;
count__31899 = G__31914;
i__31900 = G__31915;
continue;
} else {
var vec__31904 = cljs.core.first.call(null,seq__31897__$1);
var k = cljs.core.nth.call(null,vec__31904,(0),null);
var plugin = cljs.core.nth.call(null,vec__31904,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31916 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31897,chunk__31898,count__31899,i__31900,pl_31916,vec__31904,k,plugin,seq__31897__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_31916.call(null,msg_hist);
});})(seq__31897,chunk__31898,count__31899,i__31900,pl_31916,vec__31904,k,plugin,seq__31897__$1,temp__5457__auto__))
);
} else {
}


var G__31917 = cljs.core.next.call(null,seq__31897__$1);
var G__31918 = null;
var G__31919 = (0);
var G__31920 = (0);
seq__31897 = G__31917;
chunk__31898 = G__31918;
count__31899 = G__31919;
i__31900 = G__31920;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__31922 = arguments.length;
switch (G__31922) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__31923_31928 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__31924_31929 = null;
var count__31925_31930 = (0);
var i__31926_31931 = (0);
while(true){
if((i__31926_31931 < count__31925_31930)){
var msg_31932 = cljs.core._nth.call(null,chunk__31924_31929,i__31926_31931);
figwheel.client.socket.handle_incoming_message.call(null,msg_31932);


var G__31933 = seq__31923_31928;
var G__31934 = chunk__31924_31929;
var G__31935 = count__31925_31930;
var G__31936 = (i__31926_31931 + (1));
seq__31923_31928 = G__31933;
chunk__31924_31929 = G__31934;
count__31925_31930 = G__31935;
i__31926_31931 = G__31936;
continue;
} else {
var temp__5457__auto___31937 = cljs.core.seq.call(null,seq__31923_31928);
if(temp__5457__auto___31937){
var seq__31923_31938__$1 = temp__5457__auto___31937;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31923_31938__$1)){
var c__4319__auto___31939 = cljs.core.chunk_first.call(null,seq__31923_31938__$1);
var G__31940 = cljs.core.chunk_rest.call(null,seq__31923_31938__$1);
var G__31941 = c__4319__auto___31939;
var G__31942 = cljs.core.count.call(null,c__4319__auto___31939);
var G__31943 = (0);
seq__31923_31928 = G__31940;
chunk__31924_31929 = G__31941;
count__31925_31930 = G__31942;
i__31926_31931 = G__31943;
continue;
} else {
var msg_31944 = cljs.core.first.call(null,seq__31923_31938__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_31944);


var G__31945 = cljs.core.next.call(null,seq__31923_31938__$1);
var G__31946 = null;
var G__31947 = (0);
var G__31948 = (0);
seq__31923_31928 = G__31945;
chunk__31924_31929 = G__31946;
count__31925_31930 = G__31947;
i__31926_31931 = G__31948;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4502__auto__ = [];
var len__4499__auto___31953 = arguments.length;
var i__4500__auto___31954 = (0);
while(true){
if((i__4500__auto___31954 < len__4499__auto___31953)){
args__4502__auto__.push((arguments[i__4500__auto___31954]));

var G__31955 = (i__4500__auto___31954 + (1));
i__4500__auto___31954 = G__31955;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__31950){
var map__31951 = p__31950;
var map__31951__$1 = ((((!((map__31951 == null)))?(((((map__31951.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31951.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31951):map__31951);
var opts = map__31951__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq31949){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31949));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e31956){if((e31956 instanceof Error)){
var e = e31956;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e31956;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__31957){
var map__31958 = p__31957;
var map__31958__$1 = ((((!((map__31958 == null)))?(((((map__31958.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31958.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31958):map__31958);
var msg_name = cljs.core.get.call(null,map__31958__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1525301027641
