import React from "react"
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    empty: {
        padding: '10px 10px 40px 10px',
        marginLeft: '30%',
        marginRight: '30%',
        color: '#848884'
      }
}))

const Empty = () => {
    const classes = useStyles()
    return <div className={classes.empty}>Nothing here yet!</div>
}

export default Empty