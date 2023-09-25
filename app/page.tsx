import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-24 gap-4 bg-slate-700">
      <ul className='text-white text-xl flex flex-col gap-2'>
        <li className='hover:text-blue-500 underline'>
          <Link href="/clientSide">Fetching Data on the Client</Link>
        </li>
        <li className='hover:text-blue-500 underline'>
          <Link href="/serverSide">Fetching Data on the Server</Link>
        </li>
        <li className='hover:text-blue-500 underline'>
          <Link href="/clientSideRouteHandler">
            Fetching Data on the Client with Route Handlers
          </Link>
        </li>
      </ul>
    </main>
  )
}
