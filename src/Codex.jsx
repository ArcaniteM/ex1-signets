import './Codex.scss';

export default function Codex({etatPanier: [], nom, prix, pid}) {

  if(panier[pid]) {
        qte = panier[pid].qte;
  }

  return (
    <article className="Codex">
        <div className = "divContent">
              <img className = "imgContent" src={"img/" + pid + ".jpg"} alt={nom} />
        </div>
        <div className="divTitle">{nom}</div> 
        <div className="divPrix">{prix}</div>
    </article>
  );
}
