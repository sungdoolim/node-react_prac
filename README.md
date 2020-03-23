# node-react_prac
기초적인 node와 react를 연습했습니다.




//

js :
폼 태그 이용 
<input type="button" value="이동" onClick="location.replace('http://www.w3.org')"><br>
함수 선언시 : onClick="layer1()"

<script>
document.write("");
function sa(){return 3;}  / 파이썬과 같음
var input = prompt("당신은 누구십니까?", "이름을 입력해 주세요");
변수 : var a=parseInt(prompt("22"));

모든 이벤트는:
window.onliad=function(){
// 이 안에서 해야함 = 변수선언...뭐 그런것들...
var a=document.getElementById('header');// css조작
a.style.color='orange';

객체{
function info() { document.writeln("학생정보 : 이름은 " + this.name +
"이고, 학과는 " + this.dept + "입니다."); }
function student(identity, name, department) {
this.id = identity;
this.name = name;
this.dept = department;
this.stInfo = info ;
}
st = new student("2015001", "김소연", "컴퓨터공학");

}
</script>

jquery{

$(document).ready(function (){ //이 안에서 사용
$('h1').css('color','red');
$('h1').css('bacground','black');
$('.class').css('bacground','black');
$('#id').css('bacground','black');

$('#box').hover(function(){ hover됬을때   },function(){ hover 아닐때  } );

$('#img').attr('src','index.jsp');
$('h1').click(function (){
                                 });

});



}
json


ajax{
statuus 200= 성공
<input type="button" value="fetch" onclick="
  fetch('2.html').then(function(response){
    response.text().then(function(text){
      alert(text);
      document.querySelector('div').innerHTML=text;
    })
  })"       />
여기서 response에는 status가 존재하고 text()로 소환 가능




}


react{
npm start run: cmd에서 샘플 실행시키기
cmd에서 리액트 설치된 폴더로 와서 해야함

APP.js안에 에서 수정하면 반영됨


클래스의 return안에는 무조건 하나의 태그로 감싸여 있어야한다

props : 속성으로 접근하겠다!

class App extends Component {

---------------------------
  constructor(props){
    super(props);

  }
---------------------------
  state={
  selected_content_id:2,
mode:'read',
    contents:[{id:1,title:'html',desc:'html 이에요'},
{id:2,title:'react',desc:'react 이에요'},
{id:3,title:'nodejs',desc:'nodejs 이에요'}
  ]}

-----------------------------------------
  getSelectedContent(){// selectedid에 대응하는 contents를 리턴

    var i=0;
    var list=[];
    while(i<this.state.contents.length){
var data=this.state.contents[i];
if(this.state.selected_content_id===data.id){
  return data;
    }
  }
}

----------------------------
  render() {


    console.log('App render');
    return (
      <div className="App">
<Subject onClick={function(){
this.setState({mode:'Welcome'});
}} title="react" sub="this is react"></Subject>
<Toc onSelect={function(param ){

//this.state.selected_content_id=param;
//위는 안바뀜.... 받아왔으면 set 해야지
this.setState({
  selected_content_id:param    // = 으로 하는게 아니야! ::::::::
,mode:'read'
});

}.bind(this)} data={this.state.contents}></Toc>
//얘도 함수 안에서 this 쓰려면 bind!

<Content data={this.getSelectedContent()}></Content> --- 함수로 할꺼임!!

      </div>
    );
  }
}                    -- 크게 div로 감싸여 있음
-----------------------------------------

컨텐트를 함수로 빼보자
getContentComponent(){

  if(this.state.mode==='read'){
    return <Content data={this.getSelectedContent()}></Content>
  }else if(this.state.mode==='Welcome'){
    return <Content data={
        {
          title:'Welcome',
          desc: 'hi'
          }
    }></Content>
  }
}


----------------------------------------
class Subject extends Component{
  render(){
    return(
<div>
<h2>
<a hef="" onClic={function(e){e.prevendefau(); this.props.onClik();}.bind(this)}>
{this.props.title}
</a>
</h2>
<h1>hi hello </h1>
</div>
    );
  }
}
-----사용자 정의 태그


class Toc extends Component{

//<Toc data={this.state.contents}></Toc>//
  render(){// 무조건 render밑으로!!!
var list=[
  <li><a href="#">hi</a></li>
  <li><a href="#">hello</a></li>
  <li><a href="#">안녕</a></li>

];

얘를 동적으로 바꾸자
var list=[];
  while(i<this.props.data.length){
    list.push(<li><a href="#" onClick={function(id,e){// 첫 번째 데이터로 data.id 가 전달 되는데 this.bind의 두번째 데이터 가  첫번째 인자로 들어오는 것임

e.preventDefault();// a태그기능 상실    onClick 대문자 주의
this.props.onSelect(id);// 인자값을 외부 함수로 전달
}.bind(this,data.id)}> // 함수에서 함수부를때 this사용하려면 사용해야함!!
//첫번째 데이터로 data.id를 전달할수 있음
{this.props.data[i] .title}</a></li>);
      i=i+1;
    }


    return(
<ol>
{list}
</ol>
    );
  }
}
--------------------------

Content쪽에는
--------------------------------
class Content extends Component{

  render(){
    return(
<h3>{this.props.data.title}
<br/>{this.props.data.desc}</h3>
    );
  }
}
------------------------------
외부 js파일로 빼내기
A코드 전체를 A.js파일로 따로 빼내기
import './djel/A'하면 되고,
A.js에는 마지막에 export default A;
맨위에는 import React, {Component} from 'react';


render 전에는 얘가 먼저 실행됨
constructor(props){
    super(props);
    this.state={
      mode:"welcome",
      a:{title:'WEB',sub:'REACT!!!'} ,
      b: [
           {id=1,title='html' desc:'hi hello 안녕'},
           {id=2,title='css' desc:'hi hello css'},
           {id=3,title='react' desc:'hi hello react'}
]
    };
  }
<Subject title={this.state.a.title} sub={this.state.a.sub}></Subject>
  로 사용 가능



render(){
  var _title,_sub;
if(this.state.mode==="welcome")
{
  _title=this.state.c.title;
  _sub=this.state.c.sub;

}else if(this.state.mode==="read"){

    _title=this.state.a.title;
    _sub=this.state.a.sub;
}
  return (
    <div className="App">
    Hello React!!

    <Subject title={_title} sub={_sub}></Subject>
    <NAV data={this.state.b}/>
    </div>
  );
}
}
어떤 태그의 기능 무효화
e.preventDefault();
<a href="#" onClick={function(e){e.preventDefault()}} : 링크 이동 안함

this 사용하기위해서는 .bind(this)
push: 원본을 바꿈
concat: 원본을 바꾸지 않음








node js



node 깔려진 폴더에서
node main.js    :  코드 수정시 마다 재시작 해줘야함
pm2 start main.js로 해도 됨  q누르면 나갈수 있고
pm2 stop main : 으로 꺼야하고, 
pm2 start main.js --watch하면 코드 수정후 재시작 필요없음
pm2 log :  문제 보기


그후 localhost:3000


템플릿 :
var fs = require('fs');// 파일관련 .... 디렉토리 관련....
var url=require('url');
var http=require('http');
var app = http.createServer(function(request,response){
        var _url=request.url;                                   //url 로드
         var queryData=url.parse(_url,true).query;   // url에 get방식 값들을 json 로드
         console.log(url);
         console.log(queryData);  찍어보면 key : value로 나옴
         if(_url==='/'){
                   _url='/index.html';   기본값 url지정
 }
----------------------------------------
if(_url==='/favicon.ico'){ 
                  response.writeHead(4 04);
            return;
 }
         response.writeHead(200);
---------------------------------------

//         response.end(queryData.id);    
  //key:value 중에 idkey에 해당하는value 출력  =>end부분이 출력부분!!!

------------

fs.readFile(`data/${queryData.id}`,'utf8',function(err,data){
  var temp=`
hi hello ${queryData.id}
dkslkjfe ==
${data}
  `;
  response.end(temp);
})

이렇게 되면 data/queryData.id파일을 읽어서 data에 저장후에
hi hello 쿼리id
dkd==읽은 데이터
를 출력
----------------


 });
  app.listen(3000);

url에 \? id=v
라고 했을때 받아오는것임

변수를 스트링 내에서 사용하려면 var a=queryData.id    
var s= `dfefsdfsdf ${a} sdfefdf ` ; 이런식 




var fs = require('fs');
fs.readFile('sample.txt', 'utf8', function(err, data){
  console.log(data);
});
파일 가져오기 :
data에는 sample.txt의 내용이 들어있음


node에서 null은 undefined
=>
if(queryData.id===undefined){로 사용 가능 }    // get 방식의 id의 값이 존재여부



react 100 
node 30
