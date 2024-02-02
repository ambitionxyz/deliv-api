'use strict';

/**
 * ir service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::ir.ir');
