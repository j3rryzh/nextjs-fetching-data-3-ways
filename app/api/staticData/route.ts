import path from 'path'
import { promises as fs } from 'fs'
import { NextResponse } from 'next/server'

// TODO: Add data type definitions
export async function GET() {
  //Find the absolute path of the json directory
  const jsonDirectory = path.join(process.cwd(), 'app/data')
  //Read the json data file data.json
  const jsonString = await fs.readFile(
    jsonDirectory + '/statCanAllCubesList.json',
    'utf8'
  )
  const data = await JSON.parse(jsonString)

  return NextResponse.json(data)
}
