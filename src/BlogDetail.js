import { useParams} from "react-router";
import useRecuperation from "./useRecuperation";

const BlogDetail = () => {
  const { id } = useParams();
  const { data: blog, isLoading, error} = useRecuperation('http://localhost:8000/blogs/'+id);
 
  return (    
    <div className="">
       { isLoading && <div> En cour de traitement...!</div>}
       { error && <div>{error}</div>}
       { blog && (
        <div className="blog">
            <h2 class="blog-titre">{blog.title}</h2>
            <small class="blog-publication-date">{`Publier le : ${blog.date}`}</small>
            <p class="blog-body">{blog.body}</p>
            <p class="blog-author">{`Publier par : ${blog.author}`}</p>
        </div>
       )}
    </div>
 );
}
 
export default BlogDetail;