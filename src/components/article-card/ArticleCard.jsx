import "./ArticleCard.scss"
import { Link } from "react-router-dom"
import { truncate } from "../../helpers/truncate"

const ArticleCard = ({image, id, title, description, author, createAt, category}) => {
  return (
    <div className='article-card'>
        <div className="article__card-image">
        <Link to={`/article/${id}`}>
        <img src={image} alt="" />
        </Link>
        </div>
        <h3>{truncate(title, 35, "...")}</h3>
        <p>{truncate(description, 50, "...")}</p>
        <div>
            <p>{author}</p>
            <p>{createAt}</p>
            <p>{category}</p>
        </div>
    </div>
  )
}

export default ArticleCard