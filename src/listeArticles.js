
export default function ListeArticles({articles}){
    return(
    <>
    <table className="table">
    <thead>
        
    <tr>
        <th>Titre</th>
        <th>Auteur</th>
        <th>Type</th>
        <th>Action</th>
    </tr>
</thead>
<tbody>
{
    articles.map((article)=>
        <tr>
            <td>{article.titre}</td>
            <td>{article.auteur}</td>
            <td>{article.type}</td>
            <td><button>Lire Plus</button></td>
        </tr>
    )
}
</tbody>
</table>
    </>
    )
}