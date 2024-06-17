"use client"

import Link from "next/link";
import {usePathname} from "next/navigation";
import {useState} from "react";

export default function Navigation() {

    const path = usePathname();
    const [count, setCount] = useState(0);

    return (
        <nav>
            <ul>
                <il>
                    <Link href={'/'}>Home</Link> {path === "/" ? "🔥" : ""}
                </il>
                <li>
                    <Link href={'/about-us'}>About Us</Link> {path === "/about-us" ? "🔥" : ""}
                </li>
                <li>
                    <button onClick={() => {setCount(count + 1)}}>click count : ${count}</button>
                </li>
            </ul>
        </nav>
    )
}