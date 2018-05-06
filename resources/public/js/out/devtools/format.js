// Compiled by ClojureScript 1.10.238 {}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if(((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null))))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__4211__auto__ = (((value == null))?null:value);
var m__4212__auto__ = (devtools.format._header[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,value);
} else {
var m__4212__auto____$1 = (devtools.format._header["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if(((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null))))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__4211__auto__ = (((value == null))?null:value);
var m__4212__auto__ = (devtools.format._has_body[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,value);
} else {
var m__4212__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if(((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null))))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__4211__auto__ = (((value == null))?null:value);
var m__4212__auto__ = (devtools.format._body[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,value);
} else {
var m__4212__auto____$1 = (devtools.format._body["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
<<<<<<< HEAD
var o51927 = temp__5455__auto__;
var temp__5455__auto____$1 = (o51927["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o51928 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o51928["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o51929 = temp__5455__auto____$2;
return (o51929["make_template"]);
=======
var o67964 = temp__5455__auto__;
var temp__5455__auto____$1 = (o67964["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o67965 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o67965["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o67966 = temp__5455__auto____$2;
return (o67966["make_template"]);
>>>>>>> sqlite
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
<<<<<<< HEAD
var o51930 = temp__5455__auto__;
var temp__5455__auto____$1 = (o51930["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o51931 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o51931["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o51932 = temp__5455__auto____$2;
return (o51932["make_group"]);
=======
var o67967 = temp__5455__auto__;
var temp__5455__auto____$1 = (o67967["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o67968 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o67968["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o67969 = temp__5455__auto____$2;
return (o67969["make_group"]);
>>>>>>> sqlite
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
<<<<<<< HEAD
var o51933 = temp__5455__auto__;
var temp__5455__auto____$1 = (o51933["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o51934 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o51934["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o51935 = temp__5455__auto____$2;
return (o51935["make_reference"]);
=======
var o67970 = temp__5455__auto__;
var temp__5455__auto____$1 = (o67970["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o67971 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o67971["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o67972 = temp__5455__auto____$2;
return (o67972["make_reference"]);
>>>>>>> sqlite
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
<<<<<<< HEAD
var o51936 = temp__5455__auto__;
var temp__5455__auto____$1 = (o51936["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o51937 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o51937["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o51938 = temp__5455__auto____$2;
return (o51938["make_surrogate"]);
=======
var o67973 = temp__5455__auto__;
var temp__5455__auto____$1 = (o67973["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o67974 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o67974["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o67975 = temp__5455__auto____$2;
return (o67975["make_surrogate"]);
>>>>>>> sqlite
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
<<<<<<< HEAD
var o51939 = temp__5455__auto__;
var temp__5455__auto____$1 = (o51939["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o51940 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o51940["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o51941 = temp__5455__auto____$2;
return (o51941["render_markup"]);
=======
var o67976 = temp__5455__auto__;
var temp__5455__auto____$1 = (o67976["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o67977 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o67977["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o67978 = temp__5455__auto____$2;
return (o67978["render_markup"]);
>>>>>>> sqlite
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
<<<<<<< HEAD
var o51942 = temp__5455__auto__;
var temp__5455__auto____$1 = (o51942["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o51943 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o51943["markup"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o51944 = temp__5455__auto____$2;
return (o51944["_LT_header_GT_"]);
=======
var o67979 = temp__5455__auto__;
var temp__5455__auto____$1 = (o67979["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o67980 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o67980["markup"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o67981 = temp__5455__auto____$2;
return (o67981["_LT_header_GT_"]);
>>>>>>> sqlite
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
<<<<<<< HEAD
var o51945 = temp__5455__auto__;
var temp__5455__auto____$1 = (o51945["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o51946 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o51946["markup"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o51947 = temp__5455__auto____$2;
return (o51947["_LT_standard_body_GT_"]);
=======
var o67982 = temp__5455__auto__;
var temp__5455__auto____$1 = (o67982["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o67983 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o67983["markup"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o67984 = temp__5455__auto____$2;
return (o67984["_LT_standard_body_GT_"]);
>>>>>>> sqlite
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__4502__auto__ = [];
<<<<<<< HEAD
var len__4499__auto___51949 = arguments.length;
var i__4500__auto___51950 = (0);
while(true){
if((i__4500__auto___51950 < len__4499__auto___51949)){
args__4502__auto__.push((arguments[i__4500__auto___51950]));

var G__51951 = (i__4500__auto___51950 + (1));
i__4500__auto___51950 = G__51951;
=======
var len__4499__auto___67986 = arguments.length;
var i__4500__auto___67987 = (0);
while(true){
if((i__4500__auto___67987 < len__4499__auto___67986)){
args__4502__auto__.push((arguments[i__4500__auto___67987]));

var G__67988 = (i__4500__auto___67987 + (1));
i__4500__auto___67987 = G__67988;
>>>>>>> sqlite
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD
devtools.format.render_markup.cljs$lang$applyTo = (function (seq51948){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51948));
=======
devtools.format.render_markup.cljs$lang$applyTo = (function (seq67985){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq67985));
>>>>>>> sqlite
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__4502__auto__ = [];
<<<<<<< HEAD
var len__4499__auto___51953 = arguments.length;
var i__4500__auto___51954 = (0);
while(true){
if((i__4500__auto___51954 < len__4499__auto___51953)){
args__4502__auto__.push((arguments[i__4500__auto___51954]));

var G__51955 = (i__4500__auto___51954 + (1));
i__4500__auto___51954 = G__51955;
=======
var len__4499__auto___67990 = arguments.length;
var i__4500__auto___67991 = (0);
while(true){
if((i__4500__auto___67991 < len__4499__auto___67990)){
args__4502__auto__.push((arguments[i__4500__auto___67991]));

var G__67992 = (i__4500__auto___67991 + (1));
i__4500__auto___67991 = G__67992;
>>>>>>> sqlite
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD
devtools.format.make_template.cljs$lang$applyTo = (function (seq51952){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51952));
=======
devtools.format.make_template.cljs$lang$applyTo = (function (seq67989){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq67989));
>>>>>>> sqlite
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__4502__auto__ = [];
<<<<<<< HEAD
var len__4499__auto___51957 = arguments.length;
var i__4500__auto___51958 = (0);
while(true){
if((i__4500__auto___51958 < len__4499__auto___51957)){
args__4502__auto__.push((arguments[i__4500__auto___51958]));

var G__51959 = (i__4500__auto___51958 + (1));
i__4500__auto___51958 = G__51959;
=======
var len__4499__auto___67994 = arguments.length;
var i__4500__auto___67995 = (0);
while(true){
if((i__4500__auto___67995 < len__4499__auto___67994)){
args__4502__auto__.push((arguments[i__4500__auto___67995]));

var G__67996 = (i__4500__auto___67995 + (1));
i__4500__auto___67995 = G__67996;
>>>>>>> sqlite
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD
devtools.format.make_group.cljs$lang$applyTo = (function (seq51956){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51956));
=======
devtools.format.make_group.cljs$lang$applyTo = (function (seq67993){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq67993));
>>>>>>> sqlite
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__4502__auto__ = [];
<<<<<<< HEAD
var len__4499__auto___51961 = arguments.length;
var i__4500__auto___51962 = (0);
while(true){
if((i__4500__auto___51962 < len__4499__auto___51961)){
args__4502__auto__.push((arguments[i__4500__auto___51962]));

var G__51963 = (i__4500__auto___51962 + (1));
i__4500__auto___51962 = G__51963;
=======
var len__4499__auto___67998 = arguments.length;
var i__4500__auto___67999 = (0);
while(true){
if((i__4500__auto___67999 < len__4499__auto___67998)){
args__4502__auto__.push((arguments[i__4500__auto___67999]));

var G__68000 = (i__4500__auto___67999 + (1));
i__4500__auto___67999 = G__68000;
>>>>>>> sqlite
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD
devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq51960){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51960));
=======
devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq67997){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq67997));
>>>>>>> sqlite
});

devtools.format.template = (function devtools$format$template(var_args){
var args__4502__auto__ = [];
<<<<<<< HEAD
var len__4499__auto___51965 = arguments.length;
var i__4500__auto___51966 = (0);
while(true){
if((i__4500__auto___51966 < len__4499__auto___51965)){
args__4502__auto__.push((arguments[i__4500__auto___51966]));

var G__51967 = (i__4500__auto___51966 + (1));
i__4500__auto___51966 = G__51967;
=======
var len__4499__auto___68002 = arguments.length;
var i__4500__auto___68003 = (0);
while(true){
if((i__4500__auto___68003 < len__4499__auto___68002)){
args__4502__auto__.push((arguments[i__4500__auto___68003]));

var G__68004 = (i__4500__auto___68003 + (1));
i__4500__auto___68003 = G__68004;
>>>>>>> sqlite
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD
devtools.format.template.cljs$lang$applyTo = (function (seq51964){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51964));
=======
devtools.format.template.cljs$lang$applyTo = (function (seq68001){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq68001));
>>>>>>> sqlite
});

devtools.format.group = (function devtools$format$group(var_args){
var args__4502__auto__ = [];
<<<<<<< HEAD
var len__4499__auto___51969 = arguments.length;
var i__4500__auto___51970 = (0);
while(true){
if((i__4500__auto___51970 < len__4499__auto___51969)){
args__4502__auto__.push((arguments[i__4500__auto___51970]));

var G__51971 = (i__4500__auto___51970 + (1));
i__4500__auto___51970 = G__51971;
=======
var len__4499__auto___68006 = arguments.length;
var i__4500__auto___68007 = (0);
while(true){
if((i__4500__auto___68007 < len__4499__auto___68006)){
args__4502__auto__.push((arguments[i__4500__auto___68007]));

var G__68008 = (i__4500__auto___68007 + (1));
i__4500__auto___68007 = G__68008;
>>>>>>> sqlite
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD
devtools.format.group.cljs$lang$applyTo = (function (seq51968){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51968));
=======
devtools.format.group.cljs$lang$applyTo = (function (seq68005){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq68005));
>>>>>>> sqlite
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__4502__auto__ = [];
<<<<<<< HEAD
var len__4499__auto___51973 = arguments.length;
var i__4500__auto___51974 = (0);
while(true){
if((i__4500__auto___51974 < len__4499__auto___51973)){
args__4502__auto__.push((arguments[i__4500__auto___51974]));

var G__51975 = (i__4500__auto___51974 + (1));
i__4500__auto___51974 = G__51975;
=======
var len__4499__auto___68010 = arguments.length;
var i__4500__auto___68011 = (0);
while(true){
if((i__4500__auto___68011 < len__4499__auto___68010)){
args__4502__auto__.push((arguments[i__4500__auto___68011]));

var G__68012 = (i__4500__auto___68011 + (1));
i__4500__auto___68011 = G__68012;
>>>>>>> sqlite
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD
devtools.format.surrogate.cljs$lang$applyTo = (function (seq51972){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51972));
=======
devtools.format.surrogate.cljs$lang$applyTo = (function (seq68009){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq68009));
>>>>>>> sqlite
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__4502__auto__ = [];
<<<<<<< HEAD
var len__4499__auto___51983 = arguments.length;
var i__4500__auto___51984 = (0);
while(true){
if((i__4500__auto___51984 < len__4499__auto___51983)){
args__4502__auto__.push((arguments[i__4500__auto___51984]));

var G__51985 = (i__4500__auto___51984 + (1));
i__4500__auto___51984 = G__51985;
=======
var len__4499__auto___68020 = arguments.length;
var i__4500__auto___68021 = (0);
while(true){
if((i__4500__auto___68021 < len__4499__auto___68020)){
args__4502__auto__.push((arguments[i__4500__auto___68021]));

var G__68022 = (i__4500__auto___68021 + (1));
i__4500__auto___68021 = G__68022;
>>>>>>> sqlite
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

<<<<<<< HEAD
devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__51979){
var vec__51980 = p__51979;
var state_override = cljs.core.nth.call(null,vec__51980,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__51980,state_override){
return (function (p1__51976_SHARP_){
return cljs.core.merge.call(null,p1__51976_SHARP_,state_override);
});})(vec__51980,state_override))
=======
devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__68016){
var vec__68017 = p__68016;
var state_override = cljs.core.nth.call(null,vec__68017,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__68017,state_override){
return (function (p1__68013_SHARP_){
return cljs.core.merge.call(null,p1__68013_SHARP_,state_override);
});})(vec__68017,state_override))
>>>>>>> sqlite
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
<<<<<<< HEAD
devtools.format.reference.cljs$lang$applyTo = (function (seq51977){
var G__51978 = cljs.core.first.call(null,seq51977);
var seq51977__$1 = cljs.core.next.call(null,seq51977);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51978,seq51977__$1);
=======
devtools.format.reference.cljs$lang$applyTo = (function (seq68014){
var G__68015 = cljs.core.first.call(null,seq68014);
var seq68014__$1 = cljs.core.next.call(null,seq68014);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__68015,seq68014__$1);
>>>>>>> sqlite
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__4502__auto__ = [];
<<<<<<< HEAD
var len__4499__auto___51987 = arguments.length;
var i__4500__auto___51988 = (0);
while(true){
if((i__4500__auto___51988 < len__4499__auto___51987)){
args__4502__auto__.push((arguments[i__4500__auto___51988]));

var G__51989 = (i__4500__auto___51988 + (1));
i__4500__auto___51988 = G__51989;
=======
var len__4499__auto___68024 = arguments.length;
var i__4500__auto___68025 = (0);
while(true){
if((i__4500__auto___68025 < len__4499__auto___68024)){
args__4502__auto__.push((arguments[i__4500__auto___68025]));

var G__68026 = (i__4500__auto___68025 + (1));
i__4500__auto___68025 = G__68026;
>>>>>>> sqlite
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD
devtools.format.build_header.cljs$lang$applyTo = (function (seq51986){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51986));
=======
devtools.format.build_header.cljs$lang$applyTo = (function (seq68023){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq68023));
>>>>>>> sqlite
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__4502__auto__ = [];
<<<<<<< HEAD
var len__4499__auto___51992 = arguments.length;
var i__4500__auto___51993 = (0);
while(true){
if((i__4500__auto___51993 < len__4499__auto___51992)){
args__4502__auto__.push((arguments[i__4500__auto___51993]));

var G__51994 = (i__4500__auto___51993 + (1));
i__4500__auto___51993 = G__51994;
=======
var len__4499__auto___68029 = arguments.length;
var i__4500__auto___68030 = (0);
while(true){
if((i__4500__auto___68030 < len__4499__auto___68029)){
args__4502__auto__.push((arguments[i__4500__auto___68030]));

var G__68031 = (i__4500__auto___68030 + (1));
i__4500__auto___68030 = G__68031;
>>>>>>> sqlite
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
<<<<<<< HEAD
devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq51990){
var G__51991 = cljs.core.first.call(null,seq51990);
var seq51990__$1 = cljs.core.next.call(null,seq51990);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51991,seq51990__$1);
});


//# sourceMappingURL=format.js.map?rel=1525389484909
=======
devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq68027){
var G__68028 = cljs.core.first.call(null,seq68027);
var seq68027__$1 = cljs.core.next.call(null,seq68027);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__68028,seq68027__$1);
});


//# sourceMappingURL=format.js.map?rel=1525389563946
>>>>>>> sqlite
