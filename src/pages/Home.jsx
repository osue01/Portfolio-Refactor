const Home = () => {
  return (
    <>
      
      <main class="main-element">
        <section class="flex">
          <div class="title-element" id="About">
            <h2>About Me</h2>
          </div>
          <div class="detail-element">
            <p class="p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur distinctio, enim velit maxime sunt labore, expedita
              nisi alias nobis, commodi fugit vero perspiciatis neque assumenda?
              Atque aspernatur debitis aliquam expedita.
            </p>
          </div>
        </section>

        <section class="flex">
          <div class="title-element">
            <h2>Recent Work</h2>
          </div>
          <div id="recent-work" class="detail-element">
            <figure class="refactor">
              {" "}
              <img
                src="https://images.unsplash.com/photo-1505852679233-d9fd70aff56d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Na Pali"
              />
              <figcaption>Semantic Refactor</figcaption>
            </figure>
            <img
              src="https://images.unsplash.com/photo-1484291470158-b8f8d608850d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Ocean"
            />
            <img
              src="https://images.unsplash.com/photo-1521706862577-47b053587f91?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Jungle"
            />
            <img
              src="https://images.unsplash.com/photo-1543613949-95cd1b38a10e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Sunrise"
            />
            <img
              src="https://plus.unsplash.com/premium_photo-1667353452312-05b10252b790?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bmVuZXxlbnwwfHwwfHx8MA%3D%3D"
              alt="Nene Goose"
            />
          </div>
        </section>

        <section class="flex">
          <div class="title-element" id="contact">
            <h2>Contact Me!</h2>
          </div>
          <div class="detail-element">
            <p class="p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur distinctio, enim velit maxime sunt labore, expedita
              nisi alias nobis, commodi fugit vero perspiciatis neque assumenda?
              Atque aspernatur debitis aliquam expedita.
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;