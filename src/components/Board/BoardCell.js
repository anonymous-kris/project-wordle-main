import React from "react";

export function BoardCell({ value = undefined, status = undefined }) {

  const className = status ? `cell  ${status}` : 'cell'

  return (
    <span className={className}>{value}</span>
  )
}