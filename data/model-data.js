import Category from '../models/category';
import Course from '../models/course'

export const CATEGORIES = [
    new Category('c1','Back End','#f5428d'),
    new Category('c2','Front End','#f54242'),
    new Category('c3','FrameWork','#f5a442'),
    new Category('c4','IDE','#f5d142'),
    new Category('c5','Cloud/Nuvem','#368dff'),
    new Category('c6','SDK','#41d95d'),
    new Category('c7','Inteligencia Artificial','#9eecff'),
    new Category('c8','Módulos/Bibliotecas','#b9ffb0'),
    //new Category('c9','?????2','#ffc7ff'),
   // new Category('c10','??????3','#47fced')
];

export const COURSES = [
    new Course(
      'm1',
      ['c1', 'c2'],
      'JavaScript',
      'SIM',
      'Todos',
      'https://i.ytimg.com/vi/QIy874Wn1kM/maxresdefault.jpg',
      1995,
      [
        'Node.Js',
        'React',
        'Vue',
        'React Native',
        'BootStrap',
        'JQuery'
      ],
      [
        'React Native - Facebook',
        'JavaScript - Google',
      ],
      false,
      true,
      true,
      false
    ),
  
    new Course(
      'm2',
      ['c2'],
      'HTML',
      'SIM',
      'TODOS',
      'https://tecnoblog.net/wp-content/uploads/2014/10/html5.jpg',
      1993,
      [
        'BootStrap',
        'Foundation',
        'HTML KickStart',
        'Skeleton',
        'HTML5 Boilerplate'
      ],
      [
        'Foundation - HP, EA Esports, CISCO, Disney, Amazon',
        'BootStrap - Twitter',
      ],
      false,
      false,
      true,
      false
    ),
  
    new Course(
      'm3',
      ['c1','c7'],
      'Python',
      'Sim',
      'TODOS',
      'https://datawider.com/wp-content/uploads/2019/11/How-to-Learn-Python.jpg',
      1991,
      [
        'Django',
        'Panda',
        'OpenCV',
        'Anaconda',
      ],
      [
        'Django - Pinterest, Udemy, Instagram',
        'Anaconda - CISCO, HSBC',
      ],
      false,
      false,
      false,
      true
    ),
  
    new Course(
      'm4',
      ['c1','c3'],
      'ASP.NET',
      'SIM',
      'TODOS',
      'https://arquivo.devmedia.com.br/cursos/imagem/curso_o-que-e-asp-net-mvc_1975.png',
      60,
      [
        'API',
        'Entity',
      ],
      [
        'StackOverFlow',
        'DELL',
        'Microsoft',
        'Aquaria',
        'Digital Business',
      ],
      false,
      false,
      false,
      false
    ),
  
    new Course(
      'm5',
      ['c2'],
      'CSS',
      'SIM',
      'TODOS',
      'https://www.foze.com.br/adm/assets/imagens/artigo/112/css.jpg',
      1996,
      [
        'UIkit',
        'Bulma.io',
        'BootStrap',
        'Foundation',
      ],
      [
        'BootStrap - Twitter',
      ],
      true,
      false,
      true,
      true
    ),
  
    new Course(
      'm6',
      ['c1', 'c3'],
      'Django',
      'SIM',
      'TODOS',
      'https://arquivo.devmedia.com.br/cursos/imagem/curso_o-que-e-django_1938.jpg',
      2003,
      [
        'BootStrap',
        'Django RESTful',
        'Weasyprint',
      ],
      [
        'Instagram'
      ],
      true,
      false,
      true,
      false
    ),
  
    new Course(
      'm7',
      ['c6'],
      'Android Studio',
      'SIM',
      'TODOS',
      'https://arquivo.devmedia.com.br/noticias/artigo_introducao-ao-android-studio_34003.jpg',
      2013,
      [
        'Emulador',
        'Java',
      ],
      [
        'Google'
      ],
      true,
      false,
      true,
      false
    ),
  
    new Course(
      'm8',
      ['c6'],
      'X CODE',
      'SIM',
      'MAC',
      'https://developer.apple.com/news/images/og/xcode-og-twitter.png',
      2014,
      [
        'Emulador',
        'Plugins',
      ],
      [
        'Apple - IPhone',
      ],
      true,
      false,
      false,
      true
    ),
  
    new Course(
      'm9',
      ['c4'],
      'Visual Studio Code',
      'SIM',
      'TODOS',
      'https://cdn.clipart.email/d074dfee6ba8a68b8eb7ac77968a09c9_top-vs-code-extensions-to-improve-your-productivity-syntaxsofts-_402-210.png',
      2018,
      [
        'Docker Plugin',
        'Django Plugin',
        'React Plugin',
      ],
      [
        'Microsoft',
      ],
      true,
      false,
      true,
      false
    ),
    
    new Course(
      'm10',
      ['c6'],
      'Visual Studio Ano',
      'DEV',
      'TODOS',
      'https://pplware.sapo.pt/wp-content/uploads/2017/03/visual_studio_2017.jpg',
      2001,
      [
        'ASP.NET',
        'Windows Server',
      ],
      [
        'Microsoft',
      ],
      true,
      true,
      true,
      true
    ),

    new Course(
      'm11',
      ['c1', 'c5'],
      'Docker',
      'SIM',
      '- Win H',
      'https://miro.medium.com/max/2820/1*ovRuAuqPf4r2xpiWh71rUg.png',
      2010,
      [
        'DockerTools',
        'Kubernetes',
      ],
      [
        'Linux',
        'AWS'
      ],
      false,
      true,
      true,
      true
    ),

    new Course(
      'm12',
      ['c5'],
      'AWS',
      'SIM',
      'CLOUD',
      'https://miro.medium.com/max/867/1*vb_oGv53xB5SoOg2WxAVHg.png',
      2006,
      [
        'Docker'
      ],
      [
        'Amazon',
      ],
      false,
      true,
      true,
      true
    ),

    new Course(
      'm13',
      ['c5'],
      'Azure',
      'TRIAL',
      'CLOUD',
      'https://inovti.com.br/blog/wp-content/uploads/2019/10/download.png',
      2010,
      [
        'ASP.NET',
      ],
      [
        'Microsoft',
      ],
      false,
      true,
      true,
      true
    ),

    new Course(
      'm14',
      ['c6'],
      'ANACONDA SDK',
      'SIM',
      'TODOS',
      'https://upload.wikimedia.org/wikipedia/en/c/cd/Anaconda_Logo.png',
      2012,
      [
        'Jupyter',
        'PANDA',
        'Python'
      ],
      [
        'CISCO'
      ],
      false,
      true,
      true,
      true
    ),

    new Course(
      'm15',
      ['c7', 'c8'],
      'PANDA',
      'SIM',
      'TODOS',
      'https://miro.medium.com/max/748/1*wP8ubuQEIrtxtfd-DTOTig.jpeg',
      20,
      [
        'Estatisca'
      ],
      [
        'Anaconda'
      ],
      false,
      true,
      true,
      true
    ),

    new Course(
      'm16',
      ['c2', 'c3'],
      'React Native',
      'SIM',
      'ANDROID/IPHONE',
      'https://img-a.udemycdn.com/course/750x422/2497080_fe57.jpg',
      2013,
      [
        'React',
        'Toolbar'
      ],
      [
        'Facebook',
      ],
      false,
      true,
      true,
      true
    ),

    new Course(
      'm17',
      ['c2', 'c3'],
      'BootStrap',
      'SIM',
      'TODOS',
      'https://speckyboy.com/wp-content/uploads/2019/12/boot-admin-th-500x333.jpg',
      2011,
      [
        'JQuery até BootStrap4'
      ],
      [
        'Twitter'
      ],
      false,
      true,
      true,
      true
    ),

    new Course(
      'm18',
      ['c1'],
      'C#(Csharp)',
      'SIM',
      'WINDOWS',
      'https://pluralsight.imgix.net/paths/path-icons/csharp-e7b8fcd4ce.png',
      2000,
      [
        '.NET',
        'Xamarin',
        'ASP.NET',
        'ASP.NET Core'
      ],
      [
        'Microsoft'
      ],
      false,
      true,
      true,
      true
    ),
  ];
