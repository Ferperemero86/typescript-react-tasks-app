import React from 'react'

export const InputField = () => {
  return (
    <form className="input">
      <input type="input" placeholder="Enter a task" className="input__box" />
      <button className="input__submit">Go</button>
    </form>
  )
}
