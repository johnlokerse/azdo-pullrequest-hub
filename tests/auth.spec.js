const fs = require('fs');
const vm = require('vm');
const assert = require('assert');

const sandbox = {
  msal: {
    PublicClientApplication: function(){
      this.getAllAccounts = () => [];
      this.loginPopup = async () => ({ account: { name: 'x' } });
      this.logoutPopup = async () => {};
      this.acquireTokenSilent = async () => ({ accessToken: 't' });
      this.acquireTokenPopup = async () => ({ accessToken: 't' });
    }
  },
  window: { location: { origin: 'http://localhost' } },
  localStorage: {},
  console
};
vm.createContext(sandbox);
vm.runInContext(fs.readFileSync('auth.js', 'utf-8'), sandbox);

assert.ok(sandbox.window.auth);
assert.strictEqual(typeof sandbox.window.auth.login, 'function');
assert.strictEqual(typeof sandbox.window.auth.logout, 'function');
assert.strictEqual(typeof sandbox.window.auth.getToken, 'function');
console.log('auth.js interface ok');
