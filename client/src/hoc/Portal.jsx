import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { useMemo } from 'react';

Portal.defaultProps = {
  selector: '#modal',
};

Portal.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, null]).isRequired,
  selector: PropTypes.string,
};

export default function Portal({ children, selector }) {
  const container = useMemo(() => document.querySelector(selector), [selector]);
  if (!container || !children) return null;
  return createPortal(children, container);
}
