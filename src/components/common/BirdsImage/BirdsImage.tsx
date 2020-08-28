import React from 'react';
import s from './BirdsImage.module.css';

type PropsType = {
  photo: string
}

const BirdsImage: React.FC<PropsType> = ({photo}) => {
  return (
    <div className={s.image}>
      <img src={photo} className={s.imageImg} alt='bird'/>
    </div>
  );
};

export default BirdsImage;