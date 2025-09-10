
    let data = [

        {
            url:'1200x675mf.jpg.png',
    name:'Patton Oswalt Annihilation',
    raqam:'7.4',
    yili:'2017',
    Raqami:'1 hr 6 min'
    

        },






        {

            url: '1200x675mf.jpg.png',
            name: 'Patton Oswalt Annihilation',
            raqam: '7.4',
            yili: '2017',
            Raqami: '1 hr 6 min'
        },
        {
            url: '1200x675mf.jpg.png',
            name: 'Inception',
            raqam: '8.8',
            yili: '2010',
            Raqami: '2 hr 28 min'
        },
        {
            url: '1200x675mf.jpg.png',
            name: 'Interstellar',
            raqam: '8.6',
            yili: '2014',
            Raqami: '2 hr 49 min'
        },
        {
            url: '1200x675mf.jpg.png',
            name: 'The Dark Knight',
            raqam: '9.0',
            yili: '2008',
            Raqami: '2 hr 32 min'
        },
        {
            url: '1200x675mf.jpg.png',
            name: 'Parasite',
            raqam: '8.6',
            yili: '2019',
            Raqami: '2 hr 12 min'
        },
        {
            url: '1200x675mf.jpg.png',
            name: 'Joker',
            raqam: '8.5',
            yili: '2019',
            Raqami: '2 hr 2 min'
        },
        {
            url: '1200x675mf.jpg.png',
            name: 'Avengers: Endgame',
            raqam: '8.4',
            yili: '2019',
            Raqami: '3 hr 1 min'
        },
        {
            url: '1200x675mf.jpg.png',
            name: 'The Matrix',
            raqam: '8.7',
            yili: '1999',
            Raqami: '2 hr 16 min'
        },
        {
            url: '1200x675mf.jpg.png',
            name: 'Fight Club',
            raqam: '8.8',
            yili: '1999',
            Raqami: '2 hr 19 min'
        },
        {
            url: '1200x675mf.jpg.png',
            name: 'Forrest Gump',
            raqam: '8.8',
            yili: '1994',
            Raqami: '2 hr 22 min'
        },
        {
            url: '1200x675mf.jpg.png',
            name: 'Gladiator',
            raqam: '8.5',
            yili: '2000',
            Raqami: '2 hr 35 min'
        },
        {
            url: '1200x675mf.jpg.png',
            name: 'The Shawshank Redemption',
            raqam: '9.3',
            yili: '1994',
            Raqami: '2 hr 22 min'
        },
        {
            url: '1200x675mf.jpg.png',
            name: 'The Godfather',
            raqam: '9.2',
            yili: '1972',
            Raqami: '2 hr 55 min'
        },
        {
            url: '1200x675mf.jpg.png',
            name: 'The Godfather: Part II',
            raqam: '9.0',
            yili: '1974',
            Raqami: '3 hr 22 min'
        },
        {
            url: '1200x675mf.jpg.png',
            name: 'Schindler\'s List',
            raqam: '8.9',
            yili: '1993',
            Raqami: '3 hr 15 min'
        },
        {
            url: '1200x675mf.jpg.png',
            name: 'The Lord of the Rings: The Fellowship of the Ring',
            raqam: '8.8',
            yili: '2001',
            Raqami: '2 hr 58 min'
        },
        {
            url: '1200x675mf.jpg.png',
            name: 'The Lord of the Rings: The Two Towers',
            raqam: '8.7',
            yili: '2002',
            Raqami: '2 hr 59 min'
        },
        {
            url: '1200x675mf.jpg.png',
            name: 'The Lord of the Rings: The Return of the King',
            raqam: '8.9',
            yili: '2003',
            Raqami: '3 hr 21 min'
        },
        {
            url: '1200x675mf.jpg.png',
            name: 'Saving Private Ryan',
            raqam: '8.6',
            yili: '1998',
            Raqami: '2 hr 49 min'
        },
    
    ]
    




    let div = document.querySelector('div')
    let Myfunction = (a)=>{
      
    
    div.innerHTML = ""
    a.map((car)=>{
    
        div.innerHTML += `
         <div class="car">
       <img src="${car.url}" alt="">
         <b>${car.name}</b>
         
      
         <p>${car.Raqami}</p>
         <p>${car.yili}</p>
         <p>${car.raqam}</p>
         </div>      
        
        `
    
    })
    
    }
    Myfunction(data)
    
    let select = document.querySelector('select')
    
    
    
    select.addEventListener('change', ()=>{
      let data2 = [...data]
      if(select.value === "name"){
        let filtered = data2.sort((a,b) => a.name.localeCompare(b.name))
        Myfunction(filtered)
      }else if(select.value === "name2"){
        let filtered = data2.sort((a, b) => b.name.localeCompare(a.name))
        Myfunction(filtered)
      }else if(select.value === "son"){
        let filtered = data2.sort((a, b) => a.yili - b.yili);
        Myfunction(filtered);
      }
    
      else if(select.value === "son2"){
        let filtered = data2.sort((a, b) => b.yili - a.yili);
        Myfunction(filtered);
      }
    })
    
    
    
    
    let inp = document.querySelector('input')
    
    
    
    inp.addEventListener('input',()=>{
      let sa =  data.filter((t) => t.name.includes(inp.value))
      Myfunction(sa)
     
    })
    
    
    
    




















































































































