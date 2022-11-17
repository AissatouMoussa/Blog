import BlogList from "./BlogList";
import useRecuperation from "./useRecuperation";

const Home = () => {

    const{ data : blogs, isLoading, error} = useRecuperation('http://localhost:8000/blogs');
    
    return ( 
        <div className="home">
            {isLoading && <div>En cour de traitement ...</div>}
            {error && <div> {error}</div>} 
           {blogs && <BlogList blogs = {blogs} title = {"Liste des blogs"}/>}
        </div>
     );
}
 
export default Home;    