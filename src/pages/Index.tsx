import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50 to-white">
      {/* Hero Section */}
      <section className="relative px-6 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge
            variant="secondary"
            className="mb-6 bg-violet-100 text-violet-700"
          >
            Домашний курс массажа
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Курс массажа
            <br />
            <span className="text-violet-600">«Проснись»</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Мягкий домашний курс от Аргишта Мамреяна. Научитесь делать
            расслабляющий массаж для себя и близких в уютной домашней обстановке
          </p>
          <Button
            size="lg"
            className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-4 text-lg"
          >
            Начать обучение 🌟
          </Button>
        </div>
      </section>

      {/* About Course */}
      <section className="px-6 py-16 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            О курсе
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg bg-white/80 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-violet-600">
                  🏠 Домашний формат
                </CardTitle>
                <CardDescription>
                  Изучайте в комфортной домашней обстановке в удобном для вас
                  темпе
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-none shadow-lg bg-white/80 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-violet-600">
                  💆‍♀️ Мягкие техники
                </CardTitle>
                <CardDescription>
                  Безопасные и эффективные техники массажа для расслабления и
                  восстановления
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-none shadow-lg bg-white/80 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-violet-600">
                  👨‍🏫 Опытный наставник
                </CardTitle>
                <CardDescription>
                  Аргишт Мамреян — практикующий массажист с многолетним опытом
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">
            Что вы получите
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-left">
              <h3 className="text-2xl font-semibold text-violet-600 mb-4">
                🎥 Видео-уроки
              </h3>
              <p className="text-gray-600">
                Подробные видео с демонстрацией всех техник массажа
              </p>
            </div>
            <div className="text-left">
              <h3 className="text-2xl font-semibold text-violet-600 mb-4">
                📋 Методички
              </h3>
              <p className="text-gray-600">
                Практические руководства и схемы массажных движений
              </p>
            </div>
            <div className="text-left">
              <h3 className="text-2xl font-semibold text-violet-600 mb-4">
                💬 Поддержка
              </h3>
              <p className="text-gray-600">
                Персональная поддержка и ответы на вопросы
              </p>
            </div>
            <div className="text-left">
              <h3 className="text-2xl font-semibold text-violet-600 mb-4">
                🏆 Сертификат
              </h3>
              <p className="text-gray-600">Сертификат о прохождении курса</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-16 bg-peach-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Отзывы студентов
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4 italic">
                  "Замечательный курс! Научилась делать расслабляющий массаж
                  мужу. Очень понятные объяснения и мягкий подход."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-violet-600 font-semibold">М</span>
                  </div>
                  <div>
                    <p className="font-semibold">Мария</p>
                    <p className="text-sm text-gray-500">Москва</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4 italic">
                  "Курс превзошел ожидания. Теперь могу помочь себе снять
                  напряжение после работы. Спасибо Аргишту!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-violet-600 font-semibold">А</span>
                  </div>
                  <div>
                    <p className="font-semibold">Алексей</p>
                    <p className="text-sm text-gray-500">Санкт-Петербург</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="px-6 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Начните обучение сегодня
          </h2>
          <Card className="border-2 border-violet-200 shadow-xl">
            <CardHeader>
              <Badge
                variant="secondary"
                className="mx-auto mb-4 bg-violet-100 text-violet-700"
              >
                Специальная цена
              </Badge>
              <CardTitle className="text-3xl text-violet-600">
                4 990 ₽
              </CardTitle>
              <CardDescription className="text-lg">
                <span className="line-through text-gray-400">9 990 ₽</span> —
                скидка 50%
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="text-left space-y-2 text-gray-600">
                <li>✓ 12 видео-уроков</li>
                <li>✓ Практические методички</li>
                <li>✓ Поддержка наставника</li>
                <li>✓ Сертификат о прохождении</li>
                <li>✓ Доступ на 6 месяцев</li>
              </ul>
              <Button
                size="lg"
                className="w-full bg-violet-600 hover:bg-violet-700 text-white py-4"
              >
                Купить курс за 4 990 ₽ 💳
              </Button>
              <p className="text-sm text-gray-500">
                Безопасная оплата • Гарантия возврата 14 дней
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Остались вопросы?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Свяжитесь с нами и мы поможем выбрать подходящий формат обучения
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              size="lg"
              className="border-violet-200 text-violet-600 hover:bg-violet-50"
            >
              📧 Написать на почту
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-violet-200 text-violet-600 hover:bg-violet-50"
            >
              📱 Telegram
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 bg-gray-900 text-white text-center">
        <p>© 2024 Курс массажа «Проснись» • Аргишт Мамреян</p>
        <p className="text-gray-400 text-sm mt-2">
          Забота о здоровье начинается с знаний
        </p>
      </footer>
    </div>
  );
};

export default Index;
