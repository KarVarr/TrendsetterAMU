import Link from "next/link";

export const TheHeader = () => {
    return (
        <header className="container">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contacts</Link>
            <Link href="/stores">Stores</Link>
            <Link href="/amu">AMU</Link>
        </header>
    )
}
