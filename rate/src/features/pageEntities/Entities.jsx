import React from 'react';
import cl from './style/entities.module.css';
import HeadEntities from './headEntities/HeadEntities';
import Input from '../../components/ui/input/Input';
import search from '../../assets/search.svg';
import TableEntities from './tableEntities/TableEntities';

const Entities = () => {
  return (
    <div className={cl.container}>
      <HeadEntities />
      <hr />
      <div className={cl.content}>
        <div className={cl.container_serch}>
          <div className={cl.content_search}>
            <div>
              <img src={search} alt="search" />
            </div>
            <Input type="text" placeholder="Поиск по названию" />
          </div>
        </div>
        <TableEntities />
      </div>
    </div>
  );
};

export default Entities;
