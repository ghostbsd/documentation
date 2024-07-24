Pełna instalacja na dysku
======================

## Rozpoczęcie pracy z systemem GhostBSD live

Włóż pamięć USB z GhostBSD i uruchom ponownie lub włącz komputer. Przed uruchomieniem istniejącego systemu operacyjnego konieczne jest wybranie pamięci USB jako urządzenia startowego. Można to zrobić przez:

* Wejście do interfejsu BIOS lub UEFI komputera i wybranie pamięci USB.
* Naciśnięcie odpowiedniego klawisza, aby wybrać urządzenie startowe, i wybranie pamięci USB.

Klawisze do wejścia do BIOS lub UEFI lub wyboru urządzeń startowych różnią się między płytami głównymi. Odpowiedni klawisz może być wyświetlony podczas procesu uruchamiania i często jest to *Del*, *Esc*, lub *F1* albo *F12*.

Jeśli komputer uruchomi istniejący system operacyjny, może to oznaczać:

* Pamięć USB nie została prawidłowo włożona.
* Zmiany w BIOS lub UEFI nie zostały zapisane.
* Komputer nie obsługuje uruchamiania z wybranego urządzenia.
* Odpowiedni klawisz nie został naciśnięty lub naciśnięty we właściwym czasie podczas procesu uruchamiania.
* Wystąpił błąd podczas tworzenia dysku USB live.

Podczas uruchamiania GhostBSD pojawi się menu ładujące, które będzie wyglądać podobnie do jednego z poniższych obrazów, w zależności od tego, czy system jest uruchomiony w trybie UEFI, czy BIOS.

![Menu ładujące dla GhostBSD uruchomione w trybie UEFI.](images/full-disk-installation/0-boot-uefi.png)

![Menu ładujące dla GhostBSD uruchomione w trybie BIOS.](images/full-disk-installation/0-boot-bios.png)

GhostBSD zakończy uruchamianie i automatycznie załaduje środowisko desktopowe Mate.

![Środowisko desktopowe Mate systemu GhostBSD live.](images/full-disk-installation/1-desktop.png)

## Korzystanie z systemu live

Możliwe jest użycie tego systemu live do testowania kompatybilności sprzętu lub zapoznania się z podstawowymi funkcjami GhostBSD i domyślnym oprogramowaniem.

## Instalacja GhostBSD

### Rozpoczęcie instalatora

Kliknij dwukrotnie ikonę "Install GhostBSD" na pulpicie, aby uruchomić instalator. Pojawi się nowe okno z następującymi ekranami, aby skonfigurować i zainstalować system GhostBSD. Aby zapisać zmiany i przejść dalej, kliknij "Next". Możesz kliknąć "Previous", aby wrócić do poprzedniego ekranu i dokonać dodatkowych zmian. Kliknij "Cancel" lub czerwony okrąg (w prawym górnym rogu), aby wyjść z instalatora.

### Lokalizacja

#### Język

Wybierz język, którego chcesz używać w zainstalowanym systemie. Jeśli chcesz zmienić język systemu po instalacji, więcej informacji na temat lokalizacji znajdziesz w [Podręczniku FreeBSD](https://docs.freebsd.org/en/books/handbook/l10n/).

![Wybór języka w instalatorze GhostBSD.](images/full-disk-installation/2-localization-language.png)

**Uwaga**: Obecnie instalator obsługuje tylko język angielski podczas procesu instalacji.

#### Klawiatura

Możesz wybrać układ klawiatury specyficzny dla twojego języka lub regionu. Można również określić model klawiatury. Jeśli nie znasz modelu swojej klawiatury lub nie jest ona wymieniona, powinieneś po prostu kliknąć "Next" bez dokonywania wyboru.

![Wybór klawiatury w instalatorze GhostBSD.](images/full-disk-installation/3-localization-keyboard.png)

#### Strefa czasowa

Wybierz swoją strefę czasową, aby system mógł dostosować się do regionalnych zmian czasu i prawidłowo wykonywać inne funkcje związane ze strefą czasową.

![Wybór strefy czasowej w instalatorze GhostBSD.](images/full-disk-installation/4-localization-timezone.png)

### Dyski i system plików

#### Rodzaj instalacji

Wybierz *Konfiguracja pełnego dysku*, aby zainstalować GhostBSD z domyślną konfiguracją ZFS. Możliwe jest użycie innych systemów plików i schematów partycjonowania, wybierając *Niestandardowe (Zaawansowane partycjonowanie)*.

![Wybór rodzaju instalacji w instalatorze GhostBSD.](images/full-disk-installation/5-install-type.png)

#### Dysk instalacyjny

Wybierz dysk, na którym ma zostać zainstalowany GhostBSD, klikając odpowiednie pole wyboru. Na tym ekranie można również zmienić dodatkowe opcje ZFS. Jednak domyślne wartości są zazwyczaj odpowiednie dla większości użytkowników i systemów.

![Wybór lokalizacji instalacji w instalatorze GhostBSD.](images/full-disk-installation/6-install-location.png)

**Uwaga**: Wybrany dysk zostanie sformatowany podczas instalacji i wszelkie istniejące dane zostaną utracone.

### Boot loader

Domyślnie GhostBSD używa natywnego boot loadera FreeBSD. Jeśli planujesz używać wielu systemów operacyjnych na jednym komputerze, może być wygodniej wybrać rEFInd zamiast domyślnego. rEFInd potrafi wykryć inne systemy operacyjne i uruchamiać ich natywne boot loadery. Może to wyeliminować konieczność zmiany urządzenia startowego, jak opisano wcześniej w [Uruchamianie z pamięci USB GhostBSD](#booting-from-the-ghostbsd-flash-drive).

![Wybór boot loadera w instalatorze GhostBSD.](images/full-disk-installation/7-loader-uefi.png)

**Uwaga**: Jeśli system live został uruchomiony w trybie UEFI, instalator pokaże "FreeBSD *UEFI* loader only". Jeśli uruchomiono w trybie BIOS, instalator pokaże "FreeBSD *BIOS* loader only".

### Hasło root

Systemy operacyjne typu Unix mają użytkownika administracyjnego o nazwie root. Root ma możliwość wprowadzania dowolnych zmian w systemie lub użytkownikach. Dlatego konieczne jest utworzenie silnego hasła dla roota. Można użyć dowolnego hasła, ale instalator zasugeruje, czy jest ono słabe, czy silne.

![Tworzenie hasła root w instalatorze GhostBSD.](images/full-disk-installation/8-accounts-root.png)

### Dodawanie użytkownika

Utwórz użytkownika, wprowadzając *Prawdziwe imię*, *Nazwa użytkownika* i *Hasło*. Instalator ponownie zasugeruje, czy hasło jest słabe, czy silne. *Hostname* to nazwa twojego komputera wyświetlana w sieciach. Zostanie ona automatycznie utworzona, ale można ją zmienić, jeśli jest taka potrzeba. *Shell* to to, z czym będziesz wchodzić w interakcję podczas korzystania z terminala (wiersza poleceń). GhostBSD stara się zapewnić przyjazne dla użytkownika doświadczenie GUI i rzadko wymaga korzystania z terminala. Domyślną powłoką jest fish, jednak dostępnych jest kilka innych.

![Tworzenie użytkownika w instalatorze GhostBSD.](images/full-disk-installation/9-accounts-user.png)

### Zakończenie i ponowne uruchomienie

#### Ekran postępu

Po utworzeniu użytkownika kliknij "Install", aby zakończyć instalację. Pojawi się ekran postępu, który pokazuje wykonywane działania i inne komunikaty.

![Ekran postępu w instalatorze GhostBSD.](images/full-disk-installation/10-progress.png)

#### Ponowne uruchomienie do nowej instalacji

Jeśli instalacja zakończy się pomyślnie, pojawi się poniższy ekran. Kliknij "Continue", aby pozostać w systemie live, lub kliknij "Restart", aby ponownie uruchomić system GhostBSD. Upewnij się, że usuniesz pamięć USB po wyłączeniu komputera, ale przed jego ponownym uruchomieniem. Niektóre maszyny mogą automatycznie uruchamiać się z podłączonej pamięci USB live.

![Zakończenie i ponowne uruchomienie w instalatorze GhostBSD.](images/full-disk-installation/11-complete.png)