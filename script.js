let button=document.querySelector("#submit")
let formSection=document.querySelector("#form")
let form=document.querySelector("#form form")
let add=document.querySelector("#addABook")
let myLibrary=[]
let count=0
function book(title,author,page,read){
    this.title=title
    this.author=author
    this.page=page
    if(read===1)
        this.read="Read"
    else
        this.read="Not read "
}
book.prototype.info=function () {
    return `${this.title} by ${this.author}, ${this.page} pages ${this.read}`

    
}
function addBookToLibrary() {
    let title,author,page,read
    title=form.elements["title"].value
    author=form.elements["author"].value
    page=form.elements["page"].value
    if(form.elements["read"].checked)  
        read=1
    else
        read=0
    let bookInput=new book(title,author,page,read)
    myLibrary.unshift(bookInput)
    let div=document.createElement("div")
    div.classList.add("book")
    books.appendChild(div)
    let h1Title=document.createElement("h1")
    let h1Author=document.createElement("h1")
    let h1Page=document.createElement("h1")
    let h1Read=document.createElement("h1")
    let delDiv=document.createElement("button")
    let toggleLabel=document.createElement("label")
    toggleLabel.classList.add("toggle")
    let toggleInput=document.createElement("input")
    toggleInput.setAttribute("type", "checkbox");
    let toggleSpan=document.createElement("span")
    toggleSpan.classList.add("slider")
    let readDiv=document.createElement("div")
    delDiv.innerHTML="Delete"
    delDiv.classList.add("delete")
    let del=document.querySelector("#delete")
    let allDels=document.querySelectorAll(".delete")
    delDiv.addEventListener("click",function(){
        div.remove()
    })
   delDiv.style.display=allDels[0].style.display
    del.addEventListener("click",function()
    {   
        if(delDiv.style.display!=="inline-block")
            delDiv.style.display="inline-block"
        else
            delDiv.style.display="none"

        })
    if(myLibrary[0].read=="Read"){
        toggleInput.setAttribute("checked","true")
    }
    toggleInput.addEventListener("click",function(){
        if(toggleInput.checked){
            myLibrary[0].read=1
            h1Read.innerHTML="Read"
        }
        else{
            myLibrary[0].read=0
            h1Read.innerHTML="Not Read"
        }
    })
    div.appendChild(h1Title)
    div.appendChild(h1Author)
    div.appendChild(h1Page)
    readDiv.appendChild(h1Read)
    readDiv.append(toggleLabel)
    toggleLabel.append(toggleInput)
    toggleLabel.append(toggleSpan)
    div.appendChild(readDiv)
    div.appendChild(delDiv)
    h1Title.innerHTML="Title:"+myLibrary[0].title
    h1Author.innerHTML="Author:"+myLibrary[0].author
    h1Page.innerHTML="Page Number:"+myLibrary[0].page
    h1Read.innerHTML=myLibrary[0].read


    form.reset()
}
button.addEventListener("click",()=>{
    if(formSection.style.display!=="block")
        formSection.style.display="block"
    else
        formSection.style.display="none"
    })
let inputs=form.getElementsByTagName("input")
add.addEventListener("click",function(){
    let emptycount=0
    for(let i=0;i<inputs.length;i++)
    {
            if(inputs[i].value==="")    
                emptycount++
    }
    if(emptycount===0)
    {
        formSection.style.display="none"
        addBookToLibrary()
    }
    else
    {
        console.log(emptycount)
        alert("Please fill in all fields")
        emptycount=0
    }
       
})
    

const book1=new book("The Hobbit","Jrr Tolkien",295,1)
const book2=new book("Martian","anony",300,0)
myLibrary.unshift(book1)
myLibrary.unshift(book2)

let books=document.querySelector("#books")
let div=document.createElement("div")
div.classList.add("book")
for(let i=0;i<myLibrary.length;i++)
{   
    let div=document.createElement("div")
    div.classList.add("book")
    books.appendChild(div)
    let h1Title=document.createElement("h1")
    let h1Author=document.createElement("h1")
    let h1Page=document.createElement("h1")
    let h1Read=document.createElement("h1")
    let delDiv=document.createElement("button")
    let toggleLabel=document.createElement("label")
    toggleLabel.classList.add("toggle")
    let toggleInput=document.createElement("input")
    toggleInput.setAttribute("type", "checkbox");
    let toggleSpan=document.createElement("span")
    toggleSpan.classList.add("slider")

    delDiv.innerHTML="Delete"
    delDiv.classList.add("delete")
    delDiv.addEventListener("click",function(){
        div.remove()
    })
    if(myLibrary[i].read=="Read"){
        toggleInput.setAttribute("checked","true")
    }

    toggleInput.addEventListener("click",function(){
        if(toggleInput.checked){
            myLibrary[i].read="Read"
            h1Read.innerHTML="Read"
        }
        else{
            myLibrary[i].read="Not Read"
            h1Read.innerHTML="Not Read"
        }
    })
    let readDiv=document.createElement("div")
    div.appendChild(h1Title)
    div.appendChild(h1Author)
    div.appendChild(h1Page)
    readDiv.appendChild(h1Read)
    readDiv.append(toggleLabel)
    toggleLabel.append(toggleInput)
    toggleLabel.append(toggleSpan)
    div.appendChild(readDiv)
    div.appendChild(delDiv)

    h1Title.innerHTML="Title:"+myLibrary[i].title
    h1Author.innerHTML="Author:"+myLibrary[i].author
    h1Page.innerHTML="Page Number:"+myLibrary[i].page
    h1Read.innerHTML=myLibrary[i].read
}

let del=document.querySelector("#delete")
let allDels=document.querySelectorAll(".delete")
del.addEventListener("click",function(){
    for(let i=0;i<allDels.length;i++){
        if(allDels[i].style.display!=="inline-block")
            allDels[i].style.display="inline-block"
        else
            allDels[i].style.display="none"
}
})
let cancel=document.querySelector("#cancel")
cancel.addEventListener("click",function(){
    formSection.style.display="none"
})
