import React from 'react';
import { connect } from 'react-redux';
import s from './Winner.module.css';
import { AppStateType } from '../../redux/redux-store';

type PropsType = {
  score: number
}

const Winner: React.FC<PropsType> = ({score}) => (
  <div className={s.winner}>
    <h2 className={s.headline}>Поздравляем!</h2>
    <p className={s.result}>Вы прошли викторину и набрали {score} из 30 возможных баллов</p>
  </div>
)

const mapStateToProps = (state: AppStateType) => ({
  score: state.songbirdBlock.score,
})

export default connect(mapStateToProps, {})(Winner);
