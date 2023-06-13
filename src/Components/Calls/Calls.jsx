import React, { useState } from 'react';
import c from '../Calls/Calls.module.css';
import Top from './Top/Top';
import Navigations from './Navigations/Navigations';
import AllCalls from './AllCalls/AllCalls';
import ava1 from '../../img/Calls/ava/avatar1.svg';
import ava2 from '../../img/Calls/ava/avatar2.svg';
import ava3 from '../../img/Calls/ava/avatar3.svg';
import incoming from '../../img/Calls/call/call.png';
import outgoing from '../../img/Calls/call/2.png';

function Calls() {

  const [calls, setCalls] = useState([
    {
      in_out:incoming,
      time:'20:00', 
      person_avatar:ava1,
      from_number:'+7 (987) 567-17-12', 
      contact_company:'Rabota.ru', 
      grade:'',
      duration:'12:06'
    },
    {
      in_out:incoming,
      time:'19:40', 
      person_avatar:ava2,
      from_number:'+7 (925) 345-17-12', 
      contact_company:'',
      grade:'5',
      duration:'12:06'
    },
    {
      in_out:incoming,
      time:'19:30', 
      person_avatar:ava3,
      from_number:'+7 (913) 866-69-96', 
      contact_company:'Google',
      grade:'',
      duration:'12:06'
    },
    {
      in_out:outgoing,
      time:'19:35', 
      person_avatar:ava2,
      from_number:'Константиний Константинопольский', 
      IP:'ООО «Фестивальный эффект»', 
      contact_company:'Санкт-Петербург',
      grade:'5',duration:'12:06'
    },
    {
      in_out:incoming,
      time:'19:20', 
      person_avatar:ava3,
      from_number:'+7 (987) 556-12-18', 
      contact_company:'',
      grade:'5',
      duration:'12:06'
    },
    {
      in_out:outgoing,
      time:'19:05', 
      person_avatar:ava3,
      from_number:'+7 (987) 555-12-82', 
      contact_company:'Yandex',
      grade:'',
      duration:'12:06'
    },
    {
      in_out:outgoing,
      time:'19:00', 
      person_avatar:ava1,
      from_number:'+7 (987) 555-12-82', 
      contact_company:'',
      grade:'5',
      duration:'12:06'
    },
    {
      in_out:incoming,
      time:'19:00', 
      person_avatar:ava3,
      from_number:'+7 (913) 866-69-96', 
      contact_company:'Санкт-Петербург источник в три строки, кто-то так пишет, ну ладно, но некрасиво',
      grade:'',
      duration:'12:06'
    },
    {
      in_out:outgoing,
      time:'19:00', 
      person_avatar:ava1,
      from_number:'+7 (987) 556-12-18', 
      contact_company:'Санкт-Петербург',
      grade:'',
      duration:'12:06'
    },
    {
      in_out:incoming,
      time:'19:00', 
      person_avatar:ava1,
      from_number:'+7 (987) 567-17-12', 
      contact_company:'Rabota.ru', 
      grade:'',
      duration:'12:06'
    },
    {
      in_out:incoming,
      time:'19:00', 
      person_avatar:ava2,
      from_number:'+7 (987) 345-17-12', 
      contact_company:'',
      grade:'5',
      duration:'12:06'
    },
    {
      in_out:outgoing,
      time:'18:24', 
      person_avatar:ava3,
      from_number:'+7 (913) 866-69-96', 
      contact_company:'Google',
      grade:'',
      duration:'12:06'
    },
    {
      in_out:outgoing,
      time:'16:00', 
      person_avatar:ava2,
      from_number:'Константиний Константинопольский', 
      IP:'ООО «Фестивальный эффект»', 
      contact_company:'Санкт-Петербург',
      grade:'5',
      duration:'12:06'
    },
    {
      in_out:incoming,
      time:'15:50', 
      person_avatar:ava3,
      from_number:'+7 (987) 556-12-18', 
      contact_company:'',
      grade:'5',
      duration:'12:06'
    },
    {
      in_out:outgoing,
      time:'15:40', 
      person_avatar:ava3,
      from_number:'+7 (987) 555-12-82', 
      contact_company:'Yandex',
      grade:'',
      duration:'12:06'
    },
    {
      in_out:incoming,
      time:'15:40', 
      person_avatar:ava1,
      from_number:'+7 (987) 555-12-82', 
      contact_company:'',
      grade:'5',
      duration:'12:06'
    },
    {
      in_out:outgoing,
      time:'15:20', 
      person_avatar:ava1,
      from_number:'+7 (987) 556-12-18', 
      contact_company:'Google',
      grade:'',
      duration:'12:06'
    },
  ]);

  const [sort, setSort] = useState([
    {
      list: [
        { name: "Все типы", tag: "allType" },
        { name: "Входящие", tag: 1 },
        { name: "Исходящие", tag: 0 },
      ],
    },
    {
      list: [
        { name: "Все сотрудники", tag: "allPeople" },
        { name: "Александр К.", tag: "Александр К." },
        { name: "Ксение В.", tag: "Ксение В." },
      ],
    },
    {
      list: [
        { name: "Все звонки", tag: "calls" },
        { name: "Все клиенты", tag: "client" },
        { name: "Новые клиенты", tag: "newClient" },
        { name: "Все исполнители", tag: "performers" },
        { name: "Через приложение", tag: "application" },
        { name: "Прочие звонки", tag: "Other" },
      ],
    },
    {
      list: [
        { name: "Все источники", tag: "allSources" },
        { name: "Через сайт", tag: "web" },
      ],
    },
    {
      list: [
        { name: "Все оценки", tag: "allEstimates" },
        { name: "Распознать", tag: "recognize" },
        { name: "Скрипт не использован", tag: "notUsed" },
        { name: "Плохо", tag: "bad" },
        { name: "Хорошо", tag: "good" },
        { name: "Отлично", tag: "veryGood" },
        { name: "1", tag: "1" },
        { name: "2", tag: "2" },
        { name: "3", tag: "3" },
      ],
    },
    {
      list: [
        { name: "Все ошибки", tag: "allMistakes" },
        { name: "Приветствие", tag: "Greetings" },
        { name: "Имя", tag: "name" },
        { name: "Цена", tag: "price" },
        { name: "Скидка", tag: "sale" },
        { name: "Предзаказ", tag: "pre-order" },
        { name: "Благодарность", tag: "gratitude" },
        { name: "Стоп слова", tag: "stopWords" },
      ],
    },
  ]);

  const [value, setValue] = useState('');

  const filteredCalls = calls.filter(number => {
    return number.from_number.toLowerCase().includes(value.toLowerCase());
  });

  return (
    <div className={c.wrapper}>
      <Top/>
      <Navigations setValue={setValue} sort={sort} onClickSort={(i) => alert(i)}/>
      <div className={c.calls}>
        <div className={c.category}>
          <div className={c.el}>Тип</div>
          <div className={c.el}>Время</div>
          <div className={c.el}>Сотрудник</div>
          <div className={c.el}>Звонок</div>
          <div className={c.el}>Источник</div>
          <div className={c.el}>Оценка</div>
          <div className={c.duration}>Длительность</div>
        </div>
        <AllCalls calls={filteredCalls}/>
      </div>
    </div>
  )
}

export default Calls;
