module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Disallow console statements",
      category: "Best Practices",
    },
    schema: [],
  },
  create: function (context) {
    return {
      'MemberExpression[object.name="console"][property.name="log"]': function (
        node
      ) {
        if (node.object.name === "console") {
          context.report({
            node,
            message: "Unexpected console statement.",
          });
        }
      },
    };
  },
};
