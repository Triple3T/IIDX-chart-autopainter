javascript:var k,o,n,m,a,i_;k='9';o="http://iidx.insane.pe.kr/!/sp"+k+"/";n=0;k=parseInt(k);a={};i_=function(ii,dx){return"https://p.eagate.573.jp/game/2dx/27/djdata/music/difficulty.html?difficult="+ii+"&style=0&disp=1"+(dx<1?"":"&offset="+dx)};$.ajax({url:i_(--k,n),type:"GET",success:function(r){if($(r).find('#error-page').text().length>0){alert("Access Denied");window.location.href="p.eagate.573.jp"}else if($(r).find('div.series-difficulty').text().length<1){alert("No Data");window.location.href=i_(k,0)}else{const toolBg=$('<div>').addClass('toolBg').attr('style','position:fixed;top:0;z-index:9999;width:100%;height:100%;text-align:center;background-color:rgba(0,0,0,0.6);');const infoArea=$('<div>').addClass('infoArea').attr('style','position:relative;top:20%;width:70%;max-width:720px;height:60%;padding:15px;text-align:left;background-color:#6bcde6;color:#fcfcfc;display:inline-block;overflow:hidden;');const infoSpan=$('<span>').addClass('infoSpan').text('Waiting for score data...');infoArea.append(infoSpan);toolBg.append(infoArea);$('body').append(toolBg);goloop()}}});const _c=str=>{try{const el=document.createElement('textarea');el.value=str;el.setAttribute('readonly','');el.style.position='absolute';el.style.left='-9999px';document.body.appendChild(el);el.select();document.execCommand('copy');document.body.removeChild(el)}catch(e){alert(e)}};function moverankpage(){const _s=$('<span>').addClass('infoSpan').text('Script copied');$("div.infoArea").append("<br>");$("div.infoArea").append(_s);window.location.href=o}async function goloop(){while(n>=0){const result=await $.ajax({url:i_(k,n),type:'GET',success:function(r){n+=50;var tmp=($(r).find('div.series-difficulty').find('td').length-1)/5;if($(r).find('div.series-difficulty').html()!==undefined){const infoSpan=$('<span>').addClass('infoSpan').text('Page '+(((n-1-(n-1)%(50))/50)+1)+' loaded');$("div.infoArea").append("<br>");$("div.infoArea").append(infoSpan);$("div.infoArea").scrollTop(9999);var tn=$(r).find('div.series-difficulty').find('td');for(m=0;m<tmp;m++){a[tn[1+m*5].childNodes[0].innerText.normalize('NFD').replace(/[\u0300-\u036f]|\u2665/g,"").replace(/(^\s*)|(\s*$)/gi,"")+tn[2+m*5].innerHTML.charAt(0).toUpperCase()]=tn[5+m*5].childNodes[0].src.slice(-5,-4)-0}}else n=-1}})}$("div.toolBg").remove();const toolBg=$('<div>').addClass('toolBg').attr('style','position:fixed;top:0;z-index:9999;width:100%;height:100%;text-align:center;background-color:rgba(0,0,0,0.6);');const infoArea=$('<div>').addClass('infoArea').attr('style','position:relative;top:20%;width:70%;max-width:720px;height:60%;padding:15px;text-align:left;background-color:#6bcde6;color:#fcfcfc;display:inline-block;overflow:hidden;');const infoSpan=$('<span>').addClass('infoSpan').text('Completed! Push button below.');$('body').delegate("button.infoButton",'click',function(){_c(_t);moverankpage()});const infoButton=$('<button>').addClass('infoButton').text('Copy and go to iidx.insane.pe.kr');infoArea.append(infoSpan);infoArea.append("<br>");infoArea.append(infoButton);toolBg.append(infoArea);$('body').append(toolBg);_t="javascript:var D,P,_r,a,n,k,s=String.raw`"+JSON.stringify(a)+"`;"+`D=s;s=$('#editform').serialize().slice(0,92)+"edit&v=";_r=function(ii,dx){return'%5B%7B%22id%22%3A'+ii+'%2C%22clear%22%3A'+(dx===undefined?0:dx)+'%7D%5D'};async function cloop(){const toolBg=$('<div>').addClass('toolBg').attr('style','position:fixed;top:0;z-index:9999;width:100%;height:100%;text-align:center;background-color:rgba(0,0,0,0.6);');const infoArea=$('<div>').addClass('infoArea').attr('style','position:relative;top:20%;width:70%;max-width:720px;height:60%;padding:15px;text-align:left;background-color:#6bcde6;color:#fcfcfc;display:inline-block;overflow:hidden;');const infoSpan=$('<span>').addClass('infoSpan').text('Overwriting status...');infoArea.append(infoSpan);toolBg.append(infoArea);$('body').append(toolBg);try{n=JSON.parse(D)}catch(e){alert(e)}for(P=0;P<tabledata.categories.length;P++){for(D=0;D<tabledata.categories[P].items.length;D++){var _=tabledata.categories[P].items[D];k=_.pkid;a=_.data.title.normalize('NFD').replace(/[\\u0300-\\u036f]|\\u2665/g,"").replace(/(^\\s*)|(\\s*$)/gi,"");if(_.data.diff==="L"){if(a.substr(-12)==="\\u2020LEGGENDARIA")a=a.slice(0,-12);else if(a.substr(-1).charCodeAt(0)===8224){if(a.charCodeAt(0)===8224){if(a.substr(-2).charCodeAt(0)===8224)a=a.slice(0,-1)}else a=a.slice(0,-1)}}a+=_.data.diff;const result=await $.ajax({url:"/!/modify/",type:"POST",data:s+_r(k,n[a]),success:function(r){delete n[a]}})}const compSpan=$('<span>').addClass('infoSpan').text(tabledata.categories[P].category+' painted');infoArea.append('<br>');infoArea.append(compSpan);infoArea.scrollTop(9999)}var _='';if(Object.keys(n).length>0){const __={"N":"NORMAL","H":"HYPER","A":"ANOTHER","L":"LEGGENDARIA"};Object.keys(n).forEach(D=>{if(!n[D])return'';_+=D.slice(0,-1)+' '+__[D.substr(-1)]+': '+["NO PLAY","FAILED","A-CLEAR","E-CLEAR","CLEAR","H-CLEAR","EXH-CLEAR","F-COMBO"][n[D]]+'\\n'});if(_)_="다음의 기록(들)은 수동으로 칠해야 합니다:\\n"+_}infoArea.append('<br>');const allCompSpan=$('<span>').addClass('infoSpan').text('All painted. Reloading...');infoArea.append(allCompSpan);infoArea.scrollTop(9999);if(_)alert(_);location.reload(1)}cloop()`}
