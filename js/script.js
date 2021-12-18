const url= "https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json"

// function api_data(url){
//   let request= new XMLHttpRequest();
//   request.open('GET', url,true);
//   request.onload=()=>{
//     let data=request.responseText;
//       data=JSON.parse(data);
//     createTable(data);
//   }
//   request.send();
// }

function createTable(data){
    let table=document.getElementById("data");
    /**creating header */
    let thead = table.createTHead();
  let row = thead.insertRow();
  for(let key in data[1]) {
    let th = document.createElement('th');
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
  /** adding rows into table */
  let i = 0;
  for (let element of data){
    i++;
    if(i==11){
      break;
    }
    let row = table.insertRow();
    for(key in element){
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}

function createTHead(table, data){
  let thead = table.createTHead();
  let row = thead.insertRow();
  for(let i of data){
    let th =document.createElement("th");
    let text = docuent.createTextNode("i");
    th.appendChild(text);
    row.appendChild(th);
  }
}
// api_data(url);

function myfunction(x){
  let request= new XMLHttpRequest();
    request.open('GET', url,true);
    request.onload=()=>{
      let data=request.responseText;
      data=JSON.parse(data);
      document.getElementById("data").innerHTML= "";
      const p_length = 10;
      data = data.splice((Number(x)-1) * p_length,Number(x)*p_length);
      let table=document.getElementById("data");
      createTable(data);
    }
    request.send();
}
myfunction(1);