const xhr=new XMLHttpRequest()

xhr.open("Get","https://restcountries.com/v3.1/all",true)
xhr.send()

xhr.onload=function ncf(){

    var data=JSON.parse(this.response)
    console.log(data)
    data.forEach((x)=>console.log(x.name.common,x.capital,x.flag ))


}
