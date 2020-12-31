import Image from 'next/image';

import Link from '@components/Link/Link';
import Container from '@components/Container/Container';
import { StyledNavbar, StyledBrand } from './Navbar.styled';

const Navbar = ({}) => (
  <StyledNavbar>
    <Container>
      <Link href='/'>
        <StyledBrand>
          <Image
            src='/icons/isotype.png'
            alt='Isotipo Platzi'
            width={25}
            height={25}
          />
          <Image
            src='/icons/logo.png'
            alt='Logo Platzi'
            width={52.5}
            height={25}
          />
        </StyledBrand>
      </Link>
    </Container>
  </StyledNavbar>
);

export default Navbar;
