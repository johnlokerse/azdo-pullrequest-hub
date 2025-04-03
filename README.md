# Azure DevOps Pull Request Hub

## Introduction

Azure DevOps Pull Request Hub is a lightweight web application that provides a centralized overview of open pull requests across multiple projects in your Azure DevOps organization. It helps team members and managers monitor and track pull requests more efficiently without having to navigate through multiple projects individually.

The application offers real-time monitoring with auto-refresh capabilities, making it easy to stay updated on pull request activity without manual refreshing. It also provides visual indicators for PR age, helping you identify pull requests that need immediate attention.

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Edge, etc.)
- An Azure DevOps organization
- A Personal Access Token (PAT) with read access to your Azure DevOps projects

### Connecting to Azure DevOps

1. **Create a Personal Access Token (PAT)**:
   - Log in to your Azure DevOps organization
   - Go to User Settings (top right) > Personal access tokens
   - Click "New Token"
   - Name your token
   - Set the organization where you want to use the token
   - For Scopes, select "Custom defined" and ensure "Code (read)" permission is checked
   - Set an expiration date
   - Click "Create"
   - Copy the generated token (you won't be able to see it again)

2. **Connect to Azure DevOps Pull Request Hub**:
   - Open the application in your browser
   - Enter your Azure DevOps organization name in the "Organization" field
   - Paste your PAT in the "Personal Access Token" field
   - Click "Connect"
   - Once connected, select the projects you want to monitor
   - Click "Fetch Pull Requests" to view open PRs

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

- Your Personal Access Token is used only for API authentication and is never stored on any server
- All data processing happens in your browser
- No data is sent to any third-party services