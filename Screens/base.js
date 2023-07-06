// import * as SQLite from 'expo-sqlite';

// const db = SQLite.openDatabase('mydatabase.db');

// // Create a table in the database (if it doesn't exist)
// const createTable = () => {
//   db.transaction(tx => {
//     tx.executeSql(
//       'CREATE TABLE IF NOT EXISTS items (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL);',
//       [],
//       () => {
//         console.log('Table created successfully.');
//       },
//       error => {
//         console.log('Error creating table:', error);
//       }
//     );
//   });
// };


// // obje {
// //     name: String,
// //     id:Number,
// //     datas: [

// //         {id: 2, rate: 120},
// //         {id: 1, rate: 120},
// //         {id: 5, rate: 120},
// //         {id: 8, rate: 120},
// //     ],
// //     createdAt: today
// // }

// // const items = JSON.stringify(datas);
// // INSERT INTO table_name (name, id, datas,createdAt)
// // VALUES (name, id, items , now);

// // Insert an item into the table
// const insertItem = (name, callback) => {
//   db.transaction(tx => {
//     tx.executeSql(
//       'INSERT INTO items (name) VALUES (?);',
//       [name],
//       (_, { rowsAffected }) => {
//         if (rowsAffected > 0) {
//           console.log('Item inserted successfully.');
//           callback();
//         }
//       },
//       error => {
//         console.log('Error inserting item:', error);
//       }
//     );
//   });
// };

// // Retrieve all items from the table
// const getItems = (callback) => {
//   db.transaction(tx => {
//     tx.executeSql(
//       'SELECT * FROM items;',
//       [],
//       (_, { rows }) => {
//         const items = rows._array;
//         callback(items);
//       },
//       error => {
//         console.log('Error retrieving items:', error);
//       }
//     );
//   });
// };

// export const database = {
//   createTable,
//   insertItem,
//   getItems,
// };





import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('mydatabase.db');

const createTable = () => {
    db.transaction(tx => {
        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS dihan (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, objectData TEXT NOT NULL);',
          [],
          () => {
            console.log('Table created successfully.');
          },
          error => {
            console.log('Error creating table:', error);
          }
        );
      });
};

const insertItem = (item, callback) => {
  const { name, id, datas, createdAt } = item;
  const objectData = JSON.stringify(item);

  db.transaction(tx => {
    tx.executeSql(
      'INSERT INTO dihan (name, objectData) VALUES (?, ?);',
      [name, objectData],
      (_, { rowsAffected }) => {
        if (rowsAffected > 0) {
          console.log('Item inserted successfully.');
          callback();
        }
      },
      error => {
        console.log('Error inserting item:', error);
      }
    );
  });
};

const getItems = callback => {
  db.transaction(tx => {
    tx.executeSql(
      'SELECT * FROM dihan;',
      [],
      (_, { rows }) => {
        const items = rows._array;
        callback(items);
      },
      error => {
        console.log('Error retrieving items:', error);
      }
    );
  });
};

export const database = {
  createTable,
  insertItem,
  getItems,
};

