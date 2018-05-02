// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__30465){
var map__30466 = p__30465;
var map__30466__$1 = ((((!((map__30466 == null)))?(((((map__30466.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30466.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30466):map__30466);
var m = map__30466__$1;
var n = cljs.core.get.call(null,map__30466__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__30466__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__30468_30490 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30469_30491 = null;
var count__30470_30492 = (0);
var i__30471_30493 = (0);
while(true){
if((i__30471_30493 < count__30470_30492)){
var f_30494 = cljs.core._nth.call(null,chunk__30469_30491,i__30471_30493);
cljs.core.println.call(null,"  ",f_30494);


var G__30495 = seq__30468_30490;
var G__30496 = chunk__30469_30491;
var G__30497 = count__30470_30492;
var G__30498 = (i__30471_30493 + (1));
seq__30468_30490 = G__30495;
chunk__30469_30491 = G__30496;
count__30470_30492 = G__30497;
i__30471_30493 = G__30498;
continue;
} else {
var temp__5457__auto___30499 = cljs.core.seq.call(null,seq__30468_30490);
if(temp__5457__auto___30499){
var seq__30468_30500__$1 = temp__5457__auto___30499;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30468_30500__$1)){
var c__4319__auto___30501 = cljs.core.chunk_first.call(null,seq__30468_30500__$1);
var G__30502 = cljs.core.chunk_rest.call(null,seq__30468_30500__$1);
var G__30503 = c__4319__auto___30501;
var G__30504 = cljs.core.count.call(null,c__4319__auto___30501);
var G__30505 = (0);
seq__30468_30490 = G__30502;
chunk__30469_30491 = G__30503;
count__30470_30492 = G__30504;
i__30471_30493 = G__30505;
continue;
} else {
var f_30506 = cljs.core.first.call(null,seq__30468_30500__$1);
cljs.core.println.call(null,"  ",f_30506);


var G__30507 = cljs.core.next.call(null,seq__30468_30500__$1);
var G__30508 = null;
var G__30509 = (0);
var G__30510 = (0);
seq__30468_30490 = G__30507;
chunk__30469_30491 = G__30508;
count__30470_30492 = G__30509;
i__30471_30493 = G__30510;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_30511 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_30511);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_30511)))?cljs.core.second.call(null,arglists_30511):arglists_30511));
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
var seq__30472_30512 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30473_30513 = null;
var count__30474_30514 = (0);
var i__30475_30515 = (0);
while(true){
if((i__30475_30515 < count__30474_30514)){
var vec__30476_30516 = cljs.core._nth.call(null,chunk__30473_30513,i__30475_30515);
var name_30517 = cljs.core.nth.call(null,vec__30476_30516,(0),null);
var map__30479_30518 = cljs.core.nth.call(null,vec__30476_30516,(1),null);
var map__30479_30519__$1 = ((((!((map__30479_30518 == null)))?(((((map__30479_30518.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30479_30518.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30479_30518):map__30479_30518);
var doc_30520 = cljs.core.get.call(null,map__30479_30519__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30521 = cljs.core.get.call(null,map__30479_30519__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30517);

cljs.core.println.call(null," ",arglists_30521);

if(cljs.core.truth_(doc_30520)){
cljs.core.println.call(null," ",doc_30520);
} else {
}


var G__30522 = seq__30472_30512;
var G__30523 = chunk__30473_30513;
var G__30524 = count__30474_30514;
var G__30525 = (i__30475_30515 + (1));
seq__30472_30512 = G__30522;
chunk__30473_30513 = G__30523;
count__30474_30514 = G__30524;
i__30475_30515 = G__30525;
continue;
} else {
var temp__5457__auto___30526 = cljs.core.seq.call(null,seq__30472_30512);
if(temp__5457__auto___30526){
var seq__30472_30527__$1 = temp__5457__auto___30526;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30472_30527__$1)){
var c__4319__auto___30528 = cljs.core.chunk_first.call(null,seq__30472_30527__$1);
var G__30529 = cljs.core.chunk_rest.call(null,seq__30472_30527__$1);
var G__30530 = c__4319__auto___30528;
var G__30531 = cljs.core.count.call(null,c__4319__auto___30528);
var G__30532 = (0);
seq__30472_30512 = G__30529;
chunk__30473_30513 = G__30530;
count__30474_30514 = G__30531;
i__30475_30515 = G__30532;
continue;
} else {
var vec__30481_30533 = cljs.core.first.call(null,seq__30472_30527__$1);
var name_30534 = cljs.core.nth.call(null,vec__30481_30533,(0),null);
var map__30484_30535 = cljs.core.nth.call(null,vec__30481_30533,(1),null);
var map__30484_30536__$1 = ((((!((map__30484_30535 == null)))?(((((map__30484_30535.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30484_30535.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30484_30535):map__30484_30535);
var doc_30537 = cljs.core.get.call(null,map__30484_30536__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30538 = cljs.core.get.call(null,map__30484_30536__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30534);

cljs.core.println.call(null," ",arglists_30538);

if(cljs.core.truth_(doc_30537)){
cljs.core.println.call(null," ",doc_30537);
} else {
}


var G__30539 = cljs.core.next.call(null,seq__30472_30527__$1);
var G__30540 = null;
var G__30541 = (0);
var G__30542 = (0);
seq__30472_30512 = G__30539;
chunk__30473_30513 = G__30540;
count__30474_30514 = G__30541;
i__30475_30515 = G__30542;
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

var seq__30486 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__30487 = null;
var count__30488 = (0);
var i__30489 = (0);
while(true){
if((i__30489 < count__30488)){
var role = cljs.core._nth.call(null,chunk__30487,i__30489);
var temp__5457__auto___30543__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___30543__$1)){
var spec_30544 = temp__5457__auto___30543__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_30544));
} else {
}


var G__30545 = seq__30486;
var G__30546 = chunk__30487;
var G__30547 = count__30488;
var G__30548 = (i__30489 + (1));
seq__30486 = G__30545;
chunk__30487 = G__30546;
count__30488 = G__30547;
i__30489 = G__30548;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__30486);
if(temp__5457__auto____$1){
var seq__30486__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30486__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__30486__$1);
var G__30549 = cljs.core.chunk_rest.call(null,seq__30486__$1);
var G__30550 = c__4319__auto__;
var G__30551 = cljs.core.count.call(null,c__4319__auto__);
var G__30552 = (0);
seq__30486 = G__30549;
chunk__30487 = G__30550;
count__30488 = G__30551;
i__30489 = G__30552;
continue;
} else {
var role = cljs.core.first.call(null,seq__30486__$1);
var temp__5457__auto___30553__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___30553__$2)){
var spec_30554 = temp__5457__auto___30553__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_30554));
} else {
}


var G__30555 = cljs.core.next.call(null,seq__30486__$1);
var G__30556 = null;
var G__30557 = (0);
var G__30558 = (0);
seq__30486 = G__30555;
chunk__30487 = G__30556;
count__30488 = G__30557;
i__30489 = G__30558;
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

//# sourceMappingURL=repl.js.map?rel=1525289330081
