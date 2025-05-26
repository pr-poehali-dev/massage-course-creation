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
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Hero Section - Large Bento Box */}
      <section className="p-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-4 auto-rows-[120px]">
            {/* Main Hero - Large Box */}
            <div className="col-span-12 md:col-span-8 row-span-4 bg-gradient-to-br from-amber-100 to-orange-100 rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <Badge className="bg-amber-200 text-amber-800 border-none">
                  Домашний курс массажа
                </Badge>
              </div>
              <div className="h-full flex flex-col justify-center">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4 leading-tight">
                  Курс массажа
                  <br />
                  <span className="text-amber-700">«Проснись»</span>
                </h1>
                <p className="text-lg text-gray-600 mb-6 max-w-md">
                  Мягкий домашний курс от Аргишта Мамреяна. Научитесь делать
                  расслабляющий массаж для себя и близких
                </p>
                <Button
                  size="lg"
                  className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 w-fit"
                >
                  Начать обучение 🌟
                </Button>
              </div>
            </div>

            {/* Stats Box */}
            <div className="col-span-12 md:col-span-4 row-span-2 bg-gradient-to-br from-orange-100 to-red-100 rounded-3xl p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">12</h3>
              <p className="text-gray-600">видео-уроков</p>
              <div className="mt-4">
                <div className="text-lg font-semibold text-orange-700">
                  6 месяцев
                </div>
                <p className="text-sm text-gray-600">доступа к курсу</p>
              </div>
            </div>

            {/* Price Box */}
            <div className="col-span-12 md:col-span-4 row-span-2 bg-gradient-to-br from-red-100 to-pink-100 rounded-3xl p-6 text-center">
              <div className="line-through text-gray-400 text-lg">9 990 ₽</div>
              <div className="text-3xl font-bold text-red-700">4 990 ₽</div>
              <Badge className="bg-red-200 text-red-800 border-none mt-2">
                -50%
              </Badge>
            </div>

            {/* Format Cards */}
            <div className="col-span-12 md:col-span-4 row-span-3 bg-gradient-to-br from-green-100 to-teal-100 rounded-3xl p-6">
              <div className="text-3xl mb-3">🏠</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Домашний формат
              </h3>
              <p className="text-gray-600 text-sm">
                Изучайте в комфортной обстановке в удобном темпе
              </p>
            </div>

            <div className="col-span-12 md:col-span-4 row-span-3 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl p-6">
              <div className="text-3xl mb-3">💆‍♀️</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Мягкие техники
              </h3>
              <p className="text-gray-600 text-sm">
                Безопасные и эффективные техники для расслабления
              </p>
            </div>

            <div className="col-span-12 md:col-span-4 row-span-3 bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-6">
              <div className="text-3xl mb-3">👨‍🏫</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Опытный наставник
              </h3>
              <p className="text-gray-600 text-sm">
                Аргишт Мамреян — массажист с многолетним опытом
              </p>
            </div>

            {/* Benefits Section */}
            <div className="col-span-12 md:col-span-6 row-span-4 bg-gradient-to-br from-yellow-100 to-amber-100 rounded-3xl p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Что вы получите
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-xl">🎥</span>
                  <div>
                    <h4 className="font-semibold text-gray-800">Видео-уроки</h4>
                    <p className="text-sm text-gray-600">
                      Подробные демонстрации техник
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xl">📋</span>
                  <div>
                    <h4 className="font-semibold text-gray-800">Методички</h4>
                    <p className="text-sm text-gray-600">
                      Схемы массажных движений
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xl">💬</span>
                  <div>
                    <h4 className="font-semibold text-gray-800">Поддержка</h4>
                    <p className="text-sm text-gray-600">Ответы на вопросы</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xl">🏆</span>
                  <div>
                    <h4 className="font-semibold text-gray-800">Сертификат</h4>
                    <p className="text-sm text-gray-600">О прохождении курса</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonials */}
            <div className="col-span-12 md:col-span-6 row-span-2 bg-gradient-to-br from-rose-100 to-pink-100 rounded-3xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-rose-200 rounded-full flex items-center justify-center">
                  <span className="text-rose-700 font-semibold">М</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Мария</p>
                  <p className="text-sm text-gray-500">Москва</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm italic">
                "Замечательный курс! Научилась делать расслабляющий массаж
                мужу."
              </p>
            </div>

            <div className="col-span-12 md:col-span-6 row-span-2 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-3xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-teal-200 rounded-full flex items-center justify-center">
                  <span className="text-teal-700 font-semibold">А</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Алексей</p>
                  <p className="text-sm text-gray-500">Санкт-Петербург</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm italic">
                "Курс превзошел ожидания. Теперь могу помочь себе снять
                напряжение."
              </p>
            </div>

            {/* CTA Section */}
            <div className="col-span-12 md:col-span-8 row-span-3 bg-gradient-to-br from-amber-200 to-orange-200 rounded-3xl p-8 flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Начните обучение сегодня
              </h2>
              <p className="text-gray-600 mb-6">
                Специальная цена действует ограниченное время
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-amber-600 hover:bg-amber-700 text-white"
                >
                  Купить курс за 4 990 ₽ 💳
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-amber-300 text-amber-700 hover:bg-amber-100"
                >
                  Задать вопрос 📱
                </Button>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                Безопасная оплата • Гарантия возврата 14 дней
              </p>
            </div>

            {/* Contact Info */}
            <div className="col-span-12 md:col-span-4 row-span-3 bg-gradient-to-br from-stone-100 to-neutral-100 rounded-3xl p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Контакты</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span>📧</span>
                  <span className="text-sm text-gray-600">
                    info@massage-course.ru
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span>📱</span>
                  <span className="text-sm text-gray-600">Telegram</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>⏰</span>
                  <span className="text-sm text-gray-600">
                    Поддержка 9:00-21:00
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 bg-stone-800 text-white text-center">
        <p>© 2024 Курс массажа «Проснись» • Аргишт Мамреян</p>
        <p className="text-stone-400 text-sm mt-2">
          Забота о здоровье начинается с знаний
        </p>
      </footer>
    </div>
  );
};

export default Index;
