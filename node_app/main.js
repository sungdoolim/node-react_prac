var http = require('http');
var fs = require('fs');
var url=require('url');
var qs=require('querystring');
function templateHTML(title,list,body,control){
  return `<!doctype html>
  <html>
  <head>
    <title>WEB1 - ${title}</title>
    <meta charset="utf-8">
  </head>
  <body>
    <h1><a href="/">${title}</a></h1>
${list}
${control}
${body}
  </body>
  </html>

`;
}
function templateList(filelist){
  var list='<ul>';
  var i=0;
  while(true){
  list=list+`<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
  i++;
  if(i>=filelist.length){
    break;
  }
  }
  list=list+'</ul>';
  return list;
}
var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData=url.parse(_url,true).query;
    var title=queryData.id;
    var pathname=url.parse(_url,true).pathname;
    console.log(pathname);
if(pathname==='/'){
  if(queryData.id===undefined){
    fs.readdir('./data',function(error,filelist){
console.log(filelist);
var title='Welcome';
var description='Hello, node.js';
var list=templateList(filelist);
     var template=templateHTML(title,list,`
       <h2>${title}</h2>  <h3>  ${description}</h3>`,
       `<a href="/create">create</a>`
    );
response.writeHead(200);
response.end(template);
    })
}else{
  fs.readdir('./data',function(error,filelist){
console.log(filelist);

   fs.readFile(`data/${queryData.id}`,'utf8',function(err,description){
     title=queryData.id;

     var list=templateList(filelist);
     var template=templateHTML(title,list,
       ` <h2>${title}</h2>  <h3>  ${description}</h3>`,
       `<a href="/create">create</a>
       <a href="/update?id=${title}">update</a>
       <form action="/delete_process" method="post">
       <input type="hidden" name='id' value="${title}">
       <input type="submit" value="delete">
       </form>`
     );
     response.writeHead(200);
  response.end(template);
});
});
}
}else if(pathname ==='/create'){
  fs.readdir('./data',function(error,filelist){
console.log(filelist);
var title='web -create';
var list=templateList(filelist);
   var template=templateHTML(title,list,`
     <h2>${title}</h2> <form action =
     "/create_process" method="post">
     <input type="text" name ="title">
    <br> <textarea name="description"></textarea>
    <br><input type="submit"></form>`,'');
response.writeHead(200);
response.end(template);
})

}else if(pathname==='/create_process'){
  var body = '';
     request.on('data', function(data){
         body = body + data;
     });
     request.on('end', function(){
         var post = qs.parse(body);
         var title = post.title;
         var description = post.description;
         fs.writeFile(`data/${title}`,description,'utf8',function(){
           response.writeHead(302,{Location:`/?id=${title}`});// 페이지 이동
           response.end('success');
         });
         console.log(post);
     });

}
else if (pathname==='/update'){

  fs.readdir('./data',function(error,filelist){
console.log(filelist);

   fs.readFile(`data/${queryData.id}`,'utf8',function(err,description){
     title=queryData.id;

     var list=templateList(filelist);
     var template=templateHTML(title,list,
       `
       <form action =
       "/update_process" method="post">

       <input type="hidden" name ="id" value=${title}>

       <input type="text" name ="title" value=${title}>
       <br> <textarea name="description">${description}</textarea>
       <br><input type="submit"></form>

       `,
       `<a href="/create">create</a>
       <a href="/update?id=${title}">update</a>`);
     response.writeHead(200);
  response.end(template);
});
});

}else if(pathname==='/update_process'){
  var body = '';
     request.on('data', function(data){
         body = body + data;
     });
     request.on('end', function(){
         var post = qs.parse(body);
         var id=post.id;
         var title = post.title;
         var description = post.description;


         fs.rename(`data/${id}`,`data/${title}`,function(error){
           fs.writeFile(`data/${title}`,description,'utf8',function(){
              response.writeHead(302,{Location:`/?id=${title}`});// 페이지 이동
              response.end('success');})
         })
         console.log(post);
     });
}
else if(pathname==='/delete_process'){

  var body = '';
     request.on('data', function(data){
         body = body + data;
     });
     request.on('end', function(){
         var post = qs.parse(body);
         var id=post.id;
         fs.unlink(`data/${id}`,function(error){
           response.writeHead(302,{Location:`/`});
           response.end();
         })
       });


     }
else{
  response.writeHead(404);
response.end("not found");
}
});
app.listen(3000);
