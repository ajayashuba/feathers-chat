const myService = {
  find(params) {
this.emit('status',{kabua:'abcd'});
    return Promise.resolve(344);
  }}
      
  module.exports=function(app){
        app.events = [ 'status' ]

    
      app.use('/ok', myService);

    
  }
    
  
