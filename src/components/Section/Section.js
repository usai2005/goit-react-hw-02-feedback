import PropTypes from 'prop-types';
import css from './Section.module.css';

export const Section = ({ title, FeedbackOptions, Statistics }) => {
  return (
    <>
      <section className={css.section}>
        <h1 className={css.section__title}>{title}</h1>

        {FeedbackOptions}
        {Statistics}
      </section>
    </>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  FeedbackOptions: PropTypes.element.isRequired,
  Statistics: PropTypes.element.isRequired,
};
