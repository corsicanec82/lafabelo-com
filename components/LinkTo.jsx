/* eslint-disable jsx-a11y/anchor-is-valid */

import Link from 'next/link';

const LinkTo = ({ children, className, ...props }) => (
  <Link {...props}>
    <a className={className}>{children}</a>
  </Link>
);

export default LinkTo;
