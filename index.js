const testimonialContainer = document.querySelector(".testimonial-container");
const testimonial = document.querySelector(".testimonial");
const userImage = document.querySelector(".user-avatar");
const username = document.querySelector(".username");
const twitterHandler = document.querySelector(".twitter-handler");

const testimonials = [
  {
    name: "George Okafor",
    position: "Manager CEO",
    photo: "./IMG-20230417-WA0008.jpg",
    text: `dfbgngdfbcvbfdbdfbgdgfbfvbdfbdfbbgbd dfbgngdfbcvbfdbdfbgdgfbfvbdfbdfbbgbd  Lorem ipsum dolor sit amet consectetur adipisic
             elit. Eaque veniam, quidem nesciunt magni voluptatibus
              quo consequuntur accusamus iste harum libero in quos
               ratione ex fugit quod expedita voluptas omnis vitae
                nisi error quasi, doloremque qui placeat. Alias
                 pariatur labore cumque.`,
  },
  {
    name: "onos Oderhohwo",
    position: "Secretary",
    photo: "./20230625_112420.jpg",
    text: `dfbgngdfbcvbfdbdfbgdgfbfvbdfbdfbbgbd dfbgngdfbcvbfdbdfbgdgfbfvbdfbdfbbgbd  Lorem ipsum dolor sit amet consectetur adipisic
             elit. Eaque veniam, quidem nesciunt magni voluptatibus
              quo consequuntur accusamus iste harum libero in quos
               ratione ex fugit quod expedita voluptas omnis vitae
                nisi error quasi, doloremque qui placeat. Alias
                 pariatur labore cumque.`,
  },
  {
    name: "paul VinMacoff",
    position: "Sales Manager",
    photo: "./IMG-20230515-WA0006.jpg",
    text: `dfbgngdfbcvbfdbdfbgdgfbfvbdfbdfbbgbd dfbgngdfbcvbfdbdfbgdgfbfvbdfbdfbbgbd  Lorem ipsum dolor sit amet consectetur adipisic
             elit. Eaque veniam, quidem nesciunt magni voluptatibus
              quo consequuntur accusamus iste harum libero in quos
               ratione ex fugit quod expedita voluptas omnis vitae
                nisi error quasi, doloremque qui placeat. Alias
                 pariatur labore cumque.`,
  },
  {
    name: "samson Eve Daniels",
    position: "Civil Engineering",
    photo: "./IMG-20230515-WA0011.jpg",
    text: `dfbgngdfbcvbfdbdfbgdgfbfvbdfbdfbbgbd dfbgngdfbcvbfdbdfbgdgfbfvbdfbdfbbgbd  Lorem ipsum dolor sit amet consectetur adipisic
             elit. Eaque veniam, quidem nesciunt magni voluptatibus
              quo consequuntur accusamus iste harum libero in quos
               ratione ex fugit quod expedita voluptas omnis vitae
                nisi error quasi, doloremque qui placeat. Alias
                 pariatur labore cumque.`,
  },
  {
    name: "Ayo Saint Smith",
    position: "Pastor",
    photo: "./IMG_6585.JPG",
    text: `dfbgngdfbcvbfdbdfbgdgfbfvbdfbdfbbgbd dfbgngdfbcvbfdbdfbgdgfbfvbdfbdfbbgbd  Lorem ipsum dolor sit amet consectetur adipisic
             elit. Eaque veniam, quidem nesciunt magni voluptatibus
              quo consequuntur accusamus iste harum libero in quos
               ratione ex fugit quod expedita voluptas omnis vitae
                nisi error quasi, doloremque qui placeat. Alias
                 pariatur labore cumque.`,
  },
];

let counter = 1;

function showNext() {
  const { name, position, photo, text } = testimonials[counter];

  testimonial.innerHTML = text;
  userImage.src = photo;
  username.innerHTML = name;
  twitterHandler.innerHTML = position;

  counter++;
  if (counter > testimonials.length - 1) {
    counter = 0;
  }
}

setInterval(() => {
  showNext();
}, 10000);
