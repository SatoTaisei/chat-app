import styles from './Card.module.scss';
type Props = {
  heading: string;
  href: string;
  desc: string;
};

export function Card({ heading, href, desc }: Props) {
  return (
    <a
      href={href}
      className={styles.card}
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2>{heading}</h2>
      <p>{desc}</p>
    </a>
  );
}
