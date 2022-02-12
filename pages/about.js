import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {
    MDBNavbar,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBContainer,
    MDBIcon
} from 'mdb-react-ui-kit';
import Link from "next/link"

export default function Home() {
    return (

        <div className={styles.container}>

            <header>
                <MDBNavbar expand='lg' light bgColor='white'>
                    <MDBContainer fluid>
                        <MDBNavbarToggler
                            aria-controls='navbarExample01'
                            aria-expanded='false'
                            aria-label='Toggle navigation'
                        >
                            <MDBIcon fas icon='bars' />
                        </MDBNavbarToggler>
                        <div className='collapse navbar-collapse' id='navbarExample01'>
                            <MDBNavbarNav right className='mb-2 mb-lg-0'>
                                <MDBNavbarItem active>
                                    <MDBNavbarLink aria-current='page' href='/'>
                                        Home
                                    </MDBNavbarLink>
                                </MDBNavbarItem>
                                <MDBNavbarItem>
                                    <MDBNavbarLink href='/press'>Press</MDBNavbarLink>
                                </MDBNavbarItem>
                                <MDBNavbarItem>
                                    <MDBNavbarLink href='/contact'>Contact us</MDBNavbarLink>
                                </MDBNavbarItem>
                                <MDBNavbarItem>
                                    <MDBNavbarLink href='/products'>Products</MDBNavbarLink>
                                </MDBNavbarItem>
                                <MDBNavbarItem>
                                    <MDBNavbarLink href='/donate'>Donate</MDBNavbarLink>
                                </MDBNavbarItem>
                            </MDBNavbarNav>
                        </div>
                    </MDBContainer>
                </MDBNavbar>
            </header>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"
                      integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4"
                      crossOrigin="anonymous"/>
            </Head>

            <main className={styles.main}>
                
                    
                <h2 className={styles.semititle}>
                    Hi!
                </h2>

                <p className={styles.description}>
                    BinaryHeart is a student organization whose objective 
                    is to <code className={styles.code}>spread Digital 
                    Access</code>. We collect donations of broken or 
                    used electronic devices and repair them. Through 
                    Northwestern Settlement and other partner charities, 
                    the devices are donated to help our less privileged 
                    peers. Our hope is that our work will lift people out 
                    of poverty, make higher education a reality for more 
                    students, and change lives.
                </p>       
                
                <div
                    className ={styles.static_card}
                    style={{
                        border: "1px solid #f57192",
                        "background-color": "rgb(255, 240, 243)"
                    }}
                >
                    <h1 style={{
                        "text-align": "center"
                    }}>
                        We&apos;ve done some cool stuff
                    </h1>
                    <p className={styles.description}>
                        We have... donated to some cool places, including Kenya. Check out these pictures!
                        For our contributions, we won some cool awards too.
                    </p>
                    <div className={styles.grid}>

                        <div className={styles.scalingimage}>
                        <Image alt="Cool pic" layout={"responsive"} height={"100%"} width={"100%"} src="/656348main_ToV_transit_diag_full.jpg" />
                        </div>
                        <p className={styles.description}>
                            asdf
                        </p>

                        <p className={styles.description}>
                            asdf
                        </p>

                        <p className={styles.description}>
                            asdf
                        </p>
                    </div>
                </div>
               
                <div className ={styles.static_card}>
                    <h1>
                        <center>Student leaders</center>
                    </h1>

                    <p className={styles.description}>
                        We lead our team, securing donations and reaching out to those in need. We own seventeen cats, 4 of whom are named Cindy.
                    </p>
                </div>
                <Link href="/">
                <a className={styles.card}>
                     <h2>Back to the launch page &rarr;</h2>
                 </a>
                </Link>
            </main>


            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
                </a>
            </footer>
        </div>
    )
}
