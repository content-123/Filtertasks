const xhr=new XMLHttpRequest()

xhr.open("Get","https://restcountries.com/v3.1/all",true)

xhr.send()

xhr.onload=function usd(){
    var data=JSON.parse(this.response)
    console.log(data)
    const op=data.filter((x)=>{

        if(x.currencies=="USD"){
        return  x.currencies;
    }
        })
        console.log(op)
    }
