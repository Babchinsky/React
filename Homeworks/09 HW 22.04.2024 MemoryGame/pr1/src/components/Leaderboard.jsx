import React from 'react';
import styles from './Leaderboard.module.css'; // Импорт модульных стилей
import LeaderService from '../services/leaderService';

const Leaderboard = () => {
  const { leaders, isLoadingOrError, error } = LeaderService(); // Получаем данные из сервиса

  if (isLoadingOrError) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={styles.container}> {/* Применяем стиль для контейнера */}
      <h1 className={styles.heading}>Leaderboard</h1> {/* Стили для заголовка */}
      {leaders.length === 0 ? (
        <div className={styles.noLeaders}>No leaders found.</div> 
      ) : (
        <ol className={styles.leaderList}> {/* Применяем стиль для нумерованного списка */}
          {leaders.map((leader, index) => (
            <li key={index} className={styles.leaderItem}>
              <strong>{leader.username}</strong>: {leader.time_minutes} minutes, {leader.time_seconds} seconds, {leader.cards_collected} cards collected
            </li>
          ))}
        </ol>
      )}
    </div>
  );
};

export default Leaderboard;
