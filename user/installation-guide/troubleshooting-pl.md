Rozwiązywanie problemów
========================

## System live nie uruchamia się.

### Twoje urządzenie może nie być obsługiwane.

GhostBSD opiera się na stabilnej gałęzi FreeBSD i obsługa sprzętu może się często zmieniać. Obsługa sprzętu jest zazwyczaj dobra, jednak niektóre nowsze urządzenia mogą mieć problemy. Możesz spróbować uruchomić system live na innym komputerze, aby określić, czy problem dotyczy sprzętu, czy samego bootowalnego USB.

Proszę zapoznać się z [Kompatybilnością sprzętową FreeBSD](https://docs.freebsd.org/en/books/faq/#hardware) w celu uzyskania informacji o poszczególnych komponentach.

### Nośnik instalacyjny może być uszkodzony.

Czasami pliki ISO mogą zostać uszkodzone podczas pobierania lub tworzenia bootowalnego pendrive'a USB. Proszę zapoznać się z przewodnikiem [Jak zacząć](getting-started.md), aby pobrać nowy plik ISO i stworzyć nowy bootowalny pendrive USB.

## System live nie dociera do środowiska graficznego.

### ISO instalacyjne mogą być przestarzałe lub wymagać ogólnych poprawek.

Spróbuj stworzyć bootowalny USB za pomocą [najnowszego ISO](https://www.ghostbsd.org/download) dostępnego na stronie Pobierania w sekcji *Najnowsze wersje*. GhostBSD jest wersją rolling release i czasami aktualizacje i poprawki są wdrażane do najnowszej wersji przed utworzeniem nowego oficjalnego obrazu.

*Proszę zauważyć*: Ta sekcja jest niekompletna i obecnie jest aktualizowana.

## Po instalacji wybór GhostBSD uruchamia FreeBSD.

### GhostBSD i FreeBSD są zainstalowane na tym samym dysku.

Nie instaluj GhostBSD i FreeBSD na tym samym dysku.

W systemach UEFI korzystają one z tego samego loadera. Ten loader przeszukuje partycje na dysku startowym i może uruchomić istniejącą instalację FreeBSD nawet wtedy, gdy wybierzesz GhostBSD w menu oprogramowania układowego lub w rEFInd.

Zainstaluj GhostBSD na osobnym dysku. Dual-boot z Windows lub Linux na tym samym dysku jest obsługiwany.

Jeśli oba systemy są już na jednym dysku, uruchom komputer z pamięci USB GhostBSD live i pozostaw na tym dysku tylko jeden z nich albo przenieś GhostBSD na osobny dysk.
