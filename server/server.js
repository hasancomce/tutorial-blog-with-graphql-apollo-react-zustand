const { ApolloServer } = require('apollo-server')
const gql = require('graphql-tag')
const mongoose = require('mongoose')
require('dotenv').config()
const PostModel = require('./models/Post')

const typeDefs = gql`

    type Post {
        id: ID!,
        title: String!,
        content: String!
    }

    type Query {
        getAllPosts: [Post]!,
        getSinglePost(id:ID!): Post!
    }

    type Mutation {
        addNewPost(title:String!, content:String!): Post!
    }
`;

const resolvers = {
    Query: {
        getAllPosts: async () => {
            return await PostModel.find()
        },
        getSinglePost: async (parent, args) => {
            return await PostModel.findById(args.id)
        }
    },
    Mutation: {
        addNewPost: async (parent, args) => {
            try {
                const newPost = {
                    title: args.title,
                    content: args.content
                }
                console.log(parent);
                return await PostModel.create(newPost)
            } catch (error) {
                throw new error;
            }
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
