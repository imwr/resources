var XRegExp,SyntaxHighlighter;if(XRegExp)throw Error("can't load XRegExp twice in the same frame");!function(){function a(a,c){if(!XRegExp.isRegExp(a))throw TypeError("type RegExp expected");var d=a._xregexp;return a=XRegExp(a.source,b(a)+(c||"")),d&&(a._xregexp={source:d.source,captureNames:d.captureNames?d.captureNames.slice(0):null}),a}function b(a){return(a.global?"g":"")+(a.ignoreCase?"i":"")+(a.multiline?"m":"")+(a.extended?"x":"")+(a.sticky?"y":"")}function c(a,b,c,d){var f,g,j,e=i.length;h=!0;try{for(;e--;)if(j=i[e],c&j.scope&&(!j.trigger||j.trigger.call(d))&&(j.pattern.lastIndex=b,(g=j.pattern.exec(a))&&g.index===b)){f={output:j.handler.call(d,g,c),match:g};break}}catch(k){throw k}finally{h=!1}return f}function d(a,b,c){if(Array.prototype.indexOf)return a.indexOf(b,c);for(c=c||0;c<a.length;c++)if(a[c]===b)return c;return-1}XRegExp=function(b,d){var k,l,e=[],g=XRegExp.OUTSIDE_CLASS,i=0;if(XRegExp.isRegExp(b)){if(void 0!==d)throw TypeError("can't supply flags when constructing one RegExp from another");return a(b)}if(h)throw Error("can't call the XRegExp constructor within token definition functions");for(d=d||"",k={hasNamedCapture:!1,captureNames:[],hasFlag:function(a){return d.indexOf(a)>-1},setFlag:function(a){d+=a}};i<b.length;)(l=c(b,i,g,k))?(e.push(l.output),i+=l.match[0].length||1):(l=j.exec.call(o[g],b.slice(i)))?(e.push(l[0]),i+=l[0].length):(l=b.charAt(i),"["===l?g=XRegExp.INSIDE_CLASS:"]"===l&&(g=XRegExp.OUTSIDE_CLASS),e.push(l),i++);return e=RegExp(e.join(""),j.replace.call(d,f,"")),e._xregexp={source:b,captureNames:k.hasNamedCapture?k.captureNames:null},e},XRegExp.version="1.5.0",XRegExp.INSIDE_CLASS=1,XRegExp.OUTSIDE_CLASS=2;var e=/\$(?:(\d\d?|[$&`'])|{([$\w]+)})/g,f=/[^gimy]+|([\s\S])(?=[\s\S]*\1)/g,g=/^(?:[?*+]|{\d+(?:,\d*)?})\??/,h=!1,i=[],j={exec:RegExp.prototype.exec,test:RegExp.prototype.test,match:String.prototype.match,replace:String.prototype.replace,split:String.prototype.split},k=void 0===j.exec.call(/()??/,"")[1],l=function(){var a=/^/g;return j.test.call(a,""),!a.lastIndex}(),m=function(){var a=/x/g;return j.replace.call("x",a,""),!a.lastIndex}(),n=void 0!==RegExp.prototype.sticky,o={};o[XRegExp.INSIDE_CLASS]=/^(?:\\(?:[0-3][0-7]{0,2}|[4-7][0-7]?|x[\dA-Fa-f]{2}|u[\dA-Fa-f]{4}|c[A-Za-z]|[\s\S]))/,o[XRegExp.OUTSIDE_CLASS]=/^(?:\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9]\d*|x[\dA-Fa-f]{2}|u[\dA-Fa-f]{4}|c[A-Za-z]|[\s\S])|\(\?[:=!]|[?*+]\?|{\d+(?:,\d*)?}\??)/,XRegExp.addToken=function(b,c,d,e){i.push({pattern:a(b,"g"+(n?"y":"")),handler:c,scope:d||XRegExp.OUTSIDE_CLASS,trigger:e||null})},XRegExp.cache=function(a,b){var c=a+"/"+(b||"");return XRegExp.cache[c]||(XRegExp.cache[c]=XRegExp(a,b))},XRegExp.copyAsGlobal=function(b){return a(b,"g")},XRegExp.escape=function(a){return a.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")},XRegExp.execAt=function(b,c,d,e){return c=a(c,"g"+(e&&n?"y":"")),c.lastIndex=d=d||0,b=c.exec(b),e?b&&b.index===d?b:null:b},XRegExp.freezeTokens=function(){XRegExp.addToken=function(){throw Error("can't run addToken after freezeTokens")}},XRegExp.isRegExp=function(a){return"[object RegExp]"===Object.prototype.toString.call(a)},XRegExp.iterate=function(b,c,d,e){for(var h,f=a(c,"g"),g=-1;h=f.exec(b);)d.call(e,h,++g,b,f),f.lastIndex===h.index&&f.lastIndex++;c.global&&(c.lastIndex=0)},XRegExp.matchChain=function(b,c){return function d(b,e){var i,f=c[e].regex?c[e]:{regex:c[e]},g=a(f.regex,"g"),h=[];for(i=0;i<b.length;i++)XRegExp.iterate(b[i],g,function(a){h.push(f.backref?a[f.backref]||"":a[0])});return e!==c.length-1&&h.length?d(h,e+1):h}([b],0)},RegExp.prototype.apply=function(a,b){return this.exec(b[0])},RegExp.prototype.call=function(a,b){return this.exec(b)},RegExp.prototype.exec=function(a){var e,f,c=j.exec.apply(this,arguments);if(c){if(!k&&c.length>1&&d(c,"")>-1&&(e=RegExp(this.source,j.replace.call(b(this),"g","")),j.replace.call(a.slice(c.index),e,function(){for(var a=1;a<arguments.length-2;a++)void 0===arguments[a]&&(c[a]=void 0)})),this._xregexp&&this._xregexp.captureNames)for(f=1;f<c.length;f++)(e=this._xregexp.captureNames[f-1])&&(c[e]=c[f]);!l&&this.global&&!c[0].length&&this.lastIndex>c.index&&this.lastIndex--}return c},l||(RegExp.prototype.test=function(a){return(a=j.exec.call(this,a))&&this.global&&!a[0].length&&this.lastIndex>a.index&&this.lastIndex--,!!a}),String.prototype.match=function(a){if(XRegExp.isRegExp(a)||(a=RegExp(a)),a.global){var b=j.match.apply(this,arguments);return a.lastIndex=0,b}return a.exec(this)},String.prototype.replace=function(a,b){var f,g,c=XRegExp.isRegExp(a);return c&&"string"==typeof b.valueOf()&&-1===b.indexOf("${")&&m?j.replace.apply(this,arguments):(c?a._xregexp&&(f=a._xregexp.captureNames):a+="","function"==typeof b?g=j.replace.call(this,a,function(){if(f){arguments[0]=new String(arguments[0]);for(var d=0;d<f.length;d++)f[d]&&(arguments[0][f[d]]=arguments[d+1])}return c&&a.global&&(a.lastIndex=arguments[arguments.length-2]+arguments[0].length),b.apply(null,arguments)}):(g=this+"",g=j.replace.call(g,a,function(){var a=arguments;return j.replace.call(b,e,function(b,c,e){if(!c)return c=+e,c<=a.length-3?a[c]:(c=f?d(f,e):-1,c>-1?a[c+1]:b);switch(c){case"$":return"$";case"&":return a[0];case"`":return a[a.length-1].slice(0,a[a.length-2]);case"'":return a[a.length-1].slice(a[a.length-2]+a[0].length);default:if(e="",c=+c,!c)return b;for(;c>a.length-3;)e=String.prototype.slice.call(c,-1)+e,c=Math.floor(c/10);return(c?a[c]||"":"$")+e}})})),c&&a.global&&(a.lastIndex=0),g)},String.prototype.split=function(a,b){if(!XRegExp.isRegExp(a))return j.split.apply(this,arguments);var f,g,c=this+"",d=[],e=0;if(void 0===b||0>+b)b=1/0;else if(b=Math.floor(+b),!b)return[];for(a=XRegExp.copyAsGlobal(a);(f=a.exec(c))&&!(a.lastIndex>e&&(d.push(c.slice(e,f.index)),f.length>1&&f.index<c.length&&Array.prototype.push.apply(d,f.slice(1)),g=f[0].length,e=a.lastIndex,d.length>=b));)a.lastIndex===f.index&&a.lastIndex++;return e===c.length?(!j.test.call(a,"")||g)&&d.push(""):d.push(c.slice(e)),d.length>b?d.slice(0,b):d},XRegExp.addToken(/\(\?#[^)]*\)/,function(a){return j.test.call(g,a.input.slice(a.index+a[0].length))?"":"(?:)"}),XRegExp.addToken(/\((?!\?)/,function(){return this.captureNames.push(null),"("}),XRegExp.addToken(/\(\?<([$\w]+)>/,function(a){return this.captureNames.push(a[1]),this.hasNamedCapture=!0,"("}),XRegExp.addToken(/\\k<([\w$]+)>/,function(a){var b=d(this.captureNames,a[1]);return b>-1?"\\"+(b+1)+(isNaN(a.input.charAt(a.index+a[0].length))?"":"(?:)"):a[0]}),XRegExp.addToken(/\[\^?]/,function(a){return"[]"===a[0]?"\\b\\B":"[\\s\\S]"}),XRegExp.addToken(/^\(\?([imsx]+)\)/,function(a){return this.setFlag(a[1]),""}),XRegExp.addToken(/(?:\s+|#.*)+/,function(a){return j.test.call(g,a.input.slice(a.index+a[0].length))?"":"(?:)"},XRegExp.OUTSIDE_CLASS,function(){return this.hasFlag("x")}),XRegExp.addToken(/\./,function(){return"[\\s\\S]"},XRegExp.OUTSIDE_CLASS,function(){return this.hasFlag("s")})}(),"undefined"!=typeof exports&&(exports.XRegExp=XRegExp),SyntaxHighlighter=function(){function a(a,b){-1!=a.className.indexOf(b)||(a.className+=" "+b)}function b(a){return 0==a.indexOf("highlighter_")?a:"highlighter_"+a}function c(a){return q.vars.highlighters[b(a)]}function d(a,b,c){if(null==a)return null;var g,h,e=1!=c?a.childNodes:[a.parentNode],f={"#":"id",".":"className"}[b.substr(0,1)]||"nodeName";if(g="nodeName"!=f?b.substr(1):b.toUpperCase(),-1!=(a[f]||"").indexOf(g))return a;for(a=0;e&&a<e.length&&null==h;a++)h=d(e[a],b,c);return h}function e(a,b){var d,c={};for(d in a)c[d]=a[d];for(d in b)c[d]=b[d];return c}function f(a,b,c,d){function e(a){a=a||window.event,a.target||(a.target=a.srcElement,a.preventDefault=function(){this.returnValue=!1}),c.call(d||window,a)}a.attachEvent?a.attachEvent("on"+b,e):a.addEventListener(b,e,!1)}function g(a,b){var e,f,c=q.vars.discoveredBrushes,d=null;if(null==c){c={};for(e in q.brushes)if(f=q.brushes[e],d=f.aliases,null!=d)for(f.brushName=e.toLowerCase(),f=0;f<d.length;f++)c[d[f]]=e;q.vars.discoveredBrushes=c}return d=q.brushes[c[a]],null==d&&0!=b&&window.alert(q.config.strings.alert+(q.config.strings.noBrush+a)),d}function h(a,b){for(var c=a.split("\n"),d=0;d<c.length;d++)c[d]=b(c[d],d);return c.join("\n")}function i(a,b){return null==a||0==a.length||"\n"==a?a:(a=a.replace(/</g,"&lt;"),a=a.replace(/ {2,}/g,function(a){for(var b="",c=0;c<a.length-1;c++)b+=q.config.space;return b+" "}),null!=b&&(a=h(a,function(a){if(0==a.length)return"";var c="";return a=a.replace(/^(&nbsp;| )+/,function(a){return c=a,""}),0==a.length?c:c+'<code class="'+b+'">'+a+"</code>"})),a)}function j(a,b){a.split("\n");for(var c="",d=0;50>d;d++)c+="                    ";return a=h(a,function(a){if(-1==a.indexOf("	"))return a;for(var d=0;-1!=(d=a.indexOf("	"));)a=a.substr(0,d)+c.substr(0,b-d%b)+a.substr(d+1,a.length);return a})}function k(a){return a.replace(/^\s+|\s+$/g,"")}function l(a,b){return a.index<b.index?-1:a.index>b.index?1:a.length<b.length?-1:a.length>b.length?1:0}function m(a,b){function c(a){return a[0]}var d,e,f,g;for(d=null,e=[],f=b.func?b.func:c;null!=(d=b.regex.exec(a));)g=f(d,b),"string"==typeof g&&(g=[new q.Match(g,d.index,b.css)]),e=e.concat(g);return e}function n(a){var b=/(.*)((&gt;|&lt;).*)/;return a.replace(q.regexLib.url,function(a){var c="",d=null;return(d=b.exec(a))&&(a=d[1],c=d[2]),'<a href="'+a+'">'+a+"</a>"+c})}function o(){for(var a=document.getElementsByTagName("script"),b=[],c=0;c<a.length;c++)"syntaxhighlighter"==a[c].type&&b.push(a[c]);return b}function p(b){var e,g,h,i,j;if(b=b.target,e=d(b,".syntaxhighlighter",!0),b=d(b,".container",!0),g=document.createElement("textarea"),b&&e&&!d(b,"textarea")){for(c(e.id),a(e,"source"),h=b.childNodes,i=[],j=0;j<h.length;j++)i.push(h[j].innerText||h[j].textContent);i=i.join("\r"),g.appendChild(document.createTextNode(i)),b.appendChild(g),g.focus(),g.select(),f(g,"blur",function(){g.parentNode.removeChild(g),e.className=e.className.replace("source","")})}}"undefined"!=typeof require&&"undefined"==typeof XRegExp&&(XRegExp=require("XRegExp").XRegExp);var q={defaults:{"class-name":"","first-line":1,"pad-line-numbers":!1,highlight:null,title:null,"smart-tabs":!0,"tab-size":4,gutter:!0,toolbar:!0,"quick-code":!0,collapse:!1,"auto-links":!0,light:!1,"html-script":!1},config:{space:"&nbsp;",useScriptTags:!0,bloggerMode:!1,stripBrs:!1,tagName:"pre",strings:{expandSource:"expand source",help:"Help",alert:"SyntaxHighlighter\n\n",noBrush:"Can't find brush for: ",brushNotHtmlScript:"Brush wasn't configured for html-script option: ",aboutDialog:'<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml"><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><title>About SyntaxHighlighter</title></head><body style="font-family:Geneva,Arial,Helvetica,sans-serif;background-color:#fff;color:#000;font-size:1em;text-align:center;"><div style="text-align:center;margin-top:1.5em;"><div style="font-size:xx-large;">SyntaxHighlighter</div><div style="font-size:.75em;margin-bottom:3em;"><div>version 3.0.83 (July 02 2010)</div><div><a href="http://alexgorbatchev.com/SyntaxHighlighter" target="_blank" style="color:#005896">http://alexgorbatchev.com/SyntaxHighlighter</a></div><div>JavaScript code syntax highlighter.</div><div>Copyright 2004-2010 Alex Gorbatchev.</div></div><div>If you like this script, please <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=2930402" style="color:#005896">donate</a> to <br/>keep development active!</div></div></body></html>'}},vars:{discoveredBrushes:null,highlighters:{}},brushes:{},regexLib:{multiLineCComments:/\/\*[\s\S]*?\*\//gm,singleLineCComments:/\/\/.*$/gm,singleLinePerlComments:/#.*$/gm,doubleQuotedString:/"([^\\"\n]|\\.)*"/g,singleQuotedString:/'([^\\'\n]|\\.)*'/g,multiLineDoubleQuotedString:new XRegExp('"([^\\\\"]|\\\\.)*"',"gs"),multiLineSingleQuotedString:new XRegExp("'([^\\\\']|\\\\.)*'","gs"),xmlComments:/(&lt;|<)!--[\s\S]*?--(&gt;|>)/gm,url:/\w+:\/\/[\w-.\/?%&=:@;]*/g,phpScriptTags:{left:/(&lt;|<)\?=?/g,right:/\?(&gt;|>)/g},aspScriptTags:{left:/(&lt;|<)%=?/g,right:/%(&gt;|>)/g},scriptScriptTags:{left:/(&lt;|<)\s*script.*?(&gt;|>)/gi,right:/(&lt;|<)\/\s*script\s*(&gt;|>)/gi}},toolbar:{getHtml:function(a){function b(a,b){return q.toolbar.getButtonHtml(a,b,q.config.strings[b])}for(var c='<div class="toolbar">',d=q.toolbar.items,e=d.list,f=0;f<e.length;f++)c+=(d[e[f]].getHtml||b)(a,e[f]);return c+="</div>"},getButtonHtml:function(a,b,c){return'<span><a href="#" class="toolbar_item command_'+b+" "+b+'">'+c+"</a></span>"},handler:function(a){var f,b=a.target,e=b.className||"";b=c(d(b,".syntaxhighlighter",!0).id),f=function(a){return(a=RegExp(a+"_(\\w+)").exec(e))?a[1]:null}("command"),b&&f&&q.toolbar.items[f].execute(b),a.preventDefault()},items:{list:["expandSource"],expandSource:{getHtml:function(a){if(1!=a.getParam("collapse"))return"";var b=a.getParam("title");return q.toolbar.getButtonHtml(a,"expandSource",b?b:q.config.strings.expandSource)},execute:function(a){a=document.getElementById(b(a.id)),a.className=a.className.replace("collapsed","")}},help:{execute:function(){var b,a="scrollbars=0";a+=", left="+(screen.width-500)/2+", top="+(screen.height-250)/2+", width=500, height=250",a=a.replace(/^,/,""),a=window.open("","_blank",a),a.focus(),b=a.document,b.write(q.config.strings.aboutDialog),b.close(),a.focus()}}}},findElements:function(a,b){var c,d,f,g,h,i,j,k,l,m,n;if(b)c=[b];else{for(c=document.getElementsByTagName(q.config.tagName),d=[],f=0;f<c.length;f++)d.push(c[f]);c=d}if(c=c,d=[],q.config.useScriptTags&&(c=c.concat(o())),0===c.length)return d;for(f=0;f<c.length;f++){for(g=c[f],h=a,i=c[f].className,j=void 0,k={},l=new XRegExp("^\\[(?<values>(.*?))\\]$"),m=new XRegExp("(?<name>[\\w-]+)\\s*:\\s*(?<value>[\\w-%#]+|\\[.*?\\]|\".*?\"|'.*?')\\s*;?","g");null!=(j=m.exec(i));)n=j.value.replace(/^['"]|['"]$/g,""),null!=n&&l.test(n)&&(n=l.exec(n),n=n.values.length>0?n.values.split(/\s*,\s*/):[]),k[j.name]=n;g={target:g,params:e(h,k)},null!=g.params.brush&&d.push(g)}return d},highlight:function(a,b){var f,l,h,i,j,m,n,o,c=this.findElements(a,b),d=null,e=q.config;if(0!==c.length)for(f=0;f<c.length;f++)if(b=c[f],h=b.target,i=b.params,j=i.brush,null!=j){if("true"==i["html-script"]||1==q.defaults["html-script"])d=new q.HtmlScript(j),j="htmlscript";else{if(!(d=g(j)))continue;d=new d}l=h.innerHTML,e.useScriptTags&&(l=l,m=k(l),n=!1,0==m.indexOf("<![CDATA[")&&(m=m.substring(9),n=!0),o=m.length,m.indexOf("]]>")==o-3&&(m=m.substring(0,o-3),n=!0),l=n?m:l),""!=(h.title||"")&&(i.title=h.title),i.brush=j,d.init(i),b=d.getDiv(l),""!=(h.id||"")&&(b.id=h.id),h.parentNode.replaceChild(b,h)}},all:function(a){f(window,"load",function(){q.highlight(a)})}};return q.all=q.all,q.highlight=q.highlight,q.Match=function(a,b,c){this.value=a,this.index=b,this.length=a.length,this.css=c,this.brushName=null},q.Match.prototype.toString=function(){return this.value},q.HtmlScript=function(a){function b(a,b){for(var c=0;c<a.length;c++)a[c].index+=b}var d,i,c=g(a),e=new q.brushes.Xml,f=this,h="getDiv getHtml init".split(" ");if(null!=c){for(d=new c,i=0;i<h.length;i++)!function(){var a=h[i];f[a]=function(){return e[a].apply(e,arguments)}}();null==d.htmlScript?window.alert(q.config.strings.alert+(q.config.strings.brushNotHtmlScript+a)):e.regexList.push({regex:d.htmlScript.code,func:function(a){for(var j,e=a.code,f=[],g=d.regexList,h=a.index+a.left.length,i=d.htmlScript,k=0;k<g.length;k++)j=m(e,g[k]),b(j,h),f=f.concat(j);for(null!=i.left&&null!=a.left&&(j=m(a.left,i.left),b(j,a.index),f=f.concat(j)),null!=i.right&&null!=a.right&&(j=m(a.right,i.right),b(j,a.index+a[0].lastIndexOf(a.right)),f=f.concat(j)),a=0;a<f.length;a++)f[a].brushName=c.brushName;return f}})}},q.Highlighter=function(){},q.Highlighter.prototype={getParam:function(a,b){var d,c=this.params[a];return c=null==c?b:c,d={"true":!0,"false":!1}[c],null==d?c:d},create:function(a){return document.createElement(a)},findMatches:function(a,b){var d,c=[];if(null!=a)for(d=0;d<a.length;d++)"object"==typeof a[d]&&(c=c.concat(m(b,a[d])));return this.removeNestedMatches(c.sort(l))},removeNestedMatches:function(a){var b,c,d,e,f;for(b=0;b<a.length;b++)if(null!==a[b])for(c=a[b],d=c.index+c.length,e=b+1;e<a.length&&null!==a[b];e++)if(f=a[e],null!==f){if(f.index>d)break;f.index==c.index&&f.length>c.length?a[b]=null:f.index>=c.index&&f.index<d&&(a[e]=null)}return a},figureOutLineNumbers:function(a){var b=[],c=parseInt(this.getParam("first-line"));return h(a,function(a,d){b.push(d+c)}),b},isLineHighlighted:function(a){var c,b=this.getParam("highlight",[]);"object"!=typeof b&&null==b.push&&(b=[b]);a:{for(a=a.toString(),c=void 0,c=c=Math.max(c||0,0);c<b.length;c++)if(b[c]==a){b=c;break a}b=-1}return-1!=b},getLineHtml:function(a,b,c){return a=["line","number"+b,"index"+a,"alt"+(0==b%2?1:2).toString()],this.isLineHighlighted(b)&&a.push("highlighted"),0==b&&a.push("break"),'<div class="'+a.join(" ")+'">'+c+"</div>"},getLineNumbersHtml:function(a,b){var g,i,h,j,c="",d=a.split("\n").length,e=parseInt(this.getParam("first-line")),f=this.getParam("pad-line-numbers");for(1==f?f=(e+d-1).toString().length:1==isNaN(f)&&(f=0),g=0;d>g;g++){if(h=b?b[g]:e+g,0==h)i=q.config.space;else{for(i=f,j=h.toString();j.length<i;)j="0"+j;i=j}a=i,c+=this.getLineHtml(g,h,a)}return c},getCodeLinesHtml:function(a,b){var c,d,e,f,g,h,i,j;for(a=k(a),c=a.split("\n"),this.getParam("pad-line-numbers"),d=parseInt(this.getParam("first-line")),a="",e=this.getParam("brush"),f=0;f<c.length;f++)g=c[f],h=/^(&nbsp;|\s)+/.exec(g),i=null,j=b?b[f]:d+f,null!=h&&(i=h[0].toString(),g=g.substr(i.length),i=i.replace(" ",q.config.space)),g=k(g),0==g.length&&(g=q.config.space),a+=this.getLineHtml(f,j,(null!=i?'<code class="'+e+' spaces">'+i+"</code>":"")+g);return a},getTitleHtml:function(a){return a?"<caption>"+a+"</caption>":""},getMatchesHtml:function(a,b){function c(a){return(a=a?a.brushName||f:f)?a+" ":""}var d,e,f,g,j,h;for(d=0,e="",f=this.getParam("brush",""),g=0;g<b.length;g++)h=b[g],null!==h&&0!==h.length&&(j=c(h),e+=i(a.substr(d,h.index-d),j+"plain")+i(h.value,j+h.css),d=h.index+h.length+(h.offset||0));return e+=i(a.substr(d),c()+"plain")},getHtml:function(a){var e,f,g,h,i,c="",d=["syntaxhighlighter"];if(1==this.getParam("light")&&(this.params.toolbar=this.params.gutter=!1),className="syntaxhighlighter",1==this.getParam("collapse")&&d.push("collapsed"),0==(gutter=this.getParam("gutter"))&&d.push("nogutter"),d.push(this.getParam("class-name")),d.push(this.getParam("brush")),a=a.replace(/^[ ]*[\n]+|[\n]*[ ]*$/g,"").replace(/\r/g," "),c=this.getParam("tab-size"),1==this.getParam("smart-tabs"))a=j(a,c);else{for(f="",g=0;c>g;g++)f+=" ";a=a.replace(/\t/g,f)}a=a;a:{for(c=a=a,f=/<br\s*\/?>|&lt;br\s*\/?&gt;/gi,1==q.config.bloggerMode&&(c=c.replace(f,"\n")),1==q.config.stripBrs&&(c=c.replace(f,"")),c=c.split("\n"),f=/^\s*/,g=1e3,h=0;h<c.length&&g>0;h++)if(i=c[h],0!=k(i).length){if(i=f.exec(i),null==i){a=a;break a}g=Math.min(i[0].length,g)}if(g>0)for(h=0;h<c.length;h++)c[h]=c[h].substr(g);a=c.join("\n")}return gutter&&(e=this.figureOutLineNumbers(a)),c=this.findMatches(this.regexList,a),c=this.getMatchesHtml(a,c),c=this.getCodeLinesHtml(c,e),this.getParam("auto-links")&&(c=n(c)),"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.match(/MSIE/)&&d.push("ie"),c='<div id="'+b(this.id)+'" class="'+d.join(" ")+'">'+(this.getParam("toolbar")?q.toolbar.getHtml(this):"")+'<table border="0" cellpadding="0" cellspacing="0">'+this.getTitleHtml(this.getParam("title"))+"<tbody><tr>"+(gutter?'<td class="gutter">'+this.getLineNumbersHtml(a)+"</td>":"")+'<td class="code"><div class="container">'+c+"</div></td></tr></tbody></table></div>"},getDiv:function(a){null===a&&(a=""),this.code=a;var b=this.create("div");return b.innerHTML=this.getHtml(a),this.getParam("toolbar")&&f(d(b,".toolbar"),"click",q.toolbar.handler),this.getParam("quick-code")&&f(d(b,".code"),"click",p),b},init:function(a){this.id=""+Math.round(1e6*Math.random()).toString(),q.vars.highlighters[b(this.id)]=this,this.params=e(q.defaults,a||{}),1==this.getParam("light")&&(this.params.toolbar=this.params.gutter=!1)},getKeywords:function(a){return a=a.replace(/^\s+|\s+$/g,"").replace(/\s+/g,"|"),"\\b(?:"+a+")\\b"},forHtmlScript:function(a){this.htmlScript={left:{regex:a.left,css:"script"},right:{regex:a.right,css:"script"},code:new XRegExp("(?<left>"+a.left.source+")(?<code>.*?)(?<right>"+a.right.source+")","sgi")}}},q}(),"undefined"!=typeof exports&&(exports.SyntaxHighlighter=SyntaxHighlighter);