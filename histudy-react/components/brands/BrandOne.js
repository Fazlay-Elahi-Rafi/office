import Link from "next/link";
import Image from "next/image";

const BrandOne = () => {
    return (
        <>
            <div className="rbt-brand-area bg-color-white ptb--60">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="section-title text-center mb--40">
                                <span className="small-title w-600">
                                    The Best Trusted Client in This Education World
                                </span>
                            </div>
                            <ul className="brand-list brand-style-3 justify-content-center justify-content-lg-between">
                                <li>
                                    <Link href="#">
                                        <Image width={188} height={35} src="/images/brand/brand-01.png" alt="Brand Image"/>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <Image width={188} height={35} src="/images/brand/brand-02.png" alt="Brand Image"/>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <Image width={188} height={35} src="/images/brand/brand-03.png" alt="Brand Image"/>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <Image width={188} height={35} src="/images/brand/brand-05.png" alt="Brand Image"/>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <Image width={188} height={35} src="/images/brand/brand-06.png" alt="Brand Image"/>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BrandOne;