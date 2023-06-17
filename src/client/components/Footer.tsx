import React from 'react'

const Footer = () => {
  return (
    <footer className="mt-10 border-t border-gray-200">
      <div className="px-5 py-10 flex items-center justify-center">
        <p className="text-sm text-gray-500">
          Made with{' '}
          <span role="img" aria-label="heart">
            ❤️
          </span>{' '}
          by{' '}
          <a
            href="https://github.com/Blank-09"
            target="_blank"
            rel="noreferrer"
            className="text-gray-800 font-bold"
          >
            Blank-09
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
