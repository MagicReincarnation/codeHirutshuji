/*
 code: komentar
 version: 3.0
 release: 27/07/2024
 Change Log:
- add order comment terbaru dan terlama
- background koment berdasarkan role
- fixbug gak bisa koment tanp bio
- fixbug username dan role tidak terupdate otomatis
- update sync database realtime 3.0
*/
const _0x37ba89=_0x1b91;(function(_0x5ea60d,_0x57452c){const _0x397163=_0x1b91,_0x391649=_0x5ea60d();while(!![]){try{const _0x30276b=parseInt(_0x397163(0x213))/0x1*(-parseInt(_0x397163(0x24b))/0x2)+parseInt(_0x397163(0x246))/0x3+-parseInt(_0x397163(0x25c))/0x4*(parseInt(_0x397163(0x203))/0x5)+parseInt(_0x397163(0x214))/0x6+-parseInt(_0x397163(0x276))/0x7*(-parseInt(_0x397163(0x228))/0x8)+parseInt(_0x397163(0x22e))/0x9+-parseInt(_0x397163(0x270))/0xa;if(_0x30276b===_0x57452c)break;else _0x391649['push'](_0x391649['shift']());}catch(_0x11c72f){_0x391649['push'](_0x391649['shift']());}}}(_0x3569,0x2d14d));let komentarPerPage_number=komentarPerPage;async function isAdmin(_0x4b39fb){const _0x167bdd=_0x1b91;let _0x2f7035=dbrl[_0x167bdd(0x1f7)](_0x167bdd(0x1e6))[_0x167bdd(0x236)](_0x4b39fb),_0x731a14=await _0x2f7035[_0x167bdd(0x244)](_0x167bdd(0x231)),_0x4699f1=_0x731a14[_0x167bdd(0x207)]();return _0x4699f1&&_0x167bdd(0x26a)===_0x4699f1[_0x167bdd(0x27f)];}async function getUserData(_0x22f6db){const _0x415af6=_0x1b91;let _0xa39b00=dbrl[_0x415af6(0x1f7)]('users')[_0x415af6(0x236)](_0x22f6db),_0x4ebd21=await _0xa39b00['once']('value');return _0x4ebd21['val']();}function buildCustomURL(_0x1fd156,_0x23b2ad){const _0x64f256=_0x1b91;let _0xd0ef02=window[_0x64f256(0x1ee)][_0x64f256(0x20a)];return _0x23b2ad[_0x64f256(0x250)]?''+_0xd0ef02+_0x23b2ad[_0x64f256(0x250)]+'?users='+_0x1fd156:_0x23b2ad[_0x64f256(0x27a)]+_0x64f256(0x274)+_0x1fd156;}function sanitizeHTML(_0x5cc944){const _0x16bc9e=_0x1b91;let _0x437cfa=document[_0x16bc9e(0x20e)](_0x16bc9e(0x226));_0x437cfa[_0x16bc9e(0x245)]=_0x5cc944;let _0xc8d5f0=tagKomentar,_0x1c1938=dataClassTagkomentar;return!function _0x524cdc(_0x1ba6d9){const _0x5d8df1=_0x16bc9e;let _0xf7fac0=Array['from'](_0x1ba6d9[_0x5d8df1(0x24c)]);for(let _0x7e1799 of _0xf7fac0)if(_0x7e1799[_0x5d8df1(0x267)]===Node[_0x5d8df1(0x24a)]){let _0x1597e1=_0x7e1799[_0x5d8df1(0x216)][_0x5d8df1(0x1f8)](),_0x21ba17=_0x7e1799[_0x5d8df1(0x265)][_0x5d8df1(0x262)]('\x20'),_0x9da40=_0x21ba17[_0x5d8df1(0x269)](_0x1c354d=>_0x1c1938[_0x1597e1]?.['includes'](_0x1c354d));if(_0xc8d5f0[_0x5d8df1(0x20f)](_0x1597e1)&&_0x9da40){if('A'===_0x1597e1&&_0x21ba17[_0x5d8df1(0x20f)](_0x5d8df1(0x260))){let _0x773649=_0x7e1799[_0x5d8df1(0x225)]('href');if(!_0x773649){let _0x518d03=document[_0x5d8df1(0x26e)](_0x7e1799[_0x5d8df1(0x27b)]);_0x1ba6d9[_0x5d8df1(0x278)](_0x518d03,_0x7e1799);continue;}}_0x524cdc(_0x7e1799);}else{let _0x4584b9=document[_0x5d8df1(0x26e)](_0x7e1799[_0x5d8df1(0x27b)]);_0x1ba6d9['replaceChild'](_0x4584b9,_0x7e1799);}}}(_0x437cfa),_0x437cfa[_0x16bc9e(0x245)];}function sLogkomentar(){const _0xd881aa=_0x1b91;showSwalNotification(_0xd881aa(0x221));}function hLogkomentar(){const _0x519ca1=_0x1b91;Swal[_0x519ca1(0x23c)]();}function postComment(){const _0xaea1ab=_0x1b91;let _0x420c5d=document[_0xaea1ab(0x208)](_0xaea1ab(0x240)),_0x34285a=_0x420c5d[_0xaea1ab(0x231)][_0xaea1ab(0x22c)](),_0xeed460=_0x420c5d[_0xaea1ab(0x286)][_0xaea1ab(0x23d)]||'';if(''!==_0x34285a){sLogkomentar(),_0x34285a=sanitizeHTML(_0x34285a);let _0x57fe6a=_0xeed460+'\x20'+_0x34285a,_0x4f0b52=document[_0xaea1ab(0x208)](_0xaea1ab(0x210))['getAttribute'](_0xaea1ab(0x27d)),_0x5b7de4=auth['currentUser'];if(_0x5b7de4){let _0x1bc2c6=db[_0xaea1ab(0x21b)](_0xaea1ab(0x1e6))[_0xaea1ab(0x1e4)](_0x5b7de4['uid']);_0x1bc2c6[_0xaea1ab(0x1fe)]()['then'](_0x4e18ec=>{const _0x56c037=_0xaea1ab;if(_0x4e18ec['exists']){_0x4e18ec[_0x56c037(0x22f)]();let _0x3943c3=firebase[_0x56c037(0x24d)][_0x56c037(0x212)][_0x56c037(0x21a)],_0x424dde=dbrl[_0x56c037(0x1f7)](_0x56c037(0x1e9)+_0x4f0b52);_0x424dde['once'](_0x56c037(0x231))[_0x56c037(0x1ff)](_0xa2e54e=>{const _0x419a0a=_0x56c037;let _0x10d444=_0xa2e54e[_0x419a0a(0x279)](),_0x7605e=_0x419a0a(0x209)+(_0x10d444+0x1),_0x2a5ecf={'text':_0x57fe6a,'timestamp':_0x3943c3,'order':_0x3943c3,'userId':_0x5b7de4[_0x419a0a(0x1fc)]};dbrl[_0x419a0a(0x1f7)](_0x419a0a(0x1e9)+_0x4f0b52+'/'+_0x7605e)[_0x419a0a(0x27e)](_0x2a5ecf)[_0x419a0a(0x1ff)](()=>{const _0x5b6957=_0x419a0a;hLogkomentar(),_0x420c5d[_0x5b6957(0x231)]='',_0x420c5d[_0x5b6957(0x256)](_0x5b6957(0x223)),cancelReply();let _0x289b49=document[_0x5b6957(0x208)](_0x5b6957(0x210))[_0x5b6957(0x225)]('data-forum-id'),_0x216765=_0x5b6957(0x249)+_0x289b49,_0x339375=parseInt(localStorage['getItem'](_0x216765));_0x339375?loadkomentar(_0x339375):loadkomentar(0x1);});})['catch'](_0x34b394=>{const _0x3ec3df=_0x56c037;console[_0x3ec3df(0x1f2)](_0x3ec3df(0x284),_0x34b394);});}else console['log'](_0x56c037(0x255));})[_0xaea1ab(0x25e)](_0x4a030e=>{const _0x26e7cc=_0xaea1ab;console['error'](_0x26e7cc(0x1f1),_0x4a030e);});}else console[_0xaea1ab(0x237)](_0xaea1ab(0x233));}else showSwalNotification(_0xaea1ab(0x21e));}function _0x1b91(_0x756c78,_0x462fb0){const _0x3569d3=_0x3569();return _0x1b91=function(_0x1b916d,_0x504acf){_0x1b916d=_0x1b916d-0x1e4;let _0x32ffc1=_0x3569d3[_0x1b916d];return _0x32ffc1;},_0x1b91(_0x756c78,_0x462fb0);}async function loadkomentar(_0x146299){const _0x24c719=_0x1b91;let _0x3b57dd=configKomentar[_0x24c719(0x22a)]?configKomentar[_0x24c719(0x22a)]:_0x24c719(0x280);document['getElementById'](_0x24c719(0x206))['style'][_0x24c719(0x26d)]='block';let _0x53d613=document[_0x24c719(0x208)]('komentar_forum')[_0x24c719(0x225)](_0x24c719(0x27d)),_0x49ebd3=dbrl[_0x24c719(0x1f7)]('comments/'+_0x53d613);cancelReply();try{let _0xb11142=await _0x49ebd3[_0x24c719(0x244)]('value'),_0x3dc7b0=[];if(_0xb11142['forEach'](_0x5c3858=>{const _0x1ebf6e=_0x24c719;let _0x37d2ad=_0x5c3858['val'](),_0x30fa68={'id':_0x5c3858[_0x1ebf6e(0x24f)],..._0x37d2ad};_0x3dc7b0[_0x1ebf6e(0x1ec)](_0x30fa68);}),0x0===_0x3dc7b0[_0x24c719(0x1f0)]){let _0x15067e=document['getElementById']('notifLog');_0x15067e[_0x24c719(0x245)]=_0x3b57dd;}else{urutkanList_komentar?_0x3dc7b0[_0x24c719(0x268)]((_0xdcb89d,_0x47e130)=>_0x47e130[_0x24c719(0x217)]-_0xdcb89d[_0x24c719(0x217)]):!0x1===urutkanList_komentar?_0x3dc7b0[_0x24c719(0x268)]((_0x4f5e5a,_0x408b2d)=>_0x4f5e5a[_0x24c719(0x217)]-_0x408b2d['timestamp']):_0x3dc7b0[_0x24c719(0x268)]((_0x3f655f,_0x725f00)=>{const _0x3b557a=_0x24c719;let _0x22bad3=parseInt(_0x3f655f['id'][_0x3b557a(0x262)]('-')[0x1]),_0x4a6673=parseInt(_0x725f00['id'][_0x3b557a(0x262)]('-')[0x1]);return _0x22bad3-_0x4a6673;});let _0x5dc1f5=_0x3dc7b0[_0x24c719(0x281)]((_0x146299-0x1)*komentarPerPage_number,_0x146299*komentarPerPage_number);await renderkomentar(_0x5dc1f5),renderpagination_komentar(_0x3dc7b0[_0x24c719(0x1f0)],_0x146299);}}catch(_0x501458){console[_0x24c719(0x1f2)]('Gagal\x20memuat\x20komentar:',_0x501458);}finally{document['getElementById']('loading_komentar')[_0x24c719(0x1f4)][_0x24c719(0x26d)]='none';}}async function renderkomentar(_0x34bda8){const _0x512c7e=_0x1b91;let _0x5ac28a=document[_0x512c7e(0x208)](_0x512c7e(0x210));_0x5ac28a[_0x512c7e(0x245)]='';let _0x3bb209=auth[_0x512c7e(0x273)],_0x271a54=!!_0x3bb209&&await isAdmin(_0x3bb209[_0x512c7e(0x1fc)]),_0x163895='';for(let _0x1e3d92 of _0x34bda8){let _0x4fcbfc=await getUserData(_0x1e3d92[_0x512c7e(0x241)]),_0x5b5eea=_0x3bb209&&_0x3bb209[_0x512c7e(0x1fc)]===_0x1e3d92[_0x512c7e(0x241)],_0x3cda3d=_0x4fcbfc?.[_0x512c7e(0x1e7)]||profileAnonymous,_0x360b4f=buildCustomURL(_0x1e3d92[_0x512c7e(0x241)],configKomentar),_0x52254f=_0x4fcbfc?.[_0x512c7e(0x23a)]||'';_0x4fcbfc?.[_0x512c7e(0x27f)];let _0x2b5e50=_0x271a54||_0x5b5eea,_0x37a380=_0x3bb209&&_0x4fcbfc?.[_0x512c7e(0x266)];_0x163895+=renderkomentar_post(_0x1e3d92,_0x4fcbfc,_0x3cda3d,_0x360b4f,_0x52254f,_0x2b5e50,_0x37a380);}_0x5ac28a[_0x512c7e(0x245)]=_0x163895;}function truncateText(_0x2f09f6,_0x49c4f5){const _0xb74913=_0x1b91;return _0x2f09f6[_0xb74913(0x1f0)]<=_0x49c4f5?_0x2f09f6:_0x2f09f6[_0xb74913(0x281)](0x0,_0x49c4f5)+'...';}function renderpagination_komentar(_0x318075,_0x453235){const _0xc8867e=_0x1b91;let _0xb0cd12=Math[_0xc8867e(0x239)](_0x318075/komentarPerPage_number),_0x4eb54f=document['getElementById'](_0xc8867e(0x20c)),_0x5a56db=document['getElementById'](_0xc8867e(0x210))[_0xc8867e(0x225)]('data-forum-id'),_0x2ed249='active_KomentarPage_'+_0x5a56db,_0x73b3c0=_0xc8867e(0x249)+_0x5a56db;_0x4eb54f[_0xc8867e(0x245)]='',_0x453235>0x1&&(_0x4eb54f['innerHTML']+=_0xc8867e(0x211)+(_0x453235-0x1)+_0xc8867e(0x23f));let _0xae29fd=Math['floor'](1.5),_0x18e3a9=Math[_0xc8867e(0x21c)](0x1,_0x453235-_0xae29fd),_0x42948b=Math[_0xc8867e(0x289)](_0xb0cd12,_0x453235+_0xae29fd);_0x453235-_0xae29fd<0x1&&(_0x42948b=Math[_0xc8867e(0x289)](_0xb0cd12,_0x42948b+(_0xae29fd-(_0x453235-0x1)))),_0x453235+_0xae29fd>_0xb0cd12&&(_0x18e3a9=Math[_0xc8867e(0x21c)](0x1,_0x18e3a9-(_0x453235+_0xae29fd-_0xb0cd12))),_0x18e3a9>0x1&&(_0x4eb54f['innerHTML']+='<button\x20class=\x22pkm\x22\x20onclick=\x22loadkomentar(1)\x22>1</button>',_0x18e3a9>0x2&&(_0x4eb54f[_0xc8867e(0x245)]+=_0xc8867e(0x1f5)));for(let _0xf4ef3b=_0x18e3a9;_0xf4ef3b<=_0x42948b;_0xf4ef3b++)_0xf4ef3b===_0x453235?_0x4eb54f[_0xc8867e(0x245)]+='<button\x20class=\x22active\x20pkm\x22\x20onclick=\x22loadkomentar('+_0xf4ef3b+_0xc8867e(0x252)+_0xf4ef3b+_0xc8867e(0x220):_0x4eb54f[_0xc8867e(0x245)]+='<button\x20class=\x22pkm\x22\x20onclick=\x22loadkomentar('+_0xf4ef3b+')\x22>'+_0xf4ef3b+_0xc8867e(0x220);_0x42948b<_0xb0cd12&&(_0x42948b<_0xb0cd12-0x1&&(_0x4eb54f['innerHTML']+=_0xc8867e(0x227)),_0x4eb54f['innerHTML']+=_0xc8867e(0x211)+_0xb0cd12+')\x22>'+_0xb0cd12+_0xc8867e(0x220)),_0x453235<_0xb0cd12&&(_0x4eb54f['innerHTML']+='<button\x20class=\x22pkm\x22\x20onclick=\x22loadkomentar('+(_0x453235+0x1)+')\x22>Next</button>'),localStorage[_0xc8867e(0x1ef)](_0x73b3c0,_0xb0cd12);let _0x23d000=_0x4eb54f[_0xc8867e(0x229)](_0xc8867e(0x261));_0x23d000['forEach'](_0x4c2f0c=>{const _0x3af24e=_0xc8867e;_0x4c2f0c[_0x3af24e(0x20d)](_0x3af24e(0x200),()=>{localStorage['setItem'](_0x2ed249,_0x4c2f0c['textContent']);});});}function cancelReply(){const _0x3f5d81=_0x1b91;let _0x133225=document[_0x3f5d81(0x208)](_0x3f5d81(0x240));_0x133225[_0x3f5d81(0x256)](_0x3f5d81(0x223)),_0x133225['value']='';let _0x3700a7=document['querySelector'](_0x3f5d81(0x1fa));_0x3700a7['style'][_0x3f5d81(0x26d)]='none';let _0x405df0=document[_0x3f5d81(0x1fb)](_0x3f5d81(0x1ed)),_0x1e9444=document['querySelector']('.km');_0x405df0[_0x3f5d81(0x25f)]['insertBefore'](_0x1e9444,_0x405df0[_0x3f5d81(0x1e5)]);}function replyToUser(_0x2b8ba3,_0x16b559){const _0x22db8d=_0x1b91;let _0x398fb1=document['getElementById'](_0x22db8d(0x210)),_0x38b92d=_0x398fb1?_0x398fb1[_0x22db8d(0x225)]('data-forum-id'):null;if(!_0x38b92d){console[_0x22db8d(0x1f2)]('Forum\x20ID\x20tidak\x20ditemukan.');return;}let _0x150776=window[_0x22db8d(0x1ee)][_0x22db8d(0x242)][_0x22db8d(0x262)]('?')[0x0],_0x1cdec7=parseInt(localStorage[_0x22db8d(0x264)](_0x22db8d(0x222)+_0x38b92d))||0x1,_0x3c32c4=_0x150776+_0x22db8d(0x263)+_0x1cdec7+'#'+_0x16b559,_0x561acc=_0x22db8d(0x1eb)+_0x16b559+_0x22db8d(0x247)+_0x3c32c4+'\x27)\x22>@'+_0x2b8ba3+_0x22db8d(0x272),_0x564301=document[_0x22db8d(0x208)](_0x22db8d(0x240));_0x564301[_0x22db8d(0x286)][_0x22db8d(0x23d)]=_0x561acc,_0x564301[_0x22db8d(0x20b)]();let _0x3d1955=document[_0x22db8d(0x208)](_0x16b559);_0x3d1955&&_0x3d1955[_0x22db8d(0x275)]({'behavior':_0x22db8d(0x26c),'block':_0x22db8d(0x1f6)});let _0x254041=document['querySelector'](_0x22db8d(0x1fa));_0x254041['style'][_0x22db8d(0x26d)]=_0x22db8d(0x248);let _0x56bcc0=document['querySelector']('.km'),_0x26e694=_0x3d1955?_0x3d1955[_0x22db8d(0x1fb)]('.replyKomentar'):null;_0x26e694&&_0x26e694[_0x22db8d(0x25f)]['insertBefore'](_0x56bcc0,_0x26e694[_0x22db8d(0x1e5)]);}function scrollToComment(_0x16380d){const _0x3fe450=_0x1b91;let _0x3cdb21=document[_0x3fe450(0x208)]('komentar_forum')[_0x3fe450(0x225)](_0x3fe450(0x27d));parseInt(localStorage[_0x3fe450(0x264)](_0x3fe450(0x222)+_0x3cdb21));let _0x51220c=new URL(_0x16380d),_0x3aa270=parseInt(_0x51220c['searchParams'][_0x3fe450(0x1fe)](_0x3fe450(0x235))),_0x47246f=_0x51220c[_0x3fe450(0x283)][_0x3fe450(0x23e)](0x1),_0x491289=_0x3fe450(0x263)+_0x3aa270+'#'+_0x47246f;history[_0x3fe450(0x202)](null,'',_0x491289),runLoadkomen(_0x47246f);}function runLoadkomen(_0x4e553b){const _0x13bdb8=_0x1b91;let _0x56d75d=new URLSearchParams(window['location']['search']),_0x4cd73a=parseInt(_0x56d75d[_0x13bdb8(0x1fe)](_0x13bdb8(0x235))),_0x1cce54=isNaN(_0x4cd73a)?0x1:_0x4cd73a;loadkomentar(_0x1cce54)[_0x13bdb8(0x1ff)](()=>{const _0x4dfcc3=_0x13bdb8;if(_0x4e553b){let _0x15e5c9=document['getElementById'](_0x4e553b);_0x15e5c9&&(_0x15e5c9[_0x4dfcc3(0x275)]({'behavior':_0x4dfcc3(0x26c)}),_0x15e5c9['classList'][_0x4dfcc3(0x271)](_0x4dfcc3(0x282)));}});}function confirmDeleteComment(_0x3d4244,_0x579e87){const _0x20d655=_0x1b91;let _0x1df7c0=checkAdminRole(),_0x1c39fc=document['createElement'](_0x20d655(0x226));_0x1c39fc[_0x20d655(0x28a)][_0x20d655(0x271)](_0x20d655(0x25d)),_0x1c39fc['innerHTML']=_0x20d655(0x238)+_0x3d4244+'\x27,\x20\x27'+_0x579e87+_0x20d655(0x23b)+_0x1df7c0+_0x20d655(0x205),document['body'][_0x20d655(0x253)](_0x1c39fc);}function deleteComment(_0x44cd7c,_0x173b96){const _0x4be199=_0x1b91;let _0x11d5e0=document['getElementById'](_0x4be199(0x210))[_0x4be199(0x225)](_0x4be199(0x27d)),_0x5ebe27=dbrl[_0x4be199(0x1f7)](_0x4be199(0x1e9)+_0x11d5e0+'/'+_0x44cd7c),_0x4d517b=auth[_0x4be199(0x273)];if(_0x4d517b){let _0x141637=_0x4d517b[_0x4be199(0x1fc)],_0x3a8101=checkAdminRole();_0x5ebe27[_0x4be199(0x244)](_0x4be199(0x231))[_0x4be199(0x1ff)](_0x50b2c5=>{const _0x3da58d=_0x4be199;let _0x4721b4=_0x50b2c5['val']();_0x4721b4[_0x3da58d(0x241)]===_0x141637?deleteCommentByAuthor(_0x5ebe27,_0x4721b4):_0x3a8101&&_0x4721b4[_0x3da58d(0x241)]!==_0x141637?deleteCommentByAdmin(_0x5ebe27,_0x4721b4):(console['error'](_0x3da58d(0x285)),showSwalNotification(_0x3da58d(0x1f3)));})[_0x4be199(0x25e)](_0x1db4ae=>{console['error']('Gagal\x20saat\x20mengambil\x20data\x20komentar:\x20',_0x1db4ae);});}else showSwalNotification('belumLogin_komentar'),console[_0x4be199(0x1f2)]('User\x20is\x20not\x20logged\x20in.');}function deleteCommentByAuthor(_0x5360d7,_0x54953a){const _0x35eed8=_0x1b91;_0x54953a[_0x35eed8(0x1e8)];let _0x54f181={..._0x54953a,'text':_0x35eed8(0x22d)};_0x5360d7[_0x35eed8(0x26b)](_0x54f181)[_0x35eed8(0x1ff)](()=>{const _0x417b44=_0x35eed8;loadkomentar(page_active),document['querySelector'](_0x417b44(0x288))[_0x417b44(0x27c)]();})[_0x35eed8(0x25e)](_0x24b1fd=>{const _0x5129c9=_0x35eed8;console[_0x5129c9(0x1f2)](_0x5129c9(0x24e),_0x24b1fd);});}function deleteCommentByAdmin(_0x5d0764,_0x5a03c4){const _0x36f890=_0x1b91;_0x5a03c4[_0x36f890(0x1e8)];let _0x3bc45d={..._0x5a03c4,'text':_0x36f890(0x219)};_0x5d0764[_0x36f890(0x26b)](_0x3bc45d)['then'](()=>{const _0x5c0810=_0x36f890;loadkomentar(page_active),document[_0x5c0810(0x1fb)](_0x5c0810(0x288))[_0x5c0810(0x27c)]();})[_0x36f890(0x25e)](_0x4a597a=>{const _0x19af4d=_0x36f890;console['error'](_0x19af4d(0x24e),_0x4a597a);});}async function checkAdminRole(){const _0x4285e7=_0x1b91;let _0x1f1309=auth[_0x4285e7(0x273)];if(_0x1f1309)try{let _0x24e056=await db[_0x4285e7(0x21b)]('users')[_0x4285e7(0x1e4)](_0x1f1309[_0x4285e7(0x1fc)])[_0x4285e7(0x1fe)]();if(_0x24e056[_0x4285e7(0x254)]){let _0x108189=_0x24e056[_0x4285e7(0x22f)]();return _0x4285e7(0x26a)===_0x108189['role'];}}catch(_0x8ccc5e){console[_0x4285e7(0x1f2)]('Error\x20checking\x20admin\x20role:\x20',_0x8ccc5e);}return!0x1;}function _0x3569(){const _0x52f633=['set','role','<p>No\x20comments\x20yet</p>','slice','highlight_komentar','hash','Gagal\x20mendapatkan\x20jumlah\x20komentar:','Unauthorized\x20deletion\x20attempt:\x20User\x20is\x20not\x20the\x20author\x20or\x20an\x20admin.','dataset','komenForm','.cd_1','min','classList','doc','nextSibling','users','profilePicUrl','text','comments/','error_profileKomentar','<a\x20class=\x22mentionKoment\x22\x20href=\x22#','push','.kmx','location','setItem','length','Error\x20mengambil\x20data\x20user:','error','error_Unauthorized','style','<span>...</span>','center','ref','toUpperCase','Tidak\x20ada\x20dokumen\x20didata\x20function\x20diloadUser!','button[onclick=\x22cancelReply()\x22]','querySelector','uid','publishKomentar','get','then','click','none','pushState','180NvWfod','notifLog','\x27)\x22>Yes</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20onclick=\x22document.querySelector(\x27.cd_1\x27).remove()\x22>No</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20','loading_komentar','val','getElementById','Hr-','origin','focus','pagination_komentar','addEventListener','createElement','includes','komentar_forum','<button\x20class=\x22pkm\x22\x20onclick=\x22loadkomentar(','ServerValue','17321XuQBpc','1838202ezYTHb','forEach','tagName','timestamp','pesan_noLogin','Komentar\x20ini\x20telah\x20dihapus\x20oleh\x20Admin','TIMESTAMP','collection','max','onAuthStateChanged','kommentnya_mana','boxpagination_komentar','</button>','loaderPublish','active_KomentarPage_','data-mention','#pagination_komentar,.pkm','getAttribute','div','<span\x20class=\x22elipsikoment\x22>...</span>','8VjKSvQ','querySelectorAll','pesan','DOMContentLoaded','trim','Komentar\x20ini\x20telah\x20dihapus\x20oleh\x20pengarang','228078fwqjUg','data','batal\x20publish!','value','#commentInput_dFT,\x20#publishKomentar','belum\x20login!','username','page','child','log','\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22cd_2\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>Apakah\x20kamu\x20yakin\x20ingin\x20menghapus\x20komentar\x20ini?</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20onclick=\x22deleteComment(\x27','ceil','bio','\x27,\x20\x27','close','mention','substring',')\x22>Prev</button>','commentInput_dFT','userId','href','Anonymous','once','innerHTML','569928AsONKK','\x22\x20onclick=\x22scrollToComment(\x27','inline-block','lastpage_','ELEMENT_NODE','4ntUPvz','childNodes','database','Terjadi\x20kesalahan\x20saat\x20menghapus\x20komentar:\x20','key','urlProfile_publik','profile-usernameKmn',')\x22>','appendChild','exists','data\x20tidak\x20ditemukan\x20kode\x20error\x20function\x20postcomment!','removeAttribute','<p>Please\x20log\x20in\x20if\x20you\x20want\x20to\x20comment.</p>','src','profile-userKmn','postkomentar','textContent','18420FpbfnT','cd_1','catch','parentNode','mentionKoment','.pkm','split','?page=','getItem','className','userName','nodeType','sort','some','Admin','update','smooth','display','createTextNode','photoURL','1660150AJJiaW','add','</a>','currentUser','?users=','scrollIntoView','205835Nuoymk','class\x20komentForm\x20tidak\x20ada','replaceChild','numChildren','customUrl_page','outerHTML','remove','data-forum-id'];_0x3569=function(){return _0x52f633;};return _0x3569();}document['getElementById'](_0x37ba89(0x1fd))[_0x37ba89(0x20d)](_0x37ba89(0x200),function(){const _0xa456a8=_0x37ba89;showSwalConfirmation(_0xa456a8(0x25a),function(){postComment();},function(){const _0x132eab=_0xa456a8;console[_0x132eab(0x237)](_0x132eab(0x230));});}),document[_0x37ba89(0x20d)](_0x37ba89(0x22b),()=>{const _0x41f2c8=_0x37ba89;let _0x249a52=document[_0x41f2c8(0x208)](_0x41f2c8(0x210))[_0x41f2c8(0x225)](_0x41f2c8(0x27d)),_0x4a446c='active_KomentarPage_'+_0x249a52,_0x44e4f8=parseInt(localStorage['getItem'](_0x4a446c));_0x44e4f8?loadkomentar(_0x44e4f8):loadkomentar(0x1);});let uskmn=document['getElementById'](_0x37ba89(0x251)),ppkmn=document[_0x37ba89(0x208)](_0x37ba89(0x259));function loadUserProfile(){const _0x248c15=_0x37ba89;let _0x3c004e=auth[_0x248c15(0x273)],_0x4b81fc=uskmn,_0x56f112=ppkmn;if(_0x3c004e&&_0x4b81fc&&_0x56f112){let _0x3df2d4=db[_0x248c15(0x21b)](_0x248c15(0x1e6))['doc'](_0x3c004e[_0x248c15(0x1fc)]);_0x3df2d4[_0x248c15(0x1fe)]()[_0x248c15(0x1ff)](_0x994cd0=>{const _0x26a26c=_0x248c15;if(_0x994cd0['exists']){let _0x18d409=_0x994cd0['data']()||{};_0x4b81fc['textContent']=_0x18d409[_0x26a26c(0x234)]||_0x26a26c(0x243),_0x56f112['src']=_0x3c004e[_0x26a26c(0x26f)]||profileAnonymous;}else console[_0x26a26c(0x237)](_0x26a26c(0x1f9));})[_0x248c15(0x25e)](_0x6c353b=>{const _0x100b4e=_0x248c15;console[_0x100b4e(0x1f2)]('Terjadi\x20kegagaln\x20saat\x20memuat\x20profil\x20user:',_0x6c353b),showSwalNotification(_0x100b4e(0x1ea));});}}auth[_0x37ba89(0x21d)](_0x4bcc8f=>{const _0x3224d6=_0x37ba89;if(_0x4bcc8f)loadUserProfile(),loadkomentar();else{loadkomentar(),uskmn[_0x3224d6(0x25b)]=_0x3224d6(0x243),ppkmn[_0x3224d6(0x258)]=profileAnonymous;let _0x19bc2e=document['getElementById'](_0x3224d6(0x204));_0x19bc2e?_0x19bc2e['innerHTML']=configKomentar[_0x3224d6(0x218)]?configKomentar[_0x3224d6(0x218)]:_0x3224d6(0x257):console['log']('class\x20ck\x20tidak\x20ada');let _0xfb44b8=document[_0x3224d6(0x208)](_0x3224d6(0x287));_0xfb44b8?_0xfb44b8[_0x3224d6(0x229)](_0x3224d6(0x232))[_0x3224d6(0x215)](_0x565109=>{_0x565109['disabled']=!0x0;}):console[_0x3224d6(0x237)]('class\x20komentForm\x20tidak\x20ada');let _0x37fb3b=document[_0x3224d6(0x208)](_0x3224d6(0x21f));_0x37fb3b?_0x37fb3b[_0x3224d6(0x229)](_0x3224d6(0x224))[_0x3224d6(0x215)](_0x1255cc=>{const _0xc0265b=_0x3224d6;_0x1255cc[_0xc0265b(0x1f4)][_0xc0265b(0x26d)]=_0xc0265b(0x201);}):conaole[_0x3224d6(0x237)](_0x3224d6(0x277));}});
