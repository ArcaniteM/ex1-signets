import './Codex.scss';

export default function Codex({nom, prix, pid}) {



  return (
    <article className="Codex">
        <div className = "divContent">
              <img className = "imgContent" src={"img/" + pid + ".jpg"} alt={nom} />
        </div>
        <div className='codexTxt'>
          <div className="divTitle">{nom}</div> 
          <div className="divPrix">{prix}</div>
        </div>
    </article>
  );
}
