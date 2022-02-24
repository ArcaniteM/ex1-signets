import './Content.scss';
import lesCodex from './data/codex.json';

export default function Content() {
  return (
    <div className="Content">
        {
            lesCodex.map(p => <Codex etatPanier={etatPanier} key={p.id} nom={p.nom} prix={p.prix} pid={p.id} />)
        }
    </div>
  );
}