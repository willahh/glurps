// Compiled by ClojureScript 1.10.238 {}
goog.provide('devtools.formatters.templating');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('devtools.util');
goog.require('devtools.protocols');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.state');
goog.require('clojure.string');
devtools.formatters.templating.mark_as_group_BANG_ = (function devtools$formatters$templating$mark_as_group_BANG_(value){
<<<<<<< HEAD
var x54680_54681 = value;
x54680_54681.devtools$protocols$IGroup$ = cljs.core.PROTOCOL_SENTINEL;
=======
var x70998_70999 = value;
x70998_70999.devtools$protocols$IGroup$ = cljs.core.PROTOCOL_SENTINEL;
>>>>>>> sqlite


return value;
});
devtools.formatters.templating.group_QMARK_ = (function devtools$formatters$templating$group_QMARK_(value){
if(!((value == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$IGroup$)))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
}
});
devtools.formatters.templating.mark_as_template_BANG_ = (function devtools$formatters$templating$mark_as_template_BANG_(value){
<<<<<<< HEAD
var x54683_54684 = value;
x54683_54684.devtools$protocols$ITemplate$ = cljs.core.PROTOCOL_SENTINEL;
=======
var x71001_71002 = value;
x71001_71002.devtools$protocols$ITemplate$ = cljs.core.PROTOCOL_SENTINEL;
>>>>>>> sqlite


return value;
});
devtools.formatters.templating.template_QMARK_ = (function devtools$formatters$templating$template_QMARK_(value){
if(!((value == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ITemplate$)))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
}
});
devtools.formatters.templating.mark_as_surrogate_BANG_ = (function devtools$formatters$templating$mark_as_surrogate_BANG_(value){
<<<<<<< HEAD
var x54686_54687 = value;
x54686_54687.devtools$protocols$ISurrogate$ = cljs.core.PROTOCOL_SENTINEL;
=======
var x71004_71005 = value;
x71004_71005.devtools$protocols$ISurrogate$ = cljs.core.PROTOCOL_SENTINEL;
>>>>>>> sqlite


return value;
});
devtools.formatters.templating.surrogate_QMARK_ = (function devtools$formatters$templating$surrogate_QMARK_(value){
if(!((value == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ISurrogate$)))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
}
});
devtools.formatters.templating.reference_QMARK_ = (function devtools$formatters$templating$reference_QMARK_(value){
var and__3911__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__3911__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__4502__auto__ = [];
<<<<<<< HEAD
var len__4499__auto___54694 = arguments.length;
var i__4500__auto___54695 = (0);
while(true){
if((i__4500__auto___54695 < len__4499__auto___54694)){
args__4502__auto__.push((arguments[i__4500__auto___54695]));

var G__54696 = (i__4500__auto___54695 + (1));
i__4500__auto___54695 = G__54696;
=======
var len__4499__auto___71012 = arguments.length;
var i__4500__auto___71013 = (0);
while(true){
if((i__4500__auto___71013 < len__4499__auto___71012)){
args__4502__auto__.push((arguments[i__4500__auto___71013]));

var G__71014 = (i__4500__auto___71013 + (1));
i__4500__auto___71013 = G__71014;
>>>>>>> sqlite
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
<<<<<<< HEAD
var seq__54690_54697 = cljs.core.seq.call(null,items);
var chunk__54691_54698 = null;
var count__54692_54699 = (0);
var i__54693_54700 = (0);
while(true){
if((i__54693_54700 < count__54692_54699)){
var item_54701 = cljs.core._nth.call(null,chunk__54691_54698,i__54693_54700);
if(!((item_54701 == null))){
if(cljs.core.coll_QMARK_.call(null,item_54701)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_54701)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_54701));
=======
var seq__71008_71015 = cljs.core.seq.call(null,items);
var chunk__71009_71016 = null;
var count__71010_71017 = (0);
var i__71011_71018 = (0);
while(true){
if((i__71011_71018 < count__71010_71017)){
var item_71019 = cljs.core._nth.call(null,chunk__71009_71016,i__71011_71018);
if(!((item_71019 == null))){
if(cljs.core.coll_QMARK_.call(null,item_71019)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_71019)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_71019));
>>>>>>> sqlite
}
} else {
}


<<<<<<< HEAD
var G__54702 = seq__54690_54697;
var G__54703 = chunk__54691_54698;
var G__54704 = count__54692_54699;
var G__54705 = (i__54693_54700 + (1));
seq__54690_54697 = G__54702;
chunk__54691_54698 = G__54703;
count__54692_54699 = G__54704;
i__54693_54700 = G__54705;
continue;
} else {
var temp__5457__auto___54706 = cljs.core.seq.call(null,seq__54690_54697);
if(temp__5457__auto___54706){
var seq__54690_54707__$1 = temp__5457__auto___54706;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54690_54707__$1)){
var c__4319__auto___54708 = cljs.core.chunk_first.call(null,seq__54690_54707__$1);
var G__54709 = cljs.core.chunk_rest.call(null,seq__54690_54707__$1);
var G__54710 = c__4319__auto___54708;
var G__54711 = cljs.core.count.call(null,c__4319__auto___54708);
var G__54712 = (0);
seq__54690_54697 = G__54709;
chunk__54691_54698 = G__54710;
count__54692_54699 = G__54711;
i__54693_54700 = G__54712;
continue;
} else {
var item_54713 = cljs.core.first.call(null,seq__54690_54707__$1);
if(!((item_54713 == null))){
if(cljs.core.coll_QMARK_.call(null,item_54713)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_54713)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_54713));
=======
var G__71020 = seq__71008_71015;
var G__71021 = chunk__71009_71016;
var G__71022 = count__71010_71017;
var G__71023 = (i__71011_71018 + (1));
seq__71008_71015 = G__71020;
chunk__71009_71016 = G__71021;
count__71010_71017 = G__71022;
i__71011_71018 = G__71023;
continue;
} else {
var temp__5457__auto___71024 = cljs.core.seq.call(null,seq__71008_71015);
if(temp__5457__auto___71024){
var seq__71008_71025__$1 = temp__5457__auto___71024;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__71008_71025__$1)){
var c__4319__auto___71026 = cljs.core.chunk_first.call(null,seq__71008_71025__$1);
var G__71027 = cljs.core.chunk_rest.call(null,seq__71008_71025__$1);
var G__71028 = c__4319__auto___71026;
var G__71029 = cljs.core.count.call(null,c__4319__auto___71026);
var G__71030 = (0);
seq__71008_71015 = G__71027;
chunk__71009_71016 = G__71028;
count__71010_71017 = G__71029;
i__71011_71018 = G__71030;
continue;
} else {
var item_71031 = cljs.core.first.call(null,seq__71008_71025__$1);
if(!((item_71031 == null))){
if(cljs.core.coll_QMARK_.call(null,item_71031)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_71031)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_71031));
>>>>>>> sqlite
}
} else {
}


<<<<<<< HEAD
var G__54714 = cljs.core.next.call(null,seq__54690_54707__$1);
var G__54715 = null;
var G__54716 = (0);
var G__54717 = (0);
seq__54690_54697 = G__54714;
chunk__54691_54698 = G__54715;
count__54692_54699 = G__54716;
i__54693_54700 = G__54717;
=======
var G__71032 = cljs.core.next.call(null,seq__71008_71025__$1);
var G__71033 = null;
var G__71034 = (0);
var G__71035 = (0);
seq__71008_71015 = G__71032;
chunk__71009_71016 = G__71033;
count__71010_71017 = G__71034;
i__71011_71018 = G__71035;
>>>>>>> sqlite
continue;
}
} else {
}
}
break;
}

return group;
});

devtools.formatters.templating.make_group.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD
devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq54689){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54689));
=======
devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq71007){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq71007));
>>>>>>> sqlite
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__4502__auto__ = [];
<<<<<<< HEAD
var len__4499__auto___54725 = arguments.length;
var i__4500__auto___54726 = (0);
while(true){
if((i__4500__auto___54726 < len__4499__auto___54725)){
args__4502__auto__.push((arguments[i__4500__auto___54726]));

var G__54727 = (i__4500__auto___54726 + (1));
i__4500__auto___54726 = G__54727;
=======
var len__4499__auto___71043 = arguments.length;
var i__4500__auto___71044 = (0);
while(true){
if((i__4500__auto___71044 < len__4499__auto___71043)){
args__4502__auto__.push((arguments[i__4500__auto___71044]));

var G__71045 = (i__4500__auto___71044 + (1));
i__4500__auto___71044 = G__71045;
>>>>>>> sqlite
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
<<<<<<< HEAD
var seq__54721_54728 = cljs.core.seq.call(null,children);
var chunk__54722_54729 = null;
var count__54723_54730 = (0);
var i__54724_54731 = (0);
while(true){
if((i__54724_54731 < count__54723_54730)){
var child_54732 = cljs.core._nth.call(null,chunk__54722_54729,i__54724_54731);
if(!((child_54732 == null))){
if(cljs.core.coll_QMARK_.call(null,child_54732)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_54732))));
} else {
var temp__5455__auto___54733 = devtools.formatters.helpers.pref.call(null,child_54732);
if(cljs.core.truth_(temp__5455__auto___54733)){
var child_value_54734 = temp__5455__auto___54733;
template.push(child_value_54734);
=======
var seq__71039_71046 = cljs.core.seq.call(null,children);
var chunk__71040_71047 = null;
var count__71041_71048 = (0);
var i__71042_71049 = (0);
while(true){
if((i__71042_71049 < count__71041_71048)){
var child_71050 = cljs.core._nth.call(null,chunk__71040_71047,i__71042_71049);
if(!((child_71050 == null))){
if(cljs.core.coll_QMARK_.call(null,child_71050)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_71050))));
} else {
var temp__5455__auto___71051 = devtools.formatters.helpers.pref.call(null,child_71050);
if(cljs.core.truth_(temp__5455__auto___71051)){
var child_value_71052 = temp__5455__auto___71051;
template.push(child_value_71052);
>>>>>>> sqlite
} else {
}
}
} else {
}


<<<<<<< HEAD
var G__54735 = seq__54721_54728;
var G__54736 = chunk__54722_54729;
var G__54737 = count__54723_54730;
var G__54738 = (i__54724_54731 + (1));
seq__54721_54728 = G__54735;
chunk__54722_54729 = G__54736;
count__54723_54730 = G__54737;
i__54724_54731 = G__54738;
continue;
} else {
var temp__5457__auto___54739 = cljs.core.seq.call(null,seq__54721_54728);
if(temp__5457__auto___54739){
var seq__54721_54740__$1 = temp__5457__auto___54739;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54721_54740__$1)){
var c__4319__auto___54741 = cljs.core.chunk_first.call(null,seq__54721_54740__$1);
var G__54742 = cljs.core.chunk_rest.call(null,seq__54721_54740__$1);
var G__54743 = c__4319__auto___54741;
var G__54744 = cljs.core.count.call(null,c__4319__auto___54741);
var G__54745 = (0);
seq__54721_54728 = G__54742;
chunk__54722_54729 = G__54743;
count__54723_54730 = G__54744;
i__54724_54731 = G__54745;
continue;
} else {
var child_54746 = cljs.core.first.call(null,seq__54721_54740__$1);
if(!((child_54746 == null))){
if(cljs.core.coll_QMARK_.call(null,child_54746)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_54746))));
} else {
var temp__5455__auto___54747 = devtools.formatters.helpers.pref.call(null,child_54746);
if(cljs.core.truth_(temp__5455__auto___54747)){
var child_value_54748 = temp__5455__auto___54747;
template.push(child_value_54748);
=======
var G__71053 = seq__71039_71046;
var G__71054 = chunk__71040_71047;
var G__71055 = count__71041_71048;
var G__71056 = (i__71042_71049 + (1));
seq__71039_71046 = G__71053;
chunk__71040_71047 = G__71054;
count__71041_71048 = G__71055;
i__71042_71049 = G__71056;
continue;
} else {
var temp__5457__auto___71057 = cljs.core.seq.call(null,seq__71039_71046);
if(temp__5457__auto___71057){
var seq__71039_71058__$1 = temp__5457__auto___71057;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__71039_71058__$1)){
var c__4319__auto___71059 = cljs.core.chunk_first.call(null,seq__71039_71058__$1);
var G__71060 = cljs.core.chunk_rest.call(null,seq__71039_71058__$1);
var G__71061 = c__4319__auto___71059;
var G__71062 = cljs.core.count.call(null,c__4319__auto___71059);
var G__71063 = (0);
seq__71039_71046 = G__71060;
chunk__71040_71047 = G__71061;
count__71041_71048 = G__71062;
i__71042_71049 = G__71063;
continue;
} else {
var child_71064 = cljs.core.first.call(null,seq__71039_71058__$1);
if(!((child_71064 == null))){
if(cljs.core.coll_QMARK_.call(null,child_71064)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_71064))));
} else {
var temp__5455__auto___71065 = devtools.formatters.helpers.pref.call(null,child_71064);
if(cljs.core.truth_(temp__5455__auto___71065)){
var child_value_71066 = temp__5455__auto___71065;
template.push(child_value_71066);
>>>>>>> sqlite
} else {
}
}
} else {
}


<<<<<<< HEAD
var G__54749 = cljs.core.next.call(null,seq__54721_54740__$1);
var G__54750 = null;
var G__54751 = (0);
var G__54752 = (0);
seq__54721_54728 = G__54749;
chunk__54722_54729 = G__54750;
count__54723_54730 = G__54751;
i__54724_54731 = G__54752;
=======
var G__71067 = cljs.core.next.call(null,seq__71039_71058__$1);
var G__71068 = null;
var G__71069 = (0);
var G__71070 = (0);
seq__71039_71046 = G__71067;
chunk__71040_71047 = G__71068;
count__71041_71048 = G__71069;
i__71042_71049 = G__71070;
>>>>>>> sqlite
continue;
}
} else {
}
}
break;
}

return template;
});

devtools.formatters.templating.make_template.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
<<<<<<< HEAD
devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq54718){
var G__54719 = cljs.core.first.call(null,seq54718);
var seq54718__$1 = cljs.core.next.call(null,seq54718);
var G__54720 = cljs.core.first.call(null,seq54718__$1);
var seq54718__$2 = cljs.core.next.call(null,seq54718__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54719,G__54720,seq54718__$2);
=======
devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq71036){
var G__71037 = cljs.core.first.call(null,seq71036);
var seq71036__$1 = cljs.core.next.call(null,seq71036);
var G__71038 = cljs.core.first.call(null,seq71036__$1);
var seq71036__$2 = cljs.core.next.call(null,seq71036__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__71037,G__71038,seq71036__$2);
>>>>>>> sqlite
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__4502__auto__ = [];
<<<<<<< HEAD
var len__4499__auto___54755 = arguments.length;
var i__4500__auto___54756 = (0);
while(true){
if((i__4500__auto___54756 < len__4499__auto___54755)){
args__4502__auto__.push((arguments[i__4500__auto___54756]));

var G__54757 = (i__4500__auto___54756 + (1));
i__4500__auto___54756 = G__54757;
=======
var len__4499__auto___71073 = arguments.length;
var i__4500__auto___71074 = (0);
while(true){
if((i__4500__auto___71074 < len__4499__auto___71073)){
args__4502__auto__.push((arguments[i__4500__auto___71074]));

var G__71075 = (i__4500__auto___71074 + (1));
i__4500__auto___71074 = G__71075;
>>>>>>> sqlite
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,(template["concat"]).apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
<<<<<<< HEAD
devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq54753){
var G__54754 = cljs.core.first.call(null,seq54753);
var seq54753__$1 = cljs.core.next.call(null,seq54753);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54754,seq54753__$1);
=======
devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq71071){
var G__71072 = cljs.core.first.call(null,seq71071);
var seq71071__$1 = cljs.core.next.call(null,seq71071);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__71072,seq71071__$1);
>>>>>>> sqlite
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__4502__auto__ = [];
<<<<<<< HEAD
var len__4499__auto___54760 = arguments.length;
var i__4500__auto___54761 = (0);
while(true){
if((i__4500__auto___54761 < len__4499__auto___54760)){
args__4502__auto__.push((arguments[i__4500__auto___54761]));

var G__54762 = (i__4500__auto___54761 + (1));
i__4500__auto___54761 = G__54762;
=======
var len__4499__auto___71078 = arguments.length;
var i__4500__auto___71079 = (0);
while(true){
if((i__4500__auto___71079 < len__4499__auto___71078)){
args__4502__auto__.push((arguments[i__4500__auto___71079]));

var G__71080 = (i__4500__auto___71079 + (1));
i__4500__auto___71079 = G__71080;
>>>>>>> sqlite
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
<<<<<<< HEAD
devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq54758){
var G__54759 = cljs.core.first.call(null,seq54758);
var seq54758__$1 = cljs.core.next.call(null,seq54758);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54759,seq54758__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var G__54764 = arguments.length;
switch (G__54764) {
=======
devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq71076){
var G__71077 = cljs.core.first.call(null,seq71076);
var seq71076__$1 = cljs.core.next.call(null,seq71076);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__71077,seq71076__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var G__71082 = arguments.length;
switch (G__71082) {
>>>>>>> sqlite
case 1:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1 = (function (object){
return devtools.formatters.templating.make_surrogate.call(null,object,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2 = (function (object,header){
return devtools.formatters.templating.make_surrogate.call(null,object,header,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3 = (function (object,header,body){
return devtools.formatters.templating.make_surrogate.call(null,object,header,body,(0));
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4 = (function (object,header,body,start_index){
<<<<<<< HEAD
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj54766 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__3922__auto__ = start_index;
=======
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj71084 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__3922__auto__ = start_index;
>>>>>>> sqlite
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (0);
}
})()};
<<<<<<< HEAD
return obj54766;
=======
return obj71084;
>>>>>>> sqlite
})());
});

devtools.formatters.templating.make_surrogate.cljs$lang$maxFixedArity = 4;

devtools.formatters.templating.get_surrogate_target = (function devtools$formatters$templating$get_surrogate_target(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["target"]);
});
devtools.formatters.templating.get_surrogate_header = (function devtools$formatters$templating$get_surrogate_header(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["header"]);
});
devtools.formatters.templating.get_surrogate_body = (function devtools$formatters$templating$get_surrogate_body(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["body"]);
});
devtools.formatters.templating.get_surrogate_start_index = (function devtools$formatters$templating$get_surrogate_start_index(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["startIndex"]);
});
devtools.formatters.templating.make_reference = (function devtools$formatters$templating$make_reference(var_args){
var args__4502__auto__ = [];
<<<<<<< HEAD
var len__4499__auto___54774 = arguments.length;
var i__4500__auto___54775 = (0);
while(true){
if((i__4500__auto___54775 < len__4499__auto___54774)){
args__4502__auto__.push((arguments[i__4500__auto___54775]));

var G__54776 = (i__4500__auto___54775 + (1));
i__4500__auto___54775 = G__54776;
=======
var len__4499__auto___71092 = arguments.length;
var i__4500__auto___71093 = (0);
while(true){
if((i__4500__auto___71093 < len__4499__auto___71092)){
args__4502__auto__.push((arguments[i__4500__auto___71093]));

var G__71094 = (i__4500__auto___71093 + (1));
i__4500__auto___71093 = G__71094;
>>>>>>> sqlite
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

<<<<<<< HEAD
devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__54770){
var vec__54771 = p__54770;
var state_override_fn = cljs.core.nth.call(null,vec__54771,(0),null);
=======
devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__71088){
var vec__71089 = p__71088;
var state_override_fn = cljs.core.nth.call(null,vec__71089,(0),null);
>>>>>>> sqlite
if((((state_override_fn == null)) || (cljs.core.fn_QMARK_.call(null,state_override_fn)))){
} else {
throw (new Error("Assert failed: (or (nil? state-override-fn) (fn? state-override-fn))"));
}

if((object == null)){
return devtools.formatters.templating.make_template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"nil-style","nil-style",-1505044832),new cljs.core.Keyword(null,"nil-label","nil-label",-587789203));
} else {
var sub_state = ((!((state_override_fn == null)))?state_override_fn.call(null,devtools.formatters.state.get_current_state.call(null)):devtools.formatters.state.get_current_state.call(null));
return devtools.formatters.templating.make_group.call(null,"object",({"object": object, "config": sub_state}));
}
});

devtools.formatters.templating.make_reference.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
<<<<<<< HEAD
devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq54768){
var G__54769 = cljs.core.first.call(null,seq54768);
var seq54768__$1 = cljs.core.next.call(null,seq54768);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54769,seq54768__$1);
=======
devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq71086){
var G__71087 = cljs.core.first.call(null,seq71086);
var seq71086__$1 = cljs.core.next.call(null,seq71086);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__71087,seq71086__$1);
>>>>>>> sqlite
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
<<<<<<< HEAD
var _STAR_print_level_STAR_54777 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_54777;
=======
var _STAR_print_level_STAR_71095 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_71095;
>>>>>>> sqlite
}});
devtools.formatters.templating.add_stack_separators = (function devtools$formatters$templating$add_stack_separators(stack){
return cljs.core.interpose.call(null,"-------------",stack);
});
devtools.formatters.templating.replace_fns_with_markers = (function devtools$formatters$templating$replace_fns_with_markers(stack){
var f = (function (v){
if(cljs.core.fn_QMARK_.call(null,v)){
return "##fn##";
} else {
return v;
}
});
return clojure.walk.prewalk.call(null,f,stack);
});
devtools.formatters.templating.pprint_render_calls = (function devtools$formatters$templating$pprint_render_calls(stack){
return cljs.core.map.call(null,devtools.util.pprint_str,stack);
});
devtools.formatters.templating.pprint_render_stack = (function devtools$formatters$templating$pprint_render_stack(stack){
return clojure.string.join.call(null,"\n",devtools.formatters.templating.add_stack_separators.call(null,devtools.formatters.templating.pprint_render_calls.call(null,devtools.formatters.templating.replace_fns_with_markers.call(null,cljs.core.reverse.call(null,stack)))));
});
devtools.formatters.templating.pprint_render_path = (function devtools$formatters$templating$pprint_render_path(path){
return devtools.util.pprint_str.call(null,path);
});
devtools.formatters.templating.assert_markup_error = (function devtools$formatters$templating$assert_markup_error(msg){
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),"\n","Render path: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_render_path.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_)),"\n","Render stack:\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_render_stack.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_))].join('')),"\n","false"].join('')));

});
devtools.formatters.templating.surrogate_markup_QMARK_ = (function devtools$formatters$templating$surrogate_markup_QMARK_(markup){
return ((cljs.core.sequential_QMARK_.call(null,markup)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,markup),"surrogate")));
});
devtools.formatters.templating.render_special = (function devtools$formatters$templating$render_special(name,args){
<<<<<<< HEAD
var G__54778 = name;
switch (G__54778) {
=======
var G__71096 = name;
switch (G__71096) {
>>>>>>> sqlite
case "surrogate":
var obj = cljs.core.first.call(null,args);
var converted_args = cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.rest.call(null,args));
return cljs.core.apply.call(null,devtools.formatters.templating.make_surrogate,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj], null),converted_args));

break;
case "reference":
var obj = cljs.core.first.call(null,args);
var converted_obj = (cljs.core.truth_(devtools.formatters.templating.surrogate_markup_QMARK_.call(null,obj))?devtools.formatters.templating.render_json_ml_STAR_.call(null,obj):obj);
return cljs.core.apply.call(null,devtools.formatters.templating.make_reference,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [converted_obj], null),cljs.core.rest.call(null,args)));

break;
default:
return devtools.formatters.templating.assert_markup_error.call(null,["no matching special tag name: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"'"].join(''));

}
});
devtools.formatters.templating.emptyish_QMARK_ = (function devtools$formatters$templating$emptyish_QMARK_(v){
if(((cljs.core.seqable_QMARK_.call(null,v)) || (cljs.core.array_QMARK_.call(null,v)) || (typeof v === 'string'))){
return cljs.core.empty_QMARK_.call(null,v);
} else {
return false;
}
});
devtools.formatters.templating.render_subtree = (function devtools$formatters$templating$render_subtree(tag,children){
<<<<<<< HEAD
var vec__54780 = tag;
var html_tag = cljs.core.nth.call(null,vec__54780,(0),null);
var style = cljs.core.nth.call(null,vec__54780,(1),null);
=======
var vec__71098 = tag;
var html_tag = cljs.core.nth.call(null,vec__71098,(0),null);
var style = cljs.core.nth.call(null,vec__71098,(1),null);
>>>>>>> sqlite
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
<<<<<<< HEAD
var _STAR_current_render_path_STAR_54783 = devtools.formatters.templating._STAR_current_render_path_STAR_;
=======
var _STAR_current_render_path_STAR_71101 = devtools.formatters.templating._STAR_current_render_path_STAR_;
>>>>>>> sqlite
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,cljs.core.first.call(null,markup));

try{var tag = devtools.formatters.helpers.pref.call(null,cljs.core.first.call(null,markup));
if(typeof tag === 'string'){
return devtools.formatters.templating.render_special.call(null,tag,cljs.core.rest.call(null,markup));
} else {
if(cljs.core.sequential_QMARK_.call(null,tag)){
return devtools.formatters.templating.render_subtree.call(null,tag,cljs.core.rest.call(null,markup));
} else {
return devtools.formatters.templating.assert_markup_error.call(null,["invalid json-ml markup at ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.print_preview.call(null,markup)),":"].join(''));

}
}
<<<<<<< HEAD
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_54783;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_54784 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_54785 = devtools.formatters.templating._STAR_current_render_path_STAR_;
=======
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_71101;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_71102 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_71103 = devtools.formatters.templating._STAR_current_render_path_STAR_;
>>>>>>> sqlite
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
<<<<<<< HEAD
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_54785;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_54784;
=======
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_71103;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_71102;
>>>>>>> sqlite
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["result of markup rendering must be a template,\n","resolved to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.pprint_str.call(null,value)),"initial value: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.pprint_str.call(null,initial_value))].join('')),"\n","false"].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
<<<<<<< HEAD
var G__54786 = initial_value;
var G__54787 = value.call(null);
initial_value = G__54786;
value = G__54787;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__54788 = initial_value;
var G__54789 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__54788;
value = G__54789;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__54790 = initial_value;
var G__54791 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__54790;
value = G__54791;
=======
var G__71104 = initial_value;
var G__71105 = value.call(null);
initial_value = G__71104;
value = G__71105;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__71106 = initial_value;
var G__71107 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__71106;
value = G__71107;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__71108 = initial_value;
var G__71109 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__71108;
value = G__71109;
>>>>>>> sqlite
continue;
} else {
if(cljs.core.truth_(devtools.formatters.templating.template_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.reference_QMARK_.call(null,value))){
return value;
} else {
return devtools.formatters.templating.assert_failed_markup_rendering.call(null,initial_value,value);

}
}
}
}
}
}
break;
}
});
devtools.formatters.templating.render_markup = (function devtools$formatters$templating$render_markup(value){
return devtools.formatters.templating.render_markup_STAR_.call(null,value,value);
});

<<<<<<< HEAD
//# sourceMappingURL=templating.js.map?rel=1525389489860
=======
//# sourceMappingURL=templating.js.map?rel=1525389569153
>>>>>>> sqlite
