"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import Dashboard from '@/components/Dashboard'

const Page = () => {
  const { data: session } = useSession();
     if(!session) {
       const router = useRouter();
       router.push("/login")
     }
  return (
    <div className='text-white'>
      <Dashboard/>
    </div>
  )
}

export default Page
