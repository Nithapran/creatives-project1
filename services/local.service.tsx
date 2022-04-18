import * as SQLite from 'expo-sqlite'
const db = SQLite.openDatabase('db.testDb') // returns Database object

const createDb = () => {
    db.transaction(tx => {
        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS produce (id TEXT PRIMARY KEY, name TEXT, description TEXT,type TEXT,url TEXT)'
        )
      })
}

const deleteDb = () => {
    db.transaction(tx => {
        tx.executeSql(
          'DROP TABLE IF EXISTS produce'
        )
      })
}

const addProduce = (produce) => {
    console.log('produce',produce);
    db.transaction(tx => {
        tx.executeSql('INSERT INTO produce (id,name, description,type,url) values (?, ?,?,?,?)', [produce.id,produce.name,produce.produce,produce.type,produce.url],
          (txObj, resultSet) => console.log('Suuccess',resultSet),
          (txObj, error) => deleteById(produce.id))
      })
}

const fetchProduce = () => {
    return new Promise((resolve, reject) => {
      
        db.transaction(tx => {
          // sending 4 arguments in executeSql
          tx.executeSql('SELECT * FROM produce', null, // passing sql query and parameters:null
            // success callback which sends two things Transaction object and ResultSet Object
            (txObj, { rows: { _array } }) => resolve(_array) ,
            // failure callback which sends two things Transaction object and Error
            (txObj, error) => reject(error)
            ) // end executeSQL
        }) // end transaction
    
    
     
    })
  }

const checkExist = (id) => {
    return new Promise((resolve, reject) => {
          
        db.transaction(tx => {
          
          tx.executeSql('SELECT * FROM produce WHERE id = ? ', [id],
            
            function(txObj, { rows: { _array } }) {
                console.log(_array.length);
                
                if (_array.length > 0) {
                    resolve(true) 
                } else {
                    resolve(false) 
                }
                
            } ,
           
            (txObj, error) => reject(error))
           
        }) // end transaction
    
    
     
    })
}

const deleteById = (id) => {
    db.transaction(tx => {
        tx.executeSql('DELETE FROM produce WHERE id = ? ', [id],
          (txObj, resultSet) => {
            if (resultSet.rowsAffected > 0) {
              console.log('Deleted');
              
            } else {
                console.log('Delete failed');
            }
          },
          (txObj, error) => console.log(error))
      })
}

const deleteAll = () => {
    db.transaction(tx => {
        tx.executeSql('DELETE * FROM produce', null,
          (txObj, resultSet) => {
            if (resultSet.rowsAffected > 0) {
              console.log('All deleted');
              
            } else {
                console.log('Deleting all failed');
            }
          })
      })
}

export {
    createDb,
    deleteDb,
    addProduce,
    fetchProduce,
    checkExist,
    deleteById,
    deleteAll
  };