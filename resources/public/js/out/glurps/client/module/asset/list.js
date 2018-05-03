// Compiled by ClojureScript 1.10.238 {}
goog.provide('glurps.client.module.asset.list');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('glurps.client.main');
goog.require('glurps.component.card.card');
goog.require('glurps.component.form.select');
goog.require('glurps.component.pagination.pagination');
goog.require('ajax.core');
goog.require('clojure.browser.repl');
goog.require('cljs.reader');
goog.require('jayq.core');
if(typeof glurps.client.module.asset.list.state !== 'undefined'){
} else {
glurps.client.module.asset.list.state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"page","page",849072397),(1),new cljs.core.Keyword(null,"tab","tab",-559583621),"first",new cljs.core.Keyword(null,"actor-selected","actor-selected",-1587265347),"",new cljs.core.Keyword(null,"user-records","user-records",146002922),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"records","records",1326822832),cljs.core.PersistentVector.EMPTY], null));
}
glurps.client.module.asset.list.get_record_by_id = (function glurps$client$module$asset$list$get_record_by_id(id){
return cljs.core.filter.call(null,(function (p1__51412_SHARP_){
return cljs.core._EQ_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__51412_SHARP_))].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''));
}),new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,glurps.client.module.asset.list.state)));
});
glurps.client.module.asset.list.map_records_to_cards_html = (function glurps$client$module$asset$list$map_records_to_cards_html(records,key_keyword,image_keyword,title_keyword,meta_keyword){
return cljs.core.map.call(null,(function (v){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(key_keyword.call(null,v))].join(''),new cljs.core.Keyword(null,"key","key",-1516042587),key_keyword.call(null,v),new cljs.core.Keyword(null,"image","image",-58725096),image_keyword.call(null,v),new cljs.core.Keyword(null,"title","title",636505583),title_keyword.call(null,v),new cljs.core.Keyword(null,"meta","meta",1499536964),meta_keyword.call(null,v)], null);
}),records);
});
glurps.client.module.asset.list.vec_str_to_vec = (function glurps$client$module$asset$list$vec_str_to_vec(vec_str){
return cljs.reader.read_string.call(null,vec_str);
});
glurps.client.module.asset.list.fetch_actor = (function glurps$client$module$asset$list$fetch_actor(page,limit){
return ajax.core.GET.call(null,["http://localhost:3000/api?col=","actor","&page=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(page),"&limit=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(limit)].join(''),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
var cards = glurps.client.module.asset.list.map_records_to_cards_html.call(null,glurps.client.module.asset.list.vec_str_to_vec.call(null,response),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"picture","picture",-921943404),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"nationality","nationality",-539165719));
return cljs.core.swap_BANG_.call(null,glurps.client.module.asset.list.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"records","records",1326822832)], null),((function (cards){
return (function (v){
return cards;
});})(cards))
);
}));
});
glurps.client.module.asset.list.fetch_user = (function glurps$client$module$asset$list$fetch_user(page,limit){
return ajax.core.GET.call(null,["http://localhost:3000/api?col=","user","&page=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(page),"&limit=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(limit)].join(''),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (response){
var cards = glurps.client.module.asset.list.map_records_to_cards_html.call(null,glurps.client.module.asset.list.vec_str_to_vec.call(null,response),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.swap_BANG_.call(null,glurps.client.module.asset.list.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user-records","user-records",146002922)], null),((function (cards){
return (function (v){
return cards;
});})(cards))
);
}));
});
glurps.client.module.asset.list.simple_component = (function glurps$client$module$asset$list$simple_component(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Here is the application state:",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,glurps.client.module.asset.list.state))].join('')], null)], null)], null);
});
glurps.client.module.asset.list.on_actor_cards_click = (function glurps$client$module$asset$list$on_actor_cards_click(target){
var el = jayq.core.$.call(null,target.target).closest(".card");
var id = el.attr("data-id");
return cljs.core.swap_BANG_.call(null,glurps.client.module.asset.list.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"actor-selected","actor-selected",-1587265347)], null),id);
});
glurps.client.module.asset.list.display = (function glurps$client$module$asset$list$display(b){
if(cljs.core.truth_(b)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"block"], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null);
}
});
glurps.client.module.asset.list.actor_list = (function glurps$client$module$asset$list$actor_list(actor_selected){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),actor_selected], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),glurps.client.module.asset.list.on_actor_cards_click], null),glurps.component.card.card.cards_html.call(null,new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,glurps.client.module.asset.list.state))),glurps.component.pagination.pagination.pager.call(null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"ui button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var page = jayq.core.$.call(null,"[data-tab=\"first\"] input[name=\"page\"]").val();
var limit = jayq.core.$.call(null,"[data-tab=\"first\"] input[name=\"limit\"]").val();
return glurps.client.module.asset.list.fetch_actor.call(null,page,limit);
})], null),"Fetch"], null)], null);
});
glurps.client.module.asset.list.actor_detail = (function glurps$client$module$asset$list$actor_detail(record){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),glurps.component.card.card.card_html.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(record),"b","c","d"),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"ui button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,glurps.client.module.asset.list.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"actor-selected","actor-selected",-1587265347)], null),"");
})], null),"Back"], null)], null);
});
glurps.client.module.asset.list.content_actor = (function glurps$client$module$asset$list$content_actor(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var id = new cljs.core.Keyword(null,"actor-selected","actor-selected",-1587265347).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,glurps.client.module.asset.list.state));
var record = glurps.client.module.asset.list.get_record_by_id.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),glurps.client.module.asset.list.display.call(null,cljs.core._EQ_.call(null,id,""))], null),glurps.client.module.asset.list.actor_list.call(null,id)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),glurps.client.module.asset.list.display.call(null,cljs.core.not_EQ_.call(null,id,""))], null),glurps.client.module.asset.list.actor_detail.call(null,record)], null)], null);
})()], null);
});
glurps.client.module.asset.list.content_user = (function glurps$client$module$asset$list$content_user(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),glurps.component.card.card.cards_html.call(null,new cljs.core.Keyword(null,"user-records","user-records",146002922).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,glurps.client.module.asset.list.state))),glurps.component.pagination.pagination.pager.call(null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"ui button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var page = jayq.core.$.call(null,"[data-tab=\"second\"] input[name=\"page\"]").val();
var limit = jayq.core.$.call(null,"[data-tab=\"second\"] input[name=\"limit\"]").val();
return glurps.client.module.asset.list.fetch_user.call(null,page,limit);
})], null),"Fetch"], null)], null)], null);
});
glurps.client.module.asset.list.content_actor_after_render = (function glurps$client$module$asset$list$content_actor_after_render(){
return jayq.core.$.call(null,".ui.dropdown").dropdown();
});
glurps.client.module.asset.list.tab = (function glurps$client$module$asset$list$tab(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"ui top attached tabular menu menutest"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"item active",new cljs.core.Keyword(null,"data-tab","data-tab",-482458929),"first",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,glurps.client.module.asset.list.state,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tab","tab",-559583621),"first"], null));
})], null),"Actors"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"item",new cljs.core.Keyword(null,"data-tab","data-tab",-482458929),"second",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,glurps.client.module.asset.list.state,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tab","tab",-559583621),"second"], null));
})], null),"Users"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"item",new cljs.core.Keyword(null,"data-tab","data-tab",-482458929),"third",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,glurps.client.module.asset.list.state,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tab","tab",-559583621),"third"], null));
})], null),"Third"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"ui bottom attached tab segment active",new cljs.core.Keyword(null,"data-tab","data-tab",-482458929),"first"], null),glurps.client.module.asset.list.content_actor.call(null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"ui bottom attached tab segment",new cljs.core.Keyword(null,"data-tab","data-tab",-482458929),"second"], null),glurps.client.module.asset.list.content_user.call(null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"ui bottom attached tab segment",new cljs.core.Keyword(null,"data-tab","data-tab",-482458929),"third"], null),"Third"], null)], null);
});
glurps.client.module.asset.list.tab_init_js = (function glurps$client$module$asset$list$tab_init_js(){
return jayq.core.$.call(null,(function (){
return jayq.core.$.call(null,".menutest .item").tab();
}));
});
glurps.client.module.asset.list.home_page = (function glurps$client$module$asset$list$home_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),glurps.client.module.asset.list.tab.call(null),glurps.client.module.asset.list.simple_component.call(null)], null);
});
glurps.client.module.asset.list.mount_root = (function glurps$client$module$asset$list$mount_root(){
reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [glurps.client.module.asset.list.home_page], null),document.getElementById("app"));

glurps.client.module.asset.list.tab_init_js.call(null);

return glurps.client.module.asset.list.content_actor_after_render.call(null);
});
glurps.client.module.asset.list.init_BANG_ = (function glurps$client$module$asset$list$init_BANG_(){
return glurps.client.module.asset.list.mount_root.call(null);
});

//# sourceMappingURL=list.js.map?rel=1525389422458
