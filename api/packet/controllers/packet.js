const { sanitizeEntity } = require('strapi-utils');

module.exports = {
  /**
   * Retrieve a record.
   *
   * @return {Object}
   */

  async findOne(ctx) {
    const { id: url } = ctx.params;

    const entity = await strapi.services.packet.findOne({ url });
    return sanitizeEntity(entity, { model: strapi.models.packet });
  },
};
