// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.tools.reader.impl.errors');
goog.require('cljs.core');
goog.require('cljs.tools.reader.reader_types');
goog.require('clojure.string');
goog.require('cljs.tools.reader.impl.inspect');
cljs.tools.reader.impl.errors.ex_details = (function cljs$tools$reader$impl$errors$ex_details(rdr,ex_type){
var details = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098),new cljs.core.Keyword(null,"ex-kind","ex-kind",1581199296),ex_type], null);
if(cljs.core.truth_(cljs.tools.reader.reader_types.indexing_reader_QMARK_.call(null,rdr))){
return cljs.core.assoc.call(null,details,new cljs.core.Keyword(null,"file","file",-1269645878),cljs.tools.reader.reader_types.get_file_name.call(null,rdr),new cljs.core.Keyword(null,"line","line",212345235),cljs.tools.reader.reader_types.get_line_number.call(null,rdr),new cljs.core.Keyword(null,"col","col",-1959363084),cljs.tools.reader.reader_types.get_column_number.call(null,rdr));
} else {
return details;
}
});
/**
 * Throw an ex-info error.
 */
cljs.tools.reader.impl.errors.throw_ex = (function cljs$tools$reader$impl$errors$throw_ex(var_args){
var args__4502__auto__ = [];
<<<<<<< HEAD
var len__4499__auto___56746 = arguments.length;
var i__4500__auto___56747 = (0);
while(true){
if((i__4500__auto___56747 < len__4499__auto___56746)){
args__4502__auto__.push((arguments[i__4500__auto___56747]));

var G__56748 = (i__4500__auto___56747 + (1));
i__4500__auto___56747 = G__56748;
=======
var len__4499__auto___76632 = arguments.length;
var i__4500__auto___76633 = (0);
while(true){
if((i__4500__auto___76633 < len__4499__auto___76632)){
args__4502__auto__.push((arguments[i__4500__auto___76633]));

var G__76634 = (i__4500__auto___76633 + (1));
i__4500__auto___76633 = G__76634;
>>>>>>> sqlite
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return cljs.tools.reader.impl.errors.throw_ex.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

cljs.tools.reader.impl.errors.throw_ex.cljs$core$IFn$_invoke$arity$variadic = (function (rdr,ex_type,msg){
var details = cljs.tools.reader.impl.errors.ex_details.call(null,rdr,ex_type);
var file = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(details);
var line = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(details);
var col = new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(details);
var msg1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)," "].join(''):null);
var msg2 = (cljs.core.truth_(line)?["[line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),", col ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(col),"]"].join(''):null);
var msg3 = (cljs.core.truth_((function (){var or__3922__auto__ = msg1;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return msg2;
}
})())?" ":null);
var full_msg = cljs.core.apply.call(null,cljs.core.str,msg1,msg2,msg3,msg);
throw cljs.core.ex_info.call(null,full_msg,details);
});

cljs.tools.reader.impl.errors.throw_ex.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
<<<<<<< HEAD
cljs.tools.reader.impl.errors.throw_ex.cljs$lang$applyTo = (function (seq56743){
var G__56744 = cljs.core.first.call(null,seq56743);
var seq56743__$1 = cljs.core.next.call(null,seq56743);
var G__56745 = cljs.core.first.call(null,seq56743__$1);
var seq56743__$2 = cljs.core.next.call(null,seq56743__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56744,G__56745,seq56743__$2);
=======
cljs.tools.reader.impl.errors.throw_ex.cljs$lang$applyTo = (function (seq76629){
var G__76630 = cljs.core.first.call(null,seq76629);
var seq76629__$1 = cljs.core.next.call(null,seq76629);
var G__76631 = cljs.core.first.call(null,seq76629__$1);
var seq76629__$2 = cljs.core.next.call(null,seq76629__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__76630,G__76631,seq76629__$2);
>>>>>>> sqlite
});

/**
 * Throws an ExceptionInfo with the given message.
 * If rdr is an IndexingReader, additional information about column and line number is provided
 */
cljs.tools.reader.impl.errors.reader_error = (function cljs$tools$reader$impl$errors$reader_error(var_args){
var args__4502__auto__ = [];
<<<<<<< HEAD
var len__4499__auto___56751 = arguments.length;
var i__4500__auto___56752 = (0);
while(true){
if((i__4500__auto___56752 < len__4499__auto___56751)){
args__4502__auto__.push((arguments[i__4500__auto___56752]));

var G__56753 = (i__4500__auto___56752 + (1));
i__4500__auto___56752 = G__56753;
=======
var len__4499__auto___76637 = arguments.length;
var i__4500__auto___76638 = (0);
while(true){
if((i__4500__auto___76638 < len__4499__auto___76637)){
args__4502__auto__.push((arguments[i__4500__auto___76638]));

var G__76639 = (i__4500__auto___76638 + (1));
i__4500__auto___76638 = G__76639;
>>>>>>> sqlite
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.tools.reader.impl.errors.reader_error.cljs$core$IFn$_invoke$arity$variadic = (function (rdr,msgs){
return cljs.tools.reader.impl.errors.throw_ex.call(null,rdr,new cljs.core.Keyword(null,"reader-error","reader-error",1610253121),cljs.core.apply.call(null,cljs.core.str,msgs));
});

cljs.tools.reader.impl.errors.reader_error.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
<<<<<<< HEAD
cljs.tools.reader.impl.errors.reader_error.cljs$lang$applyTo = (function (seq56749){
var G__56750 = cljs.core.first.call(null,seq56749);
var seq56749__$1 = cljs.core.next.call(null,seq56749);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56750,seq56749__$1);
=======
cljs.tools.reader.impl.errors.reader_error.cljs$lang$applyTo = (function (seq76635){
var G__76636 = cljs.core.first.call(null,seq76635);
var seq76635__$1 = cljs.core.next.call(null,seq76635);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__76636,seq76635__$1);
>>>>>>> sqlite
});

/**
 * Throws an ExceptionInfo with the given message.
 * If rdr is an IndexingReader, additional information about column and line number is provided
 */
cljs.tools.reader.impl.errors.illegal_arg_error = (function cljs$tools$reader$impl$errors$illegal_arg_error(var_args){
var args__4502__auto__ = [];
<<<<<<< HEAD
var len__4499__auto___56756 = arguments.length;
var i__4500__auto___56757 = (0);
while(true){
if((i__4500__auto___56757 < len__4499__auto___56756)){
args__4502__auto__.push((arguments[i__4500__auto___56757]));

var G__56758 = (i__4500__auto___56757 + (1));
i__4500__auto___56757 = G__56758;
=======
var len__4499__auto___76642 = arguments.length;
var i__4500__auto___76643 = (0);
while(true){
if((i__4500__auto___76643 < len__4499__auto___76642)){
args__4502__auto__.push((arguments[i__4500__auto___76643]));

var G__76644 = (i__4500__auto___76643 + (1));
i__4500__auto___76643 = G__76644;
>>>>>>> sqlite
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.tools.reader.impl.errors.illegal_arg_error.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.tools.reader.impl.errors.illegal_arg_error.cljs$core$IFn$_invoke$arity$variadic = (function (rdr,msgs){
return cljs.tools.reader.impl.errors.throw_ex.call(null,rdr,new cljs.core.Keyword(null,"illegal-argument","illegal-argument",-1845493170),cljs.core.apply.call(null,cljs.core.str,msgs));
});

cljs.tools.reader.impl.errors.illegal_arg_error.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
<<<<<<< HEAD
cljs.tools.reader.impl.errors.illegal_arg_error.cljs$lang$applyTo = (function (seq56754){
var G__56755 = cljs.core.first.call(null,seq56754);
var seq56754__$1 = cljs.core.next.call(null,seq56754);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56755,seq56754__$1);
=======
cljs.tools.reader.impl.errors.illegal_arg_error.cljs$lang$applyTo = (function (seq76640){
var G__76641 = cljs.core.first.call(null,seq76640);
var seq76640__$1 = cljs.core.next.call(null,seq76640);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__76641,seq76640__$1);
>>>>>>> sqlite
});

/**
 * Throws an ExceptionInfo with the given message.
 * If rdr is an IndexingReader, additional information about column and line number is provided
 */
cljs.tools.reader.impl.errors.eof_error = (function cljs$tools$reader$impl$errors$eof_error(var_args){
var args__4502__auto__ = [];
<<<<<<< HEAD
var len__4499__auto___56761 = arguments.length;
var i__4500__auto___56762 = (0);
while(true){
if((i__4500__auto___56762 < len__4499__auto___56761)){
args__4502__auto__.push((arguments[i__4500__auto___56762]));

var G__56763 = (i__4500__auto___56762 + (1));
i__4500__auto___56762 = G__56763;
=======
var len__4499__auto___76647 = arguments.length;
var i__4500__auto___76648 = (0);
while(true){
if((i__4500__auto___76648 < len__4499__auto___76647)){
args__4502__auto__.push((arguments[i__4500__auto___76648]));

var G__76649 = (i__4500__auto___76648 + (1));
i__4500__auto___76648 = G__76649;
>>>>>>> sqlite
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.tools.reader.impl.errors.eof_error.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.tools.reader.impl.errors.eof_error.cljs$core$IFn$_invoke$arity$variadic = (function (rdr,msgs){
return cljs.tools.reader.impl.errors.throw_ex.call(null,rdr,new cljs.core.Keyword(null,"eof","eof",-489063237),cljs.core.apply.call(null,cljs.core.str,msgs));
});

cljs.tools.reader.impl.errors.eof_error.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
<<<<<<< HEAD
cljs.tools.reader.impl.errors.eof_error.cljs$lang$applyTo = (function (seq56759){
var G__56760 = cljs.core.first.call(null,seq56759);
var seq56759__$1 = cljs.core.next.call(null,seq56759);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56760,seq56759__$1);
});

cljs.tools.reader.impl.errors.throw_eof_delimited = (function cljs$tools$reader$impl$errors$throw_eof_delimited(var_args){
var G__56765 = arguments.length;
switch (G__56765) {
=======
cljs.tools.reader.impl.errors.eof_error.cljs$lang$applyTo = (function (seq76645){
var G__76646 = cljs.core.first.call(null,seq76645);
var seq76645__$1 = cljs.core.next.call(null,seq76645);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__76646,seq76645__$1);
});

cljs.tools.reader.impl.errors.throw_eof_delimited = (function cljs$tools$reader$impl$errors$throw_eof_delimited(var_args){
var G__76651 = arguments.length;
switch (G__76651) {
>>>>>>> sqlite
case 4:
return cljs.tools.reader.impl.errors.throw_eof_delimited.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.tools.reader.impl.errors.throw_eof_delimited.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.tools.reader.impl.errors.throw_eof_delimited.cljs$core$IFn$_invoke$arity$4 = (function (rdr,kind,column,line){
return cljs.tools.reader.impl.errors.throw_eof_delimited.call(null,rdr,kind,line,column,null);
});

cljs.tools.reader.impl.errors.throw_eof_delimited.cljs$core$IFn$_invoke$arity$5 = (function (rdr,kind,line,column,n){
return cljs.tools.reader.impl.errors.eof_error.call(null,rdr,"Unexpected EOF while reading ",(cljs.core.truth_(n)?["item ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)," of "].join(''):null),cljs.core.name.call(null,kind),(cljs.core.truth_(line)?[", starting at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)," and column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):null),".");
});

cljs.tools.reader.impl.errors.throw_eof_delimited.cljs$lang$maxFixedArity = 5;

cljs.tools.reader.impl.errors.throw_odd_map = (function cljs$tools$reader$impl$errors$throw_odd_map(rdr,line,col,elements){
return cljs.tools.reader.impl.errors.reader_error.call(null,rdr,"The map literal starting with ",cljs.tools.reader.impl.inspect.inspect.call(null,cljs.core.first.call(null,elements)),(cljs.core.truth_(line)?[" on line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)," column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join(''):null)," contains ",cljs.core.count.call(null,elements)," form(s). Map literals must contain an even number of forms.");
});
cljs.tools.reader.impl.errors.throw_invalid_number = (function cljs$tools$reader$impl$errors$throw_invalid_number(rdr,token){
return cljs.tools.reader.impl.errors.reader_error.call(null,rdr,"Invalid number: ",token,".");
});
cljs.tools.reader.impl.errors.throw_invalid_unicode_literal = (function cljs$tools$reader$impl$errors$throw_invalid_unicode_literal(rdr,token){
throw cljs.tools.reader.impl.errors.illegal_arg_error.call(null,rdr,"Invalid unicode literal: \\",token,".");
});
cljs.tools.reader.impl.errors.throw_invalid_unicode_escape = (function cljs$tools$reader$impl$errors$throw_invalid_unicode_escape(rdr,ch){
return cljs.tools.reader.impl.errors.reader_error.call(null,rdr,"Invalid unicode escape: \\u",ch,".");
});
cljs.tools.reader.impl.errors.throw_invalid = (function cljs$tools$reader$impl$errors$throw_invalid(rdr,kind,token){
return cljs.tools.reader.impl.errors.reader_error.call(null,rdr,"Invalid ",cljs.core.name.call(null,kind),": ",token,".");
});
cljs.tools.reader.impl.errors.throw_eof_at_start = (function cljs$tools$reader$impl$errors$throw_eof_at_start(rdr,kind){
return cljs.tools.reader.impl.errors.eof_error.call(null,rdr,"Unexpected EOF while reading start of ",cljs.core.name.call(null,kind),".");
});
cljs.tools.reader.impl.errors.throw_bad_char = (function cljs$tools$reader$impl$errors$throw_bad_char(rdr,kind,ch){
return cljs.tools.reader.impl.errors.reader_error.call(null,rdr,"Invalid character: ",ch," found while reading ",cljs.core.name.call(null,kind),".");
});
cljs.tools.reader.impl.errors.throw_eof_at_dispatch = (function cljs$tools$reader$impl$errors$throw_eof_at_dispatch(rdr){
return cljs.tools.reader.impl.errors.eof_error.call(null,rdr,"Unexpected EOF while reading dispatch character.");
});
cljs.tools.reader.impl.errors.throw_bad_dispatch = (function cljs$tools$reader$impl$errors$throw_bad_dispatch(rdr,ch){
return cljs.tools.reader.impl.errors.reader_error.call(null,rdr,"No dispatch macro for ",ch,".");
});
cljs.tools.reader.impl.errors.throw_unmatch_delimiter = (function cljs$tools$reader$impl$errors$throw_unmatch_delimiter(rdr,ch){
return cljs.tools.reader.impl.errors.reader_error.call(null,rdr,"Unmatched delimiter ",ch,".");
});
cljs.tools.reader.impl.errors.throw_eof_reading = (function cljs$tools$reader$impl$errors$throw_eof_reading(var_args){
var args__4502__auto__ = [];
<<<<<<< HEAD
var len__4499__auto___56771 = arguments.length;
var i__4500__auto___56772 = (0);
while(true){
if((i__4500__auto___56772 < len__4499__auto___56771)){
args__4502__auto__.push((arguments[i__4500__auto___56772]));

var G__56773 = (i__4500__auto___56772 + (1));
i__4500__auto___56772 = G__56773;
=======
var len__4499__auto___76657 = arguments.length;
var i__4500__auto___76658 = (0);
while(true){
if((i__4500__auto___76658 < len__4499__auto___76657)){
args__4502__auto__.push((arguments[i__4500__auto___76658]));

var G__76659 = (i__4500__auto___76658 + (1));
i__4500__auto___76658 = G__76659;
>>>>>>> sqlite
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return cljs.tools.reader.impl.errors.throw_eof_reading.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

cljs.tools.reader.impl.errors.throw_eof_reading.cljs$core$IFn$_invoke$arity$variadic = (function (rdr,kind,start){
<<<<<<< HEAD
var init = (function (){var G__56770 = kind;
var G__56770__$1 = (((G__56770 instanceof cljs.core.Keyword))?G__56770.fqn:null);
switch (G__56770__$1) {
=======
var init = (function (){var G__76656 = kind;
var G__76656__$1 = (((G__76656 instanceof cljs.core.Keyword))?G__76656.fqn:null);
switch (G__76656__$1) {
>>>>>>> sqlite
case "regex":
return "#\"";

break;
case "string":
return "\"";

break;
default:
<<<<<<< HEAD
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56770__$1)].join('')));
=======
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__76656__$1)].join('')));
>>>>>>> sqlite

}
})();
return cljs.tools.reader.impl.errors.eof_error.call(null,rdr,"Unexpected EOF reading ",cljs.core.name.call(null,kind)," starting ",cljs.core.apply.call(null,cljs.core.str,init,start),".");
});

cljs.tools.reader.impl.errors.throw_eof_reading.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
<<<<<<< HEAD
cljs.tools.reader.impl.errors.throw_eof_reading.cljs$lang$applyTo = (function (seq56767){
var G__56768 = cljs.core.first.call(null,seq56767);
var seq56767__$1 = cljs.core.next.call(null,seq56767);
var G__56769 = cljs.core.first.call(null,seq56767__$1);
var seq56767__$2 = cljs.core.next.call(null,seq56767__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56768,G__56769,seq56767__$2);
=======
cljs.tools.reader.impl.errors.throw_eof_reading.cljs$lang$applyTo = (function (seq76653){
var G__76654 = cljs.core.first.call(null,seq76653);
var seq76653__$1 = cljs.core.next.call(null,seq76653);
var G__76655 = cljs.core.first.call(null,seq76653__$1);
var seq76653__$2 = cljs.core.next.call(null,seq76653__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__76654,G__76655,seq76653__$2);
>>>>>>> sqlite
});

cljs.tools.reader.impl.errors.throw_no_dispatch = (function cljs$tools$reader$impl$errors$throw_no_dispatch(rdr,ch){
return cljs.tools.reader.impl.errors.throw_bad_dispatch.call(null,rdr,ch);
});
cljs.tools.reader.impl.errors.throw_invalid_unicode_char = (function cljs$tools$reader$impl$errors$throw_invalid_unicode_char(rdr,token){
return cljs.tools.reader.impl.errors.reader_error.call(null,rdr,"Invalid unicode character \\",token,".");
});
cljs.tools.reader.impl.errors.throw_invalid_unicode_digit_in_token = (function cljs$tools$reader$impl$errors$throw_invalid_unicode_digit_in_token(rdr,ch,token){
return cljs.tools.reader.impl.errors.illegal_arg_error.call(null,rdr,"Invalid digit ",ch," in unicode character \\",token,".");
});
cljs.tools.reader.impl.errors.throw_invalid_unicode_digit = (function cljs$tools$reader$impl$errors$throw_invalid_unicode_digit(rdr,ch){
return cljs.tools.reader.impl.errors.illegal_arg_error.call(null,rdr,"Invalid digit ",ch," in unicode character.");
});
cljs.tools.reader.impl.errors.throw_invalid_unicode_len = (function cljs$tools$reader$impl$errors$throw_invalid_unicode_len(rdr,actual,expected){
return cljs.tools.reader.impl.errors.illegal_arg_error.call(null,rdr,"Invalid unicode literal. Unicode literals should be ",expected,"characters long.  ","value suppled is ",actual,"characters long.");
});
cljs.tools.reader.impl.errors.throw_invalid_character_literal = (function cljs$tools$reader$impl$errors$throw_invalid_character_literal(rdr,token){
return cljs.tools.reader.impl.errors.reader_error.call(null,rdr,"Invalid character literal \\u",token,".");
});
cljs.tools.reader.impl.errors.throw_invalid_octal_len = (function cljs$tools$reader$impl$errors$throw_invalid_octal_len(rdr,token){
return cljs.tools.reader.impl.errors.reader_error.call(null,rdr,"Invalid octal escape sequence in a character literal:",token,". Octal escape sequences must be 3 or fewer digits.");
});
cljs.tools.reader.impl.errors.throw_bad_octal_number = (function cljs$tools$reader$impl$errors$throw_bad_octal_number(rdr){
return cljs.tools.reader.impl.errors.reader_error.call(null,rdr,"Octal escape sequence must be in range [0, 377].");
});
cljs.tools.reader.impl.errors.throw_unsupported_character = (function cljs$tools$reader$impl$errors$throw_unsupported_character(rdr,token){
return cljs.tools.reader.impl.errors.reader_error.call(null,rdr,"Unsupported character: ",token,".");
});
cljs.tools.reader.impl.errors.throw_eof_in_character = (function cljs$tools$reader$impl$errors$throw_eof_in_character(rdr){
return cljs.tools.reader.impl.errors.eof_error.call(null,rdr,"Unexpected EOF while reading character.");
});
cljs.tools.reader.impl.errors.throw_bad_escape_char = (function cljs$tools$reader$impl$errors$throw_bad_escape_char(rdr,ch){
return cljs.tools.reader.impl.errors.reader_error.call(null,rdr,"Unsupported escape character: \\",ch,".");
});
cljs.tools.reader.impl.errors.throw_single_colon = (function cljs$tools$reader$impl$errors$throw_single_colon(rdr){
return cljs.tools.reader.impl.errors.reader_error.call(null,rdr,"A single colon is not a valid keyword.");
});
cljs.tools.reader.impl.errors.throw_bad_metadata = (function cljs$tools$reader$impl$errors$throw_bad_metadata(rdr,x){
return cljs.tools.reader.impl.errors.reader_error.call(null,rdr,"Metadata cannot be ",cljs.tools.reader.impl.inspect.inspect.call(null,x),". Metadata must be a Symbol, Keyword, String or Map.");
});
cljs.tools.reader.impl.errors.throw_bad_metadata_target = (function cljs$tools$reader$impl$errors$throw_bad_metadata_target(rdr,target){
return cljs.tools.reader.impl.errors.reader_error.call(null,rdr,"Metadata can not be applied to ",cljs.tools.reader.impl.inspect.inspect.call(null,target),". ","Metadata can only be applied to IMetas.");
});
cljs.tools.reader.impl.errors.throw_feature_not_keyword = (function cljs$tools$reader$impl$errors$throw_feature_not_keyword(rdr,feature){
return cljs.tools.reader.impl.errors.reader_error.call(null,rdr,"Feature cannot be ",cljs.tools.reader.impl.inspect.inspect.call(null,feature)," Features must be keywords.");
});
cljs.tools.reader.impl.errors.throw_ns_map_no_map = (function cljs$tools$reader$impl$errors$throw_ns_map_no_map(rdr,ns_name){
return cljs.tools.reader.impl.errors.reader_error.call(null,rdr,"Namespaced map with namespace ",ns_name," does not specify a map.");
});
cljs.tools.reader.impl.errors.throw_bad_ns = (function cljs$tools$reader$impl$errors$throw_bad_ns(rdr,ns_name){
return cljs.tools.reader.impl.errors.reader_error.call(null,rdr,"Invalid value used as namespace in namespaced map: ",ns_name,".");
});
cljs.tools.reader.impl.errors.throw_bad_reader_tag = (function cljs$tools$reader$impl$errors$throw_bad_reader_tag(rdr,tag){
return cljs.tools.reader.impl.errors.reader_error.call(null,rdr,"Invalid reader tag: ",cljs.tools.reader.impl.inspect.inspect.call(null,tag),". Reader tags must be symbols.");
});
cljs.tools.reader.impl.errors.throw_unknown_reader_tag = (function cljs$tools$reader$impl$errors$throw_unknown_reader_tag(rdr,tag){
return cljs.tools.reader.impl.errors.reader_error.call(null,rdr,"No reader function for tag ",cljs.tools.reader.impl.inspect.inspect.call(null,tag),".");
});
cljs.tools.reader.impl.errors.duplicate_keys_error = (function cljs$tools$reader$impl$errors$duplicate_keys_error(msg,coll){
var duplicates = (function cljs$tools$reader$impl$errors$duplicate_keys_error_$_duplicates(seq){
<<<<<<< HEAD
var iter__4292__auto__ = (function cljs$tools$reader$impl$errors$duplicate_keys_error_$_duplicates_$_iter__56785(s__56786){
return (new cljs.core.LazySeq(null,(function (){
var s__56786__$1 = s__56786;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__56786__$1);
if(temp__5457__auto__){
var s__56786__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__56786__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__56786__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__56788 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__56787 = (0);
while(true){
if((i__56787 < size__4291__auto__)){
var vec__56789 = cljs.core._nth.call(null,c__4290__auto__,i__56787);
var id = cljs.core.nth.call(null,vec__56789,(0),null);
var freq = cljs.core.nth.call(null,vec__56789,(1),null);
if((freq > (1))){
cljs.core.chunk_append.call(null,b__56788,id);

var G__56795 = (i__56787 + (1));
i__56787 = G__56795;
continue;
} else {
var G__56796 = (i__56787 + (1));
i__56787 = G__56796;
=======
var iter__4292__auto__ = (function cljs$tools$reader$impl$errors$duplicate_keys_error_$_duplicates_$_iter__76671(s__76672){
return (new cljs.core.LazySeq(null,(function (){
var s__76672__$1 = s__76672;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__76672__$1);
if(temp__5457__auto__){
var s__76672__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__76672__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__76672__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__76674 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__76673 = (0);
while(true){
if((i__76673 < size__4291__auto__)){
var vec__76675 = cljs.core._nth.call(null,c__4290__auto__,i__76673);
var id = cljs.core.nth.call(null,vec__76675,(0),null);
var freq = cljs.core.nth.call(null,vec__76675,(1),null);
if((freq > (1))){
cljs.core.chunk_append.call(null,b__76674,id);

var G__76681 = (i__76673 + (1));
i__76673 = G__76681;
continue;
} else {
var G__76682 = (i__76673 + (1));
i__76673 = G__76682;
>>>>>>> sqlite
continue;
}
} else {
return true;
}
break;
}
})()){
<<<<<<< HEAD
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__56788),cljs$tools$reader$impl$errors$duplicate_keys_error_$_duplicates_$_iter__56785.call(null,cljs.core.chunk_rest.call(null,s__56786__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__56788),null);
}
} else {
var vec__56792 = cljs.core.first.call(null,s__56786__$2);
var id = cljs.core.nth.call(null,vec__56792,(0),null);
var freq = cljs.core.nth.call(null,vec__56792,(1),null);
if((freq > (1))){
return cljs.core.cons.call(null,id,cljs$tools$reader$impl$errors$duplicate_keys_error_$_duplicates_$_iter__56785.call(null,cljs.core.rest.call(null,s__56786__$2)));
} else {
var G__56797 = cljs.core.rest.call(null,s__56786__$2);
s__56786__$1 = G__56797;
=======
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__76674),cljs$tools$reader$impl$errors$duplicate_keys_error_$_duplicates_$_iter__76671.call(null,cljs.core.chunk_rest.call(null,s__76672__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__76674),null);
}
} else {
var vec__76678 = cljs.core.first.call(null,s__76672__$2);
var id = cljs.core.nth.call(null,vec__76678,(0),null);
var freq = cljs.core.nth.call(null,vec__76678,(1),null);
if((freq > (1))){
return cljs.core.cons.call(null,id,cljs$tools$reader$impl$errors$duplicate_keys_error_$_duplicates_$_iter__76671.call(null,cljs.core.rest.call(null,s__76672__$2)));
} else {
var G__76683 = cljs.core.rest.call(null,s__76672__$2);
s__76672__$1 = G__76683;
>>>>>>> sqlite
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,cljs.core.frequencies.call(null,seq));
});
var dups = duplicates.call(null,coll);
return cljs.core.apply.call(null,cljs.core.str,msg,(((cljs.core.count.call(null,dups) > (1)))?"s":null),": ",cljs.core.interpose.call(null,", ",dups));
});
cljs.tools.reader.impl.errors.throw_dup_keys = (function cljs$tools$reader$impl$errors$throw_dup_keys(rdr,kind,ks){
return cljs.tools.reader.impl.errors.reader_error.call(null,rdr,cljs.tools.reader.impl.errors.duplicate_keys_error.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.capitalize.call(null,cljs.core.name.call(null,kind)))," literal contains duplicate key"].join(''),ks));
});
cljs.tools.reader.impl.errors.throw_eof_error = (function cljs$tools$reader$impl$errors$throw_eof_error(rdr,line){
if(cljs.core.truth_(line)){
return cljs.tools.reader.impl.errors.eof_error.call(null,rdr,"EOF while reading, starting at line ",line,".");
} else {
return cljs.tools.reader.impl.errors.eof_error.call(null,rdr,"EOF while reading.");
}
});

<<<<<<< HEAD
//# sourceMappingURL=errors.js.map?rel=1525389494475
=======
//# sourceMappingURL=errors.js.map?rel=1525389580895
>>>>>>> sqlite
