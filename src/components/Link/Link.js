import Link from 'next/link';
import PropTypes from 'prop-types';

import { isAValidExternalUrl } from '@utils/strings';

const InternalLink = ({
  buttonStyles,
  children,
  href,
  target,
  typographyStyles,
  ...rest
}) => {
  const isAnExternalUrl = isAValidExternalUrl(href);
  const aProps = isAnExternalUrl
    ? { target, rel: 'noopener noreferrer external nofollow' }
    : {};
  return (
    <Link {...rest} href={href} passHref={isAnExternalUrl}>
      <a {...aProps}>{children}</a>
    </Link>
  );
};

InternalLink.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  href: PropTypes.string.isRequired,
  target: PropTypes.string
};

InternalLink.defaultProps = {
  target: '_blank'
};

export default InternalLink;
