import React from 'react';
import Article from './Article'


function ArticleList({posts}){
    const articleMap = posts.map((article)=>(
        <Article 
        key={article.id}
        title={article.title}
        date={article.date}
        preview={article.preview}
        />
    ))
    return (
        <main>
            {articleMap}

        </main>

    )

}

export default ArticleList



// import React from "react";
// import Article from "./Article";

// function ArticleList({ posts }) {
//   const articles = posts.map((post) => (
//     <Article
//       key={post.id}
//       title={post.title}
//       date={post.date}
//       preview={post.preview}
//       minutes={post.minutes}
//     />
//   ));
//   return <main>{articles}</main>;
// }

// export default ArticleList;