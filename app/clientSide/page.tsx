'use client'
import {
  useQuery,
} from '@tanstack/react-query'

const getTime = async () => {
  const response = await fetch('http://worldtimeapi.org/api/timezone/America/Vancouver')
  return response.json()
}

export default function Page() {
  const { data } = useQuery({
    queryKey: ['time'],
    queryFn: getTime,
    refetchInterval: 1000,
  })

  return (
      <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-4 bg-slate-700">
        <h1 className="text-3xl text-white">What time is it now?</h1>
        <p className="text-white text-xl">
        {!!data && new Date(data?.utc_datetime).toLocaleString()}
        </p>
      </main>
  )
}
