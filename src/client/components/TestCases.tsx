import React from 'react'

interface Message {
  time: string
  message: string
}

interface Props {
  message: Array<Message>
}

const TestCases: React.FC<Props> = ({ message }) => {
  return (
    <div className="prose prose-slate mx-auto">
      <h2>Testcases</h2>

      <p>All your Testcases will appear here.</p>
      {message.map((m, i) => (
        <div key={i} className="mb-3">
          from <span className="font-bold">Fetcher</span>
          <span className="ml-2 text-gray-500">{m.time}</span>
          <pre>
            <code>{m.message}</code>
          </pre>
        </div>
      ))}
    </div>
  )
}

export default TestCases
