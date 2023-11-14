import { useEffect, useState } from "react"
import "./Article.scss"
import { useParams, Link } from "react-router-dom"
import apiInstanse from "../../services/api"

const Article = () => {
  const {id} = useParams()
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
      <img src={singleData.image} alt=""  />
        <div className="singlecard-content">
          <h3>{singleData.title}</h3>
          <p>{singleData.description}</p>
        <Link className="back-btn" to={"/"}> Go Back</Link>
        </div>
    </div>
  )
}

export default Article