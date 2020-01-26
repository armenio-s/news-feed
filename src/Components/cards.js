import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import './botones.css'

import styled, { css } from 'styled-components'

const useStyles = makeStyles({
  card: {
    height: '100%',
  },
  media: {
    height: 200,
  },
})

const Text = styled.text`
  display: -webkit-box;
  font-size: 1.2rem;
  font-weight: 600;
  font-family: 'Roboto', sans-serif;
  max-width: 352px;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  ${props =>
    props.subtitle &&
    css`
      color: #707070;
      font-weight: 400;
      font-size: 0.875rem;
      margin-top: 10px;
    `
  };
`

function MediaCard({ data }) {
  const { url, title, img_url, source_name } = data
  const classes = useStyles()

  return (
    <Card>
      <CardMedia className={classes.media} image={img_url} title={title} />
        <CardContent>
          
          <Text gutterBottom variant="body1" component="h5">
            {title}
          </Text>
          <Text subtitle gutterBottom variant="h6" component="h6">
            {source_name}
          </Text>
          
        </CardContent>

        <CardActions>
          <Button size="small" color="primary">
            <a className="link" href={url} target="_blank">
              Ver más
            </a>
        </Button>
      </CardActions>
    </Card>
  )
}

export default MediaCard

/*

agregar url en las props de media card para volver a usar
<CardActions>
        <Button size="small" color="primary">
          <a href={url} target="_blank">
            Ver más
          </a>
        </Button>
      </CardActions>
      */
