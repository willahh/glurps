// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__31188){
var map__31189 = p__31188;
var map__31189__$1 = ((((!((map__31189 == null)))?(((((map__31189.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31189.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31189):map__31189);
var m = map__31189__$1;
var n = cljs.core.get.call(null,map__31189__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__31189__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__31191_31213 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31192_31214 = null;
var count__31193_31215 = (0);
var i__31194_31216 = (0);
while(true){
if((i__31194_31216 < count__31193_31215)){
var f_31217 = cljs.core._nth.call(null,chunk__31192_31214,i__31194_31216);
cljs.core.println.call(null,"  ",f_31217);


var G__31218 = seq__31191_31213;
var G__31219 = chunk__31192_31214;
var G__31220 = count__31193_31215;
var G__31221 = (i__31194_31216 + (1));
seq__31191_31213 = G__31218;
chunk__31192_31214 = G__31219;
count__31193_31215 = G__31220;
i__31194_31216 = G__31221;
continue;
} else {
var temp__5457__auto___31222 = cljs.core.seq.call(null,seq__31191_31213);
if(temp__5457__auto___31222){
var seq__31191_31223__$1 = temp__5457__auto___31222;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31191_31223__$1)){
var c__4319__auto___31224 = cljs.core.chunk_first.call(null,seq__31191_31223__$1);
var G__31225 = cljs.core.chunk_rest.call(null,seq__31191_31223__$1);
var G__31226 = c__4319__auto___31224;
var G__31227 = cljs.core.count.call(null,c__4319__auto___31224);
var G__31228 = (0);
seq__31191_31213 = G__31225;
chunk__31192_31214 = G__31226;
count__31193_31215 = G__31227;
i__31194_31216 = G__31228;
continue;
} else {
var f_31229 = cljs.core.first.call(null,seq__31191_31223__$1);
cljs.core.println.call(null,"  ",f_31229);


var G__31230 = cljs.core.next.call(null,seq__31191_31223__$1);
var G__31231 = null;
var G__31232 = (0);
var G__31233 = (0);
seq__31191_31213 = G__31230;
chunk__31192_31214 = G__31231;
count__31193_31215 = G__31232;
i__31194_31216 = G__31233;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_31234 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_31234);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_31234)))?cljs.core.second.call(null,arglists_31234):arglists_31234));
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
var seq__31195_31235 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31196_31236 = null;
var count__31197_31237 = (0);
var i__31198_31238 = (0);
while(true){
if((i__31198_31238 < count__31197_31237)){
var vec__31199_31239 = cljs.core._nth.call(null,chunk__31196_31236,i__31198_31238);
var name_31240 = cljs.core.nth.call(null,vec__31199_31239,(0),null);
var map__31202_31241 = cljs.core.nth.call(null,vec__31199_31239,(1),null);
var map__31202_31242__$1 = ((((!((map__31202_31241 == null)))?(((((map__31202_31241.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31202_31241.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31202_31241):map__31202_31241);
var doc_31243 = cljs.core.get.call(null,map__31202_31242__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31244 = cljs.core.get.call(null,map__31202_31242__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_31240);

cljs.core.println.call(null," ",arglists_31244);

if(cljs.core.truth_(doc_31243)){
cljs.core.println.call(null," ",doc_31243);
} else {
}


var G__31245 = seq__31195_31235;
var G__31246 = chunk__31196_31236;
var G__31247 = count__31197_31237;
var G__31248 = (i__31198_31238 + (1));
seq__31195_31235 = G__31245;
chunk__31196_31236 = G__31246;
count__31197_31237 = G__31247;
i__31198_31238 = G__31248;
continue;
} else {
var temp__5457__auto___31249 = cljs.core.seq.call(null,seq__31195_31235);
if(temp__5457__auto___31249){
var seq__31195_31250__$1 = temp__5457__auto___31249;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31195_31250__$1)){
var c__4319__auto___31251 = cljs.core.chunk_first.call(null,seq__31195_31250__$1);
var G__31252 = cljs.core.chunk_rest.call(null,seq__31195_31250__$1);
var G__31253 = c__4319__auto___31251;
var G__31254 = cljs.core.count.call(null,c__4319__auto___31251);
var G__31255 = (0);
seq__31195_31235 = G__31252;
chunk__31196_31236 = G__31253;
count__31197_31237 = G__31254;
i__31198_31238 = G__31255;
continue;
} else {
var vec__31204_31256 = cljs.core.first.call(null,seq__31195_31250__$1);
var name_31257 = cljs.core.nth.call(null,vec__31204_31256,(0),null);
var map__31207_31258 = cljs.core.nth.call(null,vec__31204_31256,(1),null);
var map__31207_31259__$1 = ((((!((map__31207_31258 == null)))?(((((map__31207_31258.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31207_31258.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31207_31258):map__31207_31258);
var doc_31260 = cljs.core.get.call(null,map__31207_31259__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31261 = cljs.core.get.call(null,map__31207_31259__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_31257);

cljs.core.println.call(null," ",arglists_31261);

if(cljs.core.truth_(doc_31260)){
cljs.core.println.call(null," ",doc_31260);
} else {
}


var G__31262 = cljs.core.next.call(null,seq__31195_31250__$1);
var G__31263 = null;
var G__31264 = (0);
var G__31265 = (0);
seq__31195_31235 = G__31262;
chunk__31196_31236 = G__31263;
count__31197_31237 = G__31264;
i__31198_31238 = G__31265;
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

var seq__31209 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__31210 = null;
var count__31211 = (0);
var i__31212 = (0);
while(true){
if((i__31212 < count__31211)){
var role = cljs.core._nth.call(null,chunk__31210,i__31212);
var temp__5457__auto___31266__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___31266__$1)){
var spec_31267 = temp__5457__auto___31266__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_31267));
} else {
}


var G__31268 = seq__31209;
var G__31269 = chunk__31210;
var G__31270 = count__31211;
var G__31271 = (i__31212 + (1));
seq__31209 = G__31268;
chunk__31210 = G__31269;
count__31211 = G__31270;
i__31212 = G__31271;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__31209);
if(temp__5457__auto____$1){
var seq__31209__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31209__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__31209__$1);
var G__31272 = cljs.core.chunk_rest.call(null,seq__31209__$1);
var G__31273 = c__4319__auto__;
var G__31274 = cljs.core.count.call(null,c__4319__auto__);
var G__31275 = (0);
seq__31209 = G__31272;
chunk__31210 = G__31273;
count__31211 = G__31274;
i__31212 = G__31275;
continue;
} else {
var role = cljs.core.first.call(null,seq__31209__$1);
var temp__5457__auto___31276__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___31276__$2)){
var spec_31277 = temp__5457__auto___31276__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_31277));
} else {
}


var G__31278 = cljs.core.next.call(null,seq__31209__$1);
var G__31279 = null;
var G__31280 = (0);
var G__31281 = (0);
seq__31209 = G__31278;
chunk__31210 = G__31279;
count__31211 = G__31280;
i__31212 = G__31281;
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

//# sourceMappingURL=repl.js.map?rel=1525301027079
