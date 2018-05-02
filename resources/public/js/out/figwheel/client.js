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
}catch (e30753){if((e30753 instanceof Error)){
var e = e30753;
return "Error: Unable to stringify";
} else {
throw e30753;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__30756 = arguments.length;
switch (G__30756) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__30754_SHARP_){
if(typeof p1__30754_SHARP_ === 'string'){
return p1__30754_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__30754_SHARP_);
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
var len__4499__auto___30759 = arguments.length;
var i__4500__auto___30760 = (0);
while(true){
if((i__4500__auto___30760 < len__4499__auto___30759)){
args__4502__auto__.push((arguments[i__4500__auto___30760]));

var G__30761 = (i__4500__auto___30760 + (1));
i__4500__auto___30760 = G__30761;
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
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq30758){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30758));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___30763 = arguments.length;
var i__4500__auto___30764 = (0);
while(true){
if((i__4500__auto___30764 < len__4499__auto___30763)){
args__4502__auto__.push((arguments[i__4500__auto___30764]));

var G__30765 = (i__4500__auto___30764 + (1));
i__4500__auto___30764 = G__30765;
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
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq30762){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30762));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__30766){
var map__30767 = p__30766;
var map__30767__$1 = ((((!((map__30767 == null)))?(((((map__30767.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30767.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30767):map__30767);
var message = cljs.core.get.call(null,map__30767__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__30767__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__26898__auto___30846 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26898__auto___30846,ch){
return (function (){
var f__26899__auto__ = (function (){var switch__26808__auto__ = ((function (c__26898__auto___30846,ch){
return (function (state_30818){
var state_val_30819 = (state_30818[(1)]);
if((state_val_30819 === (7))){
var inst_30814 = (state_30818[(2)]);
var state_30818__$1 = state_30818;
var statearr_30820_30847 = state_30818__$1;
(statearr_30820_30847[(2)] = inst_30814);

(statearr_30820_30847[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30819 === (1))){
var state_30818__$1 = state_30818;
var statearr_30821_30848 = state_30818__$1;
(statearr_30821_30848[(2)] = null);

(statearr_30821_30848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30819 === (4))){
var inst_30771 = (state_30818[(7)]);
var inst_30771__$1 = (state_30818[(2)]);
var state_30818__$1 = (function (){var statearr_30822 = state_30818;
(statearr_30822[(7)] = inst_30771__$1);

return statearr_30822;
})();
if(cljs.core.truth_(inst_30771__$1)){
var statearr_30823_30849 = state_30818__$1;
(statearr_30823_30849[(1)] = (5));

} else {
var statearr_30824_30850 = state_30818__$1;
(statearr_30824_30850[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30819 === (15))){
var inst_30778 = (state_30818[(8)]);
var inst_30793 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30778);
var inst_30794 = cljs.core.first.call(null,inst_30793);
var inst_30795 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_30794);
var inst_30796 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30795)].join('');
var inst_30797 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_30796);
var state_30818__$1 = state_30818;
var statearr_30825_30851 = state_30818__$1;
(statearr_30825_30851[(2)] = inst_30797);

(statearr_30825_30851[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30819 === (13))){
var inst_30802 = (state_30818[(2)]);
var state_30818__$1 = state_30818;
var statearr_30826_30852 = state_30818__$1;
(statearr_30826_30852[(2)] = inst_30802);

(statearr_30826_30852[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30819 === (6))){
var state_30818__$1 = state_30818;
var statearr_30827_30853 = state_30818__$1;
(statearr_30827_30853[(2)] = null);

(statearr_30827_30853[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30819 === (17))){
var inst_30800 = (state_30818[(2)]);
var state_30818__$1 = state_30818;
var statearr_30828_30854 = state_30818__$1;
(statearr_30828_30854[(2)] = inst_30800);

(statearr_30828_30854[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30819 === (3))){
var inst_30816 = (state_30818[(2)]);
var state_30818__$1 = state_30818;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30818__$1,inst_30816);
} else {
if((state_val_30819 === (12))){
var inst_30777 = (state_30818[(9)]);
var inst_30791 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_30777,opts);
var state_30818__$1 = state_30818;
if(cljs.core.truth_(inst_30791)){
var statearr_30829_30855 = state_30818__$1;
(statearr_30829_30855[(1)] = (15));

} else {
var statearr_30830_30856 = state_30818__$1;
(statearr_30830_30856[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30819 === (2))){
var state_30818__$1 = state_30818;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30818__$1,(4),ch);
} else {
if((state_val_30819 === (11))){
var inst_30778 = (state_30818[(8)]);
var inst_30783 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30784 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_30778);
var inst_30785 = cljs.core.async.timeout.call(null,(1000));
var inst_30786 = [inst_30784,inst_30785];
var inst_30787 = (new cljs.core.PersistentVector(null,2,(5),inst_30783,inst_30786,null));
var state_30818__$1 = state_30818;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30818__$1,(14),inst_30787);
} else {
if((state_val_30819 === (9))){
var inst_30778 = (state_30818[(8)]);
var inst_30804 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_30805 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30778);
var inst_30806 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30805);
var inst_30807 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30806)].join('');
var inst_30808 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_30807);
var state_30818__$1 = (function (){var statearr_30831 = state_30818;
(statearr_30831[(10)] = inst_30804);

return statearr_30831;
})();
var statearr_30832_30857 = state_30818__$1;
(statearr_30832_30857[(2)] = inst_30808);

(statearr_30832_30857[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30819 === (5))){
var inst_30771 = (state_30818[(7)]);
var inst_30773 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_30774 = (new cljs.core.PersistentArrayMap(null,2,inst_30773,null));
var inst_30775 = (new cljs.core.PersistentHashSet(null,inst_30774,null));
var inst_30776 = figwheel.client.focus_msgs.call(null,inst_30775,inst_30771);
var inst_30777 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_30776);
var inst_30778 = cljs.core.first.call(null,inst_30776);
var inst_30779 = figwheel.client.autoload_QMARK_.call(null);
var state_30818__$1 = (function (){var statearr_30833 = state_30818;
(statearr_30833[(8)] = inst_30778);

(statearr_30833[(9)] = inst_30777);

return statearr_30833;
})();
if(cljs.core.truth_(inst_30779)){
var statearr_30834_30858 = state_30818__$1;
(statearr_30834_30858[(1)] = (8));

} else {
var statearr_30835_30859 = state_30818__$1;
(statearr_30835_30859[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30819 === (14))){
var inst_30789 = (state_30818[(2)]);
var state_30818__$1 = state_30818;
var statearr_30836_30860 = state_30818__$1;
(statearr_30836_30860[(2)] = inst_30789);

(statearr_30836_30860[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30819 === (16))){
var state_30818__$1 = state_30818;
var statearr_30837_30861 = state_30818__$1;
(statearr_30837_30861[(2)] = null);

(statearr_30837_30861[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30819 === (10))){
var inst_30810 = (state_30818[(2)]);
var state_30818__$1 = (function (){var statearr_30838 = state_30818;
(statearr_30838[(11)] = inst_30810);

return statearr_30838;
})();
var statearr_30839_30862 = state_30818__$1;
(statearr_30839_30862[(2)] = null);

(statearr_30839_30862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30819 === (8))){
var inst_30777 = (state_30818[(9)]);
var inst_30781 = figwheel.client.reload_file_state_QMARK_.call(null,inst_30777,opts);
var state_30818__$1 = state_30818;
if(cljs.core.truth_(inst_30781)){
var statearr_30840_30863 = state_30818__$1;
(statearr_30840_30863[(1)] = (11));

} else {
var statearr_30841_30864 = state_30818__$1;
(statearr_30841_30864[(1)] = (12));

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
});})(c__26898__auto___30846,ch))
;
return ((function (switch__26808__auto__,c__26898__auto___30846,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__26809__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__26809__auto____0 = (function (){
var statearr_30842 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30842[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__26809__auto__);

(statearr_30842[(1)] = (1));

return statearr_30842;
});
var figwheel$client$file_reloader_plugin_$_state_machine__26809__auto____1 = (function (state_30818){
while(true){
var ret_value__26810__auto__ = (function (){try{while(true){
var result__26811__auto__ = switch__26808__auto__.call(null,state_30818);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26811__auto__;
}
break;
}
}catch (e30843){if((e30843 instanceof Object)){
var ex__26812__auto__ = e30843;
var statearr_30844_30865 = state_30818;
(statearr_30844_30865[(5)] = ex__26812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30818);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30843;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30866 = state_30818;
state_30818 = G__30866;
continue;
} else {
return ret_value__26810__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__26809__auto__ = function(state_30818){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__26809__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__26809__auto____1.call(this,state_30818);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__26809__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__26809__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__26809__auto__;
})()
;})(switch__26808__auto__,c__26898__auto___30846,ch))
})();
var state__26900__auto__ = (function (){var statearr_30845 = f__26899__auto__.call(null);
(statearr_30845[(6)] = c__26898__auto___30846);

return statearr_30845;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26900__auto__);
});})(c__26898__auto___30846,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__30867_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__30867_SHARP_));
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
var base_path_30871 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_30871){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_30869 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_30870 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_30869,_STAR_print_fn_STAR_30870,sb,base_path_30871){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_30869,_STAR_print_fn_STAR_30870,sb,base_path_30871))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_30870;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_30869;
}}catch (e30868){if((e30868 instanceof Error)){
var e = e30868;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_30871], null));
} else {
var e = e30868;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_30871))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__30872){
var map__30873 = p__30872;
var map__30873__$1 = ((((!((map__30873 == null)))?(((((map__30873.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30873.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30873):map__30873);
var opts = map__30873__$1;
var build_id = cljs.core.get.call(null,map__30873__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__30873,map__30873__$1,opts,build_id){
return (function (p__30875){
var vec__30876 = p__30875;
var seq__30877 = cljs.core.seq.call(null,vec__30876);
var first__30878 = cljs.core.first.call(null,seq__30877);
var seq__30877__$1 = cljs.core.next.call(null,seq__30877);
var map__30879 = first__30878;
var map__30879__$1 = ((((!((map__30879 == null)))?(((((map__30879.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30879.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30879):map__30879);
var msg = map__30879__$1;
var msg_name = cljs.core.get.call(null,map__30879__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30877__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__30876,seq__30877,first__30878,seq__30877__$1,map__30879,map__30879__$1,msg,msg_name,_,map__30873,map__30873__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__30876,seq__30877,first__30878,seq__30877__$1,map__30879,map__30879__$1,msg,msg_name,_,map__30873,map__30873__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__30873,map__30873__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__30881){
var vec__30882 = p__30881;
var seq__30883 = cljs.core.seq.call(null,vec__30882);
var first__30884 = cljs.core.first.call(null,seq__30883);
var seq__30883__$1 = cljs.core.next.call(null,seq__30883);
var map__30885 = first__30884;
var map__30885__$1 = ((((!((map__30885 == null)))?(((((map__30885.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30885.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30885):map__30885);
var msg = map__30885__$1;
var msg_name = cljs.core.get.call(null,map__30885__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30883__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__30887){
var map__30888 = p__30887;
var map__30888__$1 = ((((!((map__30888 == null)))?(((((map__30888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30888.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30888):map__30888);
var on_compile_warning = cljs.core.get.call(null,map__30888__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__30888__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__30888,map__30888__$1,on_compile_warning,on_compile_fail){
return (function (p__30890){
var vec__30891 = p__30890;
var seq__30892 = cljs.core.seq.call(null,vec__30891);
var first__30893 = cljs.core.first.call(null,seq__30892);
var seq__30892__$1 = cljs.core.next.call(null,seq__30892);
var map__30894 = first__30893;
var map__30894__$1 = ((((!((map__30894 == null)))?(((((map__30894.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30894.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30894):map__30894);
var msg = map__30894__$1;
var msg_name = cljs.core.get.call(null,map__30894__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30892__$1;
var pred__30896 = cljs.core._EQ_;
var expr__30897 = msg_name;
if(cljs.core.truth_(pred__30896.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__30897))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__30896.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__30897))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__30888,map__30888__$1,on_compile_warning,on_compile_fail))
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
var c__26898__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26898__auto__,msg_hist,msg_names,msg){
return (function (){
var f__26899__auto__ = (function (){var switch__26808__auto__ = ((function (c__26898__auto__,msg_hist,msg_names,msg){
return (function (state_30986){
var state_val_30987 = (state_30986[(1)]);
if((state_val_30987 === (7))){
var inst_30906 = (state_30986[(2)]);
var state_30986__$1 = state_30986;
if(cljs.core.truth_(inst_30906)){
var statearr_30988_31035 = state_30986__$1;
(statearr_30988_31035[(1)] = (8));

} else {
var statearr_30989_31036 = state_30986__$1;
(statearr_30989_31036[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (20))){
var inst_30980 = (state_30986[(2)]);
var state_30986__$1 = state_30986;
var statearr_30990_31037 = state_30986__$1;
(statearr_30990_31037[(2)] = inst_30980);

(statearr_30990_31037[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (27))){
var inst_30976 = (state_30986[(2)]);
var state_30986__$1 = state_30986;
var statearr_30991_31038 = state_30986__$1;
(statearr_30991_31038[(2)] = inst_30976);

(statearr_30991_31038[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (1))){
var inst_30899 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_30986__$1 = state_30986;
if(cljs.core.truth_(inst_30899)){
var statearr_30992_31039 = state_30986__$1;
(statearr_30992_31039[(1)] = (2));

} else {
var statearr_30993_31040 = state_30986__$1;
(statearr_30993_31040[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (24))){
var inst_30978 = (state_30986[(2)]);
var state_30986__$1 = state_30986;
var statearr_30994_31041 = state_30986__$1;
(statearr_30994_31041[(2)] = inst_30978);

(statearr_30994_31041[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (4))){
var inst_30984 = (state_30986[(2)]);
var state_30986__$1 = state_30986;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30986__$1,inst_30984);
} else {
if((state_val_30987 === (15))){
var inst_30982 = (state_30986[(2)]);
var state_30986__$1 = state_30986;
var statearr_30995_31042 = state_30986__$1;
(statearr_30995_31042[(2)] = inst_30982);

(statearr_30995_31042[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (21))){
var inst_30935 = (state_30986[(2)]);
var inst_30936 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30937 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30936);
var state_30986__$1 = (function (){var statearr_30996 = state_30986;
(statearr_30996[(7)] = inst_30935);

return statearr_30996;
})();
var statearr_30997_31043 = state_30986__$1;
(statearr_30997_31043[(2)] = inst_30937);

(statearr_30997_31043[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (31))){
var inst_30965 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_30986__$1 = state_30986;
if(cljs.core.truth_(inst_30965)){
var statearr_30998_31044 = state_30986__$1;
(statearr_30998_31044[(1)] = (34));

} else {
var statearr_30999_31045 = state_30986__$1;
(statearr_30999_31045[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (32))){
var inst_30974 = (state_30986[(2)]);
var state_30986__$1 = state_30986;
var statearr_31000_31046 = state_30986__$1;
(statearr_31000_31046[(2)] = inst_30974);

(statearr_31000_31046[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (33))){
var inst_30961 = (state_30986[(2)]);
var inst_30962 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30963 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30962);
var state_30986__$1 = (function (){var statearr_31001 = state_30986;
(statearr_31001[(8)] = inst_30961);

return statearr_31001;
})();
var statearr_31002_31047 = state_30986__$1;
(statearr_31002_31047[(2)] = inst_30963);

(statearr_31002_31047[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (13))){
var inst_30920 = figwheel.client.heads_up.clear.call(null);
var state_30986__$1 = state_30986;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30986__$1,(16),inst_30920);
} else {
if((state_val_30987 === (22))){
var inst_30941 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30942 = figwheel.client.heads_up.append_warning_message.call(null,inst_30941);
var state_30986__$1 = state_30986;
var statearr_31003_31048 = state_30986__$1;
(statearr_31003_31048[(2)] = inst_30942);

(statearr_31003_31048[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (36))){
var inst_30972 = (state_30986[(2)]);
var state_30986__$1 = state_30986;
var statearr_31004_31049 = state_30986__$1;
(statearr_31004_31049[(2)] = inst_30972);

(statearr_31004_31049[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (29))){
var inst_30952 = (state_30986[(2)]);
var inst_30953 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30954 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30953);
var state_30986__$1 = (function (){var statearr_31005 = state_30986;
(statearr_31005[(9)] = inst_30952);

return statearr_31005;
})();
var statearr_31006_31050 = state_30986__$1;
(statearr_31006_31050[(2)] = inst_30954);

(statearr_31006_31050[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (6))){
var inst_30901 = (state_30986[(10)]);
var state_30986__$1 = state_30986;
var statearr_31007_31051 = state_30986__$1;
(statearr_31007_31051[(2)] = inst_30901);

(statearr_31007_31051[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (28))){
var inst_30948 = (state_30986[(2)]);
var inst_30949 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30950 = figwheel.client.heads_up.display_warning.call(null,inst_30949);
var state_30986__$1 = (function (){var statearr_31008 = state_30986;
(statearr_31008[(11)] = inst_30948);

return statearr_31008;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30986__$1,(29),inst_30950);
} else {
if((state_val_30987 === (25))){
var inst_30946 = figwheel.client.heads_up.clear.call(null);
var state_30986__$1 = state_30986;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30986__$1,(28),inst_30946);
} else {
if((state_val_30987 === (34))){
var inst_30967 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30986__$1 = state_30986;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30986__$1,(37),inst_30967);
} else {
if((state_val_30987 === (17))){
var inst_30926 = (state_30986[(2)]);
var inst_30927 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30928 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30927);
var state_30986__$1 = (function (){var statearr_31009 = state_30986;
(statearr_31009[(12)] = inst_30926);

return statearr_31009;
})();
var statearr_31010_31052 = state_30986__$1;
(statearr_31010_31052[(2)] = inst_30928);

(statearr_31010_31052[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (3))){
var inst_30918 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_30986__$1 = state_30986;
if(cljs.core.truth_(inst_30918)){
var statearr_31011_31053 = state_30986__$1;
(statearr_31011_31053[(1)] = (13));

} else {
var statearr_31012_31054 = state_30986__$1;
(statearr_31012_31054[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (12))){
var inst_30914 = (state_30986[(2)]);
var state_30986__$1 = state_30986;
var statearr_31013_31055 = state_30986__$1;
(statearr_31013_31055[(2)] = inst_30914);

(statearr_31013_31055[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (2))){
var inst_30901 = (state_30986[(10)]);
var inst_30901__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_30986__$1 = (function (){var statearr_31014 = state_30986;
(statearr_31014[(10)] = inst_30901__$1);

return statearr_31014;
})();
if(cljs.core.truth_(inst_30901__$1)){
var statearr_31015_31056 = state_30986__$1;
(statearr_31015_31056[(1)] = (5));

} else {
var statearr_31016_31057 = state_30986__$1;
(statearr_31016_31057[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (23))){
var inst_30944 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_30986__$1 = state_30986;
if(cljs.core.truth_(inst_30944)){
var statearr_31017_31058 = state_30986__$1;
(statearr_31017_31058[(1)] = (25));

} else {
var statearr_31018_31059 = state_30986__$1;
(statearr_31018_31059[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (35))){
var state_30986__$1 = state_30986;
var statearr_31019_31060 = state_30986__$1;
(statearr_31019_31060[(2)] = null);

(statearr_31019_31060[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (19))){
var inst_30939 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_30986__$1 = state_30986;
if(cljs.core.truth_(inst_30939)){
var statearr_31020_31061 = state_30986__$1;
(statearr_31020_31061[(1)] = (22));

} else {
var statearr_31021_31062 = state_30986__$1;
(statearr_31021_31062[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (11))){
var inst_30910 = (state_30986[(2)]);
var state_30986__$1 = state_30986;
var statearr_31022_31063 = state_30986__$1;
(statearr_31022_31063[(2)] = inst_30910);

(statearr_31022_31063[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (9))){
var inst_30912 = figwheel.client.heads_up.clear.call(null);
var state_30986__$1 = state_30986;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30986__$1,(12),inst_30912);
} else {
if((state_val_30987 === (5))){
var inst_30903 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_30986__$1 = state_30986;
var statearr_31023_31064 = state_30986__$1;
(statearr_31023_31064[(2)] = inst_30903);

(statearr_31023_31064[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (14))){
var inst_30930 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_30986__$1 = state_30986;
if(cljs.core.truth_(inst_30930)){
var statearr_31024_31065 = state_30986__$1;
(statearr_31024_31065[(1)] = (18));

} else {
var statearr_31025_31066 = state_30986__$1;
(statearr_31025_31066[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (26))){
var inst_30956 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_30986__$1 = state_30986;
if(cljs.core.truth_(inst_30956)){
var statearr_31026_31067 = state_30986__$1;
(statearr_31026_31067[(1)] = (30));

} else {
var statearr_31027_31068 = state_30986__$1;
(statearr_31027_31068[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (16))){
var inst_30922 = (state_30986[(2)]);
var inst_30923 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30924 = figwheel.client.heads_up.display_exception.call(null,inst_30923);
var state_30986__$1 = (function (){var statearr_31028 = state_30986;
(statearr_31028[(13)] = inst_30922);

return statearr_31028;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30986__$1,(17),inst_30924);
} else {
if((state_val_30987 === (30))){
var inst_30958 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30959 = figwheel.client.heads_up.display_warning.call(null,inst_30958);
var state_30986__$1 = state_30986;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30986__$1,(33),inst_30959);
} else {
if((state_val_30987 === (10))){
var inst_30916 = (state_30986[(2)]);
var state_30986__$1 = state_30986;
var statearr_31029_31069 = state_30986__$1;
(statearr_31029_31069[(2)] = inst_30916);

(statearr_31029_31069[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (18))){
var inst_30932 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30933 = figwheel.client.heads_up.display_exception.call(null,inst_30932);
var state_30986__$1 = state_30986;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30986__$1,(21),inst_30933);
} else {
if((state_val_30987 === (37))){
var inst_30969 = (state_30986[(2)]);
var state_30986__$1 = state_30986;
var statearr_31030_31070 = state_30986__$1;
(statearr_31030_31070[(2)] = inst_30969);

(statearr_31030_31070[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30987 === (8))){
var inst_30908 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30986__$1 = state_30986;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30986__$1,(11),inst_30908);
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
});})(c__26898__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__26808__auto__,c__26898__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26809__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26809__auto____0 = (function (){
var statearr_31031 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31031[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26809__auto__);

(statearr_31031[(1)] = (1));

return statearr_31031;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26809__auto____1 = (function (state_30986){
while(true){
var ret_value__26810__auto__ = (function (){try{while(true){
var result__26811__auto__ = switch__26808__auto__.call(null,state_30986);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26811__auto__;
}
break;
}
}catch (e31032){if((e31032 instanceof Object)){
var ex__26812__auto__ = e31032;
var statearr_31033_31071 = state_30986;
(statearr_31033_31071[(5)] = ex__26812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30986);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31032;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31072 = state_30986;
state_30986 = G__31072;
continue;
} else {
return ret_value__26810__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26809__auto__ = function(state_30986){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26809__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26809__auto____1.call(this,state_30986);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26809__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26809__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26809__auto__;
})()
;})(switch__26808__auto__,c__26898__auto__,msg_hist,msg_names,msg))
})();
var state__26900__auto__ = (function (){var statearr_31034 = f__26899__auto__.call(null);
(statearr_31034[(6)] = c__26898__auto__);

return statearr_31034;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26900__auto__);
});})(c__26898__auto__,msg_hist,msg_names,msg))
);

return c__26898__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__26898__auto___31101 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26898__auto___31101,ch){
return (function (){
var f__26899__auto__ = (function (){var switch__26808__auto__ = ((function (c__26898__auto___31101,ch){
return (function (state_31087){
var state_val_31088 = (state_31087[(1)]);
if((state_val_31088 === (1))){
var state_31087__$1 = state_31087;
var statearr_31089_31102 = state_31087__$1;
(statearr_31089_31102[(2)] = null);

(statearr_31089_31102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31088 === (2))){
var state_31087__$1 = state_31087;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31087__$1,(4),ch);
} else {
if((state_val_31088 === (3))){
var inst_31085 = (state_31087[(2)]);
var state_31087__$1 = state_31087;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31087__$1,inst_31085);
} else {
if((state_val_31088 === (4))){
var inst_31075 = (state_31087[(7)]);
var inst_31075__$1 = (state_31087[(2)]);
var state_31087__$1 = (function (){var statearr_31090 = state_31087;
(statearr_31090[(7)] = inst_31075__$1);

return statearr_31090;
})();
if(cljs.core.truth_(inst_31075__$1)){
var statearr_31091_31103 = state_31087__$1;
(statearr_31091_31103[(1)] = (5));

} else {
var statearr_31092_31104 = state_31087__$1;
(statearr_31092_31104[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31088 === (5))){
var inst_31075 = (state_31087[(7)]);
var inst_31077 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_31075);
var state_31087__$1 = state_31087;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31087__$1,(8),inst_31077);
} else {
if((state_val_31088 === (6))){
var state_31087__$1 = state_31087;
var statearr_31093_31105 = state_31087__$1;
(statearr_31093_31105[(2)] = null);

(statearr_31093_31105[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31088 === (7))){
var inst_31083 = (state_31087[(2)]);
var state_31087__$1 = state_31087;
var statearr_31094_31106 = state_31087__$1;
(statearr_31094_31106[(2)] = inst_31083);

(statearr_31094_31106[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31088 === (8))){
var inst_31079 = (state_31087[(2)]);
var state_31087__$1 = (function (){var statearr_31095 = state_31087;
(statearr_31095[(8)] = inst_31079);

return statearr_31095;
})();
var statearr_31096_31107 = state_31087__$1;
(statearr_31096_31107[(2)] = null);

(statearr_31096_31107[(1)] = (2));


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
});})(c__26898__auto___31101,ch))
;
return ((function (switch__26808__auto__,c__26898__auto___31101,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__26809__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__26809__auto____0 = (function (){
var statearr_31097 = [null,null,null,null,null,null,null,null,null];
(statearr_31097[(0)] = figwheel$client$heads_up_plugin_$_state_machine__26809__auto__);

(statearr_31097[(1)] = (1));

return statearr_31097;
});
var figwheel$client$heads_up_plugin_$_state_machine__26809__auto____1 = (function (state_31087){
while(true){
var ret_value__26810__auto__ = (function (){try{while(true){
var result__26811__auto__ = switch__26808__auto__.call(null,state_31087);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26811__auto__;
}
break;
}
}catch (e31098){if((e31098 instanceof Object)){
var ex__26812__auto__ = e31098;
var statearr_31099_31108 = state_31087;
(statearr_31099_31108[(5)] = ex__26812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31087);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31098;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31109 = state_31087;
state_31087 = G__31109;
continue;
} else {
return ret_value__26810__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__26809__auto__ = function(state_31087){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__26809__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__26809__auto____1.call(this,state_31087);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__26809__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__26809__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__26809__auto__;
})()
;})(switch__26808__auto__,c__26898__auto___31101,ch))
})();
var state__26900__auto__ = (function (){var statearr_31100 = f__26899__auto__.call(null);
(statearr_31100[(6)] = c__26898__auto___31101);

return statearr_31100;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26900__auto__);
});})(c__26898__auto___31101,ch))
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
var c__26898__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26898__auto__){
return (function (){
var f__26899__auto__ = (function (){var switch__26808__auto__ = ((function (c__26898__auto__){
return (function (state_31115){
var state_val_31116 = (state_31115[(1)]);
if((state_val_31116 === (1))){
var inst_31110 = cljs.core.async.timeout.call(null,(3000));
var state_31115__$1 = state_31115;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31115__$1,(2),inst_31110);
} else {
if((state_val_31116 === (2))){
var inst_31112 = (state_31115[(2)]);
var inst_31113 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_31115__$1 = (function (){var statearr_31117 = state_31115;
(statearr_31117[(7)] = inst_31112);

return statearr_31117;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31115__$1,inst_31113);
} else {
return null;
}
}
});})(c__26898__auto__))
;
return ((function (switch__26808__auto__,c__26898__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__26809__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__26809__auto____0 = (function (){
var statearr_31118 = [null,null,null,null,null,null,null,null];
(statearr_31118[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__26809__auto__);

(statearr_31118[(1)] = (1));

return statearr_31118;
});
var figwheel$client$enforce_project_plugin_$_state_machine__26809__auto____1 = (function (state_31115){
while(true){
var ret_value__26810__auto__ = (function (){try{while(true){
var result__26811__auto__ = switch__26808__auto__.call(null,state_31115);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26811__auto__;
}
break;
}
}catch (e31119){if((e31119 instanceof Object)){
var ex__26812__auto__ = e31119;
var statearr_31120_31122 = state_31115;
(statearr_31120_31122[(5)] = ex__26812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31115);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31119;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31123 = state_31115;
state_31115 = G__31123;
continue;
} else {
return ret_value__26810__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__26809__auto__ = function(state_31115){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__26809__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__26809__auto____1.call(this,state_31115);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__26809__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__26809__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__26809__auto__;
})()
;})(switch__26808__auto__,c__26898__auto__))
})();
var state__26900__auto__ = (function (){var statearr_31121 = f__26899__auto__.call(null);
(statearr_31121[(6)] = c__26898__auto__);

return statearr_31121;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26900__auto__);
});})(c__26898__auto__))
);

return c__26898__auto__;
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
var c__26898__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26898__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__26899__auto__ = (function (){var switch__26808__auto__ = ((function (c__26898__auto__,figwheel_version,temp__5457__auto__){
return (function (state_31130){
var state_val_31131 = (state_31130[(1)]);
if((state_val_31131 === (1))){
var inst_31124 = cljs.core.async.timeout.call(null,(2000));
var state_31130__$1 = state_31130;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31130__$1,(2),inst_31124);
} else {
if((state_val_31131 === (2))){
var inst_31126 = (state_31130[(2)]);
var inst_31127 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_31128 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_31127);
var state_31130__$1 = (function (){var statearr_31132 = state_31130;
(statearr_31132[(7)] = inst_31126);

return statearr_31132;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31130__$1,inst_31128);
} else {
return null;
}
}
});})(c__26898__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__26808__auto__,c__26898__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26809__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26809__auto____0 = (function (){
var statearr_31133 = [null,null,null,null,null,null,null,null];
(statearr_31133[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26809__auto__);

(statearr_31133[(1)] = (1));

return statearr_31133;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26809__auto____1 = (function (state_31130){
while(true){
var ret_value__26810__auto__ = (function (){try{while(true){
var result__26811__auto__ = switch__26808__auto__.call(null,state_31130);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26811__auto__;
}
break;
}
}catch (e31134){if((e31134 instanceof Object)){
var ex__26812__auto__ = e31134;
var statearr_31135_31137 = state_31130;
(statearr_31135_31137[(5)] = ex__26812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31130);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31134;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31138 = state_31130;
state_31130 = G__31138;
continue;
} else {
return ret_value__26810__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26809__auto__ = function(state_31130){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26809__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26809__auto____1.call(this,state_31130);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26809__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26809__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26809__auto__;
})()
;})(switch__26808__auto__,c__26898__auto__,figwheel_version,temp__5457__auto__))
})();
var state__26900__auto__ = (function (){var statearr_31136 = f__26899__auto__.call(null);
(statearr_31136[(6)] = c__26898__auto__);

return statearr_31136;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26900__auto__);
});})(c__26898__auto__,figwheel_version,temp__5457__auto__))
);

return c__26898__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__31139){
var map__31140 = p__31139;
var map__31140__$1 = ((((!((map__31140 == null)))?(((((map__31140.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31140.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31140):map__31140);
var file = cljs.core.get.call(null,map__31140__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__31140__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__31140__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__31142 = "";
var G__31142__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31142),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__31142);
var G__31142__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31142__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__31142__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = line;
if(cljs.core.truth_(and__3911__auto__)){
return column;
} else {
return and__3911__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31142__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__31142__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__31143){
var map__31144 = p__31143;
var map__31144__$1 = ((((!((map__31144 == null)))?(((((map__31144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31144.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31144):map__31144);
var ed = map__31144__$1;
var formatted_exception = cljs.core.get.call(null,map__31144__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__31144__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__31144__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__31146_31150 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__31147_31151 = null;
var count__31148_31152 = (0);
var i__31149_31153 = (0);
while(true){
if((i__31149_31153 < count__31148_31152)){
var msg_31154 = cljs.core._nth.call(null,chunk__31147_31151,i__31149_31153);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31154);


var G__31155 = seq__31146_31150;
var G__31156 = chunk__31147_31151;
var G__31157 = count__31148_31152;
var G__31158 = (i__31149_31153 + (1));
seq__31146_31150 = G__31155;
chunk__31147_31151 = G__31156;
count__31148_31152 = G__31157;
i__31149_31153 = G__31158;
continue;
} else {
var temp__5457__auto___31159 = cljs.core.seq.call(null,seq__31146_31150);
if(temp__5457__auto___31159){
var seq__31146_31160__$1 = temp__5457__auto___31159;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31146_31160__$1)){
var c__4319__auto___31161 = cljs.core.chunk_first.call(null,seq__31146_31160__$1);
var G__31162 = cljs.core.chunk_rest.call(null,seq__31146_31160__$1);
var G__31163 = c__4319__auto___31161;
var G__31164 = cljs.core.count.call(null,c__4319__auto___31161);
var G__31165 = (0);
seq__31146_31150 = G__31162;
chunk__31147_31151 = G__31163;
count__31148_31152 = G__31164;
i__31149_31153 = G__31165;
continue;
} else {
var msg_31166 = cljs.core.first.call(null,seq__31146_31160__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31166);


var G__31167 = cljs.core.next.call(null,seq__31146_31160__$1);
var G__31168 = null;
var G__31169 = (0);
var G__31170 = (0);
seq__31146_31150 = G__31167;
chunk__31147_31151 = G__31168;
count__31148_31152 = G__31169;
i__31149_31153 = G__31170;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__31171){
var map__31172 = p__31171;
var map__31172__$1 = ((((!((map__31172 == null)))?(((((map__31172.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31172.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31172):map__31172);
var w = map__31172__$1;
var message = cljs.core.get.call(null,map__31172__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__31174 = cljs.core.seq.call(null,plugins);
var chunk__31175 = null;
var count__31176 = (0);
var i__31177 = (0);
while(true){
if((i__31177 < count__31176)){
var vec__31178 = cljs.core._nth.call(null,chunk__31175,i__31177);
var k = cljs.core.nth.call(null,vec__31178,(0),null);
var plugin = cljs.core.nth.call(null,vec__31178,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31184 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31174,chunk__31175,count__31176,i__31177,pl_31184,vec__31178,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_31184.call(null,msg_hist);
});})(seq__31174,chunk__31175,count__31176,i__31177,pl_31184,vec__31178,k,plugin))
);
} else {
}


var G__31185 = seq__31174;
var G__31186 = chunk__31175;
var G__31187 = count__31176;
var G__31188 = (i__31177 + (1));
seq__31174 = G__31185;
chunk__31175 = G__31186;
count__31176 = G__31187;
i__31177 = G__31188;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__31174);
if(temp__5457__auto__){
var seq__31174__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31174__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__31174__$1);
var G__31189 = cljs.core.chunk_rest.call(null,seq__31174__$1);
var G__31190 = c__4319__auto__;
var G__31191 = cljs.core.count.call(null,c__4319__auto__);
var G__31192 = (0);
seq__31174 = G__31189;
chunk__31175 = G__31190;
count__31176 = G__31191;
i__31177 = G__31192;
continue;
} else {
var vec__31181 = cljs.core.first.call(null,seq__31174__$1);
var k = cljs.core.nth.call(null,vec__31181,(0),null);
var plugin = cljs.core.nth.call(null,vec__31181,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31193 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31174,chunk__31175,count__31176,i__31177,pl_31193,vec__31181,k,plugin,seq__31174__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_31193.call(null,msg_hist);
});})(seq__31174,chunk__31175,count__31176,i__31177,pl_31193,vec__31181,k,plugin,seq__31174__$1,temp__5457__auto__))
);
} else {
}


var G__31194 = cljs.core.next.call(null,seq__31174__$1);
var G__31195 = null;
var G__31196 = (0);
var G__31197 = (0);
seq__31174 = G__31194;
chunk__31175 = G__31195;
count__31176 = G__31196;
i__31177 = G__31197;
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
var G__31199 = arguments.length;
switch (G__31199) {
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

var seq__31200_31205 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__31201_31206 = null;
var count__31202_31207 = (0);
var i__31203_31208 = (0);
while(true){
if((i__31203_31208 < count__31202_31207)){
var msg_31209 = cljs.core._nth.call(null,chunk__31201_31206,i__31203_31208);
figwheel.client.socket.handle_incoming_message.call(null,msg_31209);


var G__31210 = seq__31200_31205;
var G__31211 = chunk__31201_31206;
var G__31212 = count__31202_31207;
var G__31213 = (i__31203_31208 + (1));
seq__31200_31205 = G__31210;
chunk__31201_31206 = G__31211;
count__31202_31207 = G__31212;
i__31203_31208 = G__31213;
continue;
} else {
var temp__5457__auto___31214 = cljs.core.seq.call(null,seq__31200_31205);
if(temp__5457__auto___31214){
var seq__31200_31215__$1 = temp__5457__auto___31214;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31200_31215__$1)){
var c__4319__auto___31216 = cljs.core.chunk_first.call(null,seq__31200_31215__$1);
var G__31217 = cljs.core.chunk_rest.call(null,seq__31200_31215__$1);
var G__31218 = c__4319__auto___31216;
var G__31219 = cljs.core.count.call(null,c__4319__auto___31216);
var G__31220 = (0);
seq__31200_31205 = G__31217;
chunk__31201_31206 = G__31218;
count__31202_31207 = G__31219;
i__31203_31208 = G__31220;
continue;
} else {
var msg_31221 = cljs.core.first.call(null,seq__31200_31215__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_31221);


var G__31222 = cljs.core.next.call(null,seq__31200_31215__$1);
var G__31223 = null;
var G__31224 = (0);
var G__31225 = (0);
seq__31200_31205 = G__31222;
chunk__31201_31206 = G__31223;
count__31202_31207 = G__31224;
i__31203_31208 = G__31225;
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
var len__4499__auto___31230 = arguments.length;
var i__4500__auto___31231 = (0);
while(true){
if((i__4500__auto___31231 < len__4499__auto___31230)){
args__4502__auto__.push((arguments[i__4500__auto___31231]));

var G__31232 = (i__4500__auto___31231 + (1));
i__4500__auto___31231 = G__31232;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__31227){
var map__31228 = p__31227;
var map__31228__$1 = ((((!((map__31228 == null)))?(((((map__31228.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31228.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31228):map__31228);
var opts = map__31228__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq31226){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31226));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e31233){if((e31233 instanceof Error)){
var e = e31233;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e31233;

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
return (function (p__31234){
var map__31235 = p__31234;
var map__31235__$1 = ((((!((map__31235 == null)))?(((((map__31235.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31235.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31235):map__31235);
var msg_name = cljs.core.get.call(null,map__31235__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1525289330641
