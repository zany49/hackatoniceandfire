
//header
var div1 = document.createElement('div')
div1.setAttribute("class"," no-gutters")
var div2 = document.createElement('div')
div2.setAttribute("class","heading  no-gutters")
var h4 = document.createElement('h4')
h4.innerText = "WELCOME TO  ICE AND FIRE API"

var btn1 = document.createElement("button")
btn1.setAttribute("class","  btn btn-outline-light")
btn1.setAttribute("id","button1")
 btn1.setAttribute("onclick","getdata()")
btn1.innerText = " FETCH DATA PAGE 1"

var btn2 = document.createElement("button")
btn2.setAttribute("class","  btn btn-outline-light")
btn2.setAttribute("id","button2")
 btn2.setAttribute("onclick","getdatas()")
btn2.innerText = " FETCH DATA PAGE 2 "

div2.appendChild(h4)
div2.appendChild(btn1)
div2.appendChild(btn2)
div1.appendChild(div2)
document.body.appendChild(div1)

//displaying data content
var divbd1 = document.createElement('div')
var divbd2 = document.createElement('div')
divbd1.setAttribute("class","container2  no-gutters")
divbd2.setAttribute("id","book")
divbd1.setAttribute("id","container2")
divbd1.appendChild(divbd2)
document.body.appendChild(divbd1)

//fetching the data when the button is clicked

// document.getElementById("button1").onclick = 
async function getdata(){
try{
var data = await fetch("https://anapioficeandfire.com/api/books?page=1&pageSize=12")
var res = await data.json();
console.log(res);


res.map(res=>{
    var div4 = document.createElement('div')
    var isbn = document.createElement('h5');
    var h3 = document.createElement('h3')
    var page = document.createElement('h5');
    var authors = document.createElement('h5');
    var publisher  = document.createElement('h5');
    var released  = document.createElement('h5');
    var button2 = document.createElement('button')
    
        
    div4.setAttribute("id","books")
    button2.setAttribute("class","btn-dark")
    button2.setAttribute("id","but2")
    
    h3.innerText = res.name;
    isbn.innerText = ("📔ISBN:" + res.isbn)
    page.innerText = ("📖 Number Of Pages:"+ res.numberOfPages)
    authors.innerText = ("👨 Authors:"+ res.authors)
    publisher.innerText = ("📢 Publisher:"+ res.publisher)
    released.innerText = ("⏰Released:"+ res.released)
     button2.innerText = "characters";
     button2.setAttribute("onclick","getchar()")
     
     
    div4.appendChild(h3)
    div4.appendChild(isbn)
    div4.appendChild(page)
    div4.appendChild(authors) 
    div4.appendChild(publisher)
    div4.appendChild(released)
    div4.appendChild(button2)
   
    
    document.getElementById("book").appendChild(div4)
    

})

}catch(error){
    console.log(error)
}  



}
async function getdatas(){
    try{
    var data = await fetch("https://www.anapioficeandfire.com/api/books?page=1&pageSize=10")
     var res = await data.json();   
    console.log(res);
    
    
    res.map(res=>{
        var div4 = document.createElement('div')
        var isbn = document.createElement('h5');
        var h3 = document.createElement('h3')
        var page = document.createElement('h5');
        var authors = document.createElement('h5');
        var publisher  = document.createElement('h5');
        var released  = document.createElement('h5');
        var button2 = document.createElement('button')
        
            
        div4.setAttribute("id","books")
        button2.setAttribute("class","btn-dark")
        button2.setAttribute("id","but2")
        
        h3.innerText = res.name;
        isbn.innerText = ("📔ISBN:" + res.isbn)
        page.innerText = ("📖 Number Of Pages:"+ res.numberOfPages)
        authors.innerText = ("👨 Authors:"+ res.authors)
        publisher.innerText = ("📢 Publisher:"+ res.publisher)
        released.innerText = ("⏰Released:"+ res.released)
         button2.innerText = "characters";
         button2.setAttribute("onclick","getchars()")
         
         
        div4.appendChild(h3)
        div4.appendChild(isbn)
        div4.appendChild(page)
        div4.appendChild(authors) 
        div4.appendChild(publisher)
        div4.appendChild(released)
        div4.appendChild(button2)
       
        
        document.getElementById("book").appendChild(div4)
        
    
    })
    
    }catch(error){
        console.log(error)
    }  
    
}


async function getchar(){
    var res = await fetch("https://www.anapioficeandfire.com/api/characters?page=2&pageSize=10")
    var resdata = await res.json();
    // console.log(resdata)
 

    for( var i=0;i<5;i++){
        var div6 = document.createElement('div')
        var h5 = document.createElement('h5')
        var gen = document.createElement('h5')
        var aliases = document.createElement('h5')
        div6.setAttribute('class','div6')
        h5.innerText = ("Name:" + resdata[i].name);
        gen.innerText = ("Gender:" + resdata[i].gender);
        aliases.innerText = ("Aliases:" + resdata[i].aliases)

        
        div6.appendChild(h5)
        div6.appendChild(gen)
        div6.appendChild(aliases)
    document.getElementById("books").appendChild(div6)
    
    }
}


async function getchars(){
    var res = await fetch("https://www.anapioficeandfire.com/api/characters?page=2&pageSize=10")
    var resdata = await res.json();
    // console.log(resdata)
 

    for( var i=0;i<5;i++){
        var div6 = document.createElement('div')
        var h5 = document.createElement('h5')
        var gen = document.createElement('h5')
        var aliases = document.createElement('h5')

        div6.setAttribute('class','div6')
        h5.innerText = ("Name:" + resdata[i].name);
        gen.innerText = ("Gender:" + resdata[i].gender);
        aliases.innerText = ("Aliases:" + resdata[i].aliases)

        
        div6.appendChild(h5)
        div6.appendChild(gen)
        div6.appendChild(aliases)
    document.getElementById("books").appendChild(div6)
    
    }
}


