//137,6000366210938 tambah ini bro

window.onload = function () {
  const navbar = document.getElementById('Navbar');
  const elemenTop = document.documentElement.scrollTop;

  if (elemenTop > 0) {
    navbar.classList.add('bg-gray-900/80');
    navbar.classList.add('shadow');
  } else {
    navbar.classList.remove('bg-gray-900/80');
    navbar.classList.remove('shadow');
  }
  navActive();
  handleScroll();
};

window.onscroll = function () {
  navActive();
  handleScroll();
};

function navActive() {
  const Navbar = document.getElementById('Navbar');
  const btnHome = document.getElementById('btn-home');
  const btnAbout = document.getElementById('btn-about');
  const btnProject = document.getElementById('btn-projects');
  const btnContact = document.getElementById('btn-contact');
  const arrowMenu = document.getElementById('arrowMenu');

  const elementop = document.documentElement.scrollTop;
  const homeTop = document.getElementById('home').offsetTop;
  const aboutTop = document.getElementById('about').offsetTop;
  const projectsTop = document.getElementById('projects').offsetTop;
  const contactTop = document.getElementById('contact').offsetTop;

  const btnHomeTop = btnHome.offsetTop;
  const btnAboutTop = btnAbout.offsetTop;
  const btnProjectTop = btnProject.offsetTop;
  const btnContactTop = btnContact.offsetTop;

  const btnHomeCenter = btnHomeTop + 6;
  const btnAboutCenter = btnAboutTop + 6;
  const btnProjectCenter = btnProjectTop + 6;
  const btnContactCenter = btnContactTop + 6;

  if (elementop > homeTop) {
    Navbar.classList.remove('bg-gradient-to-b');
    Navbar.classList.remove('from-gray-900/80');
    Navbar.classList.remove('to-transparent');
    Navbar.classList.remove('h-0');

    Navbar.classList.add('h-[64px]');
    Navbar.classList.add('bg-gray-900/80');
    Navbar.classList.add('backdrop-blur-sm');
    Navbar.classList.add('shadow');
  } else {
    Navbar.classList.remove('h-[64px]');
    Navbar.classList.remove('bg-gray-900/80');
    Navbar.classList.remove('backdrop-blur-sm');
    Navbar.classList.remove('shadow');
    Navbar.classList.add('h-0');
    Navbar.classList.add('bg-gradient-to-b');
    Navbar.classList.add('from-gray-900/80');
    Navbar.classList.add('to-transparent');
  }

  //home
  if (elementop <= aboutTop - 200) {
    if (!btnHome.classList.contains('text-white')) {
      btnHome.classList.remove('text-white/60');
      btnHome.classList.add('text-white');
    }
    arrowMenu.style.top = `${btnHomeCenter}px`;
  } else {
    btnHome.classList.remove('text-white');
    btnHome.classList.add('text-white/60');
  }

  //about
  if (elementop <= projectsTop - 250 && !btnHome.classList.contains('text-white')) {
    btnAbout.classList.remove('text-white/60');
    btnAbout.classList.add('text-white');
    if (arrowMenu.getAttribute('style') != `top-${btnAboutCenter}px`) {
      arrowMenu.style.top = `${btnAboutCenter}px`;
    }
  } else {
    btnAbout.classList.remove('text-white');
    btnAbout.classList.add('text-white/60');
  }

  //project
  if (elementop <= contactTop - 400 && !btnAbout.classList.contains('text-white')) {
    if (!btnHome.classList.contains('text-white')) {
      btnProject.classList.remove('text-white/60');
      btnProject.classList.add('text-white');
    }
    if (arrowMenu.getAttribute('style') != `top-${btnHomeCenter}px` && elementop >= aboutTop - 200) {
      arrowMenu.style.top = `${btnProjectCenter}px`;
    }
  } else {
    btnProject.classList.remove('text-white');
    btnProject.classList.add('text-white/60');
  }

  //contact
  if (elementop >= contactTop - 400 && !btnProject.classList.contains('text-white')) {
    if (!btnAbout.classList.contains('text-white') && !btnHome.classList.contains('text-white')) {
      btnContact.classList.remove('text-white/60');
      btnContact.classList.add('text-white');
    }
    if (arrowMenu.getAttribute('style') != `top-${btnHomeCenter}px` && arrowMenu.getAttribute('style') != `top-${btnAboutCenter}px` && arrowMenu.getAttribute('style') != `top-${btnProjectCenter}px`) {
      arrowMenu.style.top = `${btnContactCenter}px`;
    }
  } else {
    btnContact.classList.remove('text-white');
    btnContact.classList.add('text-white/60');
  }
}

function handleScroll() {
  const buttonToTop = document.getElementById('buttonToTop');
  if (document.documentElement.scrollTop > 574) {
    buttonToTop.classList.add('visible');
  } else {
    buttonToTop.classList.remove('visible');
  }
}

function home() {
  const homeTop = document.getElementById('home').offsetTop;
  document.documentElement.scrollTo({
    top: homeTop,
    behavior: 'smooth',
  });
}

function about() {
  const aboutTop = document.getElementById('about').offsetTop;
  document.documentElement.scrollTo({
    top: aboutTop - 100,
    behavior: 'smooth',
  });
}

function projects() {
  const projectsTop = document.getElementById('projects').offsetTop;
  document.documentElement.scrollTo({
    top: projectsTop - 100,
    behavior: 'smooth',
  });
}

function contact() {
  const contactTop = document.getElementById('contact').offsetTop;
  document.documentElement.scrollTo({
    top: contactTop - 100,
    behavior: 'smooth',
  });
}

// function cariY() {
//   let y = document.documentElement.scrollTop;
//   document.getElementById('demo').innerHTML = 'Vertically: ' + y;
// }

function viewMenu() {
  const Navbar2 = document.getElementById('Navbar2');
  const menuButton = document.getElementById('indexMenu');
  const menuText = document.getElementById('menuText');
  const burgerMenu1 = document.getElementById('burgerMenu1');
  const burgerMenu2 = document.getElementById('burgerMenu2');
  const burgerMenu3 = document.getElementById('burgerMenu3');

  function showMenu() {
    Navbar2.classList.toggle('-z-10');
    Navbar2.classList.toggle('z-20');
    Navbar2.classList.toggle('opacity-0');

    burgerMenu2.classList.toggle('opacity-0');
    burgerMenu1.classList.toggle('rotate-45');
    burgerMenu1.classList.toggle('translate-y-[0.55rem]');
    burgerMenu1.classList.toggle('translate-x-0');
    burgerMenu3.classList.toggle('-rotate-45');
    burgerMenu3.classList.toggle('-translate-y-[0.55rem]');
    burgerMenu3.classList.toggle('translate-x-0');
  }
  function openAnim() {
    burgerMenu1.classList.toggle('w-6');
    burgerMenu1.classList.toggle('w-7');
    burgerMenu3.classList.toggle('w-6');
    burgerMenu3.classList.toggle('w-7');
    burgerMenu1.classList.toggle('group-hover:-translate-y-1');
    burgerMenu3.classList.toggle('group-hover:translate-y-1');
    menuButton.classList.toggle('group-hover:rotate-90');
    menuText.innerHTML = 'MENU';
  }

  function closeMenu() {
    Navbar2.classList.toggle('-z-10');
    Navbar2.classList.toggle('z-20');
    Navbar2.classList.toggle('opacity-0');

    burgerMenu2.classList.toggle('opacity-0');
    burgerMenu1.classList.toggle('rotate-45');
    burgerMenu1.classList.toggle('translate-y-[0.55rem]');
    burgerMenu1.classList.toggle('translate-x-0');
    burgerMenu3.classList.toggle('-rotate-45');
    burgerMenu3.classList.toggle('-translate-y-[0.55rem]');
    burgerMenu3.classList.toggle('translate-x-0');
  }

  function closeAnim() {
    burgerMenu1.classList.toggle('w-6');
    burgerMenu1.classList.toggle('w-7');
    burgerMenu3.classList.toggle('w-6');
    burgerMenu3.classList.toggle('w-7');
    burgerMenu1.classList.toggle('group-hover:-translate-y-1');
    burgerMenu3.classList.toggle('group-hover:translate-y-1');
    setTimeout(function () {
      menuButton.classList.toggle('group-hover:rotate-90');
    }, 400);

    menuText.innerHTML = 'CLOSE';
  }

  if (Navbar2.classList.contains('-z-10') && Navbar2.classList.contains('opacity-0')) {
    closeAnim();
    showMenu();
  } else {
    openAnim();
    closeMenu();
  }

  Navbar2.onclick = function () {
    openAnim();
    closeMenu();
  };
}

// test

const div = [document.getElementById('div1'), document.getElementById('div2')];
let cardX, cardXOpen;
function item1(x) {
  document.body.classList.toggle('overflow-hidden');
  switch (x) {
    case 0:
      cardX = 'left-64';
      cardXOpen = 'left-0';
      break;
    case 1:
      cardX = 'right-64';
      cardXOpen = 'right-0';
      break;
  }

  div[x].classList.toggle('z-50');
  div[x].classList.toggle('absolute');
  div[x].classList.toggle('fixed');
  div[x].classList.toggle('rounded-md');
  div[x].classList.toggle('w-[20rem]');
  div[x].classList.toggle('h-[20rem]');
  div[x].classList.toggle(`${cardX}`);
  div[x].classList.toggle('top-32');
  div[x].children[1].classList.toggle('-z-10');
  div[x].children[1].classList.toggle('from-transparent');
  div[x].children[1].classList.toggle('via-transparent');
  div[x].children[1].classList.toggle('to-black');
  div[x].children[1].classList.toggle('group-hover:from-black/70');
  div[x].children[1].classList.toggle('group-hover:via-black/60');
  div[x].children[1].classList.toggle('group-hover:to-black/70');
  div[x].children[1].classList.toggle('from-gray-900');
  div[x].children[1].classList.toggle('via-gray-900');
  div[x].children[1].classList.toggle('to-black');

  div[x].classList.toggle('h-full');
  div[x].classList.toggle('w-full');
  div[x].classList.toggle(`${cardXOpen}`);
  div[x].classList.toggle('top-0');

  div[x].children[2].classList.toggle('hidden');

  div[x].children[0].classList.toggle('scale-35');
  div[x].children[0].classList.toggle('-translate-x-[24rem]');
  div[x].children[0].classList.toggle('group-hover:scale-110');

  div[x].children[2].classList.toggle('translate-y-1/2');
  div[x].children[2].classList.toggle('group-hover:translate-y-0');
  div[x].children[2].classList.toggle('translate-y-0');
  div[x].children[2].children[1].classList.toggle('group-hover:opacity-100');
  div[x].children[2].children[1].classList.toggle('opacity-100');

  if (div[x].classList.contains('z-50')) {
    setTimeout(function () {
      div[x].children[3].classList.toggle('-z-10');
      div[x].children[3].classList.add('visible');
      for (let i = 0; i <= 3; i++) {
        div[x].children[3].children[i].classList.add('visible');
        if (i == 2) {
          for (let p = 0; p <= 3; p++) {
            div[x].children[3].children[i].children[p].classList.add('visible');
          }
        }
      }
    }, 100);
    setTimeout(function () {
      div[x].setAttribute('onclick', `item1(${x})`);
    }, 300);
  } else {
    div[x].children[3].classList.toggle('-z-10');
    div[x].children[3].classList.remove('visible');
    for (let i = 0; i <= 3; i++) {
      div[x].children[3].children[i].classList.remove('visible');
      if (i == 2) {
        for (let l = 0; l <= 3; l++) {
          div[x].children[3].children[i].children[l].classList.remove('visible');
        }
      }
    }
    div[x].removeAttribute('onclick', `item1(${x})`);
  }
}
