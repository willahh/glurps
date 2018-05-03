// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__31439){
var map__31440 = p__31439;
var map__31440__$1 = ((((!((map__31440 == null)))?(((((map__31440.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31440.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31440):map__31440);
var m = map__31440__$1;
var n = cljs.core.get.call(null,map__31440__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__31440__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__31442_31464 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31443_31465 = null;
var count__31444_31466 = (0);
var i__31445_31467 = (0);
while(true){
if((i__31445_31467 < count__31444_31466)){
var f_31468 = cljs.core._nth.call(null,chunk__31443_31465,i__31445_31467);
cljs.core.println.call(null,"  ",f_31468);


var G__31469 = seq__31442_31464;
var G__31470 = chunk__31443_31465;
var G__31471 = count__31444_31466;
var G__31472 = (i__31445_31467 + (1));
seq__31442_31464 = G__31469;
chunk__31443_31465 = G__31470;
count__31444_31466 = G__31471;
i__31445_31467 = G__31472;
continue;
} else {
var temp__5457__auto___31473 = cljs.core.seq.call(null,seq__31442_31464);
if(temp__5457__auto___31473){
var seq__31442_31474__$1 = temp__5457__auto___31473;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31442_31474__$1)){
var c__4319__auto___31475 = cljs.core.chunk_first.call(null,seq__31442_31474__$1);
var G__31476 = cljs.core.chunk_rest.call(null,seq__31442_31474__$1);
var G__31477 = c__4319__auto___31475;
var G__31478 = cljs.core.count.call(null,c__4319__auto___31475);
var G__31479 = (0);
seq__31442_31464 = G__31476;
chunk__31443_31465 = G__31477;
count__31444_31466 = G__31478;
i__31445_31467 = G__31479;
continue;
} else {
var f_31480 = cljs.core.first.call(null,seq__31442_31474__$1);
cljs.core.println.call(null,"  ",f_31480);


var G__31481 = cljs.core.next.call(null,seq__31442_31474__$1);
var G__31482 = null;
var G__31483 = (0);
var G__31484 = (0);
seq__31442_31464 = G__31481;
chunk__31443_31465 = G__31482;
count__31444_31466 = G__31483;
i__31445_31467 = G__31484;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_31485 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_31485);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_31485)))?cljs.core.second.call(null,arglists_31485):arglists_31485));
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
var seq__31446_31486 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31447_31487 = null;
var count__31448_31488 = (0);
var i__31449_31489 = (0);
while(true){
if((i__31449_31489 < count__31448_31488)){
var vec__31450_31490 = cljs.core._nth.call(null,chunk__31447_31487,i__31449_31489);
var name_31491 = cljs.core.nth.call(null,vec__31450_31490,(0),null);
var map__31453_31492 = cljs.core.nth.call(null,vec__31450_31490,(1),null);
var map__31453_31493__$1 = ((((!((map__31453_31492 == null)))?(((((map__31453_31492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31453_31492.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31453_31492):map__31453_31492);
var doc_31494 = cljs.core.get.call(null,map__31453_31493__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31495 = cljs.core.get.call(null,map__31453_31493__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_31491);

cljs.core.println.call(null," ",arglists_31495);

if(cljs.core.truth_(doc_31494)){
cljs.core.println.call(null," ",doc_31494);
} else {
}


var G__31496 = seq__31446_31486;
var G__31497 = chunk__31447_31487;
var G__31498 = count__31448_31488;
var G__31499 = (i__31449_31489 + (1));
seq__31446_31486 = G__31496;
chunk__31447_31487 = G__31497;
count__31448_31488 = G__31498;
i__31449_31489 = G__31499;
continue;
} else {
var temp__5457__auto___31500 = cljs.core.seq.call(null,seq__31446_31486);
if(temp__5457__auto___31500){
var seq__31446_31501__$1 = temp__5457__auto___31500;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31446_31501__$1)){
var c__4319__auto___31502 = cljs.core.chunk_first.call(null,seq__31446_31501__$1);
var G__31503 = cljs.core.chunk_rest.call(null,seq__31446_31501__$1);
var G__31504 = c__4319__auto___31502;
var G__31505 = cljs.core.count.call(null,c__4319__auto___31502);
var G__31506 = (0);
seq__31446_31486 = G__31503;
chunk__31447_31487 = G__31504;
count__31448_31488 = G__31505;
i__31449_31489 = G__31506;
continue;
} else {
var vec__31455_31507 = cljs.core.first.call(null,seq__31446_31501__$1);
var name_31508 = cljs.core.nth.call(null,vec__31455_31507,(0),null);
var map__31458_31509 = cljs.core.nth.call(null,vec__31455_31507,(1),null);
var map__31458_31510__$1 = ((((!((map__31458_31509 == null)))?(((((map__31458_31509.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31458_31509.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31458_31509):map__31458_31509);
var doc_31511 = cljs.core.get.call(null,map__31458_31510__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31512 = cljs.core.get.call(null,map__31458_31510__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_31508);

cljs.core.println.call(null," ",arglists_31512);

if(cljs.core.truth_(doc_31511)){
cljs.core.println.call(null," ",doc_31511);
} else {
}


var G__31513 = cljs.core.next.call(null,seq__31446_31501__$1);
var G__31514 = null;
var G__31515 = (0);
var G__31516 = (0);
seq__31446_31486 = G__31513;
chunk__31447_31487 = G__31514;
count__31448_31488 = G__31515;
i__31449_31489 = G__31516;
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

var seq__31460 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__31461 = null;
var count__31462 = (0);
var i__31463 = (0);
while(true){
if((i__31463 < count__31462)){
var role = cljs.core._nth.call(null,chunk__31461,i__31463);
var temp__5457__auto___31517__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___31517__$1)){
var spec_31518 = temp__5457__auto___31517__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_31518));
} else {
}


var G__31519 = seq__31460;
var G__31520 = chunk__31461;
var G__31521 = count__31462;
var G__31522 = (i__31463 + (1));
seq__31460 = G__31519;
chunk__31461 = G__31520;
count__31462 = G__31521;
i__31463 = G__31522;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__31460);
if(temp__5457__auto____$1){
var seq__31460__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31460__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__31460__$1);
var G__31523 = cljs.core.chunk_rest.call(null,seq__31460__$1);
var G__31524 = c__4319__auto__;
var G__31525 = cljs.core.count.call(null,c__4319__auto__);
var G__31526 = (0);
seq__31460 = G__31523;
chunk__31461 = G__31524;
count__31462 = G__31525;
i__31463 = G__31526;
continue;
} else {
var role = cljs.core.first.call(null,seq__31460__$1);
var temp__5457__auto___31527__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___31527__$2)){
var spec_31528 = temp__5457__auto___31527__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_31528));
} else {
}


var G__31529 = cljs.core.next.call(null,seq__31460__$1);
var G__31530 = null;
var G__31531 = (0);
var G__31532 = (0);
seq__31460 = G__31529;
chunk__31461 = G__31530;
count__31462 = G__31531;
i__31463 = G__31532;
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

//# sourceMappingURL=repl.js.map?rel=1525376049222
