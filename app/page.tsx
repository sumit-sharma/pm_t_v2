"use client"

import Image from 'next/image'
import styles from './page.module.css'
import { Col, Container, InputGroup, Row } from 'react-bootstrap'
export default function Home() {
  return (
    <Container>
      <Row>
        <Col md={4}>
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
          <Row>
            <Col md={12}>
              <p className={styles.help_text}>Sign in with your account</p>
            </Col>
          </Row>
          <form className="form" >
            <Row>
              <Col md={6}>
                <div className="mb-3">
                  <input type="text" name='username' placeholder='Username' className='form-control' />
                </div>

                <div className="mb-3">
                  <input type="password" name='password' placeholder='password' className='form-control' />
                </div>

                <div className="mb-3">
                  <Row>
                    <Col lg={10}>
                      <input type="text" className="form-control" id="captcha" placeholder="Enter captcha" name="captcha" />
                    </Col>
                    <Col lg={2}>
                      <Image src='https://placehold.co/60x30/png?text=capctha' alt="Captcha" width={60} height={30} />
                    </Col>
                  </Row>
                </div>

                <div className="mb-3">
                  <button className='btn btn-primary' type='submit'>Sign In</button>
                </div>

              </Col>
            </Row>
          </form>

        </Col>
      </Row>
    </Container>
  );
}
