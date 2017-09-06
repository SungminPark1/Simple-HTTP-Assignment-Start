const text = require('./textResponses.js');

const getHellowJSON = (req, res) => {
  const helloJSON = {
    message: text.hello,
  };
  const stringMessage = JSON.stringify(helloJSON);

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.write(stringMessage);
  res.end();
};


const getTimeJSON = (req, res) => {
  const timeJSON = {
    time: text.getTimeString(),
  };
  const stringMessage = JSON.stringify(timeJSON);

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.write(stringMessage);
  res.end();
};

module.exports.getHellowJSON = getHellowJSON;
module.exports.getTimeJSON = getTimeJSON;
