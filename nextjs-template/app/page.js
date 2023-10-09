"use client"

import Image from 'next/image'
import styles from './page.module.css'

import styled, { css } from 'styled-components';

const Container = styled.div`
  ${({theme}) => css`
    background: ${theme.colors.white};
    color: ${theme.colors.primary};
  `}
`

export default function Home() {
  return (
    <main className={styles.main}>
      <Container>
        asd
      </Container>
    </main>
  )
}
