import Link from 'next/link';
import { Tab } from '@mui/material';

export default function NavLink({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <Link href={href} passHref>
      <Tab label={label} component={'a'} />
    </Link>
  );
}
