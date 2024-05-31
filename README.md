# Cars app
Cars app is a web application that allows clients to view and manage cars in the Cars app. It provides features for adding, viewing, seraching and order cars, as well they can register an account and login with it, and then working with the cars.

## Technologies Used

- Frontend: ReactJS
- Backend: NestJS w/ TypeORM
- Database: PostgreSQL

## How to start it

### Prerequisites

- Node.js 
- PostgreSQL

### Installation

1. First clone the repository
2. Install dependencies for the frontend:
cd /client , and then npm install
3. Install dependencies for the backend:
cd ../server , and then npm install
4. Create a PostgreSQL database named `cars-db`.

### Usage 

( open two termialns, for better situation)
1. Start the backend server: npm run start:dev
2. Start the frontend server: npm run dev
3. Open your web browser and visit front-end url to access Cars app.

## Features

- View a list of cars in the cars page
- Add new cars with thier information
- Search and order cars by thier infomations 
- Fully functional authentication and registration
- Different actions depending if you are logged in 
