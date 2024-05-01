import React from 'react'

const Article = ({post}) => {
    const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: '2-digit'
      });
  return (
    <div>
        <section>
            <article className='post_article'>
                <time datetime={post.date} className='post_date'>{formattedDate}</time>
                <h2 className='post_title'>{post.title}</h2> 
                <img src={post.url} alt="" className="post_img" />           
                <p className='post_content'>{post.content}</p>
                <aside className='post_aside'>
                    <li className='post_continue'><a href="...">Continues ...</a></li>
                </aside>
            </article>
        </section>
    </div>
  )
}

export default Article