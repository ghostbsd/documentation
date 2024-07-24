Rozpoczęcie pracy
=================

## Status

GhostBSD jest dostępny do ogólnego użytku.

## Wymagania systemowe

* Dwurdzeniowy procesor Intel/ARM 64-bit o taktowaniu 2 GHz
* 4 GiB RAM (pamięci systemowej dla instalacji fizycznych i wirtualnych)
* Karta VGA obsługująca rozdzielczość 1024x768
* Połączenie sieciowe
* 15 GiB miejsca na dysku
* Napęd CD/DVD lub port USB do uruchomienia nośnika instalacyjnego

W przyszłości mogą pojawić się wersje dla innych architektur procesorowych. Chcemy znacznie obniżyć wymagania dotyczące pamięci RAM.

Więcej informacji na temat kompatybilności sprzętowej można znaleźć w [FAQ FreeBSD o kompatybilności sprzętowej](https://docs.freebsd.org/en/books/faq/#hardware).

### Przetestowany sprzęt

GhostBSD jest znany z uruchamiania graficznego pulpitu na następujących maszynach. Funkcjonalność dodatkowa, taka jak bezprzewodowa sieć, dźwięk przez HDMI, uśpienie, przyspieszenie grafiki itp., nie została jeszcze systematycznie przetestowana.

Prosimy o kontakt, jeśli chcieliby Państwo wesprzeć projekt darowizną sprzętową. Szczególnie interesują nas urządzenia Lenovo z poprzednich generacji, które powinny być dostępne w niskich cenach na rynku wtórnym.

Aby zobaczyć Proby Sprzętowe systemów działających na GhostBSD, prosimy odwiedzić [Bazę Sprzętową GhostBSD](http://bsd-hardware.info/?d=GhostBSD&view=computers) dostarczoną przez bsd-hardware.info. Można założyć, że każdy system wymieniony tam jest przynajmniej zdolny do uruchomienia GhostBSD. Dodatkowa funkcjonalność, taka jak sieć bezprzewodowa, dźwięk przez HDMI, uśpienie, przyspieszenie grafiki itp., może działać lub nie.

### Sprzęt sieciowy

Nie wszystkie urządzenia sieciowe mogą być jeszcze obsługiwane przez GhostBSD. W takich przypadkach warto rozważyć użycie urządzenia sieciowego na bazie USB. Programiści GhostBSD mają obecnie dostęp do następujących urządzeń sieciowych na bazie USB, które są znane z działania:

* [Adaptery USB 802.11n WLAN oparte na `ID 0bda:8176 Realtek Semiconductor Corp. RTL8188CUS`](https://vermaden.wordpress.com/2020/10/30/realtek-usb-wifi-review/)
* Przewodowe adaptery Ethernet USB oparte na `ID 0b95:772b ASIX Electronics Corp. AX88772B`, obsługiwane przez [axe(4)](https://man.freebsd.org/cgi/man.cgi?query=axe&sektion=4&manpath=freebsd).

## Pobieranie obrazu ISO

Obraz ISO **GhostBSD** jest dostępny do pobrania [tutaj](https://www.ghostbsd.org/download).

Eksperymentalne obrazy rozwojowe są dostępne do pobrania [tutaj](https://download.ghostbsd.org/development/amd64/latest/).

## Tworzenie bootowalnej pamięci USB

Po pobraniu odpowiedniego obrazu ISO, skopiuj go na pamięć USB, korzystając z jednej z opisanych poniżej metod.

**Uwaga:**
* GhostBSD-YY.MM.DD.iso reprezentuje aktualny obraz ISO GhostBSD, na przykład, GhostBSD-23.06.18.iso.
* Podobnie, X to liczba lub litera, która zmienia się w zależności od liczby dysków podłączonych do komputera, na przykład, /dev/da-1 lub /dev/sdb.
* Może być również konieczne uruchomienie poniższych poleceń jako root, używając narzędzia takiego jak sudo.

**Na \*BSD**
```
dd if=/path/to/GhostBSD-YY.MM.DD.iso of=/dev/daX bs=3m
```

**Na Linuxie**
```
dd if=/path/to/GhostBSD-YY.MM.DD.iso of=/dev/sdX bs=3M
```

**Na macOS**
```
dd if=/path/to/GhostBSD-YY.MM.DD.iso of=/dev/diskX bs=3m
```

**Na Windows**
* Pobierz i uruchom narzędzie do tworzenia obrazów, Rufus, ze [strony internetowej](https://rufus.ie/en/).
* Włóż pamięć USB.
* Upewnij się, że pamięć USB jest wyświetlana w Rufusie pod **Urządzenie**.
* Kliknij "WYBIERZ" i wybierz plik ISO GhostBSD.
* Kliknij "START".

Listę dodatkowych narzędzi do tworzenia bootowalnych systemów USB można znaleźć na [Wikipedii](https://en.wikipedia.org/wiki/List_of_tools_to_create_Live_USB_systems).

Opisane powyżej kroki utworzą bootowalny system GhostBSD na pamięci USB. Aby rozpocząć sesję live, włóż pamięć USB do komputera, uruchom ponownie system i wybierz pamięć USB jako urządzenie startowe. Więcej informacji można znaleźć [tutaj](https://wiki.ghostbsd.org/index.php/Starting_GhostBSD_Live_Media).

## Środowiska wirtualizacyjne

``` .. note::
    Zalecamy uruchamianie GhostBSD na prawdziwym sprzęcie ("bare metal"), jeśli to możliwe. Powinno to zapewnić najlepszą wydajność i wsparcie dla sprzętu.
```

Użytkownicy zgłaszali, że GhostBSD działa pomyślnie w następujących środowiskach wirtualizacyjnych:

* Host VirtualBox (na FreeBSD i macOS), znany jako działający w trybie BIOS i EFI

* Host VMware (na Windowsie), możliwe, że działa tylko w trybie BIOS?

* Host QEMU (na Linuxie), działa w obu trybach BIOS i EFI (patrz poniżej). Należy pamiętać, że dla akceptowalnej wydajności QEMU potrzebuje KVM, który obecnie nie jest dostępny na hostach FreeBSD

* Host Parallels, zgłaszany jako działający w trybie EFI (patrz poniżej)

* Proxmox VE

Proszę zwrócić uwagę:

* VM musi być __64-bitowy__
* VM potrzebuje __co najmniej 4 GB pamięci RAM__
* VM potrzebuje __co najmniej 2 rdzenie CPU__
* Proces uruchamiania trwa dłużej, niż można by się spodziewać; uruchom w trybie verbose, aby zobaczyć szczegóły
* Dla najlepszych wyników ustaw tryb **EFI/UEFI** (nie BIOS)

Prosimy o zgłaszanie wyników w swoim środowisku wirtualizacyjnym.

### QEMU

Utwórz plik obrazu `ghostbsd.img` o rozmiarze 8 GiB (lub większym), na którym można zainstalować system:

```bash
$ pwd
/home/użytkownik
$ mkdir -p .qemu/ghostbsd
$ fallocate -l $(( 8*1024*1024*1024 )) .qemu/ghostbsd/ghostbsd.img
```

Następnie uruchom GhostBSD:

```bash
qemu-system-x86_64 -machine type=q35,accel=kvm \
-enable-kvm -cpu host -smp 2 -m 4096 \
-device virtio-net,netdev=vmnic -netdev user,id=vmnic,hostfwd=tcp::5222-:22 \
-vga std -soundhw hda -no-quit \
-drive format=raw,file=${HOME}/.qemu/ghostbsd/ghostbsd.img \
-drive format=raw,file=${HOME}/Downloads/ghostbsd.iso \
-boot menu=on
```

Gdy QEMU się uruchomi, naciśnij `esc` i wybierz `2`, aby uruchomić z ISO.

Użyj narzędzia __Install GhostBSD__, aby zainstalować GhostBSD na obrazie dysku.

Następnie uruchom ponownie QEMU, teraz usuń dwie ostatnie opcje z powyższego polecenia.

Uwagi:

* Opcja `hostfwd=` tworzy przekierowanie portu z portu `5222` hosta do portu `22` maszyny wirtualnej QEMU.
* Niestety, opcje qemu-system-x86_64 dla tabletu USB nie działają; będziesz musiał nacisnąć Ctrl+Alt+g, aby zwolnić wskaźnik myszy z okna QEMU.
* Aby przejść do pełnoekranowego trybu QEMU, naciśnij Ctrl+Alt+F.

Aby uruchomić/zainstalować GhostBSD w trybie UEFI, najpierw zainstaluj [OVMF Open Virtual Machine Firmware](https://github.com/tianocore/tianocore.github.io/wiki/OVMF) na stronie hosta. Nazwa pakietu dla Fedora 32 to `edk2-ovmf`.

Następnie dodaj te dwie opcje `qemu-system-x86_64`:
```bash
-bios /usr/share/edk2/ovmf/OVMF_CODE.fd \
-smbios type=0,vendor=0vendor,version=0version,date=0date,release=0.0,uefi=on \
```

### Parallels

Aby skonfigurować Parallels do uruchomienia GhostBSD:

1. Przejdź do **Hardware > Boot Order**.
2. Rozwiń **Advanced Settings**.
3. Ustaw **BIOS** na "EFI 64-bit".
4. W polu **Boot flags** wpisz `vm.bios.efi=1`.

![Screenshot](https://docs.01.org/clearlinux/latest/zh_CN/_images/parallels-07.png)

### Proxmox VE

Aby uruchomić GhostBSD na Proxmox VE, skonfiguruj maszynę wirtualną z następującymi ustawieniami:

- **Pamięć (Memory)**: 4 GB (nie może być dynamicznie alokowana)
- **Procesory (Processors)**: 2 (1 socket, 2 rdzenie)
- **BIOS**: OVMF (UEFI)
- **Wyświetlacz (Display)**: Domyślny (VGA)
- **Maszyna (Machine)**: q35
- **Kontroler SATA (SATA Controller)**: VirtIO SATA do podłączenia wirtualnego dysku (na którym zainstalowany zostanie system)
- **Napęd CD (CD Drive)**: GhostBSD ISO
- **Dysk twardy (Hard Disk)**: Co najmniej 8 GB Raw
- **Urządzenie sieciowe (Network Device)**: VirtIO

Aby ustawić rozdzielczość, naciśnij F2 podczas uruchamiania, aby uzyskać dostęp do ustawień OVMF. Wybierz 'Device Manager > OVMF Platform Configuration > Change Preferred', zapisz i uruchom ponownie.

### VirtualBox

Aby uruchomić GhostBSD w VirtualBox, postępuj zgodnie z poniższymi krokami:

1. **Instalacja VirtualBox**:
   - Pobierz i zainstaluj VirtualBox z menedżera pakietów systemu operacyjnego lub ze [strony internetowej VirtualBox](https://virtualbox.org).

2. **Utworzenie nowej maszyny wirtualnej**:
   - W VirtualBox Manager, wybierz **Tools > New**, aby utworzyć nową maszynę wirtualną z następującymi ustawieniami:
     - **Name and operating system**:
       - Nazwij maszynę wirtualną.
       - Ustaw **Type** na "FreeBSD".
       - Ustaw **Version** na "FreeBSD (64-bit)".
     - **Memory size**:
       - Ustaw **RAM** na co najmniej 4GB (4096MB).
     - **Hard disk**:
       - Domyślne ustawienia są zalecane.
     - **Hard disk file type**:
       - Domyślne ustawienia są zalecane.
     - **Storage on physical hard disk**:
       - Domyślne ustawienia są zalecane.
     - **File location and size**:
       - Domyślne ustawienia są odpowiednie, ale można zwiększyć maksymalny rozmiar wirtualnego dysku.

3. **Dostosowanie ustawień maszyny wirtualnej**:
   - Wybierz nową maszynę wirtualną w VirtualBox Manager i otwórz ekran ustawień. Skonfiguruj poniższe opcje:
     - **System > Motherboard**:
       - W sekcji **Extended Features** zaznacz "Enable EFI (special OSes only)".
     - **System > Processor**:
       - Ustaw **Processor(s)** na co najmniej 2 CPU.
     - **Display > Screen**:
       - Zmień **Graphics Controller** na VBoxSVGA.
     - **Storage**:
       - W sekcji **Storage Devices** wybierz Napęd Optyczny (ikona CD).
       - W sekcji **Attributes** kliknij ikonę CD, aby otworzyć menu rozwijane.
       - Wybierz "Choose a disk file..." i wskaż pobrany plik ISO GhostBSD.

4. **Uruchomienie maszyny wirtualnej**:
   - Kliknij "OK", aby zapisać zmiany. W VirtualBox Manager wybierz **Start**. System live GhostBSD uruchomi się w środowisku Mate.
   - Kliknij "Install GhostBSD", aby uruchomić instalator.
   - Po zakończeniu instalacji, uruchom ponownie lub wyłącz maszynę wirtualną i usuń ISO z napędu optycznego przed następnym uruchomieniem.