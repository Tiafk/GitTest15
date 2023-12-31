import React, { useState } from 'react'
import Filters from "./Filters/Filters";
import c from "./Navigations.module.css";
import { IMaskInput } from 'react-imask';

function Navigations({sort, onClickSort, setValue}) {
  return (
    <div className={c.navigation}>
      <div className={c.search}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.4351 10.0629H10.7124L10.4563 9.81589C11.3528 8.77301 11.8925 7.4191 11.8925 5.94625C11.8925 2.66209 9.23042 0 5.94625 0C2.66209 0 0 2.66209 0 5.94625C0 9.23042 2.66209 11.8925 5.94625 11.8925C7.4191 11.8925 8.77301 11.3528 9.81589 10.4563L10.0629 10.7124V11.4351L14.6369 16L16 14.6369L11.4351 10.0629ZM5.94625 10.0629C3.66838 10.0629 1.82962 8.22413 1.82962 5.94625C1.82962 3.66838 3.66838 1.82962 5.94625 1.82962C8.22413 1.82962 10.0629 3.66838 10.0629 5.94625C10.0629 8.22413 8.22413 10.0629 5.94625 10.0629Z" fill="#ADBFDF" />
        </svg>
        <IMaskInput
          onChange={(e) => setValue(e.target.value)}
          mask={'+7 (###) ###-##-##'}
          definitions={{
          '#': /[0-9]/,
        }}
        overwrite
      />
      </div>
      <div className={c.container}>
        {sort.map((objSort, ye) => (
          <Filters 
            sortId={objSort} 
            onClickSort={onClickSort} 
            key={ye} 
            defaultValue={objSort.list[0].name}
            defaultTag={objSort.list[0].tag}
            />
        ))}
      </div>
    </div>
  );
}

export default Navigations;