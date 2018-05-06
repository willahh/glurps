// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.core.async.impl.dispatch');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.buffers');
goog.require('goog.async.nextTick');
cljs.core.async.impl.dispatch.tasks = cljs.core.async.impl.buffers.ring_buffer.call(null,(32));
cljs.core.async.impl.dispatch.running_QMARK_ = false;
cljs.core.async.impl.dispatch.queued_QMARK_ = false;
cljs.core.async.impl.dispatch.TASK_BATCH_SIZE = (1024);
cljs.core.async.impl.dispatch.process_messages = (function cljs$core$async$impl$dispatch$process_messages(){
cljs.core.async.impl.dispatch.running_QMARK_ = true;

cljs.core.async.impl.dispatch.queued_QMARK_ = false;

<<<<<<< HEAD
var count_56444 = (0);
while(true){
var m_56445 = cljs.core.async.impl.dispatch.tasks.pop();
if((m_56445 == null)){
} else {
m_56445.call(null);

if((count_56444 < cljs.core.async.impl.dispatch.TASK_BATCH_SIZE)){
var G__56446 = (count_56444 + (1));
count_56444 = G__56446;
=======
var count_76335 = (0);
while(true){
var m_76336 = cljs.core.async.impl.dispatch.tasks.pop();
if((m_76336 == null)){
} else {
m_76336.call(null);

if((count_76335 < cljs.core.async.impl.dispatch.TASK_BATCH_SIZE)){
var G__76337 = (count_76335 + (1));
count_76335 = G__76337;
>>>>>>> sqlite
continue;
} else {
}
}
break;
}

cljs.core.async.impl.dispatch.running_QMARK_ = false;

if((cljs.core.async.impl.dispatch.tasks.length > (0))){
return cljs.core.async.impl.dispatch.queue_dispatcher.call(null);
} else {
return null;
}
});
cljs.core.async.impl.dispatch.queue_dispatcher = (function cljs$core$async$impl$dispatch$queue_dispatcher(){
if(((cljs.core.async.impl.dispatch.queued_QMARK_) && (cljs.core.async.impl.dispatch.running_QMARK_))){
return null;
} else {
cljs.core.async.impl.dispatch.queued_QMARK_ = true;

return goog.async.nextTick(cljs.core.async.impl.dispatch.process_messages);
}
});
cljs.core.async.impl.dispatch.run = (function cljs$core$async$impl$dispatch$run(f){
cljs.core.async.impl.dispatch.tasks.unbounded_unshift(f);

return cljs.core.async.impl.dispatch.queue_dispatcher.call(null);
});
cljs.core.async.impl.dispatch.queue_delay = (function cljs$core$async$impl$dispatch$queue_delay(f,delay){
return setTimeout(f,delay);
});

<<<<<<< HEAD
//# sourceMappingURL=dispatch.js.map?rel=1525389493683
=======
//# sourceMappingURL=dispatch.js.map?rel=1525389580103
>>>>>>> sqlite
