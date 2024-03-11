/**
 * TODO 1.
 * Buat array of object users (5 users).
 * Object memiliki property: name, age, major.
 * Note: Ubah var menggunakan JavaScript Modern.
 */
const users = [
  { 
  name: 'ahmad faisal nurhakim', 
  age: 20, 
  major: 'Informatics Engineering' 
  },
  { 
   name: 'ady rizky',
   age: 24, 
   major: 'Informatics Engineering' 
  },
  { 
  name: 'hidayat nur faqih', 
  age: 23, 
  major: 'Information System' 
  },
  {
  name: 'ihsani aulia', 
  age: 21, 
  major: 'Information System' 
  },
  { 
  name: 'rangga', 
  age: 25, 
  major: 'Informatics Engineering'
  }
];


/**
 * TODO 2
 * Buat function all: Menampilkan semua data user.
 * Hint: Gunakan for/for-of.
 * Note: Ubah function menggunakan arrow function.
 */
const all = () => {
  for (const user of users) {
    console.log(`Name: ${user.name}, Age: ${user.age}, Major: ${user.major}`);
  }
};


/**
 * TODO 3
 * Buat function store: Menambahkan user baru.
 * Hint: Gunakan method push.
 * Note: Ubah function menggunakan arrow function.
 */
const store = (user) => {
  users.push(user);
};


/**
 * TODO 4.
 * Buat function update: Mengedit data user.
 * Hint: re-assign array.
 * Note: Ubah function menggunakan arrow function.
 */
const update = (index, user) => {
  if (index >= 0 && index < users.length) {
    users[index] = user;
  } else {
    console.log('user tidak ditemukan');
  }
};


/**
 * TODO 5.
 * Buat function destroy: Menghapus data user.
 * Hint: Gunakan method splice.
 * Note: Ubah function menggunakan arrow function.
 */
const destroy = (index) => {
  if (index >= 0 && index < users.length) {
    users.splice(index, 1);
  } else {
    console.log('user tidak ditemukan');
  }
};


/**
 * Function main.
 * Jangan edit atau hapus function main.
 * Function ini untuk testing task.
 */

const main = () => {
  /**
   * Test function index
   */
  console.log("# Get All Users");
  all();

  /**
   * Test function store
   */
  console.log("# Add New User: Sabiq");
  const newUser = {
    name: "Sabiq",
    age: 20,
    major: "Informatics",
  };
  store(newUser);

  /**
   * Test function update
   */
  console.log("# Edit User: Isfa");
  const editedIndex = 1;
  const editedUser = {
    name: "Isfhani Ghiyath",
    age: 23,
    major: "English",
  };
  update(editedIndex, editedUser);

  /**
   * Test function destroy
   */
  console.log("# Delete User: Nurul");
  const deletedIndex = 2;
  destroy(deletedIndex);
};

main();

/**
 * Jangan hapus exports.
 * Exports ini untuk tujuan testing.
 */
module.exports = { users, all, store, update, destroy };
