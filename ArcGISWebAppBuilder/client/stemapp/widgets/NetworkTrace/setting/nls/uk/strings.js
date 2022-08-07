define({
  "taskUrl": "URL задачі",
  "setTask": "Задати",
  "setTaskPopupTitle": "Задати задачу",
  "validate": "Задати",
  "inValidGPService": "Введіть припустимий сервіс геообробки.",
  "noOutputParameterWithGeometryType": "Обраний сервіс геообробки повинен мати щонайменше один вихідний параметр із заданим типом геометрії. Оберіть інший сервіс геообробки.",
  "invalidOutputGeometry": "Вихідний тип геометрії обраного сервісу геообробки не сумісний з налаштуваннями проекту. Результати сервісу геообробки не можуть бути збережені.",
  "GPFeatureRecordSetLayerERR": "Введіть сервіс геообробки тільки з типом вхідних даних 'GPFeatureRecordSetLayer'.",
  "invalidInputParameters": "Число вхідних параметрів менше 1 або більше 3. Введіть припустимий сервіс геообробки.",
  "projectSetting": {
    "title": "Настройки проекту",
    "note": "Примітка: настройки проекту є опціональними, після налаштування користувач може зберегти проект в бажаних шарах веб-карти з областю відмови мережі та вхідними параметрами. Користувач може зберігати інші вихідні параметри з вкладки «Вивід».",
    "projectPolygonLayer": "Шар полігонів проекту",
    "outputParameterName": "Ім'я вихідного параметру",
    "projectPointLayer": "Шар точок проекту",
    "selectLabel": "Вибір",
    "polygonLayerHelp": "<p>Буде показано шар(-и) полігонів з наступними умовами:<br/><ul><li>Шар повинен мати можливості редагування, а саме «Створити», «Видалити» й «Оновити»</li><li>Шар повинен мати 2 поля з точним іменем та типом даних:</li><ul><li>ім'я (поле рядкового типу)</li><li>globalid (поле типу GlobalID)</li></ul></ul><p/>",
    "outputParameterHelp": "<p>Буде показано вихідний шар(и) полігонів з URL задачі<p/>",
    "pointLayerHelp": "<p>Буде показано шар(-и) точок з наступними умовами: <br/><ul><li>Шар повинен мати можливості редагування, а саме «Створити», «Видалити» й «Оновити»</li><li>Шар повинен мати 2 поля з точним іменем та типом даних:</li><ul><li>типвводу(поле рядкового типу)</li><li>ідентифікаторпроекту (поле типу GUID)</li></ul></ul><p/>"
  },
  "inputOutputTab": {
    "flag": "Прапор",
    "barrier": "Бар’єр",
    "skip": "Пропустити",
    "title": "Введення",
    "inputTooltip": "Підказка інструменту",
    "typeText": "Тип",
    "symbol": "Символ",
    "summaryEditorText": "Текст короткої інформації",
    "summaryTextTitle": "Введіть текст для відображення у вкладці \"Ввід\""
  },
  "summaryTab": {
    "title": "Виведення",
    "summaryFieldsetText": "Настройки короткої інформації",
    "inputOutput": "Ввід/вивід",
    "field": "Поле",
    "operator": "Оператор",
    "inputOperatorCountOption": "Кількість",
    "outputOperatorCountOption": "Кількість",
    "outputOperatorSkipCountOption": "SkipCount",
    "fieldOperatorSumOption": "Сума",
    "fieldOperatorMinOption": "Мін.",
    "fieldOperatorMaxOption": "Макс.",
    "fieldOperatorMeanOption": "Середнє",
    "expressionAddButtonText": "Додавання",
    "expressionVerifyButtonText": "Перевірити",
    "summaryEditorText": "Текст короткої інформації",
    "zoomText": "Автоматичне масштабування після трасування",
    "summarSettingTooltipText": "Додати вхідний/вихідний рахунок",
    "symbol": "Символ",
    "outputParametersText": "Вихідні параметри",
    "skipText": "Можна пропустити",
    "visibilityText": "Видимий",
    "exportToCsvText": "Експорт в CSV",
    "settitngstext": "Налаштування",
    "saveToLayerText": "Зберегти в шар (опціонально)",
    "inputLabel": "Напис",
    "inputTooltip": "Підказка інструменту",
    "outputDisplay": "Текст відображення",
    "addFieldTitle": "Додати поле",
    "setScale": "Задати масштаб",
    "enterDisplayText": "Ввести текст відображення",
    "saveToLayerHelp": "<p>Буде показано шар з наступними умовами:<br/><ul><li>Шар повинен мати можливості редагування, а саме «Створити», «Видалити» й «Оновити»</li><li>Шар повинен мати два поля з іменем і типом даних:</li><ul><li>ім'япараметра (поле рядкового типу)</li><li>ідентифікаторпроекту (поле типу Guid)</li></ul></ul><p/>",
    "exportToCsvDisplayText": "CSV",
    "summaryTextTitle": "Введіть текст короткої інформації для відображення у вкладці \"Вивід\"",
    "addSummaryItemsTitle": "Додати зведену інформацію по елементах"
  },
  "validationErrorMessage": {
    "webMapError": "На веб-карті немає доступних шарів. Виберіть припустиму веб-карту.",
    "inputTypeFlagGreaterThanError": "Вхідне значення прапору типу не може становити більше одного.",
    "inputTypeFlagLessThanError": "Потрібне щонайменше одне вхідне значення прапору типу.",
    "inputTypeBarrierErr": "Вхідне значення бар'єру типу не може становити більше одного.",
    "inputTypeSkipErr": "Вхідне значення пропуску типу не може становити більше одного.",
    "displayTextForButtonError": "Текст відображення для кнопки «Виконати» не може бути пустим.",
    "UnableToLoadGeoprocessError": "Не вдалося завантажити сервіс геообробки.",
    "invalidSummaryExpression": "Неприпустимий вираз.",
    "validSummaryExpression": "Успішно !",
    "invalidProjectSettings": "Неприпустимі настройки проекту<br/> Виберіть припустиме значення в '${projectSetting}'."
  },
  "hintText": {
    "labelTextHint": "Підказка: надайте відображуваний напис для панелі результату вихідного параметра.",
    "displayTextHint": "Підказка: він відображатиметься в панелі докладної інформації для цього вхідного параметру.",
    "inputTextHint": "Підказка: побудуйте власний вираз нижче за допомогою кнопки \"Додати зведену інформацію по елементах\".",
    "expressionHint": "Підказка: виберіть елементи та клацніть «додати», щоб побудувати вираз."
  }
});