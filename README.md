# Zadanie Workshop 1 - RPN calculator

## Działanie
Do uruchomienia kodu potrzebne są:
- git
- node w wersji przynajmniej 16.14.0 (do instalacji node polecam użycie [asdf](https://asdf-vm.com/), [nodenv](https://github.com/nodenv/nodenv) lub [nvm](https://github.com/nvm-sh/nvm))
- w katalogu źródłowym po zainstalowaniu node pobrać paczki przy użyciu `npm install`
- aby odpalić testy `npm run test`
- aby przetestować działanie aplikacji `npm run calculate`

## Kontekst

Twój kolega z zespołu wrzucił do repozytorium kod z implementacji kalkulatora RPN (reverse polish notation).

Funkcjonalność którą próbował zaimplementować podana jest poniżej:

### Treść zadania które wykonał Twój kolega
Napisz funkcję `rpn(inputString)`, implementującą kalkulator operujący na wyrażeniach w odwrotnej notacji polskiej (RPN).
Obsłuż następujące przypadki:
- `"1 3 +" zwraca 4`
- `"2 2 + 3 *" zwraca 12`
- `"2 2 /" zwraca 1`
- `"3 1 – 2 2 + *" zwraca 8`
- `"4 3 4 + 5 1 + 2 * + +" zwraca 23`
- `"" lub "abc" rzuca błąd "Invalid Expression"`
- `"1 +" rzuca błąd "Not Enough Operands"`

Obsłuż jedynie operatory: `+` `-` `/` `*`

Opis prostego algorytmu kalkulatora RPN:
```text
powtarzaj dla token := weź_następny_token
    jeżeli token to liczba
        odłóż token na stos
    w przeciwnym wypadku jeżeli token to operator
        argumenty := weź_2_liczby_ze_stosu
        wynik := argument1 operator argument2
        odłóż_wynik_na_stos()

zwróć_ostatnią_wartość_ze_stosu()
```

Np. dla wyrażenia "2 3 7 * -":
```text
odczytaj 2:
    odłóż 2 na stosie
odczytaj 3:
    odłóż 3 na stosie
odczytaj 7:
    odłóż 7 na stosie
odczytaj *:
    pobierz dwie ostatnie liczby ze stosu
    pobrano 3 oraz 7, wylicz 3 * 7 = 21
    odłóż 21 na stosie
odczytaj -:
    pobierz dwie ostatnie liczby ze stosu
    pobrano 2 oraz 21, wylicz 2 - 21 = -19
    odłóż -19 na stosie

zwróć -19
```

## Zadanie

Deadline na ukończenie zadania to 23:59 w poniedziałek 28.02

Twoje zadanie składa się z 2 części:
1. Zrób [Code Review](https://en.wikipedia.org/wiki/Code_review) w języku angielskim kodu zastanego w folderze `/src/rpn`. (nie przejmuj się jakąkolwiek zawartością poza tym folderem).
2. Zaimplementuj zgłoszone przez siebie uwagi i jeżeli uznasz, że zadanie zostało przez Twojego kolegę nie dokończone dokończ je za niego.

### Sposób pracy

1. Sklonuj to repozytorium lokalnie: `git clone git@github.com:elpassion/elp-workshop-1.git` [wymaga to ustawienia wcześniej klucza SSH na githubie](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account). **Nie twórz forka repozytorium.**
2. Stwórz swoje własne prywatne repozytorium na Githubie.
3. Zmień remote w sklonowanym repozytorium na adres swojego nowe repozytorium np. `git remote set-url origin git@github.com:michalwarda/test`.
4. zaproś `michalwarda` do kolaboracji w swoim repozytorium (wystarczy opcja `Read`)
5. Zostaw komentarze do plików zmienionych w ostatnim commitcie **w swoim repozytorium**. (pliki w folderze `/src/rpn`) ![image](https://user-images.githubusercontent.com/8479334/155333756-26e7e8a8-c16a-4d9b-b72a-987c76d9cfaf.png) ![image](https://user-images.githubusercontent.com/8479334/155333913-bca9a014-e7e6-4735-9491-c635c0200180.png)
6. W **swoim nowo stworzonym repozytorium** stwórz PR z kodem który implementuje zgłoszone przez Ciebie wcześniej uwagi i dokończenie zadania.
7. W momencie ukończenia zadania wyślij link do repozytorium poprzez [formularz](https://forms.gle/zGe8CAhXqTp7EyPv9).

### Materiały pomocnicze
1. [How to do a code review](https://google.github.io/eng-practices/review/reviewer/) - tutorial Google jak dawać Code Review. Polecam przeczytać od deski do deski :)
2. [Kalkulator RPN](https://en.wikipedia.org/wiki/Reverse_Polish_notation) - opis działania i kilka ciekawostek na temat historii, działania i po co to.
3. [Dokumentacja frameworku do testów](https://jestjs.io/)
4. [You don't know JS](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/README.md) - prawdopodobnie najlepsza książka o podstawach JS
5. [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html) - najlepsze źródło informacji o TS.

### Hints
1. Nie śpiesz się. Przeczytaj dokładnie kod i najlepiej zapoznaj się z materiałami pomocniczymi, szczególnie 1, 2 i 3.
2. Pamiętaj, że CR robisz swojemu koledze z zespołu, przekaż uwagi w taki sposób, żeby je zrozumiał i nie zraził się do Ciebie.
3. Pamiętaj o testach.
4. Nie ma jednego słusznego rozwiązania zadania. "Jakość kodu" i "wygląd" są bardzo subiektywne. Nie przejmuj się tym czy Twoje rozwiązanie jest idealne. Skup się na tym, żeby zrozumieć i przekazać czemu jest lepsze od poprzedniego.
5. Spróbuj użyć narzędzia jak https://github.com/typescript-eslint/typescript-eslint do podpowiedzenia potencjalnych błędów.

###
TESTING