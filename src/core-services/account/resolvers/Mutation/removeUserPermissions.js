/**
 * @name Mutation/removeUserPermissions
 * @method
 * @memberof Accounts/GraphQL
 * @summary resolver to remove user permissions
 * @param {Object} _ - unused
 * @param {Object} input - an object of all mutation arguments that were sent by the client
 * @param {String} input.groups - The group the user is to be added to
 * @param {Object} context - an object containing the per-request state
 * @param {Object} context.userId - the userId of user to add to the given group
 * @param {Object} context.accountId - the account of user to add to the given
 * @returns {Object} - object
 */
export default async function removeUserPermissions(_, { input }, context) {
  return context.mutations.addOrRemoveAccountGroups(context, input);
}