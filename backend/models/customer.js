const mongoose = require('mongoose');
const customerSchema = mongoose.Schema({
  uname: { type: String, required: true},
  title: { type: String, required: true},
  fname: {type: String, required: true},
  lname: {type: String, required: true},
  country: {type: String, required: true},
  state: {type: String, required: true},
  city: {type: String, required: true},
  street: {type: String, required: true},
  customer_type: {type: String, required: true},
  postal_code: {type: String, required: true},
  customer_type: {type: String, required: true},
  email: {type: String, required: true},
  mnumber: {type: String, required: true},
  password: {type: String, required: true},
  re_enter_password: {type: String, required: true}
});

module.exports = mongoose.model('Customer', customerSchema);
