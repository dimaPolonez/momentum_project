# Проект: Momentum
## Ссылка: https://dimapolonez.github.io/momentum_project/
### О проекте
Приложение создано как клон приложения Momentum от Google.
Реализация приложения Momentum, со следующим функционалом:
<ol>
<li>Случайные обои с возможностью переключения, все обои берутся со стороннего API</li>
<li>Данные о погоде, настраиваемые, вся информация берется из стороннего API</li>
<li>Случайные цитаты, которые берутся из JSON файла</li>
<li>Текущая дата и время, в режиме online, с приветствием и возможностью при первом запуске приложения ввести своё имя. В дальнейшем оно будет сохранено</li>
<li>Обои и приветствие меняются автоматически в зависимости от времени суток, есть 4 интервала: с 00:00 до 05:59, с 06:00 до 11:59, c 12:00 до 17:59, с 18:00 до 23:59</li>
<li>Есть самописный проигрыватель с определенным стеком музыки, кнопками переключения и перемотки, ползунком громкости и кнопкой отключения звука</li>
<li>Есть настройки приложения в которых можно менять язык приложения, убирать различные блоки функционала, применять изменения или выбирать значения по умолчанию</li>
</ol>

### Стек технологий:
JS, CSS, HTML
### Заметки разработчика:
1. Весь проект реализован на обычном JS, верстки не много
2. Всё сделано через функциональное программирование, каждый функционал реализован в отдельном файле
3. Цитаты на разных языках берутся из заготовленных JSON, музыка из папки проекта, погода и обои из стороннего API
4. Все сохраненные пользовательские данные, хранятся в браузере пользователя в Local Storage
5. Настройки всех модулей, хранятся в отдельном файле в отдельном объекте
6. Никаких дополнительных библиотек не используется, интересный проект в плане разнообразия функционала
