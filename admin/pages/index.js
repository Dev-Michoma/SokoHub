import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { useSession, signIn, signOut } from "next-auth/react"


export default function Home() {
  const { data: session } = useSession()
  if(!session){
    return 'not logged in'
  }
  return (
  <div className='bg-blue-900 h-screen w-scree flex items-center'       >
    <div className='text-center w-full'>
      <button className='bg-white p-2'> Login With Google</button>
    </div>
  </div>
  )
}
