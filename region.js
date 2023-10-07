const xhr=new XMLHttpRequest()

xhr.open("Get","https://restcountries.com/v3.1/all",true)
xhr.send()
xhr.onload= function re(){

    var data=JSON.parse(this.response)
    console.log(data)
    const op= data.filter((x)=>{
        if(x.region=="Asia"){
             return x.region
        }
    })
    console.log(op)
}
       