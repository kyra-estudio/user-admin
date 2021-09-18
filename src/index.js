const server = require ("./server")
require("./database")

server.listen(server.get('port'), () => {
  console.log('server running on port: ', server.get('port'));
});