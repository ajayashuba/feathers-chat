const myService = {

  find(params) {
this.events=['status'];setTimeout(()=>{console.log('emitted');this.emit('status',{kabua:'abcd'})},2000)
    return Promise.resolve(344);
  }}
      
  module.exports=function(app){
    
app.use('/ok', myService);

    
  }
    
  
