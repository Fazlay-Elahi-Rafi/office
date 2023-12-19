import Link from 'next/link'
import Image from 'next/image'

const Logo = () => {
    return (
        <>
            <div className="logo">
                <Link href="/">
                    <Image
                        width={250}
                        height={82}
                        src="/images/logo/logo.png"
                        alt="Education Logo Images"
                    />
                </Link>
            </div>
        </>
    )
}

export default Logo