

# Vue.js Client for Bible Proverbs Application

This project is the frontend client for the Bible Proverbs application. It is built using Vue.js, a progressive JavaScript framework for building user interfaces.

## Project setup

Before you can run this project, you'll need to have Node.js and npm installed. You can download Node.js from [here](https://nodejs.org/) and npm is included with Node.js.

1. **Clone the repository**

   Use the following command to clone the repository:

   ```bash
   git clone git@git.ti.howest.be:TI/2022-2023/s4/web-frameworks/projects/_groups/group-38/client.git
   ```

2. **Install dependencies**

   Navigate into the project directory and use npm to install the project's dependencies:

   ```bash
   cd bible-proverbs
   npm install
   ```

3. **Environment Variables**

   Create a `.env` file in the project root directory. This file should contain the base URL for the API, like this:

   ```
   VITE_APP_API_URL=http://localhost/api
   ```

   Make sure to replace `http://localhost/api` with the actual URL of your backend API.

4. **Run the Vue.js development server**

   You can start the development server with this command:

   ```bash
   npm run dev
   ```

   The Vue.js client will be available at `http://localhost:4000`. Make sure it is actually running on port 4000, because otherwise it won't be allowed to contact the api due to CORS policy.

## Features

- User Registration
- User Login/Logout
- Displaying Bible chapters
- Adding, viewing, updating and deleting insights
- Complete nl and en localisation

## Known bugs
When editing an insight and saving it, it will only save what you changed in the content section, not the chapter or verse.

# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).
