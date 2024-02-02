'use strict';

/**
 * strength service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::strength.strength');
