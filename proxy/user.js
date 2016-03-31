var daoBase = require('./base');
var usersModel = require('./../models').user;

var dao = {};
var userDao = new daoBase(usersModel);

dao.base = userDao;
dao.model = usersModel;

module.exports = dao;