import React from 'react'
import Grid from '@material-ui/core/Grid'
import Skeleton from 'react-loading-skeleton'

import Card from '../Components/cards'
import NewsApi from '../Utils/newsApi'

import Pagination from '../Components/pagination'

class Home extends React.Component {
  state = {
    isLoading: false,
    latestNews: [],
  }

  async componentDidMount() {
    this.setState({ isLoading: true })
    const latestNews = await NewsApi.latest()
    const latestNewsSliced = latestNews.slice(0, 15)

    this.setState({ latestNews: latestNewsSliced, isLoading: false })
  }

  render() {
    const { isLoading, latestNews } = this.state

    return (
      <div style={{ marginTop: '10px' }}>
        <Grid container spacing={3}>
          {isLoading &&
            Array.from({ length: 15 }, (_, index) => (
              <Grid item xs={4} key={index}>
                <Skeleton width={282} height={337} />
              </Grid>
            ))}

          {latestNews.length > 0 &&
            latestNews.map(latestNew => (
              <Grid item xs={4} key={latestNew.news_id}>
                <Card data={latestNew} />
              </Grid>
              
            ))}
            <Pagination latestNewsSliced={latestNews} latestNews={latestNews.length} />
        </Grid>
      </div>
    )
  }
}

export default Home
