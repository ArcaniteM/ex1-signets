import './Codex.scss';

export default function Codex({etatPanier: [panier, setPanier], nom, prix, pid}) {
  return (
    <div className="Codex">
        <div className = "divContent">
              <img className = "imgContent" src={"img/1.jpg"} alt="" />
        </div>
        <div className="divTitle"></div>
        <div className="divPrix"></div>
    </div>
  );
}
