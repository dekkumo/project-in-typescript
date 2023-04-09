import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Loader } from '../../utils/loader/Loader'
import classes from './PostsPage.module.css'
import PostType from '../../../models/PostType'

export const PostsPage: React.FC = () => {

  const [posts, setPosts] = useState<PostType[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [limit] = useState<number>(10)
  const [loader, setLoader] = useState<boolean>(true)

  useEffect(() => {
    async function getPosts() {
      setLoading(true)
      try {
        let response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
        let postList = await response.json()
        setPosts([...posts, ...postList])
        setLoading(false)
        setLoader(false)
      } catch(err: any) {
        console.log(err.message)
      }
    }
    getPosts()
  }, [])

  const lastPostIndex = currentPage * limit
  const firstPostIndex = lastPostIndex - limit
  const currentPost = posts.slice(firstPostIndex, lastPostIndex)

  const pageNumbers: number[] = []

  for (let i = 1; i<= Math.ceil(posts.length / limit); i++) {
    pageNumbers.push(i)
  }

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  const nextPage = () => {
    setCurrentPage(prev => prev + 1)
  }

  const prevPage = () => {
    setCurrentPage(prev => prev - 1)
  }

  return (
    <div className={classes.post__container}>
      <h1 className={classes.title__main}>Posts</h1>
      {loader && <Loader />}
      {currentPost.map(el => (
        <div key={el.id} className={classes.post}>
          <Link
            to={`/posts/${el.id}`}
            className={classes.link}
          >
            <div className={classes.id}>{el.id}</div>
            <div className={classes.title}>{el.title}</div>
            <div className={classes.body}>{el.body}</div>
          </Link>
        </div>
      ))}

      <div className={classes.container__pg}>
        <ul className={classes.list_pg}>
          {pageNumbers.map(number => (
            <li key={number} className={classes.li__pg}>
              <a onClick={() => paginate(number)}>{number}</a>
            </li>
          ))}
        </ul>
      </div>

      {
        loader ?
        null
        :
        <div className={classes.btn__container}>
          <button className={classes.btn__nav} onClick={prevPage}>prev page</button>
          <button className={classes.btn__nav} onClick={nextPage}>next page</button>
        </div>
      }
    </div>
  )
}
