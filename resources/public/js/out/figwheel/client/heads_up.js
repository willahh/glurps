// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('cljs.core.async');
goog.require('goog.string');
goog.require('goog.dom.dataset');
goog.require('goog.object');
goog.require('goog.dom');
goog.require('cljs.pprint');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__4502__auto__ = [];
<<<<<<< HEAD
var len__4499__auto___66396 = arguments.length;
var i__4500__auto___66397 = (0);
while(true){
if((i__4500__auto___66397 < len__4499__auto___66396)){
args__4502__auto__.push((arguments[i__4500__auto___66397]));

var G__66398 = (i__4500__auto___66397 + (1));
i__4500__auto___66397 = G__66398;
=======
var len__4499__auto___86061 = arguments.length;
var i__4500__auto___86062 = (0);
while(true){
if((i__4500__auto___86062 < len__4499__auto___86061)){
args__4502__auto__.push((arguments[i__4500__auto___86062]));

var G__86063 = (i__4500__auto___86062 + (1));
i__4500__auto___86062 = G__86063;
>>>>>>> sqlite
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
<<<<<<< HEAD
var seq__66388_66399 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__66389_66400 = null;
var count__66390_66401 = (0);
var i__66391_66402 = (0);
while(true){
if((i__66391_66402 < count__66390_66401)){
var k_66403 = cljs.core._nth.call(null,chunk__66389_66400,i__66391_66402);
e.setAttribute(cljs.core.name.call(null,k_66403),cljs.core.get.call(null,attrs,k_66403));


var G__66404 = seq__66388_66399;
var G__66405 = chunk__66389_66400;
var G__66406 = count__66390_66401;
var G__66407 = (i__66391_66402 + (1));
seq__66388_66399 = G__66404;
chunk__66389_66400 = G__66405;
count__66390_66401 = G__66406;
i__66391_66402 = G__66407;
continue;
} else {
var temp__5457__auto___66408 = cljs.core.seq.call(null,seq__66388_66399);
if(temp__5457__auto___66408){
var seq__66388_66409__$1 = temp__5457__auto___66408;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__66388_66409__$1)){
var c__4319__auto___66410 = cljs.core.chunk_first.call(null,seq__66388_66409__$1);
var G__66411 = cljs.core.chunk_rest.call(null,seq__66388_66409__$1);
var G__66412 = c__4319__auto___66410;
var G__66413 = cljs.core.count.call(null,c__4319__auto___66410);
var G__66414 = (0);
seq__66388_66399 = G__66411;
chunk__66389_66400 = G__66412;
count__66390_66401 = G__66413;
i__66391_66402 = G__66414;
continue;
} else {
var k_66415 = cljs.core.first.call(null,seq__66388_66409__$1);
e.setAttribute(cljs.core.name.call(null,k_66415),cljs.core.get.call(null,attrs,k_66415));


var G__66416 = cljs.core.next.call(null,seq__66388_66409__$1);
var G__66417 = null;
var G__66418 = (0);
var G__66419 = (0);
seq__66388_66399 = G__66416;
chunk__66389_66400 = G__66417;
count__66390_66401 = G__66418;
i__66391_66402 = G__66419;
=======
var seq__86053_86064 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__86054_86065 = null;
var count__86055_86066 = (0);
var i__86056_86067 = (0);
while(true){
if((i__86056_86067 < count__86055_86066)){
var k_86068 = cljs.core._nth.call(null,chunk__86054_86065,i__86056_86067);
e.setAttribute(cljs.core.name.call(null,k_86068),cljs.core.get.call(null,attrs,k_86068));


var G__86069 = seq__86053_86064;
var G__86070 = chunk__86054_86065;
var G__86071 = count__86055_86066;
var G__86072 = (i__86056_86067 + (1));
seq__86053_86064 = G__86069;
chunk__86054_86065 = G__86070;
count__86055_86066 = G__86071;
i__86056_86067 = G__86072;
continue;
} else {
var temp__5457__auto___86073 = cljs.core.seq.call(null,seq__86053_86064);
if(temp__5457__auto___86073){
var seq__86053_86074__$1 = temp__5457__auto___86073;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__86053_86074__$1)){
var c__4319__auto___86075 = cljs.core.chunk_first.call(null,seq__86053_86074__$1);
var G__86076 = cljs.core.chunk_rest.call(null,seq__86053_86074__$1);
var G__86077 = c__4319__auto___86075;
var G__86078 = cljs.core.count.call(null,c__4319__auto___86075);
var G__86079 = (0);
seq__86053_86064 = G__86076;
chunk__86054_86065 = G__86077;
count__86055_86066 = G__86078;
i__86056_86067 = G__86079;
continue;
} else {
var k_86080 = cljs.core.first.call(null,seq__86053_86074__$1);
e.setAttribute(cljs.core.name.call(null,k_86080),cljs.core.get.call(null,attrs,k_86080));


var G__86081 = cljs.core.next.call(null,seq__86053_86074__$1);
var G__86082 = null;
var G__86083 = (0);
var G__86084 = (0);
seq__86053_86064 = G__86081;
chunk__86054_86065 = G__86082;
count__86055_86066 = G__86083;
i__86056_86067 = G__86084;
>>>>>>> sqlite
continue;
}
} else {
}
}
break;
}

<<<<<<< HEAD
var seq__66392_66420 = cljs.core.seq.call(null,children);
var chunk__66393_66421 = null;
var count__66394_66422 = (0);
var i__66395_66423 = (0);
while(true){
if((i__66395_66423 < count__66394_66422)){
var ch_66424 = cljs.core._nth.call(null,chunk__66393_66421,i__66395_66423);
e.appendChild(ch_66424);


var G__66425 = seq__66392_66420;
var G__66426 = chunk__66393_66421;
var G__66427 = count__66394_66422;
var G__66428 = (i__66395_66423 + (1));
seq__66392_66420 = G__66425;
chunk__66393_66421 = G__66426;
count__66394_66422 = G__66427;
i__66395_66423 = G__66428;
continue;
} else {
var temp__5457__auto___66429 = cljs.core.seq.call(null,seq__66392_66420);
if(temp__5457__auto___66429){
var seq__66392_66430__$1 = temp__5457__auto___66429;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__66392_66430__$1)){
var c__4319__auto___66431 = cljs.core.chunk_first.call(null,seq__66392_66430__$1);
var G__66432 = cljs.core.chunk_rest.call(null,seq__66392_66430__$1);
var G__66433 = c__4319__auto___66431;
var G__66434 = cljs.core.count.call(null,c__4319__auto___66431);
var G__66435 = (0);
seq__66392_66420 = G__66432;
chunk__66393_66421 = G__66433;
count__66394_66422 = G__66434;
i__66395_66423 = G__66435;
continue;
} else {
var ch_66436 = cljs.core.first.call(null,seq__66392_66430__$1);
e.appendChild(ch_66436);


var G__66437 = cljs.core.next.call(null,seq__66392_66430__$1);
var G__66438 = null;
var G__66439 = (0);
var G__66440 = (0);
seq__66392_66420 = G__66437;
chunk__66393_66421 = G__66438;
count__66394_66422 = G__66439;
i__66395_66423 = G__66440;
=======
var seq__86057_86085 = cljs.core.seq.call(null,children);
var chunk__86058_86086 = null;
var count__86059_86087 = (0);
var i__86060_86088 = (0);
while(true){
if((i__86060_86088 < count__86059_86087)){
var ch_86089 = cljs.core._nth.call(null,chunk__86058_86086,i__86060_86088);
e.appendChild(ch_86089);


var G__86090 = seq__86057_86085;
var G__86091 = chunk__86058_86086;
var G__86092 = count__86059_86087;
var G__86093 = (i__86060_86088 + (1));
seq__86057_86085 = G__86090;
chunk__86058_86086 = G__86091;
count__86059_86087 = G__86092;
i__86060_86088 = G__86093;
continue;
} else {
var temp__5457__auto___86094 = cljs.core.seq.call(null,seq__86057_86085);
if(temp__5457__auto___86094){
var seq__86057_86095__$1 = temp__5457__auto___86094;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__86057_86095__$1)){
var c__4319__auto___86096 = cljs.core.chunk_first.call(null,seq__86057_86095__$1);
var G__86097 = cljs.core.chunk_rest.call(null,seq__86057_86095__$1);
var G__86098 = c__4319__auto___86096;
var G__86099 = cljs.core.count.call(null,c__4319__auto___86096);
var G__86100 = (0);
seq__86057_86085 = G__86097;
chunk__86058_86086 = G__86098;
count__86059_86087 = G__86099;
i__86060_86088 = G__86100;
continue;
} else {
var ch_86101 = cljs.core.first.call(null,seq__86057_86095__$1);
e.appendChild(ch_86101);


var G__86102 = cljs.core.next.call(null,seq__86057_86095__$1);
var G__86103 = null;
var G__86104 = (0);
var G__86105 = (0);
seq__86057_86085 = G__86102;
chunk__86058_86086 = G__86103;
count__86059_86087 = G__86104;
i__86060_86088 = G__86105;
>>>>>>> sqlite
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
<<<<<<< HEAD
figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq66385){
var G__66386 = cljs.core.first.call(null,seq66385);
var seq66385__$1 = cljs.core.next.call(null,seq66385);
var G__66387 = cljs.core.first.call(null,seq66385__$1);
var seq66385__$2 = cljs.core.next.call(null,seq66385__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__66386,G__66387,seq66385__$2);
=======
figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq86050){
var G__86051 = cljs.core.first.call(null,seq86050);
var seq86050__$1 = cljs.core.next.call(null,seq86050);
var G__86052 = cljs.core.first.call(null,seq86050__$1);
var seq86050__$2 = cljs.core.next.call(null,seq86050__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__86051,G__86052,seq86050__$2);
>>>>>>> sqlite
});

if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__4382__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4383__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4384__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4385__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4386__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__,hierarchy__4386__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__,hierarchy__4386__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4386__auto__,method_table__4382__auto__,prefer_table__4383__auto__,method_cache__4384__auto__,cached_hierarchy__4385__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine,new cljs.core.Keyword(null,"file-column","file-column",1543934780),dataset.fileColumn], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cont_id)].join('')))){
<<<<<<< HEAD
var el_66441 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),["-webkit-transition: all 0.2s ease-in-out;","-moz-transition: all 0.2s ease-in-out;","-o-transition: all 0.2s ease-in-out;","transition: all 0.2s ease-in-out;","font-size: 13px;","border-top: 1px solid #f5f5f5;","box-shadow: 0px 0px 1px #aaaaaa;","line-height: 18px;","color: #333;","font-family: monospace;","padding: 0px 10px 0px 70px;","position: fixed;","bottom: 0px;","left: 0px;","height: 0px;","opacity: 0.0;","box-sizing: border-box;","z-index: 10000;","text-align: left;"].join('')], null));
el_66441.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_66441.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_66441.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_66441);
=======
var el_86106 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),["-webkit-transition: all 0.2s ease-in-out;","-moz-transition: all 0.2s ease-in-out;","-o-transition: all 0.2s ease-in-out;","transition: all 0.2s ease-in-out;","font-size: 13px;","border-top: 1px solid #f5f5f5;","box-shadow: 0px 0px 1px #aaaaaa;","line-height: 18px;","color: #333;","font-family: monospace;","padding: 0px 10px 0px 70px;","position: fixed;","bottom: 0px;","left: 0px;","height: 0px;","opacity: 0.0;","box-sizing: border-box;","z-index: 10000;","text-align: left;"].join('')], null));
el_86106.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_86106.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_86106.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_86106);
>>>>>>> sqlite
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
<<<<<<< HEAD
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__66442,st_map){
var map__66443 = p__66442;
var map__66443__$1 = ((((!((map__66443 == null)))?(((((map__66443.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66443.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66443):map__66443);
var container_el = cljs.core.get.call(null,map__66443__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__66443,map__66443__$1,container_el){
return (function (p__66445){
var vec__66446 = p__66445;
var k = cljs.core.nth.call(null,vec__66446,(0),null);
var v = cljs.core.nth.call(null,vec__66446,(1),null);
return goog.object.set(container_el.style,cljs.core.name.call(null,k),v);
});})(map__66443,map__66443__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__66449,dom_str){
var map__66450 = p__66449;
var map__66450__$1 = ((((!((map__66450 == null)))?(((((map__66450.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66450.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66450):map__66450);
var c = map__66450__$1;
var content_area_el = cljs.core.get.call(null,map__66450__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__66452){
var map__66453 = p__66452;
var map__66453__$1 = ((((!((map__66453 == null)))?(((((map__66453.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66453.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66453):map__66453);
var content_area_el = cljs.core.get.call(null,map__66453__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
=======
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__86107,st_map){
var map__86108 = p__86107;
var map__86108__$1 = ((((!((map__86108 == null)))?(((((map__86108.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86108.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86108):map__86108);
var container_el = cljs.core.get.call(null,map__86108__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__86108,map__86108__$1,container_el){
return (function (p__86110){
var vec__86111 = p__86110;
var k = cljs.core.nth.call(null,vec__86111,(0),null);
var v = cljs.core.nth.call(null,vec__86111,(1),null);
return goog.object.set(container_el.style,cljs.core.name.call(null,k),v);
});})(map__86108,map__86108__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__86114,dom_str){
var map__86115 = p__86114;
var map__86115__$1 = ((((!((map__86115 == null)))?(((((map__86115.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86115.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86115):map__86115);
var c = map__86115__$1;
var content_area_el = cljs.core.get.call(null,map__86115__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__86117){
var map__86118 = p__86117;
var map__86118__$1 = ((((!((map__86118 == null)))?(((((map__86118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86118.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86118):map__86118);
var content_area_el = cljs.core.get.call(null,map__86118__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
>>>>>>> sqlite
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return ["<a style=\"","float: right;","font-size: 18px;","text-decoration: none;","text-align: right;","width: 30px;","height: 30px;","color: rgba(84,84,84, 0.5);","\" href=\"#\"  data-figwheel-event=\"close-heads-up\">","x","</a>"].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__27974__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27974__auto__){
return (function (){
var f__27975__auto__ = (function (){var switch__27884__auto__ = ((function (c__27974__auto__){
<<<<<<< HEAD
return (function (state_66470){
var state_val_66471 = (state_66470[(1)]);
if((state_val_66471 === (1))){
var inst_66455 = (state_66470[(7)]);
var inst_66455__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_66456 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_66457 = ["10px","10px","100%","68px","1.0"];
var inst_66458 = cljs.core.PersistentHashMap.fromArrays(inst_66456,inst_66457);
var inst_66459 = cljs.core.merge.call(null,inst_66458,style);
var inst_66460 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_66455__$1,inst_66459);
var inst_66461 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_66455__$1,msg);
var inst_66462 = cljs.core.async.timeout.call(null,(300));
var state_66470__$1 = (function (){var statearr_66472 = state_66470;
(statearr_66472[(8)] = inst_66461);

(statearr_66472[(9)] = inst_66460);

(statearr_66472[(7)] = inst_66455__$1);

return statearr_66472;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66470__$1,(2),inst_66462);
} else {
if((state_val_66471 === (2))){
var inst_66455 = (state_66470[(7)]);
var inst_66464 = (state_66470[(2)]);
var inst_66465 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_66466 = ["auto"];
var inst_66467 = cljs.core.PersistentHashMap.fromArrays(inst_66465,inst_66466);
var inst_66468 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_66455,inst_66467);
var state_66470__$1 = (function (){var statearr_66473 = state_66470;
(statearr_66473[(10)] = inst_66464);

return statearr_66473;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_66470__$1,inst_66468);
=======
return (function (state_86135){
var state_val_86136 = (state_86135[(1)]);
if((state_val_86136 === (1))){
var inst_86120 = (state_86135[(7)]);
var inst_86120__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_86121 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_86122 = ["10px","10px","100%","68px","1.0"];
var inst_86123 = cljs.core.PersistentHashMap.fromArrays(inst_86121,inst_86122);
var inst_86124 = cljs.core.merge.call(null,inst_86123,style);
var inst_86125 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_86120__$1,inst_86124);
var inst_86126 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_86120__$1,msg);
var inst_86127 = cljs.core.async.timeout.call(null,(300));
var state_86135__$1 = (function (){var statearr_86137 = state_86135;
(statearr_86137[(8)] = inst_86125);

(statearr_86137[(7)] = inst_86120__$1);

(statearr_86137[(9)] = inst_86126);

return statearr_86137;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_86135__$1,(2),inst_86127);
} else {
if((state_val_86136 === (2))){
var inst_86120 = (state_86135[(7)]);
var inst_86129 = (state_86135[(2)]);
var inst_86130 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_86131 = ["auto"];
var inst_86132 = cljs.core.PersistentHashMap.fromArrays(inst_86130,inst_86131);
var inst_86133 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_86120,inst_86132);
var state_86135__$1 = (function (){var statearr_86138 = state_86135;
(statearr_86138[(10)] = inst_86129);

return statearr_86138;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_86135__$1,inst_86133);
>>>>>>> sqlite
} else {
return null;
}
}
});})(c__27974__auto__))
;
return ((function (switch__27884__auto__,c__27974__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__27885__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__27885__auto____0 = (function (){
<<<<<<< HEAD
var statearr_66474 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_66474[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__27885__auto__);

(statearr_66474[(1)] = (1));

return statearr_66474;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__27885__auto____1 = (function (state_66470){
while(true){
var ret_value__27886__auto__ = (function (){try{while(true){
var result__27887__auto__ = switch__27884__auto__.call(null,state_66470);
=======
var statearr_86139 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_86139[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__27885__auto__);

(statearr_86139[(1)] = (1));

return statearr_86139;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__27885__auto____1 = (function (state_86135){
while(true){
var ret_value__27886__auto__ = (function (){try{while(true){
var result__27887__auto__ = switch__27884__auto__.call(null,state_86135);
>>>>>>> sqlite
if(cljs.core.keyword_identical_QMARK_.call(null,result__27887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27887__auto__;
}
break;
}
<<<<<<< HEAD
}catch (e66475){if((e66475 instanceof Object)){
var ex__27888__auto__ = e66475;
var statearr_66476_66478 = state_66470;
(statearr_66476_66478[(5)] = ex__27888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66470);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66475;
=======
}catch (e86140){if((e86140 instanceof Object)){
var ex__27888__auto__ = e86140;
var statearr_86141_86143 = state_86135;
(statearr_86141_86143[(5)] = ex__27888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_86135);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e86140;
>>>>>>> sqlite

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
<<<<<<< HEAD
var G__66479 = state_66470;
state_66470 = G__66479;
=======
var G__86144 = state_86135;
state_86135 = G__86144;
>>>>>>> sqlite
continue;
} else {
return ret_value__27886__auto__;
}
break;
}
});
<<<<<<< HEAD
figwheel$client$heads_up$display_heads_up_$_state_machine__27885__auto__ = function(state_66470){
=======
figwheel$client$heads_up$display_heads_up_$_state_machine__27885__auto__ = function(state_86135){
>>>>>>> sqlite
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__27885__auto____0.call(this);
case 1:
<<<<<<< HEAD
return figwheel$client$heads_up$display_heads_up_$_state_machine__27885__auto____1.call(this,state_66470);
=======
return figwheel$client$heads_up$display_heads_up_$_state_machine__27885__auto____1.call(this,state_86135);
>>>>>>> sqlite
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__27885__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__27885__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__27885__auto__;
})()
;})(switch__27884__auto__,c__27974__auto__))
})();
<<<<<<< HEAD
var state__27976__auto__ = (function (){var statearr_66477 = f__27975__auto__.call(null);
(statearr_66477[(6)] = c__27974__auto__);

return statearr_66477;
=======
var state__27976__auto__ = (function (){var statearr_86142 = f__27975__auto__.call(null);
(statearr_86142[(6)] = c__27974__auto__);

return statearr_86142;
>>>>>>> sqlite
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27976__auto__);
});})(c__27974__auto__))
);

return c__27974__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(var_args){
<<<<<<< HEAD
var G__66481 = arguments.length;
switch (G__66481) {
=======
var G__86146 = arguments.length;
switch (G__86146) {
>>>>>>> sqlite
case 1:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1 = (function (s){
return figwheel.client.heads_up.heading.call(null,s,"");
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2 = (function (s,sub_head){
return ["<div style=\"","font-size: 26px;","line-height: 26px;","margin-bottom: 2px;","padding-top: 1px;","\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)," <span style=\"","display: inline-block;","font-size: 13px;","\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sub_head),"</span></div>"].join('');
});

figwheel.client.heads_up.heading.cljs$lang$maxFixedArity = 2;

figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,column_number,msg){
return ["<div style=\"cursor: pointer;\" data-figwheel-event=\"file-selected\" data-file-name=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_name),"\" data-file-line=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number),"\" data-file-column=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_number),"\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),"</div>"].join('');
});
<<<<<<< HEAD
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg,p__66483){
var map__66484 = p__66483;
var map__66484__$1 = ((((!((map__66484 == null)))?(((((map__66484.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66484.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66484):map__66484);
var file = cljs.core.get.call(null,map__66484__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__66484__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__66484__$1,new cljs.core.Keyword(null,"column","column",2078222095));
=======
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg,p__86148){
var map__86149 = p__86148;
var map__86149__$1 = ((((!((map__86149 == null)))?(((((map__86149.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86149.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86149):map__86149);
var file = cljs.core.get.call(null,map__86149__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__86149__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__86149__$1,new cljs.core.Keyword(null,"column","column",2078222095));
>>>>>>> sqlite
var msg__$1 = goog.string.htmlEscape(msg);
if(cljs.core.truth_((function (){var or__3922__auto__ = file;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return line;
}
})())){
return figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg__$1);
} else {
return ["<div>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg__$1),"</div>"].join('');
}
});
figwheel.client.heads_up.escape = (function figwheel$client$heads_up$escape(x){
return goog.string.htmlEscape(x);
});
figwheel.client.heads_up.pad_line_number = (function figwheel$client$heads_up$pad_line_number(n,line_number){
var len = cljs.core.count.call(null,cljs.core.fnil.call(null,cljs.core.str,"").call(null,line_number));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((len < n))?cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(n - len)," ")):"")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number)].join('');
});
figwheel.client.heads_up.inline_error_line = (function figwheel$client$heads_up$inline_error_line(style,line_number,line){
return ["<span style='",cljs.core.str.cljs$core$IFn$_invoke$arity$1(style),"'>","<span style='color: #757575;'>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number),"  </span>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,line)),"</span>"].join('');
});
<<<<<<< HEAD
figwheel.client.heads_up.format_inline_error_line = (function figwheel$client$heads_up$format_inline_error_line(p__66486){
var vec__66487 = p__66486;
var typ = cljs.core.nth.call(null,vec__66487,(0),null);
var line_number = cljs.core.nth.call(null,vec__66487,(1),null);
var line = cljs.core.nth.call(null,vec__66487,(2),null);
var pred__66490 = cljs.core._EQ_;
var expr__66491 = typ;
if(cljs.core.truth_(pred__66490.call(null,new cljs.core.Keyword(null,"code-line","code-line",-2138627853),expr__66491))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #999;",line_number,line);
} else {
if(cljs.core.truth_(pred__66490.call(null,new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357),expr__66491))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #ccc; font-weight: bold;",line_number,line);
} else {
if(cljs.core.truth_(pred__66490.call(null,new cljs.core.Keyword(null,"error-message","error-message",1756021561),expr__66491))){
=======
figwheel.client.heads_up.format_inline_error_line = (function figwheel$client$heads_up$format_inline_error_line(p__86151){
var vec__86152 = p__86151;
var typ = cljs.core.nth.call(null,vec__86152,(0),null);
var line_number = cljs.core.nth.call(null,vec__86152,(1),null);
var line = cljs.core.nth.call(null,vec__86152,(2),null);
var pred__86155 = cljs.core._EQ_;
var expr__86156 = typ;
if(cljs.core.truth_(pred__86155.call(null,new cljs.core.Keyword(null,"code-line","code-line",-2138627853),expr__86156))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #999;",line_number,line);
} else {
if(cljs.core.truth_(pred__86155.call(null,new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357),expr__86156))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #ccc; font-weight: bold;",line_number,line);
} else {
if(cljs.core.truth_(pred__86155.call(null,new cljs.core.Keyword(null,"error-message","error-message",1756021561),expr__86156))){
>>>>>>> sqlite
return figwheel.client.heads_up.inline_error_line.call(null,"color: #D07D7D;",line_number,line);
} else {
return figwheel.client.heads_up.inline_error_line.call(null,"color: #666;",line_number,line);
}
}
}
});
figwheel.client.heads_up.pad_line_numbers = (function figwheel$client$heads_up$pad_line_numbers(inline_error){
var max_line_number_length = cljs.core.count.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.second,inline_error)))].join(''));
return cljs.core.map.call(null,((function (max_line_number_length){
<<<<<<< HEAD
return (function (p1__66493_SHARP_){
return cljs.core.update_in.call(null,p1__66493_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),cljs.core.partial.call(null,figwheel.client.heads_up.pad_line_number,max_line_number_length));
=======
return (function (p1__86158_SHARP_){
return cljs.core.update_in.call(null,p1__86158_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),cljs.core.partial.call(null,figwheel.client.heads_up.pad_line_number,max_line_number_length));
>>>>>>> sqlite
});})(max_line_number_length))
,inline_error);
});
figwheel.client.heads_up.format_inline_error = (function figwheel$client$heads_up$format_inline_error(inline_error){
var lines = cljs.core.map.call(null,figwheel.client.heads_up.format_inline_error_line,figwheel.client.heads_up.pad_line_numbers.call(null,inline_error));
return ["<pre style='whitespace:pre; overflow-x: scroll; display:block; font-family:monospace; font-size:0.8em; border-radius: 3px;"," line-height: 1.1em; padding: 10px; background-color: rgb(24,26,38); margin-right: 5px'>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,"\n",lines)),"</pre>"].join('');
});
<<<<<<< HEAD
figwheel.client.heads_up.flatten_exception = (function figwheel$client$heads_up$flatten_exception(p1__66494_SHARP_){
return cljs.core.take_while.call(null,cljs.core.some_QMARK_,cljs.core.iterate.call(null,new cljs.core.Keyword(null,"cause","cause",231901252),p1__66494_SHARP_));
});
figwheel.client.heads_up.exception__GT_display_data = (function figwheel$client$heads_up$exception__GT_display_data(p__66497){
var map__66498 = p__66497;
var map__66498__$1 = ((((!((map__66498 == null)))?(((((map__66498.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66498.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66498):map__66498);
var exception = map__66498__$1;
var message = cljs.core.get.call(null,map__66498__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var failed_loading_clj_file = cljs.core.get.call(null,map__66498__$1,new cljs.core.Keyword(null,"failed-loading-clj-file","failed-loading-clj-file",-1682536481));
var reader_exception = cljs.core.get.call(null,map__66498__$1,new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098));
var file = cljs.core.get.call(null,map__66498__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var column = cljs.core.get.call(null,map__66498__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var failed_compiling = cljs.core.get.call(null,map__66498__$1,new cljs.core.Keyword(null,"failed-compiling","failed-compiling",1768639503));
var error_inline = cljs.core.get.call(null,map__66498__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var line = cljs.core.get.call(null,map__66498__$1,new cljs.core.Keyword(null,"line","line",212345235));
var class$ = cljs.core.get.call(null,map__66498__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var analysis_exception = cljs.core.get.call(null,map__66498__$1,new cljs.core.Keyword(null,"analysis-exception","analysis-exception",591623285));
var display_ex_data = cljs.core.get.call(null,map__66498__$1,new cljs.core.Keyword(null,"display-ex-data","display-ex-data",-1611558730));
=======
figwheel.client.heads_up.flatten_exception = (function figwheel$client$heads_up$flatten_exception(p1__86159_SHARP_){
return cljs.core.take_while.call(null,cljs.core.some_QMARK_,cljs.core.iterate.call(null,new cljs.core.Keyword(null,"cause","cause",231901252),p1__86159_SHARP_));
});
figwheel.client.heads_up.exception__GT_display_data = (function figwheel$client$heads_up$exception__GT_display_data(p__86162){
var map__86163 = p__86162;
var map__86163__$1 = ((((!((map__86163 == null)))?(((((map__86163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86163.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86163):map__86163);
var exception = map__86163__$1;
var message = cljs.core.get.call(null,map__86163__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var failed_loading_clj_file = cljs.core.get.call(null,map__86163__$1,new cljs.core.Keyword(null,"failed-loading-clj-file","failed-loading-clj-file",-1682536481));
var reader_exception = cljs.core.get.call(null,map__86163__$1,new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098));
var file = cljs.core.get.call(null,map__86163__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var column = cljs.core.get.call(null,map__86163__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var failed_compiling = cljs.core.get.call(null,map__86163__$1,new cljs.core.Keyword(null,"failed-compiling","failed-compiling",1768639503));
var error_inline = cljs.core.get.call(null,map__86163__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var line = cljs.core.get.call(null,map__86163__$1,new cljs.core.Keyword(null,"line","line",212345235));
var class$ = cljs.core.get.call(null,map__86163__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var analysis_exception = cljs.core.get.call(null,map__86163__$1,new cljs.core.Keyword(null,"analysis-exception","analysis-exception",591623285));
var display_ex_data = cljs.core.get.call(null,map__86163__$1,new cljs.core.Keyword(null,"display-ex-data","display-ex-data",-1611558730));
>>>>>>> sqlite
var last_message = (cljs.core.truth_((function (){var and__3911__auto__ = file;
if(cljs.core.truth_(and__3911__auto__)){
return line;
} else {
return and__3911__auto__;
}
})())?["Please see line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)," of file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):(cljs.core.truth_(file)?["Please see ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),(cljs.core.truth_(failed_loading_clj_file)?"Couldn't load Clojure file":(cljs.core.truth_(analysis_exception)?"Could not Analyze":(cljs.core.truth_(reader_exception)?"Could not Read":(cljs.core.truth_(failed_compiling)?"Could not Compile":"Compile Exception"
<<<<<<< HEAD
)))),new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__66498,map__66498__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data){
return (function (p1__66495_SHARP_){
return ["<div>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__66495_SHARP_),"</div>"].join('');
});})(last_message,map__66498,map__66498__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data))
,(cljs.core.truth_(message)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(class$)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,class$)),": "].join(''):"")),"<span style=\"font-weight:bold;\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,message)),"</span>"].join(''),(cljs.core.truth_(display_ex_data)?["<pre style=\"white-space: pre-wrap\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.utils.pprint_to_string.call(null,display_ex_data)),"</pre>"].join(''):null),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null):cljs.core.map.call(null,((function (last_message,map__66498,map__66498__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data){
return (function (p1__66496_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p1__66496_SHARP_))),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(p1__66496_SHARP_)))].join('');
});})(last_message,map__66498,map__66498__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data))
,figwheel.client.heads_up.flatten_exception.call(null,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(exception))))),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["<div style=\"color: #AD4F4F; padding-top: 3px;\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,last_message)),"</div>"].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.auto_notify_source_file_line = (function figwheel$client$heads_up$auto_notify_source_file_line(p__66500){
var map__66501 = p__66500;
var map__66501__$1 = ((((!((map__66501 == null)))?(((((map__66501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66501.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66501):map__66501);
var file = cljs.core.get.call(null,map__66501__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__66501__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__66501__$1,new cljs.core.Keyword(null,"column","column",2078222095));
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''),new cljs.core.Keyword(null,"file-line","file-line",-1228823138),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''),new cljs.core.Keyword(null,"file-column","file-column",1543934780),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('')], null));
});
figwheel.client.heads_up.display_exception = (function figwheel$client$heads_up$display_exception(exception_data){
var map__66504 = figwheel.client.heads_up.exception__GT_display_data.call(null,exception_data);
var map__66504__$1 = ((((!((map__66504 == null)))?(((((map__66504.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66504.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66504):map__66504);
var head = cljs.core.get.call(null,map__66504__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__66504__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__66504__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__66504__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__66504__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__66504__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__66504__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,head,sub_head)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg))].join(''));
});
figwheel.client.heads_up.warning_data__GT_display_data = (function figwheel$client$heads_up$warning_data__GT_display_data(p__66507){
var map__66508 = p__66507;
var map__66508__$1 = ((((!((map__66508 == null)))?(((((map__66508.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66508.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66508):map__66508);
var warning_data = map__66508__$1;
var file = cljs.core.get.call(null,map__66508__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__66508__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__66508__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var message = cljs.core.get.call(null,map__66508__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var error_inline = cljs.core.get.call(null,map__66508__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
=======
)))),new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__86163,map__86163__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data){
return (function (p1__86160_SHARP_){
return ["<div>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__86160_SHARP_),"</div>"].join('');
});})(last_message,map__86163,map__86163__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data))
,(cljs.core.truth_(message)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(class$)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,class$)),": "].join(''):"")),"<span style=\"font-weight:bold;\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,message)),"</span>"].join(''),(cljs.core.truth_(display_ex_data)?["<pre style=\"white-space: pre-wrap\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.utils.pprint_to_string.call(null,display_ex_data)),"</pre>"].join(''):null),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null):cljs.core.map.call(null,((function (last_message,map__86163,map__86163__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data){
return (function (p1__86161_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p1__86161_SHARP_))),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(p1__86161_SHARP_)))].join('');
});})(last_message,map__86163,map__86163__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data))
,figwheel.client.heads_up.flatten_exception.call(null,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(exception))))),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["<div style=\"color: #AD4F4F; padding-top: 3px;\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,last_message)),"</div>"].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.auto_notify_source_file_line = (function figwheel$client$heads_up$auto_notify_source_file_line(p__86165){
var map__86166 = p__86165;
var map__86166__$1 = ((((!((map__86166 == null)))?(((((map__86166.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86166.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86166):map__86166);
var file = cljs.core.get.call(null,map__86166__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__86166__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__86166__$1,new cljs.core.Keyword(null,"column","column",2078222095));
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''),new cljs.core.Keyword(null,"file-line","file-line",-1228823138),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''),new cljs.core.Keyword(null,"file-column","file-column",1543934780),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('')], null));
});
figwheel.client.heads_up.display_exception = (function figwheel$client$heads_up$display_exception(exception_data){
var map__86169 = figwheel.client.heads_up.exception__GT_display_data.call(null,exception_data);
var map__86169__$1 = ((((!((map__86169 == null)))?(((((map__86169.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86169.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86169):map__86169);
var head = cljs.core.get.call(null,map__86169__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__86169__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__86169__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__86169__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__86169__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__86169__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__86169__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,head,sub_head)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg))].join(''));
});
figwheel.client.heads_up.warning_data__GT_display_data = (function figwheel$client$heads_up$warning_data__GT_display_data(p__86172){
var map__86173 = p__86172;
var map__86173__$1 = ((((!((map__86173 == null)))?(((((map__86173.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86173.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86173):map__86173);
var warning_data = map__86173__$1;
var file = cljs.core.get.call(null,map__86173__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__86173__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__86173__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var message = cljs.core.get.call(null,map__86173__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var error_inline = cljs.core.get.call(null,map__86173__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
>>>>>>> sqlite
var last_message = (cljs.core.truth_((function (){var and__3911__auto__ = file;
if(cljs.core.truth_(and__3911__auto__)){
return line;
} else {
return and__3911__auto__;
}
})())?["Please see line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)," of file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):(cljs.core.truth_(file)?["Please see ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null
));
<<<<<<< HEAD
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),"Compile Warning",new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__66508,map__66508__$1,warning_data,file,line,column,message,error_inline){
return (function (p1__66506_SHARP_){
return ["<div>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__66506_SHARP_),"</div>"].join('');
});})(last_message,map__66508,map__66508__$1,warning_data,file,line,column,message,error_inline))
=======
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),"Compile Warning",new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__86173,map__86173__$1,warning_data,file,line,column,message,error_inline){
return (function (p1__86171_SHARP_){
return ["<div>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__86171_SHARP_),"</div>"].join('');
});})(last_message,map__86173,map__86173__$1,warning_data,file,line,column,message,error_inline))
>>>>>>> sqlite
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(message)?["<span style=\"font-weight:bold;\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,message)),"</span>"].join(''):null),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null)),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["<div style=\"color: #AD4F4F; padding-top: 3px; margin-bottom: 10px;\">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,last_message)),"</div>"].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,header)),"<div>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),"</div>"].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(warning_data){
<<<<<<< HEAD
var map__66510 = figwheel.client.heads_up.warning_data__GT_display_data.call(null,warning_data);
var map__66510__$1 = ((((!((map__66510 == null)))?(((((map__66510.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66510.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66510):map__66510);
var head = cljs.core.get.call(null,map__66510__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__66510__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__66510__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__66510__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__66510__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__66510__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__66510__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,head,sub_head)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg))].join(''));
});
figwheel.client.heads_up.format_warning_message = (function figwheel$client$heads_up$format_warning_message(p__66512){
var map__66513 = p__66512;
var map__66513__$1 = ((((!((map__66513 == null)))?(((((map__66513.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66513.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66513):map__66513);
var warning_data = map__66513__$1;
var message = cljs.core.get.call(null,map__66513__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__66513__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__66513__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__66513__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__66515 = message;
var G__66515__$1 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__66515)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__66515);
var G__66515__$2 = (cljs.core.truth_((function (){var and__3911__auto__ = line;
=======
var map__86175 = figwheel.client.heads_up.warning_data__GT_display_data.call(null,warning_data);
var map__86175__$1 = ((((!((map__86175 == null)))?(((((map__86175.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86175.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86175):map__86175);
var head = cljs.core.get.call(null,map__86175__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__86175__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__86175__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__86175__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__86175__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__86175__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__86175__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,head,sub_head)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg))].join(''));
});
figwheel.client.heads_up.format_warning_message = (function figwheel$client$heads_up$format_warning_message(p__86177){
var map__86178 = p__86177;
var map__86178__$1 = ((((!((map__86178 == null)))?(((((map__86178.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86178.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86178):map__86178);
var warning_data = map__86178__$1;
var message = cljs.core.get.call(null,map__86178__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__86178__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__86178__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__86178__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__86180 = message;
var G__86180__$1 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__86180)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__86180);
var G__86180__$2 = (cljs.core.truth_((function (){var and__3911__auto__ = line;
>>>>>>> sqlite
if(cljs.core.truth_(and__3911__auto__)){
return column;
} else {
return and__3911__auto__;
}
<<<<<<< HEAD
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__66515__$1),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):G__66515__$1);
if(cljs.core.truth_(file)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__66515__$2)," in file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join('');
} else {
return G__66515__$2;
}
});
figwheel.client.heads_up.append_warning_message = (function figwheel$client$heads_up$append_warning_message(p__66516){
var map__66517 = p__66516;
var map__66517__$1 = ((((!((map__66517 == null)))?(((((map__66517.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66517.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66517):map__66517);
var warning_data = map__66517__$1;
var message = cljs.core.get.call(null,map__66517__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__66517__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__66517__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__66517__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(cljs.core.truth_(message)){
var map__66519 = figwheel.client.heads_up.ensure_container.call(null);
var map__66519__$1 = ((((!((map__66519 == null)))?(((((map__66519.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66519.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66519):map__66519);
var content_area_el = cljs.core.get.call(null,map__66519__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
=======
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__86180__$1),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):G__86180__$1);
if(cljs.core.truth_(file)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__86180__$2)," in file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join('');
} else {
return G__86180__$2;
}
});
figwheel.client.heads_up.append_warning_message = (function figwheel$client$heads_up$append_warning_message(p__86181){
var map__86182 = p__86181;
var map__86182__$1 = ((((!((map__86182 == null)))?(((((map__86182.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86182.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86182):map__86182);
var warning_data = map__86182__$1;
var message = cljs.core.get.call(null,map__86182__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__86182__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__86182__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__86182__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(cljs.core.truth_(message)){
var map__86184 = figwheel.client.heads_up.ensure_container.call(null);
var map__86184__$1 = ((((!((map__86184 == null)))?(((((map__86184.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__86184.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__86184):map__86184);
var content_area_el = cljs.core.get.call(null,map__86184__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
>>>>>>> sqlite
var el = goog.dom.createElement("div");
var child_count = goog.dom.getChildren(content_area_el).length;
if((child_count < (6))){
el.innerHTML = figwheel.client.heads_up.format_line.call(null,figwheel.client.heads_up.format_warning_message.call(null,warning_data),warning_data);

return goog.dom.append(content_area_el,el);
} else {
var temp__5457__auto__ = goog.dom.getLastElementChild(content_area_el);
if(cljs.core.truth_(temp__5457__auto__)){
var last_child = temp__5457__auto__;
var temp__5455__auto__ = goog.dom.dataset.get(last_child,"figwheel_count");
if(cljs.core.truth_(temp__5455__auto__)){
var message_count = temp__5455__auto__;
var message_count__$1 = (parseInt(message_count) + (1));
goog.dom.dataset.set(last_child,"figwheel_count",message_count__$1);

return last_child.innerHTML = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(message_count__$1)," more warnings have not been displayed ..."].join('');
} else {
return goog.dom.append(content_area_el,goog.dom.createDom("div",({"data-figwheel_count": (1), "style": "margin-top: 3px; font-weight: bold"}),"1 more warning that has not been displayed ..."));
}
} else {
return null;
}
}
} else {
return null;
}
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__27974__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27974__auto__){
return (function (){
var f__27975__auto__ = (function (){var switch__27884__auto__ = ((function (c__27974__auto__){
<<<<<<< HEAD
return (function (state_66538){
var state_val_66539 = (state_66538[(1)]);
if((state_val_66539 === (1))){
var inst_66521 = (state_66538[(7)]);
var inst_66521__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_66522 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_66523 = ["0.0"];
var inst_66524 = cljs.core.PersistentHashMap.fromArrays(inst_66522,inst_66523);
var inst_66525 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_66521__$1,inst_66524);
var inst_66526 = cljs.core.async.timeout.call(null,(300));
var state_66538__$1 = (function (){var statearr_66540 = state_66538;
(statearr_66540[(7)] = inst_66521__$1);

(statearr_66540[(8)] = inst_66525);

return statearr_66540;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66538__$1,(2),inst_66526);
} else {
if((state_val_66539 === (2))){
var inst_66521 = (state_66538[(7)]);
var inst_66528 = (state_66538[(2)]);
var inst_66529 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_66530 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_66531 = cljs.core.PersistentHashMap.fromArrays(inst_66529,inst_66530);
var inst_66532 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_66521,inst_66531);
var inst_66533 = cljs.core.async.timeout.call(null,(200));
var state_66538__$1 = (function (){var statearr_66541 = state_66538;
(statearr_66541[(9)] = inst_66532);

(statearr_66541[(10)] = inst_66528);

return statearr_66541;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66538__$1,(3),inst_66533);
} else {
if((state_val_66539 === (3))){
var inst_66521 = (state_66538[(7)]);
var inst_66535 = (state_66538[(2)]);
var inst_66536 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_66521,"");
var state_66538__$1 = (function (){var statearr_66542 = state_66538;
(statearr_66542[(11)] = inst_66535);

return statearr_66542;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_66538__$1,inst_66536);
=======
return (function (state_86203){
var state_val_86204 = (state_86203[(1)]);
if((state_val_86204 === (1))){
var inst_86186 = (state_86203[(7)]);
var inst_86186__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_86187 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_86188 = ["0.0"];
var inst_86189 = cljs.core.PersistentHashMap.fromArrays(inst_86187,inst_86188);
var inst_86190 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_86186__$1,inst_86189);
var inst_86191 = cljs.core.async.timeout.call(null,(300));
var state_86203__$1 = (function (){var statearr_86205 = state_86203;
(statearr_86205[(7)] = inst_86186__$1);

(statearr_86205[(8)] = inst_86190);

return statearr_86205;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_86203__$1,(2),inst_86191);
} else {
if((state_val_86204 === (2))){
var inst_86186 = (state_86203[(7)]);
var inst_86193 = (state_86203[(2)]);
var inst_86194 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_86195 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_86196 = cljs.core.PersistentHashMap.fromArrays(inst_86194,inst_86195);
var inst_86197 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_86186,inst_86196);
var inst_86198 = cljs.core.async.timeout.call(null,(200));
var state_86203__$1 = (function (){var statearr_86206 = state_86203;
(statearr_86206[(9)] = inst_86193);

(statearr_86206[(10)] = inst_86197);

return statearr_86206;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_86203__$1,(3),inst_86198);
} else {
if((state_val_86204 === (3))){
var inst_86186 = (state_86203[(7)]);
var inst_86200 = (state_86203[(2)]);
var inst_86201 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_86186,"");
var state_86203__$1 = (function (){var statearr_86207 = state_86203;
(statearr_86207[(11)] = inst_86200);

return statearr_86207;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_86203__$1,inst_86201);
>>>>>>> sqlite
} else {
return null;
}
}
}
});})(c__27974__auto__))
;
return ((function (switch__27884__auto__,c__27974__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__27885__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__27885__auto____0 = (function (){
<<<<<<< HEAD
var statearr_66543 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_66543[(0)] = figwheel$client$heads_up$clear_$_state_machine__27885__auto__);

(statearr_66543[(1)] = (1));

return statearr_66543;
});
var figwheel$client$heads_up$clear_$_state_machine__27885__auto____1 = (function (state_66538){
while(true){
var ret_value__27886__auto__ = (function (){try{while(true){
var result__27887__auto__ = switch__27884__auto__.call(null,state_66538);
=======
var statearr_86208 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_86208[(0)] = figwheel$client$heads_up$clear_$_state_machine__27885__auto__);

(statearr_86208[(1)] = (1));

return statearr_86208;
});
var figwheel$client$heads_up$clear_$_state_machine__27885__auto____1 = (function (state_86203){
while(true){
var ret_value__27886__auto__ = (function (){try{while(true){
var result__27887__auto__ = switch__27884__auto__.call(null,state_86203);
>>>>>>> sqlite
if(cljs.core.keyword_identical_QMARK_.call(null,result__27887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27887__auto__;
}
break;
}
<<<<<<< HEAD
}catch (e66544){if((e66544 instanceof Object)){
var ex__27888__auto__ = e66544;
var statearr_66545_66547 = state_66538;
(statearr_66545_66547[(5)] = ex__27888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66538);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66544;
=======
}catch (e86209){if((e86209 instanceof Object)){
var ex__27888__auto__ = e86209;
var statearr_86210_86212 = state_86203;
(statearr_86210_86212[(5)] = ex__27888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_86203);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e86209;
>>>>>>> sqlite

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
<<<<<<< HEAD
var G__66548 = state_66538;
state_66538 = G__66548;
=======
var G__86213 = state_86203;
state_86203 = G__86213;
>>>>>>> sqlite
continue;
} else {
return ret_value__27886__auto__;
}
break;
}
});
<<<<<<< HEAD
figwheel$client$heads_up$clear_$_state_machine__27885__auto__ = function(state_66538){
=======
figwheel$client$heads_up$clear_$_state_machine__27885__auto__ = function(state_86203){
>>>>>>> sqlite
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__27885__auto____0.call(this);
case 1:
<<<<<<< HEAD
return figwheel$client$heads_up$clear_$_state_machine__27885__auto____1.call(this,state_66538);
=======
return figwheel$client$heads_up$clear_$_state_machine__27885__auto____1.call(this,state_86203);
>>>>>>> sqlite
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up$clear_$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__27885__auto____0;
figwheel$client$heads_up$clear_$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__27885__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__27885__auto__;
})()
;})(switch__27884__auto__,c__27974__auto__))
})();
<<<<<<< HEAD
var state__27976__auto__ = (function (){var statearr_66546 = f__27975__auto__.call(null);
(statearr_66546[(6)] = c__27974__auto__);

return statearr_66546;
=======
var state__27976__auto__ = (function (){var statearr_86211 = f__27975__auto__.call(null);
(statearr_86211[(6)] = c__27974__auto__);

return statearr_86211;
>>>>>>> sqlite
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27976__auto__);
});})(c__27974__auto__))
);

return c__27974__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__27974__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27974__auto__){
return (function (){
var f__27975__auto__ = (function (){var switch__27884__auto__ = ((function (c__27974__auto__){
<<<<<<< HEAD
return (function (state_66559){
var state_val_66560 = (state_66559[(1)]);
if((state_val_66560 === (1))){
var inst_66549 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_66559__$1 = state_66559;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66559__$1,(2),inst_66549);
} else {
if((state_val_66560 === (2))){
var inst_66551 = (state_66559[(2)]);
var inst_66552 = cljs.core.async.timeout.call(null,(400));
var state_66559__$1 = (function (){var statearr_66561 = state_66559;
(statearr_66561[(7)] = inst_66551);

return statearr_66561;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66559__$1,(3),inst_66552);
} else {
if((state_val_66560 === (3))){
var inst_66554 = (state_66559[(2)]);
var inst_66555 = figwheel.client.heads_up.clear.call(null);
var state_66559__$1 = (function (){var statearr_66562 = state_66559;
(statearr_66562[(8)] = inst_66554);

return statearr_66562;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66559__$1,(4),inst_66555);
} else {
if((state_val_66560 === (4))){
var inst_66557 = (state_66559[(2)]);
var state_66559__$1 = state_66559;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_66559__$1,inst_66557);
=======
return (function (state_86224){
var state_val_86225 = (state_86224[(1)]);
if((state_val_86225 === (1))){
var inst_86214 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_86224__$1 = state_86224;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_86224__$1,(2),inst_86214);
} else {
if((state_val_86225 === (2))){
var inst_86216 = (state_86224[(2)]);
var inst_86217 = cljs.core.async.timeout.call(null,(400));
var state_86224__$1 = (function (){var statearr_86226 = state_86224;
(statearr_86226[(7)] = inst_86216);

return statearr_86226;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_86224__$1,(3),inst_86217);
} else {
if((state_val_86225 === (3))){
var inst_86219 = (state_86224[(2)]);
var inst_86220 = figwheel.client.heads_up.clear.call(null);
var state_86224__$1 = (function (){var statearr_86227 = state_86224;
(statearr_86227[(8)] = inst_86219);

return statearr_86227;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_86224__$1,(4),inst_86220);
} else {
if((state_val_86225 === (4))){
var inst_86222 = (state_86224[(2)]);
var state_86224__$1 = state_86224;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_86224__$1,inst_86222);
>>>>>>> sqlite
} else {
return null;
}
}
}
}
});})(c__27974__auto__))
;
return ((function (switch__27884__auto__,c__27974__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__27885__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__27885__auto____0 = (function (){
<<<<<<< HEAD
var statearr_66563 = [null,null,null,null,null,null,null,null,null];
(statearr_66563[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__27885__auto__);

(statearr_66563[(1)] = (1));

return statearr_66563;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__27885__auto____1 = (function (state_66559){
while(true){
var ret_value__27886__auto__ = (function (){try{while(true){
var result__27887__auto__ = switch__27884__auto__.call(null,state_66559);
=======
var statearr_86228 = [null,null,null,null,null,null,null,null,null];
(statearr_86228[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__27885__auto__);

(statearr_86228[(1)] = (1));

return statearr_86228;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__27885__auto____1 = (function (state_86224){
while(true){
var ret_value__27886__auto__ = (function (){try{while(true){
var result__27887__auto__ = switch__27884__auto__.call(null,state_86224);
>>>>>>> sqlite
if(cljs.core.keyword_identical_QMARK_.call(null,result__27887__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27887__auto__;
}
break;
}
<<<<<<< HEAD
}catch (e66564){if((e66564 instanceof Object)){
var ex__27888__auto__ = e66564;
var statearr_66565_66567 = state_66559;
(statearr_66565_66567[(5)] = ex__27888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66559);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66564;
=======
}catch (e86229){if((e86229 instanceof Object)){
var ex__27888__auto__ = e86229;
var statearr_86230_86232 = state_86224;
(statearr_86230_86232[(5)] = ex__27888__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_86224);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e86229;
>>>>>>> sqlite

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27886__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
<<<<<<< HEAD
var G__66568 = state_66559;
state_66559 = G__66568;
=======
var G__86233 = state_86224;
state_86224 = G__86233;
>>>>>>> sqlite
continue;
} else {
return ret_value__27886__auto__;
}
break;
}
});
<<<<<<< HEAD
figwheel$client$heads_up$flash_loaded_$_state_machine__27885__auto__ = function(state_66559){
=======
figwheel$client$heads_up$flash_loaded_$_state_machine__27885__auto__ = function(state_86224){
>>>>>>> sqlite
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__27885__auto____0.call(this);
case 1:
<<<<<<< HEAD
return figwheel$client$heads_up$flash_loaded_$_state_machine__27885__auto____1.call(this,state_66559);
=======
return figwheel$client$heads_up$flash_loaded_$_state_machine__27885__auto____1.call(this,state_86224);
>>>>>>> sqlite
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__27885__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__27885__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__27885__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__27885__auto__;
})()
;})(switch__27884__auto__,c__27974__auto__))
})();
<<<<<<< HEAD
var state__27976__auto__ = (function (){var statearr_66566 = f__27975__auto__.call(null);
(statearr_66566[(6)] = c__27974__auto__);

return statearr_66566;
=======
var state__27976__auto__ = (function (){var statearr_86231 = f__27975__auto__.call(null);
(statearr_86231[(6)] = c__27974__auto__);

return statearr_86231;
>>>>>>> sqlite
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27976__auto__);
});})(c__27974__auto__))
);

return c__27974__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";
figwheel.client.heads_up.close_bad_compile_screen = (function figwheel$client$heads_up$close_bad_compile_screen(){
var temp__5457__auto__ = document.getElementById("figwheelFailScreen");
if(cljs.core.truth_(temp__5457__auto__)){
var el = temp__5457__auto__;
return goog.dom.removeNode(el);
} else {
return null;
}
});
figwheel.client.heads_up.bad_compile_screen = (function figwheel$client$heads_up$bad_compile_screen(){
var body = (goog.dom.getElementsByTagNameAndClass("body")[(0)]);
figwheel.client.heads_up.close_bad_compile_screen.call(null);

return goog.dom.append(body,goog.dom.createDom("div",({"id": "figwheelFailScreen", "style": ["background-color: rgba(24, 26, 38, 0.95);","position: absolute;","z-index: 9000;","width: 100vw;","height: 100vh;","top: 0px; left: 0px;","font-family: monospace"].join('')}),goog.dom.createDom("div",({"class": "message", "style": ["color: #FFF5DB;","width: 100vw;","margin: auto;","margin-top: 10px;","text-align: center; ","padding: 2px 0px;","font-size: 13px;","position: relative"].join('')}),goog.dom.createDom("a",({"onclick": ((function (body){
return (function (e){
e.preventDefault();

return figwheel.client.heads_up.close_bad_compile_screen.call(null);
});})(body))
, "href": "javascript:", "style": "position: absolute; right: 10px; top: 10px; color: #666"}),"X"),goog.dom.createDom("h2",({"style": "color: #FFF5DB"}),"Figwheel Says: Your code didn't compile."),goog.dom.createDom("div",({"style": "font-size: 12px"}),goog.dom.createDom("p",({"style": "color: #D07D7D;"}),"Keep trying. This page will auto-refresh when your code compiles successfully.")))));
});

<<<<<<< HEAD
//# sourceMappingURL=heads_up.js.map?rel=1525389505379
=======
//# sourceMappingURL=heads_up.js.map?rel=1525389592689
>>>>>>> sqlite
