# Azure DevOps Pull Request Hub

Monitor and triage pull requests across multiple Azure DevOps projects in a single, responsive web UI with Microsoft Entra (Azure AD) OAuth and PKCE. No backend, no secrets stored server-side—everything runs in your browser.

## Features
- Microsoft sign-in with OAuth + PKCE (no PATs required)
- Single-page app; works from `http://localhost:8000`
- Multi-project monitoring with pagination for large project lists
- Newest-first sorting and direct PR links to Azure DevOps
- Compact table view with key fields: project, PR title, repository, branches, age, opened by
- Auto-refresh with countdown, hide drafts toggle
- Theme toggle (light/dark), responsive design, state persistence

## Prerequisites
- Modern browser
- An Azure DevOps organization
- Microsoft Entra ID app registration (SPA)

## Setup
1. **Create an Entra ID app (SPA)**
   - Redirect URI: `http://localhost:8000`
   - Supported account types: organizational accounts (or multi-tenant if you prefer)
   - API permissions: Azure DevOps `user_impersonation` (delegated)
2. **Update config in `index.html`**
   - Set `CONFIG.clientId` to your app’s client ID
   - Set `CONFIG.redirectUri` if you use a different host/port
   - Set `CONFIG.authority` to your tenant (e.g., `https://login.microsoftonline.com/<tenant-id-or-domain>`)
3. **Run locally**
   ```bash
   python -m http.server 8000
   # or: npx http-server -p 8000
   ```
   Open `http://localhost:8000`.

## Usage
1. Click **Sign in with Microsoft**.
2. Enter your Azure DevOps organization.
3. Load projects (paginated) and select the ones you want.
4. Fetch pull requests. The table shows direct links, branches, age badges, and authors.

## Troubleshooting
- **Redirect loop / missing tokens:** Ensure you’re running over `http://localhost:8000` (not `file://`) and the redirect URI matches your app registration.
- **AADSTS90019 (no tenant info):** Use a tenant-specific authority or enable multitenant in the app registration.
- **Projects not loading:** Confirm `user_impersonation` permission is granted/admin-consented and the organization name is correct.

## Notes
- Tokens live in `sessionStorage`; PKCE state and code verifier are briefly in `localStorage` during redirects.
- Preferences (theme, selected projects, auto-refresh) are saved locally for convenience.
