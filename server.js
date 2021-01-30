const express = require("express");
const { GraphQLSchema } = require('graphql')
const { graphqlHTTP } = require("express-graphql");
const RootQueryType = require("./resolvers/resolvers");
const cors = require('cors')

const app = express();
app.use(cors("*"));

app.get("/",(req,res) => {
    res.send(`server up and running`)
})
app.use('/graphql', graphqlHTTP({
    schema: new GraphQLSchema({query :RootQueryType}),
    graphiql: true

}))
const PORT = process.env.PORT || 8082

app.listen(PORT, () => console.log(`succefully running on ${PORT}`))