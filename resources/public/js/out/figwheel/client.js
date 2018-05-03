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
}catch (e67057){if((e67057 instanceof Error)){
var e = e67057;
return "Error: Unable to stringify";
} else {
throw e67057;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__67060 = arguments.length;
switch (G__67060) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__67058_SHARP_){
if(typeof p1__67058_SHARP_ === 'string'){
return p1__67058_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__67058_SHARP_);
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
var len__4499__auto___67063 = arguments.length;
var i__4500__auto___67064 = (0);
while(true){
if((i__4500__auto___67064 < len__4499__auto___67063)){
args__4502__auto__.push((arguments[i__4500__auto___67064]));

var G__67065 = (i__4500__auto___67064 + (1));
i__4500__auto___67064 = G__67065;
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
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq67062){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq67062));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___67067 = arguments.length;
var i__4500__auto___67068 = (0);
while(true){
if((i__4500__auto___67068 < len__4499__auto___67067)){
args__4502__auto__.push((arguments[i__4500__auto___67068]));

var G__67069 = (i__4500__auto___67068 + (1));
i__4500__auto___67068 = G__67069;
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
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq67066){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq67066));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__67070){
var map__67071 = p__67070;
var map__67071__$1 = ((((!((map__67071 == null)))?(((((map__67071.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67071.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67071):map__67071);
var message = cljs.core.get.call(null,map__67071__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__67071__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__27974__auto___67150 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27974__auto___67150,ch){
return (function (){
var f__27975__auto__ = (function (){var switch__27884__auto__ = ((function (c__27974__auto___67150,ch){
return (function (state_67122){
var state_val_67123 = (state_67122[(1)]);
if((state_val_67123 === (7))){
var inst_67118 = (state_67122[(2)]);
var state_67122__$1 = state_67122;
var statearr_67124_67151 = state_67122__$1;
(statearr_67124_67151[(2)] = inst_67118);

(statearr_67124_67151[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67123 === (1))){
var state_67122__$1 = state_67122;
var statearr_67125_67152 = state_67122__$1;
(statearr_67125_67152[(2)] = null);

(statearr_67125_67152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67123 === (4))){
var inst_67075 = (state_67122[(7)]);
var inst_67075__$1 = (state_67122[(2)]);
var state_67122__$1 = (function (){var statearr_67126 = state_67122;
(statearr_67126[(7)] = inst_67075__$1);

return statearr_67126;
})();
if(cljs.core.truth_(inst_67075__$1)){
var statearr_67127_67153 = state_67122__$1;
(statearr_67127_67153[(1)] = (5));

} else {
var statearr_67128_67154 = state_67122__$1;
(statearr_67128_67154[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67123 === (15))){
var inst_67082 = (state_67122[(8)]);
var inst_67097 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_67082);
var inst_67098 = cljs.core.first.call(null,inst_67097);
var inst_67099 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_67098);
var inst_67100 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_67099)].join('');
var inst_67101 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_67100);
var state_67122__$1 = state_67122;
var statearr_67129_67155 = state_67122__$1;
(statearr_67129_67155[(2)] = inst_67101);

(statearr_67129_67155[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67123 === (13))){
var inst_67106 = (state_67122[(2)]);
var state_67122__$1 = state_67122;
var statearr_67130_67156 = state_67122__$1;
(statearr_67130_67156[(2)] = inst_67106);

(statearr_67130_67156[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67123 === (6))){
var state_67122__$1 = state_67122;
var statearr_67131_67157 = state_67122__$1;
(statearr_67131_67157[(2)] = null);

(statearr_67131_67157[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67123 === (17))){
var inst_67104 = (state_67122[(2)]);
var state_67122__$1 = state_67122;
var statearr_67132_67158 = state_67122__$1;
(statearr_67132_67158[(2)] = inst_67104);

(statearr_67132_67158[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67123 === (3))){
var inst_67120 = (state_67122[(2)]);
var state_67122__$1 = state_67122;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_67122__$1,inst_67120);
} else {
if((state_val_67123 === (12))){
var inst_67081 = (state_67122[(9)]);
var inst_67095 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_67081,opts);
var state_67122__$1 = state_67122;
if(cljs.core.truth_(inst_67095)){
var statearr_67133_67159 = state_67122__$1;
(statearr_67133_67159[(1)] = (15));

} else {
var statearr_67134_67160 = state_67122__$1;
(statearr_67134_67160[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67123 === (2))){
var state_67122__$1 = state_67122;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67122__$1,(4),ch);
} else {
if((state_val_67123 === (11))){
var inst_67082 = (state_67122[(8)]);
var inst_67087 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_67088 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_67082);
var inst_67089 = cljs.core.async.timeout.call(null,(1000));
var inst_67090 = [inst_67088,inst_67089];
var inst_67091 = (new cljs.core.PersistentVector(null,2,(5),inst_67087,inst_67090,null));
var state_67122__$1 = state_67122;
return cljs.core.async.ioc_alts_BANG_.call(null,state_67122__$1,(14),inst_67091);
} else {
if((state_val_67123 === (9))){
var inst_67082 = (state_67122[(8)]);
var inst_67108 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_67109 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_67082);
var inst_67110 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_67109);
var inst_67111 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_67110)].join('');
var inst_67112 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_67111);
var state_67122__$1 = (function (){var statearr_67135 = state_67122;
(statearr_67135[(10)] = inst_67108);

return statearr_67135;
})();
var statearr_67136_67161 = state_67122__$1;
(statearr_67136_67161[(2)] = inst_67112);

(statearr_67136_67161[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67123 === (5))){
var inst_67075 = (state_67122[(7)]);
var inst_67077 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_67078 = (new cljs.core.PersistentArrayMap(null,2,inst_67077,null));
var inst_67079 = (new cljs.core.PersistentHashSet(null,inst_67078,null));
var inst_67080 = figwheel.client.focus_msgs.call(null,inst_67079,inst_67075);
var inst_67081 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_67080);
var inst_67082 = cljs.core.first.call(null,inst_67080);
var inst_67083 = figwheel.client.autoload_QMARK_.call(null);
var state_67122__$1 = (function (){var statearr_67137 = state_67122;
(statearr_67137[(9)] = inst_67081);

(statearr_67137[(8)] = inst_67082);

return statearr_67137;
})();
if(cljs.core.truth_(inst_67083)){
var statearr_67138_67162 = state_67122__$1;
(statearr_67138_67162[(1)] = (8));

} else {
var statearr_67139_67163 = state_67122__$1;
(statearr_67139_67163[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67123 === (14))){
var inst_67093 = (state_67122[(2)]);
var state_67122__$1 = state_67122;
var statearr_67140_67164 = state_67122__$1;
(statearr_67140_67164[(2)] = inst_67093);

(statearr_67140_67164[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67123 === (16))){
var state_67122__$1 = state_67122;
var statearr_67141_67165 = state_67122__$1;
(statearr_67141_67165[(2)] = null);

(statearr_67141_67165[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67123 === (10))){
var inst_67114 = (state_67122[(2)]);
var state_67122__$1 = (function (){var statearr_67142 = state_67122;
(statearr_67142[(11)] = inst_67114);

return statearr_67142;
})();
var statearr_67143_67166 = state_67122__$1;
(statearr_67143_67166[(2)] = null);

(statearr_67143_67166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67123 === (8))){
var inst_67081 = (state_67122[(9)]);
var inst_67085 = figwheel.client.reload_file_state_QMARK_.call(null,inst_67081,opts);
var state_67122__$1 = state_67122;
if(cljs.core.truth_(inst_67085)){
var statearr_67144_67167 = state_67122__$1;
(statearr_67144_67167[(1)] = (11));

} else {
var statearr_67145_67168 = state_67122__$1;
(statearr_67145_67168[(1)] = (12));

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
});})(c__27974__auto___67150,ch))
;
return ((function (switch__27884__auto__,c__27974__auto___67150,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__27885__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__27885__auto____0 = (function (){
var statearr_67146 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_67146[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__27885__auto__);

(statearr_67146[(1)] = (1));

return statearr_67146;
});
var figwheel$client$file_reloader_plugin_$_state_machine__27885__auto____1 = (function (state_67122){
while(true){
var ret_value__27886__auto__ = (function (){try{while(true){
var result__27887__auto__ = switch__27884__auto__.call(null,state_67122);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27887__auto__;
}
break;
}
}catch (e67147){if((e67147 instanceof Object)){
var ex__27888__auto__ = e67147;
var statearr_67148_67169 = state_67122;
(statearr_67148_67169[(5)] = ex__27888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_67122);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67147;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67170 = state_67122;
state_67122 = G__67170;
continue;
} else {
return ret_value__27886__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__27885__auto__ = function(state_67122){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__27885__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__27885__auto____1.call(this,state_67122);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__27885__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__27885__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__27885__auto__;
})()
;})(switch__27884__auto__,c__27974__auto___67150,ch))
})();
var state__27976__auto__ = (function (){var statearr_67149 = f__27975__auto__.call(null);
(statearr_67149[(6)] = c__27974__auto___67150);

return statearr_67149;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27976__auto__);
});})(c__27974__auto___67150,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__67171_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__67171_SHARP_));
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
var base_path_67175 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_67175){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_67173 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_67174 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_67173,_STAR_print_fn_STAR_67174,sb,base_path_67175){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_67173,_STAR_print_fn_STAR_67174,sb,base_path_67175))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_67174;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_67173;
}}catch (e67172){if((e67172 instanceof Error)){
var e = e67172;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_67175], null));
} else {
var e = e67172;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_67175))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__67176){
var map__67177 = p__67176;
var map__67177__$1 = ((((!((map__67177 == null)))?(((((map__67177.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67177.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67177):map__67177);
var opts = map__67177__$1;
var build_id = cljs.core.get.call(null,map__67177__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__67177,map__67177__$1,opts,build_id){
return (function (p__67179){
var vec__67180 = p__67179;
var seq__67181 = cljs.core.seq.call(null,vec__67180);
var first__67182 = cljs.core.first.call(null,seq__67181);
var seq__67181__$1 = cljs.core.next.call(null,seq__67181);
var map__67183 = first__67182;
var map__67183__$1 = ((((!((map__67183 == null)))?(((((map__67183.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67183.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67183):map__67183);
var msg = map__67183__$1;
var msg_name = cljs.core.get.call(null,map__67183__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__67181__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__67180,seq__67181,first__67182,seq__67181__$1,map__67183,map__67183__$1,msg,msg_name,_,map__67177,map__67177__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__67180,seq__67181,first__67182,seq__67181__$1,map__67183,map__67183__$1,msg,msg_name,_,map__67177,map__67177__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__67177,map__67177__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__67185){
var vec__67186 = p__67185;
var seq__67187 = cljs.core.seq.call(null,vec__67186);
var first__67188 = cljs.core.first.call(null,seq__67187);
var seq__67187__$1 = cljs.core.next.call(null,seq__67187);
var map__67189 = first__67188;
var map__67189__$1 = ((((!((map__67189 == null)))?(((((map__67189.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67189.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67189):map__67189);
var msg = map__67189__$1;
var msg_name = cljs.core.get.call(null,map__67189__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__67187__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__67191){
var map__67192 = p__67191;
var map__67192__$1 = ((((!((map__67192 == null)))?(((((map__67192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67192.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67192):map__67192);
var on_compile_warning = cljs.core.get.call(null,map__67192__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__67192__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__67192,map__67192__$1,on_compile_warning,on_compile_fail){
return (function (p__67194){
var vec__67195 = p__67194;
var seq__67196 = cljs.core.seq.call(null,vec__67195);
var first__67197 = cljs.core.first.call(null,seq__67196);
var seq__67196__$1 = cljs.core.next.call(null,seq__67196);
var map__67198 = first__67197;
var map__67198__$1 = ((((!((map__67198 == null)))?(((((map__67198.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67198.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67198):map__67198);
var msg = map__67198__$1;
var msg_name = cljs.core.get.call(null,map__67198__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__67196__$1;
var pred__67200 = cljs.core._EQ_;
var expr__67201 = msg_name;
if(cljs.core.truth_(pred__67200.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__67201))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__67200.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__67201))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__67192,map__67192__$1,on_compile_warning,on_compile_fail))
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
return (function (state_67290){
var state_val_67291 = (state_67290[(1)]);
if((state_val_67291 === (7))){
var inst_67210 = (state_67290[(2)]);
var state_67290__$1 = state_67290;
if(cljs.core.truth_(inst_67210)){
var statearr_67292_67339 = state_67290__$1;
(statearr_67292_67339[(1)] = (8));

} else {
var statearr_67293_67340 = state_67290__$1;
(statearr_67293_67340[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67291 === (20))){
var inst_67284 = (state_67290[(2)]);
var state_67290__$1 = state_67290;
var statearr_67294_67341 = state_67290__$1;
(statearr_67294_67341[(2)] = inst_67284);

(statearr_67294_67341[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67291 === (27))){
var inst_67280 = (state_67290[(2)]);
var state_67290__$1 = state_67290;
var statearr_67295_67342 = state_67290__$1;
(statearr_67295_67342[(2)] = inst_67280);

(statearr_67295_67342[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67291 === (1))){
var inst_67203 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_67290__$1 = state_67290;
if(cljs.core.truth_(inst_67203)){
var statearr_67296_67343 = state_67290__$1;
(statearr_67296_67343[(1)] = (2));

} else {
var statearr_67297_67344 = state_67290__$1;
(statearr_67297_67344[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67291 === (24))){
var inst_67282 = (state_67290[(2)]);
var state_67290__$1 = state_67290;
var statearr_67298_67345 = state_67290__$1;
(statearr_67298_67345[(2)] = inst_67282);

(statearr_67298_67345[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67291 === (4))){
var inst_67288 = (state_67290[(2)]);
var state_67290__$1 = state_67290;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_67290__$1,inst_67288);
} else {
if((state_val_67291 === (15))){
var inst_67286 = (state_67290[(2)]);
var state_67290__$1 = state_67290;
var statearr_67299_67346 = state_67290__$1;
(statearr_67299_67346[(2)] = inst_67286);

(statearr_67299_67346[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67291 === (21))){
var inst_67239 = (state_67290[(2)]);
var inst_67240 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_67241 = figwheel.client.auto_jump_to_error.call(null,opts,inst_67240);
var state_67290__$1 = (function (){var statearr_67300 = state_67290;
(statearr_67300[(7)] = inst_67239);

return statearr_67300;
})();
var statearr_67301_67347 = state_67290__$1;
(statearr_67301_67347[(2)] = inst_67241);

(statearr_67301_67347[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67291 === (31))){
var inst_67269 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_67290__$1 = state_67290;
if(cljs.core.truth_(inst_67269)){
var statearr_67302_67348 = state_67290__$1;
(statearr_67302_67348[(1)] = (34));

} else {
var statearr_67303_67349 = state_67290__$1;
(statearr_67303_67349[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67291 === (32))){
var inst_67278 = (state_67290[(2)]);
var state_67290__$1 = state_67290;
var statearr_67304_67350 = state_67290__$1;
(statearr_67304_67350[(2)] = inst_67278);

(statearr_67304_67350[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67291 === (33))){
var inst_67265 = (state_67290[(2)]);
var inst_67266 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_67267 = figwheel.client.auto_jump_to_error.call(null,opts,inst_67266);
var state_67290__$1 = (function (){var statearr_67305 = state_67290;
(statearr_67305[(8)] = inst_67265);

return statearr_67305;
})();
var statearr_67306_67351 = state_67290__$1;
(statearr_67306_67351[(2)] = inst_67267);

(statearr_67306_67351[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67291 === (13))){
var inst_67224 = figwheel.client.heads_up.clear.call(null);
var state_67290__$1 = state_67290;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67290__$1,(16),inst_67224);
} else {
if((state_val_67291 === (22))){
var inst_67245 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_67246 = figwheel.client.heads_up.append_warning_message.call(null,inst_67245);
var state_67290__$1 = state_67290;
var statearr_67307_67352 = state_67290__$1;
(statearr_67307_67352[(2)] = inst_67246);

(statearr_67307_67352[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67291 === (36))){
var inst_67276 = (state_67290[(2)]);
var state_67290__$1 = state_67290;
var statearr_67308_67353 = state_67290__$1;
(statearr_67308_67353[(2)] = inst_67276);

(statearr_67308_67353[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67291 === (29))){
var inst_67256 = (state_67290[(2)]);
var inst_67257 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_67258 = figwheel.client.auto_jump_to_error.call(null,opts,inst_67257);
var state_67290__$1 = (function (){var statearr_67309 = state_67290;
(statearr_67309[(9)] = inst_67256);

return statearr_67309;
})();
var statearr_67310_67354 = state_67290__$1;
(statearr_67310_67354[(2)] = inst_67258);

(statearr_67310_67354[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67291 === (6))){
var inst_67205 = (state_67290[(10)]);
var state_67290__$1 = state_67290;
var statearr_67311_67355 = state_67290__$1;
(statearr_67311_67355[(2)] = inst_67205);

(statearr_67311_67355[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67291 === (28))){
var inst_67252 = (state_67290[(2)]);
var inst_67253 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_67254 = figwheel.client.heads_up.display_warning.call(null,inst_67253);
var state_67290__$1 = (function (){var statearr_67312 = state_67290;
(statearr_67312[(11)] = inst_67252);

return statearr_67312;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67290__$1,(29),inst_67254);
} else {
if((state_val_67291 === (25))){
var inst_67250 = figwheel.client.heads_up.clear.call(null);
var state_67290__$1 = state_67290;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67290__$1,(28),inst_67250);
} else {
if((state_val_67291 === (34))){
var inst_67271 = figwheel.client.heads_up.flash_loaded.call(null);
var state_67290__$1 = state_67290;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67290__$1,(37),inst_67271);
} else {
if((state_val_67291 === (17))){
var inst_67230 = (state_67290[(2)]);
var inst_67231 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_67232 = figwheel.client.auto_jump_to_error.call(null,opts,inst_67231);
var state_67290__$1 = (function (){var statearr_67313 = state_67290;
(statearr_67313[(12)] = inst_67230);

return statearr_67313;
})();
var statearr_67314_67356 = state_67290__$1;
(statearr_67314_67356[(2)] = inst_67232);

(statearr_67314_67356[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67291 === (3))){
var inst_67222 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_67290__$1 = state_67290;
if(cljs.core.truth_(inst_67222)){
var statearr_67315_67357 = state_67290__$1;
(statearr_67315_67357[(1)] = (13));

} else {
var statearr_67316_67358 = state_67290__$1;
(statearr_67316_67358[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67291 === (12))){
var inst_67218 = (state_67290[(2)]);
var state_67290__$1 = state_67290;
var statearr_67317_67359 = state_67290__$1;
(statearr_67317_67359[(2)] = inst_67218);

(statearr_67317_67359[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67291 === (2))){
var inst_67205 = (state_67290[(10)]);
var inst_67205__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_67290__$1 = (function (){var statearr_67318 = state_67290;
(statearr_67318[(10)] = inst_67205__$1);

return statearr_67318;
})();
if(cljs.core.truth_(inst_67205__$1)){
var statearr_67319_67360 = state_67290__$1;
(statearr_67319_67360[(1)] = (5));

} else {
var statearr_67320_67361 = state_67290__$1;
(statearr_67320_67361[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67291 === (23))){
var inst_67248 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_67290__$1 = state_67290;
if(cljs.core.truth_(inst_67248)){
var statearr_67321_67362 = state_67290__$1;
(statearr_67321_67362[(1)] = (25));

} else {
var statearr_67322_67363 = state_67290__$1;
(statearr_67322_67363[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67291 === (35))){
var state_67290__$1 = state_67290;
var statearr_67323_67364 = state_67290__$1;
(statearr_67323_67364[(2)] = null);

(statearr_67323_67364[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67291 === (19))){
var inst_67243 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_67290__$1 = state_67290;
if(cljs.core.truth_(inst_67243)){
var statearr_67324_67365 = state_67290__$1;
(statearr_67324_67365[(1)] = (22));

} else {
var statearr_67325_67366 = state_67290__$1;
(statearr_67325_67366[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67291 === (11))){
var inst_67214 = (state_67290[(2)]);
var state_67290__$1 = state_67290;
var statearr_67326_67367 = state_67290__$1;
(statearr_67326_67367[(2)] = inst_67214);

(statearr_67326_67367[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67291 === (9))){
var inst_67216 = figwheel.client.heads_up.clear.call(null);
var state_67290__$1 = state_67290;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67290__$1,(12),inst_67216);
} else {
if((state_val_67291 === (5))){
var inst_67207 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_67290__$1 = state_67290;
var statearr_67327_67368 = state_67290__$1;
(statearr_67327_67368[(2)] = inst_67207);

(statearr_67327_67368[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67291 === (14))){
var inst_67234 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_67290__$1 = state_67290;
if(cljs.core.truth_(inst_67234)){
var statearr_67328_67369 = state_67290__$1;
(statearr_67328_67369[(1)] = (18));

} else {
var statearr_67329_67370 = state_67290__$1;
(statearr_67329_67370[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67291 === (26))){
var inst_67260 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_67290__$1 = state_67290;
if(cljs.core.truth_(inst_67260)){
var statearr_67330_67371 = state_67290__$1;
(statearr_67330_67371[(1)] = (30));

} else {
var statearr_67331_67372 = state_67290__$1;
(statearr_67331_67372[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67291 === (16))){
var inst_67226 = (state_67290[(2)]);
var inst_67227 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_67228 = figwheel.client.heads_up.display_exception.call(null,inst_67227);
var state_67290__$1 = (function (){var statearr_67332 = state_67290;
(statearr_67332[(13)] = inst_67226);

return statearr_67332;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67290__$1,(17),inst_67228);
} else {
if((state_val_67291 === (30))){
var inst_67262 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_67263 = figwheel.client.heads_up.display_warning.call(null,inst_67262);
var state_67290__$1 = state_67290;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67290__$1,(33),inst_67263);
} else {
if((state_val_67291 === (10))){
var inst_67220 = (state_67290[(2)]);
var state_67290__$1 = state_67290;
var statearr_67333_67373 = state_67290__$1;
(statearr_67333_67373[(2)] = inst_67220);

(statearr_67333_67373[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67291 === (18))){
var inst_67236 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_67237 = figwheel.client.heads_up.display_exception.call(null,inst_67236);
var state_67290__$1 = state_67290;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67290__$1,(21),inst_67237);
} else {
if((state_val_67291 === (37))){
var inst_67273 = (state_67290[(2)]);
var state_67290__$1 = state_67290;
var statearr_67334_67374 = state_67290__$1;
(statearr_67334_67374[(2)] = inst_67273);

(statearr_67334_67374[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67291 === (8))){
var inst_67212 = figwheel.client.heads_up.flash_loaded.call(null);
var state_67290__$1 = state_67290;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67290__$1,(11),inst_67212);
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
var statearr_67335 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_67335[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27885__auto__);

(statearr_67335[(1)] = (1));

return statearr_67335;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27885__auto____1 = (function (state_67290){
while(true){
var ret_value__27886__auto__ = (function (){try{while(true){
var result__27887__auto__ = switch__27884__auto__.call(null,state_67290);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27887__auto__;
}
break;
}
}catch (e67336){if((e67336 instanceof Object)){
var ex__27888__auto__ = e67336;
var statearr_67337_67375 = state_67290;
(statearr_67337_67375[(5)] = ex__27888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_67290);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67336;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67376 = state_67290;
state_67290 = G__67376;
continue;
} else {
return ret_value__27886__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27885__auto__ = function(state_67290){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27885__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27885__auto____1.call(this,state_67290);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27885__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27885__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27885__auto__;
})()
;})(switch__27884__auto__,c__27974__auto__,msg_hist,msg_names,msg))
})();
var state__27976__auto__ = (function (){var statearr_67338 = f__27975__auto__.call(null);
(statearr_67338[(6)] = c__27974__auto__);

return statearr_67338;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27976__auto__);
});})(c__27974__auto__,msg_hist,msg_names,msg))
);

return c__27974__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__27974__auto___67405 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27974__auto___67405,ch){
return (function (){
var f__27975__auto__ = (function (){var switch__27884__auto__ = ((function (c__27974__auto___67405,ch){
return (function (state_67391){
var state_val_67392 = (state_67391[(1)]);
if((state_val_67392 === (1))){
var state_67391__$1 = state_67391;
var statearr_67393_67406 = state_67391__$1;
(statearr_67393_67406[(2)] = null);

(statearr_67393_67406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67392 === (2))){
var state_67391__$1 = state_67391;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67391__$1,(4),ch);
} else {
if((state_val_67392 === (3))){
var inst_67389 = (state_67391[(2)]);
var state_67391__$1 = state_67391;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_67391__$1,inst_67389);
} else {
if((state_val_67392 === (4))){
var inst_67379 = (state_67391[(7)]);
var inst_67379__$1 = (state_67391[(2)]);
var state_67391__$1 = (function (){var statearr_67394 = state_67391;
(statearr_67394[(7)] = inst_67379__$1);

return statearr_67394;
})();
if(cljs.core.truth_(inst_67379__$1)){
var statearr_67395_67407 = state_67391__$1;
(statearr_67395_67407[(1)] = (5));

} else {
var statearr_67396_67408 = state_67391__$1;
(statearr_67396_67408[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67392 === (5))){
var inst_67379 = (state_67391[(7)]);
var inst_67381 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_67379);
var state_67391__$1 = state_67391;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67391__$1,(8),inst_67381);
} else {
if((state_val_67392 === (6))){
var state_67391__$1 = state_67391;
var statearr_67397_67409 = state_67391__$1;
(statearr_67397_67409[(2)] = null);

(statearr_67397_67409[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67392 === (7))){
var inst_67387 = (state_67391[(2)]);
var state_67391__$1 = state_67391;
var statearr_67398_67410 = state_67391__$1;
(statearr_67398_67410[(2)] = inst_67387);

(statearr_67398_67410[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67392 === (8))){
var inst_67383 = (state_67391[(2)]);
var state_67391__$1 = (function (){var statearr_67399 = state_67391;
(statearr_67399[(8)] = inst_67383);

return statearr_67399;
})();
var statearr_67400_67411 = state_67391__$1;
(statearr_67400_67411[(2)] = null);

(statearr_67400_67411[(1)] = (2));


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
});})(c__27974__auto___67405,ch))
;
return ((function (switch__27884__auto__,c__27974__auto___67405,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__27885__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__27885__auto____0 = (function (){
var statearr_67401 = [null,null,null,null,null,null,null,null,null];
(statearr_67401[(0)] = figwheel$client$heads_up_plugin_$_state_machine__27885__auto__);

(statearr_67401[(1)] = (1));

return statearr_67401;
});
var figwheel$client$heads_up_plugin_$_state_machine__27885__auto____1 = (function (state_67391){
while(true){
var ret_value__27886__auto__ = (function (){try{while(true){
var result__27887__auto__ = switch__27884__auto__.call(null,state_67391);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27887__auto__;
}
break;
}
}catch (e67402){if((e67402 instanceof Object)){
var ex__27888__auto__ = e67402;
var statearr_67403_67412 = state_67391;
(statearr_67403_67412[(5)] = ex__27888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_67391);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67402;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67413 = state_67391;
state_67391 = G__67413;
continue;
} else {
return ret_value__27886__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__27885__auto__ = function(state_67391){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__27885__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__27885__auto____1.call(this,state_67391);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__27885__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__27885__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__27885__auto__;
})()
;})(switch__27884__auto__,c__27974__auto___67405,ch))
})();
var state__27976__auto__ = (function (){var statearr_67404 = f__27975__auto__.call(null);
(statearr_67404[(6)] = c__27974__auto___67405);

return statearr_67404;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27976__auto__);
});})(c__27974__auto___67405,ch))
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
return (function (state_67419){
var state_val_67420 = (state_67419[(1)]);
if((state_val_67420 === (1))){
var inst_67414 = cljs.core.async.timeout.call(null,(3000));
var state_67419__$1 = state_67419;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67419__$1,(2),inst_67414);
} else {
if((state_val_67420 === (2))){
var inst_67416 = (state_67419[(2)]);
var inst_67417 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_67419__$1 = (function (){var statearr_67421 = state_67419;
(statearr_67421[(7)] = inst_67416);

return statearr_67421;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_67419__$1,inst_67417);
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
var statearr_67422 = [null,null,null,null,null,null,null,null];
(statearr_67422[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__27885__auto__);

(statearr_67422[(1)] = (1));

return statearr_67422;
});
var figwheel$client$enforce_project_plugin_$_state_machine__27885__auto____1 = (function (state_67419){
while(true){
var ret_value__27886__auto__ = (function (){try{while(true){
var result__27887__auto__ = switch__27884__auto__.call(null,state_67419);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27887__auto__;
}
break;
}
}catch (e67423){if((e67423 instanceof Object)){
var ex__27888__auto__ = e67423;
var statearr_67424_67426 = state_67419;
(statearr_67424_67426[(5)] = ex__27888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_67419);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67423;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67427 = state_67419;
state_67419 = G__67427;
continue;
} else {
return ret_value__27886__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__27885__auto__ = function(state_67419){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__27885__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__27885__auto____1.call(this,state_67419);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__27885__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__27885__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__27885__auto__;
})()
;})(switch__27884__auto__,c__27974__auto__))
})();
var state__27976__auto__ = (function (){var statearr_67425 = f__27975__auto__.call(null);
(statearr_67425[(6)] = c__27974__auto__);

return statearr_67425;
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
return (function (state_67434){
var state_val_67435 = (state_67434[(1)]);
if((state_val_67435 === (1))){
var inst_67428 = cljs.core.async.timeout.call(null,(2000));
var state_67434__$1 = state_67434;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_67434__$1,(2),inst_67428);
} else {
if((state_val_67435 === (2))){
var inst_67430 = (state_67434[(2)]);
var inst_67431 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_67432 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_67431);
var state_67434__$1 = (function (){var statearr_67436 = state_67434;
(statearr_67436[(7)] = inst_67430);

return statearr_67436;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_67434__$1,inst_67432);
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
var statearr_67437 = [null,null,null,null,null,null,null,null];
(statearr_67437[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27885__auto__);

(statearr_67437[(1)] = (1));

return statearr_67437;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27885__auto____1 = (function (state_67434){
while(true){
var ret_value__27886__auto__ = (function (){try{while(true){
var result__27887__auto__ = switch__27884__auto__.call(null,state_67434);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27887__auto__;
}
break;
}
}catch (e67438){if((e67438 instanceof Object)){
var ex__27888__auto__ = e67438;
var statearr_67439_67441 = state_67434;
(statearr_67439_67441[(5)] = ex__27888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_67434);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67438;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67442 = state_67434;
state_67434 = G__67442;
continue;
} else {
return ret_value__27886__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27885__auto__ = function(state_67434){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27885__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27885__auto____1.call(this,state_67434);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27885__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27885__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27885__auto__;
})()
;})(switch__27884__auto__,c__27974__auto__,figwheel_version,temp__5457__auto__))
})();
var state__27976__auto__ = (function (){var statearr_67440 = f__27975__auto__.call(null);
(statearr_67440[(6)] = c__27974__auto__);

return statearr_67440;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__67443){
var map__67444 = p__67443;
var map__67444__$1 = ((((!((map__67444 == null)))?(((((map__67444.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67444.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67444):map__67444);
var file = cljs.core.get.call(null,map__67444__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__67444__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__67444__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__67446 = "";
var G__67446__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__67446),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__67446);
var G__67446__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__67446__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__67446__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = line;
if(cljs.core.truth_(and__3911__auto__)){
return column;
} else {
return and__3911__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__67446__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__67446__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__67447){
var map__67448 = p__67447;
var map__67448__$1 = ((((!((map__67448 == null)))?(((((map__67448.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67448.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67448):map__67448);
var ed = map__67448__$1;
var formatted_exception = cljs.core.get.call(null,map__67448__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__67448__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__67448__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__67450_67454 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__67451_67455 = null;
var count__67452_67456 = (0);
var i__67453_67457 = (0);
while(true){
if((i__67453_67457 < count__67452_67456)){
var msg_67458 = cljs.core._nth.call(null,chunk__67451_67455,i__67453_67457);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_67458);


var G__67459 = seq__67450_67454;
var G__67460 = chunk__67451_67455;
var G__67461 = count__67452_67456;
var G__67462 = (i__67453_67457 + (1));
seq__67450_67454 = G__67459;
chunk__67451_67455 = G__67460;
count__67452_67456 = G__67461;
i__67453_67457 = G__67462;
continue;
} else {
var temp__5457__auto___67463 = cljs.core.seq.call(null,seq__67450_67454);
if(temp__5457__auto___67463){
var seq__67450_67464__$1 = temp__5457__auto___67463;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__67450_67464__$1)){
var c__4319__auto___67465 = cljs.core.chunk_first.call(null,seq__67450_67464__$1);
var G__67466 = cljs.core.chunk_rest.call(null,seq__67450_67464__$1);
var G__67467 = c__4319__auto___67465;
var G__67468 = cljs.core.count.call(null,c__4319__auto___67465);
var G__67469 = (0);
seq__67450_67454 = G__67466;
chunk__67451_67455 = G__67467;
count__67452_67456 = G__67468;
i__67453_67457 = G__67469;
continue;
} else {
var msg_67470 = cljs.core.first.call(null,seq__67450_67464__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_67470);


var G__67471 = cljs.core.next.call(null,seq__67450_67464__$1);
var G__67472 = null;
var G__67473 = (0);
var G__67474 = (0);
seq__67450_67454 = G__67471;
chunk__67451_67455 = G__67472;
count__67452_67456 = G__67473;
i__67453_67457 = G__67474;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__67475){
var map__67476 = p__67475;
var map__67476__$1 = ((((!((map__67476 == null)))?(((((map__67476.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67476.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67476):map__67476);
var w = map__67476__$1;
var message = cljs.core.get.call(null,map__67476__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__67478 = cljs.core.seq.call(null,plugins);
var chunk__67479 = null;
var count__67480 = (0);
var i__67481 = (0);
while(true){
if((i__67481 < count__67480)){
var vec__67482 = cljs.core._nth.call(null,chunk__67479,i__67481);
var k = cljs.core.nth.call(null,vec__67482,(0),null);
var plugin = cljs.core.nth.call(null,vec__67482,(1),null);
if(cljs.core.truth_(plugin)){
var pl_67488 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__67478,chunk__67479,count__67480,i__67481,pl_67488,vec__67482,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_67488.call(null,msg_hist);
});})(seq__67478,chunk__67479,count__67480,i__67481,pl_67488,vec__67482,k,plugin))
);
} else {
}


var G__67489 = seq__67478;
var G__67490 = chunk__67479;
var G__67491 = count__67480;
var G__67492 = (i__67481 + (1));
seq__67478 = G__67489;
chunk__67479 = G__67490;
count__67480 = G__67491;
i__67481 = G__67492;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__67478);
if(temp__5457__auto__){
var seq__67478__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__67478__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__67478__$1);
var G__67493 = cljs.core.chunk_rest.call(null,seq__67478__$1);
var G__67494 = c__4319__auto__;
var G__67495 = cljs.core.count.call(null,c__4319__auto__);
var G__67496 = (0);
seq__67478 = G__67493;
chunk__67479 = G__67494;
count__67480 = G__67495;
i__67481 = G__67496;
continue;
} else {
var vec__67485 = cljs.core.first.call(null,seq__67478__$1);
var k = cljs.core.nth.call(null,vec__67485,(0),null);
var plugin = cljs.core.nth.call(null,vec__67485,(1),null);
if(cljs.core.truth_(plugin)){
var pl_67497 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__67478,chunk__67479,count__67480,i__67481,pl_67497,vec__67485,k,plugin,seq__67478__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_67497.call(null,msg_hist);
});})(seq__67478,chunk__67479,count__67480,i__67481,pl_67497,vec__67485,k,plugin,seq__67478__$1,temp__5457__auto__))
);
} else {
}


var G__67498 = cljs.core.next.call(null,seq__67478__$1);
var G__67499 = null;
var G__67500 = (0);
var G__67501 = (0);
seq__67478 = G__67498;
chunk__67479 = G__67499;
count__67480 = G__67500;
i__67481 = G__67501;
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
var G__67503 = arguments.length;
switch (G__67503) {
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

var seq__67504_67509 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__67505_67510 = null;
var count__67506_67511 = (0);
var i__67507_67512 = (0);
while(true){
if((i__67507_67512 < count__67506_67511)){
var msg_67513 = cljs.core._nth.call(null,chunk__67505_67510,i__67507_67512);
figwheel.client.socket.handle_incoming_message.call(null,msg_67513);


var G__67514 = seq__67504_67509;
var G__67515 = chunk__67505_67510;
var G__67516 = count__67506_67511;
var G__67517 = (i__67507_67512 + (1));
seq__67504_67509 = G__67514;
chunk__67505_67510 = G__67515;
count__67506_67511 = G__67516;
i__67507_67512 = G__67517;
continue;
} else {
var temp__5457__auto___67518 = cljs.core.seq.call(null,seq__67504_67509);
if(temp__5457__auto___67518){
var seq__67504_67519__$1 = temp__5457__auto___67518;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__67504_67519__$1)){
var c__4319__auto___67520 = cljs.core.chunk_first.call(null,seq__67504_67519__$1);
var G__67521 = cljs.core.chunk_rest.call(null,seq__67504_67519__$1);
var G__67522 = c__4319__auto___67520;
var G__67523 = cljs.core.count.call(null,c__4319__auto___67520);
var G__67524 = (0);
seq__67504_67509 = G__67521;
chunk__67505_67510 = G__67522;
count__67506_67511 = G__67523;
i__67507_67512 = G__67524;
continue;
} else {
var msg_67525 = cljs.core.first.call(null,seq__67504_67519__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_67525);


var G__67526 = cljs.core.next.call(null,seq__67504_67519__$1);
var G__67527 = null;
var G__67528 = (0);
var G__67529 = (0);
seq__67504_67509 = G__67526;
chunk__67505_67510 = G__67527;
count__67506_67511 = G__67528;
i__67507_67512 = G__67529;
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
var len__4499__auto___67534 = arguments.length;
var i__4500__auto___67535 = (0);
while(true){
if((i__4500__auto___67535 < len__4499__auto___67534)){
args__4502__auto__.push((arguments[i__4500__auto___67535]));

var G__67536 = (i__4500__auto___67535 + (1));
i__4500__auto___67535 = G__67536;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__67531){
var map__67532 = p__67531;
var map__67532__$1 = ((((!((map__67532 == null)))?(((((map__67532.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67532.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67532):map__67532);
var opts = map__67532__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq67530){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq67530));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e67537){if((e67537 instanceof Error)){
var e = e67537;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e67537;

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
return (function (p__67538){
var map__67539 = p__67538;
var map__67539__$1 = ((((!((map__67539 == null)))?(((((map__67539.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__67539.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67539):map__67539);
var msg_name = cljs.core.get.call(null,map__67539__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1525389506011
