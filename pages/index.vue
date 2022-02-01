<template>
  <div>
    <section id="header">
      <div class="bg-slate-100 p-4 flex justify-between items-center">
        <div class="flex items-center">
          <img src="" alt="" />
          <a
            href="#"
            class="
              inline-block
              p-2
              text-indigo-400
              hover:text-indigo-300
              mr-2
              font-mono
            "
            >Home</a
          >
          <a
            href="#"
            class="
              inline-block
              p-2
              text-indigo-400
              hover:text-indigo-300
              font-mono
            "
            >Road Map</a
          >
          <a
            href="#"
            class="
              inline-block
              p-2
              text-indigo-400
              hover:text-indigo-300
              font-mono
            "
            >Team</a
          >
          <a
            href="#"
            class="
              inline-block
              p-2
              text-indigo-400
              hover:text-indigo-300
              font-mono
            "
            >Faqs</a
          >
          <a
            href="#"
            class="
              inline-block
              p-2
              text-indigo-400
              hover:text-indigo-300
              font-mono
            "
            >Story</a
          >
        </div>

        <div class="hidden md:block">
          <button
            class="
              animate-bounce
              inline-block
              py-4
              px-8
              bg-blue-100
              text-teal-100
              rounded-lg
              shadow-connect
              font-mono
            "
          >
            Connect
          </button>
        </div>
      </div>

      <section
        class="
          bg-gradient-to-r
          from-gray-500
          to-blue-500
          md:flex
          justify-between
          py-20
          px-10
          text-indigo-100
        "
      >
        <div class="md:w-1/2 mb-10 md:mb-0">
          <h2
            class="text-2xl md:text-4xl lg:text-6xl text-white mb-6 font-serif"
          >
            Lorem Ipsum
          </h2>
          <p class="mb-6 font-mono">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>
          <p class="mb-6 font-mono">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            praesentium sunt vero hic quam consequatur eveniet!
          </p>

          <a
            href="#"
            class="
              inline-block
              py-3
              px-6
              text-lg
              bg-gray-400
              text-gray-800
              hover:bg-gray-300
              rounded
              font-mono
              mr-2
            "
            >Discord</a
          >
          <a
            href="#"
            class="
              inline-block
              py-3
              px-8
              text-lg
              bg-orange-400
              text-orange-800
              hover:bg-orange-300
              rounded
              font-mono
            "
            >Mint</a
          >
        </div>

        <div class="md:w-1/2 flex justify-center">
          <img
            src="https://picsum.photos/500/500?image=0"
            alt="Happiest Doggo"
            class="rounded"
          />
        </div>
      </section>
    </section>
    <section
      id="road-map"
      class="relative bg-gradient-to-r from-purple-500 to-blue-300"
    >
      <div class="text-center py-10 mb-20">
        <h1
          class="
            sm:text-5xl
            text-2xl
            font-medium
            title-font
            text-gray-100
            mb-4
            font-mono
          "
        >
          Road Map
        </h1>
        <div class="w-20 h-2 rounded-full bg-green-500 inline-flex"></div>
      </div>
      <div
        class="
          max-w-4xl
          mx-auto
          px-4
          sm:px-6
          lg:max-w-7xl lg:px-8
          xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8
        "
      >
        <div
          class="relative pt-12 pb-24 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24"
        >
          <p class="mt-3 text-3xl font-extrabold text-white font-mono">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem.
          </p>

          <div class="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
            <p>
              <span class="block text-lg font-bold text-white font-serif"
                >LOREM</span
              >
              <span class="mt-1 block text-base text-gray-300 font-mono"
                ><span class="font-medium text-white">Lorem İpsum</span> dolor
                sit amet consectetur, adipisicing elit. Odio qui nostrum
                consequuntur corrupti.</span
              >
            </p>

            <p>
              <span class="block text-lg font-bold text-white font-serif"
                >LOREM</span
              >
              <span class="mt-1 block text-base text-gray-300 font-mono"
                ><span class="font-medium text-white">Lorem İpsum</span>dolor
                sit amet consectetur, adipisicing elit. Odio qui nostrum
                consequuntur corrupti.</span
              >
            </p>

            <p>
              <span class="block text-lg font-bold text-white font-serif"
                >LOREM</span
              >
              <span class="mt-1 block text-base text-gray-300 font-mono"
                ><span class="font-medium text-white">Lorem İpsum</span>dolor
                sit amet consectetur, adipisicing elit. Odio qui nostrum
                consequuntur corrupti.</span
              >
            </p>

            <p>
              <span class="block text-lg font-bold text-white font-serif"
                >LOREM</span
              >
              <span class="mt-1 block text-base text-gray-300 font-mono"
                ><span class="font-medium text-white">Lorem İpsum</span>dolor
                sit amet consectetur, adipisicing elit. Odio qui nostrum
                consequuntur corrupti.</span
              >
            </p>
          </div>
        </div>
        <div class="h-full xl:relative xl:col-start-2">
          <img
            class="
              h-100
              w-100
              object-cover
              opacity-75
              xl:absolute xl:inset-0
              mt-0
              sm:mt-44
              rounded-lg
            "
            src="https://picsum.photos/1000/500?image=0"
            alt="People working on laptops"
          />
          <div
            aria-hidden="true"
            class="
              absolute
              inset-x-0
              top-0
              h-32
              xl:inset-y-0 xl:left-0 xl:h-full xl:w-32
            "
          ></div>
        </div>
      </div>
    </section>

    <section id="team" class="text-gray-400 body-font bg-background bg-fixed">
      <div class="text-center mb-20">
        <h1
          class="
            sm:text-5xl
            text-2xl
            font-medium
            title-font
            text-gray-100
            mb-4
            font-mono
          "
        >
          Team
        </h1>
        <div class="w-20 h-2 rounded-full bg-green-500 inline-flex"></div>
      </div>
      <div class="container px-5 py-10 mx-auto">
        <div class="flex flex-wrap -m-4">
          <div class="p-4 md:w-1/3">
            <div
              class="
                h-full
                border-2 border-gray-800
                rounded-lg
                overflow-hidden
                bg-purple-300
              "
            >
              <img
                class="lg:h-48 md:h-36 w-full object-cover object-center"
                src="https://picsum.photos/1000/500?image=0"
                alt="blog"
              />
              <div class="p-6">
                <h2
                  class="
                    tracking-widest
                    text-xs
                    title-font
                    text-center
                    font-medium
                    text-gray-500
                    mb-1
                    font-mono
                  "
                >
                  CATEGORY
                </h2>
                <h1
                  class="
                    title-font
                    text-center text-lg
                    font-medium
                    text-white
                    mb-3
                    font-mono
                  "
                >
                  @The Lorem ipsum.
                </h1>
              </div>
            </div>
          </div>
          <div class="p-4 md:w-1/3">
            <div
              class="
                h-full
                border-2 border-gray-800
                rounded-lg
                overflow-hidden
                bg-purple-300
              "
            >
              <img
                class="lg:h-48 md:h-36 w-full object-cover object-center"
                src="https://picsum.photos/1000/500?image=0"
                alt="blog"
              />
              <div class="p-6">
                <h2
                  class="
                    tracking-widest
                    text-xs
                    title-font
                    text-center
                    font-medium
                    text-gray-500
                    mb-1
                    font-mono
                  "
                >
                  CATEGORY
                </h2>
                <h1
                  class="
                    title-font
                    text-center text-lg
                    font-medium
                    text-white
                    mb-3
                    font-mono
                  "
                >
                  @The Lorem ipsum.
                </h1>
              </div>
            </div>
          </div>
          <div class="p-4 md:w-1/3">
            <div
              class="
                h-full
                border-2 border-gray-800
                rounded-lg
                overflow-hidden
                bg-purple-300
              "
            >
              <img
                class="lg:h-48 md:h-36 w-full object-cover object-center"
                src="https://picsum.photos/1000/500?image=0"
                alt="blog"
              />
              <div class="p-6">
                <h2
                  class="
                    tracking-widest
                    text-xs
                    title-font
                    text-center
                    font-medium
                    text-gray-500
                    mb-1
                    font-mono
                  "
                >
                  CATEGORY
                </h2>
                <h1
                  class="
                    title-font
                    text-center text-lg
                    font-medium
                    text-white
                    mb-3
                    font-mono
                  "
                >
                  @The Lorem ipsum.
                </h1>
              </div>
            </div>
          </div>
          <div class="p-4 md:w-1/3">
            <div
              class="
                h-full
                border-2 border-gray-800
                rounded-lg
                overflow-hidden
                bg-purple-300
              "
            >
              <img
                class="lg:h-48 md:h-36 w-full object-cover object-center"
                src="https://picsum.photos/1000/500?image=0"
                alt="blog"
              />
              <div class="p-6">
                <h2
                  class="
                    tracking-widest
                    text-xs
                    title-font
                    text-center
                    font-medium
                    text-gray-500
                    mb-1
                    font-mono
                  "
                >
                  CATEGORY
                </h2>
                <h1
                  class="
                    title-font
                    text-center text-lg
                    font-medium
                    text-white
                    mb-3
                    font-mono
                  "
                >
                  @The Lorem ipsum.
                </h1>
              </div>
            </div>
          </div>
          <div class="p-4 md:w-1/3">
            <div
              class="
                h-full
                border-2 border-gray-800
                rounded-lg
                overflow-hidden
                bg-purple-300
              "
            >
              <img
                class="lg:h-48 md:h-36 w-full object-cover object-center"
                src="https://picsum.photos/1000/500?image=0"
                alt="blog"
              />
              <div class="p-6">
                <h2
                  class="
                    tracking-widest
                    text-xs
                    title-font
                    text-center
                    font-medium
                    text-gray-500
                    mb-1
                    font-mono
                  "
                >
                  CATEGORY
                </h2>
                <h1
                  class="
                    title-font
                    text-center text-lg
                    font-medium
                    text-white
                    mb-3
                    font-mono
                  "
                >
                  @The Lorem ipsum.
                </h1>
              </div>
            </div>
          </div>
          <div class="p-4 md:w-1/3">
            <div
              class="
                h-full
                border-2 border-gray-800
                rounded-lg
                overflow-hidden
                bg-purple-300
              "
            >
              <img
                class="lg:h-48 md:h-36 w-full object-cover object-center"
                src="https://picsum.photos/1000/500?image=0"
                alt="blog"
              />
              <div class="p-6">
                <h2
                  class="
                    tracking-widest
                    text-center text-xs
                    title-font
                    font-medium
                    text-gray-500
                    mb-1
                    font-mono
                  "
                >
                  CATEGORY
                </h2>
                <h1
                  class="
                    title-font
                    text-lg
                    font-medium
                    text-center text-white
                    mb-3
                    font-mono
                  "
                >
                  @The Lorem ipsum.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="faqs">
      <div class="font-sans container flex flex-col mx-auto pt-8">
        <div class="text-center py-10 mb-20">
          <h1
            class="
              sm:text-5xl
              text-2xl
              font-medium
              title-font
              text-gray-100
              mb-4
              font-mono
            "
          >
            FAQ
          </h1>
          <div class="w-20 h-2 rounded-full bg-green-500 inline-flex"></div>
        </div>

        <div class="w-full md:w-4/5 mx-auto p-4">
          <div class="shadow-md">
            <div
              class="
                tab
                w-full
                overflow-hidden
                my-4
                rounded-lg
                bg-yellow-50
                hover:bg-yellow-100
                bg-opacity-80
              "
            >
              <input
                class="absolute opacity-0"
                id="tab-multi-one"
                type="checkbox"
                name="tabs"
              />
              <label
                class="block p-5 leading-normal cursor-pointer font-mono"
                for="tab-multi-one"
                >Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Vitae?</label
              >
              <div
                class="
                  tab-content
                  overflow-hidden
                  font-mono
                  bg-yellow-50
                  leading-normal
                "
              >
                <p class="p-5 font-mono">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Deleniti, debitis. Ipsam, officia modi beatae animi nostrum
                  nobis vero est!
                </p>
              </div>
            </div>
            <div
              class="
                tab
                w-full
                overflow-hidden
                my-4
                rounded-lg
                bg-yellow-50
                hover:bg-yellow-100
                bg-opacity-80
              "
            >
              <input
                class="absolute opacity-0"
                id="tab-multi-two"
                type="checkbox"
                name="tabs"
              />
              <label
                class="block p-5 leading-normal cursor-pointer font-mono"
                for="tab-multi-two"
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad?</label
              >
              <div
                class="tab-content overflow-hidden bg-yellow-50 leading-normal"
              >
                <p class="p-5 font-mono">
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ab corrupti architecto itaque odio fuga adipisci hic rem eos!
                </p>
              </div>
            </div>
            <div
              class="
                tab
                w-full
                overflow-hidden
                my-4
                rounded-lg
                bg-yellow-50
                hover:bg-yellow-100
                bg-opacity-80
              "
            >
              <input
                class="absolute opacity-0"
                id="tab-multi-three"
                type="checkbox"
                name="tabs"
              />
              <label
                class="block p-5 leading-normal cursor-pointer font-mono"
                for="tab-multi-three"
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa?</label
              >
              <div
                class="tab-content overflow-hidden leading-normal bg-yellow-50"
              >
                <p class="p-5 font-mono">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi explicabo quam ex molestias deleniti. Facilis corporis adipisci eum fugit.
                </p>
              </div>
            </div>
            <div
              class="
                tab
                w-full
                overflow-hidden
                my-4
                rounded-lg
                bg-yellow-50
                hover:bg-yellow-100
                bg-opacity-80
              "
            >
              <input
                class="absolute opacity-0"
                id="tab-multi-four"
                type="checkbox"
                name="tabs"
              />
              <label
                class="block p-5 leading-normal cursor-pointer font-mono"
                for="tab-multi-four"
                >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id.</label
              >
              <div
                class="tab-content overflow-hidden bg-yellow-50 leading-normal"
              >
                <p class="p-5 font-mono">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ratione eos quidem quo velit! Eveniet atque rerum qui maxime.
                </p>
              </div>
            </div>
            <div
              class="
                tab
                w-full
                overflow-hidden
                my-4
                rounded-lg
                bg-yellow-50
                hover:bg-yellow-100
                bg-opacity-80
              "
            >
              <input
                class="absolute opacity-0"
                id="tab-multi-five"
                type="checkbox"
                name="tabs"
              />
              <label
                class="block p-5 leading-normal cursor-pointer font-mono"
                for="tab-multi-five"
                >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam.</label
              >
              <div
                class="tab-content overflow-hidden bg-yellow-50 leading-normal"
              >
                <p class="p-5 font-mono">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis temporibus consequuntur sed nesciunt corporis, inventore quaerat dolorem eaque tempore.
                </p>
              </div>
            </div>
            <div
              class="
                tab
                w-full
                overflow-hidden
                my-4
                rounded-lg
                bg-yellow-50
                hover:bg-yellow-100
                bg-opacity-80
              "
            >
              <input
                class="absolute opacity-0"
                id="tab-multi-six"
                type="checkbox"
                name="tabs"
              />
              <label
                class="block p-5 leading-normal cursor-pointer font-mono"
                for="tab-multi-six"
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet.</label
              >
              <div
                class="tab-content overflow-hidden bg-yellow-50 leading-normal"
              >
                <p class="p-5 font-mono">
                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius similique pariatur facere, sequi esse officiis mollitia fugit iusto reiciendis!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="story" class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="text-center mb-20">
          <h1
            class="
              sm:text-5xl
              text-2xl
              font-medium
              title-font
              text-gray-900
              mb-4
              font-mono
            "
          >
            Story
          </h1>
          <div class="w-20 h-2 rounded-full bg-green-500 inline-flex"></div>
        </div>
        <div
          class="
            flex
            items-center
            lg:w-3/5
            mx-auto
            border-b
            pb-10
            mb-10
            border-blue-200
            sm:flex-row
            flex-col
          "
        >
          <div
            class="
              sm:w-32 sm:h-32
              h-20
              w-20
              sm:mr-10
              inline-flex
              items-center
              justify-center
              rounded-full
              bg-indigo-100
              text-indigo-500
              flex-shrink-0
            "
          >
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="sm:w-16 sm:h-16 w-10 h-10"
              viewBox="0 0 24 24"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2
              class="
                text-gray-900 text-lg
                title-font
                font-medium
                mb-2
                font-serif
              "
            >
              Lorem, ipsum.
            </h2>
            <p class="leading-relaxed text-base font-mono">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio magni dolorum eum saepe, commodi quibusdam?
            </p>
          </div>
        </div>
        <div
          class="
            flex
            items-center
            lg:w-3/5
            mx-auto
            border-b
            pb-10
            mb-10
            border-blue-200
            sm:flex-row
            flex-col
          "
        >
          <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2
              class="
                text-gray-900 text-lg
                title-font
                font-medium
                mb-2
                font-serif
              "
            >
             Lorem, ipsum.
            </h2>
            <p class="leading-relaxed text-base font-mono">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt tempore magni laudantium dolor sint voluptates?
            </p>
          </div>
          <div
            class="
              sm:w-32 sm:order-none
              order-first
              sm:h-32
              h-20
              w-20
              sm:ml-10
              inline-flex
              items-center
              justify-center
              rounded-full
              bg-indigo-100
              text-indigo-500
              flex-shrink-0
            "
          >
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="sm:w-16 sm:h-16 w-10 h-10"
              viewBox="0 0 24 24"
            >
              <circle cx="6" cy="6" r="3"></circle>
              <circle cx="6" cy="18" r="3"></circle>
              <path
                d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"
              ></path>
            </svg>
          </div>
        </div>
        <div class="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
          <div
            class="
              sm:w-32 sm:h-32
              h-20
              w-20
              sm:mr-10
              inline-flex
              items-center
              justify-center
              rounded-full
              bg-indigo-100
              text-indigo-500
              flex-shrink-0
            "
          >
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="sm:w-16 sm:h-16 w-10 h-10"
              viewBox="0 0 24 24"
            >
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2
              class="
                text-gray-900 text-lg
                title-font
                font-medium
                mb-2
                font-serif
              "
            >
             Lorem, ipsum.
            </h2>
            <p class="leading-relaxed text-base font-mono">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora eos iure, repellendus nam cum nemo.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="footer">
      <div class="p-10 bg-indigo-900 text-indigo-400 flex justify-center">
        <div class="flex items-center">Copyright &copy;2021</div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>
<style  lang="scss">
.bg-orange-400 {
  background-color: #ffaf40;
  color: #4b4b4b;
}
.bg-gray-400 {
  color: #ffaf40;
  background-color: #4b4b4b;
}
.bg-blue-100 {
  background-color: #7efff5;
}
#team {
  background-color: #7efff5;
}
#faqs {
  background-color: #6574cd;
}
#story {
  background-color: #ffb8b8;
}
.tab-content {
  max-height: 0;
  -webkit-transition: max-height 0.35s;
  -o-transition: max-height 0.35s;
  transition: max-height 0.35s;
}

.tab input:checked ~ .tab-content {
  max-height: 100vh;
}

.tab input:checked + label {
  background-color: #f8fafc;
  color: #6574cd;
}

.tab label::after {
  float: right;
  right: 0;
  top: 0;
  display: block;
  width: 1.5em;
  height: 1.5em;
  line-height: 1.5;
  font-size: 1.25rem;
  text-align: center;
  -webkit-transition: all 0.35s;
  -o-transition: all 0.35s;
  transition: all 0.35s;
}

.tab input[type="checkbox"] + label::after {
  content: ">";
  font-weight: bold;
  border-width: 1px;
  border-radius: 9999px;
  border-color: #b8c2cc;
  display: flex;
  justify-content: center;
  align-items: center;
}

.tab input[type="checkbox"]:checked + label::after {
  transform: rotate(90deg);
  background-color: #000000;
  color: #f8fafc;
}

.tab input[type="radio"] + label::after {
  content: "\25BE";
  font-weight: bold;
  border-width: 1px;
  border-radius: 9999px;
  border-color: #b8c2cc;
}

.tab input[type="radio"]:checked + label::after {
  transform: rotateX(180deg);
  background-color: #6574cd;
  color: #f8fafc;
}
.tab {
  background-color: #18dcff;
  .tab-content {
    background-color: #18dcff;
  }
}
.tab:hover {
  background-color: #17c0eb;
}
</style>
