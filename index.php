<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Hi, I'am junior web developer and this is my portfolio."></meta>
    <meta property='og:title' content='Lukas Krbec'/>
    <meta property='og:image' content='img/lukaskrbec.jpg'/>
    <meta property='og:description' content="Hi, I'am junior web developer and this is my portfolio.">
    <meta property='og:url' content='//www.lukaskrbec.com'/>
    <title>Lukas Krbec</title>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">    
    <link rel="stylesheet" href="styles/style.css">
    <link rel="stylesheet" href="styles/all.css">

</head>
<body>
    <div class="portfolio">
        <header>
            <div class="translate">
                <span class="cz-switch">cz</span>
                <span class="en-switch">en</span>
            </div>
            <nav>
                <ul class="menu">
                    <li><a class="menu-about active" active><span class="ab">ab</span><span class="out">out</span></a></li>
                    <li><a class="menu-skills"><span class="s">s</span><span class="kills">kills</span></a></li>
                    <li><a class="menu-projects"><span class="pro">pro</span><span class="ject">jects</span></a></li>
                    <li><a class="menu-contact"><span class="cont">cont</span><span class="act">act</span></a></li>
                </ul>
                <div class="menu-lines">
                    <span>|||</span>
                </div>
            </nav>
            
        </header>
        <main class="about " id="about">
            <div class="about-content">
                <div class="about-text">
                    <h1>Lukas Krbec</h1>
                    <h2 id="cz">Java | C# | Web junior vývojář</h2>
                    <h2 id="en">Java | C# | Web junior developer</h2>
                    <p id="cz">Jsem pozitivně uvažující a otevřený člověk se schopností aktivně řešit problémy. V posledních pěti letech jsem žil a pracoval na třech různých kontinentech. Jako vystudovaný elektrotechnik jsem již zvládnul několik pracovních a osobních výzev, mezi které počítám: převzetí odpovědnosti za sedmičlenný tým, uplatnění profesních a životních zkušeností v zahraničí, nebo uskutečnění dálkových pěších cest.</p>
                    <p id="en">I am an open-minded person with the ability to actively solve problems. Currently studying a retraining course for object-oriented programming and web development at VSB Ostrava. For the last five years I have lived and worked on three different continents. As a graduate of electrical engineering, I have already handled several work and personal challenges, including taking over responsibility for a seven-member team, applying professional and life experience abroad or finished several Thru-Hikes.</p>
                </div>
                <div class="about-btn">
                    <a id="cz" href="doc/LukasKrbec_CV_CZ.pdf" class="resume" target="_blank">resume</a>
                    <a id="en" href="doc/LukasKrbec_CV_EN.pdf" class="resume" target="_blank">resume</a>
                </div>
            </div>
            <div class="about-photo">
                <img class="profil-img" src="img/lukaskrbec.jpg" alt="profile photo">
            </div>
        </main>
        <main class="skills passive" id="skills">
            <div class="skill" id="frontend">
                <h1><span>f</span>rontend</h1>
                <h2>JavaScript<br>
                    jQuery<br>
                    React<br>
                    HTML5 & CSS3<br>
                    Bootstrap<br>
                    <br>
                </h2>
            </div>
            <div class="skill" id="backend">
                <h1><span>b</span>ackend</h1>
                <h2>PHP<br>
                    Nette<br>
                    C#<br>
                    Java<br>
                    Xamarin<br>
                    <br>
                </h2>
            </div>
            <div class="skill" id="others">
                <h1 id="cz"><span>o</span>statní</h1>
                <h1 id="en"><span>o</span>thers</h1>
                <h2>Git<br>
                    Access<br>
                    MySQL<br>
                    Oracle database<br>
                    Selenium<br>
                    SpecFlow
                </h2>
            </div>
            <div class="skills-menu">
                <div class="btn-frontend" id="frontend">frontend</div>
                <div class="btn-backend" id="backend">backend</div>
                <div class="btn-others" id="others"><span id="cz">ostatní</span><span id="en">others</span></div>

            </div>

        </main>
        <main class="projects passive" id="projects">
            <div class="left-arrow-conteiner">
                <div class="left-arrow"></div>
            </div>
            <div class="project">
                <div class="project-name">
                    <h1 id="en"><span>T</span>oDoList</h1>
                    <h1 id="cz"><span>Ú</span>koly</h1><h1><i class="fas fa-chevron-right"></i></h1>
                </div>
                <div class="project-text">
                    <p id="en">A simple todo list, on which I tried basic work with the DOM in JavaScript and saving individual tasks to Local storage. The application keeps data even after the page is refreshed.</p>
                    <p id="cz">Jednoduchý seznam úkolů, na kterém jsem si vyzkoušel základní práci s DOM v JavaScriptu a uložení jednotlivých úkolů do Local storage. Aplikace si uchová data i po aktualizaci stránky.</p>
                </div>
                <div class="project-img">
                    <a href="https://www.lukaskrbec.com/projects/todolist/ToDo/todo.html" target="_blank">
                        <i class="fas fa-external-link-alt"></i>
                        <img src="img/Screen Shot 2021-04-04 at 9.20.11 AM.png" alt="">
                    </a>
                </div>
                <div class="project-git">
                    <a href="https://github.com/LukasKrbec" target="_blank"><i class="fab fa-github"></i></a>
                </div>
                <div class="project-languages">
                    <span>#HTML #CSS #JS</span>
                </div>
            </div>
            <div class="project">
                <div class="project-name">
                    <h1 id="en"><span>T</span>he Hotel</h1>
                    <h1 id="cz"><span>T</span>he Hotel</h1><h1><i class="fas fa-chevron-right"></i></h1>
                </div>
                <div class="project-text">
                    <p id="en">The hotel project was an exam during my retraining course. The exam was focused on Bootstrap framework and we had 8h limit to finished it. Used Koala SASS compiler. Bootstrap 4.6. After the exam, I added a booking form in JS to the project.</p>
                    <p id="cz">Úvodní webová prezentace imaginárního hotelu. Jednalo se o projekt vytvořený v Bootstrapu 4.6 během 8 hodinové zkoušky v rekvalifikačním kurzu OOP a web developmentu. Pro práci se SASS soubory byl použit Koala kompilátor. Po zkoušce jsem projekt doplnil o rezervační formulář v JS.</p>                
                </div>
                <div class="project-img">
                    <a href="https://www.lukaskrbec.com/projects/hotel/index.html" target="_blank">
                        <i class="fas fa-external-link-alt"></i>
                        <img src="img/theHotel.png" alt="">
                    </a>
                </div>
                <div class="project-git">
                    <a href="https://github.com/LukasKrbec/Hotel" target="_blank"><i class="fab fa-github"></i></a>
                </div>
                <div class="project-languages">
                    <span>#JS #Bootstrap 4.6</span>
                </div>
            </div>
            <div class="project">
                <div class="project-name">
                    <h1 id="en"><span>B</span>agruj Morava</h1>
                    <h1 id="cz"><span>B</span>agruj Morava</h1><h1><i class="fas fa-chevron-right"></i></h1>
                </div>
                <div class="project-text">
                    <p id="en">Web presentation inspired by my cousin's company. This is a project created only in HTML5, CSS3 with little bit of JS for the price list section. On the project, I learned to create a responsive website.</p>
                    <p id="cz">Webová prezentace inspirovaná firmou mého bratrance. Jedná se o projekt vytvořený pouze v HTML5, CSS3 s trochou JS pro sekci Ceník. Na projektu jsem si vyzkoušel vytvoření responzivního webu.</p>     
                </div>
                <div class="project-img">
                    <a href="https://www.lukaskrbec.com/projects/bagrujMorava/index.html" target="_blank">
                        <i class="fas fa-external-link-alt"></i>
                        <img src="img/bagrujMorava.png" alt="">
                    </a>
                </div>
                <div class="project-git">
                    <a href="https://github.com/LukasKrbec/bagrujMorava" target="_blank"><i class="fab fa-github"></i></a>
                </div>
                <div class="project-languages">
                    <span>#HTML #CSS #JS</span>
                </div>
            </div>
            <div class="project">
                <div class="project-name">
                    <h1 id="en"><span>p</span>roject4</h1>
                    <h1 id="cz"><span>p</span>rojekt4</h1><h1><i class="fas fa-chevron-right"></i></h1>
                </div>
                <div class="project-text">
                    <p>Facilis repudiandae rem porro enim adipisci. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, recusandae blanditiis nostrum repellat nemo debitis ut praesentium consectetur aliquam pariatur dicta atque quaerat. Expedita corrupti minima, tenetur distinctio vitae amet?</p>
                </div>
                <div class="project-img">
                    <a  target="_blank">
                        <i class="fas fa-external-link-alt"></i>
                        <img src="img/inProgress.png" alt="">
                    </a>
                </div>
                <div class="project-git">
                    <a href="https://github.com/LukasKrbec" target="_blank"><i class="fab fa-github"></i></a>
                </div>
                <div class="project-languages">
                    <span>#HTML #CSS #JS</span>
                </div>
            </div>
            <div class="project-counter-conteiner">
                <span class="project-counter"><b>0<span id="project-number">1</span></b>/0<span id="projects-number">5</span></span>
            </div>
            <div class="right-arrow-conteiner">
                <div class="right-arrow"></div>
            </div>

        </main>
        <main class="contact passive" id="contact">
            <div class="contact-links-conteiner">
                <ul class="contact-links">
                    <li><a href="https://www.linkedin.com/in/lukaskrbec/" target="_blank"><i class="fab fa-linkedin"></i></a></li>
                    <li><a href="https://github.com/LukasKrbec" target="_blank"><i class="fab fa-github"></i></a></li>
                    <li><a href="https://lukaskrbec.cz/" target="_blank"><i class="fas fa-hiking"></i></a></li>
                </ul>
            </div>
            <form class="contact-form" action="scripts/mailForm.php" method="POST">
                <span class="form-msg-send" id="cz"><?php echo($_SESSION["vypis"])?></span>
                <span class="form-msg-send" id="en"><?php echo($_SESSION["vypis"])?></span>
                <input type="hidden" name="contact-language" id="contact-language">
                <input  class="form-email" type="text" name="contact-email">
                <textarea class="form-text" name="contact-content" cols="30" rows="10"></textarea>
                <div class="spam-check"> 
                    <input type="checkbox" name="spam-checked" value="checked">  
                    <label id="cz" for="spam-checked">nejsem <i class="fas fa-robot"></i></label>
                    <label id="en" for="spam-checked">not <i class="fas fa-robot"></i></label>
                </div>
                <input class="form-btn" type="submit">
            </form>
            <span class="contact-email"><a href="mailto:lukaskrbec@lukaskrbec.com">lukaskrbec@lukaskrbec.com</a></span>

        </main>
        <aside>
            <div class="aside-conteiner">
                <span class="aside-email"><a href="mailto:lukaskrbec@lukaskrbec.com">lukaskrbec@lukaskrbec.com</a></span>
                <div class="aside-line"></div>
            </div>
        </aside>
    </div>
    
</body>
<script src="scripts/script.js">
</script>
</html>
<?php
if(isset($_SESSION["odeslano"])){
    if(!$_SESSION["odeslano"]){
        echo('<script type="text/JavaScript">
            let errors = document.querySelectorAll(".form-msg-send")
            for(let error of errors){
                error.style.backgroundColor = "#ff0404";}
       </script>');
    }

    echo('<script type="text/JavaScript" src="scripts/setContact.js"></script>');
    if($_SESSION["contact-language"] === "en"){
        echo('<script type="text/JavaScript">document.querySelector(".en-switch").click();</script>');
    }
    session_destroy();
}
?>