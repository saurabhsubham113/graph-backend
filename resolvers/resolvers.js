const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
    GraphQLNonNull
} = require('graphql');

const Products = require('../data/Products');

const ProductType = new GraphQLObjectType({
    name: 'Product',
    description: 'This represents a list of shoes',
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLInt) },
        name: { type: GraphQLNonNull(GraphQLString) },
        src: { type: GraphQLNonNull(GraphQLString) },
        description: { type: GraphQLNonNull(GraphQLString) },
        size: { type: GraphQLNonNull(GraphQLInt) },
        price: { type: GraphQLNonNull(GraphQLInt) },
    })
})

const RootQueryType = new GraphQLObjectType({
    name: 'Query',
    description: 'Root Query',
    fields: () => ({
        Product: {
            type: new GraphQLList(ProductType),
            description: 'List of All Shoes',
            resolve: () => Products
        }
    })
})



module.exports = RootQueryType;
