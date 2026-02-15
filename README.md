# Inventory Application

Inventory management app built with Express.js and PostgreSQL. Manage categories and items with full CRUD functionality.

## Features

- Create, read, update, and delete categories
- Manage items within categories
- PostgreSQL database
- Routing with Express.js
- Server-side rendering with EJS

## Tools

- [Express.js](https://expressjs.com/) - NodeJS framework
- [EJS](https://ejs.co/) - Template engine
- [PostgreSQL (pg)](https://www.postgresql.org/) - Database
- [dotenv](https://www.npmjs.com/package/dotenv) - Environment variables
- [oat](https://oat.ink) - UI library

## Setup

### 1. Install PostgreSQL

If you don't have PostgreSQL installed:

- [Installing PostgreSQL](https://www.theodinproject.com/lessons/nodejs-installing-postgresql)
- [Using PostgreSQL](https://www.theodinproject.com/lessons/nodejs-using-postgresql)

### 2. Create Database

```bash
psql
CREATE DATABASE inventory_application;
\q
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env` file in the project root and copy variables from `.env.example`:

```bash
cp .env.example .env
```

Update with your PostgreSQL credentials:

```env
DATABASE_URI=postgresql://your_username:your_password@localhost:5432/inventory_application
PORT=3000
```

### 5. Run populate script

This creates the database tables

```bash
npm run populate
```

## Running the App

**Development (with auto-reload):**

```bash
node app.js
```

The app will be available at `http://localhost:3000`

## Screenshots

![screenshot 1](/public/images/image-1.png)
![screenshot 2](/public/images/image-2.png)
![screenshot 3](/public/images/image-3.png)
![screenshot 4](/public/images/image-4.png)
