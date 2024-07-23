# Przewodnik dla Współpracowników GhostBSD

## 1. Wprowadzenie
Witaj w Przewodniku dla Współpracowników GhostBSD. Ten przewodnik przedstawia obowiązki, przepływy pracy i najlepsze praktyki dla współpracowników, pomagając utrzymać jakość i spójność projektu GhostBSD. Bycie współpracownikiem pozwala bezpośrednio przyczynić się do rozwoju projektu i współpracować z oddaną społecznością.

## 2. Zostanie Oficjalnym Współpracownikiem
### 2.1. Kwalifikowalność
Każdy, kto ma chęć pomocy projektowi, może zostać współpracownikiem. Najpierw musisz zostać Nowym Współpracownikiem i wykazać się spójnym śladem wysokiej jakości wkładu w projekt GhostBSD.
### 2.2. Program Mentorski
Nowi współpracownicy zostaną przydzieleni mentorowi przez opiekunów projektu, który poprowadzi ich przez początkowe etapy, zapewniając zrozumienie standardów i przepływów pracy projektu.
### 2.3. Zakończenie Okresu Próbnego
Gdy mentor uzna, że nowy współpracownik dobrze rozumie standardy i przepływy pracy projektu, nowy współpracownik zostanie oficjalnym współpracownikiem.

## 3. Obowiązki Współpracowników
### 3.1. Wkład w Kod
Upewnij się, że Twoje wkłady kodu są dobrze przetestowane i przestrzegają standardów kodowania projektu.
### 3.2. Przeglądy Kodów
Uczestnicz w przeglądach kodów, aby pomóc utrzymać jakość kodu i mentorować nowych współpracowników.
### 3.3. Dokumentacja
Aktualizuj i poprawiaj dokumentację jako część swoich wkładów.
### 3.4. Angażowanie Społeczności
Zaangażuj się w społeczność, uczestnicząc w dyskusjach, odpowiadając na pytania i udzielając wsparcia.

## 4. Używanie GitHub
### 4.1. Struktura Repozytoriów
Zrozum strukturę repozytoriów GhostBSD i gdzie znaleźć odpowiedni kod i dokumentację.
### 4.2. Strategia Gałęzi
Postępuj zgodnie ze strategią gałęzi projektu dla gałęzi rozwoju, funkcji i wydań:
* **main**: Stabilna gałąź wydania.
* **develop**: Gałąź bieżącego rozwoju.
* **feature/xxx**: Gałęzie funkcji dla nowych rozwoju.
### 4.3. Klonowanie Repozytoriów
Sklonuj główne repozytorium:

```
git clone git@github.com:ghostbsd/ghostbsd.git
```
### 4.4. Rozwiązywanie Konfliktów Merge
Rozwiązywanie konfliktów za pomocą Gita:

```
git fetch origin
git checkout feature/branch
git merge origin/main
# Rozwiąż konflikty
git add -A
git commit
```

## 5. Wiadomości o Commitach
### 5.1. Format
Użyj następującego formatu dla wiadomości commitów:

```
Linia Tematu (50 znaków lub mniej)

Szczegółowe wyjaśnienie zmian, powodów zmian i wszelkich dodatkowych informacji, które mogą być użyteczne.
```
### 5.2. Najlepsze Praktyki
* Używaj trybu rozkazującego w linii tematu (np. "Napraw błąd", a nie "Naprawiono błąd").
* Uwzględnij odpowiednie numery problemów dla śledzenia.
### 5.3. Przykłady
* Dobrze: Naprawiono problem #123: Poprawa wycieku pamięci w module sieciowym
* Źle: Naprawione rzeczy

## 6. Praca z Pull Requestami
### 6.1. Tworzenie Pull Requesta
Upewnij się, że Twój pull request jest dobrze udokumentowany i zawiera odpowiednie testy.
### 6.2. Przeglądanie Pull Requestów
Dostarczaj konstruktywną opinię i upewnij się, że kod spełnia standardy projektu.
### 6.3. Łączenie Pull Requestów
Łącz pull requesty tylko po ich przeglądzie i zatwierdzeniu przez co najmniej jednego innego współpracownika.
### 6.4. Obsługa Złożonych Pull Requestów
* Rozdzielanie PR: Podziel duże PR na mniejsze, zarządzalne części.
* Zarządzanie Zależnościami: Upewnij się, że zależne PR są odnotowane i przeglądane w odpowiedniej kolejności.

## 7. Przeglądy Kodów
### 7.1. Cel
Przeglądy kodów pomagają utrzymać jakość kodu i zapewniają przestrzeganie standardów projektu.
### 7.2. Proces
Przeglądaj kod pod kątem poprawności, czytelności i przestrzegania standardów kodowania. Przekazuj opinie i żądaj zmian, jeśli to konieczne.
### 7.3. Lista Kontrolna
* Zgodność ze standardami kodowania.
* Odpowiednia pokrycie testów.
* Jasne wiadomości commitów i aktualizacje dokumentacji.

## 8. Obsługa Zgłoszeń Błędów
### 8.1. Selekcja
Priorytetyzuj i klasyfikuj zgłoszenia błędów na podstawie ich powagi i wpływu.
### 8.2. Rozwiązywanie
Pracuj nad rozwiązywaniem błędów w odpowiednim czasie, zapewniając, że poprawki są dobrze przetestowane.
### 8.3. Przykłady
* Wysoki Priorytet: Krytyczne awarie systemu.
* Średni Priorytet: Problemy z funkcjonalnością.
* Niski Priorytet: Drobne błędy UI.

## 9. Testowanie i Zapewnienie Jakości
### 9.1. Testy Automatyczne
Upewnij się, że Twoje zmiany przechodzą wszystkie odpowiednie testy automatyczne.
### 9.2. Testy Ręczne
Przeprowadzaj testy ręczne, gdy jest to konieczne, zwłaszcza dla funkcji związanych z interfejsem użytkownika.
### 9.3. Integracja Ciągła
Korzystaj z systemu integracji ciągłej projektu, aby zweryfikować swoje zmiany.
### 9.4. Wytyczne dotyczące Pisania Testów
* Używaj frameworków testowych.
* Uwzględniaj testy jednostkowe dla nowych funkcji.

## 10. Dokumentacja
### 10.1. Aktualizacja Dokumentacji
Upewnij się, że wszystkie zmiany są odzwierciedlone w odpowiedniej dokumentacji.
### 10.2. Pisanie Nowej Dokumentacji
Pisanie jasnej, zwięzłej i kompleksowej dokumentacji dla nowych funkcji i zmian.
### 10.3. Standardy
* Używaj Markdown do dokumentacji.
* Przestrzegaj przewodnika stylu projektu.
### 10.4. Narzędzia
* MkDocs do zarządzania dokumentacją.

## 11. Komunikacja i Zachowanie
### 11.1. Kodeks Postępowania
Przestrzegaj kodeksu postępowania projektu we wszystkich interakcjach.
### 11.2. Kanały Komunikacji
Używaj odpowiednich kanałów (listy mailingowe, fora, czat) do dyskusji i ogłoszeń.
### 11.3. Przykłady Odpowiedniego Zachowania
* Szacunek i konstruktywna komunikacja.
* Profesjonalizm we wszystkich interakcjach.

## 12. Zasoby
### 12.1. Dokumentacja
Dostęp do portalu dokumentacji projektu dla wytycznych i odniesień.
### 12.2. Narzędzia
Rekomendowane narzędzia i urządzenia dla rozwoju:
* IDE: JetBrains IDEs, vscode, Sublime Text
* Narzędzia Debuggingowe: GDB, LLDB