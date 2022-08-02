import React from 'react'

function ErroroPage({code}) {
  return (
    <main className="d-flex justify-content-center align-items-center">
        <h2>Ошибка API {code}!</h2>
    </main>
  )
}

export default ErroroPage