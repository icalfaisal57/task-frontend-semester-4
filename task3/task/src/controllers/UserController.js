/**
 * TODO 2.
 * Import variable users dari file data/users.js
 */
// CODE HERE
import users from '../models/users.js';
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
const formatUser = users => users.map(user => ({ ...user, name: `Mr/Mrs ${user.name}` }));
const formateduser = formatUser(users);
console.log(formateduser);
/**
 * TODO 4.
 * Buat function findByName: Mencari 1 user by name.
 * Fungsi membutuhkan waktu 2 detik.
 * Hint:
 * - Gunakan method find untuk mencari 1 user.
 * - Gunakan promise untuk handle asynchronous.
 */
const findByName = (users, findName) => {
    return users.find(user => user.name === findName);
  };
const find = findByName(users, "Aufa");
console.log(find)
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
const filterByMajor = (users, filterMajor) => {
    return users.filter(user => user.major === filterMajor);
  };
const filter = filterByMajor(users,"English");
console.log(filter);

/**
 * TODO 6.
 * Export fungsi: formatUser, findByName, filterByMajor
 */
// CODE HERE

export { formatUser, findByName, filterByMajor };