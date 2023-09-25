import RefreshHandler from "@/app/RefreshHandler"

const getTime = async () => {
  const res = await fetch(
    'http://worldtimeapi.org/api/timezone/America/Vancouver',
    { cache: 'no-store' }
  )
  return res.json()
}

export default async function Page() {
  const data = await getTime()
  return (
      <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-4 bg-slate-700">
        <h1 className="text-3xl text-white">What time is it now?</h1>
        <p className="text-white text-xl">
        {!!data && new Date(data?.utc_datetime).toLocaleString()}
      </p>
      <RefreshHandler />
      </main>
  )
}
