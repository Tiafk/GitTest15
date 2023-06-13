import s from './Progress.module.css';

function NewCalls(props) {
  return (
    <div className={s.new}>
      <div className={s.title}>
        <p className={s.text}>{props.title}</p>
        <p className={s.new_score}>{props.score}</p>
      </div>
      <div className={s.progress_bar}>
        <span className={s.new_progress}></span>
      </div>
    </div>
  );
}

export default NewCalls;
