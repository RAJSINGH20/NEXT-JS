import React from 'react'

const blog1 = async({params}) => {
    console.log(await params)
    const {Blog , commentid} = await params;
  return (
    <div>blog1 {Blog} with comment id {commentid}</div>
  )
}

export default blog1