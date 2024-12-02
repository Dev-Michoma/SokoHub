import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { useSession, signIn, signOut } from "next-auth/react"
import Nav from '@/components/Nav'
import Layout from '@/components/Layout'

export default function Home() {
 
    return(
   <Layout>
      Test michoma
   </Layout>
 
  )
}



