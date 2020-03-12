var fs = require('fs');
var url=require('url');
var http=require('http');
var app = http.createServer(function(request,response){
var _url=request.url;
var queryData=url.parse(_url,true).query;
console.log(_url);
console.log(queryData);

response.writeHead(200);
fs.readdir('data/',function(err,list){
  console.log(list);
});
fs.readFile(`data/${queryData.id}`,'utf8',function(err,data){
  var temp=`
hi hello ${queryData.id}
dkslkjfe ==
${data}
  `;
  response.end(temp);
});



});
app.listen(3000);
