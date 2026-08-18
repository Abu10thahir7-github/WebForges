import styles from './style.module.scss';

export default function index() {
  return (
    <div className={styles.footer}>
        <a href="https://www.facebook.com/webforges/" target="_blank">Facebook</a>
        <a href="https://www.instagram.com/web_forges/" target="_blank">Instagram</a>
        <a href="https://www.dribbble.com/webforges" target="_blank">Dribble</a>
        <a href="https://www.linkedin.com/company/webforges/" target="_blank">LinkedIn</a>
    </div>
  )
}