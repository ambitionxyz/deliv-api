'use strict';

/**
 * high-light service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::high-light.high-light');
