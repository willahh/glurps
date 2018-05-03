// Compiled by ClojureScript 1.10.238 {}
goog.provide('glurps.component.form.select');
goog.require('cljs.core');
glurps.component.form.select.select_html = (function glurps$component$form$select$select_html(var_args){
var args__4502__auto__ = [];
var len__4499__auto___38112 = arguments.length;
var i__4500__auto___38113 = (0);
while(true){
if((i__4500__auto___38113 < len__4499__auto___38112)){
args__4502__auto__.push((arguments[i__4500__auto___38113]));

var G__38114 = (i__4500__auto___38113 + (1));
i__4500__auto___38113 = G__38114;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return glurps.component.form.select.select_html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

glurps.component.form.select.select_html.cljs$core$IFn$_invoke$arity$variadic = (function (field_name,options,conf){
var selected_option = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__38104_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__38104_SHARP_),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__38104_SHARP_));
}),options));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"ui selection dropdown"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"hidden",new cljs.core.Keyword(null,"name","name",1843675177),field_name,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(selected_option)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"dropdown icon"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text"], null),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(selected_option)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"menu"], null),(function (){var iter__4292__auto__ = ((function (selected_option){
return (function glurps$component$form$select$iter__38108(s__38109){
return (new cljs.core.LazySeq(null,((function (selected_option){
return (function (){
var s__38109__$1 = s__38109;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__38109__$1);
if(temp__5457__auto__){
var s__38109__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38109__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__38109__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__38111 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__38110 = (0);
while(true){
if((i__38110 < size__4291__auto__)){
var option = cljs.core._nth.call(null,c__4290__auto__,i__38110);
cljs.core.chunk_append.call(null,b__38111,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.conj.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"item",new cljs.core.Keyword(null,"data-value","data-value",-1897915206),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(option)], null),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(option),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(option)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),"true"], null):null)),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(option)], null));

var G__38115 = (i__38110 + (1));
i__38110 = G__38115;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38111),glurps$component$form$select$iter__38108.call(null,cljs.core.chunk_rest.call(null,s__38109__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38111),null);
}
} else {
var option = cljs.core.first.call(null,s__38109__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.conj.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"item",new cljs.core.Keyword(null,"data-value","data-value",-1897915206),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(option)], null),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(option),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(option)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),"true"], null):null)),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(option)], null),glurps$component$form$select$iter__38108.call(null,cljs.core.rest.call(null,s__38109__$2)));
}
} else {
return null;
}
break;
}
});})(selected_option))
,null,null));
});})(selected_option))
;
return iter__4292__auto__.call(null,options);
})()], null)], null);
});

glurps.component.form.select.select_html.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
glurps.component.form.select.select_html.cljs$lang$applyTo = (function (seq38105){
var G__38106 = cljs.core.first.call(null,seq38105);
var seq38105__$1 = cljs.core.next.call(null,seq38105);
var G__38107 = cljs.core.first.call(null,seq38105__$1);
var seq38105__$2 = cljs.core.next.call(null,seq38105__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38106,G__38107,seq38105__$2);
});


//# sourceMappingURL=select.js.map?rel=1525379398158
