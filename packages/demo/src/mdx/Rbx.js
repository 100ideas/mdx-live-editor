import React from 'react'
import * as Rbx from 'rbx'

export const rbxKeys = Object.keys(Rbx)
// console.dir(rbxKeys)
// export const rbx = JSON.stringify(rbxKeys, null, 2)

export const rbxComponents = rbxKeys.map(k => ({ tagname: k, component: Rbx[k] }) )

const Rbxlist = () => {


  

  // render() {
  //   const { children } = this.props
  //   return <ActualGrid>{children}</ActualGrid>
  // }

  // return components
}

export default Rbxlist