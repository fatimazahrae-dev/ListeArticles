import Forme from "./form";
import ListeArticles from "./listeArticles";
import { useState ,useRef} from "react";
export default function App(){
let [articles,addArticle]=useState([])
let input_titre=useRef()
let input_auteur=useRef()
let input_type=useRef()
let input_contenu=useRef()
function Publier(){
   let article={
    titre:input_titre.current.value,
    auteur:input_auteur.current.value,
    type:input_type.current.value,
    contenu:input_contenu.current.value
   }
   addArticle([...articles,article])
}
return(
    <>
    <Forme

input_auteur={input_auteur}
input_titre={input_titre}
input_type={input_type}
input_contenu={input_contenu}
Publier={Publier}
/>
<ListeArticles
articles={articles}
/>
    </>
)
}