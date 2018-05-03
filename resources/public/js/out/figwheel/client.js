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
}catch (e86722){if((e86722 instanceof Error)){
var e = e86722;
return "Error: Unable to stringify";
} else {
throw e86722;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__86725 = arguments.length;
switch (G__86725) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__86723_SHARP_){
if(typeof p1__86723_SHARP_ === 'string'){
return p1__86723_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__86723_SHARP_);
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
var len__4499__auto___86728 = arguments.length;
var i__4500__auto___86729 = (0);
while(true){
if((i__4500__auto___86729 < len__4499__auto___86728)){
args__4502__auto__.push((arguments[i__4500__auto___86729]));

var G__86730 = (i__4500__auto___86729 + (1));
i__4500__auto___86729 = G__86730;
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
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq86727){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq86727));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___86732 = arguments.length;
var i__4500__auto___86733 = (0);
while(true){
if((i__4500__auto___86733 < len__4499__auto___86732)){
args__4502__auto__.push((arguments[i__4500__auto___86733]));

var G__86734 = (i__4500__auto___86733 + (1));
i__4500__auto___86733 = G__86734;
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
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq86731){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq86731));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__86735){
var map__86736 = p__86735;
var map__86736__$1 = ((((!((map__86736 == null)))?(((((map__86736.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86736.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86736):map__86736);
var message = cljs.core.get.call(null,map__86736__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__86736__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__27974__auto___86815 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27974__auto___86815,ch){
return (function (){
var f__27975__auto__ = (function (){var switch__27884__auto__ = ((function (c__27974__auto___86815,ch){
return (function (state_86787){
var state_val_86788 = (state_86787[(1)]);
if((state_val_86788 === (7))){
var inst_86783 = (state_86787[(2)]);
var state_86787__$1 = state_86787;
var statearr_86789_86816 = state_86787__$1;
(statearr_86789_86816[(2)] = inst_86783);

(statearr_86789_86816[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86788 === (1))){
var state_86787__$1 = state_86787;
var statearr_86790_86817 = state_86787__$1;
(statearr_86790_86817[(2)] = null);

(statearr_86790_86817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86788 === (4))){
var inst_86740 = (state_86787[(7)]);
var inst_86740__$1 = (state_86787[(2)]);
var state_86787__$1 = (function (){var statearr_86791 = state_86787;
(statearr_86791[(7)] = inst_86740__$1);

return statearr_86791;
})();
if(cljs.core.truth_(inst_86740__$1)){
var statearr_86792_86818 = state_86787__$1;
(statearr_86792_86818[(1)] = (5));

} else {
var statearr_86793_86819 = state_86787__$1;
(statearr_86793_86819[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86788 === (15))){
var inst_86747 = (state_86787[(8)]);
var inst_86762 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_86747);
var inst_86763 = cljs.core.first.call(null,inst_86762);
var inst_86764 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_86763);
var inst_86765 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_86764)].join('');
var inst_86766 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_86765);
var state_86787__$1 = state_86787;
var statearr_86794_86820 = state_86787__$1;
(statearr_86794_86820[(2)] = inst_86766);

(statearr_86794_86820[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86788 === (13))){
var inst_86771 = (state_86787[(2)]);
var state_86787__$1 = state_86787;
var statearr_86795_86821 = state_86787__$1;
(statearr_86795_86821[(2)] = inst_86771);

(statearr_86795_86821[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86788 === (6))){
var state_86787__$1 = state_86787;
var statearr_86796_86822 = state_86787__$1;
(statearr_86796_86822[(2)] = null);

(statearr_86796_86822[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86788 === (17))){
var inst_86769 = (state_86787[(2)]);
var state_86787__$1 = state_86787;
var statearr_86797_86823 = state_86787__$1;
(statearr_86797_86823[(2)] = inst_86769);

(statearr_86797_86823[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86788 === (3))){
var inst_86785 = (state_86787[(2)]);
var state_86787__$1 = state_86787;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_86787__$1,inst_86785);
} else {
if((state_val_86788 === (12))){
var inst_86746 = (state_86787[(9)]);
var inst_86760 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_86746,opts);
var state_86787__$1 = state_86787;
if(cljs.core.truth_(inst_86760)){
var statearr_86798_86824 = state_86787__$1;
(statearr_86798_86824[(1)] = (15));

} else {
var statearr_86799_86825 = state_86787__$1;
(statearr_86799_86825[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86788 === (2))){
var state_86787__$1 = state_86787;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_86787__$1,(4),ch);
} else {
if((state_val_86788 === (11))){
var inst_86747 = (state_86787[(8)]);
var inst_86752 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_86753 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_86747);
var inst_86754 = cljs.core.async.timeout.call(null,(1000));
var inst_86755 = [inst_86753,inst_86754];
var inst_86756 = (new cljs.core.PersistentVector(null,2,(5),inst_86752,inst_86755,null));
var state_86787__$1 = state_86787;
return cljs.core.async.ioc_alts_BANG_.call(null,state_86787__$1,(14),inst_86756);
} else {
if((state_val_86788 === (9))){
var inst_86747 = (state_86787[(8)]);
var inst_86773 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_86774 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_86747);
var inst_86775 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_86774);
var inst_86776 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_86775)].join('');
var inst_86777 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_86776);
var state_86787__$1 = (function (){var statearr_86800 = state_86787;
(statearr_86800[(10)] = inst_86773);

return statearr_86800;
})();
var statearr_86801_86826 = state_86787__$1;
(statearr_86801_86826[(2)] = inst_86777);

(statearr_86801_86826[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86788 === (5))){
var inst_86740 = (state_86787[(7)]);
var inst_86742 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_86743 = (new cljs.core.PersistentArrayMap(null,2,inst_86742,null));
var inst_86744 = (new cljs.core.PersistentHashSet(null,inst_86743,null));
var inst_86745 = figwheel.client.focus_msgs.call(null,inst_86744,inst_86740);
var inst_86746 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_86745);
var inst_86747 = cljs.core.first.call(null,inst_86745);
var inst_86748 = figwheel.client.autoload_QMARK_.call(null);
var state_86787__$1 = (function (){var statearr_86802 = state_86787;
(statearr_86802[(9)] = inst_86746);

(statearr_86802[(8)] = inst_86747);

return statearr_86802;
})();
if(cljs.core.truth_(inst_86748)){
var statearr_86803_86827 = state_86787__$1;
(statearr_86803_86827[(1)] = (8));

} else {
var statearr_86804_86828 = state_86787__$1;
(statearr_86804_86828[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86788 === (14))){
var inst_86758 = (state_86787[(2)]);
var state_86787__$1 = state_86787;
var statearr_86805_86829 = state_86787__$1;
(statearr_86805_86829[(2)] = inst_86758);

(statearr_86805_86829[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86788 === (16))){
var state_86787__$1 = state_86787;
var statearr_86806_86830 = state_86787__$1;
(statearr_86806_86830[(2)] = null);

(statearr_86806_86830[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86788 === (10))){
var inst_86779 = (state_86787[(2)]);
var state_86787__$1 = (function (){var statearr_86807 = state_86787;
(statearr_86807[(11)] = inst_86779);

return statearr_86807;
})();
var statearr_86808_86831 = state_86787__$1;
(statearr_86808_86831[(2)] = null);

(statearr_86808_86831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86788 === (8))){
var inst_86746 = (state_86787[(9)]);
var inst_86750 = figwheel.client.reload_file_state_QMARK_.call(null,inst_86746,opts);
var state_86787__$1 = state_86787;
if(cljs.core.truth_(inst_86750)){
var statearr_86809_86832 = state_86787__$1;
(statearr_86809_86832[(1)] = (11));

} else {
var statearr_86810_86833 = state_86787__$1;
(statearr_86810_86833[(1)] = (12));

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
});})(c__27974__auto___86815,ch))
;
return ((function (switch__27884__auto__,c__27974__auto___86815,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__27885__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__27885__auto____0 = (function (){
var statearr_86811 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_86811[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__27885__auto__);

(statearr_86811[(1)] = (1));

return statearr_86811;
});
var figwheel$client$file_reloader_plugin_$_state_machine__27885__auto____1 = (function (state_86787){
while(true){
var ret_value__27886__auto__ = (function (){try{while(true){
var result__27887__auto__ = switch__27884__auto__.call(null,state_86787);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27887__auto__;
}
break;
}
}catch (e86812){if((e86812 instanceof Object)){
var ex__27888__auto__ = e86812;
var statearr_86813_86834 = state_86787;
(statearr_86813_86834[(5)] = ex__27888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_86787);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e86812;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__86835 = state_86787;
state_86787 = G__86835;
continue;
} else {
return ret_value__27886__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__27885__auto__ = function(state_86787){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__27885__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__27885__auto____1.call(this,state_86787);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__27885__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__27885__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__27885__auto__;
})()
;})(switch__27884__auto__,c__27974__auto___86815,ch))
})();
var state__27976__auto__ = (function (){var statearr_86814 = f__27975__auto__.call(null);
(statearr_86814[(6)] = c__27974__auto___86815);

return statearr_86814;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27976__auto__);
});})(c__27974__auto___86815,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__86836_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__86836_SHARP_));
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
var base_path_86840 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_86840){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_86838 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_86839 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_86838,_STAR_print_fn_STAR_86839,sb,base_path_86840){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_86838,_STAR_print_fn_STAR_86839,sb,base_path_86840))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_86839;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_86838;
}}catch (e86837){if((e86837 instanceof Error)){
var e = e86837;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_86840], null));
} else {
var e = e86837;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_86840))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__86841){
var map__86842 = p__86841;
var map__86842__$1 = ((((!((map__86842 == null)))?(((((map__86842.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86842.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86842):map__86842);
var opts = map__86842__$1;
var build_id = cljs.core.get.call(null,map__86842__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__86842,map__86842__$1,opts,build_id){
return (function (p__86844){
var vec__86845 = p__86844;
var seq__86846 = cljs.core.seq.call(null,vec__86845);
var first__86847 = cljs.core.first.call(null,seq__86846);
var seq__86846__$1 = cljs.core.next.call(null,seq__86846);
var map__86848 = first__86847;
var map__86848__$1 = ((((!((map__86848 == null)))?(((((map__86848.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86848.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86848):map__86848);
var msg = map__86848__$1;
var msg_name = cljs.core.get.call(null,map__86848__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__86846__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__86845,seq__86846,first__86847,seq__86846__$1,map__86848,map__86848__$1,msg,msg_name,_,map__86842,map__86842__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__86845,seq__86846,first__86847,seq__86846__$1,map__86848,map__86848__$1,msg,msg_name,_,map__86842,map__86842__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__86842,map__86842__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__86850){
var vec__86851 = p__86850;
var seq__86852 = cljs.core.seq.call(null,vec__86851);
var first__86853 = cljs.core.first.call(null,seq__86852);
var seq__86852__$1 = cljs.core.next.call(null,seq__86852);
var map__86854 = first__86853;
var map__86854__$1 = ((((!((map__86854 == null)))?(((((map__86854.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86854.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86854):map__86854);
var msg = map__86854__$1;
var msg_name = cljs.core.get.call(null,map__86854__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__86852__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__86856){
var map__86857 = p__86856;
var map__86857__$1 = ((((!((map__86857 == null)))?(((((map__86857.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86857.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86857):map__86857);
var on_compile_warning = cljs.core.get.call(null,map__86857__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__86857__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__86857,map__86857__$1,on_compile_warning,on_compile_fail){
return (function (p__86859){
var vec__86860 = p__86859;
var seq__86861 = cljs.core.seq.call(null,vec__86860);
var first__86862 = cljs.core.first.call(null,seq__86861);
var seq__86861__$1 = cljs.core.next.call(null,seq__86861);
var map__86863 = first__86862;
var map__86863__$1 = ((((!((map__86863 == null)))?(((((map__86863.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86863.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86863):map__86863);
var msg = map__86863__$1;
var msg_name = cljs.core.get.call(null,map__86863__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__86861__$1;
var pred__86865 = cljs.core._EQ_;
var expr__86866 = msg_name;
if(cljs.core.truth_(pred__86865.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__86866))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__86865.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__86866))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__86857,map__86857__$1,on_compile_warning,on_compile_fail))
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
return (function (state_86955){
var state_val_86956 = (state_86955[(1)]);
if((state_val_86956 === (7))){
var inst_86875 = (state_86955[(2)]);
var state_86955__$1 = state_86955;
if(cljs.core.truth_(inst_86875)){
var statearr_86957_87004 = state_86955__$1;
(statearr_86957_87004[(1)] = (8));

} else {
var statearr_86958_87005 = state_86955__$1;
(statearr_86958_87005[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86956 === (20))){
var inst_86949 = (state_86955[(2)]);
var state_86955__$1 = state_86955;
var statearr_86959_87006 = state_86955__$1;
(statearr_86959_87006[(2)] = inst_86949);

(statearr_86959_87006[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86956 === (27))){
var inst_86945 = (state_86955[(2)]);
var state_86955__$1 = state_86955;
var statearr_86960_87007 = state_86955__$1;
(statearr_86960_87007[(2)] = inst_86945);

(statearr_86960_87007[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86956 === (1))){
var inst_86868 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_86955__$1 = state_86955;
if(cljs.core.truth_(inst_86868)){
var statearr_86961_87008 = state_86955__$1;
(statearr_86961_87008[(1)] = (2));

} else {
var statearr_86962_87009 = state_86955__$1;
(statearr_86962_87009[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86956 === (24))){
var inst_86947 = (state_86955[(2)]);
var state_86955__$1 = state_86955;
var statearr_86963_87010 = state_86955__$1;
(statearr_86963_87010[(2)] = inst_86947);

(statearr_86963_87010[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86956 === (4))){
var inst_86953 = (state_86955[(2)]);
var state_86955__$1 = state_86955;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_86955__$1,inst_86953);
} else {
if((state_val_86956 === (15))){
var inst_86951 = (state_86955[(2)]);
var state_86955__$1 = state_86955;
var statearr_86964_87011 = state_86955__$1;
(statearr_86964_87011[(2)] = inst_86951);

(statearr_86964_87011[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86956 === (21))){
var inst_86904 = (state_86955[(2)]);
var inst_86905 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_86906 = figwheel.client.auto_jump_to_error.call(null,opts,inst_86905);
var state_86955__$1 = (function (){var statearr_86965 = state_86955;
(statearr_86965[(7)] = inst_86904);

return statearr_86965;
})();
var statearr_86966_87012 = state_86955__$1;
(statearr_86966_87012[(2)] = inst_86906);

(statearr_86966_87012[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86956 === (31))){
var inst_86934 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_86955__$1 = state_86955;
if(cljs.core.truth_(inst_86934)){
var statearr_86967_87013 = state_86955__$1;
(statearr_86967_87013[(1)] = (34));

} else {
var statearr_86968_87014 = state_86955__$1;
(statearr_86968_87014[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86956 === (32))){
var inst_86943 = (state_86955[(2)]);
var state_86955__$1 = state_86955;
var statearr_86969_87015 = state_86955__$1;
(statearr_86969_87015[(2)] = inst_86943);

(statearr_86969_87015[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86956 === (33))){
var inst_86930 = (state_86955[(2)]);
var inst_86931 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_86932 = figwheel.client.auto_jump_to_error.call(null,opts,inst_86931);
var state_86955__$1 = (function (){var statearr_86970 = state_86955;
(statearr_86970[(8)] = inst_86930);

return statearr_86970;
})();
var statearr_86971_87016 = state_86955__$1;
(statearr_86971_87016[(2)] = inst_86932);

(statearr_86971_87016[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86956 === (13))){
var inst_86889 = figwheel.client.heads_up.clear.call(null);
var state_86955__$1 = state_86955;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_86955__$1,(16),inst_86889);
} else {
if((state_val_86956 === (22))){
var inst_86910 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_86911 = figwheel.client.heads_up.append_warning_message.call(null,inst_86910);
var state_86955__$1 = state_86955;
var statearr_86972_87017 = state_86955__$1;
(statearr_86972_87017[(2)] = inst_86911);

(statearr_86972_87017[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86956 === (36))){
var inst_86941 = (state_86955[(2)]);
var state_86955__$1 = state_86955;
var statearr_86973_87018 = state_86955__$1;
(statearr_86973_87018[(2)] = inst_86941);

(statearr_86973_87018[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86956 === (29))){
var inst_86921 = (state_86955[(2)]);
var inst_86922 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_86923 = figwheel.client.auto_jump_to_error.call(null,opts,inst_86922);
var state_86955__$1 = (function (){var statearr_86974 = state_86955;
(statearr_86974[(9)] = inst_86921);

return statearr_86974;
})();
var statearr_86975_87019 = state_86955__$1;
(statearr_86975_87019[(2)] = inst_86923);

(statearr_86975_87019[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86956 === (6))){
var inst_86870 = (state_86955[(10)]);
var state_86955__$1 = state_86955;
var statearr_86976_87020 = state_86955__$1;
(statearr_86976_87020[(2)] = inst_86870);

(statearr_86976_87020[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86956 === (28))){
var inst_86917 = (state_86955[(2)]);
var inst_86918 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_86919 = figwheel.client.heads_up.display_warning.call(null,inst_86918);
var state_86955__$1 = (function (){var statearr_86977 = state_86955;
(statearr_86977[(11)] = inst_86917);

return statearr_86977;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_86955__$1,(29),inst_86919);
} else {
if((state_val_86956 === (25))){
var inst_86915 = figwheel.client.heads_up.clear.call(null);
var state_86955__$1 = state_86955;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_86955__$1,(28),inst_86915);
} else {
if((state_val_86956 === (34))){
var inst_86936 = figwheel.client.heads_up.flash_loaded.call(null);
var state_86955__$1 = state_86955;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_86955__$1,(37),inst_86936);
} else {
if((state_val_86956 === (17))){
var inst_86895 = (state_86955[(2)]);
var inst_86896 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_86897 = figwheel.client.auto_jump_to_error.call(null,opts,inst_86896);
var state_86955__$1 = (function (){var statearr_86978 = state_86955;
(statearr_86978[(12)] = inst_86895);

return statearr_86978;
})();
var statearr_86979_87021 = state_86955__$1;
(statearr_86979_87021[(2)] = inst_86897);

(statearr_86979_87021[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86956 === (3))){
var inst_86887 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_86955__$1 = state_86955;
if(cljs.core.truth_(inst_86887)){
var statearr_86980_87022 = state_86955__$1;
(statearr_86980_87022[(1)] = (13));

} else {
var statearr_86981_87023 = state_86955__$1;
(statearr_86981_87023[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86956 === (12))){
var inst_86883 = (state_86955[(2)]);
var state_86955__$1 = state_86955;
var statearr_86982_87024 = state_86955__$1;
(statearr_86982_87024[(2)] = inst_86883);

(statearr_86982_87024[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86956 === (2))){
var inst_86870 = (state_86955[(10)]);
var inst_86870__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_86955__$1 = (function (){var statearr_86983 = state_86955;
(statearr_86983[(10)] = inst_86870__$1);

return statearr_86983;
})();
if(cljs.core.truth_(inst_86870__$1)){
var statearr_86984_87025 = state_86955__$1;
(statearr_86984_87025[(1)] = (5));

} else {
var statearr_86985_87026 = state_86955__$1;
(statearr_86985_87026[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86956 === (23))){
var inst_86913 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_86955__$1 = state_86955;
if(cljs.core.truth_(inst_86913)){
var statearr_86986_87027 = state_86955__$1;
(statearr_86986_87027[(1)] = (25));

} else {
var statearr_86987_87028 = state_86955__$1;
(statearr_86987_87028[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86956 === (35))){
var state_86955__$1 = state_86955;
var statearr_86988_87029 = state_86955__$1;
(statearr_86988_87029[(2)] = null);

(statearr_86988_87029[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86956 === (19))){
var inst_86908 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_86955__$1 = state_86955;
if(cljs.core.truth_(inst_86908)){
var statearr_86989_87030 = state_86955__$1;
(statearr_86989_87030[(1)] = (22));

} else {
var statearr_86990_87031 = state_86955__$1;
(statearr_86990_87031[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86956 === (11))){
var inst_86879 = (state_86955[(2)]);
var state_86955__$1 = state_86955;
var statearr_86991_87032 = state_86955__$1;
(statearr_86991_87032[(2)] = inst_86879);

(statearr_86991_87032[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86956 === (9))){
var inst_86881 = figwheel.client.heads_up.clear.call(null);
var state_86955__$1 = state_86955;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_86955__$1,(12),inst_86881);
} else {
if((state_val_86956 === (5))){
var inst_86872 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_86955__$1 = state_86955;
var statearr_86992_87033 = state_86955__$1;
(statearr_86992_87033[(2)] = inst_86872);

(statearr_86992_87033[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86956 === (14))){
var inst_86899 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_86955__$1 = state_86955;
if(cljs.core.truth_(inst_86899)){
var statearr_86993_87034 = state_86955__$1;
(statearr_86993_87034[(1)] = (18));

} else {
var statearr_86994_87035 = state_86955__$1;
(statearr_86994_87035[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86956 === (26))){
var inst_86925 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_86955__$1 = state_86955;
if(cljs.core.truth_(inst_86925)){
var statearr_86995_87036 = state_86955__$1;
(statearr_86995_87036[(1)] = (30));

} else {
var statearr_86996_87037 = state_86955__$1;
(statearr_86996_87037[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86956 === (16))){
var inst_86891 = (state_86955[(2)]);
var inst_86892 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_86893 = figwheel.client.heads_up.display_exception.call(null,inst_86892);
var state_86955__$1 = (function (){var statearr_86997 = state_86955;
(statearr_86997[(13)] = inst_86891);

return statearr_86997;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_86955__$1,(17),inst_86893);
} else {
if((state_val_86956 === (30))){
var inst_86927 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_86928 = figwheel.client.heads_up.display_warning.call(null,inst_86927);
var state_86955__$1 = state_86955;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_86955__$1,(33),inst_86928);
} else {
if((state_val_86956 === (10))){
var inst_86885 = (state_86955[(2)]);
var state_86955__$1 = state_86955;
var statearr_86998_87038 = state_86955__$1;
(statearr_86998_87038[(2)] = inst_86885);

(statearr_86998_87038[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86956 === (18))){
var inst_86901 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_86902 = figwheel.client.heads_up.display_exception.call(null,inst_86901);
var state_86955__$1 = state_86955;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_86955__$1,(21),inst_86902);
} else {
if((state_val_86956 === (37))){
var inst_86938 = (state_86955[(2)]);
var state_86955__$1 = state_86955;
var statearr_86999_87039 = state_86955__$1;
(statearr_86999_87039[(2)] = inst_86938);

(statearr_86999_87039[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_86956 === (8))){
var inst_86877 = figwheel.client.heads_up.flash_loaded.call(null);
var state_86955__$1 = state_86955;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_86955__$1,(11),inst_86877);
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
var statearr_87000 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_87000[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27885__auto__);

(statearr_87000[(1)] = (1));

return statearr_87000;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27885__auto____1 = (function (state_86955){
while(true){
var ret_value__27886__auto__ = (function (){try{while(true){
var result__27887__auto__ = switch__27884__auto__.call(null,state_86955);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27887__auto__;
}
break;
}
}catch (e87001){if((e87001 instanceof Object)){
var ex__27888__auto__ = e87001;
var statearr_87002_87040 = state_86955;
(statearr_87002_87040[(5)] = ex__27888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_86955);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e87001;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__87041 = state_86955;
state_86955 = G__87041;
continue;
} else {
return ret_value__27886__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27885__auto__ = function(state_86955){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27885__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27885__auto____1.call(this,state_86955);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27885__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27885__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27885__auto__;
})()
;})(switch__27884__auto__,c__27974__auto__,msg_hist,msg_names,msg))
})();
var state__27976__auto__ = (function (){var statearr_87003 = f__27975__auto__.call(null);
(statearr_87003[(6)] = c__27974__auto__);

return statearr_87003;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27976__auto__);
});})(c__27974__auto__,msg_hist,msg_names,msg))
);

return c__27974__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__27974__auto___87070 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27974__auto___87070,ch){
return (function (){
var f__27975__auto__ = (function (){var switch__27884__auto__ = ((function (c__27974__auto___87070,ch){
return (function (state_87056){
var state_val_87057 = (state_87056[(1)]);
if((state_val_87057 === (1))){
var state_87056__$1 = state_87056;
var statearr_87058_87071 = state_87056__$1;
(statearr_87058_87071[(2)] = null);

(statearr_87058_87071[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87057 === (2))){
var state_87056__$1 = state_87056;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_87056__$1,(4),ch);
} else {
if((state_val_87057 === (3))){
var inst_87054 = (state_87056[(2)]);
var state_87056__$1 = state_87056;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_87056__$1,inst_87054);
} else {
if((state_val_87057 === (4))){
var inst_87044 = (state_87056[(7)]);
var inst_87044__$1 = (state_87056[(2)]);
var state_87056__$1 = (function (){var statearr_87059 = state_87056;
(statearr_87059[(7)] = inst_87044__$1);

return statearr_87059;
})();
if(cljs.core.truth_(inst_87044__$1)){
var statearr_87060_87072 = state_87056__$1;
(statearr_87060_87072[(1)] = (5));

} else {
var statearr_87061_87073 = state_87056__$1;
(statearr_87061_87073[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87057 === (5))){
var inst_87044 = (state_87056[(7)]);
var inst_87046 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_87044);
var state_87056__$1 = state_87056;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_87056__$1,(8),inst_87046);
} else {
if((state_val_87057 === (6))){
var state_87056__$1 = state_87056;
var statearr_87062_87074 = state_87056__$1;
(statearr_87062_87074[(2)] = null);

(statearr_87062_87074[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87057 === (7))){
var inst_87052 = (state_87056[(2)]);
var state_87056__$1 = state_87056;
var statearr_87063_87075 = state_87056__$1;
(statearr_87063_87075[(2)] = inst_87052);

(statearr_87063_87075[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_87057 === (8))){
var inst_87048 = (state_87056[(2)]);
var state_87056__$1 = (function (){var statearr_87064 = state_87056;
(statearr_87064[(8)] = inst_87048);

return statearr_87064;
})();
var statearr_87065_87076 = state_87056__$1;
(statearr_87065_87076[(2)] = null);

(statearr_87065_87076[(1)] = (2));


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
});})(c__27974__auto___87070,ch))
;
return ((function (switch__27884__auto__,c__27974__auto___87070,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__27885__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__27885__auto____0 = (function (){
var statearr_87066 = [null,null,null,null,null,null,null,null,null];
(statearr_87066[(0)] = figwheel$client$heads_up_plugin_$_state_machine__27885__auto__);

(statearr_87066[(1)] = (1));

return statearr_87066;
});
var figwheel$client$heads_up_plugin_$_state_machine__27885__auto____1 = (function (state_87056){
while(true){
var ret_value__27886__auto__ = (function (){try{while(true){
var result__27887__auto__ = switch__27884__auto__.call(null,state_87056);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27887__auto__;
}
break;
}
}catch (e87067){if((e87067 instanceof Object)){
var ex__27888__auto__ = e87067;
var statearr_87068_87077 = state_87056;
(statearr_87068_87077[(5)] = ex__27888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_87056);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e87067;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__87078 = state_87056;
state_87056 = G__87078;
continue;
} else {
return ret_value__27886__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__27885__auto__ = function(state_87056){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__27885__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__27885__auto____1.call(this,state_87056);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__27885__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__27885__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__27885__auto__;
})()
;})(switch__27884__auto__,c__27974__auto___87070,ch))
})();
var state__27976__auto__ = (function (){var statearr_87069 = f__27975__auto__.call(null);
(statearr_87069[(6)] = c__27974__auto___87070);

return statearr_87069;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27976__auto__);
});})(c__27974__auto___87070,ch))
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
return (function (state_87084){
var state_val_87085 = (state_87084[(1)]);
if((state_val_87085 === (1))){
var inst_87079 = cljs.core.async.timeout.call(null,(3000));
var state_87084__$1 = state_87084;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_87084__$1,(2),inst_87079);
} else {
if((state_val_87085 === (2))){
var inst_87081 = (state_87084[(2)]);
var inst_87082 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_87084__$1 = (function (){var statearr_87086 = state_87084;
(statearr_87086[(7)] = inst_87081);

return statearr_87086;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_87084__$1,inst_87082);
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
var statearr_87087 = [null,null,null,null,null,null,null,null];
(statearr_87087[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__27885__auto__);

(statearr_87087[(1)] = (1));

return statearr_87087;
});
var figwheel$client$enforce_project_plugin_$_state_machine__27885__auto____1 = (function (state_87084){
while(true){
var ret_value__27886__auto__ = (function (){try{while(true){
var result__27887__auto__ = switch__27884__auto__.call(null,state_87084);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27887__auto__;
}
break;
}
}catch (e87088){if((e87088 instanceof Object)){
var ex__27888__auto__ = e87088;
var statearr_87089_87091 = state_87084;
(statearr_87089_87091[(5)] = ex__27888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_87084);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e87088;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__87092 = state_87084;
state_87084 = G__87092;
continue;
} else {
return ret_value__27886__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__27885__auto__ = function(state_87084){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__27885__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__27885__auto____1.call(this,state_87084);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__27885__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__27885__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__27885__auto__;
})()
;})(switch__27884__auto__,c__27974__auto__))
})();
var state__27976__auto__ = (function (){var statearr_87090 = f__27975__auto__.call(null);
(statearr_87090[(6)] = c__27974__auto__);

return statearr_87090;
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
return (function (state_87099){
var state_val_87100 = (state_87099[(1)]);
if((state_val_87100 === (1))){
var inst_87093 = cljs.core.async.timeout.call(null,(2000));
var state_87099__$1 = state_87099;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_87099__$1,(2),inst_87093);
} else {
if((state_val_87100 === (2))){
var inst_87095 = (state_87099[(2)]);
var inst_87096 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_87097 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_87096);
var state_87099__$1 = (function (){var statearr_87101 = state_87099;
(statearr_87101[(7)] = inst_87095);

return statearr_87101;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_87099__$1,inst_87097);
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
var statearr_87102 = [null,null,null,null,null,null,null,null];
(statearr_87102[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27885__auto__);

(statearr_87102[(1)] = (1));

return statearr_87102;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27885__auto____1 = (function (state_87099){
while(true){
var ret_value__27886__auto__ = (function (){try{while(true){
var result__27887__auto__ = switch__27884__auto__.call(null,state_87099);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27887__auto__;
}
break;
}
}catch (e87103){if((e87103 instanceof Object)){
var ex__27888__auto__ = e87103;
var statearr_87104_87106 = state_87099;
(statearr_87104_87106[(5)] = ex__27888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_87099);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e87103;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__87107 = state_87099;
state_87099 = G__87107;
continue;
} else {
return ret_value__27886__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27885__auto__ = function(state_87099){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27885__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27885__auto____1.call(this,state_87099);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27885__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27885__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27885__auto__;
})()
;})(switch__27884__auto__,c__27974__auto__,figwheel_version,temp__5457__auto__))
})();
var state__27976__auto__ = (function (){var statearr_87105 = f__27975__auto__.call(null);
(statearr_87105[(6)] = c__27974__auto__);

return statearr_87105;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__87108){
var map__87109 = p__87108;
var map__87109__$1 = ((((!((map__87109 == null)))?(((((map__87109.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87109.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__87109):map__87109);
var file = cljs.core.get.call(null,map__87109__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__87109__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__87109__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__87111 = "";
var G__87111__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__87111),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__87111);
var G__87111__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__87111__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__87111__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = line;
if(cljs.core.truth_(and__3911__auto__)){
return column;
} else {
return and__3911__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__87111__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__87111__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__87112){
var map__87113 = p__87112;
var map__87113__$1 = ((((!((map__87113 == null)))?(((((map__87113.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87113.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__87113):map__87113);
var ed = map__87113__$1;
var formatted_exception = cljs.core.get.call(null,map__87113__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__87113__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__87113__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__87115_87119 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__87116_87120 = null;
var count__87117_87121 = (0);
var i__87118_87122 = (0);
while(true){
if((i__87118_87122 < count__87117_87121)){
var msg_87123 = cljs.core._nth.call(null,chunk__87116_87120,i__87118_87122);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_87123);


var G__87124 = seq__87115_87119;
var G__87125 = chunk__87116_87120;
var G__87126 = count__87117_87121;
var G__87127 = (i__87118_87122 + (1));
seq__87115_87119 = G__87124;
chunk__87116_87120 = G__87125;
count__87117_87121 = G__87126;
i__87118_87122 = G__87127;
continue;
} else {
var temp__5457__auto___87128 = cljs.core.seq.call(null,seq__87115_87119);
if(temp__5457__auto___87128){
var seq__87115_87129__$1 = temp__5457__auto___87128;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__87115_87129__$1)){
var c__4319__auto___87130 = cljs.core.chunk_first.call(null,seq__87115_87129__$1);
var G__87131 = cljs.core.chunk_rest.call(null,seq__87115_87129__$1);
var G__87132 = c__4319__auto___87130;
var G__87133 = cljs.core.count.call(null,c__4319__auto___87130);
var G__87134 = (0);
seq__87115_87119 = G__87131;
chunk__87116_87120 = G__87132;
count__87117_87121 = G__87133;
i__87118_87122 = G__87134;
continue;
} else {
var msg_87135 = cljs.core.first.call(null,seq__87115_87129__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_87135);


var G__87136 = cljs.core.next.call(null,seq__87115_87129__$1);
var G__87137 = null;
var G__87138 = (0);
var G__87139 = (0);
seq__87115_87119 = G__87136;
chunk__87116_87120 = G__87137;
count__87117_87121 = G__87138;
i__87118_87122 = G__87139;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__87140){
var map__87141 = p__87140;
var map__87141__$1 = ((((!((map__87141 == null)))?(((((map__87141.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87141.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__87141):map__87141);
var w = map__87141__$1;
var message = cljs.core.get.call(null,map__87141__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__87143 = cljs.core.seq.call(null,plugins);
var chunk__87144 = null;
var count__87145 = (0);
var i__87146 = (0);
while(true){
if((i__87146 < count__87145)){
var vec__87147 = cljs.core._nth.call(null,chunk__87144,i__87146);
var k = cljs.core.nth.call(null,vec__87147,(0),null);
var plugin = cljs.core.nth.call(null,vec__87147,(1),null);
if(cljs.core.truth_(plugin)){
var pl_87153 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__87143,chunk__87144,count__87145,i__87146,pl_87153,vec__87147,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_87153.call(null,msg_hist);
});})(seq__87143,chunk__87144,count__87145,i__87146,pl_87153,vec__87147,k,plugin))
);
} else {
}


var G__87154 = seq__87143;
var G__87155 = chunk__87144;
var G__87156 = count__87145;
var G__87157 = (i__87146 + (1));
seq__87143 = G__87154;
chunk__87144 = G__87155;
count__87145 = G__87156;
i__87146 = G__87157;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__87143);
if(temp__5457__auto__){
var seq__87143__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__87143__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__87143__$1);
var G__87158 = cljs.core.chunk_rest.call(null,seq__87143__$1);
var G__87159 = c__4319__auto__;
var G__87160 = cljs.core.count.call(null,c__4319__auto__);
var G__87161 = (0);
seq__87143 = G__87158;
chunk__87144 = G__87159;
count__87145 = G__87160;
i__87146 = G__87161;
continue;
} else {
var vec__87150 = cljs.core.first.call(null,seq__87143__$1);
var k = cljs.core.nth.call(null,vec__87150,(0),null);
var plugin = cljs.core.nth.call(null,vec__87150,(1),null);
if(cljs.core.truth_(plugin)){
var pl_87162 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__87143,chunk__87144,count__87145,i__87146,pl_87162,vec__87150,k,plugin,seq__87143__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_87162.call(null,msg_hist);
});})(seq__87143,chunk__87144,count__87145,i__87146,pl_87162,vec__87150,k,plugin,seq__87143__$1,temp__5457__auto__))
);
} else {
}


var G__87163 = cljs.core.next.call(null,seq__87143__$1);
var G__87164 = null;
var G__87165 = (0);
var G__87166 = (0);
seq__87143 = G__87163;
chunk__87144 = G__87164;
count__87145 = G__87165;
i__87146 = G__87166;
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
var G__87168 = arguments.length;
switch (G__87168) {
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

var seq__87169_87174 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__87170_87175 = null;
var count__87171_87176 = (0);
var i__87172_87177 = (0);
while(true){
if((i__87172_87177 < count__87171_87176)){
var msg_87178 = cljs.core._nth.call(null,chunk__87170_87175,i__87172_87177);
figwheel.client.socket.handle_incoming_message.call(null,msg_87178);


var G__87179 = seq__87169_87174;
var G__87180 = chunk__87170_87175;
var G__87181 = count__87171_87176;
var G__87182 = (i__87172_87177 + (1));
seq__87169_87174 = G__87179;
chunk__87170_87175 = G__87180;
count__87171_87176 = G__87181;
i__87172_87177 = G__87182;
continue;
} else {
var temp__5457__auto___87183 = cljs.core.seq.call(null,seq__87169_87174);
if(temp__5457__auto___87183){
var seq__87169_87184__$1 = temp__5457__auto___87183;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__87169_87184__$1)){
var c__4319__auto___87185 = cljs.core.chunk_first.call(null,seq__87169_87184__$1);
var G__87186 = cljs.core.chunk_rest.call(null,seq__87169_87184__$1);
var G__87187 = c__4319__auto___87185;
var G__87188 = cljs.core.count.call(null,c__4319__auto___87185);
var G__87189 = (0);
seq__87169_87174 = G__87186;
chunk__87170_87175 = G__87187;
count__87171_87176 = G__87188;
i__87172_87177 = G__87189;
continue;
} else {
var msg_87190 = cljs.core.first.call(null,seq__87169_87184__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_87190);


var G__87191 = cljs.core.next.call(null,seq__87169_87184__$1);
var G__87192 = null;
var G__87193 = (0);
var G__87194 = (0);
seq__87169_87174 = G__87191;
chunk__87170_87175 = G__87192;
count__87171_87176 = G__87193;
i__87172_87177 = G__87194;
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
var len__4499__auto___87199 = arguments.length;
var i__4500__auto___87200 = (0);
while(true){
if((i__4500__auto___87200 < len__4499__auto___87199)){
args__4502__auto__.push((arguments[i__4500__auto___87200]));

var G__87201 = (i__4500__auto___87200 + (1));
i__4500__auto___87200 = G__87201;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__87196){
var map__87197 = p__87196;
var map__87197__$1 = ((((!((map__87197 == null)))?(((((map__87197.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87197.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__87197):map__87197);
var opts = map__87197__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq87195){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq87195));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e87202){if((e87202 instanceof Error)){
var e = e87202;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e87202;

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
return (function (p__87203){
var map__87204 = p__87203;
var map__87204__$1 = ((((!((map__87204 == null)))?(((((map__87204.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__87204.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__87204):map__87204);
var msg_name = cljs.core.get.call(null,map__87204__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1525389593399
