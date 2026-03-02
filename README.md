<div align="center">

<!-- TOP WAVE -->
<img src="https://capsule-render.vercel.app/api?type=waving&color=0:6EE7F7,50:A78BFA,100:F472B6&height=200&section=header&text=Git%20Explore&fontSize=70&fontColor=ffffff&fontAlignY=38&desc=Discover%20%E2%80%A2%20Search%20%E2%80%A2%20Explore%20GitHub%20Repositories&descAlignY=60&descSize=18&animation=twinkling" width="100%" />

<br/>

<!-- BADGES -->
![GitHub Stars](https://img.shields.io/badge/Stars-⭐%20Trending-FFD700?style=for-the-badge&logo=github)
![License](https://img.shields.io/badge/License-MIT-A78BFA?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Active-6EE7F7?style=for-the-badge)
![PRs](https://img.shields.io/badge/PRs-Welcome-F472B6?style=for-the-badge)

</div>

<img src="https://i.imgur.com/waxVImv.png" width="100%">

## Deployment Link

**https://git-explore-h9ou.vercel.app/**

## 🌟 Overview

**Git Explore** is a modern full-stack web application that fetches and displays trending GitHub repositories using the GitHub Search API. Explore trending repos, search projects, filter by duration and language, and directly open repositories or user profiles — all through a sleek, dark-themed UI.

<img src="https://i.imgur.com/waxVImv.png" width="100%">

## ✨ Features

<div align="center">

| Feature | Description |
|---------|-------------|
| 🔥 **Trending Repos** | Day / Week / Month / Year filters |
| ⭐ **Smart Sorting** | Sort by Stars, Forks, or Recently Updated |
| 🔎 **Search** | Search repos by name or description |
| 👤 **User Search** | Search GitHub users using `@username` |
| 📄 **Pagination** | API-safe pagination support |
| 🌙 **Dark UI** | Premium dark themed interface |
| ⚡ **Server-Side API** | Secure GitHub API integration |
| 🔐 **Token Security** | GitHub Token never exposed to frontend |
| 🧠 **Caching** | Server-side response caching |

</div>

<img src="https://i.imgur.com/waxVImv.png" width="100%">

## 🏗️ Tech Stack

<div align="center">

### 🖥️ Frontend
<br/>

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)

### ⚙️ Backend
<br/>

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![GitHub API](https://img.shields.io/badge/GitHub_API-181717?style=for-the-badge&logo=github&logoColor=white)
![NodeCache](https://img.shields.io/badge/NodeCache-FF6B35?style=for-the-badge&logo=node.js&logoColor=white)

### 🛠️ Tools & Dev
<br/>

![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![dotenv](https://img.shields.io/badge/dotenv-ECD53F?style=for-the-badge&logo=dotenv&logoColor=black)
![VS Code](https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)

</div>

<img src="https://i.imgur.com/waxVImv.png" width="100%">

## 📂 Project Structure

```
Git-Explore/
│
├── 📁 backend/
│   ├── 📁 src/
│   │   ├── 📁 controllers/
│   │   │   └── 📄 trendingController.js
│   │   ├── 📁 routes/
│   │   │   └── 📄 trendingRoutes.js
│   │   ├── 📁 utils/
│   │   │   └── 📄 getDate.js
│   │   └── 📄 app.js
│   ├── 📄 server.js
│   └── 📄 package.json
│
├── 📁 frontend/
│   ├── 📁 src/
│   │   ├── 📁 components/
│   │   │   ├── 🧩 RepoCard.jsx
│   │   │   ├── 🧩 Filters.jsx
│   │   │   ├── 🧩 Pagination.jsx
│   │   │   ├── 🧩 Navbar.jsx
│   │   │   └── 🧩 Loader.jsx
│   │   ├── 📁 pages/
│   │   │   └── 🗒️ Home.jsx
│   │   ├── 📁 services/
│   │   │   └── 📄 api.js
│   │   └── 📄 App.jsx
│   └── 📄 package.json
│
└── 📄 README.md
```

<img src="https://i.imgur.com/waxVImv.png" width="100%">

## 🔄 How It Works — Application Flow

```mermaid
flowchart TD
    A([🧑 User Opens App]) --> B[🖥️ React Frontend Loads]
    B --> C{User Action}

    C -->|Browse Trending| D[Select Duration\nDay/Week/Month/Year]
    C -->|Search Repo| E[Enter Search Term]
    C -->|Search User| F[Enter @username]

    D --> G[Apply Filters\nLanguage · Sort · Page]
    E --> G
    F --> G

    G --> H[📡 Axios sends HTTP Request\nto Express Backend]

    H --> I{Cache Hit?}
    I -->|✅ Yes| J[Return Cached Response]
    I -->|❌ No| K[Build GitHub API Query]

    K --> L[🔐 Attach GitHub Token\nfrom .env]
    L --> M[📨 Call GitHub Search API]
    M --> N[Receive JSON Data]
    N --> O[💾 Cache Response\nvia NodeCache]
    O --> J

    J --> P[📦 Send Data to Frontend]
    P --> Q[🃏 Render Repository Cards]
    Q --> R{User Interaction}

    R -->|Click Repo| S[🌐 Open GitHub Repo]
    R -->|Click Author| T[👤 Open GitHub Profile]
    R -->|Next Page| G

    style A fill:#6EE7F7,color:#000
    style B fill:#A78BFA,color:#fff
    style C fill:#F472B6,color:#fff
    style I fill:#FBBF24,color:#000
    style J fill:#34D399,color:#000
    style M fill:#60A5FA,color:#fff
    style S fill:#6EE7F7,color:#000
    style T fill:#6EE7F7,color:#000
```

<img src="https://i.imgur.com/waxVImv.png" width="100%">

## 🔧 Backend Architecture Flow

```mermaid
flowchart LR
    subgraph Frontend ["🖥️ Frontend (React + Vite)"]
        UI[User Interface] --> AX[Axios HTTP Client]
    end

    subgraph Backend ["⚙️ Backend (Node.js + Express)"]
        AX -->|GET /api/trending| RT[Express Router]
        RT --> MW[Middleware\nValidation]
        MW --> CTRL[Trending Controller]
        CTRL --> CACHE{NodeCache\nCheck}
        CACHE -->|Miss| QB[Query Builder\ngetDate utility]
        QB --> GH[GitHub Search API]
        GH --> CACHE
        CACHE -->|Hit| RES[JSON Response]
    end

    subgraph Security ["🔐 Security Layer"]
        ENV[.env\nGitHub Token]
        ENV -.->|Injected Securely| CTRL
    end

    RES --> AX

    style Frontend fill:#1e1b4b,color:#A78BFA
    style Backend fill:#0f172a,color:#6EE7F7
    style Security fill:#2d1b00,color:#FBBF24
```

<img src="https://i.imgur.com/waxVImv.png" width="100%">

## 📌 API Reference

```http
GET /api/trending
```

<div align="center">

| Parameter | Type | Options | Description |
|-----------|------|---------|-------------|
| `duration` | `string` | `day` `week` `month` `year` | Trending time window |
| `limit` | `number` | `1–100` | Results per page |
| `page` | `number` | `1–10` | Pagination page |
| `language` | `string` | e.g. `javascript` | Filter by language |
| `sort` | `string` | `stars` `forks` `updated` | Sort order |
| `search` | `string` | any term | Search keyword |

</div>

**Example Request:**
```http
GET /api/trending?duration=week&limit=10&page=1&language=javascript&sort=stars
```

<img src="https://i.imgur.com/waxVImv.png" width="100%">

## ⚠️ GitHub API Limitations

> [!WARNING]
> - GitHub Search API restricts results to the **first 1000 entries**
> - Pagination is capped at **10 pages** to prevent API overflow errors
> - Unauthenticated requests are limited to **10 req/min** — always use a token!

<img src="https://i.imgur.com/waxVImv.png" width="100%">

## 🔐 Security

> [!NOTE]
> - GitHub Personal Access Token stored securely using **environment variables**
> - `.env` files are excluded via `.gitignore`
> - Token is **never exposed** to the frontend client
> - All API calls are proxied through the backend

<img src="https://i.imgur.com/waxVImv.png" width="100%">

## 💡 Future Enhancements

```mermaid
timeline
    title Git Explore Roadmap
    Phase 1 : ✅ Trending Repositories
             : ✅ Search & Filter
             : ✅ Pagination
             : ✅ Dark UI
    Phase 2 : 📊 Repository Analytics Charts
             : ⭐ Bookmark Repositories
             : 👤 Dedicated User Profile View
    Phase 3 : 🔎 Infinite Scrolling
             : 🐳 Docker Support
             : 🌍 Deploy to Cloud
```

<img src="https://i.imgur.com/waxVImv.png" width="100%">

<<<<<<< HEAD
## 👨‍💻 Author

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:6EE7F7,100:A78BFA&height=3" width="100%"/>

### **Akshat Srivastava**

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com)

*If you found this project helpful, please consider giving it a* ⭐

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:A78BFA,100:F472B6&height=3" width="100%"/>

</div>

<img src="https://i.imgur.com/waxVImv.png" width="100%">
=======
>>>>>>> 1a7816525969de52c54d702f6ea794c9a61a9ba2
<!-- BOTTOM WAVE -->
<div align="center">
<img src="https://capsule-render.vercel.app/api?type=waving&color=0:F472B6,50:A78BFA,100:6EE7F7&height=150&section=footer&text=Happy%20Exploring!&fontSize=30&fontColor=ffffff&fontAlignY=65&animation=twinkling" width="100%"/>
</div>
