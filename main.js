document.body.addEventListener("click", Slide);
document.body.addEventListener("keypress", klik);
let Zdjecie = new Image();
let i = 1;
Zdjecie.src = "https://picsum.photos/500/500";
Zdjecie.addEventListener("load", ZdjecieZaladowane);

function ZdjecieZaladowane(e) {
  console.log(`Really loaded, width: ${Zdjecie.width}`);
}

//komentarz

let pliki = [
  "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2015/12/shutterstock_40624609.jpg",
  "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2015/12/shutterstock_234047623.jpg",
  "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2015/12/shutterstock_176079335.jpg",
  "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2015/12/shutterstock_152170526.jpg",
  "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2015/12/shutterstock_153813350.jpg",
];

const Zdjecie1 = new Image();
Zdjecie1.src =
  "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2015/12/shutterstock_40624609.jpg";
document.body.appendChild(Zdjecie1);
Zdjecie1.setAttribute("id", "1");
Zdjecie1.style.visibility = "visible";
Zdjecie1.style.position = "fixed";

console.log("Zdjecie1 załadowane");
Zdjecie1.addEventListener("load", () => {
  const Zdjecie2 = new Image();

  Zdjecie2.src =
    "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2015/12/shutterstock_234047623.jpg";
  document.body.appendChild(Zdjecie2);
  console.log("Zdjecie2 załadowane");
  Zdjecie2.setAttribute("id", "2");
  Zdjecie2.style.visibility = "hidden";
  Zdjecie2.style.position = "fixed";

  Zdjecie2.addEventListener("load", () => {
    const Zdjecie3 = new Image();
    Zdjecie3.src =
      "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2015/12/shutterstock_176079335.jpg";
    document.body.appendChild(Zdjecie3);
    Zdjecie3.setAttribute("id", "3");
    Zdjecie3.style.visibility = "hidden";
    Zdjecie3.style.position = "fixed";
    console.log("Zdjecie3 załadowane");

    Zdjecie3.addEventListener("load", () => {
      const Zdjecie4 = new Image();
      Zdjecie4.src =
        "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2015/12/shutterstock_152170526.jpg";
      document.body.appendChild(Zdjecie4);
      console.log("Zdjecie4 załadowane");
      Zdjecie4.setAttribute("id", "4");
      Zdjecie4.style.visibility = "hidden";
      Zdjecie4.style.position = "fixed";

      Zdjecie4.addEventListener("load", () => {
        const Zdjecie5 = new Image();
        Zdjecie5.src =
          "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2015/12/shutterstock_153813350.jpg";
        document.body.appendChild(Zdjecie5);
        console.log("Zdjecie5 załadowane");
        Zdjecie5.setAttribute("id", "5");
        Zdjecie5.style.visibility = "hidden";
        Zdjecie5.style.position = "fixed";
        Zdjecie5.addEventListener("load", () => {});
      });
    });
  });
});

function klik(e) {
  console.log(e.code);
  console.log(i);
  if (e.code == "KeyA") {
    i--;
    if (i < 1) {
      i = 5;
      document
        .getElementById(1)
        .setAttribute("style", `visibility: hidden; position: fixed`);
    }
    if (i == 1) {
      document
        .getElementById(2)
        .setAttribute("style", `visibility: hidden; position: fixed`);
    }
    if (i == 5) {
      document
        .getElementById(i)
        .setAttribute("style", `visibility: hidden; position: fixed`);
    } else
      document
        .getElementById(i + 1)
        .setAttribute("style", `visibility: hidden; position: fixed`);
    document
      .getElementById(i)
      .setAttribute("style", `visibility: visible; position: fixed`);
  }
  if (e.code == "KeyD") {
    i++;
    if (i > pliki.length) {
      i = 1;
      document
        .getElementById(5)
        .setAttribute("style", `visibility: hidden; position: fixed`);
    }
    if (i == 1) {
      document
        .getElementById(i)
        .setAttribute("style", `visibility: hidden; position: fixed`);
    } else {
      document
        .getElementById(i - 1)
        .setAttribute("style", `visibility: hidden; position: fixed`);
      document
        .getElementById(i)
        .setAttribute("style", `visibility: visible; position: fixed`);
    }
  }
}

function Slide() {
  i++;
  if (i > pliki.length) {
    i = 1;
  }

  if (i == 1) {
    document
      .getElementById(5)
      .setAttribute("style", `visibility: hidden; position: fixed`);
    document
      .getElementById(1)
      .setAttribute("style", `visibility: visible; position: fixed`);
  } else
    document
      .getElementById(i - 1)
      .setAttribute("style", `visibility: hidden; position: fixed`);
  document
    .getElementById(i)
    .setAttribute("style", `visibility: visible; position: fixed`);

  console.log(i);
}

for (plik of pliki) {
  const Zdjecie = new Image();
  Zdjecie.src = plik;
  Zdjecie.addEventListener("load", () => {
    if (ZdjecieZaladowane.length === pliki.length) {
      console.log("done! really.");
    }
  });
}
