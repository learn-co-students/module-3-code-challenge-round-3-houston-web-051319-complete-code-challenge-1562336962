// const theatreId = null;
document.addEventListener('DOMContentLoaded',()=>{

// let card = document.querySelector('.ui cards showings')
let panel = document.querySelector('#panel')
// ui cards showings
let theatresURL = 'http://localhost:3000/theatres'
  fetch(theatresURL)
  .then(res  => res.json())
  .then(theatres => {
    console.log(theatres[0].showings);
//call function to render show
theatres[0].showings.forEach(show => () => new Showing)

  })

  class Showing{

    constructor(show){
      let card =  document.createElement('div')

      let title = document.createElement('h2')
      title.innerText = show.film.title

      let run_time = document.createElement('p')
      run_time.innerText = `${show.film.runtime} minuntes`

      let show_time = document.createElement('p')
      show_time = show.showtime

      // let room = document.createElement('p')
      // room.innerText = show.capacity

      let t_remain = document.createElement('p')
      t_remain.innerText = `${show.capacity-show.tickets_sold} reamining tickets`

      let bb =document.createElement('button')
      bb.innerText = 'Buy Ticket'

      bb.addEventListener('click', function(){
        console.log(parseInt(t_remain.innerText));
        // t_remain.innerText
        t_remain.innerText = ` ${parseInt(t_remain.innerText)-1} reamining tickets`
      })


      bb.addEventListener('click',function(){
        fetch('http://localhost:3000/tickets',{
          method: "POST",
          headers:{
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            showing_id: show.id
          })
        })//fetch
        console.log('hello there');
      })//listener

      card.append(title,run_time,show_time,t_remain,bb)

      panel.append(card)


    }//constructor

  }//class Showing






  // function renderShow(show){
  //
  //   let card =  document.createElement('div')
  //
  //   let title = document.createElement('h2')
  //   title.innerText = show.film.title
  //
  //   let run_time = document.createElement('p')
  //   run_time.innerText = `${show.film.runtime} minuntes`
  //
  //   let show_time = document.createElement('p')
  //   show_time = show.showtime
  //
  //   // let room = document.createElement('p')
  //   // room.innerText = show.capacity
  //
  //   let t_remain = document.createElement('p')
  //   t_remain.innerText = `${show.capacity-show.tickets_sold} reamining tickets`
  //
  //   let bb =document.createElement('button')
  //   bb.innerText = 'Buy Ticket'
  //
  //   bb.addEventListener('click', function(){
  //     console.log(parseInt(t_remain.innerText));
  //     // t_remain.innerText
  //     t_remain.innerText = ` ${parseInt(t_remain.innerText)-1} reamining tickets`
  //   })
  //
  //
  //   bb.addEventListener('click',function(){
  //     fetch('http://localhost:3000/tickets',{
  //       method: "POST",
  //       headers:{
  //         "Content-Type": "application/json",
  //         "Accept": "application/json"
  //       },
  //       body: JSON.stringify({
  //         showing_id: show.id
  //       })
  //     })//fetch
  //     console.log('hello there');
  //   })//listener
  //
  //   card.append(title,run_time,show_time,t_remain,bb)
  //
  //   panel.append(card)
  //
  //
  // }//renderShow














})
