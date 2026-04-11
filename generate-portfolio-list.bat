@echo off
setlocal enabledelayedexpansion

REM Путь к директории с миниатюрами (измените, если нужно)
set "thumbDir=src\images\portfolio\thumb"

REM Выходной файл для списка (будет создан в корне проекта)
set "outputFile=portfolio-list.txt"

REM Проверяем, существует ли директория
if not exist "%thumbDir%" (
    echo Ошибка: Директория %thumbDir% не найдена.
    pause
    exit /b 1
)

REM Создаём временный файл для списка имён
set "tempFile=temp-names.txt"
if exist "%tempFile%" del "%tempFile%"

REM Получаем список .jpg файлов и извлекаем имена без расширения
for %%f in ("%thumbDir%\*.webp") do (
    echo %%~nf >> "%tempFile%"
)

REM Проверяем, есть ли файлы
if not exist "%tempFile%" (
    echo В директории %thumbDir% не найдено .webp файлов.
    pause
    exit /b 1
)

REM Генерируем массив в формате JavaScript
echo const portfolioImageNames = [ > "%outputFile%"
set "first=1"
for /f "delims=" %%a in (%tempFile%) do (
    if defined first (
        echo  "%%a">> "%outputFile%"
        set "first="
    ) else (
        echo ,"%%a">> "%outputFile%"
    )
)
echo ]; >> "%outputFile%"

REM Удаляем временный файл
del "%tempFile%"

echo Список имён фотографий без расширений сгенерирован в файле: %outputFile%
echo Скопируйте содержимое этого файла и замените массив в main.js.
pause