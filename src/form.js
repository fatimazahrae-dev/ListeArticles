export default function Forme({input_titre,input_auteur,input_type,input_contenu,Publier}){
    return(
        <>
        <form onSubmit={(e)=>e.preventDefault()}>
              <label for="sizesInputDefault" className="form-label">Titre :</label>
  <input className="form-control" type="text" id="sizesInputDefault"  aria-label="Default input example" ref={input_titre}/>
  <label htmlFor="sizesInputDefault" className="form-label">Auteur :</label>
  <input className="form-control" type="text" id="sizesInputDefault"  aria-label="Default input example" ref={input_auteur}/>
<div className="form-field">
  <label htmlFor="exampleFormControlSelect2" className="form-label">Type :</label>
  <select className="form-control" id="exampleFormControlSelect2" ref={input_type}>
    <option>Choose one…</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
</div>
<div className="form-field" >
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Contenue :</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" ref={input_contenu}></textarea>
</div>
<button type="button" className="btn btn-primary btn-sm" onClick={Publier}>Publier</button>
        </form>
        </>
    )
}