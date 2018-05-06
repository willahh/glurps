// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.stacktrace');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('clojure.string');
if(typeof cljs.stacktrace.parse_stacktrace !== 'undefined'){
} else {
/**
 * Parse a JavaScript stacktrace string into a canonical data form. The
 *   arguments:
 * 
 *   repl-env - the repl environment, an optional map with :host and :port keys
 *           if the stacktrace includes url, not file references
 *   st       - the original stacktrace string to parse
 *   err      - an error map. :ua-product key defines the type of stacktrace parser
 *           to use, for example :chrome
 *   opts     - additional options. :output-dir maybe given in this argument if
 *           :host and :port do not apply, for example, a file path
 * 
 *   The canonical stacktrace representation can easily be mapped to a
 *   ClojureScript one see mapped-stacktrace and mapped-stacktrace-str
 */
cljs.stacktrace.parse_stacktrace = (function (){var method_table__4382__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4383__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4384__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4385__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4386__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.stacktrace","parse-stacktrace"),((function (method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__,hierarchy__4386__auto__){
return (function (repl_env,st,err,opts){
return new cljs.core.Keyword(null,"ua-product","ua-product",938384227).cljs$core$IFn$_invoke$arity$1(err);
});})(method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__,hierarchy__4386__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4386__auto__,method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__));
})();
}
cljs.stacktrace.parse_int = (function cljs$stacktrace$parse_int(s){
return parseInt(s,(10));
});
cljs.stacktrace.starts_with_QMARK_ = (function cljs$stacktrace$starts_with_QMARK_(s0,s1){
return goog.string.startsWith(s0,s1);
});
cljs.stacktrace.ends_with_QMARK_ = (function cljs$stacktrace$ends_with_QMARK_(s0,s1){
return goog.string.endsWith(s0,s1);
});
cljs.stacktrace.string__GT_regex = (function cljs$stacktrace$string__GT_regex(s){
return (new RegExp(s));
});
cljs.stacktrace.output_directory = (function cljs$stacktrace$output_directory(opts){
var or__3922__auto__ = new cljs.core.Keyword(null,"output-dir","output-dir",-290956991).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return "out";
}
});
cljs.core._add_method.call(null,cljs.stacktrace.parse_stacktrace,new cljs.core.Keyword(null,"default","default",-1987822328),(function (repl_env,st,err,opts){
return st;
}));
cljs.stacktrace.parse_file_line_column = (function cljs$stacktrace$parse_file_line_column(flc){
if(cljs.core.not.call(null,cljs.core.re_find.call(null,/:/,flc))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [flc,null,null], null);
} else {
var xs = clojure.string.split.call(null,flc,/:/);
<<<<<<< HEAD
var vec__56191 = cljs.core.reduce.call(null,((function (xs){
return (function (p__56197,p__56198){
var vec__56199 = p__56197;
var pre = cljs.core.nth.call(null,vec__56199,(0),null);
var post = cljs.core.nth.call(null,vec__56199,(1),null);
var vec__56202 = p__56198;
var x = cljs.core.nth.call(null,vec__56202,(0),null);
var i = cljs.core.nth.call(null,vec__56202,(1),null);
=======
var vec__76082 = cljs.core.reduce.call(null,((function (xs){
return (function (p__76088,p__76089){
var vec__76090 = p__76088;
var pre = cljs.core.nth.call(null,vec__76090,(0),null);
var post = cljs.core.nth.call(null,vec__76090,(1),null);
var vec__76093 = p__76089;
var x = cljs.core.nth.call(null,vec__76093,(0),null);
var i = cljs.core.nth.call(null,vec__76093,(1),null);
>>>>>>> sqlite
if((i <= (2))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pre,cljs.core.conj.call(null,post,x)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,pre,x),post], null);
}
});})(xs))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),cljs.core.map.call(null,cljs.core.vector,xs,cljs.core.range.call(null,cljs.core.count.call(null,xs),(0),(-1))));
<<<<<<< HEAD
var pre = cljs.core.nth.call(null,vec__56191,(0),null);
var vec__56194 = cljs.core.nth.call(null,vec__56191,(1),null);
var line = cljs.core.nth.call(null,vec__56194,(0),null);
var column = cljs.core.nth.call(null,vec__56194,(1),null);
var file = clojure.string.join.call(null,":",pre);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__56205 = file;
if(cljs.stacktrace.starts_with_QMARK_.call(null,file,"(")){
return clojure.string.replace.call(null,G__56205,"(","");
} else {
return G__56205;
}
})(),cljs.stacktrace.parse_int.call(null,(function (){var G__56206 = line;
if(cljs.stacktrace.ends_with_QMARK_.call(null,line,")")){
return clojure.string.replace.call(null,G__56206,")","");
} else {
return G__56206;
}
})()),cljs.stacktrace.parse_int.call(null,(function (){var G__56207 = column;
if(cljs.stacktrace.ends_with_QMARK_.call(null,column,")")){
return clojure.string.replace.call(null,G__56207,")","");
} else {
return G__56207;
=======
var pre = cljs.core.nth.call(null,vec__76082,(0),null);
var vec__76085 = cljs.core.nth.call(null,vec__76082,(1),null);
var line = cljs.core.nth.call(null,vec__76085,(0),null);
var column = cljs.core.nth.call(null,vec__76085,(1),null);
var file = clojure.string.join.call(null,":",pre);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__76096 = file;
if(cljs.stacktrace.starts_with_QMARK_.call(null,file,"(")){
return clojure.string.replace.call(null,G__76096,"(","");
} else {
return G__76096;
}
})(),cljs.stacktrace.parse_int.call(null,(function (){var G__76097 = line;
if(cljs.stacktrace.ends_with_QMARK_.call(null,line,")")){
return clojure.string.replace.call(null,G__76097,")","");
} else {
return G__76097;
}
})()),cljs.stacktrace.parse_int.call(null,(function (){var G__76098 = column;
if(cljs.stacktrace.ends_with_QMARK_.call(null,column,")")){
return clojure.string.replace.call(null,G__76098,")","");
} else {
return G__76098;
>>>>>>> sqlite
}
})())], null);
}
});
/**
 * Given a browser file url convert it into a relative path that can be used
 * to locate the original source.
 */
<<<<<<< HEAD
cljs.stacktrace.parse_file = (function cljs$stacktrace$parse_file(p__56208,file,p__56209){
var map__56210 = p__56208;
var map__56210__$1 = ((((!((map__56210 == null)))?(((((map__56210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56210.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56210):map__56210);
var repl_env = map__56210__$1;
var host = cljs.core.get.call(null,map__56210__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var host_port = cljs.core.get.call(null,map__56210__$1,new cljs.core.Keyword(null,"host-port","host-port",1956551772));
var port = cljs.core.get.call(null,map__56210__$1,new cljs.core.Keyword(null,"port","port",1534937262));
var map__56211 = p__56209;
var map__56211__$1 = ((((!((map__56211 == null)))?(((((map__56211.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56211.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56211):map__56211);
var opts = map__56211__$1;
var asset_path = cljs.core.get.call(null,map__56211__$1,new cljs.core.Keyword(null,"asset-path","asset-path",1500889617));
=======
cljs.stacktrace.parse_file = (function cljs$stacktrace$parse_file(p__76099,file,p__76100){
var map__76101 = p__76099;
var map__76101__$1 = ((((!((map__76101 == null)))?(((((map__76101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76101.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__76101):map__76101);
var repl_env = map__76101__$1;
var host = cljs.core.get.call(null,map__76101__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var host_port = cljs.core.get.call(null,map__76101__$1,new cljs.core.Keyword(null,"host-port","host-port",1956551772));
var port = cljs.core.get.call(null,map__76101__$1,new cljs.core.Keyword(null,"port","port",1534937262));
var map__76102 = p__76100;
var map__76102__$1 = ((((!((map__76102 == null)))?(((((map__76102.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76102.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__76102):map__76102);
var opts = map__76102__$1;
var asset_path = cljs.core.get.call(null,map__76102__$1,new cljs.core.Keyword(null,"asset-path","asset-path",1500889617));
>>>>>>> sqlite
var urlpat = (cljs.core.truth_(host)?cljs.stacktrace.string__GT_regex.call(null,["http://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(host),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__3922__auto__ = host_port;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return port;
}
})()),"/"].join('')):"");
var match = (cljs.core.truth_(host)?cljs.core.re_find.call(null,urlpat,file):cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"output-dir","output-dir",-290956991)));
if(cljs.core.truth_(match)){
return clojure.string.replace.call(null,clojure.string.replace.call(null,file,urlpat,""),cljs.stacktrace.string__GT_regex.call(null,["^",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__3922__auto__ = (function (){var and__3911__auto__ = asset_path;
if(cljs.core.truth_(and__3911__auto__)){
return clojure.string.replace.call(null,asset_path,/^\//,"");
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.stacktrace.output_directory.call(null,opts);
}
})()),"/"].join('')),"");
} else {
var temp__5455__auto__ = new cljs.core.Keyword(null,"asset-root","asset-root",1771735072).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5455__auto__)){
var asset_root = temp__5455__auto__;
return clojure.string.replace.call(null,file,asset_root,"");
} else {
throw cljs.core.ex_info.call(null,["Could not relativize URL ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"parse-stacktrace","parse-stacktrace",-38208461),new cljs.core.Keyword(null,"reason","reason",-2070751759),new cljs.core.Keyword(null,"relativize-url","relativize-url",621482324)], null));
}
}
});
cljs.stacktrace.chrome_st_el__GT_frame = (function cljs$stacktrace$chrome_st_el__GT_frame(repl_env,st_el,opts){
var xs = clojure.string.split.call(null,clojure.string.replace.call(null,st_el,/\s+at\s+/,""),/\s+/);
<<<<<<< HEAD
var vec__56214 = ((((1) === cljs.core.count.call(null,xs)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.first.call(null,xs)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,xs),cljs.core.last.call(null,xs)], null));
var function$ = cljs.core.nth.call(null,vec__56214,(0),null);
var flc = cljs.core.nth.call(null,vec__56214,(1),null);
var vec__56217 = cljs.stacktrace.parse_file_line_column.call(null,flc);
var file = cljs.core.nth.call(null,vec__56217,(0),null);
var line = cljs.core.nth.call(null,vec__56217,(1),null);
var column = cljs.core.nth.call(null,vec__56217,(2),null);
=======
var vec__76105 = ((((1) === cljs.core.count.call(null,xs)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.first.call(null,xs)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,xs),cljs.core.last.call(null,xs)], null));
var function$ = cljs.core.nth.call(null,vec__76105,(0),null);
var flc = cljs.core.nth.call(null,vec__76105,(1),null);
var vec__76108 = cljs.stacktrace.parse_file_line_column.call(null,flc);
var file = cljs.core.nth.call(null,vec__76108,(0),null);
var line = cljs.core.nth.call(null,vec__76108,(1),null);
var column = cljs.core.nth.call(null,vec__76108,(2),null);
>>>>>>> sqlite
if(cljs.core.truth_((function (){var and__3911__auto__ = file;
if(cljs.core.truth_(and__3911__auto__)){
var and__3911__auto____$1 = function$;
if(cljs.core.truth_(and__3911__auto____$1)){
var and__3911__auto____$2 = line;
if(cljs.core.truth_(and__3911__auto____$2)){
return column;
} else {
return and__3911__auto____$2;
}
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),cljs.stacktrace.parse_file.call(null,repl_env,file,opts),new cljs.core.Keyword(null,"function","function",-2127255473),clojure.string.replace.call(null,function$,/Object\./,""),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
} else {
if(clojure.string.blank_QMARK_.call(null,function$)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),null,new cljs.core.Keyword(null,"function","function",-2127255473),clojure.string.replace.call(null,function$,/Object\./,""),new cljs.core.Keyword(null,"line","line",212345235),null,new cljs.core.Keyword(null,"column","column",2078222095),null], null);
}
}
});
cljs.core._add_method.call(null,cljs.stacktrace.parse_stacktrace,new cljs.core.Keyword(null,"chrome","chrome",1718738387),(function (repl_env,st,err,opts){
<<<<<<< HEAD
return cljs.core.vec.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (p1__56222_SHARP_){
return cljs.stacktrace.chrome_st_el__GT_frame.call(null,repl_env,p1__56222_SHARP_,opts);
}),cljs.core.take_while.call(null,(function (p1__56221_SHARP_){
return !(cljs.stacktrace.starts_with_QMARK_.call(null,p1__56221_SHARP_,"    at eval"));
}),cljs.core.drop_while.call(null,(function (p1__56220_SHARP_){
return cljs.stacktrace.starts_with_QMARK_.call(null,p1__56220_SHARP_,"Error");
}),clojure.string.split_lines.call(null,st))))));
}));
cljs.stacktrace.safari_st_el__GT_frame = (function cljs$stacktrace$safari_st_el__GT_frame(repl_env,st_el,opts){
var vec__56223 = (cljs.core.truth_(cljs.core.re_find.call(null,/@/,st_el))?clojure.string.split.call(null,st_el,/@/):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,st_el], null));
var function$ = cljs.core.nth.call(null,vec__56223,(0),null);
var flc = cljs.core.nth.call(null,vec__56223,(1),null);
var vec__56226 = cljs.stacktrace.parse_file_line_column.call(null,flc);
var file = cljs.core.nth.call(null,vec__56226,(0),null);
var line = cljs.core.nth.call(null,vec__56226,(1),null);
var column = cljs.core.nth.call(null,vec__56226,(2),null);
=======
return cljs.core.vec.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (p1__76113_SHARP_){
return cljs.stacktrace.chrome_st_el__GT_frame.call(null,repl_env,p1__76113_SHARP_,opts);
}),cljs.core.take_while.call(null,(function (p1__76112_SHARP_){
return !(cljs.stacktrace.starts_with_QMARK_.call(null,p1__76112_SHARP_,"    at eval"));
}),cljs.core.drop_while.call(null,(function (p1__76111_SHARP_){
return cljs.stacktrace.starts_with_QMARK_.call(null,p1__76111_SHARP_,"Error");
}),clojure.string.split_lines.call(null,st))))));
}));
cljs.stacktrace.safari_st_el__GT_frame = (function cljs$stacktrace$safari_st_el__GT_frame(repl_env,st_el,opts){
var vec__76114 = (cljs.core.truth_(cljs.core.re_find.call(null,/@/,st_el))?clojure.string.split.call(null,st_el,/@/):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,st_el], null));
var function$ = cljs.core.nth.call(null,vec__76114,(0),null);
var flc = cljs.core.nth.call(null,vec__76114,(1),null);
var vec__76117 = cljs.stacktrace.parse_file_line_column.call(null,flc);
var file = cljs.core.nth.call(null,vec__76117,(0),null);
var line = cljs.core.nth.call(null,vec__76117,(1),null);
var column = cljs.core.nth.call(null,vec__76117,(2),null);
>>>>>>> sqlite
if(cljs.core.truth_((function (){var and__3911__auto__ = file;
if(cljs.core.truth_(and__3911__auto__)){
var and__3911__auto____$1 = function$;
if(cljs.core.truth_(and__3911__auto____$1)){
var and__3911__auto____$2 = line;
if(cljs.core.truth_(and__3911__auto____$2)){
return column;
} else {
return and__3911__auto____$2;
}
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),cljs.stacktrace.parse_file.call(null,repl_env,file,opts),new cljs.core.Keyword(null,"function","function",-2127255473),clojure.string.trim.call(null,function$),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
} else {
if(clojure.string.blank_QMARK_.call(null,function$)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),null,new cljs.core.Keyword(null,"function","function",-2127255473),clojure.string.trim.call(null,function$),new cljs.core.Keyword(null,"line","line",212345235),null,new cljs.core.Keyword(null,"column","column",2078222095),null], null);
}
}
});
cljs.core._add_method.call(null,cljs.stacktrace.parse_stacktrace,new cljs.core.Keyword(null,"safari","safari",497115653),(function (repl_env,st,err,opts){
<<<<<<< HEAD
return cljs.core.vec.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (p1__56231_SHARP_){
return cljs.stacktrace.safari_st_el__GT_frame.call(null,repl_env,p1__56231_SHARP_,opts);
}),cljs.core.remove.call(null,clojure.string.blank_QMARK_,cljs.core.take_while.call(null,(function (p1__56230_SHARP_){
return !(cljs.stacktrace.starts_with_QMARK_.call(null,p1__56230_SHARP_,"eval code"));
}),cljs.core.drop_while.call(null,(function (p1__56229_SHARP_){
return cljs.stacktrace.starts_with_QMARK_.call(null,p1__56229_SHARP_,"Error");
=======
return cljs.core.vec.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (p1__76122_SHARP_){
return cljs.stacktrace.safari_st_el__GT_frame.call(null,repl_env,p1__76122_SHARP_,opts);
}),cljs.core.remove.call(null,clojure.string.blank_QMARK_,cljs.core.take_while.call(null,(function (p1__76121_SHARP_){
return !(cljs.stacktrace.starts_with_QMARK_.call(null,p1__76121_SHARP_,"eval code"));
}),cljs.core.drop_while.call(null,(function (p1__76120_SHARP_){
return cljs.stacktrace.starts_with_QMARK_.call(null,p1__76120_SHARP_,"Error");
>>>>>>> sqlite
}),clojure.string.split_lines.call(null,st)))))));
}));
cljs.stacktrace.firefox_clean_function = (function cljs$stacktrace$firefox_clean_function(f){
var f__$1 = f;
var f__$2 = ((clojure.string.blank_QMARK_.call(null,f__$1))?null:((cljs.core.not_EQ_.call(null,f__$1.indexOf("</"),(-1)))?(function (){var idx = f__$1.indexOf("</");
return f__$1.substring((idx + (2)));
})():f__$1
));
return clojure.string.replace.call(null,clojure.string.replace.call(null,f__$2,/</,""),(new RegExp("\\/")),"");
});
cljs.stacktrace.firefox_st_el__GT_frame = (function cljs$stacktrace$firefox_st_el__GT_frame(repl_env,st_el,opts){
<<<<<<< HEAD
var vec__56232 = (cljs.core.truth_(cljs.core.re_find.call(null,/@/,st_el))?clojure.string.split.call(null,st_el,/@/):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,st_el], null));
var function$ = cljs.core.nth.call(null,vec__56232,(0),null);
var flc = cljs.core.nth.call(null,vec__56232,(1),null);
var vec__56235 = cljs.stacktrace.parse_file_line_column.call(null,flc);
var file = cljs.core.nth.call(null,vec__56235,(0),null);
var line = cljs.core.nth.call(null,vec__56235,(1),null);
var column = cljs.core.nth.call(null,vec__56235,(2),null);
=======
var vec__76123 = (cljs.core.truth_(cljs.core.re_find.call(null,/@/,st_el))?clojure.string.split.call(null,st_el,/@/):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,st_el], null));
var function$ = cljs.core.nth.call(null,vec__76123,(0),null);
var flc = cljs.core.nth.call(null,vec__76123,(1),null);
var vec__76126 = cljs.stacktrace.parse_file_line_column.call(null,flc);
var file = cljs.core.nth.call(null,vec__76126,(0),null);
var line = cljs.core.nth.call(null,vec__76126,(1),null);
var column = cljs.core.nth.call(null,vec__76126,(2),null);
>>>>>>> sqlite
if(cljs.core.truth_((function (){var and__3911__auto__ = file;
if(cljs.core.truth_(and__3911__auto__)){
var and__3911__auto____$1 = function$;
if(cljs.core.truth_(and__3911__auto____$1)){
var and__3911__auto____$2 = line;
if(cljs.core.truth_(and__3911__auto____$2)){
return column;
} else {
return and__3911__auto____$2;
}
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),cljs.stacktrace.parse_file.call(null,repl_env,file,opts),new cljs.core.Keyword(null,"function","function",-2127255473),cljs.stacktrace.firefox_clean_function.call(null,function$),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
} else {
if(clojure.string.blank_QMARK_.call(null,function$)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),null,new cljs.core.Keyword(null,"function","function",-2127255473),cljs.stacktrace.firefox_clean_function.call(null,function$),new cljs.core.Keyword(null,"line","line",212345235),null,new cljs.core.Keyword(null,"column","column",2078222095),null], null);
}
}
});
cljs.core._add_method.call(null,cljs.stacktrace.parse_stacktrace,new cljs.core.Keyword(null,"firefox","firefox",1283768880),(function (repl_env,st,err,opts){
<<<<<<< HEAD
return cljs.core.vec.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (p1__56240_SHARP_){
return cljs.stacktrace.firefox_st_el__GT_frame.call(null,repl_env,p1__56240_SHARP_,opts);
}),cljs.core.remove.call(null,clojure.string.blank_QMARK_,cljs.core.take_while.call(null,(function (p1__56239_SHARP_){
return cljs.core._EQ_.call(null,p1__56239_SHARP_.indexOf("> eval"),(-1));
}),cljs.core.drop_while.call(null,(function (p1__56238_SHARP_){
return cljs.stacktrace.starts_with_QMARK_.call(null,p1__56238_SHARP_,"Error");
}),clojure.string.split_lines.call(null,st)))))));
}));
cljs.core._add_method.call(null,cljs.stacktrace.parse_stacktrace,new cljs.core.Keyword(null,"rhino","rhino",1962118035),(function (repl_env,st,err,p__56241){
var map__56242 = p__56241;
var map__56242__$1 = ((((!((map__56242 == null)))?(((((map__56242.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56242.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56242):map__56242);
var opts = map__56242__$1;
var output_dir = cljs.core.get.call(null,map__56242__$1,new cljs.core.Keyword(null,"output-dir","output-dir",-290956991));
var process_frame = ((function (map__56242,map__56242__$1,opts,output_dir){
=======
return cljs.core.vec.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (p1__76131_SHARP_){
return cljs.stacktrace.firefox_st_el__GT_frame.call(null,repl_env,p1__76131_SHARP_,opts);
}),cljs.core.remove.call(null,clojure.string.blank_QMARK_,cljs.core.take_while.call(null,(function (p1__76130_SHARP_){
return cljs.core._EQ_.call(null,p1__76130_SHARP_.indexOf("> eval"),(-1));
}),cljs.core.drop_while.call(null,(function (p1__76129_SHARP_){
return cljs.stacktrace.starts_with_QMARK_.call(null,p1__76129_SHARP_,"Error");
}),clojure.string.split_lines.call(null,st)))))));
}));
cljs.core._add_method.call(null,cljs.stacktrace.parse_stacktrace,new cljs.core.Keyword(null,"rhino","rhino",1962118035),(function (repl_env,st,err,p__76132){
var map__76133 = p__76132;
var map__76133__$1 = ((((!((map__76133 == null)))?(((((map__76133.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76133.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__76133):map__76133);
var opts = map__76133__$1;
var output_dir = cljs.core.get.call(null,map__76133__$1,new cljs.core.Keyword(null,"output-dir","output-dir",-290956991));
var process_frame = ((function (map__76133,map__76133__$1,opts,output_dir){
>>>>>>> sqlite
return (function cljs$stacktrace$process_frame(frame_str){
if(((clojure.string.blank_QMARK_.call(null,frame_str)) || (((-1) === frame_str.indexOf("\tat"))))){
return null;
} else {
<<<<<<< HEAD
var vec__56250 = clojure.string.split.call(null,frame_str,/:/);
var file_side = cljs.core.nth.call(null,vec__56250,(0),null);
var line_fn_side = cljs.core.nth.call(null,vec__56250,(1),null);
var file = clojure.string.replace.call(null,file_side,/\s+at\s+/,"");
var vec__56253 = clojure.string.split.call(null,line_fn_side,/\s+/);
var line = cljs.core.nth.call(null,vec__56253,(0),null);
var function$ = cljs.core.nth.call(null,vec__56253,(1),null);
=======
var vec__76141 = clojure.string.split.call(null,frame_str,/:/);
var file_side = cljs.core.nth.call(null,vec__76141,(0),null);
var line_fn_side = cljs.core.nth.call(null,vec__76141,(1),null);
var file = clojure.string.replace.call(null,file_side,/\s+at\s+/,"");
var vec__76144 = clojure.string.split.call(null,line_fn_side,/\s+/);
var line = cljs.core.nth.call(null,vec__76144,(0),null);
var function$ = cljs.core.nth.call(null,vec__76144,(1),null);
>>>>>>> sqlite
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),clojure.string.replace.call(null,file,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_dir),"/"].join(''),""),new cljs.core.Keyword(null,"function","function",-2127255473),(cljs.core.truth_(function$)?clojure.string.replace.call(null,clojure.string.replace.call(null,function$,"(",""),")",""):null),new cljs.core.Keyword(null,"line","line",212345235),(cljs.core.truth_((function (){var and__3911__auto__ = line;
if(cljs.core.truth_(and__3911__auto__)){
return !(clojure.string.blank_QMARK_.call(null,line));
} else {
return and__3911__auto__;
}
})())?cljs.stacktrace.parse_int.call(null,line):null),new cljs.core.Keyword(null,"column","column",2078222095),(0)], null);
}
<<<<<<< HEAD
});})(map__56242,map__56242__$1,opts,output_dir))
;
return cljs.core.vec.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,process_frame,clojure.string.split.call(null,st,/\n/))));
}));
cljs.core._add_method.call(null,cljs.stacktrace.parse_stacktrace,new cljs.core.Keyword(null,"nashorn","nashorn",988299963),(function (repl_env,st,err,p__56256){
var map__56257 = p__56256;
var map__56257__$1 = ((((!((map__56257 == null)))?(((((map__56257.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56257.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56257):map__56257);
var opts = map__56257__$1;
var output_dir = cljs.core.get.call(null,map__56257__$1,new cljs.core.Keyword(null,"output-dir","output-dir",-290956991));
var process_frame = ((function (map__56257,map__56257__$1,opts,output_dir){
=======
});})(map__76133,map__76133__$1,opts,output_dir))
;
return cljs.core.vec.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,process_frame,clojure.string.split.call(null,st,/\n/))));
}));
cljs.core._add_method.call(null,cljs.stacktrace.parse_stacktrace,new cljs.core.Keyword(null,"nashorn","nashorn",988299963),(function (repl_env,st,err,p__76147){
var map__76148 = p__76147;
var map__76148__$1 = ((((!((map__76148 == null)))?(((((map__76148.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76148.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__76148):map__76148);
var opts = map__76148__$1;
var output_dir = cljs.core.get.call(null,map__76148__$1,new cljs.core.Keyword(null,"output-dir","output-dir",-290956991));
var process_frame = ((function (map__76148,map__76148__$1,opts,output_dir){
>>>>>>> sqlite
return (function cljs$stacktrace$process_frame(frame_str){
if(((clojure.string.blank_QMARK_.call(null,frame_str)) || (((-1) === frame_str.indexOf("\tat"))))){
return null;
} else {
var frame_str__$1 = clojure.string.replace.call(null,frame_str,/\s+at\s+/,"");
<<<<<<< HEAD
var vec__56265 = clojure.string.split.call(null,frame_str__$1,/\s+/);
var function$ = cljs.core.nth.call(null,vec__56265,(0),null);
var file_and_line = cljs.core.nth.call(null,vec__56265,(1),null);
var vec__56268 = clojure.string.split.call(null,file_and_line,/:/);
var file_part = cljs.core.nth.call(null,vec__56268,(0),null);
var line_part = cljs.core.nth.call(null,vec__56268,(1),null);
=======
var vec__76156 = clojure.string.split.call(null,frame_str__$1,/\s+/);
var function$ = cljs.core.nth.call(null,vec__76156,(0),null);
var file_and_line = cljs.core.nth.call(null,vec__76156,(1),null);
var vec__76159 = clojure.string.split.call(null,file_and_line,/:/);
var file_part = cljs.core.nth.call(null,vec__76159,(0),null);
var line_part = cljs.core.nth.call(null,vec__76159,(1),null);
>>>>>>> sqlite
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),clojure.string.replace.call(null,file_part.substring((1)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_dir),"/"].join(''),""),new cljs.core.Keyword(null,"function","function",-2127255473),function$,new cljs.core.Keyword(null,"line","line",212345235),(cljs.core.truth_((function (){var and__3911__auto__ = line_part;
if(cljs.core.truth_(and__3911__auto__)){
return !(clojure.string.blank_QMARK_.call(null,line_part));
} else {
return and__3911__auto__;
}
})())?cljs.stacktrace.parse_int.call(null,line_part.substring((0),(cljs.core.count.call(null,line_part) - (1)))):null),new cljs.core.Keyword(null,"column","column",2078222095),(0)], null);
}
<<<<<<< HEAD
});})(map__56257,map__56257__$1,opts,output_dir))
;
return cljs.core.vec.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,process_frame,clojure.string.split.call(null,st,/\n/))));
}));
cljs.core._add_method.call(null,cljs.stacktrace.parse_stacktrace,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),(function (repl_env,st,err,p__56271){
var map__56272 = p__56271;
var map__56272__$1 = ((((!((map__56272 == null)))?(((((map__56272.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56272.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56272):map__56272);
var opts = map__56272__$1;
var output_dir = cljs.core.get.call(null,map__56272__$1,new cljs.core.Keyword(null,"output-dir","output-dir",-290956991));
var parse_source_loc_info = ((function (map__56272,map__56272__$1,opts,output_dir){
=======
});})(map__76148,map__76148__$1,opts,output_dir))
;
return cljs.core.vec.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,process_frame,clojure.string.split.call(null,st,/\n/))));
}));
cljs.core._add_method.call(null,cljs.stacktrace.parse_stacktrace,new cljs.core.Keyword(null,"nodejs","nodejs",321212524),(function (repl_env,st,err,p__76162){
var map__76163 = p__76162;
var map__76163__$1 = ((((!((map__76163 == null)))?(((((map__76163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76163.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__76163):map__76163);
var opts = map__76163__$1;
var output_dir = cljs.core.get.call(null,map__76163__$1,new cljs.core.Keyword(null,"output-dir","output-dir",-290956991));
var parse_source_loc_info = ((function (map__76163,map__76163__$1,opts,output_dir){
>>>>>>> sqlite
return (function cljs$stacktrace$parse_source_loc_info(x){
if(cljs.core.truth_((function (){var and__3911__auto__ = x;
if(cljs.core.truth_(and__3911__auto__)){
return !(clojure.string.blank_QMARK_.call(null,x));
} else {
return and__3911__auto__;
}
})())){
return cljs.stacktrace.parse_int.call(null,x);
} else {
return null;
}
<<<<<<< HEAD
});})(map__56272,map__56272__$1,opts,output_dir))
;
var process_frame = ((function (map__56272,map__56272__$1,opts,output_dir){
=======
});})(map__76163,map__76163__$1,opts,output_dir))
;
var process_frame = ((function (map__76163,map__76163__$1,opts,output_dir){
>>>>>>> sqlite
return (function cljs$stacktrace$process_frame(frame_str){
if(((clojure.string.blank_QMARK_.call(null,frame_str)) || ((cljs.core.re_find.call(null,/^\s+at/,frame_str) == null)))){
return null;
} else {
var frame_str__$1 = clojure.string.replace.call(null,frame_str,/\s+at\s+/,"");
if(clojure.string.starts_with_QMARK_.call(null,frame_str__$1,"repl:")){
return null;
} else {
var parts = clojure.string.split.call(null,frame_str__$1,/\s+/);
<<<<<<< HEAD
var vec__56281 = ((((2) === cljs.core.count.call(null,parts)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,parts),cljs.core.subs.call(null,cljs.core.second.call(null,parts),(1),(cljs.core.count.call(null,cljs.core.second.call(null,parts)) - (1)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.first.call(null,parts)], null));
var function$ = cljs.core.nth.call(null,vec__56281,(0),null);
var file_AMPERSAND_line = cljs.core.nth.call(null,vec__56281,(1),null);
var vec__56284 = clojure.string.split.call(null,file_AMPERSAND_line,/:/);
var file_part = cljs.core.nth.call(null,vec__56284,(0),null);
var line_part = cljs.core.nth.call(null,vec__56284,(1),null);
var col_part = cljs.core.nth.call(null,vec__56284,(2),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),(cljs.core.truth_(function$)?(function (){var G__56287 = file_part;
if(cljs.core.truth_(output_dir)){
return clojure.string.replace.call(null,G__56287,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_dir),"/"].join(''),"");
} else {
return G__56287;
=======
var vec__76172 = ((((2) === cljs.core.count.call(null,parts)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,parts),cljs.core.subs.call(null,cljs.core.second.call(null,parts),(1),(cljs.core.count.call(null,cljs.core.second.call(null,parts)) - (1)))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.first.call(null,parts)], null));
var function$ = cljs.core.nth.call(null,vec__76172,(0),null);
var file_AMPERSAND_line = cljs.core.nth.call(null,vec__76172,(1),null);
var vec__76175 = clojure.string.split.call(null,file_AMPERSAND_line,/:/);
var file_part = cljs.core.nth.call(null,vec__76175,(0),null);
var line_part = cljs.core.nth.call(null,vec__76175,(1),null);
var col_part = cljs.core.nth.call(null,vec__76175,(2),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file","file",-1269645878),(cljs.core.truth_(function$)?(function (){var G__76178 = file_part;
if(cljs.core.truth_(output_dir)){
return clojure.string.replace.call(null,G__76178,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_dir),"/"].join(''),"");
} else {
return G__76178;
>>>>>>> sqlite
}
})():file_part),new cljs.core.Keyword(null,"function","function",-2127255473),function$,new cljs.core.Keyword(null,"line","line",212345235),parse_source_loc_info.call(null,line_part),new cljs.core.Keyword(null,"column","column",2078222095),parse_source_loc_info.call(null,col_part)], null);
}
}
<<<<<<< HEAD
});})(map__56272,map__56272__$1,opts,output_dir))
=======
});})(map__76163,map__76163__$1,opts,output_dir))
>>>>>>> sqlite
;
return cljs.core.vec.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,process_frame,clojure.string.split.call(null,st,/\n/))));
}));
cljs.stacktrace.remove_ext = (function cljs$stacktrace$remove_ext(file){
return clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,file,/\.js$/,""),/\.cljs$/,""),/\.cljc$/,""),/\.clj$/,"");
});
/**
 * Given a cljs.source-map source map data structure map a generated line
 * and column back to the original line, column, and function called.
 */
cljs.stacktrace.mapped_line_column_call = (function cljs$stacktrace$mapped_line_column_call(sms,file,line,column){
var source_map = cljs.core.get.call(null,sms,cljs.core.symbol.call(null,clojure.string.replace.call(null,cljs.stacktrace.remove_ext.call(null,file),"/",".")));
var get_best_column = ((function (source_map){
return (function cljs$stacktrace$mapped_line_column_call_$_get_best_column(columns,column__$1){
return cljs.core.last.call(null,(function (){var or__3922__auto__ = cljs.core.get.call(null,columns,cljs.core.last.call(null,cljs.core.filter.call(null,((function (source_map){
<<<<<<< HEAD
return (function (p1__56288_SHARP_){
return (p1__56288_SHARP_ <= (column__$1 - (1)));
=======
return (function (p1__76179_SHARP_){
return (p1__76179_SHARP_ <= (column__$1 - (1)));
>>>>>>> sqlite
});})(source_map))
,cljs.core.sort.call(null,cljs.core.keys.call(null,columns)))));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.second.call(null,cljs.core.first.call(null,columns));
}
})());
});})(source_map))
;
var adjust = ((function (source_map){
return (function cljs$stacktrace$mapped_line_column_call_$_adjust(mapped){
return cljs.core.vec.call(null,cljs.core.map.call(null,((function (source_map){
<<<<<<< HEAD
return (function (p1__56289_SHARP_,p2__56290_SHARP_){
return p1__56289_SHARP_.call(null,p2__56290_SHARP_);
=======
return (function (p1__76180_SHARP_,p2__76181_SHARP_){
return p1__76180_SHARP_.call(null,p2__76181_SHARP_);
>>>>>>> sqlite
});})(source_map))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.inc,cljs.core.inc,cljs.core.identity], null),mapped));
});})(source_map))
;
var default$ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,column,null], null);
var temp__5455__auto__ = cljs.core.get.call(null,source_map,(line - (1)));
if(cljs.core.truth_(temp__5455__auto__)){
var columns = temp__5455__auto__;
return adjust.call(null,cljs.core.map.call(null,get_best_column.call(null,columns,column),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"col","col",-1959363084),new cljs.core.Keyword(null,"name","name",1843675177)], null)));
} else {
return default$;
}
});
/**
 * Given opts and a canonicalized JavaScript stacktrace frame, return the
 *   ClojureScript frame.
 */
<<<<<<< HEAD
cljs.stacktrace.mapped_frame = (function cljs$stacktrace$mapped_frame(p__56291,sms,opts){
var map__56292 = p__56291;
var map__56292__$1 = ((((!((map__56292 == null)))?(((((map__56292.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56292.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56292):map__56292);
var function$ = cljs.core.get.call(null,map__56292__$1,new cljs.core.Keyword(null,"function","function",-2127255473));
var file = cljs.core.get.call(null,map__56292__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__56292__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__56292__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var no_source_file_QMARK_ = ((cljs.core.not.call(null,file))?true:cljs.stacktrace.starts_with_QMARK_.call(null,file,"<"));
var vec__56294 = ((no_source_file_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,column,null], null):cljs.stacktrace.mapped_line_column_call.call(null,sms,file,line,column));
var line_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__56294,(0),null);
var column_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__56294,(1),null);
var call = cljs.core.nth.call(null,vec__56294,(2),null);
=======
cljs.stacktrace.mapped_frame = (function cljs$stacktrace$mapped_frame(p__76182,sms,opts){
var map__76183 = p__76182;
var map__76183__$1 = ((((!((map__76183 == null)))?(((((map__76183.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76183.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__76183):map__76183);
var function$ = cljs.core.get.call(null,map__76183__$1,new cljs.core.Keyword(null,"function","function",-2127255473));
var file = cljs.core.get.call(null,map__76183__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__76183__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__76183__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var no_source_file_QMARK_ = ((cljs.core.not.call(null,file))?true:cljs.stacktrace.starts_with_QMARK_.call(null,file,"<"));
var vec__76185 = ((no_source_file_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,column,null], null):cljs.stacktrace.mapped_line_column_call.call(null,sms,file,line,column));
var line_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__76185,(0),null);
var column_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__76185,(1),null);
var call = cljs.core.nth.call(null,vec__76185,(2),null);
>>>>>>> sqlite
var file_SINGLEQUOTE_ = ((no_source_file_QMARK_)?null:((cljs.stacktrace.ends_with_QMARK_.call(null,file,".js"))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,file,(0),(cljs.core.count.call(null,file) - (3)))),".cljs"].join(''):file));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"function","function",-2127255473),function$,new cljs.core.Keyword(null,"call","call",-519999866),call,new cljs.core.Keyword(null,"file","file",-1269645878),((no_source_file_QMARK_)?["NO_SOURCE_FILE",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(file)?[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null))].join(''):file_SINGLEQUOTE_),new cljs.core.Keyword(null,"line","line",212345235),line_SINGLEQUOTE_,new cljs.core.Keyword(null,"column","column",2078222095),column_SINGLEQUOTE_], null);
});
/**
 * Given a vector representing the canonicalized JavaScript stacktrace
 * return the ClojureScript stacktrace. The canonical stacktrace must be
 * in the form:
 * 
 *  [{:file <string>
 *    :function <string>
 *    :line <integer>
 *    :column <integer>}*]
 * 
 * :file must be a URL path (without protocol) relative to :output-dir or a
 * identifier delimited by angle brackets. The returned mapped stacktrace will
 * also contain :url entries to the original sources if it can be determined
 * from the classpath.
 */
cljs.stacktrace.mapped_stacktrace = (function cljs$stacktrace$mapped_stacktrace(var_args){
<<<<<<< HEAD
var G__56300 = arguments.length;
switch (G__56300) {
=======
var G__76191 = arguments.length;
switch (G__76191) {
>>>>>>> sqlite
case 2:
return cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$2 = (function (stacktrace,sms){
return cljs.stacktrace.mapped_stacktrace.call(null,stacktrace,sms,null);
});

cljs.stacktrace.mapped_stacktrace.cljs$core$IFn$_invoke$arity$3 = (function (stacktrace,sms,opts){
var call__GT_function = (function cljs$stacktrace$call__GT_function(x){
if(cljs.core.truth_(new cljs.core.Keyword(null,"call","call",-519999866).cljs$core$IFn$_invoke$arity$1(x))){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"function","function",-2127255473)],[new cljs.core.Keyword(null,"call","call",-519999866).cljs$core$IFn$_invoke$arity$1(x)]);
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
var call_merge = (function cljs$stacktrace$call_merge(function$,call){
return cljs.core.merge_with.call(null,(function (munged_fn_name,unmunged_call_name){
if(cljs.core._EQ_.call(null,munged_fn_name,clojure.string.replace.call(null,cljs.core.munge.call(null,unmunged_call_name),".","$"))){
return unmunged_call_name;
} else {
return munged_fn_name;
}
}),function$,call);
});
<<<<<<< HEAD
var mapped_frames = cljs.core.map.call(null,cljs.core.memoize.call(null,(function (p1__56297_SHARP_){
return cljs.stacktrace.mapped_frame.call(null,p1__56297_SHARP_,sms,opts);
})),stacktrace);
return cljs.core.vec.call(null,cljs.core.map.call(null,call_merge,cljs.core.map.call(null,((function (mapped_frames){
return (function (p1__56298_SHARP_){
return cljs.core.dissoc.call(null,p1__56298_SHARP_,new cljs.core.Keyword(null,"call","call",-519999866));
=======
var mapped_frames = cljs.core.map.call(null,cljs.core.memoize.call(null,(function (p1__76188_SHARP_){
return cljs.stacktrace.mapped_frame.call(null,p1__76188_SHARP_,sms,opts);
})),stacktrace);
return cljs.core.vec.call(null,cljs.core.map.call(null,call_merge,cljs.core.map.call(null,((function (mapped_frames){
return (function (p1__76189_SHARP_){
return cljs.core.dissoc.call(null,p1__76189_SHARP_,new cljs.core.Keyword(null,"call","call",-519999866));
>>>>>>> sqlite
});})(mapped_frames))
,mapped_frames),cljs.core.concat.call(null,cljs.core.rest.call(null,cljs.core.map.call(null,call__GT_function,mapped_frames)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null))));
});

cljs.stacktrace.mapped_stacktrace.cljs$lang$maxFixedArity = 3;

/**
 * Given a vector representing the canonicalized JavaScript stacktrace and a map
 *   of library names to decoded source maps, print the ClojureScript stacktrace .
 *   See mapped-stacktrace.
 */
cljs.stacktrace.mapped_stacktrace_str = (function cljs$stacktrace$mapped_stacktrace_str(var_args){
<<<<<<< HEAD
var G__56303 = arguments.length;
switch (G__56303) {
=======
var G__76194 = arguments.length;
switch (G__76194) {
>>>>>>> sqlite
case 2:
return cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$2 = (function (stacktrace,sms){
return cljs.stacktrace.mapped_stacktrace_str.call(null,stacktrace,sms,null);
});

cljs.stacktrace.mapped_stacktrace_str.cljs$core$IFn$_invoke$arity$3 = (function (stacktrace,sms,opts){
var sb__4430__auto__ = (new goog.string.StringBuffer());
<<<<<<< HEAD
var _STAR_print_newline_STAR_56304_56315 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_56305_56316 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_56304_56315,_STAR_print_fn_STAR_56305_56316,sb__4430__auto__){
return (function (x__4431__auto__){
return sb__4430__auto__.append(x__4431__auto__);
});})(_STAR_print_newline_STAR_56304_56315,_STAR_print_fn_STAR_56305_56316,sb__4430__auto__))
;

try{var seq__56306_56317 = cljs.core.seq.call(null,cljs.stacktrace.mapped_stacktrace.call(null,stacktrace,sms,opts));
var chunk__56307_56318 = null;
var count__56308_56319 = (0);
var i__56309_56320 = (0);
while(true){
if((i__56309_56320 < count__56308_56319)){
var map__56310_56321 = cljs.core._nth.call(null,chunk__56307_56318,i__56309_56320);
var map__56310_56322__$1 = ((((!((map__56310_56321 == null)))?(((((map__56310_56321.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56310_56321.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56310_56321):map__56310_56321);
var function_56323 = cljs.core.get.call(null,map__56310_56322__$1,new cljs.core.Keyword(null,"function","function",-2127255473));
var file_56324 = cljs.core.get.call(null,map__56310_56322__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line_56325 = cljs.core.get.call(null,map__56310_56322__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_56326 = cljs.core.get.call(null,map__56310_56322__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.println.call(null,"\t",[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(function_56323)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(function_56323)," "].join(''):null)),"(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_56324),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(line_56325)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_56325)].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(column_56326)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_56326)].join(''):null)),")"].join(''));


var G__56327 = seq__56306_56317;
var G__56328 = chunk__56307_56318;
var G__56329 = count__56308_56319;
var G__56330 = (i__56309_56320 + (1));
seq__56306_56317 = G__56327;
chunk__56307_56318 = G__56328;
count__56308_56319 = G__56329;
i__56309_56320 = G__56330;
continue;
} else {
var temp__5457__auto___56331 = cljs.core.seq.call(null,seq__56306_56317);
if(temp__5457__auto___56331){
var seq__56306_56332__$1 = temp__5457__auto___56331;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56306_56332__$1)){
var c__4319__auto___56333 = cljs.core.chunk_first.call(null,seq__56306_56332__$1);
var G__56334 = cljs.core.chunk_rest.call(null,seq__56306_56332__$1);
var G__56335 = c__4319__auto___56333;
var G__56336 = cljs.core.count.call(null,c__4319__auto___56333);
var G__56337 = (0);
seq__56306_56317 = G__56334;
chunk__56307_56318 = G__56335;
count__56308_56319 = G__56336;
i__56309_56320 = G__56337;
continue;
} else {
var map__56312_56338 = cljs.core.first.call(null,seq__56306_56332__$1);
var map__56312_56339__$1 = ((((!((map__56312_56338 == null)))?(((((map__56312_56338.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56312_56338.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56312_56338):map__56312_56338);
var function_56340 = cljs.core.get.call(null,map__56312_56339__$1,new cljs.core.Keyword(null,"function","function",-2127255473));
var file_56341 = cljs.core.get.call(null,map__56312_56339__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line_56342 = cljs.core.get.call(null,map__56312_56339__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_56343 = cljs.core.get.call(null,map__56312_56339__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.println.call(null,"\t",[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(function_56340)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(function_56340)," "].join(''):null)),"(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_56341),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(line_56342)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_56342)].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(column_56343)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_56343)].join(''):null)),")"].join(''));


var G__56344 = cljs.core.next.call(null,seq__56306_56332__$1);
var G__56345 = null;
var G__56346 = (0);
var G__56347 = (0);
seq__56306_56317 = G__56344;
chunk__56307_56318 = G__56345;
count__56308_56319 = G__56346;
i__56309_56320 = G__56347;
=======
var _STAR_print_newline_STAR_76195_76206 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_76196_76207 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_76195_76206,_STAR_print_fn_STAR_76196_76207,sb__4430__auto__){
return (function (x__4431__auto__){
return sb__4430__auto__.append(x__4431__auto__);
});})(_STAR_print_newline_STAR_76195_76206,_STAR_print_fn_STAR_76196_76207,sb__4430__auto__))
;

try{var seq__76197_76208 = cljs.core.seq.call(null,cljs.stacktrace.mapped_stacktrace.call(null,stacktrace,sms,opts));
var chunk__76198_76209 = null;
var count__76199_76210 = (0);
var i__76200_76211 = (0);
while(true){
if((i__76200_76211 < count__76199_76210)){
var map__76201_76212 = cljs.core._nth.call(null,chunk__76198_76209,i__76200_76211);
var map__76201_76213__$1 = ((((!((map__76201_76212 == null)))?(((((map__76201_76212.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76201_76212.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__76201_76212):map__76201_76212);
var function_76214 = cljs.core.get.call(null,map__76201_76213__$1,new cljs.core.Keyword(null,"function","function",-2127255473));
var file_76215 = cljs.core.get.call(null,map__76201_76213__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line_76216 = cljs.core.get.call(null,map__76201_76213__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_76217 = cljs.core.get.call(null,map__76201_76213__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.println.call(null,"\t",[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(function_76214)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(function_76214)," "].join(''):null)),"(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_76215),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(line_76216)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_76216)].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(column_76217)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_76217)].join(''):null)),")"].join(''));


var G__76218 = seq__76197_76208;
var G__76219 = chunk__76198_76209;
var G__76220 = count__76199_76210;
var G__76221 = (i__76200_76211 + (1));
seq__76197_76208 = G__76218;
chunk__76198_76209 = G__76219;
count__76199_76210 = G__76220;
i__76200_76211 = G__76221;
continue;
} else {
var temp__5457__auto___76222 = cljs.core.seq.call(null,seq__76197_76208);
if(temp__5457__auto___76222){
var seq__76197_76223__$1 = temp__5457__auto___76222;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__76197_76223__$1)){
var c__4319__auto___76224 = cljs.core.chunk_first.call(null,seq__76197_76223__$1);
var G__76225 = cljs.core.chunk_rest.call(null,seq__76197_76223__$1);
var G__76226 = c__4319__auto___76224;
var G__76227 = cljs.core.count.call(null,c__4319__auto___76224);
var G__76228 = (0);
seq__76197_76208 = G__76225;
chunk__76198_76209 = G__76226;
count__76199_76210 = G__76227;
i__76200_76211 = G__76228;
continue;
} else {
var map__76203_76229 = cljs.core.first.call(null,seq__76197_76223__$1);
var map__76203_76230__$1 = ((((!((map__76203_76229 == null)))?(((((map__76203_76229.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76203_76229.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__76203_76229):map__76203_76229);
var function_76231 = cljs.core.get.call(null,map__76203_76230__$1,new cljs.core.Keyword(null,"function","function",-2127255473));
var file_76232 = cljs.core.get.call(null,map__76203_76230__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line_76233 = cljs.core.get.call(null,map__76203_76230__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_76234 = cljs.core.get.call(null,map__76203_76230__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.println.call(null,"\t",[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(function_76231)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(function_76231)," "].join(''):null)),"(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_76232),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(line_76233)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_76233)].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(column_76234)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_76234)].join(''):null)),")"].join(''));


var G__76235 = cljs.core.next.call(null,seq__76197_76223__$1);
var G__76236 = null;
var G__76237 = (0);
var G__76238 = (0);
seq__76197_76208 = G__76235;
chunk__76198_76209 = G__76236;
count__76199_76210 = G__76237;
i__76200_76211 = G__76238;
>>>>>>> sqlite
continue;
}
} else {
}
}
break;
}
<<<<<<< HEAD
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_56305_56316;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_56304_56315;
=======
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_76196_76207;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_76195_76206;
>>>>>>> sqlite
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4430__auto__)].join('');
});

cljs.stacktrace.mapped_stacktrace_str.cljs$lang$maxFixedArity = 3;


<<<<<<< HEAD
//# sourceMappingURL=stacktrace.js.map?rel=1525389493153
=======
//# sourceMappingURL=stacktrace.js.map?rel=1525389579569
>>>>>>> sqlite
