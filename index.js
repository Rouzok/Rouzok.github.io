//137,6000366210938 tambah ini bro

window.onload = function () {
  const navbar = document.getElementById('Navbar');
  // const btnhome = document.getElementById('btn-home');
  // const btnabout = document.getElementById('btn-about');
  // const btnproject = document.getElementById('btn-projects');
  // const btncontact = document.getElementById('btn-contact');
  var top = document.body.scrollTop;
  var elementop = document.documentElement.scrollTop;
  var about = document.getElementById('about');

  if (top == 0 && elementop == 0) {
    about.classList.remove('transition');
    about.classList.add('tag');
  }

  // test

  if (elementop > 0) {
    navbar.classList.add('bg-gray-900/80');
    navbar.classList.add('shadow');
  } else {
    navbar.classList.remove('bg-gray-900/80');
    navbar.classList.remove('shadow');
  }

  // //home
  // if (elementop <= 200) {
  //   if (!btnhome.classList.contains('active')) {
  //     btnhome.classList.add('active');
  //   }
  // } else {
  //   btnhome.classList.remove('active');
  // }

  // //about
  // if (elementop <= 750 && !btnhome.classList.contains('active')) {
  //   btnabout.classList.add('active');
  // } else {
  //   btnabout.classList.remove('active');
  // }

  // //project
  // if (elementop <= 1700 && !btnabout.classList.contains('active')) {
  //   if (!btnhome.classList.contains('active')) {
  //     btnproject.classList.add('active');
  //   }
  // } else {
  //   btnproject.classList.remove('active');
  // }

  // //contact
  // if (elementop <= 2200 && !btnproject.classList.contains('active')) {
  //   if (!btnabout.classList.contains('active') && !btnhome.classList.contains('active')) {
  //     btncontact.classList.add('active');
  //   }
  // } else {
  //   btncontact.classList.remove('active');
  // }

  // test
};

window.onscroll = function () {
  navActive();
  handleScroll();
};

function navActive() {
  const navbar = document.getElementById('Navbar');
  const btnhome = document.getElementById('btn-home');
  const btnabout = document.getElementById('btn-about');
  const btnproject = document.getElementById('btn-projects');
  const btncontact = document.getElementById('btn-contact');
  const arrowMenu = document.getElementById('arrowMenu');

  const elementop = document.documentElement.scrollTop;
  const homeTop = document.getElementById('home').offsetTop;
  const aboutTop = document.getElementById('about').offsetTop;
  const projectsTop = document.getElementById('projects').offsetTop;
  const contactTop = document.getElementById('contact').offsetTop;

  if (elementop > homeTop) {
    navbar.classList.add('bg-gray-900/80');
    navbar.classList.add('backdrop-blur-sm');
    navbar.classList.add('shadow');
  } else {
    navbar.classList.remove('bg-gray-900/80');
    navbar.classList.remove('backdrop-blur-sm');
    navbar.classList.remove('shadow');
  }

  //home
  if (elementop <= aboutTop - 200) {
    if (!btnhome.classList.contains('text-white')) {
      btnhome.classList.remove('text-white/60');
      btnhome.classList.add('text-white');
    }
    if (!arrowMenu.classList.contains('top-[16.35rem]')) {
      arrowMenu.classList.add('top-[16.35rem]');
    }
  } else {
    btnhome.classList.remove('text-white');
    btnhome.classList.add('text-white/60');
    arrowMenu.classList.remove('top-[16.35rem]');
  }

  //about
  if (elementop <= projectsTop - 250 && !btnhome.classList.contains('text-white')) {
    btnabout.classList.remove('text-white/60');
    btnabout.classList.add('text-white');
    if (!arrowMenu.classList.contains('top-[20.6rem]')) {
      arrowMenu.classList.add('top-[20.6rem]');
    }
  } else {
    btnabout.classList.remove('text-white');
    btnabout.classList.add('text-white/60');
    arrowMenu.classList.remove('top-[20.6rem]');
  }

  //project
  if (elementop <= contactTop - 400 && !btnabout.classList.contains('text-white')) {
    if (!btnhome.classList.contains('text-white')) {
      btnproject.classList.remove('text-white/60');
      btnproject.classList.add('text-white');
    }
    if (!arrowMenu.classList.contains('top-[24.85rem]') && !arrowMenu.classList.contains('top-[16.35rem]')) {
      arrowMenu.classList.add('top-[24.85rem]');
    }
  } else {
    btnproject.classList.remove('text-white');
    btnproject.classList.add('text-white/60');
    arrowMenu.classList.remove('top-[24.85rem]');
  }

  //contact
  if (elementop >= contactTop - 400 && !btnproject.classList.contains('text-white')) {
    if (!btnabout.classList.contains('text-white') && !btnhome.classList.contains('text-white')) {
      btncontact.classList.remove('text-white/60');
      btncontact.classList.add('text-white');
    }
    if (!arrowMenu.classList.contains('top-[24.85rem]') && !arrowMenu.classList.contains('top-[24.85rem]')) {
      arrowMenu.classList.add('top-[29.1rem]');
    }
  } else {
    btncontact.classList.remove('text-white');
    btncontact.classList.add('text-white/60');
    arrowMenu.classList.remove('top-[29.1rem]');
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
