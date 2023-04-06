function getConnection(){
  //Função para pegar a conexão
  const mysql= require('mysql')//importa o modulo do Mysql

  if(global.connection && global.connection!='disconnected' ){ //verifica se a conexão existe
     return global.connection;
  }
    global.connection= mysql.createConnection({
      host:'localhost', 
      user: 'root', 
      password:'ifpe', 
      database: 'ecom'
    });

    return global.connection;

}

module.exports ={getConnection}