//* ================================
//*  Callback hell
//* ================================

//? Callback hell, also known as the Pyramid of Doom, refers to a situation in asynchronous


const getStudentData = () => {
  setTimeout(() => {
    console.log("Hi, My name is vinod");
    setTimeout(() => {
      console.log("Hi, My middleName is Bahadur");
      setTimeout(() => {
        console.log("Hi, My lastName is Thapa");
        setTimeout(() => {
          console.log("Hi, I like to code ");
          setTimeout(() => {
            console.log("Hi, I live in pune");
            setTimeout(() => {
              console.log("Hi, I was born in Pokhara, Nepal");
              setTimeout(() => {
                console.log("Hi, I love to play football");
                setTimeout(() => {                                     // just see the left side a pyramid created which is a call bac
                console.log("Hi,I was a national Player in athletics ");// difficult to understand structure
                }, 1000);
              }, 1000);   // to solvethis we use promises
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
};

getStudentData();
