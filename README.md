# ![alt text](https://raw.githubusercontent.com/DanilovM/SBOLTypographJS/master/img/favicon.png) SBOL Typograph JS

JavaScript типограф для исправления и форматирования текста на основе правил типографики со встроенным Ёфикатором.

* Заменит букву «е» на «ё» в словах, где она должна употребляться. 
* Автоматически расставит неразрывные пробелы и уберёт висячие предлоги и союзы. 
* Исправит "простые кавычки" на «ёлочки» и „лапки“, а знак минуса на дефис, длинное или среднее тире. 
* Разобьёт длинные числа перед знаком валюты по разрядам и заменит в них точку на запятую. 
* Приведёт телефонные номера к нужному формату. 

### [SBOL Typograph JS в действии :rocket:](https://danilovm.github.io/SBOLTypographJS/)

    
    
## Правила, используемые типографом

#### Ёфикатор

* Замена буквы *е* на *ё* в словах, где она должна употребляться 


#### Кавычки

* Замена "простых кавычек" на «ёлочки» и „лапки“ ```«„Как это скучно!“ — воскликнул я невольно»```


#### Телефонные номера

* Приведение российских телефонных номеров к правильному формату ```Федеральный номер: 8 (800) 555-55-50 Городской номер: +7 (495) 500-55-50, +7 (4212) 79-40-35```

#### Тире

* В начале строки или предложения, длинное тире + неразрывный пробел ```— Это я, почтальон Печкин.```
* Для диапазонов месяцев и дней недели используем среднее тире без пробелов ```январь–март, понедельник–суббота```
* Внутри текста используем неразрывный пробел + длинное тире ```А гений и злодейство — две вещи несовместные```
* Для диапазонов чисел используем среднее тире без пробелов ```2002–2009, XI–XII```

#### Пунктуация

* Замена *!?* на *?!*
* Замена *...?* на *?‥* и *...!* на *!‥*
* Замена *?...* на *?‥* и *!...* на *!‥*
* Замена *...* на знак многоточия *…*
* Заменяем несколько знаков *? ! . , ; : -* на один ```Готово!!! ⟶ Готово!```
* Перенос точки за закрывающуюся кавычку

#### Лишние пробелы

* Удаление пробела после *« „ ( [*
* Удаление пробела перед *. … : , ; ? ! » “ "" ) ]*
* Удаление пробела между числом и *%* ```23%```
* Удаление пробелов в начале и конце строки
* Удаление двойных пробелов


#### Числа перед знаком валюты

* Разбивка длинных чисел по разрядам ```2345123 $ ⟶ 2 345 123 $```
* Замена в числах точки на запятую ```143.56 $ ⟶ 143,56 $```
* После тыс. должна быть точка, а после млн, млрд, трлн точки быть не должно ```5 тыс., 2 млн, 1 млрд, 3 трлн```


#### Валюта

* Замена *USD* и *EUR* на *$* и *€* ```20usd ⟶ 20 $```
* Замена *Р, р., руб., RUR, RUB* на *₽* ```789 руб. ⟶ 789 ₽```
* Перенос копеек в основную сумму ```45 руб. 5 коп. ⟶ 45,05 ₽```
* Перенос знака валюты после цифр и отделение его неразрывным пробелом ```$ 109 ⟶ 109 $, 109$ ⟶ 109 $```

#### Неразрывный пробел

* Неразрывный пробел между инициалами и фамилией. Инициалы слитно, затем неразрывный пробел и фамилия. Или фамилия, неразрывный пробел и слитно инициалы. ```А.А. Иванов, Петров К.П.```
* Неразрывные пробелы между словом и *и т.д., и т.п., и др.*
* Неразрывный пробел между числом и следующим словом
* Неразрывный пробел перед *б, бы, ж, же, ли, ль*
* Неразрывный пробел перед последним коротким словом в предложении или одиночной строке
* Неразрывный пробел после короткого слова
* Неразрывный пробел после *г., обл., кр., ст., пос., с., д., ул., пер., пр., пр-т., просп., пл., бул., б-р., наб., ш., туп., оф., кв., комн., под., мкр., уч., вл., влад., стр., корп., литер, эт., пгт., стр., гл., рис., илл., ст., п., c., а, б, без, безо, будто, бы, в, во, ведь, вне, вот, всё, где, да, даже, для, до, если, есть, ещё, же, за, и, из, изо, из-за, из-под, или, иль, к, ко, как, ли, ли, либо, между, на, над, надо, не, ни, но, о, об, обо, около, оно, от, ото, перед, по, по-за, по-над, под, подо, после, при, про, ради, с, со, сквозь, так, также, там, тем, то, тогда, того, тоже, у, хоть, хотя, чего, через, что, чтобы, это, №, §, АО, ОАО, ЗАО, ООО, ПАО*


#### Строчные буквы

* Слова *вы, банк, приложение, условия, сайт* — со строчной буквы. С прописной буквы — если слово первое в предложении.


#### Разное

* Правильное написание *Mastercard, Visa, Мир, Google Pay, Apple Pay, Push-уведомления, ПИН-код, QR-код, сим-карта, СVV-код, СVС-код, СVV2-код, СVС2-код, CVV, CVC, СМС, Wi-Fi, email, офлайн, онлайн, мск*

