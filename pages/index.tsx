import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { SearchDialog } from '@/components/SearchDialog'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { FAQDropdown } from '@/components/FAQDropdown'

const inter = Inter({ subsets: ['latin'] })



export default function Home() {
    return (
        <>
            <Head>
                <title>Security and Privacy Questions – Help Scout</title>
                <meta
                    name="description"
                    content="Chat directly with Help Scout's security and privacy documentation."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <div className={styles.center}>
                    <SearchDialog />
                </div>

                <div className="py-24 w-full flex flex-col items-center justify-center space-y-3">
                    <div className="opacity-75 transition hover:opacity-100 cursor-pointer">
                        <div className="flex items-center justify-center space-x-1">
                            <p className="text-base">
                                Built for security questions directed to Help Scout.
                            </p>
                            <Image
                                src={"/helpscout.png"}
                                width="20"
                                height="20"
                                alt="Help Scout logo"
                                className="ml-1"
                            />
                            <div className="border-l border-gray-300 w-1 h-4 mr-2 ml-2" />
                            <FAQDropdown />
                        </div>
                    </div>
                    <div className="flex justify-center flex-col text-center space-y-2">
                        <p className="text-xs">
                            This app allows you to interface directly with all public-facing
                            security policies and privacy documentation that live on Help
                            Scout&apos;s website.
                        </p>
                    </div>
                </div>
            </main>
        </>
    );
}
