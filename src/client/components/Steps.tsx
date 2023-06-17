import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import { javaCode } from '../constants'

import java from 'react-syntax-highlighter/dist/esm/languages/prism/java'
import dracula from 'react-syntax-highlighter/dist/esm/styles/prism/dracula'
import React from 'react'

SyntaxHighlighter.registerLanguage('java', java)

interface Props {
  uuid: string
}

const Steps: React.FC<Props> = ({ uuid }) => {
  return (
    <div className="prose prose-slate mx-auto">
      <h2>Testcase Code (JAVA)</h2>

      <p>
        This is the code you've to <b>copy/paste</b> in your IDE. And the
        testcases of the program will be sent back to you via WebSocket.
      </p>

      <h3>Steps to use it...</h3>
      <ul>
        <li>
          <b>Copy/paste</b> the below code in your IDE.
        </li>
        <li>
          Click <code>Compile & Run</code>.
        </li>
        <li>After the code runs, you'll see the testcases below.</li>
        <li>
          You can do the same for the <code>Submit</code> Code and get all the
          hidden testcases
        </li>
      </ul>

      {uuid && (
        <SyntaxHighlighter
          customStyle={{
            padding: '1.5rem 1.25rem',
            background: '#1e293b',
          }}
          language="java"
          style={dracula}
          className="p-10 rounded-md scrollbar"
        >
          {javaCode(uuid)}
        </SyntaxHighlighter>
      )}

      <hr />
    </div>
  )
}

export default Steps
