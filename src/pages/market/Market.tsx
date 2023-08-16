import React, { useEffect } from 'react';
import style from './login.module.scss';
import Bar from './Bar';
import Items from './Items';
import PocketBase from 'pocketbase';
import { useAppSelector } from '../../shared/hooks/redux';

function Market() {
  const pb = new PocketBase('http://127.0.0.1:8090/');

  return (
    <>
      <Bar />
      <Items />
    </>
  );
}

export default Market;
