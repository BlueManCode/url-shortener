const mongoose = require('./db_config');

const string_required = {
  type: String,
  required: true,
};

const url_schema = new mongoose.Schema({
  slug: string_required,
  url: string_required,
});

const url_model = mongoose.model('url_model', url_schema);

module.exports = url_model;
