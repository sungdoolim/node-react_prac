var fs = require('fs');
var url=require('url');
var http=require('http');

function descripti(param){
  var desc=``;
  if(param==='html'){
    desc=`html 입니다`;
  }else if(param==='js'){
    desc=`js 입니다`;
  }else if(param==='react'){
    desc=`react 입니다`;
  }else{
    desc='welcome 입니다';
  }
  return desc;
}

function crud(){

var v=`<ol>
<li><a href="/create">create</a></li>
<li><a href="/update">update</a></li>
<li><a href="/delete">delete</a></li>
</ol>`
return v;

}
function dircome(){
  list=`<ul>`;
  var file=fs.readdir(`./data`,'utf8',function(err,data){
console.log(data);
    for(i=0;i<data.length;i++)
  {
list=list+`<li><a href="/${data[i]}">${data[i]}</a></li>`;
}list=list+`</ul>`;
});
console.log(list);
return list;

}
function crudfom(pathname){
  var result;
  switch (pathname) {
    case '/create':result=`<form action='/c'><input type="text" action='/c'><input type="submit">
    </form>`;
      break;
      case '/delete':result=`<form><input type="text" action='/d'><input type="submit">
      </form>`;
      break;
      case '/update':result=`<form><input type="text" action='/u'><input type="submit">
      </form>`;
      break;
    default:
    break;
  }
return result;
}

var app = http.createServer(function(request,response){
var _url=request.url;
var queryData=url.parse(_url,true).query;
var pathname=url.parse(_url,true).pathname;
console.log(queryData);

response.writeHead(200);
if(pathname=='/c'){

}

var ol=dircome();

var des=descripti(queryData.id);

var fom=crud();
var tfom=crudfom(pathname);

var temp=`
<html>
<head>  <meta charset="utf-8"></head>
${ol}<br>
${des}<br>
${fom}
${tfom}
</html>`;
console.log(pathname);
console.log(queryData.id);

  response.end(temp);


});
app.listen(3000);
