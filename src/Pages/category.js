import React from 'react'
import Grid from '@material-ui/core/Grid'
import Skeleton from 'react-loading-skeleton'

import Card from '../Components/cards'
import newsApi from '../Utils/newsApi'
import { categoriesId } from '../Utils/constants'

class Category extends React.Component {
  state = {
    isLoading: false,
    categoriesNews: [],
  }

  componentDidMount() {

    this.fetchCategoriesNews()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.category !== this.props.match.params.category) {
      this.fetchCategoriesNews()
    }
  }

  async fetchCategoriesNews() {
    const { category } = this.props.match.params
    const categoryId = categoriesId[category]

    this.setState({ isLoading: true })

    const categoriesNews = await newsApi.category(categoryId)
    this.setState({ categoriesNews: categoriesNews.slice(0, 15), isLoading: false })
  }

  render() {
    const { isLoading, categoriesNews } = this.state

    return (
      <div style={{ marginTop: '10px' }}>
        <Grid container spacing={4} >
          {isLoading &&
            Array.from({ length: 15 }, (_, index) => (
              <Grid item item xs={4} key={index}>
                <Skeleton height={337} />
              </Grid>
            ))}

          {categoriesNews.length > 0 &&
            categoriesNews.map(latestNew => (
              <Grid item xs={4} key={latestNew.news_id}>
                <Card data={latestNew} />
              </Grid>
            ))}
        </Grid>
      </div>
    )
  }
}

export default Category