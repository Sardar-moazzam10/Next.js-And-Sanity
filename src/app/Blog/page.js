import { client } from '@/sanity/lib/client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
async function getData() {
  const data = await client.fetch(`*[_type=='Blog']{
    BlogTitle,Name,"imageUrl": image.asset->url,BlogPostDate
  }`)
  return data
}
const bookpage = async () => {
  const Dta = await getData()
  // console.log(Dta);

  return (
    <div className="text-black ">
      <div className="text-white h-24 bg-black text-2xl font-serif pt-4 mb-4">
        <div className=" flex justify-center items-center text-2xl"><h1>Blog Website With Sanity And Next Js</h1></div>
        <div className="flex justify-around mt-1">
          <Link href="/">Home</Link>
          <Link href="/Book">Book</Link>
          <Link href="/Aurthor">Aurthor</Link></div>
      </div>
      {
        Dta.map((val, i) => {
          return (
            <div key={i} className="text-3xl text-black flex justify-around mt-5">
              Blog Title:{val.BlogTitle}<br />Name:{val.Name}<br />BlogPostDate:{val.BlogPostDate}
              <Image src={val.imageUrl} alt="alt" width={200} height={200} />
            </div>
          )
        })
      }
      <div className=" flex items-center justify-between mt-48 text-white ps-3  h-14 bg-black">
        <p>Powered By Sardar Moazzam,@ All rights reserved</p>{" "}
        <p>Privacy Policy Treams of Service</p>
      </div>
    </div>
  )
}

export default bookpage