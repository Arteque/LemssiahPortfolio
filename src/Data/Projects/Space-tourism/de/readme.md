## Responsive Website using just the basics!

![screenshot](./Projects/Space-tourism/screenshot.png)

Für diese Herausforderung habe ich die Website mit einfachem HTML5 ![html](./Icons/Html.svg) - CSS3 /Scss ![Css](./Icons/Css3.svg) - JavaScript ![Js](./Icons/Js.svg) entwickelt, ohne auf Frameworks zurückzugreifen. Hier ist, wie ich vorgegangen bin:

### Struktur mit HTML

Ich habe mit einer klaren und semantischen Struktur in HTML begonnen. Jede Seite wurde mit verschiedenen Abschnitten gestaltet, die je nach ausgewähltem Tab angezeigt werden sollten. Ich habe `div`-Container verwendet, um zusammengehörige Inhalte zu gruppieren, und jeder Abschnitt hatte eine eindeutige ID, damit die Sichtbarkeit später mit JavaScript einfach gesteuert werden konnte.

```
html
<div id="content1" class="content active">...</div>
<div id="content2" class="content">...</div>
```

### Gestaltung mit CSS

Beim Styling habe ich einen mobile-first-Ansatz verfolgt, um die Seite responsiv zu gestalten. Mit Media Queries habe ich das Layout je nach Bildschirmgröße angepasst, sodass der Inhalt auf verschiedenen Geräten optimal angezeigt wird.

```
css
@media (min-width: 768px) {
  .content {
    display: flex;
    ...
  }
}

```

Zusätzlich habe ich Hover-Effekte für alle interaktiven Elemente wie Buttons und Links hinzugefügt. Dabei kamen CSS-Übergänge zum Einsatz, um ein flüssiges Nutzererlebnis zu schaffen.

```
button:hover {
  background-color: #f0f0f0;
  transition: background-color 0.3s ease;
}
```

### Interaktivität mit JavaScript

Für die Tab-Funktionalität habe ich Vanilla-JavaScript verwendet, um zwischen den verschiedenen Inhaltsabschnitten umzuschalten. Ich habe Klick-Eventlistener zu den Tabs hinzugefügt, und jedes Mal, wenn ein Tab geklickt wurde, änderte ich den sichtbaren Bereich durch das Umschalten der active-Klasse beim entsprechenden Inhalt.

```
const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.content');

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    contents.forEach((content) => content.classList.remove('active'));
    contents[index].classList.add('active');
  });
});
```

### Datenhandling mit JSON

Da ich einen reinen JavaScript-Ansatz verwendet habe, habe ich die Daten dynamisch aus einer lokalen data.json-Datei geladen. Ich habe die JSON-Daten beim Laden der Seite abgerufen und den Seiteninhalt basierend auf dem ausgewählten Tab aktualisiert. So konnte ich den HTML-Code sauber und minimal halten, während der meiste Inhalt dynamisch eingefügt wurde.

```
fetch('data.json')
  .then((response) => response.json())
  .then((data) => {
    // Dynamisch Inhalte basierend auf dem ausgewählten Tab aktualisieren
  });
```

### Links

- Solution Code: [Repo](https://github.com/Arteque/Space-tourism)
- Live Site URL: [Live page](https://arteque.github.io/Space-tourism/index.html)

### Fazit

Durch die Verwendung von einfachem HTML, CSS und JavaScript konnte ich eine schnelle, responsive und interaktive Website erstellen, ohne viel Overhead. Dieser Ansatz gab mir volle Kontrolle über den Code und die Flexibilität, Dinge leicht anzupassen. Es war ein spaßiger und effizienter Prozess!

### Author

- Website - [Ahmed Lemssiah](https://www.artecke.de)
- Frontend Mentor - [@Arteque](https://www.frontendmentor.io/profile/Arteque)
- Twitter - [@ArteckeDesign](https://twitter.com/ArteckeDesign)
- Youtube - [@artecke99999](https://www.youtube.com/channel/UCjzbCFOWdsdV6gxa5ho7EtQ)
- Instagram - [@artt3k](https://www.instagram.com/artt3k/)
