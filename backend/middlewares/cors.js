const allowedMethods = 'GET,HEAD,PUT,PATCH,POST,DELETE';
const allowedCors = [
  // 'https://watchthis.nomoredomains.club',
  // 'https://api.watchthis.nomoredomains.club',
  'http://localhost:3000',
];

module.exports = (req, res, next) => {
  const { method } = req;
  const requestHeaders = req.headers['access-control-request-headers'];
  const { origin } = req.headers;

  if (allowedCors.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
    res.header('Access-Control-Allow-Credentials', 'true');
  }

  if (method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', allowedMethods);
    res.header('Access-Control-Allow-Headers', requestHeaders);
    res.end();
  }

  next();
};
