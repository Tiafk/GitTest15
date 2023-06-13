import React from 'react'
import s from '../Navigation.module.css';
import Link from './Link/Link';
import results from '../../../img/Navigation/results.svg';
import orders from '../../../img/Navigation/orders.svg';
import mail from '../../../img/Navigation/mail.svg';
import calls from '../../../img/Navigation/calls.svg';
import people from '../../../img/Navigation/people.svg';
import documents from '../../../img/Navigation/documents-24px.svg';
import perm from '../../../img/Navigation/perm_identity_black_24dp.svg';
import briefcase from '../../../img/Navigation/results.svg';
import library from '../../../img/Navigation/local_library_black_24dp.svg';
import settings from '../../../img/Navigation/settings-24px.svg';

function NavList() {
  return (
    <div className={s.nav_list}>
      <Link link='/results' text='Итоги' icon={results}/>
      <Link link='/orders' text='Заказы' icon={orders}/>
      <Link link='/mail' text='Сообщения' icon={mail}/>
      <Link link='/calls' text='Звонки' icon={calls}/>
      <Link link='/people' text='Контрагенты' icon={people}/>
      <Link link='/documents' text='Документы' icon={documents}/>
      <Link link='/perm' text='Исполнители' icon={perm}/>
      <Link link='/briefcase' text='Отчеты' icon={briefcase}/>
      <Link link='/library' text='База знаний' icon={library}/>
      <Link link='/settings' text='Настройки' icon={settings}/>
    </div>
  );
}

export default NavList;
