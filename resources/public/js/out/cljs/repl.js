// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__66091){
var map__66092 = p__66091;
var map__66092__$1 = ((((!((map__66092 == null)))?(((((map__66092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66092.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66092):map__66092);
var m = map__66092__$1;
var n = cljs.core.get.call(null,map__66092__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__66092__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__66094_66116 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__66095_66117 = null;
var count__66096_66118 = (0);
var i__66097_66119 = (0);
while(true){
if((i__66097_66119 < count__66096_66118)){
var f_66120 = cljs.core._nth.call(null,chunk__66095_66117,i__66097_66119);
cljs.core.println.call(null,"  ",f_66120);


var G__66121 = seq__66094_66116;
var G__66122 = chunk__66095_66117;
var G__66123 = count__66096_66118;
var G__66124 = (i__66097_66119 + (1));
seq__66094_66116 = G__66121;
chunk__66095_66117 = G__66122;
count__66096_66118 = G__66123;
i__66097_66119 = G__66124;
continue;
} else {
var temp__5457__auto___66125 = cljs.core.seq.call(null,seq__66094_66116);
if(temp__5457__auto___66125){
var seq__66094_66126__$1 = temp__5457__auto___66125;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__66094_66126__$1)){
var c__4319__auto___66127 = cljs.core.chunk_first.call(null,seq__66094_66126__$1);
var G__66128 = cljs.core.chunk_rest.call(null,seq__66094_66126__$1);
var G__66129 = c__4319__auto___66127;
var G__66130 = cljs.core.count.call(null,c__4319__auto___66127);
var G__66131 = (0);
seq__66094_66116 = G__66128;
chunk__66095_66117 = G__66129;
count__66096_66118 = G__66130;
i__66097_66119 = G__66131;
continue;
} else {
var f_66132 = cljs.core.first.call(null,seq__66094_66126__$1);
cljs.core.println.call(null,"  ",f_66132);


var G__66133 = cljs.core.next.call(null,seq__66094_66126__$1);
var G__66134 = null;
var G__66135 = (0);
var G__66136 = (0);
seq__66094_66116 = G__66133;
chunk__66095_66117 = G__66134;
count__66096_66118 = G__66135;
i__66097_66119 = G__66136;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_66137 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_66137);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_66137)))?cljs.core.second.call(null,arglists_66137):arglists_66137));
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
var seq__66098_66138 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__66099_66139 = null;
var count__66100_66140 = (0);
var i__66101_66141 = (0);
while(true){
if((i__66101_66141 < count__66100_66140)){
var vec__66102_66142 = cljs.core._nth.call(null,chunk__66099_66139,i__66101_66141);
var name_66143 = cljs.core.nth.call(null,vec__66102_66142,(0),null);
var map__66105_66144 = cljs.core.nth.call(null,vec__66102_66142,(1),null);
var map__66105_66145__$1 = ((((!((map__66105_66144 == null)))?(((((map__66105_66144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66105_66144.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66105_66144):map__66105_66144);
var doc_66146 = cljs.core.get.call(null,map__66105_66145__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_66147 = cljs.core.get.call(null,map__66105_66145__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_66143);

cljs.core.println.call(null," ",arglists_66147);

if(cljs.core.truth_(doc_66146)){
cljs.core.println.call(null," ",doc_66146);
} else {
}


var G__66148 = seq__66098_66138;
var G__66149 = chunk__66099_66139;
var G__66150 = count__66100_66140;
var G__66151 = (i__66101_66141 + (1));
seq__66098_66138 = G__66148;
chunk__66099_66139 = G__66149;
count__66100_66140 = G__66150;
i__66101_66141 = G__66151;
continue;
} else {
var temp__5457__auto___66152 = cljs.core.seq.call(null,seq__66098_66138);
if(temp__5457__auto___66152){
var seq__66098_66153__$1 = temp__5457__auto___66152;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__66098_66153__$1)){
var c__4319__auto___66154 = cljs.core.chunk_first.call(null,seq__66098_66153__$1);
var G__66155 = cljs.core.chunk_rest.call(null,seq__66098_66153__$1);
var G__66156 = c__4319__auto___66154;
var G__66157 = cljs.core.count.call(null,c__4319__auto___66154);
var G__66158 = (0);
seq__66098_66138 = G__66155;
chunk__66099_66139 = G__66156;
count__66100_66140 = G__66157;
i__66101_66141 = G__66158;
continue;
} else {
var vec__66107_66159 = cljs.core.first.call(null,seq__66098_66153__$1);
var name_66160 = cljs.core.nth.call(null,vec__66107_66159,(0),null);
var map__66110_66161 = cljs.core.nth.call(null,vec__66107_66159,(1),null);
var map__66110_66162__$1 = ((((!((map__66110_66161 == null)))?(((((map__66110_66161.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66110_66161.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66110_66161):map__66110_66161);
var doc_66163 = cljs.core.get.call(null,map__66110_66162__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_66164 = cljs.core.get.call(null,map__66110_66162__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_66160);

cljs.core.println.call(null," ",arglists_66164);

if(cljs.core.truth_(doc_66163)){
cljs.core.println.call(null," ",doc_66163);
} else {
}


var G__66165 = cljs.core.next.call(null,seq__66098_66153__$1);
var G__66166 = null;
var G__66167 = (0);
var G__66168 = (0);
seq__66098_66138 = G__66165;
chunk__66099_66139 = G__66166;
count__66100_66140 = G__66167;
i__66101_66141 = G__66168;
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

var seq__66112 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__66113 = null;
var count__66114 = (0);
var i__66115 = (0);
while(true){
if((i__66115 < count__66114)){
var role = cljs.core._nth.call(null,chunk__66113,i__66115);
var temp__5457__auto___66169__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___66169__$1)){
var spec_66170 = temp__5457__auto___66169__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_66170));
} else {
}


var G__66171 = seq__66112;
var G__66172 = chunk__66113;
var G__66173 = count__66114;
var G__66174 = (i__66115 + (1));
seq__66112 = G__66171;
chunk__66113 = G__66172;
count__66114 = G__66173;
i__66115 = G__66174;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__66112);
if(temp__5457__auto____$1){
var seq__66112__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__66112__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__66112__$1);
var G__66175 = cljs.core.chunk_rest.call(null,seq__66112__$1);
var G__66176 = c__4319__auto__;
var G__66177 = cljs.core.count.call(null,c__4319__auto__);
var G__66178 = (0);
seq__66112 = G__66175;
chunk__66113 = G__66176;
count__66114 = G__66177;
i__66115 = G__66178;
continue;
} else {
var role = cljs.core.first.call(null,seq__66112__$1);
var temp__5457__auto___66179__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___66179__$2)){
var spec_66180 = temp__5457__auto___66179__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_66180));
} else {
}


var G__66181 = cljs.core.next.call(null,seq__66112__$1);
var G__66182 = null;
var G__66183 = (0);
var G__66184 = (0);
seq__66112 = G__66181;
chunk__66113 = G__66182;
count__66114 = G__66183;
i__66115 = G__66184;
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

//# sourceMappingURL=repl.js.map?rel=1525389504961
