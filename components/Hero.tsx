import Image from 'next/image'
import React from 'react'

const Hero: React.FC = () => {
  return (
    <div className="mx-auto mb-10 flex max-w-7xl bg-slate-200 px-10 py-5 sm:py-10">
      <div className="m-auto flex-1 font-serif">
        <h1 className="py-5 text-5xl sm:text-7xl">
          <span className="px-2 underline decoration-black decoration-4">
            Medium
          </span>
          is a place to write, read and connect
        </h1>
        <h2 className="text-2xl">
          It's easy and free to post your thinking on any topic and connect with
          millions of readers.
        </h2>
      </div>
      <div className="hidden flex-1 place-content-center lg:flex">
        <Image
          width={430}
          height={270}
          priority
          alt="logo"
          className="w-32"
          src="/mediumlogo.png"
        />
      </div>
    </div>
  )
}

export default Hero
