import React from 'react'

const Container = ({children}) => {
  return (
    <div className='max-w-screen-xl mx-auto px-4 lg:px-0 py-10'>{children}</div>
  )
}

export default Container