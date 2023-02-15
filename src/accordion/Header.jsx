import React, { useState } from 'react'

const Header = ({ title, active, setActive, answer }) => {
  return (
    <div className='accordion'>
      <div className="accordionHeading">
        <div className="container">
          <p>{title} </p>
          <span onClick={() => setActive(title)}>
            {active === title ? "x" : "|||"}
          </span>
        </div>
      </div>
      <div className={(active === title ? "show" : "") + "accordionContent"}>
        <div className="container">
        {
          answer
        }
        </div>
      </div>
      <h2>hello  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa qui, obcaecati nesciunt suscipit facere quidem.</h2>

    </div>
  )
}

export default Header