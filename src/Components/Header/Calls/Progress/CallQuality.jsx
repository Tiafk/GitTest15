import s from './Progress.module.css';

function CallQuality(props) {
  return (
    <div className={s.new}>
      <div className={s.title}>
        <p className={s.text}>{props.title}</p>
        <p className={s.quality_score}>{props.score}</p>
      </div>
      <div className={s.progress_bar}>
        <span className={s.quality_progress}></span>
      </div>
    </div>
  );
}

export default CallQuality;