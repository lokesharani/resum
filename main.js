function getfile(file,callBack){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");

  xhr.onredystatechange = function(){
  if(xhr.onredyState=== 4 && xhr.status =="200")
  {
    callback(xhr.responseText);
  }
};
xhr.send();
}
getfile("data.Json",Function(text){
  let data=JSON.parse(text);
  console.log(data);
});

var parent = document.querySelector(".flex-parent");
 var child1 = document.createElement("div");
 child1.classList.add("profile");
 parent.appendChild(child1);

 var child2 = document.createElement("div");
 child2.classList.add("content");
 parent.appendChild(child2);

function details(basic) {
 var img = document.createElement("img");
 img.src = basic.photo;
 child1.appendChild(img);

 var name = document.createElement("h3");
 name.textContent = basic.name;
 child1.appendChild(name);

 var email = document.createElement("a");
 email.href = "mailto:lokeshvijay192@gmail.com";
 email.textContent = basic.email;
 child1.appendChild(email);

var mobile = document.createElement("h3");
mobile.textContent = basic.mobile;
child1.appendChild(mobile);

var address = document.createElement("h4");
address.textContent = "address"
address.textContent = basic.address;
child1.appendChild(address);

var hr = document.createElement("hr");
child1.appendChild(hr);

var address = document.createElement("paragraph");
address.textContent = basic.address;
child1.appendChild(address);
function career(obj) {
var heading=document.createElement("h2");
child2.appendChild(heading);

heading.textContent = "career objective"

var hline = document.createElement("hr");
child2.appendChild(hline);

var p=document.createElement("p");
p.textContent = obj.info;
child2.appendChild(p);
}
function education(edu) {
var heading=document.createElement("h2");
child2.appendChild(heading);
heading.textContent="Educational details"

var hline = document.createElement("hr");
child2.appendChild(hline);
var list=document.createElement("ul");
child2.appendChild(list);
for (var i=0; i<edu.length; i++){
  var litem=document.createElement("li");
  list.appendChild(litem);
  litem.textContent=edu[i].cource;
}
}
}
