"use client"

import Image from 'next/image'
import styles from './page.module.css'

import styled from 'styled-components';

const Container = styled.div`
  background: white;
  color:black;
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
