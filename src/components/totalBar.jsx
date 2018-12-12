import React from "react"

const TotalBar = ({ totalCount }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div>
        Total: <span className="badge m-2 badge-info">{totalCount}</span>
      </div>
    </nav>
  )
}

export default TotalBar
