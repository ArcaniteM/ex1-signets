import './Content.scss';
import lesCodex from './data/codex.json';
import Codex from './Codex';

export default function Content() {
  return (
    <div className="Content">
        {
            lesCodex.map(p => <Codex key={p.id} nom={p.nom} prix={p.prix} pid={p.id} />)
        }
    </div>
  );
}