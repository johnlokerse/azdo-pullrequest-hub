# Azure DevOps Pull Request Hub

## Introduction

Azure DevOps Pull Request Hub is a lightweight web application that provides a centralized overview of open pull requests across multiple projects in your Azure DevOps organization. It helps team member monitor and track pull requests more efficiently without having to navigate through multiple projects individually.

The application offers real-time monitoring with auto-refresh capabilities, making it easy to stay updated on pull request activity without manual refreshing. It also provides visual indicators for PR age, helping you identify pull requests that need immediate attention.

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Edge, etc.)
- An Azure DevOps organization
- An Entra ID (Azure AD) application configured for OAuth2

### Connecting to Azure DevOps

1. **Create an Entra ID application**:
   - Open the Azure portal and go to **Azure Active Directory** > **App registrations**.
   - Click **New registration**, choose *SPA* and note the **Application (client) ID**.
   - Add a redirect URI of `https://&lt;your-host&gt;/auth-complete.html`.
   - Under **API permissions**, add the **Azure DevOps** delegated scopes `vso.code`, `vso.project` and `vso.profile` (or use the `.default` scope).

2. **Configure the app**:
   - Edit `auth.js` and replace `<CLIENT_ID>` with your Application ID.
   - Replace `<AUTHORITY>` with your tenant authority URL (e.g. `https://login.microsoftonline.com/<tenant>`).

3. **Use the Pull Request Hub**:
   - Serve the files on any static host or open `index.html` locally.
   - Click **Sign in** and complete the OAuth prompt.
   - Enter your organization name, connect, and fetch pull requests.

## Features

### Core Functionality

- **Multi-Project View**: Monitor pull requests across multiple projects in a single view
- **Project Selection**: Choose specific projects to monitor
- **Direct Links**: Open pull requests directly in Azure DevOps with a single click

### Pull Request Filtering and Display

- **Draft PR Filtering**: Option to hide or show draft pull requests
- **PR Age Indicators**: Visual indicators for PR age:
  - Normal: 0-3 days old
  - Warning (orange): 4-7 days old
  - Critical (red): Over 7 days old
- **Detailed Information**: View PR title, project, repository, source/target branches, age, and creator

### User Experience

- **Auto-Refresh**: Automatically refresh PR data at configurable intervals
  - 1 minute, 5 minutes, 10 minutes, or 30 minutes
- **Countdown Timer**: Shows time until next refresh
- **Last Refreshed Indicator**: Shows when data was last updated
- **Theme Toggle**: Switch between light and dark themes for comfortable viewing
- **Preference Saving**: User preferences (including theme, selected projects, and filter settings) persist across sessions

## Privacy and Security

- OAuth tokens are acquired in your browser and never leave your device
- All data processing happens client-side
- No data is sent to any third-party services

### Running the Application

The Azure DevOps Pull Request Hub is a simple HTML-based application that runs entirely in your browser without requiring any server or installation:

1. **Local Usage**:
   - Download or clone this repository
   - Simply open the `index.html` file in any modern web browser
   - That's it! No server setup or build process required

2. **Hosting Options** (optional):
   - For team access, you can host the HTML file on any web server
   - Alternatively, use GitHub Pages or any static site hosting service
