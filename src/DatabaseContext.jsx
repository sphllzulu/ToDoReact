// // DatabaseContext.jsx
// import React, { createContext, useState, useEffect } from 'react';
// import { initializeDatabase } from './db';

// export const DatabaseContext = createContext();

// export const DatabaseProvider = ({ children }) => {
//   const [dbInitialized, setDbInitialized] = useState(false);

//   useEffect(() => {
//     const setupDatabase = async () => {
//       try {
//         await initializeDatabase();
//         setDbInitialized(true);
//       } catch (error) {
//         console.error('Error initializing database:', error);
//       }
//     };

//     setupDatabase();
//   }, []);

//   return (
//     <DatabaseContext.Provider value={{ dbInitialized }}>
//       {children}
//     </DatabaseContext.Provider>
//   );
// };


// // DatabaseContext.js
// import React, { createContext, useContext, useState, useEffect } from 'react';
// import { initializeDatabase, signUpUser, signInUser, addTask, fetchTasks, listUsers } from './db';

// const DatabaseContext = createContext();

// export const DatabaseProvider = ({ children }) => {
//   const [dbInitialized, setDbInitialized] = useState(false);

//   useEffect(() => {
//     const initialize = async () => {
//       try {
//         await initializeDatabase();
//         setDbInitialized(true);
//       } catch (error) {
//         console.error('Error initializing database:', error);
//       }
//     };

//     initialize();
//   }, []);

//   return (
//     <DatabaseContext.Provider value={{ dbInitialized, signUpUser, signInUser, addTask, fetchTasks, listUsers }}>
//       {children}
//     </DatabaseContext.Provider>
//   );
// };

// export const useDatabase = () => useContext(DatabaseContext);



// DatabaseContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { initializeDatabase, signUpUser, signInUser, addTask, fetchTasks, listUsers } from './db';

const DatabaseContext = createContext();

export const DatabaseProvider = ({ children }) => {
  const [dbInitialized, setDbInitialized] = useState(false);

  useEffect(() => {
    const initialize = async () => {
      try {
        await initializeDatabase();
        setDbInitialized(true);
      } catch (error) {
        console.error('Error initializing database:', error);
      }
    };

    initialize();
  }, []);

  return (
    <DatabaseContext.Provider value={{ dbInitialized, signUpUser, signInUser, addTask, fetchTasks, listUsers }}>
      {children}
    </DatabaseContext.Provider>
  );
};

export const useDatabase = () => useContext(DatabaseContext);
