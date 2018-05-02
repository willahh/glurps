// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__39729){
var map__39730 = p__39729;
var map__39730__$1 = ((((!((map__39730 == null)))?(((((map__39730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39730.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39730):map__39730);
var m = map__39730__$1;
var n = cljs.core.get.call(null,map__39730__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__39730__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__39732_39754 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39733_39755 = null;
var count__39734_39756 = (0);
var i__39735_39757 = (0);
while(true){
if((i__39735_39757 < count__39734_39756)){
var f_39758 = cljs.core._nth.call(null,chunk__39733_39755,i__39735_39757);
cljs.core.println.call(null,"  ",f_39758);


var G__39759 = seq__39732_39754;
var G__39760 = chunk__39733_39755;
var G__39761 = count__39734_39756;
var G__39762 = (i__39735_39757 + (1));
seq__39732_39754 = G__39759;
chunk__39733_39755 = G__39760;
count__39734_39756 = G__39761;
i__39735_39757 = G__39762;
continue;
} else {
var temp__5457__auto___39763 = cljs.core.seq.call(null,seq__39732_39754);
if(temp__5457__auto___39763){
var seq__39732_39764__$1 = temp__5457__auto___39763;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39732_39764__$1)){
var c__4319__auto___39765 = cljs.core.chunk_first.call(null,seq__39732_39764__$1);
var G__39766 = cljs.core.chunk_rest.call(null,seq__39732_39764__$1);
var G__39767 = c__4319__auto___39765;
var G__39768 = cljs.core.count.call(null,c__4319__auto___39765);
var G__39769 = (0);
seq__39732_39754 = G__39766;
chunk__39733_39755 = G__39767;
count__39734_39756 = G__39768;
i__39735_39757 = G__39769;
continue;
} else {
var f_39770 = cljs.core.first.call(null,seq__39732_39764__$1);
cljs.core.println.call(null,"  ",f_39770);


var G__39771 = cljs.core.next.call(null,seq__39732_39764__$1);
var G__39772 = null;
var G__39773 = (0);
var G__39774 = (0);
seq__39732_39754 = G__39771;
chunk__39733_39755 = G__39772;
count__39734_39756 = G__39773;
i__39735_39757 = G__39774;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_39775 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_39775);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_39775)))?cljs.core.second.call(null,arglists_39775):arglists_39775));
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
var seq__39736_39776 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39737_39777 = null;
var count__39738_39778 = (0);
var i__39739_39779 = (0);
while(true){
if((i__39739_39779 < count__39738_39778)){
var vec__39740_39780 = cljs.core._nth.call(null,chunk__39737_39777,i__39739_39779);
var name_39781 = cljs.core.nth.call(null,vec__39740_39780,(0),null);
var map__39743_39782 = cljs.core.nth.call(null,vec__39740_39780,(1),null);
var map__39743_39783__$1 = ((((!((map__39743_39782 == null)))?(((((map__39743_39782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39743_39782.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39743_39782):map__39743_39782);
var doc_39784 = cljs.core.get.call(null,map__39743_39783__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_39785 = cljs.core.get.call(null,map__39743_39783__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_39781);

cljs.core.println.call(null," ",arglists_39785);

if(cljs.core.truth_(doc_39784)){
cljs.core.println.call(null," ",doc_39784);
} else {
}


var G__39786 = seq__39736_39776;
var G__39787 = chunk__39737_39777;
var G__39788 = count__39738_39778;
var G__39789 = (i__39739_39779 + (1));
seq__39736_39776 = G__39786;
chunk__39737_39777 = G__39787;
count__39738_39778 = G__39788;
i__39739_39779 = G__39789;
continue;
} else {
var temp__5457__auto___39790 = cljs.core.seq.call(null,seq__39736_39776);
if(temp__5457__auto___39790){
var seq__39736_39791__$1 = temp__5457__auto___39790;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39736_39791__$1)){
var c__4319__auto___39792 = cljs.core.chunk_first.call(null,seq__39736_39791__$1);
var G__39793 = cljs.core.chunk_rest.call(null,seq__39736_39791__$1);
var G__39794 = c__4319__auto___39792;
var G__39795 = cljs.core.count.call(null,c__4319__auto___39792);
var G__39796 = (0);
seq__39736_39776 = G__39793;
chunk__39737_39777 = G__39794;
count__39738_39778 = G__39795;
i__39739_39779 = G__39796;
continue;
} else {
var vec__39745_39797 = cljs.core.first.call(null,seq__39736_39791__$1);
var name_39798 = cljs.core.nth.call(null,vec__39745_39797,(0),null);
var map__39748_39799 = cljs.core.nth.call(null,vec__39745_39797,(1),null);
var map__39748_39800__$1 = ((((!((map__39748_39799 == null)))?(((((map__39748_39799.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39748_39799.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39748_39799):map__39748_39799);
var doc_39801 = cljs.core.get.call(null,map__39748_39800__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_39802 = cljs.core.get.call(null,map__39748_39800__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_39798);

cljs.core.println.call(null," ",arglists_39802);

if(cljs.core.truth_(doc_39801)){
cljs.core.println.call(null," ",doc_39801);
} else {
}


var G__39803 = cljs.core.next.call(null,seq__39736_39791__$1);
var G__39804 = null;
var G__39805 = (0);
var G__39806 = (0);
seq__39736_39776 = G__39803;
chunk__39737_39777 = G__39804;
count__39738_39778 = G__39805;
i__39739_39779 = G__39806;
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

var seq__39750 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__39751 = null;
var count__39752 = (0);
var i__39753 = (0);
while(true){
if((i__39753 < count__39752)){
var role = cljs.core._nth.call(null,chunk__39751,i__39753);
var temp__5457__auto___39807__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___39807__$1)){
var spec_39808 = temp__5457__auto___39807__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_39808));
} else {
}


var G__39809 = seq__39750;
var G__39810 = chunk__39751;
var G__39811 = count__39752;
var G__39812 = (i__39753 + (1));
seq__39750 = G__39809;
chunk__39751 = G__39810;
count__39752 = G__39811;
i__39753 = G__39812;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__39750);
if(temp__5457__auto____$1){
var seq__39750__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39750__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__39750__$1);
var G__39813 = cljs.core.chunk_rest.call(null,seq__39750__$1);
var G__39814 = c__4319__auto__;
var G__39815 = cljs.core.count.call(null,c__4319__auto__);
var G__39816 = (0);
seq__39750 = G__39813;
chunk__39751 = G__39814;
count__39752 = G__39815;
i__39753 = G__39816;
continue;
} else {
var role = cljs.core.first.call(null,seq__39750__$1);
var temp__5457__auto___39817__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___39817__$2)){
var spec_39818 = temp__5457__auto___39817__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_39818));
} else {
}


var G__39819 = cljs.core.next.call(null,seq__39750__$1);
var G__39820 = null;
var G__39821 = (0);
var G__39822 = (0);
seq__39750 = G__39819;
chunk__39751 = G__39820;
count__39752 = G__39821;
i__39753 = G__39822;
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

//# sourceMappingURL=repl.js.map
