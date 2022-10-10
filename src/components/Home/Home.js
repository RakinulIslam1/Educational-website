import React from 'react';
import Lottie from 'lottie-react'
import coding from '../coding.json'
import './Home.css'
const Home = () => {
    return (
      <div className="home">
        <div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis earum provident, quod dignissimos in repellat aspernatur iure aliquid quibusdam magni obcaecati cum perspiciatis amet, alias, laborum inventore officiis distinctio cumque repudiandae! Similique obcaecati non saepe corporis sint maiores unde sequi debitis aut, minima itaque vero inventore animi soluta in laborum, repellat fugit tenetur labore sunt natus. Similique sequi quas odio eius omnis facere explicabo a voluptatibus veniam nulla aliquid iusto cupiditate officia reiciendis sed expedita cumque natus assumenda, qui nam fuga voluptas ut vel. Consectetur dolor corrupti repudiandae? Possimus reiciendis nihil officiis illum assumenda sit doloribus modi dolore facere velit veniam, temporibus amet pariatur eaque cupiditate fugit eligendi, animi similique numquam earum aut. Iusto, nam, sed velit qui autem dolorum deleniti vero placeat nostrum maxime est dignissimos quasi nihil, cumque officia aliquid dolor ab facilis enim libero odio in eos corporis! Sequi excepturi vel omnis optio voluptatem exercitationem dolorum quidem. Voluptatem consequatur iusto modi aut quisquam, quidem soluta, eveniet illo impedit eos repellendus quam accusamus facilis dolores? Accusantium iste dolor molestiae deserunt suscipit eius, veniam est voluptas. Eaque illo laborum quam? Facere deserunt recusandae deleniti ad incidunt voluptas, facilis quisquam! Harum quaerat eius consequatur quas pariatur possimus vel, iste quis!
          </p>
        </div>
        <div className="lottie">
          <Lottie animationData={coding} loop={true}></Lottie>
        </div>
      </div>
    );
};

export default Home;