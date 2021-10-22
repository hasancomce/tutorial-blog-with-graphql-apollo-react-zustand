const { ApolloServer } = require('apollo-server')
const gql = require('graphql-tag')
const mongoose = require('mongoose')
require('dotenv').config()
const PostModel = require('./models/Post')

const allPosts = [
    {
        id: "1",
        title: "Post 1 Title",
        content: "Post 1 Content"
    },
    {
        id: "2",
        title: "Post 2 Title",
        content: "Post 2 Content"
    },
    {
        id: "3",
        title: "Post 3 Title",
        content: "Post 3 Content"
    },
    {
        id: "4",
        title: "Post 4 Title",
        content: "Post 4 Content"
    },
]

const typeDefs = gql`

    type Post {
        id: ID!,
        title: String!,
        content: String!
    }

    type Query {
        getAllPosts: [Post]
    }
`;

const resolvers = {
    Query: {
        async getAllPosts() {
            const response = await PostModel.find()
            return response
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(async ()=> {
    console.log("MongoDB connection successfully")
    const res = await server.listen({ port: 5000 })
    console.log(`Server is running at ${res.url}`)
})
