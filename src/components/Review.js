import React, { useState } from 'react'

const Review = () => {
  const reviews = [
    {
      id: 1,
      name: 'susan smith',
      job: 'web developer',
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: 'anna johnson',
      job: 'web designer',
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
      text:
        'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
      id: 3,
      name: 'peter jones',
      job: 'intern',
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
      text:
        'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
      id: 4,
      name: 'bill anderson',
      job: 'the boss',
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
      text:
        'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
  ];
  const [index, setIndex] = useState(0)

  const {id, name, job, image, text} = reviews[index]

  function checkIndex(num) {
    if(num < 0) return reviews.length - 1;
    else if (num >= reviews.length) return 0;
    return num;
  }

  function nextReview(){
    setIndex((prev) => checkIndex(prev + 1));
  }
  function prevReview(){
    setIndex((prev) => checkIndex(prev - 1));
  }
  function randomReview(){
    let randomIndex = Math.floor(Math.random() * reviews.length)
    while (randomIndex === index){
      randomIndex = Math.floor(Math.random() * reviews.length)
    }
    setIndex(randomIndex)
  }
  return (
    <div>
      <div className="review">
        <p className='author' id={`author-${id}`}>{name}</p>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>
        <img src={image} alt="image" className='person-img'/>
      </div>
      <button className='prev-btn' onClick={nextReview}>Prev</button>
      <button className='next-btn' onClick={prevReview}>Next</button>
      <button className='random-btn' onClick={randomReview}>surprise me</button>
    </div>
  )
}

export default Review