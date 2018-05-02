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
}catch (e53582){if((e53582 instanceof Error)){
var e = e53582;
return "Error: Unable to stringify";
} else {
throw e53582;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__53585 = arguments.length;
switch (G__53585) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__53583_SHARP_){
if(typeof p1__53583_SHARP_ === 'string'){
return p1__53583_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__53583_SHARP_);
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
var len__4499__auto___53588 = arguments.length;
var i__4500__auto___53589 = (0);
while(true){
if((i__4500__auto___53589 < len__4499__auto___53588)){
args__4502__auto__.push((arguments[i__4500__auto___53589]));

var G__53590 = (i__4500__auto___53589 + (1));
i__4500__auto___53589 = G__53590;
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
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq53587){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53587));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___53592 = arguments.length;
var i__4500__auto___53593 = (0);
while(true){
if((i__4500__auto___53593 < len__4499__auto___53592)){
args__4502__auto__.push((arguments[i__4500__auto___53593]));

var G__53594 = (i__4500__auto___53593 + (1));
i__4500__auto___53593 = G__53594;
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
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq53591){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53591));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__53595){
var map__53596 = p__53595;
var map__53596__$1 = ((((!((map__53596 == null)))?(((((map__53596.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53596.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53596):map__53596);
var message = cljs.core.get.call(null,map__53596__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__53596__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__43716__auto___53675 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43716__auto___53675,ch){
return (function (){
var f__43717__auto__ = (function (){var switch__43559__auto__ = ((function (c__43716__auto___53675,ch){
return (function (state_53647){
var state_val_53648 = (state_53647[(1)]);
if((state_val_53648 === (7))){
var inst_53643 = (state_53647[(2)]);
var state_53647__$1 = state_53647;
var statearr_53649_53676 = state_53647__$1;
(statearr_53649_53676[(2)] = inst_53643);

(statearr_53649_53676[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53648 === (1))){
var state_53647__$1 = state_53647;
var statearr_53650_53677 = state_53647__$1;
(statearr_53650_53677[(2)] = null);

(statearr_53650_53677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53648 === (4))){
var inst_53600 = (state_53647[(7)]);
var inst_53600__$1 = (state_53647[(2)]);
var state_53647__$1 = (function (){var statearr_53651 = state_53647;
(statearr_53651[(7)] = inst_53600__$1);

return statearr_53651;
})();
if(cljs.core.truth_(inst_53600__$1)){
var statearr_53652_53678 = state_53647__$1;
(statearr_53652_53678[(1)] = (5));

} else {
var statearr_53653_53679 = state_53647__$1;
(statearr_53653_53679[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53648 === (15))){
var inst_53607 = (state_53647[(8)]);
var inst_53622 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_53607);
var inst_53623 = cljs.core.first.call(null,inst_53622);
var inst_53624 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_53623);
var inst_53625 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_53624)].join('');
var inst_53626 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_53625);
var state_53647__$1 = state_53647;
var statearr_53654_53680 = state_53647__$1;
(statearr_53654_53680[(2)] = inst_53626);

(statearr_53654_53680[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53648 === (13))){
var inst_53631 = (state_53647[(2)]);
var state_53647__$1 = state_53647;
var statearr_53655_53681 = state_53647__$1;
(statearr_53655_53681[(2)] = inst_53631);

(statearr_53655_53681[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53648 === (6))){
var state_53647__$1 = state_53647;
var statearr_53656_53682 = state_53647__$1;
(statearr_53656_53682[(2)] = null);

(statearr_53656_53682[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53648 === (17))){
var inst_53629 = (state_53647[(2)]);
var state_53647__$1 = state_53647;
var statearr_53657_53683 = state_53647__$1;
(statearr_53657_53683[(2)] = inst_53629);

(statearr_53657_53683[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53648 === (3))){
var inst_53645 = (state_53647[(2)]);
var state_53647__$1 = state_53647;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53647__$1,inst_53645);
} else {
if((state_val_53648 === (12))){
var inst_53606 = (state_53647[(9)]);
var inst_53620 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_53606,opts);
var state_53647__$1 = state_53647;
if(cljs.core.truth_(inst_53620)){
var statearr_53658_53684 = state_53647__$1;
(statearr_53658_53684[(1)] = (15));

} else {
var statearr_53659_53685 = state_53647__$1;
(statearr_53659_53685[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53648 === (2))){
var state_53647__$1 = state_53647;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53647__$1,(4),ch);
} else {
if((state_val_53648 === (11))){
var inst_53607 = (state_53647[(8)]);
var inst_53612 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_53613 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_53607);
var inst_53614 = cljs.core.async.timeout.call(null,(1000));
var inst_53615 = [inst_53613,inst_53614];
var inst_53616 = (new cljs.core.PersistentVector(null,2,(5),inst_53612,inst_53615,null));
var state_53647__$1 = state_53647;
return cljs.core.async.ioc_alts_BANG_.call(null,state_53647__$1,(14),inst_53616);
} else {
if((state_val_53648 === (9))){
var inst_53607 = (state_53647[(8)]);
var inst_53633 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_53634 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_53607);
var inst_53635 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_53634);
var inst_53636 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_53635)].join('');
var inst_53637 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_53636);
var state_53647__$1 = (function (){var statearr_53660 = state_53647;
(statearr_53660[(10)] = inst_53633);

return statearr_53660;
})();
var statearr_53661_53686 = state_53647__$1;
(statearr_53661_53686[(2)] = inst_53637);

(statearr_53661_53686[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53648 === (5))){
var inst_53600 = (state_53647[(7)]);
var inst_53602 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_53603 = (new cljs.core.PersistentArrayMap(null,2,inst_53602,null));
var inst_53604 = (new cljs.core.PersistentHashSet(null,inst_53603,null));
var inst_53605 = figwheel.client.focus_msgs.call(null,inst_53604,inst_53600);
var inst_53606 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_53605);
var inst_53607 = cljs.core.first.call(null,inst_53605);
var inst_53608 = figwheel.client.autoload_QMARK_.call(null);
var state_53647__$1 = (function (){var statearr_53662 = state_53647;
(statearr_53662[(8)] = inst_53607);

(statearr_53662[(9)] = inst_53606);

return statearr_53662;
})();
if(cljs.core.truth_(inst_53608)){
var statearr_53663_53687 = state_53647__$1;
(statearr_53663_53687[(1)] = (8));

} else {
var statearr_53664_53688 = state_53647__$1;
(statearr_53664_53688[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53648 === (14))){
var inst_53618 = (state_53647[(2)]);
var state_53647__$1 = state_53647;
var statearr_53665_53689 = state_53647__$1;
(statearr_53665_53689[(2)] = inst_53618);

(statearr_53665_53689[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53648 === (16))){
var state_53647__$1 = state_53647;
var statearr_53666_53690 = state_53647__$1;
(statearr_53666_53690[(2)] = null);

(statearr_53666_53690[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53648 === (10))){
var inst_53639 = (state_53647[(2)]);
var state_53647__$1 = (function (){var statearr_53667 = state_53647;
(statearr_53667[(11)] = inst_53639);

return statearr_53667;
})();
var statearr_53668_53691 = state_53647__$1;
(statearr_53668_53691[(2)] = null);

(statearr_53668_53691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53648 === (8))){
var inst_53606 = (state_53647[(9)]);
var inst_53610 = figwheel.client.reload_file_state_QMARK_.call(null,inst_53606,opts);
var state_53647__$1 = state_53647;
if(cljs.core.truth_(inst_53610)){
var statearr_53669_53692 = state_53647__$1;
(statearr_53669_53692[(1)] = (11));

} else {
var statearr_53670_53693 = state_53647__$1;
(statearr_53670_53693[(1)] = (12));

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
});})(c__43716__auto___53675,ch))
;
return ((function (switch__43559__auto__,c__43716__auto___53675,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__43560__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__43560__auto____0 = (function (){
var statearr_53671 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53671[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__43560__auto__);

(statearr_53671[(1)] = (1));

return statearr_53671;
});
var figwheel$client$file_reloader_plugin_$_state_machine__43560__auto____1 = (function (state_53647){
while(true){
var ret_value__43561__auto__ = (function (){try{while(true){
var result__43562__auto__ = switch__43559__auto__.call(null,state_53647);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43562__auto__;
}
break;
}
}catch (e53672){if((e53672 instanceof Object)){
var ex__43563__auto__ = e53672;
var statearr_53673_53694 = state_53647;
(statearr_53673_53694[(5)] = ex__43563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53647);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53672;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53695 = state_53647;
state_53647 = G__53695;
continue;
} else {
return ret_value__43561__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__43560__auto__ = function(state_53647){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__43560__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__43560__auto____1.call(this,state_53647);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__43560__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__43560__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__43560__auto__;
})()
;})(switch__43559__auto__,c__43716__auto___53675,ch))
})();
var state__43718__auto__ = (function (){var statearr_53674 = f__43717__auto__.call(null);
(statearr_53674[(6)] = c__43716__auto___53675);

return statearr_53674;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43718__auto__);
});})(c__43716__auto___53675,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__53696_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__53696_SHARP_));
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
var base_path_53700 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_53700){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_53698 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_53699 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_53698,_STAR_print_fn_STAR_53699,sb,base_path_53700){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_53698,_STAR_print_fn_STAR_53699,sb,base_path_53700))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_53699;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_53698;
}}catch (e53697){if((e53697 instanceof Error)){
var e = e53697;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_53700], null));
} else {
var e = e53697;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_53700))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__53701){
var map__53702 = p__53701;
var map__53702__$1 = ((((!((map__53702 == null)))?(((((map__53702.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53702.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53702):map__53702);
var opts = map__53702__$1;
var build_id = cljs.core.get.call(null,map__53702__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__53702,map__53702__$1,opts,build_id){
return (function (p__53704){
var vec__53705 = p__53704;
var seq__53706 = cljs.core.seq.call(null,vec__53705);
var first__53707 = cljs.core.first.call(null,seq__53706);
var seq__53706__$1 = cljs.core.next.call(null,seq__53706);
var map__53708 = first__53707;
var map__53708__$1 = ((((!((map__53708 == null)))?(((((map__53708.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53708.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53708):map__53708);
var msg = map__53708__$1;
var msg_name = cljs.core.get.call(null,map__53708__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__53706__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__53705,seq__53706,first__53707,seq__53706__$1,map__53708,map__53708__$1,msg,msg_name,_,map__53702,map__53702__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__53705,seq__53706,first__53707,seq__53706__$1,map__53708,map__53708__$1,msg,msg_name,_,map__53702,map__53702__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__53702,map__53702__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__53710){
var vec__53711 = p__53710;
var seq__53712 = cljs.core.seq.call(null,vec__53711);
var first__53713 = cljs.core.first.call(null,seq__53712);
var seq__53712__$1 = cljs.core.next.call(null,seq__53712);
var map__53714 = first__53713;
var map__53714__$1 = ((((!((map__53714 == null)))?(((((map__53714.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53714.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53714):map__53714);
var msg = map__53714__$1;
var msg_name = cljs.core.get.call(null,map__53714__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__53712__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__53716){
var map__53717 = p__53716;
var map__53717__$1 = ((((!((map__53717 == null)))?(((((map__53717.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53717.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53717):map__53717);
var on_compile_warning = cljs.core.get.call(null,map__53717__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__53717__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__53717,map__53717__$1,on_compile_warning,on_compile_fail){
return (function (p__53719){
var vec__53720 = p__53719;
var seq__53721 = cljs.core.seq.call(null,vec__53720);
var first__53722 = cljs.core.first.call(null,seq__53721);
var seq__53721__$1 = cljs.core.next.call(null,seq__53721);
var map__53723 = first__53722;
var map__53723__$1 = ((((!((map__53723 == null)))?(((((map__53723.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53723.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53723):map__53723);
var msg = map__53723__$1;
var msg_name = cljs.core.get.call(null,map__53723__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__53721__$1;
var pred__53725 = cljs.core._EQ_;
var expr__53726 = msg_name;
if(cljs.core.truth_(pred__53725.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__53726))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__53725.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__53726))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__53717,map__53717__$1,on_compile_warning,on_compile_fail))
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
var c__43716__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43716__auto__,msg_hist,msg_names,msg){
return (function (){
var f__43717__auto__ = (function (){var switch__43559__auto__ = ((function (c__43716__auto__,msg_hist,msg_names,msg){
return (function (state_53815){
var state_val_53816 = (state_53815[(1)]);
if((state_val_53816 === (7))){
var inst_53735 = (state_53815[(2)]);
var state_53815__$1 = state_53815;
if(cljs.core.truth_(inst_53735)){
var statearr_53817_53864 = state_53815__$1;
(statearr_53817_53864[(1)] = (8));

} else {
var statearr_53818_53865 = state_53815__$1;
(statearr_53818_53865[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53816 === (20))){
var inst_53809 = (state_53815[(2)]);
var state_53815__$1 = state_53815;
var statearr_53819_53866 = state_53815__$1;
(statearr_53819_53866[(2)] = inst_53809);

(statearr_53819_53866[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53816 === (27))){
var inst_53805 = (state_53815[(2)]);
var state_53815__$1 = state_53815;
var statearr_53820_53867 = state_53815__$1;
(statearr_53820_53867[(2)] = inst_53805);

(statearr_53820_53867[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53816 === (1))){
var inst_53728 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_53815__$1 = state_53815;
if(cljs.core.truth_(inst_53728)){
var statearr_53821_53868 = state_53815__$1;
(statearr_53821_53868[(1)] = (2));

} else {
var statearr_53822_53869 = state_53815__$1;
(statearr_53822_53869[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53816 === (24))){
var inst_53807 = (state_53815[(2)]);
var state_53815__$1 = state_53815;
var statearr_53823_53870 = state_53815__$1;
(statearr_53823_53870[(2)] = inst_53807);

(statearr_53823_53870[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53816 === (4))){
var inst_53813 = (state_53815[(2)]);
var state_53815__$1 = state_53815;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53815__$1,inst_53813);
} else {
if((state_val_53816 === (15))){
var inst_53811 = (state_53815[(2)]);
var state_53815__$1 = state_53815;
var statearr_53824_53871 = state_53815__$1;
(statearr_53824_53871[(2)] = inst_53811);

(statearr_53824_53871[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53816 === (21))){
var inst_53764 = (state_53815[(2)]);
var inst_53765 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_53766 = figwheel.client.auto_jump_to_error.call(null,opts,inst_53765);
var state_53815__$1 = (function (){var statearr_53825 = state_53815;
(statearr_53825[(7)] = inst_53764);

return statearr_53825;
})();
var statearr_53826_53872 = state_53815__$1;
(statearr_53826_53872[(2)] = inst_53766);

(statearr_53826_53872[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53816 === (31))){
var inst_53794 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_53815__$1 = state_53815;
if(cljs.core.truth_(inst_53794)){
var statearr_53827_53873 = state_53815__$1;
(statearr_53827_53873[(1)] = (34));

} else {
var statearr_53828_53874 = state_53815__$1;
(statearr_53828_53874[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53816 === (32))){
var inst_53803 = (state_53815[(2)]);
var state_53815__$1 = state_53815;
var statearr_53829_53875 = state_53815__$1;
(statearr_53829_53875[(2)] = inst_53803);

(statearr_53829_53875[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53816 === (33))){
var inst_53790 = (state_53815[(2)]);
var inst_53791 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_53792 = figwheel.client.auto_jump_to_error.call(null,opts,inst_53791);
var state_53815__$1 = (function (){var statearr_53830 = state_53815;
(statearr_53830[(8)] = inst_53790);

return statearr_53830;
})();
var statearr_53831_53876 = state_53815__$1;
(statearr_53831_53876[(2)] = inst_53792);

(statearr_53831_53876[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53816 === (13))){
var inst_53749 = figwheel.client.heads_up.clear.call(null);
var state_53815__$1 = state_53815;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53815__$1,(16),inst_53749);
} else {
if((state_val_53816 === (22))){
var inst_53770 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_53771 = figwheel.client.heads_up.append_warning_message.call(null,inst_53770);
var state_53815__$1 = state_53815;
var statearr_53832_53877 = state_53815__$1;
(statearr_53832_53877[(2)] = inst_53771);

(statearr_53832_53877[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53816 === (36))){
var inst_53801 = (state_53815[(2)]);
var state_53815__$1 = state_53815;
var statearr_53833_53878 = state_53815__$1;
(statearr_53833_53878[(2)] = inst_53801);

(statearr_53833_53878[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53816 === (29))){
var inst_53781 = (state_53815[(2)]);
var inst_53782 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_53783 = figwheel.client.auto_jump_to_error.call(null,opts,inst_53782);
var state_53815__$1 = (function (){var statearr_53834 = state_53815;
(statearr_53834[(9)] = inst_53781);

return statearr_53834;
})();
var statearr_53835_53879 = state_53815__$1;
(statearr_53835_53879[(2)] = inst_53783);

(statearr_53835_53879[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53816 === (6))){
var inst_53730 = (state_53815[(10)]);
var state_53815__$1 = state_53815;
var statearr_53836_53880 = state_53815__$1;
(statearr_53836_53880[(2)] = inst_53730);

(statearr_53836_53880[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53816 === (28))){
var inst_53777 = (state_53815[(2)]);
var inst_53778 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_53779 = figwheel.client.heads_up.display_warning.call(null,inst_53778);
var state_53815__$1 = (function (){var statearr_53837 = state_53815;
(statearr_53837[(11)] = inst_53777);

return statearr_53837;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53815__$1,(29),inst_53779);
} else {
if((state_val_53816 === (25))){
var inst_53775 = figwheel.client.heads_up.clear.call(null);
var state_53815__$1 = state_53815;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53815__$1,(28),inst_53775);
} else {
if((state_val_53816 === (34))){
var inst_53796 = figwheel.client.heads_up.flash_loaded.call(null);
var state_53815__$1 = state_53815;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53815__$1,(37),inst_53796);
} else {
if((state_val_53816 === (17))){
var inst_53755 = (state_53815[(2)]);
var inst_53756 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_53757 = figwheel.client.auto_jump_to_error.call(null,opts,inst_53756);
var state_53815__$1 = (function (){var statearr_53838 = state_53815;
(statearr_53838[(12)] = inst_53755);

return statearr_53838;
})();
var statearr_53839_53881 = state_53815__$1;
(statearr_53839_53881[(2)] = inst_53757);

(statearr_53839_53881[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53816 === (3))){
var inst_53747 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_53815__$1 = state_53815;
if(cljs.core.truth_(inst_53747)){
var statearr_53840_53882 = state_53815__$1;
(statearr_53840_53882[(1)] = (13));

} else {
var statearr_53841_53883 = state_53815__$1;
(statearr_53841_53883[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53816 === (12))){
var inst_53743 = (state_53815[(2)]);
var state_53815__$1 = state_53815;
var statearr_53842_53884 = state_53815__$1;
(statearr_53842_53884[(2)] = inst_53743);

(statearr_53842_53884[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53816 === (2))){
var inst_53730 = (state_53815[(10)]);
var inst_53730__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_53815__$1 = (function (){var statearr_53843 = state_53815;
(statearr_53843[(10)] = inst_53730__$1);

return statearr_53843;
})();
if(cljs.core.truth_(inst_53730__$1)){
var statearr_53844_53885 = state_53815__$1;
(statearr_53844_53885[(1)] = (5));

} else {
var statearr_53845_53886 = state_53815__$1;
(statearr_53845_53886[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53816 === (23))){
var inst_53773 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_53815__$1 = state_53815;
if(cljs.core.truth_(inst_53773)){
var statearr_53846_53887 = state_53815__$1;
(statearr_53846_53887[(1)] = (25));

} else {
var statearr_53847_53888 = state_53815__$1;
(statearr_53847_53888[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53816 === (35))){
var state_53815__$1 = state_53815;
var statearr_53848_53889 = state_53815__$1;
(statearr_53848_53889[(2)] = null);

(statearr_53848_53889[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53816 === (19))){
var inst_53768 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_53815__$1 = state_53815;
if(cljs.core.truth_(inst_53768)){
var statearr_53849_53890 = state_53815__$1;
(statearr_53849_53890[(1)] = (22));

} else {
var statearr_53850_53891 = state_53815__$1;
(statearr_53850_53891[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53816 === (11))){
var inst_53739 = (state_53815[(2)]);
var state_53815__$1 = state_53815;
var statearr_53851_53892 = state_53815__$1;
(statearr_53851_53892[(2)] = inst_53739);

(statearr_53851_53892[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53816 === (9))){
var inst_53741 = figwheel.client.heads_up.clear.call(null);
var state_53815__$1 = state_53815;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53815__$1,(12),inst_53741);
} else {
if((state_val_53816 === (5))){
var inst_53732 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_53815__$1 = state_53815;
var statearr_53852_53893 = state_53815__$1;
(statearr_53852_53893[(2)] = inst_53732);

(statearr_53852_53893[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53816 === (14))){
var inst_53759 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_53815__$1 = state_53815;
if(cljs.core.truth_(inst_53759)){
var statearr_53853_53894 = state_53815__$1;
(statearr_53853_53894[(1)] = (18));

} else {
var statearr_53854_53895 = state_53815__$1;
(statearr_53854_53895[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53816 === (26))){
var inst_53785 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_53815__$1 = state_53815;
if(cljs.core.truth_(inst_53785)){
var statearr_53855_53896 = state_53815__$1;
(statearr_53855_53896[(1)] = (30));

} else {
var statearr_53856_53897 = state_53815__$1;
(statearr_53856_53897[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53816 === (16))){
var inst_53751 = (state_53815[(2)]);
var inst_53752 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_53753 = figwheel.client.heads_up.display_exception.call(null,inst_53752);
var state_53815__$1 = (function (){var statearr_53857 = state_53815;
(statearr_53857[(13)] = inst_53751);

return statearr_53857;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53815__$1,(17),inst_53753);
} else {
if((state_val_53816 === (30))){
var inst_53787 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_53788 = figwheel.client.heads_up.display_warning.call(null,inst_53787);
var state_53815__$1 = state_53815;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53815__$1,(33),inst_53788);
} else {
if((state_val_53816 === (10))){
var inst_53745 = (state_53815[(2)]);
var state_53815__$1 = state_53815;
var statearr_53858_53898 = state_53815__$1;
(statearr_53858_53898[(2)] = inst_53745);

(statearr_53858_53898[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53816 === (18))){
var inst_53761 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_53762 = figwheel.client.heads_up.display_exception.call(null,inst_53761);
var state_53815__$1 = state_53815;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53815__$1,(21),inst_53762);
} else {
if((state_val_53816 === (37))){
var inst_53798 = (state_53815[(2)]);
var state_53815__$1 = state_53815;
var statearr_53859_53899 = state_53815__$1;
(statearr_53859_53899[(2)] = inst_53798);

(statearr_53859_53899[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53816 === (8))){
var inst_53737 = figwheel.client.heads_up.flash_loaded.call(null);
var state_53815__$1 = state_53815;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53815__$1,(11),inst_53737);
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
});})(c__43716__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__43559__auto__,c__43716__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__43560__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__43560__auto____0 = (function (){
var statearr_53860 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53860[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__43560__auto__);

(statearr_53860[(1)] = (1));

return statearr_53860;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__43560__auto____1 = (function (state_53815){
while(true){
var ret_value__43561__auto__ = (function (){try{while(true){
var result__43562__auto__ = switch__43559__auto__.call(null,state_53815);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43562__auto__;
}
break;
}
}catch (e53861){if((e53861 instanceof Object)){
var ex__43563__auto__ = e53861;
var statearr_53862_53900 = state_53815;
(statearr_53862_53900[(5)] = ex__43563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53815);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53861;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53901 = state_53815;
state_53815 = G__53901;
continue;
} else {
return ret_value__43561__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__43560__auto__ = function(state_53815){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__43560__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__43560__auto____1.call(this,state_53815);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__43560__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__43560__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__43560__auto__;
})()
;})(switch__43559__auto__,c__43716__auto__,msg_hist,msg_names,msg))
})();
var state__43718__auto__ = (function (){var statearr_53863 = f__43717__auto__.call(null);
(statearr_53863[(6)] = c__43716__auto__);

return statearr_53863;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43718__auto__);
});})(c__43716__auto__,msg_hist,msg_names,msg))
);

return c__43716__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__43716__auto___53930 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43716__auto___53930,ch){
return (function (){
var f__43717__auto__ = (function (){var switch__43559__auto__ = ((function (c__43716__auto___53930,ch){
return (function (state_53916){
var state_val_53917 = (state_53916[(1)]);
if((state_val_53917 === (1))){
var state_53916__$1 = state_53916;
var statearr_53918_53931 = state_53916__$1;
(statearr_53918_53931[(2)] = null);

(statearr_53918_53931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53917 === (2))){
var state_53916__$1 = state_53916;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53916__$1,(4),ch);
} else {
if((state_val_53917 === (3))){
var inst_53914 = (state_53916[(2)]);
var state_53916__$1 = state_53916;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53916__$1,inst_53914);
} else {
if((state_val_53917 === (4))){
var inst_53904 = (state_53916[(7)]);
var inst_53904__$1 = (state_53916[(2)]);
var state_53916__$1 = (function (){var statearr_53919 = state_53916;
(statearr_53919[(7)] = inst_53904__$1);

return statearr_53919;
})();
if(cljs.core.truth_(inst_53904__$1)){
var statearr_53920_53932 = state_53916__$1;
(statearr_53920_53932[(1)] = (5));

} else {
var statearr_53921_53933 = state_53916__$1;
(statearr_53921_53933[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53917 === (5))){
var inst_53904 = (state_53916[(7)]);
var inst_53906 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_53904);
var state_53916__$1 = state_53916;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53916__$1,(8),inst_53906);
} else {
if((state_val_53917 === (6))){
var state_53916__$1 = state_53916;
var statearr_53922_53934 = state_53916__$1;
(statearr_53922_53934[(2)] = null);

(statearr_53922_53934[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53917 === (7))){
var inst_53912 = (state_53916[(2)]);
var state_53916__$1 = state_53916;
var statearr_53923_53935 = state_53916__$1;
(statearr_53923_53935[(2)] = inst_53912);

(statearr_53923_53935[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53917 === (8))){
var inst_53908 = (state_53916[(2)]);
var state_53916__$1 = (function (){var statearr_53924 = state_53916;
(statearr_53924[(8)] = inst_53908);

return statearr_53924;
})();
var statearr_53925_53936 = state_53916__$1;
(statearr_53925_53936[(2)] = null);

(statearr_53925_53936[(1)] = (2));


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
});})(c__43716__auto___53930,ch))
;
return ((function (switch__43559__auto__,c__43716__auto___53930,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__43560__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__43560__auto____0 = (function (){
var statearr_53926 = [null,null,null,null,null,null,null,null,null];
(statearr_53926[(0)] = figwheel$client$heads_up_plugin_$_state_machine__43560__auto__);

(statearr_53926[(1)] = (1));

return statearr_53926;
});
var figwheel$client$heads_up_plugin_$_state_machine__43560__auto____1 = (function (state_53916){
while(true){
var ret_value__43561__auto__ = (function (){try{while(true){
var result__43562__auto__ = switch__43559__auto__.call(null,state_53916);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43562__auto__;
}
break;
}
}catch (e53927){if((e53927 instanceof Object)){
var ex__43563__auto__ = e53927;
var statearr_53928_53937 = state_53916;
(statearr_53928_53937[(5)] = ex__43563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53916);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53927;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53938 = state_53916;
state_53916 = G__53938;
continue;
} else {
return ret_value__43561__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__43560__auto__ = function(state_53916){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__43560__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__43560__auto____1.call(this,state_53916);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__43560__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__43560__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__43560__auto__;
})()
;})(switch__43559__auto__,c__43716__auto___53930,ch))
})();
var state__43718__auto__ = (function (){var statearr_53929 = f__43717__auto__.call(null);
(statearr_53929[(6)] = c__43716__auto___53930);

return statearr_53929;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43718__auto__);
});})(c__43716__auto___53930,ch))
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
var c__43716__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43716__auto__){
return (function (){
var f__43717__auto__ = (function (){var switch__43559__auto__ = ((function (c__43716__auto__){
return (function (state_53944){
var state_val_53945 = (state_53944[(1)]);
if((state_val_53945 === (1))){
var inst_53939 = cljs.core.async.timeout.call(null,(3000));
var state_53944__$1 = state_53944;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53944__$1,(2),inst_53939);
} else {
if((state_val_53945 === (2))){
var inst_53941 = (state_53944[(2)]);
var inst_53942 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_53944__$1 = (function (){var statearr_53946 = state_53944;
(statearr_53946[(7)] = inst_53941);

return statearr_53946;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53944__$1,inst_53942);
} else {
return null;
}
}
});})(c__43716__auto__))
;
return ((function (switch__43559__auto__,c__43716__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__43560__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__43560__auto____0 = (function (){
var statearr_53947 = [null,null,null,null,null,null,null,null];
(statearr_53947[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__43560__auto__);

(statearr_53947[(1)] = (1));

return statearr_53947;
});
var figwheel$client$enforce_project_plugin_$_state_machine__43560__auto____1 = (function (state_53944){
while(true){
var ret_value__43561__auto__ = (function (){try{while(true){
var result__43562__auto__ = switch__43559__auto__.call(null,state_53944);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43562__auto__;
}
break;
}
}catch (e53948){if((e53948 instanceof Object)){
var ex__43563__auto__ = e53948;
var statearr_53949_53951 = state_53944;
(statearr_53949_53951[(5)] = ex__43563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53944);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53948;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53952 = state_53944;
state_53944 = G__53952;
continue;
} else {
return ret_value__43561__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__43560__auto__ = function(state_53944){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__43560__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__43560__auto____1.call(this,state_53944);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__43560__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__43560__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__43560__auto__;
})()
;})(switch__43559__auto__,c__43716__auto__))
})();
var state__43718__auto__ = (function (){var statearr_53950 = f__43717__auto__.call(null);
(statearr_53950[(6)] = c__43716__auto__);

return statearr_53950;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43718__auto__);
});})(c__43716__auto__))
);

return c__43716__auto__;
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
var c__43716__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43716__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__43717__auto__ = (function (){var switch__43559__auto__ = ((function (c__43716__auto__,figwheel_version,temp__5457__auto__){
return (function (state_53959){
var state_val_53960 = (state_53959[(1)]);
if((state_val_53960 === (1))){
var inst_53953 = cljs.core.async.timeout.call(null,(2000));
var state_53959__$1 = state_53959;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53959__$1,(2),inst_53953);
} else {
if((state_val_53960 === (2))){
var inst_53955 = (state_53959[(2)]);
var inst_53956 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_53957 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_53956);
var state_53959__$1 = (function (){var statearr_53961 = state_53959;
(statearr_53961[(7)] = inst_53955);

return statearr_53961;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53959__$1,inst_53957);
} else {
return null;
}
}
});})(c__43716__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__43559__auto__,c__43716__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__43560__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__43560__auto____0 = (function (){
var statearr_53962 = [null,null,null,null,null,null,null,null];
(statearr_53962[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__43560__auto__);

(statearr_53962[(1)] = (1));

return statearr_53962;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__43560__auto____1 = (function (state_53959){
while(true){
var ret_value__43561__auto__ = (function (){try{while(true){
var result__43562__auto__ = switch__43559__auto__.call(null,state_53959);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43562__auto__;
}
break;
}
}catch (e53963){if((e53963 instanceof Object)){
var ex__43563__auto__ = e53963;
var statearr_53964_53966 = state_53959;
(statearr_53964_53966[(5)] = ex__43563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53959);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53963;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53967 = state_53959;
state_53959 = G__53967;
continue;
} else {
return ret_value__43561__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__43560__auto__ = function(state_53959){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__43560__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__43560__auto____1.call(this,state_53959);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__43560__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__43560__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__43560__auto__;
})()
;})(switch__43559__auto__,c__43716__auto__,figwheel_version,temp__5457__auto__))
})();
var state__43718__auto__ = (function (){var statearr_53965 = f__43717__auto__.call(null);
(statearr_53965[(6)] = c__43716__auto__);

return statearr_53965;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43718__auto__);
});})(c__43716__auto__,figwheel_version,temp__5457__auto__))
);

return c__43716__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__53968){
var map__53969 = p__53968;
var map__53969__$1 = ((((!((map__53969 == null)))?(((((map__53969.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53969.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53969):map__53969);
var file = cljs.core.get.call(null,map__53969__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__53969__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__53969__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__53971 = "";
var G__53971__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53971),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__53971);
var G__53971__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53971__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__53971__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = line;
if(cljs.core.truth_(and__3911__auto__)){
return column;
} else {
return and__3911__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53971__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__53971__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__53972){
var map__53973 = p__53972;
var map__53973__$1 = ((((!((map__53973 == null)))?(((((map__53973.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53973.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53973):map__53973);
var ed = map__53973__$1;
var formatted_exception = cljs.core.get.call(null,map__53973__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__53973__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__53973__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__53975_53979 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__53976_53980 = null;
var count__53977_53981 = (0);
var i__53978_53982 = (0);
while(true){
if((i__53978_53982 < count__53977_53981)){
var msg_53983 = cljs.core._nth.call(null,chunk__53976_53980,i__53978_53982);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_53983);


var G__53984 = seq__53975_53979;
var G__53985 = chunk__53976_53980;
var G__53986 = count__53977_53981;
var G__53987 = (i__53978_53982 + (1));
seq__53975_53979 = G__53984;
chunk__53976_53980 = G__53985;
count__53977_53981 = G__53986;
i__53978_53982 = G__53987;
continue;
} else {
var temp__5457__auto___53988 = cljs.core.seq.call(null,seq__53975_53979);
if(temp__5457__auto___53988){
var seq__53975_53989__$1 = temp__5457__auto___53988;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53975_53989__$1)){
var c__4319__auto___53990 = cljs.core.chunk_first.call(null,seq__53975_53989__$1);
var G__53991 = cljs.core.chunk_rest.call(null,seq__53975_53989__$1);
var G__53992 = c__4319__auto___53990;
var G__53993 = cljs.core.count.call(null,c__4319__auto___53990);
var G__53994 = (0);
seq__53975_53979 = G__53991;
chunk__53976_53980 = G__53992;
count__53977_53981 = G__53993;
i__53978_53982 = G__53994;
continue;
} else {
var msg_53995 = cljs.core.first.call(null,seq__53975_53989__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_53995);


var G__53996 = cljs.core.next.call(null,seq__53975_53989__$1);
var G__53997 = null;
var G__53998 = (0);
var G__53999 = (0);
seq__53975_53979 = G__53996;
chunk__53976_53980 = G__53997;
count__53977_53981 = G__53998;
i__53978_53982 = G__53999;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__54000){
var map__54001 = p__54000;
var map__54001__$1 = ((((!((map__54001 == null)))?(((((map__54001.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54001.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54001):map__54001);
var w = map__54001__$1;
var message = cljs.core.get.call(null,map__54001__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__54003 = cljs.core.seq.call(null,plugins);
var chunk__54004 = null;
var count__54005 = (0);
var i__54006 = (0);
while(true){
if((i__54006 < count__54005)){
var vec__54007 = cljs.core._nth.call(null,chunk__54004,i__54006);
var k = cljs.core.nth.call(null,vec__54007,(0),null);
var plugin = cljs.core.nth.call(null,vec__54007,(1),null);
if(cljs.core.truth_(plugin)){
var pl_54013 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__54003,chunk__54004,count__54005,i__54006,pl_54013,vec__54007,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_54013.call(null,msg_hist);
});})(seq__54003,chunk__54004,count__54005,i__54006,pl_54013,vec__54007,k,plugin))
);
} else {
}


var G__54014 = seq__54003;
var G__54015 = chunk__54004;
var G__54016 = count__54005;
var G__54017 = (i__54006 + (1));
seq__54003 = G__54014;
chunk__54004 = G__54015;
count__54005 = G__54016;
i__54006 = G__54017;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__54003);
if(temp__5457__auto__){
var seq__54003__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54003__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__54003__$1);
var G__54018 = cljs.core.chunk_rest.call(null,seq__54003__$1);
var G__54019 = c__4319__auto__;
var G__54020 = cljs.core.count.call(null,c__4319__auto__);
var G__54021 = (0);
seq__54003 = G__54018;
chunk__54004 = G__54019;
count__54005 = G__54020;
i__54006 = G__54021;
continue;
} else {
var vec__54010 = cljs.core.first.call(null,seq__54003__$1);
var k = cljs.core.nth.call(null,vec__54010,(0),null);
var plugin = cljs.core.nth.call(null,vec__54010,(1),null);
if(cljs.core.truth_(plugin)){
var pl_54022 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__54003,chunk__54004,count__54005,i__54006,pl_54022,vec__54010,k,plugin,seq__54003__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_54022.call(null,msg_hist);
});})(seq__54003,chunk__54004,count__54005,i__54006,pl_54022,vec__54010,k,plugin,seq__54003__$1,temp__5457__auto__))
);
} else {
}


var G__54023 = cljs.core.next.call(null,seq__54003__$1);
var G__54024 = null;
var G__54025 = (0);
var G__54026 = (0);
seq__54003 = G__54023;
chunk__54004 = G__54024;
count__54005 = G__54025;
i__54006 = G__54026;
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
var G__54028 = arguments.length;
switch (G__54028) {
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

var seq__54029_54034 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__54030_54035 = null;
var count__54031_54036 = (0);
var i__54032_54037 = (0);
while(true){
if((i__54032_54037 < count__54031_54036)){
var msg_54038 = cljs.core._nth.call(null,chunk__54030_54035,i__54032_54037);
figwheel.client.socket.handle_incoming_message.call(null,msg_54038);


var G__54039 = seq__54029_54034;
var G__54040 = chunk__54030_54035;
var G__54041 = count__54031_54036;
var G__54042 = (i__54032_54037 + (1));
seq__54029_54034 = G__54039;
chunk__54030_54035 = G__54040;
count__54031_54036 = G__54041;
i__54032_54037 = G__54042;
continue;
} else {
var temp__5457__auto___54043 = cljs.core.seq.call(null,seq__54029_54034);
if(temp__5457__auto___54043){
var seq__54029_54044__$1 = temp__5457__auto___54043;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54029_54044__$1)){
var c__4319__auto___54045 = cljs.core.chunk_first.call(null,seq__54029_54044__$1);
var G__54046 = cljs.core.chunk_rest.call(null,seq__54029_54044__$1);
var G__54047 = c__4319__auto___54045;
var G__54048 = cljs.core.count.call(null,c__4319__auto___54045);
var G__54049 = (0);
seq__54029_54034 = G__54046;
chunk__54030_54035 = G__54047;
count__54031_54036 = G__54048;
i__54032_54037 = G__54049;
continue;
} else {
var msg_54050 = cljs.core.first.call(null,seq__54029_54044__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_54050);


var G__54051 = cljs.core.next.call(null,seq__54029_54044__$1);
var G__54052 = null;
var G__54053 = (0);
var G__54054 = (0);
seq__54029_54034 = G__54051;
chunk__54030_54035 = G__54052;
count__54031_54036 = G__54053;
i__54032_54037 = G__54054;
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
var len__4499__auto___54059 = arguments.length;
var i__4500__auto___54060 = (0);
while(true){
if((i__4500__auto___54060 < len__4499__auto___54059)){
args__4502__auto__.push((arguments[i__4500__auto___54060]));

var G__54061 = (i__4500__auto___54060 + (1));
i__4500__auto___54060 = G__54061;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__54056){
var map__54057 = p__54056;
var map__54057__$1 = ((((!((map__54057 == null)))?(((((map__54057.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54057.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54057):map__54057);
var opts = map__54057__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq54055){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54055));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e54062){if((e54062 instanceof Error)){
var e = e54062;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e54062;

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
return (function (p__54063){
var map__54064 = p__54063;
var map__54064__$1 = ((((!((map__54064 == null)))?(((((map__54064.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54064.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54064):map__54064);
var msg_name = cljs.core.get.call(null,map__54064__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1525299199688
