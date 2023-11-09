import "./ArticleCard.scss"
import { truncate } from "../../helpers/truncate"

const ArticleCard = ({image, title, description, author, createAt, category}) => {
  return (
    <div className='article-card'>
        <div className="article__card-image">
        <img src={image} alt="" />
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