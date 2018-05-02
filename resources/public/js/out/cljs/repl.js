// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__30531){
var map__30532 = p__30531;
var map__30532__$1 = ((((!((map__30532 == null)))?(((((map__30532.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30532.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30532):map__30532);
var m = map__30532__$1;
var n = cljs.core.get.call(null,map__30532__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__30532__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__30534_30556 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30535_30557 = null;
var count__30536_30558 = (0);
var i__30537_30559 = (0);
while(true){
if((i__30537_30559 < count__30536_30558)){
var f_30560 = cljs.core._nth.call(null,chunk__30535_30557,i__30537_30559);
cljs.core.println.call(null,"  ",f_30560);


var G__30561 = seq__30534_30556;
var G__30562 = chunk__30535_30557;
var G__30563 = count__30536_30558;
var G__30564 = (i__30537_30559 + (1));
seq__30534_30556 = G__30561;
chunk__30535_30557 = G__30562;
count__30536_30558 = G__30563;
i__30537_30559 = G__30564;
continue;
} else {
var temp__5457__auto___30565 = cljs.core.seq.call(null,seq__30534_30556);
if(temp__5457__auto___30565){
var seq__30534_30566__$1 = temp__5457__auto___30565;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30534_30566__$1)){
var c__4319__auto___30567 = cljs.core.chunk_first.call(null,seq__30534_30566__$1);
var G__30568 = cljs.core.chunk_rest.call(null,seq__30534_30566__$1);
var G__30569 = c__4319__auto___30567;
var G__30570 = cljs.core.count.call(null,c__4319__auto___30567);
var G__30571 = (0);
seq__30534_30556 = G__30568;
chunk__30535_30557 = G__30569;
count__30536_30558 = G__30570;
i__30537_30559 = G__30571;
continue;
} else {
var f_30572 = cljs.core.first.call(null,seq__30534_30566__$1);
cljs.core.println.call(null,"  ",f_30572);


var G__30573 = cljs.core.next.call(null,seq__30534_30566__$1);
var G__30574 = null;
var G__30575 = (0);
var G__30576 = (0);
seq__30534_30556 = G__30573;
chunk__30535_30557 = G__30574;
count__30536_30558 = G__30575;
i__30537_30559 = G__30576;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_30577 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_30577);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_30577)))?cljs.core.second.call(null,arglists_30577):arglists_30577));
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
var seq__30538_30578 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30539_30579 = null;
var count__30540_30580 = (0);
var i__30541_30581 = (0);
while(true){
if((i__30541_30581 < count__30540_30580)){
var vec__30542_30582 = cljs.core._nth.call(null,chunk__30539_30579,i__30541_30581);
var name_30583 = cljs.core.nth.call(null,vec__30542_30582,(0),null);
var map__30545_30584 = cljs.core.nth.call(null,vec__30542_30582,(1),null);
var map__30545_30585__$1 = ((((!((map__30545_30584 == null)))?(((((map__30545_30584.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30545_30584.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30545_30584):map__30545_30584);
var doc_30586 = cljs.core.get.call(null,map__30545_30585__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30587 = cljs.core.get.call(null,map__30545_30585__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30583);

cljs.core.println.call(null," ",arglists_30587);

if(cljs.core.truth_(doc_30586)){
cljs.core.println.call(null," ",doc_30586);
} else {
}


var G__30588 = seq__30538_30578;
var G__30589 = chunk__30539_30579;
var G__30590 = count__30540_30580;
var G__30591 = (i__30541_30581 + (1));
seq__30538_30578 = G__30588;
chunk__30539_30579 = G__30589;
count__30540_30580 = G__30590;
i__30541_30581 = G__30591;
continue;
} else {
var temp__5457__auto___30592 = cljs.core.seq.call(null,seq__30538_30578);
if(temp__5457__auto___30592){
var seq__30538_30593__$1 = temp__5457__auto___30592;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30538_30593__$1)){
var c__4319__auto___30594 = cljs.core.chunk_first.call(null,seq__30538_30593__$1);
var G__30595 = cljs.core.chunk_rest.call(null,seq__30538_30593__$1);
var G__30596 = c__4319__auto___30594;
var G__30597 = cljs.core.count.call(null,c__4319__auto___30594);
var G__30598 = (0);
seq__30538_30578 = G__30595;
chunk__30539_30579 = G__30596;
count__30540_30580 = G__30597;
i__30541_30581 = G__30598;
continue;
} else {
var vec__30547_30599 = cljs.core.first.call(null,seq__30538_30593__$1);
var name_30600 = cljs.core.nth.call(null,vec__30547_30599,(0),null);
var map__30550_30601 = cljs.core.nth.call(null,vec__30547_30599,(1),null);
var map__30550_30602__$1 = ((((!((map__30550_30601 == null)))?(((((map__30550_30601.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30550_30601.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30550_30601):map__30550_30601);
var doc_30603 = cljs.core.get.call(null,map__30550_30602__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30604 = cljs.core.get.call(null,map__30550_30602__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30600);

cljs.core.println.call(null," ",arglists_30604);

if(cljs.core.truth_(doc_30603)){
cljs.core.println.call(null," ",doc_30603);
} else {
}


var G__30605 = cljs.core.next.call(null,seq__30538_30593__$1);
var G__30606 = null;
var G__30607 = (0);
var G__30608 = (0);
seq__30538_30578 = G__30605;
chunk__30539_30579 = G__30606;
count__30540_30580 = G__30607;
i__30541_30581 = G__30608;
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

var seq__30552 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__30553 = null;
var count__30554 = (0);
var i__30555 = (0);
while(true){
if((i__30555 < count__30554)){
var role = cljs.core._nth.call(null,chunk__30553,i__30555);
var temp__5457__auto___30609__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___30609__$1)){
var spec_30610 = temp__5457__auto___30609__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_30610));
} else {
}


var G__30611 = seq__30552;
var G__30612 = chunk__30553;
var G__30613 = count__30554;
var G__30614 = (i__30555 + (1));
seq__30552 = G__30611;
chunk__30553 = G__30612;
count__30554 = G__30613;
i__30555 = G__30614;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__30552);
if(temp__5457__auto____$1){
var seq__30552__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30552__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__30552__$1);
var G__30615 = cljs.core.chunk_rest.call(null,seq__30552__$1);
var G__30616 = c__4319__auto__;
var G__30617 = cljs.core.count.call(null,c__4319__auto__);
var G__30618 = (0);
seq__30552 = G__30615;
chunk__30553 = G__30616;
count__30554 = G__30617;
i__30555 = G__30618;
continue;
} else {
var role = cljs.core.first.call(null,seq__30552__$1);
var temp__5457__auto___30619__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___30619__$2)){
var spec_30620 = temp__5457__auto___30619__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_30620));
} else {
}


var G__30621 = cljs.core.next.call(null,seq__30552__$1);
var G__30622 = null;
var G__30623 = (0);
var G__30624 = (0);
seq__30552 = G__30621;
chunk__30553 = G__30622;
count__30554 = G__30623;
i__30555 = G__30624;
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

//# sourceMappingURL=repl.js.map?rel=1525295747863
