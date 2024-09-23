import Image from "next/image";
import Link from "next/link";
export default async function Home() {
  return (
    <div className="text-black ">
        <div className="text-white h-24  bg-black text-2xl font-serif pt-4 mb-4">
     <div className=" flex justify-center items-center font-serif  text-2xl"><h1>Blog Website With Sanity And Next Js</h1></div>
     <div className="flex justify-around mt-1">
    
      <Link href="/Blog">Blog</Link>
     <Link href="/Book">Book</Link>
     <Link href="/Aurthor">Aurthor</Link></div>

</div>
<div className="text-black font-serif text-5xl -z-0 ms-5"><h1>Javascript and Sanity. This starter is a statically generated blog that uses Next. js App Router for the frontend and Sanity to handle its content. It comes with a native Sanity Studio that offers features like real-time collaboration and visual editing with live updates using Presentation.</h1></div> 
     <Image className="mt-20 ms-20"
       src="/next js and sanity.jpg"
       alt="Picture"
       width={1200}
       height={200}
     />
       <footer className=" mt-1  flex items-center justify-between text-white ps-3 pe-5  h-14 bg-black">
          <p>Powered By Sardar Moazzam,@ All rights reserved</p>{" "}
          <p>Privacy Policy Treams of Service</p>
        </footer>
    </div>
  );
}
