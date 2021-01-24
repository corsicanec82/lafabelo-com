/* eslint-disable jsx-a11y/anchor-is-valid */

import Link from 'next/link';

const LinkTo = ({ children, ...props }) => (
  <Link {...props}>
    <a>{children}</a>
  </Link>
);

export default LinkTo;
