/**
 * * Operasi CRUD pada IndexedDB
 */

/**
 * * Get Data
 */
// get single data on the table (object store)
const movie = (await dbPromise).get(OBJECT_STORE_NAME, id);
// get all data on the table (object store)
const movies = (await dbPromise).getAll(OBJECT_STORE_NAME); // -> will return array

/**
 * * Input Data
 */
const film = {
  id: 1,
  title: 'Spiderman',
  description: 'Lorem ipsum dolor sit amet',
};
// data yang dimasukkan berupa javascript object
(await.dbPromise).add(OBJECT_STORE_NAME, film);

/**
 * * Update Data
 */
(await dbPromise).put(OBJECT_STORE_NAME, film);

/**
 * * Delete Data
 */
(await dbPromise).delete(OBJECT_STORE_NAME, id);