import React from 'react';
import style from './login.module.scss';
import Bar from './Bar';
import Items from './Items';
import PocketBase from 'pocketbase';

function Market() {
  const pb = new PocketBase('http://127.0.0.1:8090/');

  // console.log(pb.authStore.model);

  return (
    <>
      <Bar />
      <Items />
    </>
  );
}

export default Market;
