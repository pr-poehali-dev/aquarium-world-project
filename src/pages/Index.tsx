import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const categories = [
    { id: 'care', name: 'Уход за аквариумом', icon: 'Droplets', count: 12 },
    { id: 'fish', name: 'Рыбы', icon: 'Fish', count: 25 },
    { id: 'plants', name: 'Растения', icon: 'Leaf', count: 18 },
    { id: 'equipment', name: 'Оборудование', icon: 'Settings', count: 15 },
  ];

  const articles = [
    {
      id: 1,
      title: 'Запуск первого аквариума',
      category: 'care',
      description: 'Пошаговое руководство для начинающих аквариумистов',
      difficulty: 'Новичок',
      duration: '15 мин',
      image: 'https://cdn.poehali.dev/projects/f43e4824-755a-4572-b9af-dc827576d9a6/files/56cae5ed-1724-4472-8275-2dc264bca668.jpg'
    },
    {
      id: 2,
      title: 'Азотный цикл в аквариуме',
      category: 'care',
      description: 'Понимание биологического равновесия',
      difficulty: 'Средний',
      duration: '20 мин',
      image: 'https://cdn.poehali.dev/projects/f43e4824-755a-4572-b9af-dc827576d9a6/files/d1dbfd7a-9f2e-429c-86ed-dcb6327c65dc.jpg'
    },
    {
      id: 3,
      title: 'Выбор рыб для начинающих',
      category: 'fish',
      description: 'Неприхотливые виды для первого аквариума',
      difficulty: 'Новичок',
      duration: '10 мин',
      image: 'https://cdn.poehali.dev/projects/f43e4824-755a-4572-b9af-dc827576d9a6/files/4fd4f735-acdb-4d56-b17e-b3e9074bbd0e.jpg'
    },
    {
      id: 4,
      title: 'Акваскейпинг для новичков',
      category: 'plants',
      description: 'Создание красивого подводного ландшафта',
      difficulty: 'Средний',
      duration: '25 мин',
      image: 'https://cdn.poehali.dev/projects/f43e4824-755a-4572-b9af-dc827576d9a6/files/56cae5ed-1724-4472-8275-2dc264bca668.jpg'
    },
    {
      id: 5,
      title: 'Выбор фильтра для аквариума',
      category: 'equipment',
      description: 'Типы фильтров и их особенности',
      difficulty: 'Новичок',
      duration: '12 мин',
      image: 'https://cdn.poehali.dev/projects/f43e4824-755a-4572-b9af-dc827576d9a6/files/d1dbfd7a-9f2e-429c-86ed-dcb6327c65dc.jpg'
    },
    {
      id: 6,
      title: 'Борьба с водорослями',
      category: 'care',
      description: 'Эффективные методы контроля',
      difficulty: 'Продвинутый',
      duration: '18 мин',
      image: 'https://cdn.poehali.dev/projects/f43e4824-755a-4572-b9af-dc827576d9a6/files/4fd4f735-acdb-4d56-b17e-b3e9074bbd0e.jpg'
    }
  ];

  const gallery = [
    { id: 1, title: 'Тропический рай', style: 'Тропический', image: 'https://cdn.poehali.dev/projects/f43e4824-755a-4572-b9af-dc827576d9a6/files/56cae5ed-1724-4472-8275-2dc264bca668.jpg' },
    { id: 2, title: 'Дзен сад', style: 'Минимализм', image: 'https://cdn.poehali.dev/projects/f43e4824-755a-4572-b9af-dc827576d9a6/files/d1dbfd7a-9f2e-429c-86ed-dcb6327c65dc.jpg' },
    { id: 3, title: 'Зеленый оазис', style: 'Природный', image: 'https://cdn.poehali.dev/projects/f43e4824-755a-4572-b9af-dc827576d9a6/files/4fd4f735-acdb-4d56-b17e-b3e9074bbd0e.jpg' },
    { id: 4, title: 'Коралловый риф', style: 'Морской', image: 'https://cdn.poehali.dev/projects/f43e4824-755a-4572-b9af-dc827576d9a6/files/56cae5ed-1724-4472-8275-2dc264bca668.jpg' },
    { id: 5, title: 'Растительный рай', style: 'Акваскейп', image: 'https://cdn.poehali.dev/projects/f43e4824-755a-4572-b9af-dc827576d9a6/files/d1dbfd7a-9f2e-429c-86ed-dcb6327c65dc.jpg' },
    { id: 6, title: 'Каменный сад', style: 'Ивагуми', image: 'https://cdn.poehali.dev/projects/f43e4824-755a-4572-b9af-dc827576d9a6/files/4fd4f735-acdb-4d56-b17e-b3e9074bbd0e.jpg' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'История аквариумистики',
      date: '15 октября 2024',
      author: 'Алексей Морской',
      excerpt: 'От первых стеклянных емкостей до современных высокотехнологичных систем',
      image: 'https://cdn.poehali.dev/projects/f43e4824-755a-4572-b9af-dc827576d9a6/files/56cae5ed-1724-4472-8275-2dc264bca668.jpg'
    },
    {
      id: 2,
      title: 'Биотопные аквариумы',
      date: '12 октября 2024',
      author: 'Мария Подводная',
      excerpt: 'Воссоздание естественных условий обитания рыб',
      image: 'https://cdn.poehali.dev/projects/f43e4824-755a-4572-b9af-dc827576d9a6/files/d1dbfd7a-9f2e-429c-86ed-dcb6327c65dc.jpg'
    },
    {
      id: 3,
      title: 'Современные технологии',
      date: '8 октября 2024',
      author: 'Дмитрий Глубинский',
      excerpt: 'Умные системы мониторинга и автоматизация ухода',
      image: 'https://cdn.poehali.dev/projects/f43e4824-755a-4572-b9af-dc827576d9a6/files/4fd4f735-acdb-4d56-b17e-b3e9074bbd0e.jpg'
    }
  ];

  useEffect(() => {
    const bubbles = document.querySelectorAll('.bubble');
    bubbles.forEach((bubble) => {
      const randomDelay = Math.random() * 5;
      const randomDuration = 8 + Math.random() * 4;
      (bubble as HTMLElement).style.animationDelay = `${randomDelay}s`;
      (bubble as HTMLElement).style.animationDuration = `${randomDuration}s`;
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 via-blue-50 to-teal-50">
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-20">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="bubble absolute bottom-0 bg-gradient-to-t from-cyan-300 to-blue-200 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${20 + Math.random() * 40}px`,
              height: `${20 + Math.random() * 40}px`,
              animation: 'bubble linear infinite',
            }}
          />
        ))}
      </div>

      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-cyan-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-4xl">🐠</div>
              <h1 className="text-2xl font-bold text-primary">Аквариумный Мир</h1>
            </div>
            <div className="hidden md:flex items-center gap-6">
              {['Главная', 'Каталог', 'Галерея', 'О нас', 'Блог'].map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveSection(item.toLowerCase())}
                  className={`font-medium transition-colors hover:text-primary ${
                    activeSection === item.toLowerCase() ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            <Button className="hidden md:flex gap-2">
              <Icon name="BookOpen" size={18} />
              Начать обучение
            </Button>
          </div>
        </div>
      </nav>

      {activeSection === 'home' && (
        <>
          <section className="relative py-24 px-4 overflow-hidden">
            <div className="container mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 animate-fade-in">
                  <Badge className="bg-secondary text-secondary-foreground">Обучающая платформа</Badge>
                  <h1 className="text-5xl md:text-6xl font-bold leading-tight text-foreground">
                    Погрузитесь в мир
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"> аквариумистики</span>
                  </h1>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Научитесь создавать и поддерживать здоровые аквариумные экосистемы с нашими пошаговыми руководствами
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button size="lg" className="gap-2 hover-scale" onClick={() => setActiveSection('каталог')}>
                      <Icon name="Library" size={20} />
                      Изучить материалы
                    </Button>
                    <Button size="lg" variant="outline" className="gap-2 hover-scale" onClick={() => setActiveSection('галерея')}>
                      <Icon name="Images" size={20} />
                      Галерея вдохновения
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-8 pt-6">
                    <div>
                      <div className="text-3xl font-bold text-primary">70+</div>
                      <div className="text-sm text-muted-foreground">Обучающих статей</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-secondary">500+</div>
                      <div className="text-sm text-muted-foreground">Фото примеров</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-accent">10k+</div>
                      <div className="text-sm text-muted-foreground">Учеников</div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl hover-scale transition-all duration-500">
                    <img
                      src="https://cdn.poehali.dev/projects/f43e4824-755a-4572-b9af-dc827576d9a6/files/56cae5ed-1724-4472-8275-2dc264bca668.jpg"
                      alt="Красивый аквариум"
                      className="w-full h-auto"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary rounded-full blur-3xl opacity-50" style={{ animation: 'float 6s ease-in-out infinite' }} />
                  <div className="absolute -top-6 -left-6 w-40 h-40 bg-primary rounded-full blur-3xl opacity-40" style={{ animation: 'float 8s ease-in-out infinite' }} />
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 px-4 bg-white/50 backdrop-blur-sm">
            <div className="container mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">Популярные категории</h2>
                <p className="text-muted-foreground text-lg">Выберите направление для изучения</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {categories.map((category) => (
                  <Card key={category.id} className="hover-scale cursor-pointer transition-all hover:shadow-xl border-2 hover:border-primary">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                          <Icon name={category.icon as any} className="text-primary" size={24} />
                        </div>
                        <Badge variant="secondary">{category.count}</Badge>
                      </div>
                      <CardTitle className="text-xl mt-4">{category.name}</CardTitle>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section className="py-20 px-4">
            <div className="container mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">Почему выбирают нас?</h2>
                <p className="text-muted-foreground text-lg">Комплексный подход к обучению</p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="text-center hover-scale transition-all">
                  <CardHeader>
                    <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                      <Icon name="GraduationCap" className="text-white" size={32} />
                    </div>
                    <CardTitle>Пошаговое обучение</CardTitle>
                    <CardDescription>
                      От новичка до эксперта с четкими инструкциями и визуальными примерами
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="text-center hover-scale transition-all">
                  <CardHeader>
                    <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center mb-4">
                      <Icon name="Users" className="text-white" size={32} />
                    </div>
                    <CardTitle>Сообщество</CardTitle>
                    <CardDescription>
                      Общайтесь с опытными аквариумистами и делитесь своими успехами
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="text-center hover-scale transition-all">
                  <CardHeader>
                    <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-4">
                      <Icon name="BookCheck" className="text-white" size={32} />
                    </div>
                    <CardTitle>Проверенные методы</CardTitle>
                    <CardDescription>
                      Все советы основаны на научных исследованиях и практическом опыте
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </section>
        </>
      )}

      {activeSection === 'каталог' && (
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="mb-12">
              <h1 className="text-5xl font-bold mb-4">Каталог материалов</h1>
              <p className="text-xl text-muted-foreground">Обучающие статьи и руководства для всех уровней</p>
            </div>

            <Tabs defaultValue="all" className="space-y-8">
              <TabsList className="bg-white/80 backdrop-blur">
                <TabsTrigger value="all">Все</TabsTrigger>
                <TabsTrigger value="care">Уход</TabsTrigger>
                <TabsTrigger value="fish">Рыбы</TabsTrigger>
                <TabsTrigger value="plants">Растения</TabsTrigger>
                <TabsTrigger value="equipment">Оборудование</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="space-y-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {articles.map((article) => (
                    <Card key={article.id} className="hover-scale cursor-pointer transition-all hover:shadow-xl overflow-hidden group">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-white/90 text-foreground backdrop-blur">{article.difficulty}</Badge>
                        </div>
                      </div>
                      <CardHeader>
                        <CardTitle className="group-hover:text-primary transition-colors">{article.title}</CardTitle>
                        <CardDescription>{article.description}</CardDescription>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground pt-2">
                          <div className="flex items-center gap-1">
                            <Icon name="Clock" size={14} />
                            {article.duration}
                          </div>
                          <div className="flex items-center gap-1">
                            <Icon name="BookOpen" size={14} />
                            Читать
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {['care', 'fish', 'plants', 'equipment'].map((cat) => (
                <TabsContent key={cat} value={cat} className="space-y-6">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {articles.filter(a => a.category === cat).map((article) => (
                      <Card key={article.id} className="hover-scale cursor-pointer transition-all hover:shadow-xl overflow-hidden group">
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute top-4 right-4">
                            <Badge className="bg-white/90 text-foreground backdrop-blur">{article.difficulty}</Badge>
                          </div>
                        </div>
                        <CardHeader>
                          <CardTitle className="group-hover:text-primary transition-colors">{article.title}</CardTitle>
                          <CardDescription>{article.description}</CardDescription>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground pt-2">
                            <div className="flex items-center gap-1">
                              <Icon name="Clock" size={14} />
                              {article.duration}
                            </div>
                            <div className="flex items-center gap-1">
                              <Icon name="BookOpen" size={14} />
                              Читать
                            </div>
                          </div>
                        </CardHeader>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>
      )}

      {activeSection === 'галерея' && (
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="mb-12">
              <h1 className="text-5xl font-bold mb-4">Галерея аквариумов</h1>
              <p className="text-xl text-muted-foreground">Вдохновляйтесь работами опытных аквариумистов</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gallery.map((item) => (
                <Card key={item.id} className="overflow-hidden hover-scale cursor-pointer transition-all group">
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                        <Badge className="bg-white/20 backdrop-blur border-white/40">{item.style}</Badge>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeSection === 'о нас' && (
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold mb-6">О нашем проекте</h1>
              <div className="text-6xl mb-6">🌊</div>
            </div>
            <Card className="p-8">
              <div className="space-y-6 text-lg leading-relaxed">
                <p>
                  <strong className="text-primary">Аквариумный Мир</strong> — это образовательная платформа, созданная энтузиастами и профессионалами аквариумистики для тех, кто хочет погрузиться в удивительный мир подводной жизни.
                </p>
                <p>
                  Наша миссия — сделать аквариумистику доступной для каждого, предоставляя качественные обучающие материалы, проверенные временем советы и поддержку сообщества единомышленников.
                </p>
                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-2xl">
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Icon name="Target" className="text-primary" />
                    Наши цели
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Icon name="CheckCircle2" className="text-secondary mt-1 flex-shrink-0" size={20} />
                      <span>Обучить основам аквариумистики более 50 000 человек</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="CheckCircle2" className="text-secondary mt-1 flex-shrink-0" size={20} />
                      <span>Создать крупнейшую базу знаний на русском языке</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="CheckCircle2" className="text-secondary mt-1 flex-shrink-0" size={20} />
                      <span>Объединить аквариумистов в активное сообщество</span>
                    </li>
                  </ul>
                </div>
                <p>
                  Мы верим, что каждый может создать красивый и здоровый аквариум, следуя правильным принципам и получая поддержку от опытных наставников.
                </p>
              </div>
            </Card>
          </div>
        </section>
      )}

      {activeSection === 'блог' && (
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="mb-12">
              <h1 className="text-5xl font-bold mb-4">Блог</h1>
              <p className="text-xl text-muted-foreground">Последние статьи и новости из мира аквариумистики</p>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              {blogPosts.map((post, index) => (
                <Card key={post.id} className={`overflow-hidden hover-scale cursor-pointer transition-all group ${index === 0 ? 'lg:col-span-2' : ''}`}>
                  <div className={`grid ${index === 0 ? 'lg:grid-cols-2' : ''} gap-0`}>
                    <div className={`relative ${index === 0 ? 'h-96' : 'h-64'} overflow-hidden`}>
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <CardHeader className={index === 0 ? 'flex flex-col justify-center' : ''}>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <Icon name="Calendar" size={14} />
                        {post.date}
                        <span>•</span>
                        <Icon name="User" size={14} />
                        {post.author}
                      </div>
                      <CardTitle className={`group-hover:text-primary transition-colors ${index === 0 ? 'text-3xl' : 'text-2xl'}`}>
                        {post.title}
                      </CardTitle>
                      <CardDescription className="text-base mt-2">{post.excerpt}</CardDescription>
                      <Button variant="link" className="p-0 h-auto mt-4 gap-2 justify-start">
                        Читать далее
                        <Icon name="ArrowRight" size={16} />
                      </Button>
                    </CardHeader>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      <footer className="bg-gradient-to-b from-primary/5 to-primary/10 py-16 px-4 mt-20">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="text-3xl">🐠</div>
                <h3 className="text-xl font-bold">Аквариумный Мир</h3>
              </div>
              <p className="text-muted-foreground">Ваш проводник в мире аквариумистики</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Разделы</h4>
              <div className="space-y-2">
                {['Главная', 'Каталог', 'Галерея', 'О нас', 'Блог'].map((item) => (
                  <button
                    key={item}
                    onClick={() => setActiveSection(item.toLowerCase())}
                    className="block text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Категории</h4>
              <div className="space-y-2 text-muted-foreground">
                <div>Уход за аквариумом</div>
                <div>Рыбы</div>
                <div>Растения</div>
                <div>Оборудование</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Связь</h4>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@aquaworld.ru
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (495) 123-45-67
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-primary/20 pt-8 text-center text-muted-foreground">
            <p>© 2024 Аквариумный Мир. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;