# Cosuno Construction Company Catalogue

This is a simple web application that shows a list of construction companies with relevant information
and allows filtering these records by company name and a selection of services or specialties.

The company data is being read from a static JSON resource by a Node.js back end, which exposes a 
simple API used by a React.js front end to fetch and render the data.

### Running the application locally

1. Make sure you have **Node.js** v14+ installed in your environment.
2. Clone the `cosuno-backend` and `cosuno-frontend` repositories and run `npm install` in their respective directories.
3. Start the backend server by running `npm start` in the `cosuno-backend` project directory.
4. Launch the client application by running `npm start` in the `cosuno-frontend` project directory.

**Note:** The backend server is configured to run on port `8080` and the client app on port `3000` by default.
