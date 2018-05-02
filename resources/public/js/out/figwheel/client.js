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
}catch (e30819){if((e30819 instanceof Error)){
var e = e30819;
return "Error: Unable to stringify";
} else {
throw e30819;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__30822 = arguments.length;
switch (G__30822) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__30820_SHARP_){
if(typeof p1__30820_SHARP_ === 'string'){
return p1__30820_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__30820_SHARP_);
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
var len__4499__auto___30825 = arguments.length;
var i__4500__auto___30826 = (0);
while(true){
if((i__4500__auto___30826 < len__4499__auto___30825)){
args__4502__auto__.push((arguments[i__4500__auto___30826]));

var G__30827 = (i__4500__auto___30826 + (1));
i__4500__auto___30826 = G__30827;
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
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq30824){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30824));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___30829 = arguments.length;
var i__4500__auto___30830 = (0);
while(true){
if((i__4500__auto___30830 < len__4499__auto___30829)){
args__4502__auto__.push((arguments[i__4500__auto___30830]));

var G__30831 = (i__4500__auto___30830 + (1));
i__4500__auto___30830 = G__30831;
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
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq30828){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30828));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__30832){
var map__30833 = p__30832;
var map__30833__$1 = ((((!((map__30833 == null)))?(((((map__30833.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30833.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30833):map__30833);
var message = cljs.core.get.call(null,map__30833__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__30833__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__26964__auto___30912 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26964__auto___30912,ch){
return (function (){
var f__26965__auto__ = (function (){var switch__26874__auto__ = ((function (c__26964__auto___30912,ch){
return (function (state_30884){
var state_val_30885 = (state_30884[(1)]);
if((state_val_30885 === (7))){
var inst_30880 = (state_30884[(2)]);
var state_30884__$1 = state_30884;
var statearr_30886_30913 = state_30884__$1;
(statearr_30886_30913[(2)] = inst_30880);

(statearr_30886_30913[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30885 === (1))){
var state_30884__$1 = state_30884;
var statearr_30887_30914 = state_30884__$1;
(statearr_30887_30914[(2)] = null);

(statearr_30887_30914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30885 === (4))){
var inst_30837 = (state_30884[(7)]);
var inst_30837__$1 = (state_30884[(2)]);
var state_30884__$1 = (function (){var statearr_30888 = state_30884;
(statearr_30888[(7)] = inst_30837__$1);

return statearr_30888;
})();
if(cljs.core.truth_(inst_30837__$1)){
var statearr_30889_30915 = state_30884__$1;
(statearr_30889_30915[(1)] = (5));

} else {
var statearr_30890_30916 = state_30884__$1;
(statearr_30890_30916[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30885 === (15))){
var inst_30844 = (state_30884[(8)]);
var inst_30859 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30844);
var inst_30860 = cljs.core.first.call(null,inst_30859);
var inst_30861 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_30860);
var inst_30862 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30861)].join('');
var inst_30863 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_30862);
var state_30884__$1 = state_30884;
var statearr_30891_30917 = state_30884__$1;
(statearr_30891_30917[(2)] = inst_30863);

(statearr_30891_30917[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30885 === (13))){
var inst_30868 = (state_30884[(2)]);
var state_30884__$1 = state_30884;
var statearr_30892_30918 = state_30884__$1;
(statearr_30892_30918[(2)] = inst_30868);

(statearr_30892_30918[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30885 === (6))){
var state_30884__$1 = state_30884;
var statearr_30893_30919 = state_30884__$1;
(statearr_30893_30919[(2)] = null);

(statearr_30893_30919[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30885 === (17))){
var inst_30866 = (state_30884[(2)]);
var state_30884__$1 = state_30884;
var statearr_30894_30920 = state_30884__$1;
(statearr_30894_30920[(2)] = inst_30866);

(statearr_30894_30920[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30885 === (3))){
var inst_30882 = (state_30884[(2)]);
var state_30884__$1 = state_30884;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30884__$1,inst_30882);
} else {
if((state_val_30885 === (12))){
var inst_30843 = (state_30884[(9)]);
var inst_30857 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_30843,opts);
var state_30884__$1 = state_30884;
if(cljs.core.truth_(inst_30857)){
var statearr_30895_30921 = state_30884__$1;
(statearr_30895_30921[(1)] = (15));

} else {
var statearr_30896_30922 = state_30884__$1;
(statearr_30896_30922[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30885 === (2))){
var state_30884__$1 = state_30884;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30884__$1,(4),ch);
} else {
if((state_val_30885 === (11))){
var inst_30844 = (state_30884[(8)]);
var inst_30849 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30850 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_30844);
var inst_30851 = cljs.core.async.timeout.call(null,(1000));
var inst_30852 = [inst_30850,inst_30851];
var inst_30853 = (new cljs.core.PersistentVector(null,2,(5),inst_30849,inst_30852,null));
var state_30884__$1 = state_30884;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30884__$1,(14),inst_30853);
} else {
if((state_val_30885 === (9))){
var inst_30844 = (state_30884[(8)]);
var inst_30870 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_30871 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30844);
var inst_30872 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30871);
var inst_30873 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30872)].join('');
var inst_30874 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_30873);
var state_30884__$1 = (function (){var statearr_30897 = state_30884;
(statearr_30897[(10)] = inst_30870);

return statearr_30897;
})();
var statearr_30898_30923 = state_30884__$1;
(statearr_30898_30923[(2)] = inst_30874);

(statearr_30898_30923[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30885 === (5))){
var inst_30837 = (state_30884[(7)]);
var inst_30839 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_30840 = (new cljs.core.PersistentArrayMap(null,2,inst_30839,null));
var inst_30841 = (new cljs.core.PersistentHashSet(null,inst_30840,null));
var inst_30842 = figwheel.client.focus_msgs.call(null,inst_30841,inst_30837);
var inst_30843 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_30842);
var inst_30844 = cljs.core.first.call(null,inst_30842);
var inst_30845 = figwheel.client.autoload_QMARK_.call(null);
var state_30884__$1 = (function (){var statearr_30899 = state_30884;
(statearr_30899[(8)] = inst_30844);

(statearr_30899[(9)] = inst_30843);

return statearr_30899;
})();
if(cljs.core.truth_(inst_30845)){
var statearr_30900_30924 = state_30884__$1;
(statearr_30900_30924[(1)] = (8));

} else {
var statearr_30901_30925 = state_30884__$1;
(statearr_30901_30925[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30885 === (14))){
var inst_30855 = (state_30884[(2)]);
var state_30884__$1 = state_30884;
var statearr_30902_30926 = state_30884__$1;
(statearr_30902_30926[(2)] = inst_30855);

(statearr_30902_30926[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30885 === (16))){
var state_30884__$1 = state_30884;
var statearr_30903_30927 = state_30884__$1;
(statearr_30903_30927[(2)] = null);

(statearr_30903_30927[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30885 === (10))){
var inst_30876 = (state_30884[(2)]);
var state_30884__$1 = (function (){var statearr_30904 = state_30884;
(statearr_30904[(11)] = inst_30876);

return statearr_30904;
})();
var statearr_30905_30928 = state_30884__$1;
(statearr_30905_30928[(2)] = null);

(statearr_30905_30928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30885 === (8))){
var inst_30843 = (state_30884[(9)]);
var inst_30847 = figwheel.client.reload_file_state_QMARK_.call(null,inst_30843,opts);
var state_30884__$1 = state_30884;
if(cljs.core.truth_(inst_30847)){
var statearr_30906_30929 = state_30884__$1;
(statearr_30906_30929[(1)] = (11));

} else {
var statearr_30907_30930 = state_30884__$1;
(statearr_30907_30930[(1)] = (12));

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
});})(c__26964__auto___30912,ch))
;
return ((function (switch__26874__auto__,c__26964__auto___30912,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__26875__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__26875__auto____0 = (function (){
var statearr_30908 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30908[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__26875__auto__);

(statearr_30908[(1)] = (1));

return statearr_30908;
});
var figwheel$client$file_reloader_plugin_$_state_machine__26875__auto____1 = (function (state_30884){
while(true){
var ret_value__26876__auto__ = (function (){try{while(true){
var result__26877__auto__ = switch__26874__auto__.call(null,state_30884);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26877__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26877__auto__;
}
break;
}
}catch (e30909){if((e30909 instanceof Object)){
var ex__26878__auto__ = e30909;
var statearr_30910_30931 = state_30884;
(statearr_30910_30931[(5)] = ex__26878__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30884);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30909;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26876__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30932 = state_30884;
state_30884 = G__30932;
continue;
} else {
return ret_value__26876__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__26875__auto__ = function(state_30884){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__26875__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__26875__auto____1.call(this,state_30884);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__26875__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__26875__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__26875__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__26875__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__26875__auto__;
})()
;})(switch__26874__auto__,c__26964__auto___30912,ch))
})();
var state__26966__auto__ = (function (){var statearr_30911 = f__26965__auto__.call(null);
(statearr_30911[(6)] = c__26964__auto___30912);

return statearr_30911;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26966__auto__);
});})(c__26964__auto___30912,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__30933_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__30933_SHARP_));
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
var base_path_30937 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_30937){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_30935 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_30936 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_30935,_STAR_print_fn_STAR_30936,sb,base_path_30937){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_30935,_STAR_print_fn_STAR_30936,sb,base_path_30937))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_30936;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_30935;
}}catch (e30934){if((e30934 instanceof Error)){
var e = e30934;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_30937], null));
} else {
var e = e30934;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_30937))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__30938){
var map__30939 = p__30938;
var map__30939__$1 = ((((!((map__30939 == null)))?(((((map__30939.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30939.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30939):map__30939);
var opts = map__30939__$1;
var build_id = cljs.core.get.call(null,map__30939__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__30939,map__30939__$1,opts,build_id){
return (function (p__30941){
var vec__30942 = p__30941;
var seq__30943 = cljs.core.seq.call(null,vec__30942);
var first__30944 = cljs.core.first.call(null,seq__30943);
var seq__30943__$1 = cljs.core.next.call(null,seq__30943);
var map__30945 = first__30944;
var map__30945__$1 = ((((!((map__30945 == null)))?(((((map__30945.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30945.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30945):map__30945);
var msg = map__30945__$1;
var msg_name = cljs.core.get.call(null,map__30945__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30943__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__30942,seq__30943,first__30944,seq__30943__$1,map__30945,map__30945__$1,msg,msg_name,_,map__30939,map__30939__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__30942,seq__30943,first__30944,seq__30943__$1,map__30945,map__30945__$1,msg,msg_name,_,map__30939,map__30939__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__30939,map__30939__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__30947){
var vec__30948 = p__30947;
var seq__30949 = cljs.core.seq.call(null,vec__30948);
var first__30950 = cljs.core.first.call(null,seq__30949);
var seq__30949__$1 = cljs.core.next.call(null,seq__30949);
var map__30951 = first__30950;
var map__30951__$1 = ((((!((map__30951 == null)))?(((((map__30951.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30951.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30951):map__30951);
var msg = map__30951__$1;
var msg_name = cljs.core.get.call(null,map__30951__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30949__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__30953){
var map__30954 = p__30953;
var map__30954__$1 = ((((!((map__30954 == null)))?(((((map__30954.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30954.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30954):map__30954);
var on_compile_warning = cljs.core.get.call(null,map__30954__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__30954__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__30954,map__30954__$1,on_compile_warning,on_compile_fail){
return (function (p__30956){
var vec__30957 = p__30956;
var seq__30958 = cljs.core.seq.call(null,vec__30957);
var first__30959 = cljs.core.first.call(null,seq__30958);
var seq__30958__$1 = cljs.core.next.call(null,seq__30958);
var map__30960 = first__30959;
var map__30960__$1 = ((((!((map__30960 == null)))?(((((map__30960.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30960.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30960):map__30960);
var msg = map__30960__$1;
var msg_name = cljs.core.get.call(null,map__30960__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30958__$1;
var pred__30962 = cljs.core._EQ_;
var expr__30963 = msg_name;
if(cljs.core.truth_(pred__30962.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__30963))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__30962.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__30963))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__30954,map__30954__$1,on_compile_warning,on_compile_fail))
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
var c__26964__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26964__auto__,msg_hist,msg_names,msg){
return (function (){
var f__26965__auto__ = (function (){var switch__26874__auto__ = ((function (c__26964__auto__,msg_hist,msg_names,msg){
return (function (state_31052){
var state_val_31053 = (state_31052[(1)]);
if((state_val_31053 === (7))){
var inst_30972 = (state_31052[(2)]);
var state_31052__$1 = state_31052;
if(cljs.core.truth_(inst_30972)){
var statearr_31054_31101 = state_31052__$1;
(statearr_31054_31101[(1)] = (8));

} else {
var statearr_31055_31102 = state_31052__$1;
(statearr_31055_31102[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (20))){
var inst_31046 = (state_31052[(2)]);
var state_31052__$1 = state_31052;
var statearr_31056_31103 = state_31052__$1;
(statearr_31056_31103[(2)] = inst_31046);

(statearr_31056_31103[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (27))){
var inst_31042 = (state_31052[(2)]);
var state_31052__$1 = state_31052;
var statearr_31057_31104 = state_31052__$1;
(statearr_31057_31104[(2)] = inst_31042);

(statearr_31057_31104[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (1))){
var inst_30965 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_31052__$1 = state_31052;
if(cljs.core.truth_(inst_30965)){
var statearr_31058_31105 = state_31052__$1;
(statearr_31058_31105[(1)] = (2));

} else {
var statearr_31059_31106 = state_31052__$1;
(statearr_31059_31106[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (24))){
var inst_31044 = (state_31052[(2)]);
var state_31052__$1 = state_31052;
var statearr_31060_31107 = state_31052__$1;
(statearr_31060_31107[(2)] = inst_31044);

(statearr_31060_31107[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (4))){
var inst_31050 = (state_31052[(2)]);
var state_31052__$1 = state_31052;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31052__$1,inst_31050);
} else {
if((state_val_31053 === (15))){
var inst_31048 = (state_31052[(2)]);
var state_31052__$1 = state_31052;
var statearr_31061_31108 = state_31052__$1;
(statearr_31061_31108[(2)] = inst_31048);

(statearr_31061_31108[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (21))){
var inst_31001 = (state_31052[(2)]);
var inst_31002 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31003 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31002);
var state_31052__$1 = (function (){var statearr_31062 = state_31052;
(statearr_31062[(7)] = inst_31001);

return statearr_31062;
})();
var statearr_31063_31109 = state_31052__$1;
(statearr_31063_31109[(2)] = inst_31003);

(statearr_31063_31109[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (31))){
var inst_31031 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_31052__$1 = state_31052;
if(cljs.core.truth_(inst_31031)){
var statearr_31064_31110 = state_31052__$1;
(statearr_31064_31110[(1)] = (34));

} else {
var statearr_31065_31111 = state_31052__$1;
(statearr_31065_31111[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (32))){
var inst_31040 = (state_31052[(2)]);
var state_31052__$1 = state_31052;
var statearr_31066_31112 = state_31052__$1;
(statearr_31066_31112[(2)] = inst_31040);

(statearr_31066_31112[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (33))){
var inst_31027 = (state_31052[(2)]);
var inst_31028 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31029 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31028);
var state_31052__$1 = (function (){var statearr_31067 = state_31052;
(statearr_31067[(8)] = inst_31027);

return statearr_31067;
})();
var statearr_31068_31113 = state_31052__$1;
(statearr_31068_31113[(2)] = inst_31029);

(statearr_31068_31113[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (13))){
var inst_30986 = figwheel.client.heads_up.clear.call(null);
var state_31052__$1 = state_31052;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31052__$1,(16),inst_30986);
} else {
if((state_val_31053 === (22))){
var inst_31007 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31008 = figwheel.client.heads_up.append_warning_message.call(null,inst_31007);
var state_31052__$1 = state_31052;
var statearr_31069_31114 = state_31052__$1;
(statearr_31069_31114[(2)] = inst_31008);

(statearr_31069_31114[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (36))){
var inst_31038 = (state_31052[(2)]);
var state_31052__$1 = state_31052;
var statearr_31070_31115 = state_31052__$1;
(statearr_31070_31115[(2)] = inst_31038);

(statearr_31070_31115[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (29))){
var inst_31018 = (state_31052[(2)]);
var inst_31019 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31020 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31019);
var state_31052__$1 = (function (){var statearr_31071 = state_31052;
(statearr_31071[(9)] = inst_31018);

return statearr_31071;
})();
var statearr_31072_31116 = state_31052__$1;
(statearr_31072_31116[(2)] = inst_31020);

(statearr_31072_31116[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (6))){
var inst_30967 = (state_31052[(10)]);
var state_31052__$1 = state_31052;
var statearr_31073_31117 = state_31052__$1;
(statearr_31073_31117[(2)] = inst_30967);

(statearr_31073_31117[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (28))){
var inst_31014 = (state_31052[(2)]);
var inst_31015 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31016 = figwheel.client.heads_up.display_warning.call(null,inst_31015);
var state_31052__$1 = (function (){var statearr_31074 = state_31052;
(statearr_31074[(11)] = inst_31014);

return statearr_31074;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31052__$1,(29),inst_31016);
} else {
if((state_val_31053 === (25))){
var inst_31012 = figwheel.client.heads_up.clear.call(null);
var state_31052__$1 = state_31052;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31052__$1,(28),inst_31012);
} else {
if((state_val_31053 === (34))){
var inst_31033 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31052__$1 = state_31052;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31052__$1,(37),inst_31033);
} else {
if((state_val_31053 === (17))){
var inst_30992 = (state_31052[(2)]);
var inst_30993 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30994 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30993);
var state_31052__$1 = (function (){var statearr_31075 = state_31052;
(statearr_31075[(12)] = inst_30992);

return statearr_31075;
})();
var statearr_31076_31118 = state_31052__$1;
(statearr_31076_31118[(2)] = inst_30994);

(statearr_31076_31118[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (3))){
var inst_30984 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_31052__$1 = state_31052;
if(cljs.core.truth_(inst_30984)){
var statearr_31077_31119 = state_31052__$1;
(statearr_31077_31119[(1)] = (13));

} else {
var statearr_31078_31120 = state_31052__$1;
(statearr_31078_31120[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (12))){
var inst_30980 = (state_31052[(2)]);
var state_31052__$1 = state_31052;
var statearr_31079_31121 = state_31052__$1;
(statearr_31079_31121[(2)] = inst_30980);

(statearr_31079_31121[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (2))){
var inst_30967 = (state_31052[(10)]);
var inst_30967__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_31052__$1 = (function (){var statearr_31080 = state_31052;
(statearr_31080[(10)] = inst_30967__$1);

return statearr_31080;
})();
if(cljs.core.truth_(inst_30967__$1)){
var statearr_31081_31122 = state_31052__$1;
(statearr_31081_31122[(1)] = (5));

} else {
var statearr_31082_31123 = state_31052__$1;
(statearr_31082_31123[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (23))){
var inst_31010 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_31052__$1 = state_31052;
if(cljs.core.truth_(inst_31010)){
var statearr_31083_31124 = state_31052__$1;
(statearr_31083_31124[(1)] = (25));

} else {
var statearr_31084_31125 = state_31052__$1;
(statearr_31084_31125[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (35))){
var state_31052__$1 = state_31052;
var statearr_31085_31126 = state_31052__$1;
(statearr_31085_31126[(2)] = null);

(statearr_31085_31126[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (19))){
var inst_31005 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_31052__$1 = state_31052;
if(cljs.core.truth_(inst_31005)){
var statearr_31086_31127 = state_31052__$1;
(statearr_31086_31127[(1)] = (22));

} else {
var statearr_31087_31128 = state_31052__$1;
(statearr_31087_31128[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (11))){
var inst_30976 = (state_31052[(2)]);
var state_31052__$1 = state_31052;
var statearr_31088_31129 = state_31052__$1;
(statearr_31088_31129[(2)] = inst_30976);

(statearr_31088_31129[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (9))){
var inst_30978 = figwheel.client.heads_up.clear.call(null);
var state_31052__$1 = state_31052;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31052__$1,(12),inst_30978);
} else {
if((state_val_31053 === (5))){
var inst_30969 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_31052__$1 = state_31052;
var statearr_31089_31130 = state_31052__$1;
(statearr_31089_31130[(2)] = inst_30969);

(statearr_31089_31130[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (14))){
var inst_30996 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_31052__$1 = state_31052;
if(cljs.core.truth_(inst_30996)){
var statearr_31090_31131 = state_31052__$1;
(statearr_31090_31131[(1)] = (18));

} else {
var statearr_31091_31132 = state_31052__$1;
(statearr_31091_31132[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (26))){
var inst_31022 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_31052__$1 = state_31052;
if(cljs.core.truth_(inst_31022)){
var statearr_31092_31133 = state_31052__$1;
(statearr_31092_31133[(1)] = (30));

} else {
var statearr_31093_31134 = state_31052__$1;
(statearr_31093_31134[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (16))){
var inst_30988 = (state_31052[(2)]);
var inst_30989 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30990 = figwheel.client.heads_up.display_exception.call(null,inst_30989);
var state_31052__$1 = (function (){var statearr_31094 = state_31052;
(statearr_31094[(13)] = inst_30988);

return statearr_31094;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31052__$1,(17),inst_30990);
} else {
if((state_val_31053 === (30))){
var inst_31024 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31025 = figwheel.client.heads_up.display_warning.call(null,inst_31024);
var state_31052__$1 = state_31052;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31052__$1,(33),inst_31025);
} else {
if((state_val_31053 === (10))){
var inst_30982 = (state_31052[(2)]);
var state_31052__$1 = state_31052;
var statearr_31095_31135 = state_31052__$1;
(statearr_31095_31135[(2)] = inst_30982);

(statearr_31095_31135[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (18))){
var inst_30998 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30999 = figwheel.client.heads_up.display_exception.call(null,inst_30998);
var state_31052__$1 = state_31052;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31052__$1,(21),inst_30999);
} else {
if((state_val_31053 === (37))){
var inst_31035 = (state_31052[(2)]);
var state_31052__$1 = state_31052;
var statearr_31096_31136 = state_31052__$1;
(statearr_31096_31136[(2)] = inst_31035);

(statearr_31096_31136[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31053 === (8))){
var inst_30974 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31052__$1 = state_31052;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31052__$1,(11),inst_30974);
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
});})(c__26964__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__26874__auto__,c__26964__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26875__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26875__auto____0 = (function (){
var statearr_31097 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31097[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26875__auto__);

(statearr_31097[(1)] = (1));

return statearr_31097;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26875__auto____1 = (function (state_31052){
while(true){
var ret_value__26876__auto__ = (function (){try{while(true){
var result__26877__auto__ = switch__26874__auto__.call(null,state_31052);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26877__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26877__auto__;
}
break;
}
}catch (e31098){if((e31098 instanceof Object)){
var ex__26878__auto__ = e31098;
var statearr_31099_31137 = state_31052;
(statearr_31099_31137[(5)] = ex__26878__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31052);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31098;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26876__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31138 = state_31052;
state_31052 = G__31138;
continue;
} else {
return ret_value__26876__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26875__auto__ = function(state_31052){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26875__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26875__auto____1.call(this,state_31052);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26875__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26875__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26875__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26875__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26875__auto__;
})()
;})(switch__26874__auto__,c__26964__auto__,msg_hist,msg_names,msg))
})();
var state__26966__auto__ = (function (){var statearr_31100 = f__26965__auto__.call(null);
(statearr_31100[(6)] = c__26964__auto__);

return statearr_31100;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26966__auto__);
});})(c__26964__auto__,msg_hist,msg_names,msg))
);

return c__26964__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__26964__auto___31167 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26964__auto___31167,ch){
return (function (){
var f__26965__auto__ = (function (){var switch__26874__auto__ = ((function (c__26964__auto___31167,ch){
return (function (state_31153){
var state_val_31154 = (state_31153[(1)]);
if((state_val_31154 === (1))){
var state_31153__$1 = state_31153;
var statearr_31155_31168 = state_31153__$1;
(statearr_31155_31168[(2)] = null);

(statearr_31155_31168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31154 === (2))){
var state_31153__$1 = state_31153;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31153__$1,(4),ch);
} else {
if((state_val_31154 === (3))){
var inst_31151 = (state_31153[(2)]);
var state_31153__$1 = state_31153;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31153__$1,inst_31151);
} else {
if((state_val_31154 === (4))){
var inst_31141 = (state_31153[(7)]);
var inst_31141__$1 = (state_31153[(2)]);
var state_31153__$1 = (function (){var statearr_31156 = state_31153;
(statearr_31156[(7)] = inst_31141__$1);

return statearr_31156;
})();
if(cljs.core.truth_(inst_31141__$1)){
var statearr_31157_31169 = state_31153__$1;
(statearr_31157_31169[(1)] = (5));

} else {
var statearr_31158_31170 = state_31153__$1;
(statearr_31158_31170[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31154 === (5))){
var inst_31141 = (state_31153[(7)]);
var inst_31143 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_31141);
var state_31153__$1 = state_31153;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31153__$1,(8),inst_31143);
} else {
if((state_val_31154 === (6))){
var state_31153__$1 = state_31153;
var statearr_31159_31171 = state_31153__$1;
(statearr_31159_31171[(2)] = null);

(statearr_31159_31171[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31154 === (7))){
var inst_31149 = (state_31153[(2)]);
var state_31153__$1 = state_31153;
var statearr_31160_31172 = state_31153__$1;
(statearr_31160_31172[(2)] = inst_31149);

(statearr_31160_31172[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31154 === (8))){
var inst_31145 = (state_31153[(2)]);
var state_31153__$1 = (function (){var statearr_31161 = state_31153;
(statearr_31161[(8)] = inst_31145);

return statearr_31161;
})();
var statearr_31162_31173 = state_31153__$1;
(statearr_31162_31173[(2)] = null);

(statearr_31162_31173[(1)] = (2));


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
});})(c__26964__auto___31167,ch))
;
return ((function (switch__26874__auto__,c__26964__auto___31167,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__26875__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__26875__auto____0 = (function (){
var statearr_31163 = [null,null,null,null,null,null,null,null,null];
(statearr_31163[(0)] = figwheel$client$heads_up_plugin_$_state_machine__26875__auto__);

(statearr_31163[(1)] = (1));

return statearr_31163;
});
var figwheel$client$heads_up_plugin_$_state_machine__26875__auto____1 = (function (state_31153){
while(true){
var ret_value__26876__auto__ = (function (){try{while(true){
var result__26877__auto__ = switch__26874__auto__.call(null,state_31153);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26877__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26877__auto__;
}
break;
}
}catch (e31164){if((e31164 instanceof Object)){
var ex__26878__auto__ = e31164;
var statearr_31165_31174 = state_31153;
(statearr_31165_31174[(5)] = ex__26878__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31153);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31164;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26876__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31175 = state_31153;
state_31153 = G__31175;
continue;
} else {
return ret_value__26876__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__26875__auto__ = function(state_31153){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__26875__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__26875__auto____1.call(this,state_31153);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__26875__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__26875__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__26875__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__26875__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__26875__auto__;
})()
;})(switch__26874__auto__,c__26964__auto___31167,ch))
})();
var state__26966__auto__ = (function (){var statearr_31166 = f__26965__auto__.call(null);
(statearr_31166[(6)] = c__26964__auto___31167);

return statearr_31166;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26966__auto__);
});})(c__26964__auto___31167,ch))
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
var c__26964__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26964__auto__){
return (function (){
var f__26965__auto__ = (function (){var switch__26874__auto__ = ((function (c__26964__auto__){
return (function (state_31181){
var state_val_31182 = (state_31181[(1)]);
if((state_val_31182 === (1))){
var inst_31176 = cljs.core.async.timeout.call(null,(3000));
var state_31181__$1 = state_31181;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31181__$1,(2),inst_31176);
} else {
if((state_val_31182 === (2))){
var inst_31178 = (state_31181[(2)]);
var inst_31179 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_31181__$1 = (function (){var statearr_31183 = state_31181;
(statearr_31183[(7)] = inst_31178);

return statearr_31183;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31181__$1,inst_31179);
} else {
return null;
}
}
});})(c__26964__auto__))
;
return ((function (switch__26874__auto__,c__26964__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__26875__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__26875__auto____0 = (function (){
var statearr_31184 = [null,null,null,null,null,null,null,null];
(statearr_31184[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__26875__auto__);

(statearr_31184[(1)] = (1));

return statearr_31184;
});
var figwheel$client$enforce_project_plugin_$_state_machine__26875__auto____1 = (function (state_31181){
while(true){
var ret_value__26876__auto__ = (function (){try{while(true){
var result__26877__auto__ = switch__26874__auto__.call(null,state_31181);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26877__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26877__auto__;
}
break;
}
}catch (e31185){if((e31185 instanceof Object)){
var ex__26878__auto__ = e31185;
var statearr_31186_31188 = state_31181;
(statearr_31186_31188[(5)] = ex__26878__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31181);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31185;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26876__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31189 = state_31181;
state_31181 = G__31189;
continue;
} else {
return ret_value__26876__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__26875__auto__ = function(state_31181){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__26875__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__26875__auto____1.call(this,state_31181);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__26875__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__26875__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__26875__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__26875__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__26875__auto__;
})()
;})(switch__26874__auto__,c__26964__auto__))
})();
var state__26966__auto__ = (function (){var statearr_31187 = f__26965__auto__.call(null);
(statearr_31187[(6)] = c__26964__auto__);

return statearr_31187;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26966__auto__);
});})(c__26964__auto__))
);

return c__26964__auto__;
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
var c__26964__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26964__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__26965__auto__ = (function (){var switch__26874__auto__ = ((function (c__26964__auto__,figwheel_version,temp__5457__auto__){
return (function (state_31196){
var state_val_31197 = (state_31196[(1)]);
if((state_val_31197 === (1))){
var inst_31190 = cljs.core.async.timeout.call(null,(2000));
var state_31196__$1 = state_31196;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31196__$1,(2),inst_31190);
} else {
if((state_val_31197 === (2))){
var inst_31192 = (state_31196[(2)]);
var inst_31193 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_31194 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_31193);
var state_31196__$1 = (function (){var statearr_31198 = state_31196;
(statearr_31198[(7)] = inst_31192);

return statearr_31198;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31196__$1,inst_31194);
} else {
return null;
}
}
});})(c__26964__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__26874__auto__,c__26964__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26875__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26875__auto____0 = (function (){
var statearr_31199 = [null,null,null,null,null,null,null,null];
(statearr_31199[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26875__auto__);

(statearr_31199[(1)] = (1));

return statearr_31199;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26875__auto____1 = (function (state_31196){
while(true){
var ret_value__26876__auto__ = (function (){try{while(true){
var result__26877__auto__ = switch__26874__auto__.call(null,state_31196);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26877__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26877__auto__;
}
break;
}
}catch (e31200){if((e31200 instanceof Object)){
var ex__26878__auto__ = e31200;
var statearr_31201_31203 = state_31196;
(statearr_31201_31203[(5)] = ex__26878__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31196);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31200;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26876__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31204 = state_31196;
state_31196 = G__31204;
continue;
} else {
return ret_value__26876__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26875__auto__ = function(state_31196){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26875__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26875__auto____1.call(this,state_31196);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26875__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26875__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26875__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26875__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26875__auto__;
})()
;})(switch__26874__auto__,c__26964__auto__,figwheel_version,temp__5457__auto__))
})();
var state__26966__auto__ = (function (){var statearr_31202 = f__26965__auto__.call(null);
(statearr_31202[(6)] = c__26964__auto__);

return statearr_31202;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26966__auto__);
});})(c__26964__auto__,figwheel_version,temp__5457__auto__))
);

return c__26964__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__31205){
var map__31206 = p__31205;
var map__31206__$1 = ((((!((map__31206 == null)))?(((((map__31206.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31206.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31206):map__31206);
var file = cljs.core.get.call(null,map__31206__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__31206__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__31206__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__31208 = "";
var G__31208__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31208),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__31208);
var G__31208__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31208__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__31208__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = line;
if(cljs.core.truth_(and__3911__auto__)){
return column;
} else {
return and__3911__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31208__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__31208__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__31209){
var map__31210 = p__31209;
var map__31210__$1 = ((((!((map__31210 == null)))?(((((map__31210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31210.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31210):map__31210);
var ed = map__31210__$1;
var formatted_exception = cljs.core.get.call(null,map__31210__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__31210__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__31210__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__31212_31216 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__31213_31217 = null;
var count__31214_31218 = (0);
var i__31215_31219 = (0);
while(true){
if((i__31215_31219 < count__31214_31218)){
var msg_31220 = cljs.core._nth.call(null,chunk__31213_31217,i__31215_31219);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31220);


var G__31221 = seq__31212_31216;
var G__31222 = chunk__31213_31217;
var G__31223 = count__31214_31218;
var G__31224 = (i__31215_31219 + (1));
seq__31212_31216 = G__31221;
chunk__31213_31217 = G__31222;
count__31214_31218 = G__31223;
i__31215_31219 = G__31224;
continue;
} else {
var temp__5457__auto___31225 = cljs.core.seq.call(null,seq__31212_31216);
if(temp__5457__auto___31225){
var seq__31212_31226__$1 = temp__5457__auto___31225;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31212_31226__$1)){
var c__4319__auto___31227 = cljs.core.chunk_first.call(null,seq__31212_31226__$1);
var G__31228 = cljs.core.chunk_rest.call(null,seq__31212_31226__$1);
var G__31229 = c__4319__auto___31227;
var G__31230 = cljs.core.count.call(null,c__4319__auto___31227);
var G__31231 = (0);
seq__31212_31216 = G__31228;
chunk__31213_31217 = G__31229;
count__31214_31218 = G__31230;
i__31215_31219 = G__31231;
continue;
} else {
var msg_31232 = cljs.core.first.call(null,seq__31212_31226__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31232);


var G__31233 = cljs.core.next.call(null,seq__31212_31226__$1);
var G__31234 = null;
var G__31235 = (0);
var G__31236 = (0);
seq__31212_31216 = G__31233;
chunk__31213_31217 = G__31234;
count__31214_31218 = G__31235;
i__31215_31219 = G__31236;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__31237){
var map__31238 = p__31237;
var map__31238__$1 = ((((!((map__31238 == null)))?(((((map__31238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31238.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31238):map__31238);
var w = map__31238__$1;
var message = cljs.core.get.call(null,map__31238__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__31240 = cljs.core.seq.call(null,plugins);
var chunk__31241 = null;
var count__31242 = (0);
var i__31243 = (0);
while(true){
if((i__31243 < count__31242)){
var vec__31244 = cljs.core._nth.call(null,chunk__31241,i__31243);
var k = cljs.core.nth.call(null,vec__31244,(0),null);
var plugin = cljs.core.nth.call(null,vec__31244,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31250 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31240,chunk__31241,count__31242,i__31243,pl_31250,vec__31244,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_31250.call(null,msg_hist);
});})(seq__31240,chunk__31241,count__31242,i__31243,pl_31250,vec__31244,k,plugin))
);
} else {
}


var G__31251 = seq__31240;
var G__31252 = chunk__31241;
var G__31253 = count__31242;
var G__31254 = (i__31243 + (1));
seq__31240 = G__31251;
chunk__31241 = G__31252;
count__31242 = G__31253;
i__31243 = G__31254;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__31240);
if(temp__5457__auto__){
var seq__31240__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31240__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__31240__$1);
var G__31255 = cljs.core.chunk_rest.call(null,seq__31240__$1);
var G__31256 = c__4319__auto__;
var G__31257 = cljs.core.count.call(null,c__4319__auto__);
var G__31258 = (0);
seq__31240 = G__31255;
chunk__31241 = G__31256;
count__31242 = G__31257;
i__31243 = G__31258;
continue;
} else {
var vec__31247 = cljs.core.first.call(null,seq__31240__$1);
var k = cljs.core.nth.call(null,vec__31247,(0),null);
var plugin = cljs.core.nth.call(null,vec__31247,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31259 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31240,chunk__31241,count__31242,i__31243,pl_31259,vec__31247,k,plugin,seq__31240__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_31259.call(null,msg_hist);
});})(seq__31240,chunk__31241,count__31242,i__31243,pl_31259,vec__31247,k,plugin,seq__31240__$1,temp__5457__auto__))
);
} else {
}


var G__31260 = cljs.core.next.call(null,seq__31240__$1);
var G__31261 = null;
var G__31262 = (0);
var G__31263 = (0);
seq__31240 = G__31260;
chunk__31241 = G__31261;
count__31242 = G__31262;
i__31243 = G__31263;
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
var G__31265 = arguments.length;
switch (G__31265) {
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

var seq__31266_31271 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__31267_31272 = null;
var count__31268_31273 = (0);
var i__31269_31274 = (0);
while(true){
if((i__31269_31274 < count__31268_31273)){
var msg_31275 = cljs.core._nth.call(null,chunk__31267_31272,i__31269_31274);
figwheel.client.socket.handle_incoming_message.call(null,msg_31275);


var G__31276 = seq__31266_31271;
var G__31277 = chunk__31267_31272;
var G__31278 = count__31268_31273;
var G__31279 = (i__31269_31274 + (1));
seq__31266_31271 = G__31276;
chunk__31267_31272 = G__31277;
count__31268_31273 = G__31278;
i__31269_31274 = G__31279;
continue;
} else {
var temp__5457__auto___31280 = cljs.core.seq.call(null,seq__31266_31271);
if(temp__5457__auto___31280){
var seq__31266_31281__$1 = temp__5457__auto___31280;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31266_31281__$1)){
var c__4319__auto___31282 = cljs.core.chunk_first.call(null,seq__31266_31281__$1);
var G__31283 = cljs.core.chunk_rest.call(null,seq__31266_31281__$1);
var G__31284 = c__4319__auto___31282;
var G__31285 = cljs.core.count.call(null,c__4319__auto___31282);
var G__31286 = (0);
seq__31266_31271 = G__31283;
chunk__31267_31272 = G__31284;
count__31268_31273 = G__31285;
i__31269_31274 = G__31286;
continue;
} else {
var msg_31287 = cljs.core.first.call(null,seq__31266_31281__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_31287);


var G__31288 = cljs.core.next.call(null,seq__31266_31281__$1);
var G__31289 = null;
var G__31290 = (0);
var G__31291 = (0);
seq__31266_31271 = G__31288;
chunk__31267_31272 = G__31289;
count__31268_31273 = G__31290;
i__31269_31274 = G__31291;
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
var len__4499__auto___31296 = arguments.length;
var i__4500__auto___31297 = (0);
while(true){
if((i__4500__auto___31297 < len__4499__auto___31296)){
args__4502__auto__.push((arguments[i__4500__auto___31297]));

var G__31298 = (i__4500__auto___31297 + (1));
i__4500__auto___31297 = G__31298;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__31293){
var map__31294 = p__31293;
var map__31294__$1 = ((((!((map__31294 == null)))?(((((map__31294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31294.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31294):map__31294);
var opts = map__31294__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq31292){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31292));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e31299){if((e31299 instanceof Error)){
var e = e31299;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e31299;

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
return (function (p__31300){
var map__31301 = p__31300;
var map__31301__$1 = ((((!((map__31301 == null)))?(((((map__31301.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31301.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31301):map__31301);
var msg_name = cljs.core.get.call(null,map__31301__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1525295748408
