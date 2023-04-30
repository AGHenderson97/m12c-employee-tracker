// Import the mysql2 package
import mysql from 'mysql2/promise';

// Create a MySQL database connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'your_username',
  password: 'your_password',
  database: 'your_database',
});

// Export the connection object
export default connection;
