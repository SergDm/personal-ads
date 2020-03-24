const keys = require('../keys')

module.exports = function(email, token) {
  return {
    to: email,
    from: keys.EMAIL_FROM,
    subject: 'Access recovery',
    html: `
    <h1>Forgot your password?</h1>
    <p>If not, ignore this letter.</p>
    <p>Otherwise, click on the link below.</p>
    <p><a href='${keys.BASE_URL}/auth/password/${token}'>Access recovery</a></p>
    <hr />
    <a href='${keys.BASE_URL}'>SHOP</a>
    `
  }
}