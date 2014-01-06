var _ = require('lodash')
  , Abstract = require('../abstract')

var MSSqlDialect = function(sequelize) {
  this.sequelize = sequelize
}

MSSqlDialect.prototype.supports = _.extend(Abstract.prototype.supports, {
	'VALUES ()': true
})

module.exports = MSSqlDialect
