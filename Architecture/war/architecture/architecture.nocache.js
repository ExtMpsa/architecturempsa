function architecture(){var hb='',eb=' top: -1000px;',Eb='" for "gwt:onLoadErrorFn"',Cb='" for "gwt:onPropertyErrorFn"',nb='");',Fb='#',Rb='&',jc='.cache.js',Hb='/',Nb='//',ic=':',wb='::',rc=':moduleBase',Tb=';',gb='<!doctype html>',ib='<html><head><\/head><body><\/body><\/html>',zb='=',Gb='?',Bb='Bad handler "',fb='CSS1Compat',lb='Chrome',kb='DOMContentLoaded',_='DUMMY',hc="GWT module 'architecture' may need to be (re)compiled",Sb='GWT_LOCALE=',qc='Ignoring non-whitelisted Dev Mode URL: ',Wb='Unexpected exception in locale detection, using default: ',Ub='_',pc='__gwtDevModeHook:architecture',Vb='__gwt_Locale',oc='_gwt_dummy_',Z='architecture',gc='architecture.devmode.js',Lb='architecture.nocache.js',vb='architecture::',Mb='base',Kb='baseUrl',W='begin',ab='body',V='bootstrap',Jb='clear.cache.gif',yb='content',Pb='default',lc='end',mb='eval("',nc='file:',cc='gecko',dc='gecko1_8',X='gwt.codesvr.architecture=',Y='gwt.codesvr=',Db='gwt:onLoadErrorFn',Ab='gwt:onPropertyErrorFn',xb='gwt:property',sb='head',mc='http:',_b='ie10',bc='ie8',ac='ie9',bb='iframe',Ib='img',pb='javascript',cb='javascript:""',kc='loadExternalRefs',Ob='locale',Qb='locale=',tb='meta',rb='moduleRequested',qb='moduleStartup',$b='msie',ub='name',db='position:absolute; width:0; height:0; border:none; left: -1000px;',Zb='safari',ob='script',fc='selectingPermutation',$='startup',jb='undefined',ec='unknown',Xb='user.agent',Yb='webkit';var t=window;var u=document;w(V,W);function v(){var a=t.location.search;return a.indexOf(X)!=-1||a.indexOf(Y)!=-1}
function w(a,b){if(t.__gwtStatsEvent){t.__gwtStatsEvent({moduleName:Z,sessionId:t.__gwtStatsSessionId,subSystem:$,evtGroup:a,millis:(new Date).getTime(),type:b})}}
architecture.__sendStats=w;architecture.__moduleName=Z;architecture.__errFn=null;architecture.__moduleBase=_;architecture.__softPermutationId=0;architecture.__computePropValue=null;architecture.__getPropMap=null;architecture.__gwtInstallCode=function(){};architecture.__gwtStartLoadingFragment=function(){return null};var A=function(){return false};var B=function(){return null};__propertyErrorFunction=null;var C=t.__gwt_activeModules=t.__gwt_activeModules||{};C[Z]={moduleName:Z};var D;function F(){H();return D}
function G(){H();return D.getElementsByTagName(ab)[0]}
function H(){if(D){return}var a=u.createElement(bb);a.src=cb;a.id=Z;a.style.cssText=db+eb;a.tabIndex=-1;u.body.appendChild(a);D=a.contentDocument;if(!D){D=a.contentWindow.document}D.open();var b=document.compatMode==fb?gb:hb;D.write(b+ib);D.close()}
function I(k){function l(a){function b(){if(typeof u.readyState==jb){return typeof u.body!=jb&&u.body!=null}return /loaded|complete/.test(u.readyState)}
var c=b();if(c){a();return}function d(){if(!c){c=true;a();if(u.removeEventListener){u.removeEventListener(kb,d,false)}if(e){clearInterval(e)}}}
if(u.addEventListener){u.addEventListener(kb,d,false)}var e=setInterval(function(){if(b()){d()}},50)}
function m(c){function d(a,b){a.removeChild(b)}
var e=G();var f=F();var g;if(navigator.userAgent.indexOf(lb)>-1&&window.JSON){var h=f.createDocumentFragment();h.appendChild(f.createTextNode(mb));for(var i=0;i<c.length;i++){var j=window.JSON.stringify(c[i]);h.appendChild(f.createTextNode(j.substring(1,j.length-1)))}h.appendChild(f.createTextNode(nb));g=f.createElement(ob);g.language=pb;g.appendChild(h);e.appendChild(g);d(e,g)}else{for(var i=0;i<c.length;i++){g=f.createElement(ob);g.language=pb;g.text=c[i];e.appendChild(g);d(e,g)}}}
architecture.onScriptDownloaded=function(a){l(function(){m(a)})};w(qb,rb);var n=u.createElement(ob);n.src=k;u.getElementsByTagName(sb)[0].appendChild(n)}
architecture.__startLoadingFragment=function(a){return L(a)};architecture.__installRunAsyncCode=function(a){var b=G();var c=F().createElement(ob);c.language=pb;c.text=a;b.appendChild(c);b.removeChild(c)};function J(){var c={};var d;var e;var f=u.getElementsByTagName(tb);for(var g=0,h=f.length;g<h;++g){var i=f[g],j=i.getAttribute(ub),k;if(j){j=j.replace(vb,hb);if(j.indexOf(wb)>=0){continue}if(j==xb){k=i.getAttribute(yb);if(k){var l,m=k.indexOf(zb);if(m>=0){j=k.substring(0,m);l=k.substring(m+1)}else{j=k;l=hb}c[j]=l}}else if(j==Ab){k=i.getAttribute(yb);if(k){try{d=eval(k)}catch(a){alert(Bb+k+Cb)}}}else if(j==Db){k=i.getAttribute(yb);if(k){try{e=eval(k)}catch(a){alert(Bb+k+Eb)}}}}}B=function(a){var b=c[a];return b==null?null:b};__propertyErrorFunction=d;architecture.__errFn=e}
function K(){function e(a){var b=a.lastIndexOf(Fb);if(b==-1){b=a.length}var c=a.indexOf(Gb);if(c==-1){c=a.length}var d=a.lastIndexOf(Hb,Math.min(c,b));return d>=0?a.substring(0,d+1):hb}
function f(a){if(a.match(/^\w+:\/\//)){}else{var b=u.createElement(Ib);b.src=a+Jb;a=e(b.src)}return a}
function g(){var a=B(Kb);if(a!=null){return a}return hb}
function h(){var a=u.getElementsByTagName(ob);for(var b=0;b<a.length;++b){if(a[b].src.indexOf(Lb)!=-1){return e(a[b].src)}}return hb}
function i(){var a=u.getElementsByTagName(Mb);if(a.length>0){return a[a.length-1].href}return hb}
function j(){var a=u.location;return a.href==a.protocol+Nb+a.host+a.pathname+a.search+a.hash}
var k=g();if(k==hb){k=h()}if(k==hb){k=i()}if(k==hb&&j()){k=e(u.location.href)}k=f(k);return k}
function L(a){if(a.match(/^\//)){return a}if(a.match(/^[a-zA-Z]+:\/\//)){return a}return architecture.__moduleBase+a}
function M(){var m=[];var n=0;var o=[];var p=[];function q(a){var b=p[a](),c=o[a];if(b in c){return b}var d=[];for(var e in c){d[c[e]]=e}if(__propertyErrorFunc){__propertyErrorFunc(a,d,b)}throw null}
p[Ob]=function(){var b=null;var c=Pb;try{if(!b){var d=location.search;var e=d.indexOf(Qb);if(e>=0){var f=d.substring(e+7);var g=d.indexOf(Rb,e);if(g<0){g=d.length}b=d.substring(e+7,g)}}if(!b){var h=u.cookie;var i=h.indexOf(Sb);if(i>=0){var g=h.indexOf(Tb,i);if(g<0){g=h.length}b=h.substring(i+11,g)}}if(!b){b=B(Ob)}if(!b){var j=navigator.browserLanguage?navigator.browserLanguage:navigator.language;if(j){var k=j.split(/[-_]/);if(k.length>1){k[1]=k[1].toUpperCase()}b=k.join(Ub)}}if(!b){b=t[Vb]}if(b){c=b}while(b&&!A(Ob,b)){var l=b.lastIndexOf(Ub);if(l<0){b=null;break}b=b.substring(0,l)}}catch(a){alert(Wb+a)}t[Vb]=c;return b||Pb};o[Ob]={'default':0,en:1,fr:2};p[Xb]=function(){var b=navigator.userAgent.toLowerCase();var c=function(a){return parseInt(a[1])*1000+parseInt(a[2])};if(function(){return b.indexOf(Yb)!=-1}())return Zb;if(function(){return b.indexOf($b)!=-1&&u.documentMode>=10}())return _b;if(function(){return b.indexOf($b)!=-1&&u.documentMode>=9}())return ac;if(function(){return b.indexOf($b)!=-1&&u.documentMode>=8}())return bc;if(function(){return b.indexOf(cc)!=-1}())return dc;return ec};o[Xb]={gecko1_8:0,ie10:1,ie8:2,ie9:3,safari:4};A=function(a,b){return b in o[a]};architecture.__getPropMap=function(){var a={};for(var b in o){if(o.hasOwnProperty(b)){a[b]=q(b)}}return a};architecture.__computePropValue=q;t.__gwt_activeModules[Z].bindings=architecture.__getPropMap;w(V,fc);if(v()){return L(gc)}var r;try{alert(hc);return;var s=r.indexOf(ic);if(s!=-1){n=parseInt(r.substring(s+1),10);r=r.substring(0,s)}}catch(a){}architecture.__softPermutationId=n;return L(r+jc)}
function N(){if(!t.__gwt_stylesLoaded){t.__gwt_stylesLoaded={}}w(kc,W);w(kc,lc)}
J();architecture.__moduleBase=K();C[Z].moduleBase=architecture.__moduleBase;var O=M();if(t){var P=!!(t.location.protocol==mc||t.location.protocol==nc);t.__gwt_activeModules[Z].canRedirect=P;function Q(){var b=oc;try{t.sessionStorage.setItem(b,b);t.sessionStorage.removeItem(b);return true}catch(a){return false}}
if(P&&Q()){var R=pc;var S=t.sessionStorage[R];if(!/^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?\/.*$/.test(S)){if(S&&(window.console&&console.log)){console.log(qc+S)}S=hb}if(S&&!t[R]){t[R]=true;t[R+rc]=K();var T=u.createElement(ob);T.src=S;var U=u.getElementsByTagName(sb)[0];U.insertBefore(T,U.firstElementChild||U.children[0]);return false}}}N();w(V,lc);I(O);return true}
architecture.succeeded=architecture();