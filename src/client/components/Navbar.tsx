import React from 'react'

export const enum State {
  CONNECTED = 'connected',
  CONNECTING = 'connecting',
  DISCONNECTED = 'disconnected',
}

interface NavbarProps {
  status: State
}

const Navbar: React.FC<NavbarProps> = ({ status }) => {
  function statusColor() {
    if (status === State.CONNECTED) return 'bg-green-500'
    else if (status === State.CONNECTING) return 'bg-yellow-500'
    else return 'bg-red-500'
  }

  return (
    <nav className="mb-5 fixed p-5 top-0 left-0 right-0 bg-white shadow z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="https://seeklogo.com/images/W/websocket-logo-91B815D333-seeklogo.com.png"
            className="w-auto h-10"
          />
          <h2 className="text-2xl ml-3 font-bold">
            TestCases<span className="text-emerald-500">.fetch</span>
          </h2>
        </div>
        <div className="flex items-center pe-4">
          <div className={`rounded-full w-4 h-4 ${statusColor()}`}></div>
          <span className="ml-2 capitalize">{status}</span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
