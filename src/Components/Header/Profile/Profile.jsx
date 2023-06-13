import p from "./Profile.module.css";
import arrow from "../../../img/Header/Arrow.svg";
import profile from "../../../img/Header/avatar.png";
import search from "../../../img/Header/search.svg";

function Profile(props) {
  return (
    <div className={p.wrapper_profile}>
      <div className={p.search}>
        <input type="text" />
        <button className={p.search_btn}>
          <img src={search} alt="#" />
        </button>
      </div>
      <div className={p.name_profile}>
        <p>{props.name}</p>
        <svg className={p.arrow} width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.8" d="M1.41 0.590088L6 5.17009L10.59 0.590088L12 2.00009L6 8.00009L0 2.00009L1.41 0.590088Z" fill="#ADBFDF" />
        </svg>
      </div>
      <div className={p.profile}>
        <img src={profile} alt="#" />
        <svg className={p.arrow} width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.8" d="M1.41 0.590088L6 5.17009L10.59 0.590088L12 2.00009L6 8.00009L0 2.00009L1.41 0.590088Z" fill="#ADBFDF" />
        </svg>
      </div>
    </div>
  );
}

export default Profile;
