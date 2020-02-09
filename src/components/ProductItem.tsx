import React, { ReactNode } from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'

interface Props {
  url: string
  children?: ReactNode
}

const ProductItem: React.FC<Props> = ({ url, children }) => {
  const theme = useTheme()
  const xsBreakPoint = useMediaQuery(theme.breakpoints.only('xs'))
  const classes = makeStyles({
    card: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      color: '#fff',
      padding: '1rem',
      ...(xsBreakPoint && { marginTop: '1rem' })
    }
  })()

  return (
    <Grid
      className={classes.card}
      xs={12}
      sm={6}
      alignItems="center"
      item
      style={{
        backgroundImage: `url(${url})`,
        backgroundSize: 'cover'
      }}
    >
      {children}
    </Grid>
  )
}

export default ProductItem
