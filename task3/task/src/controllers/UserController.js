/**
 * TODO 2.
 * Import variable users dari file data/users.js
 */
// CODE HERE
import users from '../models/users.js';
console.log(users)
/**
 * SARAN TODO3 - TODO5.
 * Tulis dulu solusi tanpa penggunaan promise.
 * Setelah itu refactor dengan menambahkan promise.
 */

/**
 * TODO 3.
 * Buat function formatUser: Format nama user.
 * Fungsi membutuhkan waktu 3 detik.
 * Hint:
 * - Gunakan method map untuk format user.
 * - Gunakan promise untuk handle asynchronous.
 */
function formatUser(){
  return new Promise((resolve, reject) => {
    const formatedusers = users.map(user =>  {return {...user, name : `Mr/Mrs.${user.name}`}});
    setTimeout(() => {
      resolve(formatedusers);
    }, 3000);
  })
}//bingung menggunakan arrow function jadi menggunakan function biasa, saat menggunakan arrow function user selalu undefined :)
/**
 * TODO 4.
 * Buat function findByName: Mencari 1 user by name.
 * Fungsi membutuhkan waktu 2 detik.
 * Hint:
 * - Gunakan method find untuk mencari 1 user.
 * - Gunakan promise untuk handle asynchronous.
 */
function findByName(name){
  return new Promise((resolve,reject)=>{
    const foundUser=users.find(user => user.name === name);
    setTimeout(() => {
      if (foundUser) {
        resolve(foundUser);
      } else {
        reject(`User with name "${findName}" not found.`);
      }
    },2000);
  })
}
/**
 * SARAN TODO3 - TODO5.
 * Tulis dulu solusi tanpa penggunaan promise.
 * Setelah itu refactor dengan menambahkan promise.
 */

/**
 * TODO 5.
 * Buat function filterByMajor: Mencari semua user by major.
 * Fungsi membutuhkan waktu 4 detik.
 * Hint:
 * - Gunakan method filter untuk mencari semua user.
 * - Gunakan promise untuk handle asynchronous.
 */
function filterByMajor(major){
  return new Promise((resolve,reject)=>{
    const filteredByMajor=users.filter(user => user.major === major);
    setTimeout(() => {
      if (filteredByMajor) {
        resolve(filteredByMajor);
      } else {
        reject(`User with name "${major}" not found.`);
      }
    },4000);
  })
}

/**
 * TODO 6.
 * Export fungsi: formatUser, findByName, filterByMajor
 */
// CODE HERE

export { formatUser, findByName, filterByMajor };



