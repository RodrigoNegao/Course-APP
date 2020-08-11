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
      'Dinamico',
      'Funcional',
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
        '?????'
      ],
      false,
      true,
      true,
      true
    ),
  
    new Course(
      'm2',
      ['c2'],
      'HTML',
      'affordable',
      'simple',
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
        'Outros'
      ],
      false,
      false,
      false,
      false
    ),
  
    new Course(
      'm3',
      ['c3'],
      'Python',
      'pricey',
      'Simples',
      'https://datawider.com/wp-content/uploads/2019/11/How-to-Learn-Python.jpg',
      45,
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
      ['c4'],
      'ASP.NET',
      'luxurious',
      'challenging',
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
      ['c2', 'c5', 'c10'],
      'CSS',
      'luxurious',
      'simple',
      'https://www.foze.com.br/adm/assets/imagens/artigo/112/css.jpg',
      1996,
      [
        'UIkit',
        'Bulma.io',
        'BootStrap',
        'Foundation',
      ],
      [
        'BootStap - Twitter',
      ],
      true,
      false,
      true,
      true
    ),
  
    new Course(
      'm6',
      ['c6', 'c10'],
      'Django',
      'affordable',
      'hard',
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
      ['c7'],
      'Android Studio',
      'affordable',
      'simple',
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
      ['c8'],
      'X CODE',
      'pricey',
      'challenging',
      'https://cdn.pixabay.com/photo/2018/06/18/16/05https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlQBoUKz7V53ZyQaaD2FbbUGU56Jf9KchI9uEM3yjPpV6UrCU&s/indian-food-3482749_1280.jpg',
      2014,
      [
        'Emulador',
        'Plugins',        
      ],
      [
        'IPhone',
      ],
      true,
      false,
      false,
      true
    ),
  
    new Course(
      'm9',
      ['c9'],
      'Visual Studio Code',
      'affordable',
      'hard',
      'https://cdn.clipart.email/d074dfee6ba8a68b8eb7ac77968a09c9_top-vs-code-extensions-to-improve-your-productivity-syntaxsofts-_402-210.png',
      2018,
      [
        'Docker Plugin',
        'Django Plugin',
        'React Plugin',
      ],
      [
        'Preheat oven to 190°C. Line a rimmed baking sheet with parchment paper.',
        'Microsoft',
      ],
      true,
      false,
      true,
      false
    ),
    new Course(
      'm10',
      ['c2', 'c5', 'c10'],
      'Visual Studio Ano',
      'luxurious',
      'simple',
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
      ['c1', 'c2'],
      'Docker',
      'Dinamico',
      'Simples',
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
      ['c1', 'c2'],
      'AWS',
      'Dinamico',
      'Simples',
      'https://miro.medium.com/max/867/1*vb_oGv53xB5SoOg2WxAVHg.png',
      2006,
      [
        '4 Tomatoes',
        '1 Tablespoon of Olive Oil',
        '1 Onion',
        '250g Spaghetti',
        'Spices',
        'Cheese (optional)'
      ],
      [
        'Cut the tomatoes and the onion into small pieces.',
        'Boil some water - add salt to it once it boils.',
        'Put the spaghetti into the boiling water - they should be done in about 10 to 12 minutes.',
        'In the meantime, heaten up some olive oil and add the cut onion.',
        'After 2 minutes, add the tomato pieces, salt, pepper and your other spices.',
        'The sauce will be done once the spaghetti are.',
        'Feel free to add some cheese on top of the finished dish.'
      ],
      false,
      true,
      true,
      true
    ),

    new Course(
      'm13',
      ['c1', 'c2'],
      'Azure',
      'Dinamico',
      'Simples',
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
      ['c1', 'c2'],
      'ANACONDA SDK',
      'Dinamico',
      'Simples',
      'https://upload.wikimedia.org/wikipedia/en/c/cd/Anaconda_Logo.png',
      2012,
      [
        'Jupyter',
        'PANDA',
        ''
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
      ['c1', 'c2'],
      'PANDA',
      'Dinamico',
      'Simples',
      'https://miro.medium.com/max/748/1*wP8ubuQEIrtxtfd-DTOTig.jpeg',
      20,
      [
        '4 Tomatoes',
        '1 Tablespoon of Olive Oil',
        '1 Onion',
        '250g Spaghetti',
        'Spices',
        'Cheese (optional)'
      ],
      [
        'Cut the tomatoes and the onion into small pieces.',
        'Boil some water - add salt to it once it boils.',
        'Put the spaghetti into the boiling water - they should be done in about 10 to 12 minutes.',
        'In the meantime, heaten up some olive oil and add the cut onion.',
        'After 2 minutes, add the tomato pieces, salt, pepper and your other spices.',
        'The sauce will be done once the spaghetti are.',
        'Feel free to add some cheese on top of the finished dish.'
      ],
      false,
      true,
      true,
      true
    ),

    new Course(
      'm16',
      ['c1', 'c2'],
      'React Native',
      'Dinamico',
      'Simples',
      'https://img-a.udemycdn.com/course/750x422/2497080_fe57.jpg',
      20,
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
      ['c1', 'c2'],
      'BootStrap',
      'Dinamico',
      'Simples',
      'https://speckyboy.com/wp-content/uploads/2019/12/boot-admin-th-500x333.jpg',
      2011,
      [
        'JQuery até BootStrap4'
      ],
      [
        'Cut the tomatoes and the onion into small pieces.',
        'Boil some water - add salt to it once it boils.',
        'Put the spaghetti into the boiling water - they should be done in about 10 to 12 minutes.',
        'In the meantime, heaten up some olive oil and add the cut onion.',
        'After 2 minutes, add the tomato pieces, salt, pepper and your other spices.',
        'The sauce will be done once the spaghetti are.',
        'Feel free to add some cheese on top of the finished dish.'
      ],
      false,
      true,
      true,
      true
    ),

    new Course(
      'm18',
      ['c1', 'c2'],
      'C#(Csharp)',
      'Dinamico',
      'Simples',
      'https://pluralsight.imgix.net/paths/path-icons/csharp-e7b8fcd4ce.png',
      2000,
      [
        '4 Tomatoes',
        '1 Tablespoon of Olive Oil',
        '1 Onion',
        '250g Spaghetti',
        'Spices',
        'Cheese (optional)'
      ],
      [
        'Cut the tomatoes and the onion into small pieces.',
        'Boil some water - add salt to it once it boils.',
        'Put the spaghetti into the boiling water - they should be done in about 10 to 12 minutes.',
        'In the meantime, heaten up some olive oil and add the cut onion.',
        'After 2 minutes, add the tomato pieces, salt, pepper and your other spices.',
        'The sauce will be done once the spaghetti are.',
        'Feel free to add some cheese on top of the finished dish.'
      ],
      false,
      true,
      true,
      true
    ),
  ];