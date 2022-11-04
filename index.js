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
  progresBar();
  navActive();
  cariY();
  FadeIn();
};

function navActive() {
  const navbar = document.getElementById('Navbar');
  const btnhome = document.getElementById('btn-home');
  const btnabout = document.getElementById('btn-about');
  const btnproject = document.getElementById('btn-projects');
  const btncontact = document.getElementById('btn-contact');
  const elementop = document.documentElement.scrollTop;
  const headerAbout = document.getElementById('headerAbout');

  if (elementop > 0) {
    navbar.classList.add('bg-gray-900/80');
    navbar.classList.add('backdrop-blur-sm');
    navbar.classList.add('shadow');
  } else {
    navbar.classList.remove('bg-gray-900/80');
    navbar.classList.remove('backdrop-blur-sm');
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
}

function FadeIn() {
  var elementop = document.documentElement.scrollTop;
  var about = document.getElementById('about');
  var project = document.getElementById('project');
  var contact = document.getElementById('contact');

  if (elementop < 100) {
    if (!about.classList.contains('tag')) {
      about.classList.add('tag');
    }
    about.classList.add('transition');
    about.classList.remove('visible');
  } else {
    if (!about.classList.contains('visible')) {
      about.classList.add('visible');
    }
  }

  if (elementop < 700) {
    if (!project.classList.contains('tag')) {
      project.classList.add('tag');
    }
    project.classList.add('transition');
    project.classList.remove('visible');
  } else {
    if (!project.classList.contains('visible')) {
      project.classList.add('visible');
    }
  }

  if (elementop < 1600) {
    if (!contact.classList.contains('tag')) {
      contact.classList.add('tag');
    }
    contact.classList.add('transition');
    contact.classList.remove('visible');
  } else {
    if (!contact.classList.contains('visible')) {
      contact.classList.add('visible');
    }
  }
}

function progresBar() {
  var elementop = document.documentElement.scrollTop;

  if (elementop > 1093 && elementop < 1772) {
    //1
    var progjs = document.querySelectorAll('.bar1');
    for (var i = 0; i < progjs.length; i++) {
      switch (i) {
        case 0:
          progjs[i].style.width = '73%';
          progjs[i].style.transition = '1.2s';
          break;
        case 1:
          progjs[i].style.width = '27%';
          progjs[i].style.transition = '1.2s';
          break;
        case 2:
          progjs[i].style.width = '1%';
          progjs[i].style.transition = '1.2s';
          break;
      }
    }

    //2
    var progjs2 = document.querySelectorAll('.bar2');
    for (var i = 0; i < progjs2.length; i++) {
      switch (i) {
        case 0:
          progjs2[i].style.width = '73%';
          progjs2[i].style.transition = '1.2s';
          break;
        case 1:
          progjs2[i].style.width = '27%';
          progjs2[i].style.transition = '1.2s';
          break;
        case 2:
          progjs2[i].style.width = '1%';
          progjs2[i].style.transition = '1.2s';
          break;
      }
    }
    //3
    var progjs3 = document.querySelectorAll('.bar3');
    for (var i = 0; i < progjs3.length; i++) {
      switch (i) {
        case 0:
          progjs3[i].style.width = '73%';
          progjs3[i].style.transition = '1.2s';
          break;
        case 1:
          progjs3[i].style.width = '27%';
          progjs3[i].style.transition = '1.2s';
          break;
        case 2:
          progjs3[i].style.width = '1%';
          progjs3[i].style.transition = '1.2s';
          break;
      }
    }
  } else {
    //1
    var progjs = document.querySelectorAll('.bar1');
    for (var i = 0; i < progjs.length; i++) {
      switch (i) {
        case 0:
          progjs[i].style.transition = '0s';
          progjs[i].style.width = '0%';
          break;
        case 1:
          progjs[i].style.transition = '0s';
          progjs[i].style.width = '0%';
          break;
        case 2:
          progjs[i].style.transition = '0s';
          progjs[i].style.width = '0%';
          break;
      }
    }
    //2
    var progjs2 = document.querySelectorAll('.bar2');
    for (var i = 0; i < progjs2.length; i++) {
      switch (i) {
        case 0:
          progjs2[i].style.transition = '0s';
          progjs2[i].style.width = '0%';
          break;
        case 1:
          progjs2[i].style.transition = '0s';
          progjs2[i].style.width = '0%';
          break;
        case 2:
          progjs2[i].style.transition = '0s';
          progjs2[i].style.width = '0%';
          break;
      }
    }
    //3
    var progjs3 = document.querySelectorAll('.bar3');
    for (var i = 0; i < progjs3.length; i++) {
      switch (i) {
        case 0:
          progjs3[i].style.transition = '0s';
          progjs3[i].style.width = '0%';
          break;
        case 1:
          progjs3[i].style.transition = '0s';
          progjs3[i].style.width = '0%';
          break;
        case 2:
          progjs3[i].style.transition = '0s';
          progjs3[i].style.width = '0%';
          break;
      }
    }
  }
}

function home() {
  const homeTop = document.getElementById('home');
  document.documentElement.scrollTop = homeTop.offsetTop;
}

function about() {
  const aboutTop = document.getElementById('about');
  document.documentElement.scrollTop = aboutTop.offsetTop - 100;
}

function projects() {
  const projectsTop = document.getElementById('project');
  document.documentElement.scrollTop = projectsTop.offsetTop - 100;
}

function contact() {
  const contactTop = document.getElementById('contact');
  document.documentElement.scrollTop = contactTop.offsetTop - 100;
}

function cariY() {
  let y = document.documentElement.scrollTop;
  document.getElementById('demo').innerHTML = 'Horizontally: ' + y;
}

function viewMenu() {
  const viewMenu = document.getElementById('menu');
  const Navbar2 = document.getElementById('Navbar2');

  function showMenu() {
    Navbar2.classList.toggle('-z-10');
    Navbar2.classList.toggle('z-20');
    Navbar2.classList.toggle('opacity-0');
    viewMenu.classList.add('opacity-0');
  }

  function closeMenu() {
    Navbar2.classList.toggle('-z-10');
    Navbar2.classList.toggle('z-20');
    Navbar2.classList.toggle('opacity-0');
    viewMenu.classList.remove('opacity-0');
  }

  if (Navbar2.classList.contains('-z-10') && Navbar2.classList.contains('opacity-0')) {
    showMenu();
  } else {
    Navbar2.closeMenu();
  }

  Navbar2.onclick = function () {
    closeMenu();
  };
}
