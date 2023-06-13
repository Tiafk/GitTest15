import c from './Progress.module.css';

function Conversion(props) {
  return (
    <div className={c.new}>
      <div className={c.title}>
        <p className={c.text}>{props.title}</p>
        <p className={c.conversion_score}>{props.score}</p>
      </div>
      <div className={c.progress_bar}>
        <span className={c.conversion_progress}></span>
      </div>
    </div>
  );
}

export default Conversion;