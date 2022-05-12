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
import Link from "next/link";

export default function Home() {
    return (

        <div className={styles.container} id="animated">

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
                        <div className='collapse navbar-collapse headerdiv' id='navbarExample01'>
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
                                    <MDBNavbarLink href='/contact'>Contact</MDBNavbarLink>
                                </MDBNavbarItem>
                                <MDBNavbarItem>
                                    <MDBNavbarLink href='/faqs'>FAQ</MDBNavbarLink>
                                </MDBNavbarItem>
                                <MDBNavbarItem>
                                    <MDBNavbarLink href='/about'>About</MDBNavbarLink>
                                </MDBNavbarItem>
                            </MDBNavbarNav>
                        </div>
                    </MDBContainer>
                </MDBNavbar>
            </header>
            <Head>
                <title>BinaryHeart</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"
                      integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4"
                      crossOrigin="anonymous"/>
                <meta name="Description"
                      content="Author: Malachi Noel, Maryanne Xu, Atharva Metkar, Megan Lu, Isaac Noel"/>
            </Head>

            <main className={styles.main}>


                <h1 className={styles.pressBig}>
                    <b>BinaryHeart in the News!</b>
                </h1>

                <p className={styles.pressSub}>
                    <br/>

                    Follow along our journey to<code className={styles.code}>spread digital
                    access</code>.

                    Check out our latest news updates here!
                </p>

                <div
                    className ={styles.static_card}
                    style={{
                        border: "1px solid #f57192",
                        "background-color": "rgb(255, 240, 243)"
                    }}
                >
                    <h3>
                        <b><center>Press Inquiries</center></b>
                    </h3>
                    <p className={styles.description}>
                        If you&lsquo;re a member of the press, please email us at <a href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@binaryheart.org">contact@binaryheart.org</a>.
                    </p>

                </div>
                <p className={styles.static_card}
                   style={{
                       border: "1px solid #C8F0C8",
                       "background-color": "rgb(200, 240, 200)"
                   }}
                >
                    <td width="40%">
                        <img className={styles.scalingimage} src="/service award.png" alt="service award" />
                    </td>
                    <p><b> <a className={styles.maryanne} href="https://hu-hu.facebook.com/newtrieref/videos/binaryheart-outstanding-youth-volunteer-awards-video/274212744104600/">
                        Watch the video here!</a></b></p>
                <td>
                    <h2><p><b> <a className={styles.maryanne} href="https://newtriernews.org/news/2021/05/19/new-trier-club-receives-service-award/">
                        BinaryHeart Receives Outstanding Youth Service Award! ⮕</a></b></p></h2>
                    <p> The Volunteer Center, a North Shore non-profit volunteering organization,
                        awards BinaryHeart for our e-learning donations.</p>
                </td>
                </p>

                <div className ={styles.static_card}>
                    <p className={styles.description}>
                        <table>
                            <tr>
                                <td width="40%">
                                    <img className={styles.scalingimage} src="/day of service.jpg" alt="day of service" />
                                </td>
                                <td>

                                    <div className={styles.pressChart}>
                                        <p className={styles.pressDate}> MAY 19, 2021</p>
                                        <h2><p><b> <a className={styles.maryanne} href="https://newtriernews.org/features/2021/05/19/day-of-service-allows-alumni-to-work-on-passion-projects/">
                                            Collecting devices for Day of Service ⮕</a></b></p></h2>

                                        <p> After we moved to a bigger room, volunteers worked to clean, organize,
                                            and log devices.</p>

                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td width="40%">
                                    <img className={styles.scalingimage} src="/covid workstation.jpg" alt="covid workstation" />         

                                </td>
                                <td>

                                    <div className={styles.pressChart}>
                                        <p className={styles.pressDate}> OCTOBER 20, 2020</p>
                                        <h2><p><b> <a className={styles.maryanne} href="https://newtriernews.org/news/2020/10/23/clubs-get-creative-to-make-service-possible/">
                                            Adapting to COVID-19 ⮕</a></b></p></h2>

                                        <p> We implement safety measures, such as socially distant work stations and
                                            disinfectant materials, to ensure safe volunteering during COVID.</p>

                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td width="40%">
                                    <img className={styles.scalingimage} src="/isabella allada.jpg" alt="isabella allada" />
                                </td>
                                <td>

                                    <div className={styles.pressChart}>
                                        <p className={styles.pressDate}> MARCH 13, 2020</p>
                                        <h2><p><b> <a className={styles.maryanne} href="https://newtriernews.org/features/2020/03/13/kathrine-johnsons-legacy-inspiring-young-women-to-pursue-stem-careers/">
                                            Women in BinaryHeart ⮕</a></b></p></h2>

                                        <p> In an interview with BH members Maryanne Xu and Isabella Allada, the New Trier
                                            News discusses Katherine Johnson&lsquo;s legacy for women pursuing STEM.</p>

                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td width="40%">

                                    <img className={styles.scalingimage} src="/abc news.jpg" alt="abc camera crew" />
                                </td>
                                <td>


                                    <div className={styles.pressChart}>
                                        <p className={styles.pressDate}> OCTOBER 23, 2018</p>
                                        <h2><p><b> <a className={styles.maryanne} href="https://abc7chicago.com/new-trier-high-school-after-clubs-student-computer-refurbishment/4512319/">
                                            We debut on Abc7 News! ⮕</a></b></p></h2>

                                        <p> Read more for the founders&lsquo; original goals and future hopes for the club. </p>

                                    </div>


                                </td>
                            </tr>
                            <tr>
                                <td width="40%">
                                    <img className={styles.scalingimage} src="/origin.jpg" alt="first devices" />
                                </td>
                                <td>


                                    <div className={styles.pressChart}>
                                        <p className={styles.pressDate}> AUGUST 24, 2018</p>
                                        <h2><p><b> <a className={styles.maryanne} href="https://www.chicagotribune.com/suburbs/winnetka/ct-wtk-binary-heart-tl-0830-story.html">
                                            Our origin story ⮕</a></b></p></h2>

                                        <p> The Chicago Tribune interviews BinaryHeart&lsquo;s first members on how the club was founded. </p>

                                    </div>

                                </td>
                            </tr>
                        </table>
                    </p>
                </div>

                <Link href="/">
                    <a className={styles.card}>
                        <h2>Back to the launch page &rarr;</h2>
                    </a>
                </Link>
            </main>
            <footer className={styles.footer}>
                <div className={styles.footertext}>
                    <h2><font color = "#ff0040">Binary</font><font color = "#0000FF">Heart</font></h2>
                    <p><a href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@binaryheart.org" target="_blank" rel="noreferrer noopener">contact@binaryheart.org</a></p>
                    <p><a href="tel:+1-847-784-2363">847.784.2363</a></p>
                </div>
                <div className={styles.footericons}>
                    <Link href="https://www.instagram.com/binaryheartnt/" target="_blank" rel="noreferrer noopener"><img title="Instagram" className={styles.scalingimageicon} src="/instagram.png" /></Link>
                    <img className={styles.scalingimageicon} src={"/blank space.png"} />
                    <Link href="https://www.linkedin.com/company/binaryheart/" target="_blank" rel="noreferrer noopener"><img title="LinkedIn" className={styles.scalingimageicon} src="/linkedin icon.png" /></Link>
                    <img className={styles.scalingimageicon} src={"/blank space.png"} />
                    <Link href="https://github.com/IsaacNoel/binaryheart" target="_blank" rel="noreferrer noopener"><img title="GitHub" className={styles.scalingimageicon} src="/github.png" /></Link>
                    <img className={styles.scalingimageicon} src={"/blank space.png"} />
                    <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@binaryheart.org" target="_blank" rel="noreferrer noopener"><img title="Email" className={styles.scalingimageicon} src="/email (1).png" /></Link>
                    <img className={styles.scalingimageicon} src={"/blank space.png"} />
                    <Link href="tel:+1-847-784-2363"><img title="Phone" className={styles.scalingimageicon} src="/phone.png" /></Link>
                </div>
            </footer>



        </div>
    )
}