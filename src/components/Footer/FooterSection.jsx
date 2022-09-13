import React from 'react'

const FooterSection = () => {
  return (
    <div>
        <footer className="flex justify-center items-center flex-col gap-10 bg-gray-900 p-10">
            <section className="flex justify-between items-start text-gray-400 font-medium w-full p-5">
                <ul>
                    <li className="text-2xl font-medium text-white">Fly.io</li>
                </ul>
                <ul className="flex justify-center items-start flex-col gap-2">
                    <li className="font-medium text-white uppercase">Company</li>
                    <li className="hover:text-violet-800 cursor-pointer">About</li>
                    <li className="hover:text-violet-800 cursor-pointer">Pricing</li>
                    <li className="hover:text-violet-800 cursor-pointer">Jobs</li>
                </ul>
                <ul className="flex justify-center items-start flex-col gap-2">
                    <li className="font-medium text-white uppercase">Articles</li>
                    <li className="hover:text-violet-800 cursor-pointer">Blog</li>
                    <li className="hover:text-violet-800 cursor-pointer">Pheonix Files</li>
                    <li className="hover:text-violet-800 cursor-pointer">Laravel Bytes</li>
                    <li className="hover:text-violet-800 cursor-pointer">Ruby Dispatch</li>
                </ul>
                <ul className="flex justify-center items-start flex-col gap-2">
                    <li className="font-medium text-white uppercase">resources</li>
                    <li className="hover:text-violet-800 cursor-pointer">Docs</li>
                    <li className="hover:text-violet-800 cursor-pointer">Support</li>
                    <li className="hover:text-violet-800 cursor-pointer">Status</li>
                </ul>
                <ul className="flex justify-center items-start flex-col gap-2">
                    <li className="font-medium text-white uppercase">contact</li>
                    <li className="hover:text-violet-800 cursor-pointer">Github</li>
                    <li className="hover:text-violet-800 cursor-pointer">Twitter</li>
                    <li className="hover:text-violet-800 cursor-pointer">Community</li>
                </ul>
                <ul className="flex justify-center items-start flex-col gap-2">
                    <li className="font-medium text-white uppercase">legal</li>
                    <li className="hover:text-violet-800 cursor-pointer">Security</li>
                    <li className="hover:text-violet-800 cursor-pointer">Privacy policy</li>
                    <li className="hover:text-violet-800 cursor-pointer">Terms of service</li>
                </ul>
            </section>
            <div>
                <h1 className="text-gray-400">Copyright 	&#169;2022 Fly.io</h1>
            </div>
        </footer>
    </div>
  )
}

export default FooterSection