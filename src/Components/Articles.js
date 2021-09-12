import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import { getNews } from '../services/apiCall.js';
import { ArticleItem } from './ArticleItem.js';

export const Articles = () => {

    const [news, setNews] = useState([]);
    const [page, setPage] = useState(0);

    useEffect(() => {
        dailyNews();
        // eslint-disable-next-line
    }, [page])

    const dailyNews = async () => {
        let data = await getNews(page);
        setNews([...news, ...data.data]);
    }
    return (
        <InfiniteScroll
            dataLength={news.length}
            next={()=> setPage(page+1)}
            hasMore={true}
        >
            {news?.length > 0 && news.map(article => (
                <ArticleItem article={article} />
            ))}
        </InfiniteScroll>
    )
}
