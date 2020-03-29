const DbService = require("moleculer-db");
const MongoDBAdapter = require("moleculer-db-adapter-mongo");
const ApiGateway = require("moleculer-web");

/**
 * @typedef {import('moleculer').Context} Context Moleculer's Context
 */

module.exports = {
  name: "products",
  mixins: [DbService, ApiGateway],
  adapter: new MongoDBAdapter(process.env.DATABASE),
  collection: "products",

	/**
	 * Settings
	 */
  settings: {
  },

	/**
	 * Dependencies
	 */
  dependencies: [],

	/**
	 * Actions
	 */
  actions: {

		/**
		 * Say a 'Hello' action.
		 *
		 * @returns
		 */
    get: {
      rest: {
        method: "GET",
        path: "/get"
      },
      /**
       *
       * @param { Context } ctx
       */
      async handler(ctx) {
        return this.adapter.findOne({ id: ctx.params.id })
      }
    },
  },

	/**
	 * Events
	 */
  events: {

  },

	/**
	 * Methods
	 */
  methods: {

  },

	/**
	 * Service created lifecycle event handler
	 */
  created() {

  },

	/**
	 * Service started lifecycle event handler
	 */
  async started() {

  },

	/**
	 * Service stopped lifecycle event handler
	 */
  async stopped() {

  }
};
