/**
 * * install IndexedDB library
 * - npm install idb
 * * import ESM 
 * - import * as idb from 'idb'; / import { openDB, deleteDB } from 'idb';
 *  */

/**
 * * Menyiapkan Penyimpanan
 */
import { openDB } from 'idb';

const DATABASE_NAME = 'my-database';
const DATABASE_VERSION = 1;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    // Do something with database... like untuk membuat serta menghapus object store ataupun index pada database
    // contoh untuk membuat object store baru
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
  },
});