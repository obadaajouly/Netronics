import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('mydatabase.db');

const initDatabase = () => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT, password TEXT);"
      );
    });

    db.transaction((tx) => {
      tx.executeSql(
        `
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        email TEXT,
        password TEXT
      );
      `,
        [],
        () => {
          console.log("Database initialized");
        },
        (error) => {
          console.error("Error initializing database:", error);
        }
      );
    });

}
  // Insert a new user
const insertUser = (name, email, password) => {
  db.transaction((tx) => {
    tx.executeSql(
      'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
      [name, email, password],
      (_, result) => {
        console.log('User inserted:', result);
      },
      (error) => {
        console.error('Error inserting user:', error);
      }
    );
  });
};


export { initDatabase, insertUser,db };