import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const pets = [
    {
      id: 1,
      name: "Золотко",
      breed: "Золотистый ретривер",
      age: "2 года",
      image: "/img/8d715b3a-55dc-44da-9f14-882e8a8abffa.jpg",
      owner: "Анна К.",
      donations: 15420,
      status: "В поиске виртуального хозяина"
    },
    {
      id: 2,
      name: "Снежинка",
      breed: "Персидская кошка",
      age: "3 года",
      image: "/img/f82f72db-cf08-4ddf-9f57-df407edb0c74.jpg",
      owner: "Михаил Р.",
      donations: 8750,
      status: "Активно общается"
    },
    {
      id: 3,
      name: "Рыжик",
      breed: "Домашний котёнок",
      age: "6 месяцев",
      image: "/img/308f44a1-d65e-4ad6-8574-1c133814d17b.jpg",
      owner: "Елена В.",
      donations: 3200,
      status: "Новичок на платформе"
    }
  ];

  const gifts = [
    { name: "Премиум корм", price: 500, icon: "Package" },
    { name: "Игрушка", price: 200, icon: "Gamepad2" },
    { name: "Лакомство", price: 150, icon: "Cookie" },
    { name: "Ветеринар", price: 1500, icon: "Stethoscope" }
  ];

  return (
    <div className="min-h-screen bg-background font-open-sans">
      {/* Navigation */}
      <nav className="border-b border-border bg-card/50 backdrop-blur">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src="/img/53eaa0a4-284c-4248-a288-84c9dc0b20bb.jpg" alt="SatoPet Logo" className="w-10 h-10 rounded-lg" />
              <span className="text-2xl font-inter font-bold text-foreground">SatoPet</span>
            </div>
            
            <div className="hidden md:flex space-x-6">
              <a href="#" className="text-foreground hover:text-primary transition-colors">Главная</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">Питомцы</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">Профили</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">Донаты</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">Подарки</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">Чат</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">Помощь</a>
            </div>
            
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                <Icon name="LogIn" size={16} className="mr-2" />
                Войти
              </Button>
              <Button size="sm">
                <Icon name="UserPlus" size={16} className="mr-2" />
                Регистрация
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-inter font-bold text-foreground mb-6">
            SatoPet
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Любовь и забота в один клик
          </p>
          <p className="text-lg text-muted-foreground mb-10 max-w-3xl mx-auto">
            Станьте виртуальным хозяином питомца. Общайтесь с реальными владельцами, 
            отправляйте донаты и подарки своим любимцам.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-4">
              <Icon name="Search" size={20} className="mr-2" />
              Найти питомца
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              <Icon name="PlusCircle" size={20} className="mr-2" />
              Добавить питомца
            </Button>
          </div>
        </div>
      </section>

      {/* Popular Pets Section */}
      <section className="py-16 px-4 bg-secondary/20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-inter font-semibold text-center mb-12">
            Популярные питомцы
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pets.map((pet) => (
              <Card key={pet.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={pet.image} 
                    alt={pet.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl font-inter">{pet.name}</CardTitle>
                    <Badge variant="secondary" className="text-xs">
                      {pet.status}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {pet.breed} • {pet.age}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Хозяин: {pet.owner}
                  </p>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-muted-foreground">Собрано донатов:</span>
                    <span className="font-semibold text-primary">
                      {pet.donations.toLocaleString()} ₽
                    </span>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button size="sm" className="flex-1">
                      <Icon name="Heart" size={16} className="mr-2" />
                      Усыновить
                    </Button>
                    <Button variant="outline" size="sm">
                      <Icon name="MessageCircle" size={16} />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Icon name="Gift" size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Donations & Gifts Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Donations */}
            <div>
              <h2 className="text-3xl font-inter font-semibold mb-8 text-center">
                Поддержите донатом
              </h2>
              
              <Card className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <Button variant="outline" className="h-16 text-lg font-semibold">
                    100 ₽
                  </Button>
                  <Button variant="outline" className="h-16 text-lg font-semibold">
                    300 ₽
                  </Button>
                  <Button variant="outline" className="h-16 text-lg font-semibold">
                    500 ₽
                  </Button>
                  <Button className="h-16 text-lg font-semibold">
                    1000 ₽
                  </Button>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Всего донатов сегодня:</span>
                    <span className="font-semibold text-primary">27,340 ₽</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Помогли питомцам:</span>
                    <span className="font-semibold">156</span>
                  </div>
                </div>
              </Card>
            </div>

            {/* Gifts */}
            <div>
              <h2 className="text-3xl font-inter font-semibold mb-8 text-center">
                Отправить подарок
              </h2>
              
              <div className="space-y-3">
                {gifts.map((gift, index) => (
                  <Card key={index} className="p-4 hover:shadow-md transition-shadow cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Icon name={gift.icon as any} size={20} className="text-primary" />
                        </div>
                        <span className="font-medium">{gift.name}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="font-semibold text-primary">{gift.price} ₽</span>
                        <Button size="sm">
                          <Icon name="ShoppingCart" size={16} />
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chat Section */}
      <section className="py-16 px-4 bg-secondary/20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-inter font-semibold mb-6">
            Общайтесь с хозяевами
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Узнавайте, как поживает ваш виртуальный питомец. Получайте фото и видео, 
            следите за его успехами и радуйтесь вместе.
          </p>
          
          <Card className="max-w-md mx-auto p-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                  АК
                </div>
                <div className="flex-1 text-left">
                  <p className="text-sm font-medium">Анна К.</p>
                  <p className="text-xs text-muted-foreground">5 мин назад</p>
                </div>
              </div>
              
              <div className="bg-muted p-3 rounded-lg text-left">
                <p className="text-sm">
                  Золотко сегодня очень активный! Спасибо за игрушку 🎾
                  Он так рад новому мячику!
                </p>
              </div>
              
              <Button className="w-full">
                <Icon name="MessageCircle" size={16} className="mr-2" />
                Открыть чат
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-secondary/40">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src="/img/53eaa0a4-284c-4248-a288-84c9dc0b20bb.jpg" alt="SatoPet Logo" className="w-8 h-8 rounded-md" />
                <span className="text-xl font-inter font-bold">SatoPet</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Любовь и забота в один клик
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Разделы</h4>
              <div className="space-y-2 text-sm">
                <p><a href="#" className="text-muted-foreground hover:text-primary">Питомцы</a></p>
                <p><a href="#" className="text-muted-foreground hover:text-primary">Профили</a></p>
                <p><a href="#" className="text-muted-foreground hover:text-primary">Донаты</a></p>
                <p><a href="#" className="text-muted-foreground hover:text-primary">Подарки</a></p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Поддержка</h4>
              <div className="space-y-2 text-sm">
                <p><a href="#" className="text-muted-foreground hover:text-primary">Помощь</a></p>
                <p><a href="#" className="text-muted-foreground hover:text-primary">Контакты</a></p>
                <p><a href="#" className="text-muted-foreground hover:text-primary">FAQ</a></p>
                <p><a href="#" className="text-muted-foreground hover:text-primary">Условия</a></p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Связь</h4>
              <div className="flex space-x-3">
                <Button variant="outline" size="sm">
                  <Icon name="Mail" size={16} />
                </Button>
                <Button variant="outline" size="sm">
                  <Icon name="Phone" size={16} />
                </Button>
                <Button variant="outline" size="sm">
                  <Icon name="MessageSquare" size={16} />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2024 SatoPet. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;