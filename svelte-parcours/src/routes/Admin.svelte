<script>
    import { link } from "svelte-spa-router";
    </script>

<body>
    <header class="top">
      <h1 class="headings-1">Virtual Card Manager</h1>
      <menu>
        <ul>
          <li><a href="index.html" class="link"use:link>Home</a></li>
          <li><a href="admin.html" class="link link--active"use:link>List all cards</a></li>
          <li><a href="create-cc.html" class="link"use:link>Create new card</a></li>
          <li><a href="index.html" class="link"use:link>Logout</a></li>
        </ul>
      </menu>
    </header>
    <main class="main">
      <section class="card-section" aria-label="Virtual Card Details">
        <div class="card-content">
          <div class="front-card">
            <img src="./images/card-logo.svg" alt="card logo" class="card-logo">
            <p class="vcard-number" id="vcard-number" aria-label="Number">0000 0000 0000 0000</p>
            <div class="flex">
              <p class="cardholder-name" id="vcard-holder" aria-label="Holder">JANE APPLESEED</p>
              <div class="card-date">
                <span class="month-iformation" id="vcard-mm" aria-label="Expiration (month)">00</span>/<span
                  class="year-information" id="vcard-yy" aria-label="Expiration (year)">00</span>
              </div>
            </div>
          </div>
          <!--front-card-->
          <div class="back-card">
            <p class="card-cvc" id="vcard-cvc" aria-label="CVC">000</p>
          </div>
        </div>
      </section>
      <!--card-section-->
  
      <section class="right-content">
        <h2 class="headings-2">Collaborators' cards</h2>
        <div class="filters">
          <form action="" method="get">
            Filter by
            <label for="filter_collaborator">collaborator</label>
            <select id="filter_collaborator" class="input">
              <option value="0">All</option>
              <option value="1">Jane Appleseed</option>
              <option value="2">Tim Berners-Lee</option>
              <option value="3">Linus Torvalds</option>
            </select>
            <strong>and</strong>
            <label for="filter_status">by status</label>
            <select id="filter_status" class="input">
              <option value="">All</option>
              <option value="available">Available</option>
              <option value="used">Used</option>
            </select>
          </form>
        </div>
        <article class="card" aria-label="For Jane Appleseed">
          <div class="card-left">
            <p class="card-collaborator">Jane Appleseed</p>
            <p class="card-number">4234856278962138</p>
          </div>
          <div class="card-right">
            <p class="card-amount">78 &euro;</p>
            <p class="card-actions">
              <button class="btn btn--show details" data-number="4234856278962138" data-holder="Jane Appleseed"
                data-mm="05" data-yy="25" data-cvc="902">Details</button>
              <button class="btn">Set as Used</button>
              <button class="btn btn--delete">Delete</button>
            </p>
          </div>
        </article>
        <article class="card" aria-label="For Tim Berners-Lee">
          <div class="card-left">
            <p class="card-collaborator">Tim Berners-Lee</p>
            <p class="card-number"><span class="card-status">Used</span> 4789654123658712</p>
          </div>
          <div class="card-right">
            <p class="card-amount">150 &euro;</p>
            <p class="card-actions">
              <button class="btn btn--show details" data-number="4789654123658712" data-holder="Tim Berners-Lee"
                data-mm="10" data-yy="25" data-cvc="249">Details</button>
              <button class="btn btn--edit">Set as Available</button>
              <button class="btn btn--delete">Delete</button>
            </p>
          </div>
        </article>
        <article class="card" aria-label="For Linus Torvalds">
          <div class="card-left">
            <p class="card-collaborator">Linus Torvalds</p>
            <p class="card-number">5896321458724596</p>
          </div>
          <div class="card-right">
            <p class="card-amount">199 &euro;</p>
            <p class="card-actions">
              <button class="btn btn--show details" data-number="5896321458724596" data-holder="Linus Torvalds"
                data-mm="05" data-yy="24" data-cvc="789">Details</button>
              <button class="btn">Set as Used</button>
              <button class="btn btn--delete">Delete</button>
            </p>
          </div>
        </article>
        <article class="card" aria-label="For Linus Torvalds">
          <div class="card-left">
            <p class="card-collaborator">Linus Torvalds</p>
            <p class="card-number"><span class="card-status">Used</span> 5263859632145785</p>
          </div>
          <div class="card-right">
            <p class="card-amount">487 &euro;</p>
            <p class="card-actions">
              <button class="btn btn--show details" data-number="5263859632145785" data-holder="Linus Torvalds"
                data-mm="02" data-yy="24" data-cvc="544">Details</button>
              <button class="btn btn--edit">Set as Available</button>
              <button class="btn btn--delete">Delete</button>
            </p>
          </div>
        </article>
        <article class="card" aria-label="For Jane Appleseed">
          <div class="card-left">
            <p class="card-collaborator">Jane Appleseed</p>
            <p class="card-number">4234856278962138</p>
          </div>
          <div class="card-right">
            <p class="card-amount">78 &euro;</p>
            <p class="card-actions">
              <button class="btn btn--show details" data-number="4234856278962138" data-holder="Jane Appleseed"
                data-mm="05" data-yy="25" data-cvc="902">Details</button>
              <button class="btn">Set as Used</button>
              <button class="btn btn--delete">Delete</button>
            </p>
          </div>
        </article>
        <article class="card" aria-label="For Tim Berners-Lee">
          <div class="card-left">
            <p class="card-collaborator">Tim Berners-Lee</p>
            <p class="card-number"><span class="card-status">Used</span> 4789654123658712</p>
          </div>
          <div class="card-right">
            <p class="card-amount">150 &euro;</p>
            <p class="card-actions">
              <button class="btn btn--show details" data-number="4789654123658712" data-holder="Tim Berners-Lee"
                data-mm="10" data-yy="25" data-cvc="249">Details</button>
              <button class="btn btn--edit">Set as Available</button>
              <button class="btn btn--delete">Delete</button>
            </p>
          </div>
        </article>
        <article class="card" aria-label="For Linus Torvalds">
          <div class="card-left">
            <p class="card-collaborator">Linus Torvalds</p>
            <p class="card-number">5896321458724596</p>
          </div>
          <div class="card-right">
            <p class="card-amount">199 &euro;</p>
            <p class="card-actions">
              <button class="btn btn--show details" data-number="5896321458724596" data-holder="Linus Torvalds"
                data-mm="05" data-yy="24" data-cvc="789">Details</button>
              <button class="btn">Set as Used</button>
              <button class="btn btn--delete">Delete</button>
            </p>
          </div>
        </article>
        <article class="card" aria-label="For Linus Torvalds">
          <div class="card-left">
            <p class="card-collaborator">Linus Torvalds</p>
            <p class="card-number"><span class="card-status">Used</span> 5263859632145785</p>
          </div>
          <div class="card-right">
            <p class="card-amount">487 &euro;</p>
            <p class="card-actions">
              <button class="btn btn--show details" data-number="5263859632145785" data-holder="Linus Torvalds"
                data-mm="02" data-yy="24" data-cvc="544">Details</button>
              <button class="btn btn--edit">Set as Available</button>
              <button class="btn btn--delete">Delete</button>
            </p>
          </div>
        </article>
        <article class="card" aria-label="For Jane Appleseed">
          <div class="card-left">
            <p class="card-collaborator">Jane Appleseed</p>
            <p class="card-number">4234856278962138</p>
          </div>
          <div class="card-right">
            <p class="card-amount">78 &euro;</p>
            <p class="card-actions">
              <button class="btn btn--show details" data-number="4234856278962138" data-holder="Jane Appleseed"
                data-mm="05" data-yy="25" data-cvc="902">Details</button>
              <button class="btn">Set as Used</button>
              <button class="btn btn--delete">Delete</button>
            </p>
          </div>
        </article>
        <article class="card" aria-label="For Tim Berners-Lee">
          <div class="card-left">
            <p class="card-collaborator">Tim Berners-Lee</p>
            <p class="card-number"><span class="card-status">Used</span> 4789654123658712</p>
          </div>
          <div class="card-right">
            <p class="card-amount">150 &euro;</p>
            <p class="card-actions">
              <button class="btn btn--show details" data-number="4789654123658712" data-holder="Tim Berners-Lee"
                data-mm="10" data-yy="25" data-cvc="249">Details</button>
              <button class="btn btn--edit">Set as Available</button>
              <button class="btn btn--delete">Delete</button>
            </p>
          </div>
        </article>
        <article class="card" aria-label="For Linus Torvalds">
          <div class="card-left">
            <p class="card-collaborator">Linus Torvalds</p>
            <p class="card-number">5896321458724596</p>
          </div>
          <div class="card-right">
            <p class="card-amount">199 &euro;</p>
            <p class="card-actions">
              <button class="btn btn--show details" data-number="5896321458724596" data-holder="Linus Torvalds"
                data-mm="05" data-yy="24" data-cvc="789">Details</button>
              <button class="btn">Set as Used</button>
              <button class="btn btn--delete">Delete</button>
            </p>
          </div>
        </article>
        <article class="card" aria-label="For Linus Torvalds">
          <div class="card-left">
            <p class="card-collaborator">Linus Torvalds</p>
            <p class="card-number"><span class="card-status">Used</span> 5263859632145785</p>
          </div>
          <div class="card-right">
            <p class="card-amount">487 &euro;</p>
            <p class="card-actions">
              <button class="btn btn--show details" data-number="5263859632145785" data-holder="Linus Torvalds"
                data-mm="02" data-yy="24" data-cvc="544">Details</button>
              <button class="btn btn--edit">Set as Available</button>
              <button class="btn btn--delete">Delete</button>
            </p>
          </div>
        </article>
      </section>
    </main>
    <script src="scripts/app.js"></script>
  </body>
  