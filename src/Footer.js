import React from 'react'

function Footer() {
    const currentYear = new Date();
  return (
    <footer>
        Copy Right &copy; {currentYear.getFullYear()}
    </footer>
  )
}

export default Footer