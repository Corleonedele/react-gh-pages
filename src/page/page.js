import React from 'react'
import "./page.css"
import image1 from "../images/image1.jpg"
import image2 from "../images/image2.jpg" 


export default function Page() {
    const [ clssname, setClassName ] = React.useState("not_shown")

    let options = {
        root: document.querySelector('#scrollArea'),
        rootMargin: '0px',
        threshold: 1
    }

    let callback = (entries, observer) => {
        entries.forEach(entry => {
            console.log(entry);
            if (entry.isIntersecting === true){
                setClassName("shown")
            }else{
                setClassName("not_shown")
            }
        });
      };
    
    let observer = new IntersectionObserver(callback, options);


    React.useEffect(()=>{
        let target1 = document.querySelector('#listen1');
        observer.observe(target1);
        let target2 = document.querySelector('#listen2');
        observer.observe(target2);
        let target3 = document.querySelector('#listen3');
        observer.observe(target3);
    },[])






    
    return (
        <body>
            <nav>
                <ul>
                    <li> <a href="#section1">Who Am I</a> </li>
                    <li> <a href="#section2">About Me</a> </li>
                    <li> <a href="#section3">Contact Me</a> </li>
                </ul>
            </nav>

            <div className='practice1'> 
                <h1><span>I</span><span>M</span><span>POSSIBLE</span></h1>
            </div>


            <section id='section1'>
                <div id='listen1' className={`change ${clssname}`} >
                    <div className='content'>                    
                        <h1>GAO LIAN HAO</h1>
                        <p>I'm a year two student major in computer science and technology
                        currently study in The Chinese University of Hong Kong, Shenzhen
                        I'm happy to make friends with you
                        </p>
                    </div>
                    
                </div>
            </section>

            <section id='section2' >
                <div id='listen2' className={`change ${clssname}`}>
                    <p></p>
                    <h1>LOVE MY LIFE</h1>
                </div>
                <div className='imgContainer'>
                    <div className='card'>
                        <div className='imgBox'></div>
                        <div className='imgBoxDetails'>
                            <img src= {image1}></img>
                            <img src= {image2}></img>
                            <div className='boxContent'>
                                <h2>Here I Am <br/><span>Test 1</span></h2>
                                <div className='socialIcons'>
                                    <a href='#'></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


























            </section>

            

            <section id='section3'>
                <div id='listen3' className={`change ${clssname}`}>
                    <div className='content'>                    
                        <h1>CONTACT ME</h1>
                        <p>Phone: +86 11011910086</p>
                        <a href='11011910086@qq.com'>Email Me</a>
                    </div>

                </div>
            </section>

            <nav>
                <ul>
                        <li> <a href="#section1">HELLO</a> </li>
                        <li> <a href="#section2">VERSION</a> </li>
                        <li> <a href="#section3">MORE</a> </li>
                </ul>
            </nav>
        </body>

        
    )
}
