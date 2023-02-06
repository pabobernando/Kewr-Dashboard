import React from 'react'
import AddAcreChain from './ChainAdd/AddAcreChain'
import AddCanto from './ChainAdd/AddCanto'
import AddCosmoshubTestnet from './ChainAdd/AddCosmoshubTestnet'
import AddEchelon from './ChainAdd/AddEchelon'
import AddGnoland from './ChainAdd/AddGnoland'
import AddTerraClassic from './ChainAdd/AddTerraClassic'

function ChainAdd() {
  return (
    <>
    <div className="flex flex-row h-64 justify-around">
  <div className="flex flex-col justify-around justify-items-center">
  <AddCanto />
  <AddEchelon />
  </div>
  <div className="flex flex-col justify-around justify-items-center">
  <AddTerraClassic />
 <AddAcreChain />
  </div>
  <div className="flex flex-col justify-around justify-items-center">
  <AddCosmoshubTestnet />
  <AddGnoland />
  </div>
  </div>
  </>
  )
}

export default ChainAdd