'use client'
import { useQuery } from '@tanstack/react-query'

const getTime = async () => {
  const response = await fetch('/api/time')
  return response.json()
}

const getJsonData = async () => {
  const response = await fetch('/api/staticData')
  return response.json()
}

export default function Page() {
  const { data } = useQuery({
    queryKey: ['time'],
    queryFn: getTime,
    refetchInterval: 1000,
  })

  const { data:jsonData } = useQuery({
    queryKey: ['jsonData'],
    queryFn: getJsonData,
  })

  console.log('jsonData', jsonData?.[0]??'no data yet');
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-4 bg-slate-700">
      <h1 className="text-3xl text-white">What time is it now?</h1>
      <p className="text-white text-xl">
        {!!data && new Date(data?.utc_datetime).toLocaleString()}
      </p>
    </main>
  )
}
