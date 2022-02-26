import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const Header: () => JSX.Element = () => {
  return (
    <header className="mx-auto flex max-w-7xl justify-between p-5">
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="https://res.cloudinary.com/dp3a4be7p/image/upload/v1645719589/mediun_xgwao9.png"
            alt="Medium logo"
            width={150}
            height={40}
            className="cursor-pointer"
          />
        </Link>
        <div className="hidden items-center gap-5 sm:inline-flex">
          <h3 className="cursor-pointer">About</h3>
          <h3 className="cursor-pointer">Contact</h3>
          <h3 className="cursor-pointer rounded-full bg-green-600 px-4 py-1 text-white">
            Follow
          </h3>
        </div>
      </div>
      <div className="flex cursor-pointer items-center space-x-5 text-black ">
        <h3>Sign In</h3>
        <h3 className="rounded-full border-2 border-black px-4 py-1 text-xs">
          Get Started
        </h3>
      </div>
    </header>
  )
}

export default Header
