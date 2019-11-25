import dayjs from 'dayjs';

const BASE_URL = 'https://api.canillitapp.com'

const getActualDate = () => dayjs().format('YYYY[-]MM[-]DD')

const NewsApi = {
  latest: async (date = getActualDate()) => {
    try {
      const response = await fetch(`${BASE_URL}/latest/${date}`)
      const data = await response.json()

      return data
    } catch (error) {
      console.error(error)
    }
  },
  category: async (categoryId = '') => {
    try {
      const response = await fetch(`${BASE_URL}/news/category/${categoryId}`)
      const data = await response.json()

      return data
    } catch (error) {
      console.error(error)
    }
  },
}

export default NewsApi

