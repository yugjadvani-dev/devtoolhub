"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Sidebar: React.FC = () => {

    const pathname = usePathname()

    return (
        <div className="flex h-screen sticky top-16 w-full">
            <div className="w-full h-full flex-col md:border-r bg-background pr-4 pt-3 flex">
                {/* <div className="flex-1 overflow-y-auto py-4"> */}
                    <nav className="flex flex-col gap-2 pt-4">
                        <div className="space-y-1">
                            <h3 className="text-sm font-medium text-muted-foreground">Tools</h3>
                            <ul className="grid gap-1">
                                <li>
                                    <Link
                                        href="/"
                                        className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                                        prefetch={false}
                                    >
                                        Overview
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-1">
                            <h3 className="text-sm font-medium text-muted-foreground">Minifiers</h3>
                            <ul className="grid gap-1">
                                <li>
                                    <Link
                                        href="/html-minify"
                                        className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                                        prefetch={false}
                                    >
                                        HTML Minify
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/css-minify"
                                        className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                                        prefetch={false}
                                    >
                                        CSS Minify
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/javascript-minify"
                                        className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                                        prefetch={false}
                                    >
                                        JavaScript Minify
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                {/* </div> */}
            </div>
        </div>
    )
}

export default Sidebar
