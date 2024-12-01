import { MongoDBAdapter } from '@auth/mongodb-adapter'
import { MongoClient } from 'mongodb'
import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'



const mongoUri = process.env.MONGODB_URI;

// Create a MongoClient instance
const client = new MongoClient(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define the clientPromise
const clientPromise = client.connect();




export default NextAuth({
  providers: [
    // OAuth authentication providers...
    
   
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),
   
  ] ,
  adapter: MongoDBAdapter(clientPromise)
})