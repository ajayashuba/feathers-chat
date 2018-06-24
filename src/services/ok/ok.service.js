const myService = {

  find(params) {
    


    return Promise.resolve(344);
  }}
      
  module.exports=function(app){
    
app.use('/ok', myService);
    i=app.service('ok')
i.events=['status'];
    console.log(i)
     setTimeout(()=>{console.log('emitted');i.emit('status',{kabua:'abcd'})},5000)


    
  }
    
  
