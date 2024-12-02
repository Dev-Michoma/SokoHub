import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { useSession, signIn, signOut } from "next-auth/react"
import Nav from '@/components/Nav'
import Layout from '@/components/Layout'

export default function Home() {
 const {data : session} = useSession();
    return(
   <Layout>
     <div className='text-blue-900 flex justify-between '>
     <h2>
      Hello ,{ session?.user?.name}
     </h2>
     <div className='flex bg-gray-300 gap-1 text-black rounded-lg overflow-hidden'>
      <img  src={session?.user?.image} alt=""   className='w-6 rounded -lg h-6'/>
      {session?.user?.name}
     </div>
     </div>


   </Layout>
 
  )
}



