import React from 'react'

function Message({ img, title, message }) {
  return (
    <div className="text-center px-2 py-5">
        <div className="col-12 col-md-8 col-lg-7 col-xl-5 mx-auto px-3">
            <img src={img} alt={title} className="w-100" />
        </div>
        <h2 className="mt-4 mb-2">{ title }</h2>
        <p>{message}</p>
    </div>
  )
}

export default Message