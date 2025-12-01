let getdata=async()=>{
    let api='https://jsonplaceholder.typicode.com/users'
    let res=await fetch(api)
    let data=await res.json()
    console.log(data);

    
let show=document.querySelector('#show')
    
     
     data.map((e)=>{
      
       
       
          show.innerHTML+=
          `
           <div class="box">
           <p><strong>UserId:</strong>${e.UserId}</p>  
           <p><strong>id:</strong>${e.id}</p>  
           <p><strong>title:</strong>${e.title}</p>  
           <p><strong>body:</strong>${e.body}</p>            
          `

     })
    
}
getdata()