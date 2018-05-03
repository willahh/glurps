// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__85756){
var map__85757 = p__85756;
var map__85757__$1 = ((((!((map__85757 == null)))?(((((map__85757.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85757.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__85757):map__85757);
var m = map__85757__$1;
var n = cljs.core.get.call(null,map__85757__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__85757__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__85759_85781 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__85760_85782 = null;
var count__85761_85783 = (0);
var i__85762_85784 = (0);
while(true){
if((i__85762_85784 < count__85761_85783)){
var f_85785 = cljs.core._nth.call(null,chunk__85760_85782,i__85762_85784);
cljs.core.println.call(null,"  ",f_85785);


var G__85786 = seq__85759_85781;
var G__85787 = chunk__85760_85782;
var G__85788 = count__85761_85783;
var G__85789 = (i__85762_85784 + (1));
seq__85759_85781 = G__85786;
chunk__85760_85782 = G__85787;
count__85761_85783 = G__85788;
i__85762_85784 = G__85789;
continue;
} else {
var temp__5457__auto___85790 = cljs.core.seq.call(null,seq__85759_85781);
if(temp__5457__auto___85790){
var seq__85759_85791__$1 = temp__5457__auto___85790;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__85759_85791__$1)){
var c__4319__auto___85792 = cljs.core.chunk_first.call(null,seq__85759_85791__$1);
var G__85793 = cljs.core.chunk_rest.call(null,seq__85759_85791__$1);
var G__85794 = c__4319__auto___85792;
var G__85795 = cljs.core.count.call(null,c__4319__auto___85792);
var G__85796 = (0);
seq__85759_85781 = G__85793;
chunk__85760_85782 = G__85794;
count__85761_85783 = G__85795;
i__85762_85784 = G__85796;
continue;
} else {
var f_85797 = cljs.core.first.call(null,seq__85759_85791__$1);
cljs.core.println.call(null,"  ",f_85797);


var G__85798 = cljs.core.next.call(null,seq__85759_85791__$1);
var G__85799 = null;
var G__85800 = (0);
var G__85801 = (0);
seq__85759_85781 = G__85798;
chunk__85760_85782 = G__85799;
count__85761_85783 = G__85800;
i__85762_85784 = G__85801;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_85802 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_85802);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_85802)))?cljs.core.second.call(null,arglists_85802):arglists_85802));
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
var seq__85763_85803 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__85764_85804 = null;
var count__85765_85805 = (0);
var i__85766_85806 = (0);
while(true){
if((i__85766_85806 < count__85765_85805)){
var vec__85767_85807 = cljs.core._nth.call(null,chunk__85764_85804,i__85766_85806);
var name_85808 = cljs.core.nth.call(null,vec__85767_85807,(0),null);
var map__85770_85809 = cljs.core.nth.call(null,vec__85767_85807,(1),null);
var map__85770_85810__$1 = ((((!((map__85770_85809 == null)))?(((((map__85770_85809.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85770_85809.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__85770_85809):map__85770_85809);
var doc_85811 = cljs.core.get.call(null,map__85770_85810__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_85812 = cljs.core.get.call(null,map__85770_85810__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_85808);

cljs.core.println.call(null," ",arglists_85812);

if(cljs.core.truth_(doc_85811)){
cljs.core.println.call(null," ",doc_85811);
} else {
}


var G__85813 = seq__85763_85803;
var G__85814 = chunk__85764_85804;
var G__85815 = count__85765_85805;
var G__85816 = (i__85766_85806 + (1));
seq__85763_85803 = G__85813;
chunk__85764_85804 = G__85814;
count__85765_85805 = G__85815;
i__85766_85806 = G__85816;
continue;
} else {
var temp__5457__auto___85817 = cljs.core.seq.call(null,seq__85763_85803);
if(temp__5457__auto___85817){
var seq__85763_85818__$1 = temp__5457__auto___85817;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__85763_85818__$1)){
var c__4319__auto___85819 = cljs.core.chunk_first.call(null,seq__85763_85818__$1);
var G__85820 = cljs.core.chunk_rest.call(null,seq__85763_85818__$1);
var G__85821 = c__4319__auto___85819;
var G__85822 = cljs.core.count.call(null,c__4319__auto___85819);
var G__85823 = (0);
seq__85763_85803 = G__85820;
chunk__85764_85804 = G__85821;
count__85765_85805 = G__85822;
i__85766_85806 = G__85823;
continue;
} else {
var vec__85772_85824 = cljs.core.first.call(null,seq__85763_85818__$1);
var name_85825 = cljs.core.nth.call(null,vec__85772_85824,(0),null);
var map__85775_85826 = cljs.core.nth.call(null,vec__85772_85824,(1),null);
var map__85775_85827__$1 = ((((!((map__85775_85826 == null)))?(((((map__85775_85826.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85775_85826.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__85775_85826):map__85775_85826);
var doc_85828 = cljs.core.get.call(null,map__85775_85827__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_85829 = cljs.core.get.call(null,map__85775_85827__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_85825);

cljs.core.println.call(null," ",arglists_85829);

if(cljs.core.truth_(doc_85828)){
cljs.core.println.call(null," ",doc_85828);
} else {
}


var G__85830 = cljs.core.next.call(null,seq__85763_85818__$1);
var G__85831 = null;
var G__85832 = (0);
var G__85833 = (0);
seq__85763_85803 = G__85830;
chunk__85764_85804 = G__85831;
count__85765_85805 = G__85832;
i__85766_85806 = G__85833;
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

var seq__85777 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__85778 = null;
var count__85779 = (0);
var i__85780 = (0);
while(true){
if((i__85780 < count__85779)){
var role = cljs.core._nth.call(null,chunk__85778,i__85780);
var temp__5457__auto___85834__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___85834__$1)){
var spec_85835 = temp__5457__auto___85834__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_85835));
} else {
}


var G__85836 = seq__85777;
var G__85837 = chunk__85778;
var G__85838 = count__85779;
var G__85839 = (i__85780 + (1));
seq__85777 = G__85836;
chunk__85778 = G__85837;
count__85779 = G__85838;
i__85780 = G__85839;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__85777);
if(temp__5457__auto____$1){
var seq__85777__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__85777__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__85777__$1);
var G__85840 = cljs.core.chunk_rest.call(null,seq__85777__$1);
var G__85841 = c__4319__auto__;
var G__85842 = cljs.core.count.call(null,c__4319__auto__);
var G__85843 = (0);
seq__85777 = G__85840;
chunk__85778 = G__85841;
count__85779 = G__85842;
i__85780 = G__85843;
continue;
} else {
var role = cljs.core.first.call(null,seq__85777__$1);
var temp__5457__auto___85844__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___85844__$2)){
var spec_85845 = temp__5457__auto___85844__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_85845));
} else {
}


var G__85846 = cljs.core.next.call(null,seq__85777__$1);
var G__85847 = null;
var G__85848 = (0);
var G__85849 = (0);
seq__85777 = G__85846;
chunk__85778 = G__85847;
count__85779 = G__85848;
i__85780 = G__85849;
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

//# sourceMappingURL=repl.js.map?rel=1525389592205
