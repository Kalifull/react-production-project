import type { Meta, StoryObj } from '@storybook/react';

import { ThemeEnum } from '@/shared/api';

import Avatar from '@/shared/assets/test/storybook-avatar.png';

import { ThemeDecorator } from '@/shared/config/storybook/theme-decorator';

import {
  Article,
  ArticleTypeEnum,
  ArticleBlockTypeEnum,
} from '../../model/types/article.interface';

import ArticleList from './ArticleList';

const article = {
  id: '1',
  user: {
    id: 1,
    username: 'admin',
    password: 'password',
    avatar: Avatar,
  },
  title: 'JavaScript news',
  subtitle: 'Что нового в JS за 2022 год?',
  img: 'https://user-images.githubusercontent.com/65357821/82758846-0394c180-9e0f-11ea-8b02-51f885eff3f5.png',
  views: 1022,
  createdAt: '26.04.2022',
  userId: '1',
  type: [ArticleTypeEnum.IT],
  blocks: [
    {
      id: '1',
      type: ArticleBlockTypeEnum.TEXT,
      title: 'Заголовок этого блока',
      paragraphs: [
        'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
        'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
        'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
      ],
    },
    {
      id: '2',
      type: ArticleBlockTypeEnum.IMAGE,
      src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
      title: 'Рисунок 1 - скриншот сайта',
    },
    {
      id: '3',
      type: ArticleBlockTypeEnum.CODE,
      code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);",
    },
    {
      id: '4',
      type: ArticleBlockTypeEnum.CODE,
      code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
    },
    {
      id: '5',
      type: ArticleBlockTypeEnum.TEXT,
      title: 'Заголовок этого блока',
      paragraphs: [
        'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
        'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
      ],
    },
    {
      id: '6',
      type: ArticleBlockTypeEnum.TEXT,
      title: 'Заголовок этого блока',
      paragraphs: [
        'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
        'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
      ],
    },
    {
      id: '7',
      type: ArticleBlockTypeEnum.IMAGE,
      src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
      title: 'Рисунок 1 - скриншот сайта',
    },
    {
      id: '8',
      type: ArticleBlockTypeEnum.TEXT,
      title: 'Заголовок этого блока',
      paragraphs: [
        'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
      ],
    },
  ],
} as Article;

const meta = {
  title: 'entities/ArticleList',
  component: ArticleList,
  argTypes: {},
} satisfies Meta<typeof ArticleList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LightList: Story = {
  args: {
    isLoading: false,
    view: 'list',
    articles: [...new Array(3)].map((_, index) => ({ ...article, id: String(index) })),
  },
};

export const DarkList: Story = {
  args: {
    isLoading: false,
    view: 'list',
    articles: [...new Array(3)].map((_, index) => ({ ...article, id: String(index) })),
  },
};

DarkList.decorators = [ThemeDecorator(ThemeEnum.DARK)];

export const VioletList: Story = {
  args: {
    isLoading: false,
    view: 'list',
    articles: [...new Array(3)].map((_, index) => ({ ...article, id: String(index) })),
  },
};

VioletList.decorators = [ThemeDecorator(ThemeEnum.VIOLET)];

export const LoadingList: Story = {
  args: {
    isLoading: true,
    view: 'list',
    articles: [],
  },
};

export const LightTile: Story = {
  args: {
    isLoading: false,
    view: 'tile',
    articles: [...new Array(8)].map((_, index) => ({ ...article, id: String(index) })),
  },
};

export const DarkTile: Story = {
  args: {
    isLoading: false,
    view: 'tile',
    articles: [...new Array(8)].map((_, index) => ({ ...article, id: String(index) })),
  },
};

DarkTile.decorators = [ThemeDecorator(ThemeEnum.DARK)];

export const VioletTile: Story = {
  args: {
    isLoading: false,
    view: 'tile',
    articles: [...new Array(8)].map((_, index) => ({ ...article, id: String(index) })),
  },
};

VioletTile.decorators = [ThemeDecorator(ThemeEnum.VIOLET)];

export const LoadingTile: Story = {
  args: {
    isLoading: true,
    view: 'tile',
    articles: [],
  },
};
