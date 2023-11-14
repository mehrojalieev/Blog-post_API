import { useEffect, useState } from "react"
import "./Article.scss"
import { useParams, Link } from "react-router-dom"
import apiInstanse from "../../services/api"
import Skeleton from "react-loading-skeleton"

const Article = () => {
  const { id } = useParams()
  const [singleData, setSingleData] = useState({})

  useEffect(() => {
    apiInstanse(`/api/posts/${id}`)
      .then(response => {
        setSingleData(response.data)
        console.log(response.data)
      })
  }, [])
  return (
    <div className="singlecard-wrapper">
      <img src={singleData.image || <Skeleton baseColor="#eee" count={10} width={100} height={50} />} alt="" />
      <div className="singlecard-content">
        <h3>{singleData.title}</h3>
        <p>{singleData.description || <Skeleton count={10} width={100} baseColor="#eee" />}</p>
        <Link className="back-btn" to={"/"}> Go Back</Link>
      </div>
    </div>
  )
}

export default Article