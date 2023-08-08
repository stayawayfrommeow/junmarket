import React from 'react';
import JunCard from '../../shared/junCard/JunCard';
import style from './market.module.scss';

function Items() {
  return (
    <div className={style.items}>
      <JunCard />
      <JunCard />
      <JunCard />
      <JunCard />
    </div>
  );
}

export default Items;
