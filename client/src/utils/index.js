

export function checkIbcListReturnAlias(denom, listDenom) {
    const alias = listDenom.filter(ibc => ibc.denom === denom)
    if (!alias.length) {
      return 'No denom'
    }
    return alias[0].alias
  }
