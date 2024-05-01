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
                <p className='post_content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis eros pellentesque, blandit dui sed, viverra arcu. Sed id dolor eu mauris faucibus pulvinar non quis lorem. Quisque sed sagittis tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. In mollis arcu leo, eget ultricies lorem aliquam tempor. Ut felis eros, aliquam quis lacinia vel, sollicitudin non nibh. Nam auctor est sapien, ac convallis elit dignissim sed. Morbi mollis nisl sit amet eleifend rutrum. Nam vitae nibh vel diam gravida iaculis. Sed volutpat quam ac venenatis scelerisque. Suspendisse libero orci, elementum vel mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis eros pellentesque, blandit dui sed, viverra arcu. Sed id dolor eu mauris faucibus pulvinar non quis lorem. Quisque sed sagittis tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. In mollis arcu leo, eget ultricies lorem aliquam tempor. Ut felis eros, aliquam quis lacinia vel, sollicitudin non nibh. Nam auctor est sapien, ac convallis elit dignissim sed. Morbi mollis nisl sit amet eleifend rutrum. Nam vitae nibh vel diam gravida iaculis. Sed volutpat quam ac venenatis scelerisque. Suspendisse libero orci, elementum vel mattis.</p>
                <aside className='post_aside'>
                    <li className='post_continue'><a href="#">Continues ...</a></li>
                </aside>
            </article>
        </section>
    </div>
  )
}

export default Article