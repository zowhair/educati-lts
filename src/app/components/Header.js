export default function Header() {
    return (
        <header>
        <div class="number pl-4 px-4 md:px-24 py-1 text-right border-b">
            <a href="#">
                <i class="fa-brands fa-whatsapp"></i>
                <span class="ml-1">+91 98714 56199</span>
            </a>
            <a href="#" class="ml-8">
                <i class="fa-solid fa-phone"></i>
                <span class="ml-1">+91 98714 56199</span>
            </a>
        </div>
        
        <nav class="flex flex-wrap justify-between items-center px-4 md:px-20 py-3 shadow-sm">          
            <img src="/_next/image?url=%2Fassets%2Flogo%2Flogo.png&w=3840&q=75" />
            
            <div id="hamburgerMenu">
                <span id="hamburger-one" class="open selector hidden" onclick="openNav()">&#9776; </span>
                <span id="hamburger-two" class="close selector hidden"  onclick="closeNav()"  >&times;</span>
    
            </div>

            <div id="mySidenav"  class="sidenav lg:flex lg:items-center lg:w-auto ">
                <ul id="slidenav" class="text-base nav-ul hiddenn column ">                    
                    <li class="nav-li" onclick="active()">
                        <a class="nav-link " href="#">Countries</a>
                    </li>
                    <li class="nav-li" onclick="active()">
                        <a class="nav-link " href="#">Colleges</a>
                    </li>
                    <li class="nav-li" onclick="active()">
                        <a class="nav-link " href="#">Courses</a>
                    </li>
                    <li class="nav-li" onclick="active()">
                        <a class="nav-link " href="#">Exams</a>
                    </li>
                    <li class="nav-li" onclick="active()">
                        <a class="nav-link " href="#">About Us</a>
                    </li>
                    <li class="nav-li" onclick="active()">
                        <a class="nav-link " href="#">Our Sercices</a>
                    </li>
                    <li class="nav-li" onclick="active()">
                        <a class="nav-link" href="#">Blog & News</a>
                    </li>
                    <li class="nav-li" onclick="active()">
                        <a class="nav-link " href="#">Our Location</a>
                    </li>
                    <li class="nav-li" >
                        <a class=" button md:p-4 py-2 font-bold block hover:text-purple-400 purple" href="#">Apply Online</a>
                    </li>
        
                </ul>
            </div>
        </nav>
    </header>
    )
}