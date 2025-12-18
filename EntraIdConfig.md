# Azure Entra ID Configuration Guide

## Overview
This guide walks you through setting up Microsoft Entra ID (formerly Azure Active Directory) authentication for the Azure DevOps Pull Request Hub.

**Time Required:** ~5 minutes
**Prerequisites:** Access to Azure Portal with permissions to register applications

---

## Step 1: Access Azure Portal

1. Navigate to [https://portal.azure.com](https://portal.azure.com)
2. Sign in with your Microsoft account
3. In the search bar at the top, type **"Microsoft Entra ID"** or **"Azure Active Directory"**
4. Click on the service

---

## Step 2: Register Your Application

1. In the left sidebar, click **"App registrations"**
2. Click **"+ New registration"** at the top
3. Fill in the registration form:

   **Name:**
```
   Azure DevOps PR Hub - Local
```

   **Supported account types:**
```
   ✓ Accounts in any organizational directory (Any Microsoft Entra ID tenant - Multitenant)
     and personal Microsoft accounts (e.g. Skype, Xbox)
```

   **Redirect URI:**
   - Select platform: **Single-page application (SPA)**
   - Enter URL: `http://localhost:8000`

4. Click **"Register"**

---

## Step 3: Copy Your Client ID

After registration, you'll see the application overview page.

1. Find **"Application (client) ID"** on the overview page
2. Click the copy icon to copy the GUID
3. **Save this** - you'll need it for the HTML file

Example format: `a1b2c3d4-e5f6-7890-abcd-ef1234567890`

---

## Step 4: Configure API Permissions

1. In the left sidebar, click **"API permissions"**
2. Click **"+ Add a permission"**
3. Click the **"APIs my organization uses"** tab
4. In the search box, enter: `499b84ac-1321-427f-aa17-267ca6975798` (Azure DevOps resource ID)
   - *Note: You might also search for "Azure DevOps" but the GUID is more reliable*
5. Click **"Azure DevOps"** in the results
6. Click **"Delegated permissions"**
7. Check the box next to **"user_impersonation"**
8. Click **"Add permissions"**

### Optional: Grant Admin Consent
If you have admin rights and want to skip user consent prompts:
1. Click **"Grant admin consent for [Your Organization]"**
2. Click **"Yes"** to confirm

---

## Step 5: Verify Authentication Settings

1. In the left sidebar, click **"Authentication"**
2. Under **"Single-page application"**, verify you see: `http://localhost:8000`
3. Under **"Implicit grant and hybrid flows"**, ensure **nothing is checked**
   - ❌ Access tokens
   - ❌ ID tokens
4. Under **"Allow public client flows"**, ensure it's set to **"No"**
5. Click **"Save"** if you made any changes

---

## Step 6: Configure Your Application

1. Open your `index.html` file
2. Find the `CONFIG` object (around line 295)
3. Replace `YOUR_CLIENT_ID_HERE` with your actual Client ID:
```javascript
const CONFIG = {
    clientId: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890', // ← Your Client ID here
    redirectUri: 'http://localhost:8000',
    authority: 'https://login.microsoftonline.com/organizations',
    scopes: ['499b84ac-1321-427f-aa17-267ca6975798/.default'],
    azureDevOpsResourceId: '499b84ac-1321-427f-aa17-267ca6975798'
};
```

---

## Step 7: Test Your Configuration

1. Start a local web server:
```bash
   python -m http.server 8000
```

2. Open your browser to: `http://localhost:8000`

3. Click **"Sign in with Microsoft"**

4. You should see the Microsoft login page

5. After signing in, you'll be asked to consent to permissions (unless admin consent was granted)

6. After consent, you'll be redirected back to `http://localhost:8000` and see your name/email