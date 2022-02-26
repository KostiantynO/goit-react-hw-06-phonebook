## Подготовка нового проекта

1. [x] Убедись что на компьютере установлена LTS-версия Node.js.
       [Скачай и установи](https://nodejs.org/en/) её если необходимо.
   ```shell
   $ node -v
   v16.14.0
   ```
2. [x] Склонируй этот репозиторий. // Сделал zip.
3. [x] Измени имя папки с `react-homework-template` на имя своего проекта.
4. [x] Создай новый пустой репозиторий на GitHub.
5. [x] Открой проект в VSCode, запусти терминал и свяжи проект с
       GitHub-репозиторием
       [по инструкции](https://docs.github.com/en/get-started/getting-started-with-git/managing-remote-repositories#changing-a-remote-repositorys-url).

```shell
gra "${myGit}goit-react-hw-06-phonebook.git"
grv
origin  https://github.com/KostiantynO/}goit-react-hw-06-phonebook.git (fetch)
origin  https://github.com/KostiantynO/}goit-react-hw-06-phonebook.git (push)

git remote set-url origin "${myGit}goit-react-hw-06-phonebook.git"
grv
origin  https://github.com/KostiantynO/goit-react-hw-06-phonebook.git (fetch)
origin  https://github.com/KostiantynO/goit-react-hw-06-phonebook.git (push)
```

6. [x] Установи базовые зависимости проекта командой `npm install`.
7. [x] Запусти режим разработки, выполнив команду `npm start`.
8. [x] Перейди в браузере по адресу
       [http://localhost:3000](http://localhost:3000). Эта страница будет
       автоматически перезагружаться после сохранения изменений в файлах
       проекта.

`package.json`

```json
  "homepage": "https://KostiantynO.github.io/goit-react-hw-06-phonebook/",
```

Используй этот
[шаблон React-проекта](https://github.com/goitacademy/react-homework-template#readme)
как стартовую точку своего приложения.

# Критерии приема

- [x] Создан репозиторий `goit-react-hw-06-phonebook`
- [x] При сдаче домашней работы есть ссылки: на исходные файлы и рабочую
      страницу проекта на `GitHub Pages` или `Netlify`
- [ ] В Redux-состоянии хранится минимально необходимый набор данных
- [ ] При запуске кода задания, в консоли нету ошибок и предупреждений
- [ ] Для каждого компонента есть отдельная папка с файлом React-компонента и
      файлом стилей
- [ ] Для компонентов описаны `propTypes`
- [ ] Использована библиотека `Redux Toolkit`

## Телефонная книга

Выполни рефакторинг кода приложения «Телефонная книга» добавив управление
состоянием при помощи библиотеки [Redux Toolkit](https://redux-toolkit.js.org/).

Пусть Redux-состояние выглядит следующим образом.

```bash
{
  contacts: {
    items: [],
    filter: ''
  }
}
```

- Создай хранилище с `configureStore()`
- Создай действия сохранения и удаления контакта, а также обновления фильтра.
  Используй функцию `createAction()`.
- Создай редюсеры контактов и фильтра. Используй функцию `createReducer()` или
  `createSlice()`.
- Свяжи React-компоненты с Redux-логикой при помощи хуков бибилиотеки
  [react-redux](https://react-redux.js.org/).
