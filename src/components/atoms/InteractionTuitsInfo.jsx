import React, { Fragment } from 'react'

const InteractionTuitsInfo = ({
  likes,
  retuits,
  classNameLikes,
  classNameRetuits
}) => (
  <Fragment>
    <span className={classNameLikes}>
      {likes.length === 0 ? '' : likes.length}
    </span>
    <span className={classNameRetuits}>
      {retuits.length === 0 ? '' : retuits.length}
    </span>
  </Fragment>
)

export default InteractionTuitsInfo
