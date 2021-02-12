import React from 'react'
import Link from 'next/link'

const HomePage = () => {
    return <div>
      <h1>Index</h1>
      <Link href="/upload"><button>Yükleme Sayfasına Git</button></Link>

    </div>
  }
  
  export default HomePage