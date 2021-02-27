module.exports = {
    networks: {
          development: {
                host: 'localhost',
                port: 7545,
                network_id: '*' //* will match to any network id
                }
       },
    compilers: {solc: {version: "0.4.21", 
        }}
};
