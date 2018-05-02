// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__72267){
var map__72268 = p__72267;
var map__72268__$1 = ((((!((map__72268 == null)))?(((((map__72268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72268.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__72268):map__72268);
var m = map__72268__$1;
var n = cljs.core.get.call(null,map__72268__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__72268__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__72270_72292 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__72271_72293 = null;
var count__72272_72294 = (0);
var i__72273_72295 = (0);
while(true){
if((i__72273_72295 < count__72272_72294)){
var f_72296 = cljs.core._nth.call(null,chunk__72271_72293,i__72273_72295);
cljs.core.println.call(null,"  ",f_72296);


var G__72297 = seq__72270_72292;
var G__72298 = chunk__72271_72293;
var G__72299 = count__72272_72294;
var G__72300 = (i__72273_72295 + (1));
seq__72270_72292 = G__72297;
chunk__72271_72293 = G__72298;
count__72272_72294 = G__72299;
i__72273_72295 = G__72300;
continue;
} else {
var temp__5457__auto___72301 = cljs.core.seq.call(null,seq__72270_72292);
if(temp__5457__auto___72301){
var seq__72270_72302__$1 = temp__5457__auto___72301;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__72270_72302__$1)){
var c__4319__auto___72303 = cljs.core.chunk_first.call(null,seq__72270_72302__$1);
var G__72304 = cljs.core.chunk_rest.call(null,seq__72270_72302__$1);
var G__72305 = c__4319__auto___72303;
var G__72306 = cljs.core.count.call(null,c__4319__auto___72303);
var G__72307 = (0);
seq__72270_72292 = G__72304;
chunk__72271_72293 = G__72305;
count__72272_72294 = G__72306;
i__72273_72295 = G__72307;
continue;
} else {
var f_72308 = cljs.core.first.call(null,seq__72270_72302__$1);
cljs.core.println.call(null,"  ",f_72308);


var G__72309 = cljs.core.next.call(null,seq__72270_72302__$1);
var G__72310 = null;
var G__72311 = (0);
var G__72312 = (0);
seq__72270_72292 = G__72309;
chunk__72271_72293 = G__72310;
count__72272_72294 = G__72311;
i__72273_72295 = G__72312;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_72313 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_72313);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_72313)))?cljs.core.second.call(null,arglists_72313):arglists_72313));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__72274_72314 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__72275_72315 = null;
var count__72276_72316 = (0);
var i__72277_72317 = (0);
while(true){
if((i__72277_72317 < count__72276_72316)){
var vec__72278_72318 = cljs.core._nth.call(null,chunk__72275_72315,i__72277_72317);
var name_72319 = cljs.core.nth.call(null,vec__72278_72318,(0),null);
var map__72281_72320 = cljs.core.nth.call(null,vec__72278_72318,(1),null);
var map__72281_72321__$1 = ((((!((map__72281_72320 == null)))?(((((map__72281_72320.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72281_72320.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__72281_72320):map__72281_72320);
var doc_72322 = cljs.core.get.call(null,map__72281_72321__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_72323 = cljs.core.get.call(null,map__72281_72321__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_72319);

cljs.core.println.call(null," ",arglists_72323);

if(cljs.core.truth_(doc_72322)){
cljs.core.println.call(null," ",doc_72322);
} else {
}


var G__72324 = seq__72274_72314;
var G__72325 = chunk__72275_72315;
var G__72326 = count__72276_72316;
var G__72327 = (i__72277_72317 + (1));
seq__72274_72314 = G__72324;
chunk__72275_72315 = G__72325;
count__72276_72316 = G__72326;
i__72277_72317 = G__72327;
continue;
} else {
var temp__5457__auto___72328 = cljs.core.seq.call(null,seq__72274_72314);
if(temp__5457__auto___72328){
var seq__72274_72329__$1 = temp__5457__auto___72328;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__72274_72329__$1)){
var c__4319__auto___72330 = cljs.core.chunk_first.call(null,seq__72274_72329__$1);
var G__72331 = cljs.core.chunk_rest.call(null,seq__72274_72329__$1);
var G__72332 = c__4319__auto___72330;
var G__72333 = cljs.core.count.call(null,c__4319__auto___72330);
var G__72334 = (0);
seq__72274_72314 = G__72331;
chunk__72275_72315 = G__72332;
count__72276_72316 = G__72333;
i__72277_72317 = G__72334;
continue;
} else {
var vec__72283_72335 = cljs.core.first.call(null,seq__72274_72329__$1);
var name_72336 = cljs.core.nth.call(null,vec__72283_72335,(0),null);
var map__72286_72337 = cljs.core.nth.call(null,vec__72283_72335,(1),null);
var map__72286_72338__$1 = ((((!((map__72286_72337 == null)))?(((((map__72286_72337.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72286_72337.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__72286_72337):map__72286_72337);
var doc_72339 = cljs.core.get.call(null,map__72286_72338__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_72340 = cljs.core.get.call(null,map__72286_72338__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_72336);

cljs.core.println.call(null," ",arglists_72340);

if(cljs.core.truth_(doc_72339)){
cljs.core.println.call(null," ",doc_72339);
} else {
}


var G__72341 = cljs.core.next.call(null,seq__72274_72329__$1);
var G__72342 = null;
var G__72343 = (0);
var G__72344 = (0);
seq__72274_72314 = G__72341;
chunk__72275_72315 = G__72342;
count__72276_72316 = G__72343;
i__72277_72317 = G__72344;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__72288 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__72289 = null;
var count__72290 = (0);
var i__72291 = (0);
while(true){
if((i__72291 < count__72290)){
var role = cljs.core._nth.call(null,chunk__72289,i__72291);
var temp__5457__auto___72345__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___72345__$1)){
var spec_72346 = temp__5457__auto___72345__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_72346));
} else {
}


var G__72347 = seq__72288;
var G__72348 = chunk__72289;
var G__72349 = count__72290;
var G__72350 = (i__72291 + (1));
seq__72288 = G__72347;
chunk__72289 = G__72348;
count__72290 = G__72349;
i__72291 = G__72350;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__72288);
if(temp__5457__auto____$1){
var seq__72288__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__72288__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__72288__$1);
var G__72351 = cljs.core.chunk_rest.call(null,seq__72288__$1);
var G__72352 = c__4319__auto__;
var G__72353 = cljs.core.count.call(null,c__4319__auto__);
var G__72354 = (0);
seq__72288 = G__72351;
chunk__72289 = G__72352;
count__72290 = G__72353;
i__72291 = G__72354;
continue;
} else {
var role = cljs.core.first.call(null,seq__72288__$1);
var temp__5457__auto___72355__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___72355__$2)){
var spec_72356 = temp__5457__auto___72355__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_72356));
} else {
}


var G__72357 = cljs.core.next.call(null,seq__72288__$1);
var G__72358 = null;
var G__72359 = (0);
var G__72360 = (0);
seq__72288 = G__72357;
chunk__72289 = G__72358;
count__72290 = G__72359;
i__72291 = G__72360;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1525299309867
