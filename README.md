## Project info

Real-Time Traffic Dashboard is a modern frontend web app built with React.js, Vite, and TypeScript. It visualizes user traffic metrics like:

👥 Active Users

📄 Page Views

⏱️ Average Session Duration

🔌 Real-Time Data with Socket.IO
The dashboard connects to a WebSocket server using Socket.IO, enabling real-time updates without manual refresh. Every 2 minutes, the backend emits the latest traffic metrics which are:

**URL**: https://github.com/Husain7809/realtime-analytics-web.git

The only requirement is having Node.js & npm installed -

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone https://github.com/Husain7809/realtime-analytics-web.git

# Step 2: Navigate to the project directory.
cd realtime-analytics-web

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

```
realtime-analytics-web/
├── node_modules/              # Installed npm packages
├── public/                    # Static files (favicon, index.html, etc.)
├── src/                       # Source code
│   ├── components/            # Reusable UI components
│   ├── hooks/                 # Custom React hooks (e.g., useTrafficData)
│   ├── lib/                   # Utility functions or shared modules
│   ├── pages/                 # Route-based pages
│   ├── services/              # API & WebSocket service logic
│   ├── types/                 # TypeScript type definitions
│   ├── App.tsx                # Root component
│   ├── App.css                # App-level CSS
│   ├── main.tsx               # Vite entry file
│   └── index.css              # Global styles
├── .env                       # Environment variables
├── .gitignore                 # Git ignored files
├── index.html                 # HTML entry point
├── package.json               # Project metadata & dependencies
├── postcss.config.js          # PostCSS config
├── tailwind.config.ts         # Tailwind CSS config
├── tsconfig.json              # TypeScript compiler options
├── vite.config.ts             # Vite config
└── README.md                  # Project documentation

```
