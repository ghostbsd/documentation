Instalacja niestandardowa
===========================

Instalacja niestandardowa i pełna instalacja dysku GhostBSD zaczynają się w ten sam sposób. Proszę postępować zgodnie z przewodnikiem [Pełna instalacja dysku](full-disk-installation.md) do sekcji *Dyski i system plików*. Po dotarciu do tej sekcji, postępuj zgodnie z tym przewodnikiem, aby zakończyć instalację niestandardową.

Celem tego przewodnika nie jest dostarczenie kroków dla każdej możliwej konfiguracji, ale zapewnienie pewnego kontekstu, który pomoże w niestandardowym partycjonowaniu i układach systemów plików. Sekcja [Instalacja GhostBSD](#installing-ghostbsd) zawiera kroki potrzebne do niestandardowej instalacji z zalecaną konfiguracją używającą UEFI, GPT i OpenZFS.

## Schematy partycjonowania

W GhostBSD dostępne są dwa schematy partycjonowania, które są używane do dzielenia dysku na sekcje zwane slice’ami lub partycjami. Istnieje układ Master Boot Record (MBR) oraz układ GUID Partition Table (GPT). Ogólnie rzecz biorąc, dyski MBR są używane, jeśli maszyna uruchamia się z użyciem starszego systemu Basic Input/Output System (BIOS), natomiast dyski GPT są używane, gdy uruchamiana jest z nowszym Unified Extensible Firmware Interface (UEFI). UEFI może uruchamiać się z dysku GPT lub MBR, a w niektórych maszynach istnieje kod kompatybilności, który umożliwia BIOS-owi uruchamianie z dysków GPT, oprócz dysków MBR.[^1]

### MBR

Istnieje kilka ograniczeń podczas używania starszego układu MBR, w tym ograniczenia dotyczące rozmiaru dysku i liczby możliwych partycji. MBR oficjalnie obsługuje tylko dyski o pojemności do dwóch terabajtów. Istnieje również limit czterech partycji podstawowych, ale można użyć partycji rozszerzonej, aby zwiększyć tę liczbę.[^2]

### GPT

GPT jest nowszym schematem partycjonowania stworzonym przez Intel&reg; jako część specyfikacji EFI, zaprojektowanym w celu zastąpienia MBR i BIOS. GPT identyfikuje partycje za pomocą globalnie unikalnych identyfikatorów (GUID), znanych również jako uniwersalnie unikalne identyfikatory (UUID). Zalety GPT obejmują wsparcie dla większych dysków i brak limitów partycji. Obsługiwane rozmiary dysków GPT mogą wynosić od około 9 do 75 zettabajtów.[^1]

## Systemy plików

Istnieją dwa systemy plików, które można wykorzystać do zainstalowania GhostBSD: system plików UNIX&reg; (UFS) i ZFS&reg; (wcześniej system plików Zettabyte).

### UFS

UFS pochodzi z oryginalnego systemu plików używanego w wersji 7 UNIX. W trakcie swojej długiej historii istniały dwie wersje (UFS1 i UFS2), poprawki i dodane funkcje. W instalatorze GhostBSD dostępne są opcje użycia UFS2 z lub bez dzienników i miękkich aktualizacji. Te funkcje mogą stworzyć bardziej solidny system, który lepiej radzi sobie z awariami i zapewnia możliwość tworzenia migawek.[^3] Średnio, UFS może wymagać mniej zasobów niż OpenZFS, ale na większości nowoczesnych komputerów nie powinno to być problemem.

### OpenZFS

ZFS jest nowoczesnym systemem plików, który został pierwotnie stworzony jako część systemu operacyjnego Solaris&reg;. Solaris i ZFS zostały wydane na krótko na licencjach open source. Ostatecznie obie technologie zostały ponownie objęte licencjami closed source. Przed zmianami licencyjnymi, ZFS zostało forkiem i rozwinięte przez społeczność open source i jest teraz używane w różnych systemach operacyjnych jako OpenZFS.[^4] Istnieje wiele korzyści z używania OpenZFS, takich jak sprawdzanie błędów, kompresja danych i migawki systemu plików.[^5]

## Instalacja GhostBSD

Wybierz *Niestandardowa (Zaawansowane partycjonowanie)* i kliknij "Dalej", aby rozpocząć Edytor partycji.

![Rozpoczęcie edytora partycji.](images/custom-installation/1-custom-partitioning.png)

### Schemat partycjonowania

:::{important}
Możliwe, że dysk już ma schemat partycjonowania pokazany w polu "System/Typ" w Edytorze partycji. Jeśli tak jest, możesz pominąć ten krok i przejść do sekcji *Tworzenie partycji* poniżej.
:::

W Edytorze partycji zobaczysz dostępne dyski.

![Wybór dysku instalacyjnego.](images/custom-installation/2-no-partition-table.png)

Wybierz dysk, na którym chcesz zainstalować i kliknij "Utwórz", aby wybrać schemat partycjonowania.

![Tworzenie GPT.](images/custom-installation/3-select-gpt.png)

Po wybraniu pożądanego schematu partycjonowania, kliknij "+ Dodaj", aby utworzyć ten układ na wybranym dysku. Wynik powinien wyglądać podobnie do poniższego obrazu.

![Dysk z partycjonowaniem GPT.](images/custom-installation/4-with-partition-table.png)

### Tworzenie partycji

Domyślna instalacja GhostBSD utworzy trzy partycje. Są to partycja boot, root i swap. Istnieje wiele różnych konfiguracji, w tym pominięcie swapu lub umieszczanie /home, /usr lub /var na własnych partycjach lub dyskach. Te warianty mogą również obejmować użycie UFS lub OpenZFS na dyskach GPT lub MBR z maszynami uruchamianymi z BIOS lub UEFI. Poniższy przykład ręcznie utworzy układ podobny do domyślnej instalacji. Użyje OpenZFS na dysku GPT z maszyną uruchamianą z UEFI.

#### Partycja boot

Pierwszą partycją do utworzenia jest partycja boot. Wybierz wolne miejsce pod etykietą dysku, tutaj te wartości to "freespace1" i "ada0". Następnie kliknij "Utwórz", aby otworzyć okno dialogowe "Dodaj partycję". Wybierz "UEFI" i zmień rozmiar. Używamy tutaj 200MB. Kliknij "+ Dodaj", aby utworzyć partycję UEFI.

![Utwórz partycję boot UEFI.](images/custom-installation/5-efi-partition.png)

#### Partycja root

Następnie utwórz partycję root OpenZFS. Ponownie wybierz wolne miejsce i kliknij "Utwórz". W oknie dialogowym "Dodaj partycję" wybierz "ZFS" i wpisz pożądany rozmiar partycji. Kliknij "+ Dodaj", aby utworzyć partycję root OpenZFS. Instalator automatycznie przypisze odpowiednie punkty montowania dla partycji.

:::{important}
Należy uwzględnić rozmiar partycji swap (jeśli używasz jednej) oraz niewielką ilość nieprzydzielonego miejsca na końcu dysku. Ta sekcja jest wymagana dla tabeli GPT i prawidłowego wyrównania sektorów na dysku. Domyślna instalacja pozostawia około 5MB nieprzydzielonego miejsca.
:::

![Utwórz partycję root OpenZFS.](images/custom-installation/6-zfs-partition.png)

#### Partycja swap

Ostatnią partycją do utworzenia jest partycja swap. W zależności od twoich potrzeb i ilości RAM w komputerze, ta partycja może zostać pominięta. Ogólnie, kilka GB dla swapu jest pomocne w przypadku, gdy komputer przekroczy zainstalowaną ilość RAM.

W ten sam sposób, co poprzednia partycja, wybierz wolne miejsce i kliknij "Utwórz". W oknie dialogowym "Dodaj partycję" upewnij się, że wybrano "SWAP", przydziel pożądany rozmiar swapu i kliknij "+ Dodaj", aby utworzyć partycję.

![Utwórz partycję swap.](images/custom-installation/7-swap-partition.png)

#### Zakończenie instalacji

Po wykonaniu powyższych kroków dys

k powinien być partycjonowany w podobnym formacie jak poniżej. Po prostu kliknij "Dalej", aby kontynuować resztę instalacji, zgodnie z opisem w przewodniku [Pełna instalacja dysku](full-disk-installation.md), zaczynając od sekcji *Boot loader*.

![Zakończone partycjonowanie dysku.](images/custom-installation/8-completed-partitioning.png)

[^1]: Roderick Smith, "Make the most of large drives with GPT and Linux," IBM, https://developer.ibm.com/tutorials/l-gpt/ (3 lipca 2012).

[^2]: Joe Keeley, "MBR vs. GPT: Which Should You Use for Your SSD?," MakeUseOf, https://www.makeuseof.com/tag/mbr-vs-gpt/ (5 kwietnia 2022).

[^3]: Wikipedia contributors, "Unix File System," Wikipedia, The Free Encyclopedia, https://en.wikipedia.org/w/index.php?title=Unix_File_System&oldid=1100924136 (dostęp 31 lipca 2022).

[^4]: Michael Dexter, "ZFS vs. OpenZFS," TrueNas, https://www.truenas.com/blog/zfs-vs-openzfs/ (18 czerwca 2019).

[^5]: "Main Page," OpenZFS, https://openzfs.org/wiki/Main_Page (19 lipca 2022).