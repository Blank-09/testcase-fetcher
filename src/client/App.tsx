import { useEffect, useState } from 'react'

import Navbar, { State } from './components/Navbar'
import Footer from './components/Footer'
import Steps from './components/Steps'
import TestCases from './components/TestCases'
import Hero from './components/Hero'

function paddingZero(num: number) {
  return num.toString().padStart(2, '0')
}

function App() {
  const [message, setMessage] = useState([])
  const [status, setStatus] = useState(State.DISCONNECTED)
  const [uuid, setUuid] = useState('')

  // Connecting to WebSocket server
  useEffect(() => {
    const ws = new WebSocket(
      (import.meta.env.VITE_WS_URL as string) || 'ws://localhost:3000'
    )

    setStatus(State.CONNECTING)

    ws.onopen = () => {
      setStatus(State.CONNECTED)
    }

    ws.onmessage = (e) => {
      // convert from blob to string
      if (e.data instanceof Blob) {
        e.data.text().then((text) => {
          // @ts-ignore
          setMessage((prev) => [...prev, json])
        })

        return
      }

      const date = new Date()
      const hours = date.getHours()
      const json = JSON.parse(e.data)

      json.time = `${paddingZero(
        hours > 12 ? hours - 12 : hours
      )}:${paddingZero(date.getMinutes())} ${hours > 12 ? 'PM' : 'AM'}`

      console.log(json)

      if (json.type == 'uuid') {
        return setUuid(json.value)
      }

      // @ts-ignore
      setMessage((prev) => [...prev, json])
    }

    ws.onclose = () => {
      setStatus(State.DISCONNECTED)
      console.log('disconnected')
    }

    return () => {
      ws.onopen = ws.onclose = ws.onmessage = null
      ws.close()
    }
  }, [])

  return (
    <>
      <Navbar status={status} />

      <main className="container mx-auto px-3 md:px-6 lg:px-10">
        <Hero />

        <hr />

        <div id="testcase" className="grid grid-cols-12 lg:gap-10">
          <div className="w-full mt-5 md:mt-12 col-span-12 lg:col-span-7 xxl:col-span-6">
            <Steps uuid={uuid} />
          </div>
          <div className="w-full mt-5 md:mt-12 col-span-12 lg:col-span-5 xxl:col-span-6">
            <TestCases message={message} />
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}

export default App
