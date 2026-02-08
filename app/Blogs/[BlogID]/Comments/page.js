import React from 'react'

const blog1 = async({params}) => {
    console.log(await params)
    const {Blog} = await params;
  return (
    <div>blog1 {Blog}</div>
  )
}

export default blog1