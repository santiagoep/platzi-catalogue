import Link from 'next/link';
import PropTypes from 'prop-types';

import { isAValidExternalUrl } from '@utils/strings';

const InternalLink = ({
  children,
  href,
  target,
  className,
  'data-testid': dataTestId,
  ...rest
}) => {
  const isAnExternalUrl = isAValidExternalUrl(href);
  const aProps = isAnExternalUrl
    ? { target, rel: 'noopener noreferrer external nofollow' }
    : {};
  return (
    <Link {...rest} href={href} passHref={isAnExternalUrl}>
      <a className={className} data-testid={dataTestId} {...aProps}>
        {children}
      </a>
    </Link>
  );
};

InternalLink.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  href: PropTypes.string.isRequired,
  target: PropTypes.string,
  className: PropTypes.string,
  'data-testid': PropTypes.string
};

InternalLink.defaultProps = {
  target: '_blank',
  className: '',
  'data-testid': ''
};

export default InternalLink;
