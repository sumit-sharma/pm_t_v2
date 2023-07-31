"use client"

import Image from 'next/image'
import styles from './page.module.css'
import { Col, Container, Row } from 'react-bootstrap'
export default function Home() {
  return (
    <Container>     
      <Row>
        <Col sm={4}> 
          <Image src="/img/loginPage.jpg" alt='login' width={0} height={0} sizes="100vw"
  style={{ width: '100%', height: '100%' }} />
        </Col>
        <Col>
          <Row className='newd'>

          <Image src="/img/clientLogo.jpg" alt='login' width={0} height={0} sizes="100vw"
  style={{ width: '315px', 'height': '160px' }} />
          </Row>
          <Row>
            <h1 className={styles.log_header}>PROJECT MANAGEMENT Tool</h1>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
