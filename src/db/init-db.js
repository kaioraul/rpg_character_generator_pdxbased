/* eslint-disable @typescript-eslint/no-require-imports */
const Database = require("better-sqlite3");
const fs = require("fs");
const path = require("path");

// Connect to database (if it doesn't exist, it will be created)
const db = new Database("ttrpg-crusader-character.db", {
  verbose: console.log,
});

// 2. Read the contents of the starter.sql file
const sqlPath = path.join(__dirname, "starter.sql");
const sqlSchema = fs.readFileSync(sqlPath, "utf8");

try {
  // 3. Execute queries from a file
  // exec() is ideal for running SQL scripts containing multiple commands
  db.exec(sqlSchema);
  console.log("The database was successfully initialized!");
} catch (err) {
  console.error("An error occurred while initializing the database:", err);
} finally {
  // 4. Close the connection
  db.close();
}
