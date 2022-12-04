import { styled } from '@stitches/react';

export default function Header() {
  return <HeaderBlock>This is Sample Header!</HeaderBlock>;
}

const HeaderBlock = styled('header', {
  height: '80px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 20px',
});
