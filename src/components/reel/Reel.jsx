import React, { useEffect, useState } from 'react'
import "./Reel.scss"
import apiInstanse from '../../services/api'
import { Container } from '../../utils/index'
import ArticleCard from "../article-card/ArticleCard"
import Skeleton from 'react-loading-skeleton'

const Reel = () => {
    const [data, setData] = useState([])
    useEffect(()=>{
            apiInstanse("/api/posts")
            .then(response => {
                setData(response.data.data)
                console.log(response.data.data);
            })
            .catch(error => console.log(error))
    }, [])
  return (
    <div className='home__reel'>
        <Container>
                <h2>Today's trending</h2>
            <div className="reel__wrapper">
                {
                    data.map((article, index) => 
                            <ArticleCard
                                image={article.image}
                                title={article.title}
                                description={article.description}
                                author={article.author}
                                createAt={article.createAt}
                                category={article.category}
                            />
                        )
                }
                
            </div>
            <Skeleton/>
        </Container>
    </div>
  )
}

export default Reel