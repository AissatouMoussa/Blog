import { useState } from "react";

const Ajouter = () => {
    const [ title, setTitle] = useState('');
    const [ author, setAuthor] = useState('');
    const [ body, setBody] = useState('');

    const HandleBlogAdding = (e) =>{
        e.preventDefault();
        const tmp_date = new Date().toISOString().split('T');
        const date =`${tmp_date[0]} ${tmp_date[1]}`;
        const blog = {title, author, body, date}
        console.log(blog); 
    }

    return ( 
        <div className="create-blog">
          <from onSubmit={HandleBlogAdding} className="form">
            <div className="form-group">
                <label htmlFor="title">Titre de l'article</label>
                <input 
                   type="text"
                   className="form-control"
                   id="title"
                   value={title}
                   onChange = { (e) => setTitle(e.target.value)}
                   required />
            </div>

            <div className="form-group">
            <label htmlFor="author">Selectionnez un auteur </label>
            <select
                    required
                    className="form-control"
                    id="author"
                    value={author}
                    onChange = { (e) => setAuthor(e.target.value)}>
                    <option value=""></option>
                    <option value="Aicha">Aicha</option>
                    <option value="Moussa">Moussa</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="body">Contenu de l'article</label>
                <textarea 
                    required
                    value={body}
                    onChange = { (e) => setBody(e.target.value)}
                    className="form-control textarea"
                    id="body" rows="10"></textarea>
            </div>
            <div className="form-group">
                <button type="submit" className="btn-create">Créer Article</button>
            </div>
          </from>
        </div>
     );
}
 
export default Ajouter;