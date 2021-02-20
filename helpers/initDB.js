  //bhtspeech@gmail.com bht123456
  //RpRdgc8EfRX5Y7bY
  import mongoose from 'mongoose'

  function initDB(){
      if(mongoose.connections[0].readyState){
          console.log("ALREADY CONNECTED")
          return
      }
      mongoose.connect('mongodb+srv://speechtotext:RpRdgc8EfRX5Y7bY@cluster0.adaqf.mongodb.net/speechtotext?retryWrites=true&w=majority', {useNewUrlParser: true,useUnifiedTopology:true});
      mongoose.connection.once('open', function(){
        console.log('Conection has been made!');
      }).on('error', function(error){
          console.log('Error is: ', error);
      });
    }
  export default initDB