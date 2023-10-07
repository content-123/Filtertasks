const xhr=new XMLHttpRequest()

xhr.open("Get","https://restcountries.com/v3.1/all",true)
xhr.send()
xhr.onload=function redpop(){

    var data=JSON.parse(this.response)
    console.log(data)
    const res=data.reduce(function(total,curr)
    {   total=total+curr.population
      return total},0)
       
console.log(res)
}