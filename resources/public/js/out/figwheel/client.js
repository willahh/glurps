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
}catch (e31727){if((e31727 instanceof Error)){
var e = e31727;
return "Error: Unable to stringify";
} else {
throw e31727;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__31730 = arguments.length;
switch (G__31730) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__31728_SHARP_){
if(typeof p1__31728_SHARP_ === 'string'){
return p1__31728_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__31728_SHARP_);
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
var len__4499__auto___31733 = arguments.length;
var i__4500__auto___31734 = (0);
while(true){
if((i__4500__auto___31734 < len__4499__auto___31733)){
args__4502__auto__.push((arguments[i__4500__auto___31734]));

var G__31735 = (i__4500__auto___31734 + (1));
i__4500__auto___31734 = G__31735;
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
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq31732){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31732));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___31737 = arguments.length;
var i__4500__auto___31738 = (0);
while(true){
if((i__4500__auto___31738 < len__4499__auto___31737)){
args__4502__auto__.push((arguments[i__4500__auto___31738]));

var G__31739 = (i__4500__auto___31738 + (1));
i__4500__auto___31738 = G__31739;
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
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq31736){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31736));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__31740){
var map__31741 = p__31740;
var map__31741__$1 = ((((!((map__31741 == null)))?(((((map__31741.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31741.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31741):map__31741);
var message = cljs.core.get.call(null,map__31741__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__31741__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__27974__auto___31820 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27974__auto___31820,ch){
return (function (){
var f__27975__auto__ = (function (){var switch__27884__auto__ = ((function (c__27974__auto___31820,ch){
return (function (state_31792){
var state_val_31793 = (state_31792[(1)]);
if((state_val_31793 === (7))){
var inst_31788 = (state_31792[(2)]);
var state_31792__$1 = state_31792;
var statearr_31794_31821 = state_31792__$1;
(statearr_31794_31821[(2)] = inst_31788);

(statearr_31794_31821[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31793 === (1))){
var state_31792__$1 = state_31792;
var statearr_31795_31822 = state_31792__$1;
(statearr_31795_31822[(2)] = null);

(statearr_31795_31822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31793 === (4))){
var inst_31745 = (state_31792[(7)]);
var inst_31745__$1 = (state_31792[(2)]);
var state_31792__$1 = (function (){var statearr_31796 = state_31792;
(statearr_31796[(7)] = inst_31745__$1);

return statearr_31796;
})();
if(cljs.core.truth_(inst_31745__$1)){
var statearr_31797_31823 = state_31792__$1;
(statearr_31797_31823[(1)] = (5));

} else {
var statearr_31798_31824 = state_31792__$1;
(statearr_31798_31824[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31793 === (15))){
var inst_31752 = (state_31792[(8)]);
var inst_31767 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31752);
var inst_31768 = cljs.core.first.call(null,inst_31767);
var inst_31769 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_31768);
var inst_31770 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31769)].join('');
var inst_31771 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_31770);
var state_31792__$1 = state_31792;
var statearr_31799_31825 = state_31792__$1;
(statearr_31799_31825[(2)] = inst_31771);

(statearr_31799_31825[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31793 === (13))){
var inst_31776 = (state_31792[(2)]);
var state_31792__$1 = state_31792;
var statearr_31800_31826 = state_31792__$1;
(statearr_31800_31826[(2)] = inst_31776);

(statearr_31800_31826[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31793 === (6))){
var state_31792__$1 = state_31792;
var statearr_31801_31827 = state_31792__$1;
(statearr_31801_31827[(2)] = null);

(statearr_31801_31827[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31793 === (17))){
var inst_31774 = (state_31792[(2)]);
var state_31792__$1 = state_31792;
var statearr_31802_31828 = state_31792__$1;
(statearr_31802_31828[(2)] = inst_31774);

(statearr_31802_31828[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31793 === (3))){
var inst_31790 = (state_31792[(2)]);
var state_31792__$1 = state_31792;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31792__$1,inst_31790);
} else {
if((state_val_31793 === (12))){
var inst_31751 = (state_31792[(9)]);
var inst_31765 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_31751,opts);
var state_31792__$1 = state_31792;
if(cljs.core.truth_(inst_31765)){
var statearr_31803_31829 = state_31792__$1;
(statearr_31803_31829[(1)] = (15));

} else {
var statearr_31804_31830 = state_31792__$1;
(statearr_31804_31830[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31793 === (2))){
var state_31792__$1 = state_31792;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31792__$1,(4),ch);
} else {
if((state_val_31793 === (11))){
var inst_31752 = (state_31792[(8)]);
var inst_31757 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31758 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_31752);
var inst_31759 = cljs.core.async.timeout.call(null,(1000));
var inst_31760 = [inst_31758,inst_31759];
var inst_31761 = (new cljs.core.PersistentVector(null,2,(5),inst_31757,inst_31760,null));
var state_31792__$1 = state_31792;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31792__$1,(14),inst_31761);
} else {
if((state_val_31793 === (9))){
var inst_31752 = (state_31792[(8)]);
var inst_31778 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_31779 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31752);
var inst_31780 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31779);
var inst_31781 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31780)].join('');
var inst_31782 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_31781);
var state_31792__$1 = (function (){var statearr_31805 = state_31792;
(statearr_31805[(10)] = inst_31778);

return statearr_31805;
})();
var statearr_31806_31831 = state_31792__$1;
(statearr_31806_31831[(2)] = inst_31782);

(statearr_31806_31831[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31793 === (5))){
var inst_31745 = (state_31792[(7)]);
var inst_31747 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_31748 = (new cljs.core.PersistentArrayMap(null,2,inst_31747,null));
var inst_31749 = (new cljs.core.PersistentHashSet(null,inst_31748,null));
var inst_31750 = figwheel.client.focus_msgs.call(null,inst_31749,inst_31745);
var inst_31751 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_31750);
var inst_31752 = cljs.core.first.call(null,inst_31750);
var inst_31753 = figwheel.client.autoload_QMARK_.call(null);
var state_31792__$1 = (function (){var statearr_31807 = state_31792;
(statearr_31807[(8)] = inst_31752);

(statearr_31807[(9)] = inst_31751);

return statearr_31807;
})();
if(cljs.core.truth_(inst_31753)){
var statearr_31808_31832 = state_31792__$1;
(statearr_31808_31832[(1)] = (8));

} else {
var statearr_31809_31833 = state_31792__$1;
(statearr_31809_31833[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31793 === (14))){
var inst_31763 = (state_31792[(2)]);
var state_31792__$1 = state_31792;
var statearr_31810_31834 = state_31792__$1;
(statearr_31810_31834[(2)] = inst_31763);

(statearr_31810_31834[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31793 === (16))){
var state_31792__$1 = state_31792;
var statearr_31811_31835 = state_31792__$1;
(statearr_31811_31835[(2)] = null);

(statearr_31811_31835[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31793 === (10))){
var inst_31784 = (state_31792[(2)]);
var state_31792__$1 = (function (){var statearr_31812 = state_31792;
(statearr_31812[(11)] = inst_31784);

return statearr_31812;
})();
var statearr_31813_31836 = state_31792__$1;
(statearr_31813_31836[(2)] = null);

(statearr_31813_31836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31793 === (8))){
var inst_31751 = (state_31792[(9)]);
var inst_31755 = figwheel.client.reload_file_state_QMARK_.call(null,inst_31751,opts);
var state_31792__$1 = state_31792;
if(cljs.core.truth_(inst_31755)){
var statearr_31814_31837 = state_31792__$1;
(statearr_31814_31837[(1)] = (11));

} else {
var statearr_31815_31838 = state_31792__$1;
(statearr_31815_31838[(1)] = (12));

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
});})(c__27974__auto___31820,ch))
;
return ((function (switch__27884__auto__,c__27974__auto___31820,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__27885__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__27885__auto____0 = (function (){
var statearr_31816 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31816[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__27885__auto__);

(statearr_31816[(1)] = (1));

return statearr_31816;
});
var figwheel$client$file_reloader_plugin_$_state_machine__27885__auto____1 = (function (state_31792){
while(true){
var ret_value__27886__auto__ = (function (){try{while(true){
var result__27887__auto__ = switch__27884__auto__.call(null,state_31792);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27887__auto__;
}
break;
}
}catch (e31817){if((e31817 instanceof Object)){
var ex__27888__auto__ = e31817;
var statearr_31818_31839 = state_31792;
(statearr_31818_31839[(5)] = ex__27888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31792);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31817;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31840 = state_31792;
state_31792 = G__31840;
continue;
} else {
return ret_value__27886__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__27885__auto__ = function(state_31792){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__27885__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__27885__auto____1.call(this,state_31792);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__27885__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__27885__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__27885__auto__;
})()
;})(switch__27884__auto__,c__27974__auto___31820,ch))
})();
var state__27976__auto__ = (function (){var statearr_31819 = f__27975__auto__.call(null);
(statearr_31819[(6)] = c__27974__auto___31820);

return statearr_31819;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27976__auto__);
});})(c__27974__auto___31820,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__31841_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__31841_SHARP_));
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
var base_path_31845 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_31845){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_31843 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_31844 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_31843,_STAR_print_fn_STAR_31844,sb,base_path_31845){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_31843,_STAR_print_fn_STAR_31844,sb,base_path_31845))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_31844;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_31843;
}}catch (e31842){if((e31842 instanceof Error)){
var e = e31842;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_31845], null));
} else {
var e = e31842;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_31845))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__31846){
var map__31847 = p__31846;
var map__31847__$1 = ((((!((map__31847 == null)))?(((((map__31847.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31847.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31847):map__31847);
var opts = map__31847__$1;
var build_id = cljs.core.get.call(null,map__31847__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__31847,map__31847__$1,opts,build_id){
return (function (p__31849){
var vec__31850 = p__31849;
var seq__31851 = cljs.core.seq.call(null,vec__31850);
var first__31852 = cljs.core.first.call(null,seq__31851);
var seq__31851__$1 = cljs.core.next.call(null,seq__31851);
var map__31853 = first__31852;
var map__31853__$1 = ((((!((map__31853 == null)))?(((((map__31853.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31853.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31853):map__31853);
var msg = map__31853__$1;
var msg_name = cljs.core.get.call(null,map__31853__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31851__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__31850,seq__31851,first__31852,seq__31851__$1,map__31853,map__31853__$1,msg,msg_name,_,map__31847,map__31847__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__31850,seq__31851,first__31852,seq__31851__$1,map__31853,map__31853__$1,msg,msg_name,_,map__31847,map__31847__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__31847,map__31847__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__31855){
var vec__31856 = p__31855;
var seq__31857 = cljs.core.seq.call(null,vec__31856);
var first__31858 = cljs.core.first.call(null,seq__31857);
var seq__31857__$1 = cljs.core.next.call(null,seq__31857);
var map__31859 = first__31858;
var map__31859__$1 = ((((!((map__31859 == null)))?(((((map__31859.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31859.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31859):map__31859);
var msg = map__31859__$1;
var msg_name = cljs.core.get.call(null,map__31859__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31857__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__31861){
var map__31862 = p__31861;
var map__31862__$1 = ((((!((map__31862 == null)))?(((((map__31862.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31862.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31862):map__31862);
var on_compile_warning = cljs.core.get.call(null,map__31862__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__31862__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__31862,map__31862__$1,on_compile_warning,on_compile_fail){
return (function (p__31864){
var vec__31865 = p__31864;
var seq__31866 = cljs.core.seq.call(null,vec__31865);
var first__31867 = cljs.core.first.call(null,seq__31866);
var seq__31866__$1 = cljs.core.next.call(null,seq__31866);
var map__31868 = first__31867;
var map__31868__$1 = ((((!((map__31868 == null)))?(((((map__31868.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31868.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31868):map__31868);
var msg = map__31868__$1;
var msg_name = cljs.core.get.call(null,map__31868__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31866__$1;
var pred__31870 = cljs.core._EQ_;
var expr__31871 = msg_name;
if(cljs.core.truth_(pred__31870.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__31871))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__31870.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__31871))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__31862,map__31862__$1,on_compile_warning,on_compile_fail))
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
var c__27974__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27974__auto__,msg_hist,msg_names,msg){
return (function (){
var f__27975__auto__ = (function (){var switch__27884__auto__ = ((function (c__27974__auto__,msg_hist,msg_names,msg){
return (function (state_31960){
var state_val_31961 = (state_31960[(1)]);
if((state_val_31961 === (7))){
var inst_31880 = (state_31960[(2)]);
var state_31960__$1 = state_31960;
if(cljs.core.truth_(inst_31880)){
var statearr_31962_32009 = state_31960__$1;
(statearr_31962_32009[(1)] = (8));

} else {
var statearr_31963_32010 = state_31960__$1;
(statearr_31963_32010[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31961 === (20))){
var inst_31954 = (state_31960[(2)]);
var state_31960__$1 = state_31960;
var statearr_31964_32011 = state_31960__$1;
(statearr_31964_32011[(2)] = inst_31954);

(statearr_31964_32011[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31961 === (27))){
var inst_31950 = (state_31960[(2)]);
var state_31960__$1 = state_31960;
var statearr_31965_32012 = state_31960__$1;
(statearr_31965_32012[(2)] = inst_31950);

(statearr_31965_32012[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31961 === (1))){
var inst_31873 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_31960__$1 = state_31960;
if(cljs.core.truth_(inst_31873)){
var statearr_31966_32013 = state_31960__$1;
(statearr_31966_32013[(1)] = (2));

} else {
var statearr_31967_32014 = state_31960__$1;
(statearr_31967_32014[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31961 === (24))){
var inst_31952 = (state_31960[(2)]);
var state_31960__$1 = state_31960;
var statearr_31968_32015 = state_31960__$1;
(statearr_31968_32015[(2)] = inst_31952);

(statearr_31968_32015[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31961 === (4))){
var inst_31958 = (state_31960[(2)]);
var state_31960__$1 = state_31960;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31960__$1,inst_31958);
} else {
if((state_val_31961 === (15))){
var inst_31956 = (state_31960[(2)]);
var state_31960__$1 = state_31960;
var statearr_31969_32016 = state_31960__$1;
(statearr_31969_32016[(2)] = inst_31956);

(statearr_31969_32016[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31961 === (21))){
var inst_31909 = (state_31960[(2)]);
var inst_31910 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31911 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31910);
var state_31960__$1 = (function (){var statearr_31970 = state_31960;
(statearr_31970[(7)] = inst_31909);

return statearr_31970;
})();
var statearr_31971_32017 = state_31960__$1;
(statearr_31971_32017[(2)] = inst_31911);

(statearr_31971_32017[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31961 === (31))){
var inst_31939 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_31960__$1 = state_31960;
if(cljs.core.truth_(inst_31939)){
var statearr_31972_32018 = state_31960__$1;
(statearr_31972_32018[(1)] = (34));

} else {
var statearr_31973_32019 = state_31960__$1;
(statearr_31973_32019[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31961 === (32))){
var inst_31948 = (state_31960[(2)]);
var state_31960__$1 = state_31960;
var statearr_31974_32020 = state_31960__$1;
(statearr_31974_32020[(2)] = inst_31948);

(statearr_31974_32020[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31961 === (33))){
var inst_31935 = (state_31960[(2)]);
var inst_31936 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31937 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31936);
var state_31960__$1 = (function (){var statearr_31975 = state_31960;
(statearr_31975[(8)] = inst_31935);

return statearr_31975;
})();
var statearr_31976_32021 = state_31960__$1;
(statearr_31976_32021[(2)] = inst_31937);

(statearr_31976_32021[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31961 === (13))){
var inst_31894 = figwheel.client.heads_up.clear.call(null);
var state_31960__$1 = state_31960;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31960__$1,(16),inst_31894);
} else {
if((state_val_31961 === (22))){
var inst_31915 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31916 = figwheel.client.heads_up.append_warning_message.call(null,inst_31915);
var state_31960__$1 = state_31960;
var statearr_31977_32022 = state_31960__$1;
(statearr_31977_32022[(2)] = inst_31916);

(statearr_31977_32022[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31961 === (36))){
var inst_31946 = (state_31960[(2)]);
var state_31960__$1 = state_31960;
var statearr_31978_32023 = state_31960__$1;
(statearr_31978_32023[(2)] = inst_31946);

(statearr_31978_32023[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31961 === (29))){
var inst_31926 = (state_31960[(2)]);
var inst_31927 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31928 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31927);
var state_31960__$1 = (function (){var statearr_31979 = state_31960;
(statearr_31979[(9)] = inst_31926);

return statearr_31979;
})();
var statearr_31980_32024 = state_31960__$1;
(statearr_31980_32024[(2)] = inst_31928);

(statearr_31980_32024[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31961 === (6))){
var inst_31875 = (state_31960[(10)]);
var state_31960__$1 = state_31960;
var statearr_31981_32025 = state_31960__$1;
(statearr_31981_32025[(2)] = inst_31875);

(statearr_31981_32025[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31961 === (28))){
var inst_31922 = (state_31960[(2)]);
var inst_31923 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31924 = figwheel.client.heads_up.display_warning.call(null,inst_31923);
var state_31960__$1 = (function (){var statearr_31982 = state_31960;
(statearr_31982[(11)] = inst_31922);

return statearr_31982;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31960__$1,(29),inst_31924);
} else {
if((state_val_31961 === (25))){
var inst_31920 = figwheel.client.heads_up.clear.call(null);
var state_31960__$1 = state_31960;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31960__$1,(28),inst_31920);
} else {
if((state_val_31961 === (34))){
var inst_31941 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31960__$1 = state_31960;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31960__$1,(37),inst_31941);
} else {
if((state_val_31961 === (17))){
var inst_31900 = (state_31960[(2)]);
var inst_31901 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31902 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31901);
var state_31960__$1 = (function (){var statearr_31983 = state_31960;
(statearr_31983[(12)] = inst_31900);

return statearr_31983;
})();
var statearr_31984_32026 = state_31960__$1;
(statearr_31984_32026[(2)] = inst_31902);

(statearr_31984_32026[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31961 === (3))){
var inst_31892 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_31960__$1 = state_31960;
if(cljs.core.truth_(inst_31892)){
var statearr_31985_32027 = state_31960__$1;
(statearr_31985_32027[(1)] = (13));

} else {
var statearr_31986_32028 = state_31960__$1;
(statearr_31986_32028[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31961 === (12))){
var inst_31888 = (state_31960[(2)]);
var state_31960__$1 = state_31960;
var statearr_31987_32029 = state_31960__$1;
(statearr_31987_32029[(2)] = inst_31888);

(statearr_31987_32029[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31961 === (2))){
var inst_31875 = (state_31960[(10)]);
var inst_31875__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_31960__$1 = (function (){var statearr_31988 = state_31960;
(statearr_31988[(10)] = inst_31875__$1);

return statearr_31988;
})();
if(cljs.core.truth_(inst_31875__$1)){
var statearr_31989_32030 = state_31960__$1;
(statearr_31989_32030[(1)] = (5));

} else {
var statearr_31990_32031 = state_31960__$1;
(statearr_31990_32031[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31961 === (23))){
var inst_31918 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_31960__$1 = state_31960;
if(cljs.core.truth_(inst_31918)){
var statearr_31991_32032 = state_31960__$1;
(statearr_31991_32032[(1)] = (25));

} else {
var statearr_31992_32033 = state_31960__$1;
(statearr_31992_32033[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31961 === (35))){
var state_31960__$1 = state_31960;
var statearr_31993_32034 = state_31960__$1;
(statearr_31993_32034[(2)] = null);

(statearr_31993_32034[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31961 === (19))){
var inst_31913 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_31960__$1 = state_31960;
if(cljs.core.truth_(inst_31913)){
var statearr_31994_32035 = state_31960__$1;
(statearr_31994_32035[(1)] = (22));

} else {
var statearr_31995_32036 = state_31960__$1;
(statearr_31995_32036[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31961 === (11))){
var inst_31884 = (state_31960[(2)]);
var state_31960__$1 = state_31960;
var statearr_31996_32037 = state_31960__$1;
(statearr_31996_32037[(2)] = inst_31884);

(statearr_31996_32037[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31961 === (9))){
var inst_31886 = figwheel.client.heads_up.clear.call(null);
var state_31960__$1 = state_31960;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31960__$1,(12),inst_31886);
} else {
if((state_val_31961 === (5))){
var inst_31877 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_31960__$1 = state_31960;
var statearr_31997_32038 = state_31960__$1;
(statearr_31997_32038[(2)] = inst_31877);

(statearr_31997_32038[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31961 === (14))){
var inst_31904 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_31960__$1 = state_31960;
if(cljs.core.truth_(inst_31904)){
var statearr_31998_32039 = state_31960__$1;
(statearr_31998_32039[(1)] = (18));

} else {
var statearr_31999_32040 = state_31960__$1;
(statearr_31999_32040[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31961 === (26))){
var inst_31930 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_31960__$1 = state_31960;
if(cljs.core.truth_(inst_31930)){
var statearr_32000_32041 = state_31960__$1;
(statearr_32000_32041[(1)] = (30));

} else {
var statearr_32001_32042 = state_31960__$1;
(statearr_32001_32042[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31961 === (16))){
var inst_31896 = (state_31960[(2)]);
var inst_31897 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31898 = figwheel.client.heads_up.display_exception.call(null,inst_31897);
var state_31960__$1 = (function (){var statearr_32002 = state_31960;
(statearr_32002[(13)] = inst_31896);

return statearr_32002;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31960__$1,(17),inst_31898);
} else {
if((state_val_31961 === (30))){
var inst_31932 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31933 = figwheel.client.heads_up.display_warning.call(null,inst_31932);
var state_31960__$1 = state_31960;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31960__$1,(33),inst_31933);
} else {
if((state_val_31961 === (10))){
var inst_31890 = (state_31960[(2)]);
var state_31960__$1 = state_31960;
var statearr_32003_32043 = state_31960__$1;
(statearr_32003_32043[(2)] = inst_31890);

(statearr_32003_32043[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31961 === (18))){
var inst_31906 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31907 = figwheel.client.heads_up.display_exception.call(null,inst_31906);
var state_31960__$1 = state_31960;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31960__$1,(21),inst_31907);
} else {
if((state_val_31961 === (37))){
var inst_31943 = (state_31960[(2)]);
var state_31960__$1 = state_31960;
var statearr_32004_32044 = state_31960__$1;
(statearr_32004_32044[(2)] = inst_31943);

(statearr_32004_32044[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31961 === (8))){
var inst_31882 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31960__$1 = state_31960;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31960__$1,(11),inst_31882);
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
});})(c__27974__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__27884__auto__,c__27974__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27885__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27885__auto____0 = (function (){
var statearr_32005 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32005[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27885__auto__);

(statearr_32005[(1)] = (1));

return statearr_32005;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27885__auto____1 = (function (state_31960){
while(true){
var ret_value__27886__auto__ = (function (){try{while(true){
var result__27887__auto__ = switch__27884__auto__.call(null,state_31960);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27887__auto__;
}
break;
}
}catch (e32006){if((e32006 instanceof Object)){
var ex__27888__auto__ = e32006;
var statearr_32007_32045 = state_31960;
(statearr_32007_32045[(5)] = ex__27888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31960);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32006;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32046 = state_31960;
state_31960 = G__32046;
continue;
} else {
return ret_value__27886__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27885__auto__ = function(state_31960){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27885__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27885__auto____1.call(this,state_31960);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27885__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27885__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27885__auto__;
})()
;})(switch__27884__auto__,c__27974__auto__,msg_hist,msg_names,msg))
})();
var state__27976__auto__ = (function (){var statearr_32008 = f__27975__auto__.call(null);
(statearr_32008[(6)] = c__27974__auto__);

return statearr_32008;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27976__auto__);
});})(c__27974__auto__,msg_hist,msg_names,msg))
);

return c__27974__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__27974__auto___32075 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27974__auto___32075,ch){
return (function (){
var f__27975__auto__ = (function (){var switch__27884__auto__ = ((function (c__27974__auto___32075,ch){
return (function (state_32061){
var state_val_32062 = (state_32061[(1)]);
if((state_val_32062 === (1))){
var state_32061__$1 = state_32061;
var statearr_32063_32076 = state_32061__$1;
(statearr_32063_32076[(2)] = null);

(statearr_32063_32076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32062 === (2))){
var state_32061__$1 = state_32061;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32061__$1,(4),ch);
} else {
if((state_val_32062 === (3))){
var inst_32059 = (state_32061[(2)]);
var state_32061__$1 = state_32061;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32061__$1,inst_32059);
} else {
if((state_val_32062 === (4))){
var inst_32049 = (state_32061[(7)]);
var inst_32049__$1 = (state_32061[(2)]);
var state_32061__$1 = (function (){var statearr_32064 = state_32061;
(statearr_32064[(7)] = inst_32049__$1);

return statearr_32064;
})();
if(cljs.core.truth_(inst_32049__$1)){
var statearr_32065_32077 = state_32061__$1;
(statearr_32065_32077[(1)] = (5));

} else {
var statearr_32066_32078 = state_32061__$1;
(statearr_32066_32078[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32062 === (5))){
var inst_32049 = (state_32061[(7)]);
var inst_32051 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_32049);
var state_32061__$1 = state_32061;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32061__$1,(8),inst_32051);
} else {
if((state_val_32062 === (6))){
var state_32061__$1 = state_32061;
var statearr_32067_32079 = state_32061__$1;
(statearr_32067_32079[(2)] = null);

(statearr_32067_32079[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32062 === (7))){
var inst_32057 = (state_32061[(2)]);
var state_32061__$1 = state_32061;
var statearr_32068_32080 = state_32061__$1;
(statearr_32068_32080[(2)] = inst_32057);

(statearr_32068_32080[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32062 === (8))){
var inst_32053 = (state_32061[(2)]);
var state_32061__$1 = (function (){var statearr_32069 = state_32061;
(statearr_32069[(8)] = inst_32053);

return statearr_32069;
})();
var statearr_32070_32081 = state_32061__$1;
(statearr_32070_32081[(2)] = null);

(statearr_32070_32081[(1)] = (2));


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
});})(c__27974__auto___32075,ch))
;
return ((function (switch__27884__auto__,c__27974__auto___32075,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__27885__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__27885__auto____0 = (function (){
var statearr_32071 = [null,null,null,null,null,null,null,null,null];
(statearr_32071[(0)] = figwheel$client$heads_up_plugin_$_state_machine__27885__auto__);

(statearr_32071[(1)] = (1));

return statearr_32071;
});
var figwheel$client$heads_up_plugin_$_state_machine__27885__auto____1 = (function (state_32061){
while(true){
var ret_value__27886__auto__ = (function (){try{while(true){
var result__27887__auto__ = switch__27884__auto__.call(null,state_32061);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27887__auto__;
}
break;
}
}catch (e32072){if((e32072 instanceof Object)){
var ex__27888__auto__ = e32072;
var statearr_32073_32082 = state_32061;
(statearr_32073_32082[(5)] = ex__27888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32061);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32072;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32083 = state_32061;
state_32061 = G__32083;
continue;
} else {
return ret_value__27886__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__27885__auto__ = function(state_32061){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__27885__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__27885__auto____1.call(this,state_32061);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__27885__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__27885__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__27885__auto__;
})()
;})(switch__27884__auto__,c__27974__auto___32075,ch))
})();
var state__27976__auto__ = (function (){var statearr_32074 = f__27975__auto__.call(null);
(statearr_32074[(6)] = c__27974__auto___32075);

return statearr_32074;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27976__auto__);
});})(c__27974__auto___32075,ch))
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
var c__27974__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27974__auto__){
return (function (){
var f__27975__auto__ = (function (){var switch__27884__auto__ = ((function (c__27974__auto__){
return (function (state_32089){
var state_val_32090 = (state_32089[(1)]);
if((state_val_32090 === (1))){
var inst_32084 = cljs.core.async.timeout.call(null,(3000));
var state_32089__$1 = state_32089;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32089__$1,(2),inst_32084);
} else {
if((state_val_32090 === (2))){
var inst_32086 = (state_32089[(2)]);
var inst_32087 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_32089__$1 = (function (){var statearr_32091 = state_32089;
(statearr_32091[(7)] = inst_32086);

return statearr_32091;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32089__$1,inst_32087);
} else {
return null;
}
}
});})(c__27974__auto__))
;
return ((function (switch__27884__auto__,c__27974__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__27885__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__27885__auto____0 = (function (){
var statearr_32092 = [null,null,null,null,null,null,null,null];
(statearr_32092[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__27885__auto__);

(statearr_32092[(1)] = (1));

return statearr_32092;
});
var figwheel$client$enforce_project_plugin_$_state_machine__27885__auto____1 = (function (state_32089){
while(true){
var ret_value__27886__auto__ = (function (){try{while(true){
var result__27887__auto__ = switch__27884__auto__.call(null,state_32089);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27887__auto__;
}
break;
}
}catch (e32093){if((e32093 instanceof Object)){
var ex__27888__auto__ = e32093;
var statearr_32094_32096 = state_32089;
(statearr_32094_32096[(5)] = ex__27888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32089);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32093;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32097 = state_32089;
state_32089 = G__32097;
continue;
} else {
return ret_value__27886__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__27885__auto__ = function(state_32089){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__27885__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__27885__auto____1.call(this,state_32089);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__27885__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__27885__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__27885__auto__;
})()
;})(switch__27884__auto__,c__27974__auto__))
})();
var state__27976__auto__ = (function (){var statearr_32095 = f__27975__auto__.call(null);
(statearr_32095[(6)] = c__27974__auto__);

return statearr_32095;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27976__auto__);
});})(c__27974__auto__))
);

return c__27974__auto__;
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
var c__27974__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27974__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__27975__auto__ = (function (){var switch__27884__auto__ = ((function (c__27974__auto__,figwheel_version,temp__5457__auto__){
return (function (state_32104){
var state_val_32105 = (state_32104[(1)]);
if((state_val_32105 === (1))){
var inst_32098 = cljs.core.async.timeout.call(null,(2000));
var state_32104__$1 = state_32104;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32104__$1,(2),inst_32098);
} else {
if((state_val_32105 === (2))){
var inst_32100 = (state_32104[(2)]);
var inst_32101 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_32102 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_32101);
var state_32104__$1 = (function (){var statearr_32106 = state_32104;
(statearr_32106[(7)] = inst_32100);

return statearr_32106;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32104__$1,inst_32102);
} else {
return null;
}
}
});})(c__27974__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__27884__auto__,c__27974__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27885__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27885__auto____0 = (function (){
var statearr_32107 = [null,null,null,null,null,null,null,null];
(statearr_32107[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27885__auto__);

(statearr_32107[(1)] = (1));

return statearr_32107;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27885__auto____1 = (function (state_32104){
while(true){
var ret_value__27886__auto__ = (function (){try{while(true){
var result__27887__auto__ = switch__27884__auto__.call(null,state_32104);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27887__auto__;
}
break;
}
}catch (e32108){if((e32108 instanceof Object)){
var ex__27888__auto__ = e32108;
var statearr_32109_32111 = state_32104;
(statearr_32109_32111[(5)] = ex__27888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32104);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32108;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32112 = state_32104;
state_32104 = G__32112;
continue;
} else {
return ret_value__27886__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27885__auto__ = function(state_32104){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27885__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27885__auto____1.call(this,state_32104);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27885__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27885__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27885__auto__;
})()
;})(switch__27884__auto__,c__27974__auto__,figwheel_version,temp__5457__auto__))
})();
var state__27976__auto__ = (function (){var statearr_32110 = f__27975__auto__.call(null);
(statearr_32110[(6)] = c__27974__auto__);

return statearr_32110;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27976__auto__);
});})(c__27974__auto__,figwheel_version,temp__5457__auto__))
);

return c__27974__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__32113){
var map__32114 = p__32113;
var map__32114__$1 = ((((!((map__32114 == null)))?(((((map__32114.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32114.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32114):map__32114);
var file = cljs.core.get.call(null,map__32114__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__32114__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__32114__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__32116 = "";
var G__32116__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32116),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__32116);
var G__32116__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32116__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__32116__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = line;
if(cljs.core.truth_(and__3911__auto__)){
return column;
} else {
return and__3911__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32116__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__32116__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__32117){
var map__32118 = p__32117;
var map__32118__$1 = ((((!((map__32118 == null)))?(((((map__32118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32118.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32118):map__32118);
var ed = map__32118__$1;
var formatted_exception = cljs.core.get.call(null,map__32118__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__32118__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__32118__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__32120_32124 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__32121_32125 = null;
var count__32122_32126 = (0);
var i__32123_32127 = (0);
while(true){
if((i__32123_32127 < count__32122_32126)){
var msg_32128 = cljs.core._nth.call(null,chunk__32121_32125,i__32123_32127);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_32128);


var G__32129 = seq__32120_32124;
var G__32130 = chunk__32121_32125;
var G__32131 = count__32122_32126;
var G__32132 = (i__32123_32127 + (1));
seq__32120_32124 = G__32129;
chunk__32121_32125 = G__32130;
count__32122_32126 = G__32131;
i__32123_32127 = G__32132;
continue;
} else {
var temp__5457__auto___32133 = cljs.core.seq.call(null,seq__32120_32124);
if(temp__5457__auto___32133){
var seq__32120_32134__$1 = temp__5457__auto___32133;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32120_32134__$1)){
var c__4319__auto___32135 = cljs.core.chunk_first.call(null,seq__32120_32134__$1);
var G__32136 = cljs.core.chunk_rest.call(null,seq__32120_32134__$1);
var G__32137 = c__4319__auto___32135;
var G__32138 = cljs.core.count.call(null,c__4319__auto___32135);
var G__32139 = (0);
seq__32120_32124 = G__32136;
chunk__32121_32125 = G__32137;
count__32122_32126 = G__32138;
i__32123_32127 = G__32139;
continue;
} else {
var msg_32140 = cljs.core.first.call(null,seq__32120_32134__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_32140);


var G__32141 = cljs.core.next.call(null,seq__32120_32134__$1);
var G__32142 = null;
var G__32143 = (0);
var G__32144 = (0);
seq__32120_32124 = G__32141;
chunk__32121_32125 = G__32142;
count__32122_32126 = G__32143;
i__32123_32127 = G__32144;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__32145){
var map__32146 = p__32145;
var map__32146__$1 = ((((!((map__32146 == null)))?(((((map__32146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32146.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32146):map__32146);
var w = map__32146__$1;
var message = cljs.core.get.call(null,map__32146__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__32148 = cljs.core.seq.call(null,plugins);
var chunk__32149 = null;
var count__32150 = (0);
var i__32151 = (0);
while(true){
if((i__32151 < count__32150)){
var vec__32152 = cljs.core._nth.call(null,chunk__32149,i__32151);
var k = cljs.core.nth.call(null,vec__32152,(0),null);
var plugin = cljs.core.nth.call(null,vec__32152,(1),null);
if(cljs.core.truth_(plugin)){
var pl_32158 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__32148,chunk__32149,count__32150,i__32151,pl_32158,vec__32152,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_32158.call(null,msg_hist);
});})(seq__32148,chunk__32149,count__32150,i__32151,pl_32158,vec__32152,k,plugin))
);
} else {
}


var G__32159 = seq__32148;
var G__32160 = chunk__32149;
var G__32161 = count__32150;
var G__32162 = (i__32151 + (1));
seq__32148 = G__32159;
chunk__32149 = G__32160;
count__32150 = G__32161;
i__32151 = G__32162;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__32148);
if(temp__5457__auto__){
var seq__32148__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32148__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__32148__$1);
var G__32163 = cljs.core.chunk_rest.call(null,seq__32148__$1);
var G__32164 = c__4319__auto__;
var G__32165 = cljs.core.count.call(null,c__4319__auto__);
var G__32166 = (0);
seq__32148 = G__32163;
chunk__32149 = G__32164;
count__32150 = G__32165;
i__32151 = G__32166;
continue;
} else {
var vec__32155 = cljs.core.first.call(null,seq__32148__$1);
var k = cljs.core.nth.call(null,vec__32155,(0),null);
var plugin = cljs.core.nth.call(null,vec__32155,(1),null);
if(cljs.core.truth_(plugin)){
var pl_32167 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__32148,chunk__32149,count__32150,i__32151,pl_32167,vec__32155,k,plugin,seq__32148__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_32167.call(null,msg_hist);
});})(seq__32148,chunk__32149,count__32150,i__32151,pl_32167,vec__32155,k,plugin,seq__32148__$1,temp__5457__auto__))
);
} else {
}


var G__32168 = cljs.core.next.call(null,seq__32148__$1);
var G__32169 = null;
var G__32170 = (0);
var G__32171 = (0);
seq__32148 = G__32168;
chunk__32149 = G__32169;
count__32150 = G__32170;
i__32151 = G__32171;
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
var G__32173 = arguments.length;
switch (G__32173) {
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

var seq__32174_32179 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__32175_32180 = null;
var count__32176_32181 = (0);
var i__32177_32182 = (0);
while(true){
if((i__32177_32182 < count__32176_32181)){
var msg_32183 = cljs.core._nth.call(null,chunk__32175_32180,i__32177_32182);
figwheel.client.socket.handle_incoming_message.call(null,msg_32183);


var G__32184 = seq__32174_32179;
var G__32185 = chunk__32175_32180;
var G__32186 = count__32176_32181;
var G__32187 = (i__32177_32182 + (1));
seq__32174_32179 = G__32184;
chunk__32175_32180 = G__32185;
count__32176_32181 = G__32186;
i__32177_32182 = G__32187;
continue;
} else {
var temp__5457__auto___32188 = cljs.core.seq.call(null,seq__32174_32179);
if(temp__5457__auto___32188){
var seq__32174_32189__$1 = temp__5457__auto___32188;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32174_32189__$1)){
var c__4319__auto___32190 = cljs.core.chunk_first.call(null,seq__32174_32189__$1);
var G__32191 = cljs.core.chunk_rest.call(null,seq__32174_32189__$1);
var G__32192 = c__4319__auto___32190;
var G__32193 = cljs.core.count.call(null,c__4319__auto___32190);
var G__32194 = (0);
seq__32174_32179 = G__32191;
chunk__32175_32180 = G__32192;
count__32176_32181 = G__32193;
i__32177_32182 = G__32194;
continue;
} else {
var msg_32195 = cljs.core.first.call(null,seq__32174_32189__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_32195);


var G__32196 = cljs.core.next.call(null,seq__32174_32189__$1);
var G__32197 = null;
var G__32198 = (0);
var G__32199 = (0);
seq__32174_32179 = G__32196;
chunk__32175_32180 = G__32197;
count__32176_32181 = G__32198;
i__32177_32182 = G__32199;
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
var len__4499__auto___32204 = arguments.length;
var i__4500__auto___32205 = (0);
while(true){
if((i__4500__auto___32205 < len__4499__auto___32204)){
args__4502__auto__.push((arguments[i__4500__auto___32205]));

var G__32206 = (i__4500__auto___32205 + (1));
i__4500__auto___32205 = G__32206;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__32201){
var map__32202 = p__32201;
var map__32202__$1 = ((((!((map__32202 == null)))?(((((map__32202.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32202.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32202):map__32202);
var opts = map__32202__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq32200){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32200));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e32207){if((e32207 instanceof Error)){
var e = e32207;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e32207;

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
return (function (p__32208){
var map__32209 = p__32208;
var map__32209__$1 = ((((!((map__32209 == null)))?(((((map__32209.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32209.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32209):map__32209);
var msg_name = cljs.core.get.call(null,map__32209__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1525376050111
