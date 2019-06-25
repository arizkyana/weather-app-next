import Link from 'next/link'

export default() => (
 <div>
  <Link href="/">
   <a className="text-blue-500">Home</a>
  </Link>
  <Link href="/login">
   <a className="text-blue-500">Login</a>
  </Link>
  <Link href="/register">
   <a className="text-blue-500">Register</a>
  </Link>
 </div>
)