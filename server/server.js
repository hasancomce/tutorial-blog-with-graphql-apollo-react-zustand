const { ApolloServer } = require('apollo-server')
const gql = require('graphql-tag')
require('dotenv').config()

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
        GetAllPosts: [Post]
    }
`;

const resolvers = {
    Query: {
        GetAllPosts() {
            return allPosts
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen({ port: 5000 }).then(res => {
    console.log(`Server is running at ${res.url}`)
})