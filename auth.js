(function(){
  const msalConfig = {
    auth: {
      clientId: '<CLIENT_ID>',
      authority: '<AUTHORITY>',
      redirectUri: window.location.origin + '/auth-complete.html'
    },
    cache: { cacheLocation: 'localStorage' }
  };

  const msalInstance = new msal.PublicClientApplication(msalConfig);

  async function login() {
    const accounts = msalInstance.getAllAccounts();
    if (accounts.length > 0) { return accounts[0]; }
    const loginResponse = await msalInstance.loginPopup();
    return loginResponse.account;
  }

  function logout() {
    const account = msalInstance.getAllAccounts()[0];
    if (account) {
      msalInstance.logoutPopup({ account });
    }
  }

  async function getToken(scopes = ['499b84ac-1321-427f-aa17-267ca6975798/.default']) {
    const account = msalInstance.getAllAccounts()[0];
    const request = { scopes, account };
    try {
      const resp = await msalInstance.acquireTokenSilent(request);
      return resp.accessToken;
    } catch (err) {
      const resp = await msalInstance.acquireTokenPopup(request);
      return resp.accessToken;
    }
  }

  window.auth = { login, logout, getToken };
})();
