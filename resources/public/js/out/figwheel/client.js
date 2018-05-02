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
}catch (e73233){if((e73233 instanceof Error)){
var e = e73233;
return "Error: Unable to stringify";
} else {
throw e73233;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__73236 = arguments.length;
switch (G__73236) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__73234_SHARP_){
if(typeof p1__73234_SHARP_ === 'string'){
return p1__73234_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__73234_SHARP_);
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
var len__4499__auto___73239 = arguments.length;
var i__4500__auto___73240 = (0);
while(true){
if((i__4500__auto___73240 < len__4499__auto___73239)){
args__4502__auto__.push((arguments[i__4500__auto___73240]));

var G__73241 = (i__4500__auto___73240 + (1));
i__4500__auto___73240 = G__73241;
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
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq73238){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq73238));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___73243 = arguments.length;
var i__4500__auto___73244 = (0);
while(true){
if((i__4500__auto___73244 < len__4499__auto___73243)){
args__4502__auto__.push((arguments[i__4500__auto___73244]));

var G__73245 = (i__4500__auto___73244 + (1));
i__4500__auto___73244 = G__73245;
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
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq73242){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq73242));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__73246){
var map__73247 = p__73246;
var map__73247__$1 = ((((!((map__73247 == null)))?(((((map__73247.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73247.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__73247):map__73247);
var message = cljs.core.get.call(null,map__73247__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__73247__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__43716__auto___73326 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43716__auto___73326,ch){
return (function (){
var f__43717__auto__ = (function (){var switch__43559__auto__ = ((function (c__43716__auto___73326,ch){
return (function (state_73298){
var state_val_73299 = (state_73298[(1)]);
if((state_val_73299 === (7))){
var inst_73294 = (state_73298[(2)]);
var state_73298__$1 = state_73298;
var statearr_73300_73327 = state_73298__$1;
(statearr_73300_73327[(2)] = inst_73294);

(statearr_73300_73327[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73299 === (1))){
var state_73298__$1 = state_73298;
var statearr_73301_73328 = state_73298__$1;
(statearr_73301_73328[(2)] = null);

(statearr_73301_73328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73299 === (4))){
var inst_73251 = (state_73298[(7)]);
var inst_73251__$1 = (state_73298[(2)]);
var state_73298__$1 = (function (){var statearr_73302 = state_73298;
(statearr_73302[(7)] = inst_73251__$1);

return statearr_73302;
})();
if(cljs.core.truth_(inst_73251__$1)){
var statearr_73303_73329 = state_73298__$1;
(statearr_73303_73329[(1)] = (5));

} else {
var statearr_73304_73330 = state_73298__$1;
(statearr_73304_73330[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73299 === (15))){
var inst_73258 = (state_73298[(8)]);
var inst_73273 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_73258);
var inst_73274 = cljs.core.first.call(null,inst_73273);
var inst_73275 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_73274);
var inst_73276 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_73275)].join('');
var inst_73277 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_73276);
var state_73298__$1 = state_73298;
var statearr_73305_73331 = state_73298__$1;
(statearr_73305_73331[(2)] = inst_73277);

(statearr_73305_73331[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73299 === (13))){
var inst_73282 = (state_73298[(2)]);
var state_73298__$1 = state_73298;
var statearr_73306_73332 = state_73298__$1;
(statearr_73306_73332[(2)] = inst_73282);

(statearr_73306_73332[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73299 === (6))){
var state_73298__$1 = state_73298;
var statearr_73307_73333 = state_73298__$1;
(statearr_73307_73333[(2)] = null);

(statearr_73307_73333[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73299 === (17))){
var inst_73280 = (state_73298[(2)]);
var state_73298__$1 = state_73298;
var statearr_73308_73334 = state_73298__$1;
(statearr_73308_73334[(2)] = inst_73280);

(statearr_73308_73334[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73299 === (3))){
var inst_73296 = (state_73298[(2)]);
var state_73298__$1 = state_73298;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_73298__$1,inst_73296);
} else {
if((state_val_73299 === (12))){
var inst_73257 = (state_73298[(9)]);
var inst_73271 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_73257,opts);
var state_73298__$1 = state_73298;
if(cljs.core.truth_(inst_73271)){
var statearr_73309_73335 = state_73298__$1;
(statearr_73309_73335[(1)] = (15));

} else {
var statearr_73310_73336 = state_73298__$1;
(statearr_73310_73336[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73299 === (2))){
var state_73298__$1 = state_73298;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_73298__$1,(4),ch);
} else {
if((state_val_73299 === (11))){
var inst_73258 = (state_73298[(8)]);
var inst_73263 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_73264 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_73258);
var inst_73265 = cljs.core.async.timeout.call(null,(1000));
var inst_73266 = [inst_73264,inst_73265];
var inst_73267 = (new cljs.core.PersistentVector(null,2,(5),inst_73263,inst_73266,null));
var state_73298__$1 = state_73298;
return cljs.core.async.ioc_alts_BANG_.call(null,state_73298__$1,(14),inst_73267);
} else {
if((state_val_73299 === (9))){
var inst_73258 = (state_73298[(8)]);
var inst_73284 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_73285 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_73258);
var inst_73286 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_73285);
var inst_73287 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_73286)].join('');
var inst_73288 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_73287);
var state_73298__$1 = (function (){var statearr_73311 = state_73298;
(statearr_73311[(10)] = inst_73284);

return statearr_73311;
})();
var statearr_73312_73337 = state_73298__$1;
(statearr_73312_73337[(2)] = inst_73288);

(statearr_73312_73337[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73299 === (5))){
var inst_73251 = (state_73298[(7)]);
var inst_73253 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_73254 = (new cljs.core.PersistentArrayMap(null,2,inst_73253,null));
var inst_73255 = (new cljs.core.PersistentHashSet(null,inst_73254,null));
var inst_73256 = figwheel.client.focus_msgs.call(null,inst_73255,inst_73251);
var inst_73257 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_73256);
var inst_73258 = cljs.core.first.call(null,inst_73256);
var inst_73259 = figwheel.client.autoload_QMARK_.call(null);
var state_73298__$1 = (function (){var statearr_73313 = state_73298;
(statearr_73313[(9)] = inst_73257);

(statearr_73313[(8)] = inst_73258);

return statearr_73313;
})();
if(cljs.core.truth_(inst_73259)){
var statearr_73314_73338 = state_73298__$1;
(statearr_73314_73338[(1)] = (8));

} else {
var statearr_73315_73339 = state_73298__$1;
(statearr_73315_73339[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73299 === (14))){
var inst_73269 = (state_73298[(2)]);
var state_73298__$1 = state_73298;
var statearr_73316_73340 = state_73298__$1;
(statearr_73316_73340[(2)] = inst_73269);

(statearr_73316_73340[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73299 === (16))){
var state_73298__$1 = state_73298;
var statearr_73317_73341 = state_73298__$1;
(statearr_73317_73341[(2)] = null);

(statearr_73317_73341[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73299 === (10))){
var inst_73290 = (state_73298[(2)]);
var state_73298__$1 = (function (){var statearr_73318 = state_73298;
(statearr_73318[(11)] = inst_73290);

return statearr_73318;
})();
var statearr_73319_73342 = state_73298__$1;
(statearr_73319_73342[(2)] = null);

(statearr_73319_73342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73299 === (8))){
var inst_73257 = (state_73298[(9)]);
var inst_73261 = figwheel.client.reload_file_state_QMARK_.call(null,inst_73257,opts);
var state_73298__$1 = state_73298;
if(cljs.core.truth_(inst_73261)){
var statearr_73320_73343 = state_73298__$1;
(statearr_73320_73343[(1)] = (11));

} else {
var statearr_73321_73344 = state_73298__$1;
(statearr_73321_73344[(1)] = (12));

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
});})(c__43716__auto___73326,ch))
;
return ((function (switch__43559__auto__,c__43716__auto___73326,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__43560__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__43560__auto____0 = (function (){
var statearr_73322 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_73322[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__43560__auto__);

(statearr_73322[(1)] = (1));

return statearr_73322;
});
var figwheel$client$file_reloader_plugin_$_state_machine__43560__auto____1 = (function (state_73298){
while(true){
var ret_value__43561__auto__ = (function (){try{while(true){
var result__43562__auto__ = switch__43559__auto__.call(null,state_73298);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43562__auto__;
}
break;
}
}catch (e73323){if((e73323 instanceof Object)){
var ex__43563__auto__ = e73323;
var statearr_73324_73345 = state_73298;
(statearr_73324_73345[(5)] = ex__43563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_73298);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e73323;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73346 = state_73298;
state_73298 = G__73346;
continue;
} else {
return ret_value__43561__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__43560__auto__ = function(state_73298){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__43560__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__43560__auto____1.call(this,state_73298);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__43560__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__43560__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__43560__auto__;
})()
;})(switch__43559__auto__,c__43716__auto___73326,ch))
})();
var state__43718__auto__ = (function (){var statearr_73325 = f__43717__auto__.call(null);
(statearr_73325[(6)] = c__43716__auto___73326);

return statearr_73325;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43718__auto__);
});})(c__43716__auto___73326,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__73347_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__73347_SHARP_));
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
var base_path_73351 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_73351){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_73349 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_73350 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_73349,_STAR_print_fn_STAR_73350,sb,base_path_73351){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_73349,_STAR_print_fn_STAR_73350,sb,base_path_73351))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_73350;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_73349;
}}catch (e73348){if((e73348 instanceof Error)){
var e = e73348;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_73351], null));
} else {
var e = e73348;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_73351))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__73352){
var map__73353 = p__73352;
var map__73353__$1 = ((((!((map__73353 == null)))?(((((map__73353.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73353.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__73353):map__73353);
var opts = map__73353__$1;
var build_id = cljs.core.get.call(null,map__73353__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__73353,map__73353__$1,opts,build_id){
return (function (p__73355){
var vec__73356 = p__73355;
var seq__73357 = cljs.core.seq.call(null,vec__73356);
var first__73358 = cljs.core.first.call(null,seq__73357);
var seq__73357__$1 = cljs.core.next.call(null,seq__73357);
var map__73359 = first__73358;
var map__73359__$1 = ((((!((map__73359 == null)))?(((((map__73359.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73359.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__73359):map__73359);
var msg = map__73359__$1;
var msg_name = cljs.core.get.call(null,map__73359__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__73357__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__73356,seq__73357,first__73358,seq__73357__$1,map__73359,map__73359__$1,msg,msg_name,_,map__73353,map__73353__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__73356,seq__73357,first__73358,seq__73357__$1,map__73359,map__73359__$1,msg,msg_name,_,map__73353,map__73353__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__73353,map__73353__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__73361){
var vec__73362 = p__73361;
var seq__73363 = cljs.core.seq.call(null,vec__73362);
var first__73364 = cljs.core.first.call(null,seq__73363);
var seq__73363__$1 = cljs.core.next.call(null,seq__73363);
var map__73365 = first__73364;
var map__73365__$1 = ((((!((map__73365 == null)))?(((((map__73365.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73365.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__73365):map__73365);
var msg = map__73365__$1;
var msg_name = cljs.core.get.call(null,map__73365__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__73363__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__73367){
var map__73368 = p__73367;
var map__73368__$1 = ((((!((map__73368 == null)))?(((((map__73368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73368.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__73368):map__73368);
var on_compile_warning = cljs.core.get.call(null,map__73368__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__73368__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__73368,map__73368__$1,on_compile_warning,on_compile_fail){
return (function (p__73370){
var vec__73371 = p__73370;
var seq__73372 = cljs.core.seq.call(null,vec__73371);
var first__73373 = cljs.core.first.call(null,seq__73372);
var seq__73372__$1 = cljs.core.next.call(null,seq__73372);
var map__73374 = first__73373;
var map__73374__$1 = ((((!((map__73374 == null)))?(((((map__73374.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73374.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__73374):map__73374);
var msg = map__73374__$1;
var msg_name = cljs.core.get.call(null,map__73374__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__73372__$1;
var pred__73376 = cljs.core._EQ_;
var expr__73377 = msg_name;
if(cljs.core.truth_(pred__73376.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__73377))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__73376.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__73377))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__73368,map__73368__$1,on_compile_warning,on_compile_fail))
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
return (function (state_73466){
var state_val_73467 = (state_73466[(1)]);
if((state_val_73467 === (7))){
var inst_73386 = (state_73466[(2)]);
var state_73466__$1 = state_73466;
if(cljs.core.truth_(inst_73386)){
var statearr_73468_73515 = state_73466__$1;
(statearr_73468_73515[(1)] = (8));

} else {
var statearr_73469_73516 = state_73466__$1;
(statearr_73469_73516[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73467 === (20))){
var inst_73460 = (state_73466[(2)]);
var state_73466__$1 = state_73466;
var statearr_73470_73517 = state_73466__$1;
(statearr_73470_73517[(2)] = inst_73460);

(statearr_73470_73517[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73467 === (27))){
var inst_73456 = (state_73466[(2)]);
var state_73466__$1 = state_73466;
var statearr_73471_73518 = state_73466__$1;
(statearr_73471_73518[(2)] = inst_73456);

(statearr_73471_73518[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73467 === (1))){
var inst_73379 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_73466__$1 = state_73466;
if(cljs.core.truth_(inst_73379)){
var statearr_73472_73519 = state_73466__$1;
(statearr_73472_73519[(1)] = (2));

} else {
var statearr_73473_73520 = state_73466__$1;
(statearr_73473_73520[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73467 === (24))){
var inst_73458 = (state_73466[(2)]);
var state_73466__$1 = state_73466;
var statearr_73474_73521 = state_73466__$1;
(statearr_73474_73521[(2)] = inst_73458);

(statearr_73474_73521[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73467 === (4))){
var inst_73464 = (state_73466[(2)]);
var state_73466__$1 = state_73466;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_73466__$1,inst_73464);
} else {
if((state_val_73467 === (15))){
var inst_73462 = (state_73466[(2)]);
var state_73466__$1 = state_73466;
var statearr_73475_73522 = state_73466__$1;
(statearr_73475_73522[(2)] = inst_73462);

(statearr_73475_73522[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73467 === (21))){
var inst_73415 = (state_73466[(2)]);
var inst_73416 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_73417 = figwheel.client.auto_jump_to_error.call(null,opts,inst_73416);
var state_73466__$1 = (function (){var statearr_73476 = state_73466;
(statearr_73476[(7)] = inst_73415);

return statearr_73476;
})();
var statearr_73477_73523 = state_73466__$1;
(statearr_73477_73523[(2)] = inst_73417);

(statearr_73477_73523[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73467 === (31))){
var inst_73445 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_73466__$1 = state_73466;
if(cljs.core.truth_(inst_73445)){
var statearr_73478_73524 = state_73466__$1;
(statearr_73478_73524[(1)] = (34));

} else {
var statearr_73479_73525 = state_73466__$1;
(statearr_73479_73525[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73467 === (32))){
var inst_73454 = (state_73466[(2)]);
var state_73466__$1 = state_73466;
var statearr_73480_73526 = state_73466__$1;
(statearr_73480_73526[(2)] = inst_73454);

(statearr_73480_73526[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73467 === (33))){
var inst_73441 = (state_73466[(2)]);
var inst_73442 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_73443 = figwheel.client.auto_jump_to_error.call(null,opts,inst_73442);
var state_73466__$1 = (function (){var statearr_73481 = state_73466;
(statearr_73481[(8)] = inst_73441);

return statearr_73481;
})();
var statearr_73482_73527 = state_73466__$1;
(statearr_73482_73527[(2)] = inst_73443);

(statearr_73482_73527[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73467 === (13))){
var inst_73400 = figwheel.client.heads_up.clear.call(null);
var state_73466__$1 = state_73466;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_73466__$1,(16),inst_73400);
} else {
if((state_val_73467 === (22))){
var inst_73421 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_73422 = figwheel.client.heads_up.append_warning_message.call(null,inst_73421);
var state_73466__$1 = state_73466;
var statearr_73483_73528 = state_73466__$1;
(statearr_73483_73528[(2)] = inst_73422);

(statearr_73483_73528[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73467 === (36))){
var inst_73452 = (state_73466[(2)]);
var state_73466__$1 = state_73466;
var statearr_73484_73529 = state_73466__$1;
(statearr_73484_73529[(2)] = inst_73452);

(statearr_73484_73529[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73467 === (29))){
var inst_73432 = (state_73466[(2)]);
var inst_73433 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_73434 = figwheel.client.auto_jump_to_error.call(null,opts,inst_73433);
var state_73466__$1 = (function (){var statearr_73485 = state_73466;
(statearr_73485[(9)] = inst_73432);

return statearr_73485;
})();
var statearr_73486_73530 = state_73466__$1;
(statearr_73486_73530[(2)] = inst_73434);

(statearr_73486_73530[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73467 === (6))){
var inst_73381 = (state_73466[(10)]);
var state_73466__$1 = state_73466;
var statearr_73487_73531 = state_73466__$1;
(statearr_73487_73531[(2)] = inst_73381);

(statearr_73487_73531[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73467 === (28))){
var inst_73428 = (state_73466[(2)]);
var inst_73429 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_73430 = figwheel.client.heads_up.display_warning.call(null,inst_73429);
var state_73466__$1 = (function (){var statearr_73488 = state_73466;
(statearr_73488[(11)] = inst_73428);

return statearr_73488;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_73466__$1,(29),inst_73430);
} else {
if((state_val_73467 === (25))){
var inst_73426 = figwheel.client.heads_up.clear.call(null);
var state_73466__$1 = state_73466;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_73466__$1,(28),inst_73426);
} else {
if((state_val_73467 === (34))){
var inst_73447 = figwheel.client.heads_up.flash_loaded.call(null);
var state_73466__$1 = state_73466;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_73466__$1,(37),inst_73447);
} else {
if((state_val_73467 === (17))){
var inst_73406 = (state_73466[(2)]);
var inst_73407 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_73408 = figwheel.client.auto_jump_to_error.call(null,opts,inst_73407);
var state_73466__$1 = (function (){var statearr_73489 = state_73466;
(statearr_73489[(12)] = inst_73406);

return statearr_73489;
})();
var statearr_73490_73532 = state_73466__$1;
(statearr_73490_73532[(2)] = inst_73408);

(statearr_73490_73532[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73467 === (3))){
var inst_73398 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_73466__$1 = state_73466;
if(cljs.core.truth_(inst_73398)){
var statearr_73491_73533 = state_73466__$1;
(statearr_73491_73533[(1)] = (13));

} else {
var statearr_73492_73534 = state_73466__$1;
(statearr_73492_73534[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73467 === (12))){
var inst_73394 = (state_73466[(2)]);
var state_73466__$1 = state_73466;
var statearr_73493_73535 = state_73466__$1;
(statearr_73493_73535[(2)] = inst_73394);

(statearr_73493_73535[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73467 === (2))){
var inst_73381 = (state_73466[(10)]);
var inst_73381__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_73466__$1 = (function (){var statearr_73494 = state_73466;
(statearr_73494[(10)] = inst_73381__$1);

return statearr_73494;
})();
if(cljs.core.truth_(inst_73381__$1)){
var statearr_73495_73536 = state_73466__$1;
(statearr_73495_73536[(1)] = (5));

} else {
var statearr_73496_73537 = state_73466__$1;
(statearr_73496_73537[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73467 === (23))){
var inst_73424 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_73466__$1 = state_73466;
if(cljs.core.truth_(inst_73424)){
var statearr_73497_73538 = state_73466__$1;
(statearr_73497_73538[(1)] = (25));

} else {
var statearr_73498_73539 = state_73466__$1;
(statearr_73498_73539[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73467 === (35))){
var state_73466__$1 = state_73466;
var statearr_73499_73540 = state_73466__$1;
(statearr_73499_73540[(2)] = null);

(statearr_73499_73540[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73467 === (19))){
var inst_73419 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_73466__$1 = state_73466;
if(cljs.core.truth_(inst_73419)){
var statearr_73500_73541 = state_73466__$1;
(statearr_73500_73541[(1)] = (22));

} else {
var statearr_73501_73542 = state_73466__$1;
(statearr_73501_73542[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73467 === (11))){
var inst_73390 = (state_73466[(2)]);
var state_73466__$1 = state_73466;
var statearr_73502_73543 = state_73466__$1;
(statearr_73502_73543[(2)] = inst_73390);

(statearr_73502_73543[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73467 === (9))){
var inst_73392 = figwheel.client.heads_up.clear.call(null);
var state_73466__$1 = state_73466;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_73466__$1,(12),inst_73392);
} else {
if((state_val_73467 === (5))){
var inst_73383 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_73466__$1 = state_73466;
var statearr_73503_73544 = state_73466__$1;
(statearr_73503_73544[(2)] = inst_73383);

(statearr_73503_73544[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73467 === (14))){
var inst_73410 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_73466__$1 = state_73466;
if(cljs.core.truth_(inst_73410)){
var statearr_73504_73545 = state_73466__$1;
(statearr_73504_73545[(1)] = (18));

} else {
var statearr_73505_73546 = state_73466__$1;
(statearr_73505_73546[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73467 === (26))){
var inst_73436 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_73466__$1 = state_73466;
if(cljs.core.truth_(inst_73436)){
var statearr_73506_73547 = state_73466__$1;
(statearr_73506_73547[(1)] = (30));

} else {
var statearr_73507_73548 = state_73466__$1;
(statearr_73507_73548[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73467 === (16))){
var inst_73402 = (state_73466[(2)]);
var inst_73403 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_73404 = figwheel.client.heads_up.display_exception.call(null,inst_73403);
var state_73466__$1 = (function (){var statearr_73508 = state_73466;
(statearr_73508[(13)] = inst_73402);

return statearr_73508;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_73466__$1,(17),inst_73404);
} else {
if((state_val_73467 === (30))){
var inst_73438 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_73439 = figwheel.client.heads_up.display_warning.call(null,inst_73438);
var state_73466__$1 = state_73466;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_73466__$1,(33),inst_73439);
} else {
if((state_val_73467 === (10))){
var inst_73396 = (state_73466[(2)]);
var state_73466__$1 = state_73466;
var statearr_73509_73549 = state_73466__$1;
(statearr_73509_73549[(2)] = inst_73396);

(statearr_73509_73549[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73467 === (18))){
var inst_73412 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_73413 = figwheel.client.heads_up.display_exception.call(null,inst_73412);
var state_73466__$1 = state_73466;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_73466__$1,(21),inst_73413);
} else {
if((state_val_73467 === (37))){
var inst_73449 = (state_73466[(2)]);
var state_73466__$1 = state_73466;
var statearr_73510_73550 = state_73466__$1;
(statearr_73510_73550[(2)] = inst_73449);

(statearr_73510_73550[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73467 === (8))){
var inst_73388 = figwheel.client.heads_up.flash_loaded.call(null);
var state_73466__$1 = state_73466;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_73466__$1,(11),inst_73388);
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
var statearr_73511 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_73511[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__43560__auto__);

(statearr_73511[(1)] = (1));

return statearr_73511;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__43560__auto____1 = (function (state_73466){
while(true){
var ret_value__43561__auto__ = (function (){try{while(true){
var result__43562__auto__ = switch__43559__auto__.call(null,state_73466);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43562__auto__;
}
break;
}
}catch (e73512){if((e73512 instanceof Object)){
var ex__43563__auto__ = e73512;
var statearr_73513_73551 = state_73466;
(statearr_73513_73551[(5)] = ex__43563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_73466);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e73512;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73552 = state_73466;
state_73466 = G__73552;
continue;
} else {
return ret_value__43561__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__43560__auto__ = function(state_73466){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__43560__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__43560__auto____1.call(this,state_73466);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__43560__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__43560__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__43560__auto__;
})()
;})(switch__43559__auto__,c__43716__auto__,msg_hist,msg_names,msg))
})();
var state__43718__auto__ = (function (){var statearr_73514 = f__43717__auto__.call(null);
(statearr_73514[(6)] = c__43716__auto__);

return statearr_73514;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43718__auto__);
});})(c__43716__auto__,msg_hist,msg_names,msg))
);

return c__43716__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__43716__auto___73581 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43716__auto___73581,ch){
return (function (){
var f__43717__auto__ = (function (){var switch__43559__auto__ = ((function (c__43716__auto___73581,ch){
return (function (state_73567){
var state_val_73568 = (state_73567[(1)]);
if((state_val_73568 === (1))){
var state_73567__$1 = state_73567;
var statearr_73569_73582 = state_73567__$1;
(statearr_73569_73582[(2)] = null);

(statearr_73569_73582[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73568 === (2))){
var state_73567__$1 = state_73567;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_73567__$1,(4),ch);
} else {
if((state_val_73568 === (3))){
var inst_73565 = (state_73567[(2)]);
var state_73567__$1 = state_73567;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_73567__$1,inst_73565);
} else {
if((state_val_73568 === (4))){
var inst_73555 = (state_73567[(7)]);
var inst_73555__$1 = (state_73567[(2)]);
var state_73567__$1 = (function (){var statearr_73570 = state_73567;
(statearr_73570[(7)] = inst_73555__$1);

return statearr_73570;
})();
if(cljs.core.truth_(inst_73555__$1)){
var statearr_73571_73583 = state_73567__$1;
(statearr_73571_73583[(1)] = (5));

} else {
var statearr_73572_73584 = state_73567__$1;
(statearr_73572_73584[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73568 === (5))){
var inst_73555 = (state_73567[(7)]);
var inst_73557 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_73555);
var state_73567__$1 = state_73567;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_73567__$1,(8),inst_73557);
} else {
if((state_val_73568 === (6))){
var state_73567__$1 = state_73567;
var statearr_73573_73585 = state_73567__$1;
(statearr_73573_73585[(2)] = null);

(statearr_73573_73585[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73568 === (7))){
var inst_73563 = (state_73567[(2)]);
var state_73567__$1 = state_73567;
var statearr_73574_73586 = state_73567__$1;
(statearr_73574_73586[(2)] = inst_73563);

(statearr_73574_73586[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_73568 === (8))){
var inst_73559 = (state_73567[(2)]);
var state_73567__$1 = (function (){var statearr_73575 = state_73567;
(statearr_73575[(8)] = inst_73559);

return statearr_73575;
})();
var statearr_73576_73587 = state_73567__$1;
(statearr_73576_73587[(2)] = null);

(statearr_73576_73587[(1)] = (2));


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
});})(c__43716__auto___73581,ch))
;
return ((function (switch__43559__auto__,c__43716__auto___73581,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__43560__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__43560__auto____0 = (function (){
var statearr_73577 = [null,null,null,null,null,null,null,null,null];
(statearr_73577[(0)] = figwheel$client$heads_up_plugin_$_state_machine__43560__auto__);

(statearr_73577[(1)] = (1));

return statearr_73577;
});
var figwheel$client$heads_up_plugin_$_state_machine__43560__auto____1 = (function (state_73567){
while(true){
var ret_value__43561__auto__ = (function (){try{while(true){
var result__43562__auto__ = switch__43559__auto__.call(null,state_73567);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43562__auto__;
}
break;
}
}catch (e73578){if((e73578 instanceof Object)){
var ex__43563__auto__ = e73578;
var statearr_73579_73588 = state_73567;
(statearr_73579_73588[(5)] = ex__43563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_73567);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e73578;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73589 = state_73567;
state_73567 = G__73589;
continue;
} else {
return ret_value__43561__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__43560__auto__ = function(state_73567){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__43560__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__43560__auto____1.call(this,state_73567);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__43560__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__43560__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__43560__auto__;
})()
;})(switch__43559__auto__,c__43716__auto___73581,ch))
})();
var state__43718__auto__ = (function (){var statearr_73580 = f__43717__auto__.call(null);
(statearr_73580[(6)] = c__43716__auto___73581);

return statearr_73580;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43718__auto__);
});})(c__43716__auto___73581,ch))
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
return (function (state_73595){
var state_val_73596 = (state_73595[(1)]);
if((state_val_73596 === (1))){
var inst_73590 = cljs.core.async.timeout.call(null,(3000));
var state_73595__$1 = state_73595;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_73595__$1,(2),inst_73590);
} else {
if((state_val_73596 === (2))){
var inst_73592 = (state_73595[(2)]);
var inst_73593 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_73595__$1 = (function (){var statearr_73597 = state_73595;
(statearr_73597[(7)] = inst_73592);

return statearr_73597;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_73595__$1,inst_73593);
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
var statearr_73598 = [null,null,null,null,null,null,null,null];
(statearr_73598[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__43560__auto__);

(statearr_73598[(1)] = (1));

return statearr_73598;
});
var figwheel$client$enforce_project_plugin_$_state_machine__43560__auto____1 = (function (state_73595){
while(true){
var ret_value__43561__auto__ = (function (){try{while(true){
var result__43562__auto__ = switch__43559__auto__.call(null,state_73595);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43562__auto__;
}
break;
}
}catch (e73599){if((e73599 instanceof Object)){
var ex__43563__auto__ = e73599;
var statearr_73600_73602 = state_73595;
(statearr_73600_73602[(5)] = ex__43563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_73595);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e73599;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73603 = state_73595;
state_73595 = G__73603;
continue;
} else {
return ret_value__43561__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__43560__auto__ = function(state_73595){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__43560__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__43560__auto____1.call(this,state_73595);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__43560__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__43560__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__43560__auto__;
})()
;})(switch__43559__auto__,c__43716__auto__))
})();
var state__43718__auto__ = (function (){var statearr_73601 = f__43717__auto__.call(null);
(statearr_73601[(6)] = c__43716__auto__);

return statearr_73601;
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
return (function (state_73610){
var state_val_73611 = (state_73610[(1)]);
if((state_val_73611 === (1))){
var inst_73604 = cljs.core.async.timeout.call(null,(2000));
var state_73610__$1 = state_73610;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_73610__$1,(2),inst_73604);
} else {
if((state_val_73611 === (2))){
var inst_73606 = (state_73610[(2)]);
var inst_73607 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_73608 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_73607);
var state_73610__$1 = (function (){var statearr_73612 = state_73610;
(statearr_73612[(7)] = inst_73606);

return statearr_73612;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_73610__$1,inst_73608);
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
var statearr_73613 = [null,null,null,null,null,null,null,null];
(statearr_73613[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__43560__auto__);

(statearr_73613[(1)] = (1));

return statearr_73613;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__43560__auto____1 = (function (state_73610){
while(true){
var ret_value__43561__auto__ = (function (){try{while(true){
var result__43562__auto__ = switch__43559__auto__.call(null,state_73610);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43562__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43562__auto__;
}
break;
}
}catch (e73614){if((e73614 instanceof Object)){
var ex__43563__auto__ = e73614;
var statearr_73615_73617 = state_73610;
(statearr_73615_73617[(5)] = ex__43563__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_73610);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e73614;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43561__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73618 = state_73610;
state_73610 = G__73618;
continue;
} else {
return ret_value__43561__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__43560__auto__ = function(state_73610){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__43560__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__43560__auto____1.call(this,state_73610);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__43560__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__43560__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__43560__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__43560__auto__;
})()
;})(switch__43559__auto__,c__43716__auto__,figwheel_version,temp__5457__auto__))
})();
var state__43718__auto__ = (function (){var statearr_73616 = f__43717__auto__.call(null);
(statearr_73616[(6)] = c__43716__auto__);

return statearr_73616;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__73619){
var map__73620 = p__73619;
var map__73620__$1 = ((((!((map__73620 == null)))?(((((map__73620.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73620.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__73620):map__73620);
var file = cljs.core.get.call(null,map__73620__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__73620__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__73620__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__73622 = "";
var G__73622__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__73622),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__73622);
var G__73622__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__73622__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__73622__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = line;
if(cljs.core.truth_(and__3911__auto__)){
return column;
} else {
return and__3911__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__73622__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__73622__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__73623){
var map__73624 = p__73623;
var map__73624__$1 = ((((!((map__73624 == null)))?(((((map__73624.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73624.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__73624):map__73624);
var ed = map__73624__$1;
var formatted_exception = cljs.core.get.call(null,map__73624__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__73624__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__73624__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__73626_73630 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__73627_73631 = null;
var count__73628_73632 = (0);
var i__73629_73633 = (0);
while(true){
if((i__73629_73633 < count__73628_73632)){
var msg_73634 = cljs.core._nth.call(null,chunk__73627_73631,i__73629_73633);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_73634);


var G__73635 = seq__73626_73630;
var G__73636 = chunk__73627_73631;
var G__73637 = count__73628_73632;
var G__73638 = (i__73629_73633 + (1));
seq__73626_73630 = G__73635;
chunk__73627_73631 = G__73636;
count__73628_73632 = G__73637;
i__73629_73633 = G__73638;
continue;
} else {
var temp__5457__auto___73639 = cljs.core.seq.call(null,seq__73626_73630);
if(temp__5457__auto___73639){
var seq__73626_73640__$1 = temp__5457__auto___73639;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__73626_73640__$1)){
var c__4319__auto___73641 = cljs.core.chunk_first.call(null,seq__73626_73640__$1);
var G__73642 = cljs.core.chunk_rest.call(null,seq__73626_73640__$1);
var G__73643 = c__4319__auto___73641;
var G__73644 = cljs.core.count.call(null,c__4319__auto___73641);
var G__73645 = (0);
seq__73626_73630 = G__73642;
chunk__73627_73631 = G__73643;
count__73628_73632 = G__73644;
i__73629_73633 = G__73645;
continue;
} else {
var msg_73646 = cljs.core.first.call(null,seq__73626_73640__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_73646);


var G__73647 = cljs.core.next.call(null,seq__73626_73640__$1);
var G__73648 = null;
var G__73649 = (0);
var G__73650 = (0);
seq__73626_73630 = G__73647;
chunk__73627_73631 = G__73648;
count__73628_73632 = G__73649;
i__73629_73633 = G__73650;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__73651){
var map__73652 = p__73651;
var map__73652__$1 = ((((!((map__73652 == null)))?(((((map__73652.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73652.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__73652):map__73652);
var w = map__73652__$1;
var message = cljs.core.get.call(null,map__73652__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__73654 = cljs.core.seq.call(null,plugins);
var chunk__73655 = null;
var count__73656 = (0);
var i__73657 = (0);
while(true){
if((i__73657 < count__73656)){
var vec__73658 = cljs.core._nth.call(null,chunk__73655,i__73657);
var k = cljs.core.nth.call(null,vec__73658,(0),null);
var plugin = cljs.core.nth.call(null,vec__73658,(1),null);
if(cljs.core.truth_(plugin)){
var pl_73664 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__73654,chunk__73655,count__73656,i__73657,pl_73664,vec__73658,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_73664.call(null,msg_hist);
});})(seq__73654,chunk__73655,count__73656,i__73657,pl_73664,vec__73658,k,plugin))
);
} else {
}


var G__73665 = seq__73654;
var G__73666 = chunk__73655;
var G__73667 = count__73656;
var G__73668 = (i__73657 + (1));
seq__73654 = G__73665;
chunk__73655 = G__73666;
count__73656 = G__73667;
i__73657 = G__73668;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__73654);
if(temp__5457__auto__){
var seq__73654__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__73654__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__73654__$1);
var G__73669 = cljs.core.chunk_rest.call(null,seq__73654__$1);
var G__73670 = c__4319__auto__;
var G__73671 = cljs.core.count.call(null,c__4319__auto__);
var G__73672 = (0);
seq__73654 = G__73669;
chunk__73655 = G__73670;
count__73656 = G__73671;
i__73657 = G__73672;
continue;
} else {
var vec__73661 = cljs.core.first.call(null,seq__73654__$1);
var k = cljs.core.nth.call(null,vec__73661,(0),null);
var plugin = cljs.core.nth.call(null,vec__73661,(1),null);
if(cljs.core.truth_(plugin)){
var pl_73673 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__73654,chunk__73655,count__73656,i__73657,pl_73673,vec__73661,k,plugin,seq__73654__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_73673.call(null,msg_hist);
});})(seq__73654,chunk__73655,count__73656,i__73657,pl_73673,vec__73661,k,plugin,seq__73654__$1,temp__5457__auto__))
);
} else {
}


var G__73674 = cljs.core.next.call(null,seq__73654__$1);
var G__73675 = null;
var G__73676 = (0);
var G__73677 = (0);
seq__73654 = G__73674;
chunk__73655 = G__73675;
count__73656 = G__73676;
i__73657 = G__73677;
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
var G__73679 = arguments.length;
switch (G__73679) {
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

var seq__73680_73685 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__73681_73686 = null;
var count__73682_73687 = (0);
var i__73683_73688 = (0);
while(true){
if((i__73683_73688 < count__73682_73687)){
var msg_73689 = cljs.core._nth.call(null,chunk__73681_73686,i__73683_73688);
figwheel.client.socket.handle_incoming_message.call(null,msg_73689);


var G__73690 = seq__73680_73685;
var G__73691 = chunk__73681_73686;
var G__73692 = count__73682_73687;
var G__73693 = (i__73683_73688 + (1));
seq__73680_73685 = G__73690;
chunk__73681_73686 = G__73691;
count__73682_73687 = G__73692;
i__73683_73688 = G__73693;
continue;
} else {
var temp__5457__auto___73694 = cljs.core.seq.call(null,seq__73680_73685);
if(temp__5457__auto___73694){
var seq__73680_73695__$1 = temp__5457__auto___73694;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__73680_73695__$1)){
var c__4319__auto___73696 = cljs.core.chunk_first.call(null,seq__73680_73695__$1);
var G__73697 = cljs.core.chunk_rest.call(null,seq__73680_73695__$1);
var G__73698 = c__4319__auto___73696;
var G__73699 = cljs.core.count.call(null,c__4319__auto___73696);
var G__73700 = (0);
seq__73680_73685 = G__73697;
chunk__73681_73686 = G__73698;
count__73682_73687 = G__73699;
i__73683_73688 = G__73700;
continue;
} else {
var msg_73701 = cljs.core.first.call(null,seq__73680_73695__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_73701);


var G__73702 = cljs.core.next.call(null,seq__73680_73695__$1);
var G__73703 = null;
var G__73704 = (0);
var G__73705 = (0);
seq__73680_73685 = G__73702;
chunk__73681_73686 = G__73703;
count__73682_73687 = G__73704;
i__73683_73688 = G__73705;
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
var len__4499__auto___73710 = arguments.length;
var i__4500__auto___73711 = (0);
while(true){
if((i__4500__auto___73711 < len__4499__auto___73710)){
args__4502__auto__.push((arguments[i__4500__auto___73711]));

var G__73712 = (i__4500__auto___73711 + (1));
i__4500__auto___73711 = G__73712;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__73707){
var map__73708 = p__73707;
var map__73708__$1 = ((((!((map__73708 == null)))?(((((map__73708.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73708.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__73708):map__73708);
var opts = map__73708__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq73706){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq73706));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e73713){if((e73713 instanceof Error)){
var e = e73713;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e73713;

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
return (function (p__73714){
var map__73715 = p__73714;
var map__73715__$1 = ((((!((map__73715 == null)))?(((((map__73715.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__73715.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__73715):map__73715);
var msg_name = cljs.core.get.call(null,map__73715__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1525299311062
