# ReactBank-Credit-Cards

Основные инструменты: React, TypeScript, Redux, CSS Modules, React-router-dom.

Реализована возможность просмотра списка банковских продуктов, которые есть у пользователя. Продукты - это дебетовые и кредитные карты, вклады, кредиты, а также привязанные карты сторонних банков. 

Вся информация о продукте содержится в объекте `mocks/accountsMock.json` и `mocks/operationsMock.json`

Добавлена форма привязки карты стороннего банка.



## Пример работы приложения

![App Screenshot](https://raw.githubusercontent.com/Uplerika/ReactBank-Credit-Cards/main/public/hm2-example.gif)


## Функционал

- **Типизирование компонентов**: TypeScript;
- **Стили**: CSS Modules
- **Сортировка карт**: дебетовые (debit) => кредитные (credit) => карты сторонних банков (external) => вклады (saving) => кредиты (loan);
- **Сортировка валют**: RUB => USD => EUR => GBP;
- **Маршрутизация**: [react-router-dom];
- **NotFoundPage**;
- **Хранения данных**: Redux, для асинхронных actions используется `redux-thunk`.
- Реализована возможность переименования аккаунтов пользователя (изменение customTitle). Также можно удалять привязанные карты.
-![пример работы приложения](https://raw.githubusercontent.com/Uplerika/ReactBank-Credit-Cards/main/public/hm3-example.gif)



 
