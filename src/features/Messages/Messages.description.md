# ОСОБЕННОСТЬ: Messages

### ОПИСАНИЕ

Получение всех существующих сообщений автора из блок-чейн сети

### РЕШАЕМЫЕ ПРОБЛЕМЫ

Менеджер не может узнать историю транзакций сам, так как необходимо иметь навыки программиста для запроса истории с сервера

### ТРЕБОВАНИЯ

Поиск необходимых транзакций должен осуществляться через веб-интерфейс

### ОГРАНИЧЕНИЯ

Необходимо получать информацию через существующий интерфейс сервера

### МЕТРИКИ

Пользователь может получить через веб-интерфейс:
Список всех транзакций;
Список всех транзакций конкретного пользователя;

### ВАРИАНТЫ РЕАЛИЗАЦИИ

1) Получать все записи с сервера и работать с ними на клиенте
2) Получать только выборку по данным с сервера

### КОНТЕКСТ ВЫБОРА ВАРИАНТА

Количество транзакций 0 < n < 1000000
Быстродействие на клиенте не критично, это внутренний продукт
Высокой нагрузки на клиенте не будет, это внутренний продукт

### ВЫБРАННЫЙ ВАРИАНТ

Надо бы добавить :)

### ПРИЧИНЫ ВЫБОРА ВАРИАНТА

Выбран вариант 2, по причине того, что так Игорь предложил, а мы уважили