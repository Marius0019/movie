import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Movie.module.css';

function Movie(props) {
  const stars = [];
console.log(props);
  for (let i = 0; i <10 ; i++) {
    let style = {}
    if (i < props.voteAverage -1){
        style = { color: '#f1c40f'}
    }
    stars.push(<FontAwesomeIcon key={i} icon={faStar} style={style} />);
  }

  return (
    <div className={styles.card}>
      <img className={styles.image} src={props.poster} alt="Poster" />
      <div className={styles.textContainer}>
      {/* <div class="content"> */}
        <span className={styles.name}>{props.title}</span>
      {/* <div className={styles.moviesContainer}>{props.movies}</div> */}
        <p className={styles.voteAverage}>Note : {props.voteAverage}/10</p>
        <p className={styles.overview}>Description : <br /> {props.overview}</p>
        <p className={styles.voteCount}>Nombre d'Avis : {props.voteCount}</p>
        <span className={styles.voteCount}>{stars}</span>
        </div>
      </div>
    // </div>
  );
}

export default Movie;