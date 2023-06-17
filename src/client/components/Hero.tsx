import React from 'react'

const Hero = () => {
  return (
    <div className="mb-5 px-5 py-10 flex flex-col items-center text-center justify-center h-screen pt-24">
      <div className="relative mx-auto mb-12">
        <h1 className="text-5xl font-bold text-gray-900 relative z-10">
          TestCase Watcher
        </h1>
        <div
          className="absolute z-0 duration-1000 -inset-2 transitiona-all opacity-20 rounded-xl blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"
          style={{
            background:
              'linear-gradient(90deg, rgb(68, 255, 154) -0.55%, rgb(68, 176, 255) 22.86%, rgb(139, 68, 255) 48.36%, rgb(255, 102, 68) 73.33%, rgb(235, 255, 112) 99.34%)',
          }}
        ></div>
      </div>

      <p className="md:w-3/4 mb-10 text-lg">
        This is a test page for made with WebSocket. It is connected to a
        WebSocket server that is hosted on Repl.it. The server is written in{' '}
        <b>JavaScript</b> and uses the{' '}
        <a href="" target="_blank" rel="noreferrer">
          ws
        </a>{' '}
        library.
      </p>

      <a href="#testcase">
        <div className="relative inline-flex group">
          <div className="absolute transitiona-all duration-1000 opacity-50 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"></div>
          <button className="flex-shrink-1 w-full relative inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white transition-all duration-200 bg-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
            Fetch Testcases
          </button>
        </div>
      </a>
    </div>
  )
}

export default Hero
