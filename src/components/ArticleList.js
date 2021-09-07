import Article from "./Article"
function ArticleList (props) {
        const {posts} = props;
        const singleArticle= posts.map(post => 
            <Article key={post.title} title={post.title} id={post.id} minutes={post.minutes} preview={post.preview}/>)
    return(
        <main>
            {singleArticle}
        </main>
    )
}
export default ArticleList;