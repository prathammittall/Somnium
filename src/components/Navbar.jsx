import React from 'react'

function Navbar() {
  return (
    <>
        <header>
            <nav>
                <ul className="w-full h-12 navbar flex justify-end items-center gap-5 px-5 bg-purple-700 text-white">
                    <li>Home</li>
                    <li>Contact</li>
                    <button>Login</button>
                </ul>
            </nav>
        </header>
    </>
  )
}

export default Navbar