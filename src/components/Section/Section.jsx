import s from './Section.module.css';

function Section({ className, title, children }) {
  return (
    <section className={s[className]}>
      {title && <h2 className={s.title}>{title}</h2>}
      {children}
    </section>
  );
}

export default Section;
