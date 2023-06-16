import a from "./Call.module.css";

function Call(props) {
  return (
    <div className={a.call}>
      <hr />
      <div className={a.set}>
        <div className={a.element}>
          <img src={props.call.in_out} alt="" />
        </div>
        <div className={a.element}>{props.call.time}</div>
        <div className={a.element}>
          <img src={props.call.person_avatar} alt="#" />
        </div>
        <div className={a.element}>
          {props.call.person_web}
        </div>
        <div className={a.number}>
          {props.call.from_number}
          <p className={a.text}>{props.call.IP}</p>
          </div>
        <div className={a.element}>
          <p className={a.source}>{props.call.contact_company}</p>
        </div>
        <div className={a.element}>{props.call.grade}</div>
        <div className={a.duration}>{props.call.duration}</div>
      </div>
    </div>
  );
}

export default Call;
