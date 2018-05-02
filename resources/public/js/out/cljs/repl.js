// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__52615){
var map__52616 = p__52615;
var map__52616__$1 = ((((!((map__52616 == null)))?(((((map__52616.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52616.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52616):map__52616);
var m = map__52616__$1;
var n = cljs.core.get.call(null,map__52616__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__52616__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__52618_52640 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__52619_52641 = null;
var count__52620_52642 = (0);
var i__52621_52643 = (0);
while(true){
if((i__52621_52643 < count__52620_52642)){
var f_52644 = cljs.core._nth.call(null,chunk__52619_52641,i__52621_52643);
cljs.core.println.call(null,"  ",f_52644);


var G__52645 = seq__52618_52640;
var G__52646 = chunk__52619_52641;
var G__52647 = count__52620_52642;
var G__52648 = (i__52621_52643 + (1));
seq__52618_52640 = G__52645;
chunk__52619_52641 = G__52646;
count__52620_52642 = G__52647;
i__52621_52643 = G__52648;
continue;
} else {
var temp__5457__auto___52649 = cljs.core.seq.call(null,seq__52618_52640);
if(temp__5457__auto___52649){
var seq__52618_52650__$1 = temp__5457__auto___52649;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52618_52650__$1)){
var c__4319__auto___52651 = cljs.core.chunk_first.call(null,seq__52618_52650__$1);
var G__52652 = cljs.core.chunk_rest.call(null,seq__52618_52650__$1);
var G__52653 = c__4319__auto___52651;
var G__52654 = cljs.core.count.call(null,c__4319__auto___52651);
var G__52655 = (0);
seq__52618_52640 = G__52652;
chunk__52619_52641 = G__52653;
count__52620_52642 = G__52654;
i__52621_52643 = G__52655;
continue;
} else {
var f_52656 = cljs.core.first.call(null,seq__52618_52650__$1);
cljs.core.println.call(null,"  ",f_52656);


var G__52657 = cljs.core.next.call(null,seq__52618_52650__$1);
var G__52658 = null;
var G__52659 = (0);
var G__52660 = (0);
seq__52618_52640 = G__52657;
chunk__52619_52641 = G__52658;
count__52620_52642 = G__52659;
i__52621_52643 = G__52660;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_52661 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_52661);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_52661)))?cljs.core.second.call(null,arglists_52661):arglists_52661));
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
var seq__52622_52662 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__52623_52663 = null;
var count__52624_52664 = (0);
var i__52625_52665 = (0);
while(true){
if((i__52625_52665 < count__52624_52664)){
var vec__52626_52666 = cljs.core._nth.call(null,chunk__52623_52663,i__52625_52665);
var name_52667 = cljs.core.nth.call(null,vec__52626_52666,(0),null);
var map__52629_52668 = cljs.core.nth.call(null,vec__52626_52666,(1),null);
var map__52629_52669__$1 = ((((!((map__52629_52668 == null)))?(((((map__52629_52668.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52629_52668.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52629_52668):map__52629_52668);
var doc_52670 = cljs.core.get.call(null,map__52629_52669__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_52671 = cljs.core.get.call(null,map__52629_52669__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_52667);

cljs.core.println.call(null," ",arglists_52671);

if(cljs.core.truth_(doc_52670)){
cljs.core.println.call(null," ",doc_52670);
} else {
}


var G__52672 = seq__52622_52662;
var G__52673 = chunk__52623_52663;
var G__52674 = count__52624_52664;
var G__52675 = (i__52625_52665 + (1));
seq__52622_52662 = G__52672;
chunk__52623_52663 = G__52673;
count__52624_52664 = G__52674;
i__52625_52665 = G__52675;
continue;
} else {
var temp__5457__auto___52676 = cljs.core.seq.call(null,seq__52622_52662);
if(temp__5457__auto___52676){
var seq__52622_52677__$1 = temp__5457__auto___52676;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52622_52677__$1)){
var c__4319__auto___52678 = cljs.core.chunk_first.call(null,seq__52622_52677__$1);
var G__52679 = cljs.core.chunk_rest.call(null,seq__52622_52677__$1);
var G__52680 = c__4319__auto___52678;
var G__52681 = cljs.core.count.call(null,c__4319__auto___52678);
var G__52682 = (0);
seq__52622_52662 = G__52679;
chunk__52623_52663 = G__52680;
count__52624_52664 = G__52681;
i__52625_52665 = G__52682;
continue;
} else {
var vec__52631_52683 = cljs.core.first.call(null,seq__52622_52677__$1);
var name_52684 = cljs.core.nth.call(null,vec__52631_52683,(0),null);
var map__52634_52685 = cljs.core.nth.call(null,vec__52631_52683,(1),null);
var map__52634_52686__$1 = ((((!((map__52634_52685 == null)))?(((((map__52634_52685.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52634_52685.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52634_52685):map__52634_52685);
var doc_52687 = cljs.core.get.call(null,map__52634_52686__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_52688 = cljs.core.get.call(null,map__52634_52686__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_52684);

cljs.core.println.call(null," ",arglists_52688);

if(cljs.core.truth_(doc_52687)){
cljs.core.println.call(null," ",doc_52687);
} else {
}


var G__52689 = cljs.core.next.call(null,seq__52622_52677__$1);
var G__52690 = null;
var G__52691 = (0);
var G__52692 = (0);
seq__52622_52662 = G__52689;
chunk__52623_52663 = G__52690;
count__52624_52664 = G__52691;
i__52625_52665 = G__52692;
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

var seq__52636 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__52637 = null;
var count__52638 = (0);
var i__52639 = (0);
while(true){
if((i__52639 < count__52638)){
var role = cljs.core._nth.call(null,chunk__52637,i__52639);
var temp__5457__auto___52693__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___52693__$1)){
var spec_52694 = temp__5457__auto___52693__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_52694));
} else {
}


var G__52695 = seq__52636;
var G__52696 = chunk__52637;
var G__52697 = count__52638;
var G__52698 = (i__52639 + (1));
seq__52636 = G__52695;
chunk__52637 = G__52696;
count__52638 = G__52697;
i__52639 = G__52698;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__52636);
if(temp__5457__auto____$1){
var seq__52636__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52636__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__52636__$1);
var G__52699 = cljs.core.chunk_rest.call(null,seq__52636__$1);
var G__52700 = c__4319__auto__;
var G__52701 = cljs.core.count.call(null,c__4319__auto__);
var G__52702 = (0);
seq__52636 = G__52699;
chunk__52637 = G__52700;
count__52638 = G__52701;
i__52639 = G__52702;
continue;
} else {
var role = cljs.core.first.call(null,seq__52636__$1);
var temp__5457__auto___52703__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___52703__$2)){
var spec_52704 = temp__5457__auto___52703__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_52704));
} else {
}


var G__52705 = cljs.core.next.call(null,seq__52636__$1);
var G__52706 = null;
var G__52707 = (0);
var G__52708 = (0);
seq__52636 = G__52705;
chunk__52637 = G__52706;
count__52638 = G__52707;
i__52639 = G__52708;
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

//# sourceMappingURL=repl.js.map?rel=1525299198394
