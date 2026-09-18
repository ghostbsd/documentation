Przewodnik instalacji
=====================

<h2>Wprowadzenie</h2>

GhostBSD zawiera graficzny instalator o nazwie GBI.

Po przeczytaniu tego przewodnika będziesz wiedział:

* Jak przygotować pamięć USB.
* Jak skonfigurować maszynę wirtualną.
* Jak zainstalować GhostBSD.
  * Jak zainstalować GhostBSD na całym dysku twardym.
  * Jak zainstalować obok innego systemu operacyjnego.
* Rozwiązywanie problemów z instalatorem i nośnikami live.

:::{warning}
Nie instaluj GhostBSD i FreeBSD na tym samym dysku. Korzystają z tego samego loadera UEFI, więc GhostBSD może uruchomić istniejącą instalację FreeBSD. Zainstaluj GhostBSD na osobnym dysku. Dual-boot z Windows lub Linux jest obsługiwany.
:::

```{toctree}
:caption: Spis treści

getting-started
full-disk-installation
custom-installation
troubleshooting
```