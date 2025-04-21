"use client";

import Bounded from '@/components/Bounded'
import ExperienceList from '@/components/ExpList';
import Navbar from '@/components/Navbar'
import Link from 'next/link';
import React, { useRef } from 'react'

type Props = {}

function Page({ }: Props) {

  return (
    <Bounded>
      <div
        className="bg-white/10 backdrop-blur-sm border border-slate-200/20 rounded-lg w-full"
      >
        <Navbar />
        <div className="flex justify-start m-5">
          <Link href="/">
            <p className="text-blue-400 tracking-tighter">Home</p>
          </Link>
          <p className="ml-2 mr-2 align-center">{"/"}</p>
          <p className=" text-blue-950 underline tracking-tighter"> Experiences</p>
        </div>
        <ExperienceList />
      </div>

    </Bounded>
  )
}

export default Page