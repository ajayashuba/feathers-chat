const myService = {
  find(params) {
setTimeout(()=>{console.log('emitted');this.emit('status',{kabua:'abcd'})},2000)
    return Promise.resolve(344);
  }}
      
  module.exports=function(app){
        this.events = ['status']
    
app.use('/ok', myService);

    
  }
    
  
