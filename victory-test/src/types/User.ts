interface User {
  id?: number,
  name: String,
  username: String,
  email: String,
  address: {
    street: String,
    suite: String,
    city: String,
    zipcode: String,
  },
  phone: String,
  website: String,
  company: {
    name: String,
  }
}

export default User