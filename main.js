document.body.addEventListener('keypress', onclick);
let Zdjecie = new Image();
Zdjecie.src = "https://picsum.photos/500/500"
Zdjecie.addEventListener('load', ZdjecieZaladowane)




function ZdjecieZaladowane(e){
    console.log(`Really loaded, width: ${Zdjecie.width}`);
}


let pliki = ["https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2015/12/shutterstock_40624609.jpg","https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2015/12/shutterstock_234047623.jpg", "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2015/12/shutterstock_176079335.jpg", "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2015/12/shutterstock_152170526.jpg", "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2015/12/shutterstock_153813350.jpg"]

const Zdjecie1 = new Image();
Zdjecie1.src = "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2015/12/shutterstock_40624609.jpg"
document.body.appendChild(Zdjecie1);
console.log('Zdjecie1 załadowane')
Zdjecie1.addEventListener('load', () => {
const Zdjecie2 = new Image();
Zdjecie2.src = "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2015/12/shutterstock_234047623.jpg";
document.body.appendChild(Zdjecie2)
console.log('Zdjecie2 załadowane')
Zdjecie2.addEventListener('load', () => {
    const Zdjecie3 = new Image();
    Zdjecie3.src = "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2015/12/shutterstock_176079335.jpg";
    document.body.appendChild(Zdjecie3)
    console.log('Zdjecie3 załadowane')
    Zdjecie3.addEventListener('load', () => {
        const Zdjecie4 = new Image();
        Zdjecie4.src = "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2015/12/shutterstock_152170526.jpg";
        document.body.appendChild(Zdjecie4)
        console.log('Zdjecie4 załadowane')
        Zdjecie4.addEventListener('load', () => {
            const Zdjecie5 = new Image();
            Zdjecie5.src = "https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2015/12/shutterstock_153813350.jpg";
            document.body.appendChild(Zdjecie5)
            console.log('Zdjecie5 załadowane')
            Zdjecie5.addEventListener('load', () => {
            
           })
        })
      })
   })
})

for(plik of pliki){
    const Zdjecie = new Image();
    Zdjecie.src = plik;
    Zdjecie.addEventListener('load', () => {
        if(ZdjecieZaladowane.length === pliki.length){
            console.log('done! really.')
        }
    })
}
