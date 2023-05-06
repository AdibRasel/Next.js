import Link from 'next/link';


function Header() {
    return (
      <>

        <div className="MainHeader">
            <div className="RightSide">
                <Link href="/">Next Project </Link>
            </div>
            <div className="LeftSide">
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About Us</Link>
                </li>
                <li>
                    <Link href="/blog/">Blog Post</Link>
                </li>
            </ul>
            </div>
        </div>
      
      
      </>
    );
}

export default Header;