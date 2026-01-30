import React from 'react'

export const Blogs = async({params}) => {
    console.log(await params)
  return (
    <div>
        <h1>Blogs Page</h1>
        <ul>
            <li>Blog 1</li>
            <li>Blog 2</li>
            <li>Blog 3</li>
        </ul>
    </div>
  )
}

export default Blogs