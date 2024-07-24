<h1>Rozpoczęcie Pracy</h1>

## Wymagania

### Znajomość Języka Angielskiego

Deweloperzy pochodzą z całego świata; jeśli mówisz po angielsku, będziesz w stanie współpracować z każdym.

Nie musisz być biegły w angielskim ani mieć doskonałej znajomości tego języka, ale musisz rozumieć angielski na tyle, aby móc się komunikować.

[](#git)

### Znajomość Git

Git to system kontroli wersji, którego używamy do śledzenia zmian. Korzystamy z niego cały czas i wszędzie.

```suggestion
Jeśli nie znasz Git, zatrzymaj się na chwilę i poznaj go.

Aby nauczyć się Git, odwiedź [Dokumentację GitHub](https://docs.github.com/en/get-started/quickstart/set-up-git).

Upewnij się, że znasz pojęcia takie jak commity, gałęzie, zdalne repozytoria, przywracanie zmian i rebase.

### Znajomość GitHub

Używamy GitHub do hostowania naszych repozytoriów Git i współpracy nad kodem.

Będziesz musiał mieć założone konto na GitHubie.

Aby założyć konto na GitHubie, odwiedź [GitHub](https://github.com/).

Będziesz także musiał wiedzieć, jak używać GitHub do przeglądania zmian w kodzie, forka projektu, tworzenia pull requestów itp.

Aby prawidłowo skonfigurować swoje konto na GitHubie i nauczyć się korzystać z GitHub, odwiedź [Pomoc GitHub](https://docs.github.com).

### Uruchamianie GhostBSD

Do większości projektów będziesz potrzebować komputera z zainstalowaną najnowszą wersją GhostBSD.

Możesz uruchomić wcześniejszą wersję lub FreeBSD, ale jeśli uruchomisz najnowszą wersję GhostBSD, masz pewność, że wszystko będzie działać.

## Konfiguracja

Poniżej opisano, jak skonfigurować swój komputer.

### Utwórz Piaskownicę Projektów

Dobrze jest utworzyć katalog na wszystkie swoje potrzeby związane z pracą przy projekcie, w którym będziesz mieć podkatalogi dla każdego projektu lub grupy projektów. Dzięki temu wszystko będzie uporządkowane na Twoim komputerze, co ułatwi przeszukiwanie kodu w różnych projektach.

Zazwyczaj nazywamy nasz główny katalog roboczy „Sandbox” i umieszczamy go w naszym katalogu domowym.

```
mkdir ~/projects/ghostbsd
```

Oczywiście możesz nazwać go według własnego uznania i umieścić gdziekolwiek chcesz.

## Technologie

Poniżej znajduje się przegląd technologii, których używamy.

### Języki Programowania

W GhostBSD używamy różnych języków programowania.

Nie musisz znać ich wszystkich ani znać ich dobrze. W rzeczywistości zależy to od projektu, nad którym chcesz pracować, i tego, co chcesz osiągnąć.

Oto języki, które używamy najczęściej.

#### Python

Większość aplikacji programowych i narzędzi konfiguracyjnych jest napisanych w Pythonie.

Zaletą Pythona jest to, że jest łatwy do nauki i szybki w rozwoju.

#### C

Wiele aplikacji i większość bibliotek jest napisanych w C.

Język C jest języku typu low-level, trudny do opanowania i żmudny w rozwoju, ale zapewnia szybkie działanie i jest najbardziej wspieranym językiem w FreeBSD — prawie wszystko jest dostępne z poziomu C.

#### Skrypt powłoki Bourne

Większość skryptów w FreeBSD używa skryptów [Bourne shell (sh)](https://en.wikipedia.org/wiki/Bourne_shell). Niektóre narzędzia GhostBSD, takie jak ghostbsd-build i xconfig, są napisane w Bourne shell.

### Biblioteki i Narzędzia GNOME

Wszystkie nasze interfejsy użytkownika używają zestawu narzędzi [GTK3](https://docs.gtk.org/gtk3/).

Nasze prace rozwojowe w dużym stopniu opierają się na bibliotekach GNOME, w szczególności intensywnie korzystamy z GLib i GObject.

Głównie używamy Pythona i uzyskujemy dostęp do tych bibliotek za pomocą [GObject Introspection](https://gi.readthedocs.io).

### Narzędzia

#### Środowisko Rozwoju

Do pisania i edytowania kodu możesz używać dowolnych narzędzi. Niektórzy preferują lekkie edytory, inni pełnoprawne IDE. To kwestia gustu. Rozwój to przede wszystkim zabawa, więc najważniejsze jest, abyś lubił narzędzia, z których korzystasz.

Jeśli nie jesteś pewien, co wybrać, poszukaj i wypróbuj kilka edytorów/IDE, aż znajdziesz ten, który najbardziej Ci odpowiada.

Eric używa [Sublime Text](https://www.sublimetext.com/).

```
sudo pkg install linux-sublime3
```
lub
```
sudo pkg install linux-sublime-text4
```

Jeśli zainstalujesz Sublime, zainstaluj również [Package Control](https://packagecontrol.io/installation) i użyj go do zainstalowania rozszerzeń *GitGutter* i *TrailingSpaces*.

[Visual Studio Code](https://code.visualstudio.com/) jest również bardzo popularnym wyborem.

```
sudo pkg install vscode
```

Istnieje wiele edytorów kodu dostępnych w GhostBSD, możesz wybrać swój ulubiony edytor.

#### Kontrola Wersji

W zakresie kontroli wersji używamy tylko Gita i niczego innego. Cały nasz kod jest kontrolowany wersjami za pomocą Gita.

Nie musisz jednak korzystać wyłącznie z linii poleceń Gita.

Oto kilka narzędzi, które mogą ułatwić korzystanie z Gita.

`gitk` jest nieestetyczny i wygląda na przestarzały (został opracowany w Tcl/Tk), ale jest bardzo przydatny do szybkiego przeglądania historii commitów, tworzenia gałęzi i wybierania commitów.

Możesz zainstalować go z repozytoriów:
```
pkg install git-gui
cd ~/projects/ghostbsd
git clone https://github.com/ghostbsd/ghostbsd-ports.git
cd ghostbsd-ports
gitk
```
W katalogu projektu wystarczy wpisać `gitk`, aby zobaczyć historię commitów. Możesz także określić nazwę gałęzi, aby zobaczyć tę gałąź, lub podkatalog, aby zobaczyć historię konkretnego katalogu.

`gitg` jest bardzo podobny i wygląda lepiej (używa Gtk), ale jego zestaw funkcji jest nieco inny.
```
pkg install gitg
cd ~/projects/ghostbsd
git clone https://github.com/ghostbsd/ghostbsd-ports.git
cd ghostbsd-ports
gitg
```
W repozytorium możesz również sprawdzić `git-cola` i `git-gui`.

Jeśli szukasz bardziej kompleksowego rozwiązania, sprawdź [Sublime Merge](https://www.sublimemerge.com/). Jest również kompatybilny z Sublime Text.

Możesz także sprawdzić wtyczki i funkcje dostępne w swoim IDE/edytorze. Visual Studio Code i Sublime Text, w szczególności, oferują wiele wsparcia dla Gita i GitHub.

#### devhelp

Devhelp wyświetla podręczniki referencyjne dla bibliotek deweloperskich zainstalowanych na Twoim komputerze. Dla większości bibliotek dokumentacja jest zawarta w pakiecie -dev lub -doc (na przykład, jeśli pracujesz z GTK3, upewnij się, że zainstalujesz libgtk-3-dev i libgtk-3-doc).

```
pkg install devhelp
```

Możesz uruchomić DevHelp z menu aplikacji i używać go do przeglądania lub wyszukiwania podręczników referencyjnych bibliotek. Często będziesz musiał sprawdzić składnię lub argumenty konkretnej funkcji. Miło jest mieć dostęp do informacji lokalnie, bez potrzeby przeszukiwania internetu.

#### d-feet

Niektóre programy używają DBus do komunikacji z innymi. Używamy d-feet do przeglądania i rozwiązywania problemów z DBus.

```
pkg install d-feet
```

Dzięki d-feet możesz szybko znaleźć usługę na DBus, przeglądać jej interfejs, a nawet ręcznie wywołać niektóre z jej funkcji.

#### meld

Meld to narzędzie do wizualnego porównywania różnic. Pokazuje różnice między dwoma plikami i jest w tym doskonały.

```
pkg install meld
```

#### Inne Przydatne Narzędzia

Większość naszej konfiguracji jest przechowywana w dconf, a do przeglądania lub modyfikowania jej używamy `gsettings` (z linii poleceń). Jeśli chcesz robić to graficznie, możesz zainstalować `dconf-editor`.

```
pkg install dconf-editor
```